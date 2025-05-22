import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

interface BreathingButtonProps extends ButtonProps {
  breathingEffect?: boolean;
  lowPerformanceMode?: boolean;
  children: React.ReactNode;
}

export const BreathingButton = React.forwardRef<HTMLButtonElement, BreathingButtonProps>(
  ({ breathingEffect = true, lowPerformanceMode = false, className, children, ...props }, ref) => {
    const [isActive, setIsActive] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    // Verifica se o usuário prefere movimento reduzido (acessibilidade)
    useEffect(() => {
      if (typeof window === "undefined") return;
      
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      // Adiciona listener para mudanças na preferência do usuário
      try {
        // Abordagem moderna
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
      } catch (error) {
        // Fallback para navegadores antigos que não suportam addEventListener
        try {
          // @ts-ignore - Ignorando erro de tipagem para compatibilidade com navegadores antigos
          mediaQuery.addListener(handleChange);
          return () => {
            // @ts-ignore - Ignorando erro de tipagem para compatibilidade com navegadores antigos
            mediaQuery.removeListener(handleChange);
          };
        } catch (e) {
          // Se nada funcionar, pelo menos não quebra
          console.warn('Browser não suporta detecção de prefers-reduced-motion');
          return undefined;
        }
      }
    }, []);

    // Inicia a animação de respiração após um pequeno delay
    useEffect(() => {
      if (!breathingEffect || prefersReducedMotion || lowPerformanceMode) return;
      
      // Inicia a animação com uma transição suave
      const timeout = setTimeout(() => {
        setIsActive(true);
      }, 500);

      return () => clearTimeout(timeout);
    }, [breathingEffect, prefersReducedMotion, lowPerformanceMode]);

    // Determina as classes CSS com base nas configurações
    const getAnimationClass = () => {
      if (!breathingEffect) return "";
      if (prefersReducedMotion || lowPerformanceMode) return "hover:scale-105 active:scale-95";
      if (isActive) return "breathing-button";
      return "";
    };

    return (
      <Button
        ref={ref}
        className={cn(
          "relative transition-all duration-300",
          getAnimationClass(),
          className
        )}
        {...props}
        // Adiciona atributos ARIA para melhorar acessibilidade
        aria-busy={props.disabled}
      >
        {children}
      </Button>
    );
  }
);

BreathingButton.displayName = "BreathingButton"; 