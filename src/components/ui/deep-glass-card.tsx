import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type CardVariant = "default" | "primary" | "secondary" | "calm" | "energetic" | "peaceful" | "empowered";

interface DeepGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: CardVariant;
  hover?: boolean;
  lowPerformanceMode?: boolean;
  role?: string;
}

export const DeepGlassCard = React.forwardRef<HTMLDivElement, DeepGlassCardProps>(
  ({ 
    className, 
    children, 
    variant = "default", 
    hover = true, 
    lowPerformanceMode = false,
    role = "region",
    ...props 
  }, ref) => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const [isHighContrast, setIsHighContrast] = useState(false);

    useEffect(() => {
      if (typeof window === "undefined") return;
      
      // Detecta preferências de redução de movimento
      const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(motionQuery.matches);

      // Detecta se o usuário está usando modo de alto contraste
      const contrastQuery = window.matchMedia("(prefers-contrast: more)");
      setIsHighContrast(contrastQuery.matches);

      const handleMotionChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      const handleContrastChange = (e: MediaQueryListEvent) => {
        setIsHighContrast(e.matches);
      };

      try {
        motionQuery.addEventListener("change", handleMotionChange);
        contrastQuery.addEventListener("change", handleContrastChange);
        return () => {
          motionQuery.removeEventListener("change", handleMotionChange);
          contrastQuery.removeEventListener("change", handleContrastChange);
        };
      } catch (error) {
        // Fallback para navegadores antigos
        console.warn("Browser não suporta detecção de preferências de acessibilidade");
        return undefined;
      }
    }, []);

    // Classes base para todos os cards
    const baseClasses = "rounded-xl overflow-hidden relative transition-all duration-300";
    
    // Variantes adaptadas para modo de alto contraste quando necessário
    const variantClasses: Record<CardVariant, string> = {
      default: isHighContrast 
        ? "bg-white border-2 border-gray-600 shadow-lg" 
        : "bg-white/70 backdrop-blur-md border border-white/30 shadow-lg",
      primary: isHighContrast 
        ? "bg-white border-2 border-fenjes-purple shadow-lg" 
        : "bg-gradient-to-br from-fenjes-purple/10 to-fenjes-purple-light/20 backdrop-blur-md border border-fenjes-purple/20 shadow-lg",
      secondary: isHighContrast 
        ? "bg-white border-2 border-fenjes-yellow shadow-lg" 
        : "bg-gradient-to-br from-fenjes-yellow/10 to-fenjes-yellow/20 backdrop-blur-md border border-fenjes-yellow/20 shadow-lg",
      calm: isHighContrast
        ? "bg-white border-2 border-purple-600 shadow-lg"
        : "bg-gradient-to-br from-[#B19CD9]/20 to-[#B19CD9]/10 backdrop-blur-md border border-[#B19CD9]/30 shadow-lg",
      energetic: isHighContrast
        ? "bg-white border-2 border-pink-600 shadow-lg"
        : "bg-gradient-to-br from-[#9747FF]/10 to-[#FF6B9D]/10 backdrop-blur-md border border-[#9747FF]/20 shadow-lg",
      peaceful: isHighContrast
        ? "bg-white border-2 border-green-600 shadow-lg"
        : "bg-gradient-to-br from-[#9CAF88]/10 to-[#A8E6CF]/10 backdrop-blur-md border border-[#9CAF88]/20 shadow-lg",
      empowered: isHighContrast
        ? "bg-white border-2 border-orange-600 shadow-lg"
        : "bg-gradient-to-br from-[#7432B4]/10 to-[#FF8C42]/10 backdrop-blur-md border border-[#7432B4]/20 shadow-lg"
    };

    // Determina se deve aplicar efeito de hover baseado nas preferências
    const shouldApplyHoverEffect = hover && !prefersReducedMotion && !lowPerformanceMode;

    // Reduz ou remove o efeito de blur para melhor desempenho em dispositivos de baixo desempenho
    const getPerformanceClasses = () => {
      if (lowPerformanceMode) {
        return "backdrop-blur-none";
      }
      return "";
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseClasses, 
          variantClasses[variant], 
          shouldApplyHoverEffect && "deep-glass-card",
          lowPerformanceMode && getPerformanceClasses(),
          className
        )}
        role={role}
        {...props}
      >
        {children}
      </div>
    );
  }
);

DeepGlassCard.displayName = "DeepGlassCard"; 