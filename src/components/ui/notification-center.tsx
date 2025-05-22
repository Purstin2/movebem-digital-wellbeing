import React, { useState, useEffect } from 'react';
import { Bell, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SmartNotification } from './smart-notification';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './sheet';
import { Button } from './button';
import { useSmartNotifications } from '@/hooks/use-smart-notifications';
import { ContextualNotification, CurrentUserState, UserJourney } from '@/types/notification';
import { EmptyState } from './empty-state';
import { useMediaQuery } from '@/hooks/use-media-query';

interface NotificationCenterProps extends React.HTMLAttributes<HTMLDivElement> {
  userState?: CurrentUserState;
  userJourney?: UserJourney;
}

export function NotificationCenter({ userState, userJourney, className }: NotificationCenterProps) {
  const [open, setOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const isMobile = useMediaQuery('(max-width: 640px)');
  
  // Detecta preferências de redução de movimento
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);
      } catch (e) {
        console.warn("Browser não suporta detecção de preferências de movimento");
      }
    }
  }, []);
  
  const {
    notifications,
    hasUnread,
    dismissNotification,
    markAllAsRead,
    isInitialized
  } = useSmartNotifications({
    userState,
    userJourney,
    maxNotifications: 10,
    persistNotifications: true
  });

  const handleOpen = (newOpenState: boolean) => {
    if (newOpenState && hasUnread) {
      // Marca como lido quando o usuário abre o centro de notificações
      markAllAsRead();
    }
    setOpen(newOpenState);
  };

  const handleDismiss = (notification: ContextualNotification) => {
    dismissNotification(notification.id);
  };

  // Agrupa notificações por tipo para uma melhor organização
  const groupedNotifications = notifications.reduce<Record<string, ContextualNotification[]>>((acc, notification) => {
    const group = notification.tone;
    if (!acc[group]) acc[group] = [];
    acc[group].push(notification);
    return acc;
  }, {});

  // Ordena grupos conforme prioridade
  const priorityOrder = ['celebratory', 'encouraging', 'supportive', 'welcoming', 'informative'];
  
  return (
    <div className={cn('relative', className)}>
      <Sheet open={open} onOpenChange={handleOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="outline" 
            size="icon"
            className="relative h-8 w-8 rounded-full"
            aria-label={hasUnread ? "Notificações não lidas" : "Notificações"}
          >
            <Bell size={18} className="text-fenjes-text-warm" />
            {hasUnread && (
              <span 
                className={cn(
                  "absolute top-0 right-0 h-3 w-3 rounded-full bg-fenjes-yellow",
                  !prefersReducedMotion && "animate-pulse-subtle"
                )}
                aria-hidden="true"
              />
            )}
          </Button>
        </SheetTrigger>
        <SheetContent 
          side={isMobile ? "bottom" : "right"} 
          className={cn(
            isMobile ? "h-[80vh] rounded-t-xl" : "w-[350px] sm:w-[400px] px-4"
          )}
        >
          <SheetHeader className="mb-4">
            <SheetTitle className="flex items-center justify-center">
              Notificações
              {hasUnread && (
                <span className="ml-2 bg-fenjes-yellow text-xs rounded-full px-2 py-0.5">
                  {notifications.filter(n => !n.read).length} não lida(s)
                </span>
              )}
            </SheetTitle>
            {notifications.length > 0 && (
              <div className="text-center">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={markAllAsRead} 
                  className="text-sm text-fenjes-purple"
                  disabled={!hasUnread}
                >
                  <CheckCircle size={14} className="mr-1" />
                  Marcar todas como lidas
                </Button>
              </div>
            )}
          </SheetHeader>
          
          <div className={cn(
            "space-y-2 mt-6", 
            isMobile ? "max-h-[calc(80vh-100px)] overflow-y-auto pb-16" : "max-h-[calc(100vh-200px)] overflow-y-auto pr-2"
          )}>
            {isInitialized && notifications.length > 0 ? (
              <>
                {/* Renderiza notificações por grupos em ordem de prioridade */}
                {priorityOrder.map(group => 
                  groupedNotifications[group] && groupedNotifications[group].length > 0 ? (
                    <div key={group} className="mb-4">
                      {groupedNotifications[group].map(notification => (
                        <SmartNotification
                          key={notification.id}
                          notification={notification}
                          onDismiss={() => handleDismiss(notification)}
                          disableAnimations={prefersReducedMotion}
                        />
                      ))}
                    </div>
                  ) : null
                )}
              </>
            ) : isInitialized ? (
              <EmptyState
                icon={<Bell size={40} className="text-gray-300" />}
                title="Sem notificações"
                description="Você não possui notificações no momento"
              />
            ) : (
              <div className="flex justify-center items-center h-32">
                <div className="w-8 h-8 rounded-full border-2 border-fenjes-purple border-t-transparent animate-spin"></div>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
} 