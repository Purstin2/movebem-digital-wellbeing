import React from "react";
import { cn } from "@/lib/utils";
import { Exercise } from "@/types/onboarding";
import { DeepGlassCard } from "@/components/ui/deep-glass-card";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Target, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ExerciseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  exercise: Exercise | any;
  variant?: "default" | "featured" | "completed" | "upcoming";
  imageUrl?: string;
  compact?: boolean;
}

export function ExerciseCard({
  className,
  exercise,
  variant = "default",
  imageUrl,
  compact = false,
  ...props
}: ExerciseCardProps) {
  const navigate = useNavigate();

  // Verifica se exercise existe e tem propriedades necessárias
  if (!exercise) {
    return null;
  }

  const handleClick = () => {
    navigate(`/exercicios/${exercise.id || ''}`);
  };

  // Determinar o estilo do card baseado na variante
  const getCardVariant = () => {
    switch (variant) {
      case "featured":
        return "primary";
      case "completed":
        return "peaceful";
      case "upcoming":
        return "energetic";
      default:
        return "default";
    }
  };

  // Garantir que propriedades estão disponíveis com valores padrão
  const {
    title = "Exercício",
    description = "Descrição não disponível",
    duration = "5 min",
    difficulty = "beginner",
    category = "Geral",
    targetAreas = []
  } = exercise;

  // Tradução para os níveis de dificuldade
  const difficultyTranslations = {
    beginner: "Iniciante",
    intermediate: "Intermediário",
    advanced: "Avançado"
  };

  const translatedDifficulty = difficultyTranslations[difficulty as keyof typeof difficultyTranslations] || difficulty;

  return (
    <DeepGlassCard
      className={cn("w-full overflow-hidden transition-all", className)}
      variant={getCardVariant()}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      hover={true}
      {...props}
    >
      <div className="flex flex-col h-full">
        {/* Imagem do exercício - altura adaptada ao modo compacto */}
        {imageUrl && (
          <div className={cn(
            "w-full overflow-hidden",
            compact ? "h-16 sm:h-20" : "h-24 sm:h-28 md:h-32"
          )}>
            <img 
              src={imageUrl} 
              alt={`Imagem para ${title}`} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                // Substitui por uma imagem padrão em caso de erro
                e.currentTarget.src = '/placeholder-image.jpg';
              }}
            />
          </div>
        )}

        {/* Conteúdo do cartão com adaptações para modo compacto */}
        <div className={cn(
          "flex flex-col flex-grow",
          compact ? "p-2 sm:p-3" : "p-3 md:p-4"
        )}>
          {/* Cabeçalho com etiquetas */}
          <div className={cn(
            "flex flex-wrap",
            compact ? "gap-1 mb-1" : "gap-1.5 md:gap-2 mb-1.5 md:mb-2"
          )}>
            <span className={cn(
              "font-medium px-1.5 py-0.5 rounded-full bg-fenjes-purple/10 text-fenjes-purple",
              compact ? "text-[9px]" : "text-[10px] md:text-xs"
            )}>
              {category}
            </span>
            <span className={cn(
              "font-medium px-1.5 py-0.5 rounded-full bg-fenjes-yellow/10 text-fenjes-yellow-dark",
              compact ? "text-[9px]" : "text-[10px] md:text-xs"
            )}>
              {translatedDifficulty}
            </span>
            {variant === "completed" && (
              <span className={cn(
                "font-medium px-1.5 py-0.5 rounded-full bg-fenjes-green/10 text-fenjes-green",
                compact ? "text-[9px]" : "text-[10px] md:text-xs"
              )}>
                Concluído
              </span>
            )}
          </div>

          {/* Título e descrição */}
          <h3 className={cn(
            "font-semibold line-clamp-1",
            compact ? "text-sm mb-0.5" : "text-base md:text-lg mb-0.5 md:mb-1"
          )}>
            {title}
          </h3>
          <p className={cn(
            "text-gray-600 line-clamp-2 flex-grow",
            compact ? "text-xs mb-1.5" : "text-xs md:text-sm mb-2 md:mb-3"
          )}>
            {description}
          </p>

          {/* Informações adicionais */}
          <div className={cn(
            "flex items-center text-gray-500",
            compact ? "gap-1.5 text-[9px] mb-1.5" : "gap-2 md:gap-3 text-[10px] md:text-xs mb-2 md:mb-3"
          )}>
            <div className="flex items-center gap-1">
              <Clock size={compact ? 10 : 12} />
              <span>{duration}</span>
            </div>
            {targetAreas && targetAreas.length > 0 && (
              <div className="flex items-center gap-1">
                <Target size={compact ? 10 : 12} />
                <span>{targetAreas.slice(0, compact ? 1 : 2).join(", ")}</span>
              </div>
            )}
          </div>

          {/* Botão de ação */}
          <div className="flex justify-end mt-auto">
            <Button
              variant={variant === "featured" ? "secondary" : "outline"}
              size="sm"
              className={cn(
                "gap-1 group",
                compact ? "text-[10px] h-6 px-2" : "text-xs md:text-sm h-7 md:h-8"
              )}
              onClick={(e) => {
                e.stopPropagation();
                handleClick();
              }}
            >
              {variant === "completed" ? "Ver novamente" : "Iniciar"}
              <ChevronRight 
                size={compact ? 12 : 14} 
                className="transition-transform group-hover:translate-x-1" 
              />
            </Button>
          </div>
        </div>
      </div>
    </DeepGlassCard>
  );
}
