import { useState, useEffect } from "react";
import { Bell, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface Notification {
  id: string;
  title: string;
  description: string;
  type: "exercise" | "achievement" | "info" | "system";
  read: boolean;
  action?: {
    label: string;
    href: string;
  };
  createdAt: string;
}

export function NotificationsPanel() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;
  
  // Carregar notificações na inicialização
  useEffect(() => {
    try {
      const savedNotifications = localStorage.getItem('fenjes-notifications');
      if (savedNotifications) {
        setNotifications(JSON.parse(savedNotifications));
      } else {
        // Criar notificações iniciais se não existirem
        const defaultNotifications: Notification[] = [
          {
            id: "n1",
            title: "Essa energia está incrível!",
            description: "Aproveite esse momento para um exercício mais desafiador. Você consegue!",
            type: "exercise",
            read: false,
            action: {
              label: "Ver Exercícios Energizantes",
              href: "/chair-yoga",
            },
            createdAt: new Date().toISOString(),
          },
          {
            id: "n2",
            title: "Sua jornada começa hoje",
            description: "Você acabou de plantar a semente da sua transformação. Que orgulho!",
            type: "info",
            read: false,
            action: {
              label: "Começar Primeiro Exercício",
              href: "/chair-yoga",
            },
            createdAt: new Date().toISOString(),
          }
        ];
        setNotifications(defaultNotifications);
        localStorage.setItem('fenjes-notifications', JSON.stringify(defaultNotifications));
      }
    } catch (error) {
      console.error("Erro ao carregar notificações:", error);
    }
  }, []);
  
  // Salvar notificações quando alteradas
  useEffect(() => {
    localStorage.setItem('fenjes-notifications', JSON.stringify(notifications));
  }, [notifications]);
  
  // Função para marcar uma notificação como lida
  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true } 
          : notification
      )
    );
  };
  
  // Função para dispensar uma notificação
  const dismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };
  
  // Função para marcar todas as notificações como lidas
  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };
  
  // Adicionar uma nova notificação programaticamente
  const addNotification = (notification: Omit<Notification, "id" | "createdAt" | "read">) => {
    const newNotification: Notification = {
      ...notification,
      id: `n${Date.now()}`,
      createdAt: new Date().toISOString(),
      read: false,
    };
    
    setNotifications(prev => [newNotification, ...prev]);
    return newNotification.id;
  };
  
  // Função para obter o ícone do tipo de notificação
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "exercise":
        return "🧘‍♀️";
      case "achievement":
        return "🏆";
      case "info":
        return "ℹ️";
      case "system":
        return "⚙️";
      default:
        return "📝";
    }
  };
  
  // Exportar a função para uso em outros componentes
  useEffect(() => {
    // Adicionar a função ao window para poder ser acessada globalmente
    (window as any).addFenjesNotification = addNotification;
    
    return () => {
      delete (window as any).addFenjesNotification;
    };
  }, []);
  
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="relative"
          aria-label="Notificações"
        >
          <Bell size={20} />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-sm p-0">
        <SheetHeader className="p-4 border-b">
          <div className="flex justify-between items-center">
            <SheetTitle className="flex items-center">
              <Bell size={18} className="mr-2" /> Notificações
            </SheetTitle>
            {unreadCount > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs"
                onClick={markAllAsRead}
              >
                Marcar todas
              </Button>
            )}
          </div>
        </SheetHeader>
        
        <div className="overflow-y-auto h-[calc(100vh-80px)]">
          {notifications.length > 0 ? (
            <div className="divide-y">
              {notifications.map(notification => (
                <div 
                  key={notification.id} 
                  className={cn(
                    "p-4 relative transition-colors",
                    !notification.read && "bg-fenjes-purple/5"
                  )}
                >
                  <div className="flex">
                    <div className="mr-3 mt-1 text-lg">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 pr-8">
                      <h4 className="font-medium text-sm">{notification.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{notification.description}</p>
                      
                      {notification.action && (
                        <SheetClose asChild>
                          <Button
                            variant="link"
                            size="sm"
                            className="text-fenjes-purple p-0 h-auto text-xs mt-2"
                            onClick={() => markAsRead(notification.id)}
                            asChild
                          >
                            <a href={notification.action.href}>
                              {notification.action.label}
                            </a>
                          </Button>
                        </SheetClose>
                      )}
                    </div>
                    <button
                      className="absolute top-2 right-2 text-gray-400 hover:text-gray-500 p-1"
                      onClick={() => dismissNotification(notification.id)}
                      aria-label="Dispensar notificação"
                    >
                      <X size={14} />
                    </button>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-400">
                      {new Date(notification.createdAt).toLocaleDateString()}
                    </span>
                    {!notification.read && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs h-5 py-0 px-2"
                        onClick={() => markAsRead(notification.id)}
                      >
                        Dispensar
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-40 text-center p-4">
              <Bell size={24} className="text-gray-300 mb-2" />
              <h3 className="text-sm font-medium">Nenhuma notificação</h3>
              <p className="text-xs text-gray-500 mt-1">
                Você não tem notificações no momento
              </p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

// API para adicionar notificações em qualquer lugar do app
export function addNotification(notification: Omit<Notification, "id" | "createdAt" | "read">) {
  if (typeof window !== 'undefined' && (window as any).addFenjesNotification) {
    return (window as any).addFenjesNotification(notification);
  }
  return null;
} 