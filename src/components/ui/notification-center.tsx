import React, { useState, useEffect, useCallback } from 'react';
import { Bell, CheckCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SmartNotification } from './smart-notification';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './sheet';
import { Button } from './button';
import { useSmartNotifications } from '@/hooks/use-smart-notifications';
import { ContextualNotification, CurrentUserState, UserJourney } from '@/types/notification';
import { EmptyState } from './empty-state';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Badge } from './badge';

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

  const handleDismiss = useCallback((notification: ContextualNotification) => {
    dismissNotification(notification.id);
  }, [dismissNotification]);

  // Conta notificações não lidas
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className={cn('relative', className)}>
      <Sheet open={open} onOpenChange={handleOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="outline" 
            size="icon"
            className={cn(
              "relative h-8 w-8 md:h-9 md:w-9 rounded-full bg-white", 
              hasUnread && !prefersReducedMotion && "animate-pulse-subtle"
            )}
            aria-label={hasUnread ? `${unreadCount} notificações não lidas` : "Notificações"}
          >
            <Bell size={16} className="md:size-18 text-fenjes-purple" />
            {hasUnread && (
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 md:-top-2 md:-right-2 h-4 w-4 md:h-5 md:w-5 p-0 flex items-center justify-center rounded-full text-[9px] md:text-[10px]"
              >
                {unreadCount}
              </Badge>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent 
          side={isMobile ? "bottom" : "right"} 
          className={cn(
            isMobile ? "h-[85vh] rounded-t-xl" : "w-[350px] sm:w-[400px] px-4"
          )}
        >
          <SheetHeader className="mb-4 bg-fenjes-purple text-white mx-[-24px] px-4 md:px-6 py-3 md:py-4 rounded-t-lg shadow-sm">
            <SheetTitle className="flex items-center justify-between text-white">
              <span className="flex items-center gap-1.5 md:gap-2 text-base md:text-lg">
                <Bell size={18} className="md:size-20" />
                Notificações
              </span>
              {hasUnread && (
                <Badge variant="secondary" className="bg-white text-fenjes-purple text-[10px] md:text-xs py-0 px-1.5 md:px-2">
                  {unreadCount} {unreadCount === 1 ? 'nova' : 'novas'}
                </Badge>
              )}
            </SheetTitle>
          </SheetHeader>
          
          {/* Barra de ações */}
          {notifications.length > 0 && (
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <span className="text-xs md:text-sm text-gray-500">
                {notifications.length} {notifications.length === 1 ? 'mensagem' : 'mensagens'}
              </span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={markAllAsRead} 
                className="text-xs md:text-sm text-fenjes-purple h-7 md:h-8"
                disabled={!hasUnread}
              >
                <CheckCircle size={12} className="md:size-14 mr-1" />
                Marcar lidas
              </Button>
            </div>
          )}
          
          <div className={cn(
            "mt-2", 
            isMobile ? "max-h-[calc(85vh-140px)] overflow-y-auto pb-16" : "max-h-[calc(100vh-240px)] overflow-y-auto pr-1"
          )}>
            {isInitialized && notifications.length > 0 ? (
              <div className="space-y-2 md:space-y-3">
                {notifications.map(notification => (
                  <SmartNotification
                    key={notification.id}
                    notification={notification}
                    onDismiss={() => handleDismiss(notification)}
                    disableAnimations={prefersReducedMotion}
                  />
                ))}
              </div>
            ) : isInitialized ? (
              <EmptyState
                icon={<Bell size={30} className="md:size-40 text-gray-300" />}
                title="Sem notificações"
                description="Você não possui notificações no momento"
              />
            ) : (
              <div className="flex justify-center items-center h-32">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-fenjes-purple border-t-transparent animate-spin"></div>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
} 