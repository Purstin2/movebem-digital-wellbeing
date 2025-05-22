import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { ContextualNotification } from "@/types/notification";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { useToast } from "@/hooks/use-toast";

interface SmartNotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  notification: ContextualNotification;
  onDismiss?: () => void;
  onAction?: (notification: ContextualNotification) => void;
  disableAnimations?: boolean;
}

export const SmartNotification = React.forwardRef<HTMLDivElement, SmartNotificationProps>(
  ({ className, notification, onDismiss, onAction, disableAnimations = false, ...props }, ref) => {
    const navigate = useNavigate();
    const { toast } = useToast();
    
    // Estilos com base no tom da notificação
    const toneStyles = {
      supportive: "border-l-4 border-l-fenjes-purple-light bg-fenjes-purple-light/10",
      encouraging: "border-l-4 border-l-fenjes-yellow bg-fenjes-yellow/10",
      celebratory: "border-l-4 border-l-fenjes-green bg-fenjes-green/10",
      welcoming: "border-l-4 border-l-fenjes-purple bg-fenjes-purple/10",
      informative: "border-l-4 border-l-fenjes-blue bg-fenjes-blue/10",
    };

    // Efeitos com base na urgência 
    const urgencyEffects = {
      gentle: "",
      normal: "shadow-md",
      excited: !disableAnimations ? "shadow-lg animate-pulse-subtle" : "shadow-lg",
      proud: !disableAnimations ? "shadow-xl animate-scale-in" : "shadow-xl",
    };

    // Dispara confetti para notificações especiais
    useEffect(() => {
      if (disableAnimations || !notification.special) return;

      if (notification.special === 'confetti') {
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            disableForReducedMotion: true
          });
        } catch (error) {
          console.warn("Erro ao exibir efeito confetti:", error);
          // Fallback para toast quando o confetti falha
          toast({
            title: "🎉 Conquista alcançada!",
            description: notification.title,
          });
        }
      }
    }, [notification.special, disableAnimations, toast, notification.title]);

    const handleAction = () => {
      try {
        if (onAction) {
          onAction(notification);
        } else if (notification.actionUrl) {
          navigate(notification.actionUrl);
        }
      } catch (error) {
        console.error("Erro ao processar ação da notificação:", error);
        toast({
          title: "Erro",
          description: "Não foi possível processar esta ação",
          variant: "destructive",
        });
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg p-4 mb-3",
          !disableAnimations ? "animate-fade-in" : "",
          toneStyles[notification.tone],
          urgencyEffects[notification.urgency],
          className
        )}
        role="alert"
        aria-live="polite"
        {...props}
      >
        <div className="flex items-start gap-3">
          {notification.icon && (
            <div className="text-2xl mt-1" aria-hidden="true">{notification.icon}</div>
          )}
          
          <div className="flex-1">
            <h4 className="font-semibold text-fenjes-text-warm text-base">
              {notification.title}
            </h4>
            
            <p className="text-gray-600 text-sm mt-1">
              {notification.body}
            </p>

            <div className="flex justify-between items-center mt-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-fenjes-purple hover:text-fenjes-purple-dark hover:bg-fenjes-purple-light/10"
                onClick={handleAction}
              >
                {notification.action}
              </Button>
              
              {onDismiss && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onDismiss}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Dispensar notificação"
                >
                  Dispensar
                </Button>
              )}
            </div>
          </div>
        </div>

        {notification.image && (
          <div className="mt-3">
            <img 
              src={`/images/notifications/${notification.image}`} 
              alt="" 
              className="w-full h-32 object-cover rounded-md"
              loading="lazy"
            />
          </div>
        )}
      </div>
    );
  }
);

SmartNotification.displayName = "SmartNotification"; 