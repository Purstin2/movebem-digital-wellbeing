import { useState, useEffect, useCallback, useRef } from "react";
import { ContextualNotification, CurrentUserState, UserJourney } from "@/types/notification";
import { generateContextualNotification, createNotificationStory } from "@/utils/notification-service";

interface UseSmartNotificationsProps {
  userState?: CurrentUserState;
  userJourney?: UserJourney;
  maxNotifications?: number;
  persistNotifications?: boolean;
}

const STORAGE_KEY = "fenjes-notifications";

export function useSmartNotifications({
  userState,
  userJourney,
  maxNotifications = 3,
  persistNotifications = true
}: UseSmartNotificationsProps = {}) {
  const [notifications, setNotifications] = useState<ContextualNotification[]>([]);
  const [hasUnread, setHasUnread] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const processedNotifications = useRef<Set<string>>(new Set());
  
  // Carrega notificações do armazenamento local
  useEffect(() => {
    if (!persistNotifications || isInitialized) return;
    
    try {
      const storedNotifications = localStorage.getItem(STORAGE_KEY);
      if (storedNotifications) {
        const parsedNotifications = JSON.parse(storedNotifications) as ContextualNotification[];
        setNotifications(parsedNotifications);
        
        // Verifica se há notificações não lidas
        const hasAnyUnread = parsedNotifications.some(n => !n.read);
        setHasUnread(hasAnyUnread);
        
        // Inicializa o conjunto de notificações já processadas
        parsedNotifications.forEach(n => {
          processedNotifications.current.add(n.id);
        });
      }
    } catch (error) {
      console.error("Erro ao carregar notificações do armazenamento local:", error);
    } finally {
      setIsInitialized(true);
    }
  }, [persistNotifications, isInitialized]);
  
  // Persiste notificações no armazenamento local
  useEffect(() => {
    if (!persistNotifications || !isInitialized || notifications.length === 0) return;
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications));
    } catch (error) {
      console.error("Erro ao salvar notificações no armazenamento local:", error);
    }
  }, [notifications, persistNotifications, isInitialized]);

  // Verifica jornada do usuário e adiciona notificações de storytelling
  useEffect(() => {
    if (!userJourney || !isInitialized) return;

    try {
      const storyNotifications = createNotificationStory(userJourney);
      const todayNotification = storyNotifications.find(story => story.day === userJourney.currentDay);

      if (todayNotification) {
        const notificationId = `story-day-${todayNotification.day}`;
        
        // Verifica se essa notificação já foi processada
        if (processedNotifications.current.has(notificationId)) {
          return;
        }
        
        // Adiciona ao conjunto de notificações processadas
        processedNotifications.current.add(notificationId);
        
        // Transforma a notificação de história em notificação contextual
        const notification: ContextualNotification = {
          id: notificationId,
          title: todayNotification.notification.title,
          body: todayNotification.notification.body,
          action: todayNotification.notification.action,
          actionUrl: todayNotification.notification.actionUrl,
          tone: todayNotification.timing === "celebration" ? "celebratory" : "informative",
          urgency: todayNotification.timing === "celebration" ? "proud" : "normal",
          image: todayNotification.notification.image,
          special: todayNotification.notification.special,
          read: false,
          createdAt: new Date()
        };

        setNotifications(prev => {
          // Evita duplicação
          if (prev.some(n => n.id === notification.id)) return prev;
          return [notification, ...prev].slice(0, maxNotifications);
        });
        setHasUnread(true);
      }
    } catch (error) {
      console.error("Erro ao processar notificações de storytelling:", error);
    }
  }, [userJourney, maxNotifications, isInitialized]);

  // Gera notificações contextuais baseadas no estado do usuário
  useEffect(() => {
    if (!userState || !isInitialized) return;

    try {
      // Caso especial: Se o usuário está ausente há mais de 2 dias, cria notificação de "sentimos sua falta"
      if (
        userState.emotionalState === "missed" && 
        userState.lastActiveDate && 
        new Date().getTime() - userState.lastActiveDate.getTime() > 48 * 60 * 60 * 1000
      ) {
        const notification = generateContextualNotification(userState);
        
        // Verifica se essa notificação já foi processada
        if (processedNotifications.current.has(notification.id)) {
          return;
        }
        
        // Adiciona ao conjunto de notificações processadas
        processedNotifications.current.add(notification.id);
        
        setNotifications(prev => {
          // Evita duplicação de notificações de ausência
          if (prev.some(n => n.title.includes("Sentimos sua falta"))) return prev;
          return [notification, ...prev].slice(0, maxNotifications);
        });
        setHasUnread(true);
      }
      
      // Para outros estados emocionais, gera notificações com taxa controlada
      else if (["struggling", "motivated", "consistent"].includes(userState.emotionalState)) {
        const notification = generateContextualNotification(userState);
        
        // Verifica se essa notificação já foi processada
        if (processedNotifications.current.has(notification.id)) {
          return;
        }
        
        // Limita frequência verificando se já existe uma notificação similar nas últimas 24h
        const hasSimilarRecently = notifications.some(
          n => n.tone === notification.tone &&
          new Date().getTime() - n.createdAt.getTime() < 24 * 60 * 60 * 1000
        );
        
        if (!hasSimilarRecently) {
          // Adiciona ao conjunto de notificações processadas
          processedNotifications.current.add(notification.id);
          
          setNotifications(prev => [notification, ...prev].slice(0, maxNotifications));
          setHasUnread(true);
        }
      }
    } catch (error) {
      console.error("Erro ao gerar notificações contextuais:", error);
    }
  }, [userState, notifications, maxNotifications, isInitialized]);

  const dismissNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
    setHasUnread(false);
  }, []);

  const addNotification = useCallback((notification: ContextualNotification) => {
    // Verifica se essa notificação já foi processada
    if (processedNotifications.current.has(notification.id)) {
      return;
    }
    
    // Adiciona ao conjunto de notificações processadas
    processedNotifications.current.add(notification.id);
    
    setNotifications(prev => [notification, ...prev].slice(0, maxNotifications));
    setHasUnread(true);
  }, [maxNotifications]);
  
  // Limpa notificações expiradas
  useEffect(() => {
    if (!isInitialized) return;
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      
      setNotifications(prev => 
        prev.filter(notification => {
          // Remove se tiver data de expiração e já passou
          if (notification.expiresAt && now > notification.expiresAt.getTime()) {
            return false;
          }
          return true;
        })
      );
    }, 60000); // Verifica a cada minuto
    
    return () => clearInterval(interval);
  }, [isInitialized]);

  return {
    notifications,
    hasUnread,
    dismissNotification,
    markAllAsRead,
    addNotification,
    isInitialized
  };
} 