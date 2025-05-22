import React, { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Award, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export interface Milestone {
  value: number;
  label: string;
  icon: React.ReactNode;
  achieved?: boolean;
}

interface CelebratoryProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  milestones?: Milestone[];
  color?: string;
  showAnimation?: boolean;
  lowPerformanceMode?: boolean;
  onMilestoneReached?: (milestone: Milestone) => void;
}

export const CelebratoryProgress = React.forwardRef<HTMLDivElement, CelebratoryProgressProps>(
  ({ 
    className, 
    value, 
    max = 100, 
    milestones = [], 
    color = "bg-fenjes-purple",
    showAnimation = true,
    lowPerformanceMode = false,
    onMilestoneReached,
    ...props 
  }, ref) => {
    const [activeValue, setActiveValue] = useState(0);
    const [activeMilestones, setActiveMilestones] = useState<number[]>([]);
    const [celebrating, setCelebrating] = useState<number | null>(null);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const progressValue = (value / max) * 100;
    const { toast } = useToast();
    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 640 : false;

    // Detecta preferências de redução de movimento
    useEffect(() => {
      if (typeof window !== "undefined") {
        try {
          const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
          setPrefersReducedMotion(mediaQuery.matches);

          const handleChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);
          };
          
          // Adiciona listener para mudanças na preferência do usuário
          mediaQuery.addEventListener("change", handleChange);
          return () => mediaQuery.removeEventListener("change", handleChange);
        } catch (error) {
          console.warn("Browser não suporta detecção de preferências de movimento");
        }
      }
    }, []);

    // Default milestones if none provided
    const defaultMilestones: Milestone[] = [
      { value: 25, label: "Começando", icon: <CheckCircle2 size={16} className="text-fenjes-purple" /> },
      { value: 50, label: "Meio Caminho", icon: <Star size={16} className="text-fenjes-yellow" /> },
      { value: 75, label: "Quase Lá", icon: <Award size={16} className="text-fenjes-green" /> },
      { value: 100, label: "Conquista Completa", icon: <Trophy size={16} className="text-fenjes-yellow" /> },
    ];

    // Use milestones fornecidos ou os padrões, mas limita em telas menores para evitar sobreposição
    const effectiveMilestones = (() => {
      const availableMilestones = milestones.length > 0 ? milestones : defaultMilestones;
      
      // Em telas pequenas, limita o número de marcos para evitar sobreposição
      if (isMobile && availableMilestones.length > 3) {
        // Mantém o primeiro, o do meio e o último
        return [
          availableMilestones[0],
          availableMilestones[Math.floor(availableMilestones.length / 2)],
          availableMilestones[availableMilestones.length - 1]
        ];
      }
      
      return availableMilestones;
    })();

    // Celebra um milestone de forma segura
    const celebrateMilestone = useCallback((milestone: Milestone) => {
      setCelebrating(milestone.value);
      
      if (onMilestoneReached) {
        try {
          onMilestoneReached(milestone);
        } catch (error) {
          console.error("Erro ao chamar onMilestoneReached:", error);
        }
      }
      
      // Função de toast para milestone como notificação alternativa à animação
      if (prefersReducedMotion || lowPerformanceMode) {
        toast({
          title: `Parabéns! ${milestone.label}`,
          description: `Você alcançou ${milestone.value}% do seu objetivo!`,
          duration: 3000,
        });
      }
      
      // Remove a celebração após um tempo
      setTimeout(() => setCelebrating(null), 2000);
    }, [onMilestoneReached, prefersReducedMotion, lowPerformanceMode, toast]);

    useEffect(() => {
      if (!showAnimation || prefersReducedMotion || lowPerformanceMode) {
        setActiveValue(progressValue);
        return;
      }
      
      // Animação da barra de progresso
      const timeout = setTimeout(() => {
        setActiveValue(progressValue);
      }, 300);
      
      return () => clearTimeout(timeout);
    }, [progressValue, showAnimation, prefersReducedMotion, lowPerformanceMode]);

    // Verifica conquistas de milestones
    useEffect(() => {
      effectiveMilestones.forEach(milestone => {
        const milestoneValue = (milestone.value / max) * 100;
        if (activeValue >= milestoneValue && !activeMilestones.includes(milestone.value)) {
          setActiveMilestones(prev => [...prev, milestone.value]);
          celebrateMilestone(milestone);
        }
      });
    }, [activeValue, effectiveMilestones, activeMilestones, max, celebrateMilestone]);

    return (
      <div ref={ref} className={cn("relative w-full", className)} {...props}>
        <Progress 
          value={activeValue} 
          className={`h-4 ${color}`} 
          aria-label={`Progresso: ${Math.round(activeValue)}%`}
          aria-valuenow={Math.round(activeValue)}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        
        {/* Milestones */}
        <div className="relative">
          {effectiveMilestones.map((milestone) => {
            const milestoneValue = (milestone.value / max) * 100;
            const isAchieved = activeValue >= milestoneValue;
            
            return (
              <div 
                key={milestone.value} 
                className={cn(
                  "absolute top-0 transform -translate-y-1/2 transition-all",
                  celebrating === milestone.value ? "milestone-celebrating" : ""
                )}
                style={{ left: `${milestoneValue}%` }}
                aria-label={`Marco: ${milestone.label} - ${isAchieved ? 'Conquistado' : 'Não conquistado'}`}
              >
                <div 
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center -mt-4",
                    isAchieved 
                      ? "bg-white border-2 border-fenjes-purple shadow-lg" 
                      : "bg-gray-100 border border-gray-300"
                  )}
                >
                  {isAchieved ? (
                    milestone.icon || <CheckCircle2 size={16} className="text-fenjes-purple" />
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  )}
                </div>
                {isAchieved && celebrating === milestone.value && !prefersReducedMotion && !lowPerformanceMode && (
                  <div className="absolute top-0 left-0 w-full h-full">
                    {/* Partículas de celebração com classes específicas */}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          `absolute w-1 h-1 rounded-full bg-fenjes-${i % 2 ? 'yellow' : 'purple'} celebration-particle-${i}`,
                          i > 3 && isMobile && "celebration-particle-mobile-hidden" // Esconde partículas extras em mobile
                        )}
                        style={{
                          left: '50%',
                          top: '50%'
                        }}
                      />
                    ))}
                  </div>
                )}
                <div className={cn(
                  "absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap",
                  isAchieved ? "text-fenjes-text-warm font-medium" : "text-gray-400",
                  isMobile && "milestone-label-mobile" // Esconde rótulo em mobile para economizar espaço
                )}>
                  {milestone.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CelebratoryProgress.displayName = "CelebratoryProgress"; 