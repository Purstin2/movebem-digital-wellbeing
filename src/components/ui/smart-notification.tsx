import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { ContextualNotification } from "@/types/notification";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

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

    // Determina se a notificação tem imagem e como ela deve ser exibida
    const hasImage = Boolean(notification.image);
    const imageUrl = notification.image?.startsWith('http') 
      ? notification.image 
      : notification.image ? `/images/notifications/${notification.image}` : '';

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg overflow-hidden shadow-sm",
          !disableAnimations ? "animate-fade-in" : "",
          !hasImage ? toneStyles[notification.tone] : "",
          urgencyEffects[notification.urgency],
          className
        )}
        role="alert"
        aria-live="polite"
        {...props}
      >
        {/* Imagem da notificação (quando disponível) - altura menor em mobile */}
        {hasImage && (
          <div className="w-full h-24 sm:h-28 md:h-32 overflow-hidden">
            <img 
              src={imageUrl}
              alt="" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        
        {/* Conteúdo da notificação - padding menor em mobile */}
        <div className={cn(
          "p-3 md:p-4 relative",
          !hasImage && notification.read ? "opacity-75" : "",
          hasImage ? toneStyles[notification.tone].replace("border-l-4 ", "") : ""
        )}>
          <div className="flex items-start gap-2 md:gap-3">
            {notification.icon && (
              <div className="text-xl md:text-2xl flex-shrink-0" aria-hidden="true">{notification.icon}</div>
            )}
            
            <div className="flex-1 pr-6">
              <h4 className="font-semibold text-fenjes-text-warm text-sm md:text-base">
                {notification.title}
                {!notification.read && (
                  <span className="inline-block ml-2 w-2 h-2 rounded-full bg-fenjes-yellow"></span>
                )}
              </h4>
              
              <p className="text-xs md:text-sm text-gray-600 mt-0.5 md:mt-1 line-clamp-3">
                {notification.body}
              </p>

              <div className="flex flex-wrap justify-between items-center gap-2 mt-2 md:mt-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-fenjes-purple hover:text-fenjes-purple-dark hover:bg-fenjes-purple-light/10 text-xs h-7 md:text-sm md:h-8"
                  onClick={handleAction}
                >
                  {notification.action}
                </Button>
                
                {onDismiss && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onDismiss}
                    className="text-gray-400 hover:text-gray-600 text-xs h-7 md:text-sm md:h-8 sm:ml-auto"
                    aria-label="Dispensar notificação"
                  >
                    Dispensar
                  </Button>
                )}
              </div>
            </div>

            {/* Botão de fechar absoluto - mais fácil para mobile */}
            {onDismiss && (
              <button 
                onClick={onDismiss}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 rounded-full p-0.5 hover:bg-gray-100 transition-colors"
                aria-label="Fechar notificação"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

SmartNotification.displayName = "SmartNotification"; 