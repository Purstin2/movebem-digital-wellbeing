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
}

export function ExerciseCard({
  className,
  exercise,
  variant = "default",
  imageUrl,
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
        {/* Imagem do exercício - altura fixa para manter consistência */}
        {imageUrl && (
          <div className="w-full h-24 sm:h-28 md:h-32 overflow-hidden">
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

        {/* Conteúdo do cartão - padding menor em mobile */}
        <div className="p-3 md:p-4 flex flex-col flex-grow">
          {/* Cabeçalho com etiquetas - texto menor em mobile */}
          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-1.5 md:mb-2">
            <span className="text-[10px] md:text-xs font-medium px-1.5 py-0.5 rounded-full bg-fenjes-purple/10 text-fenjes-purple">
              {category}
            </span>
            <span className="text-[10px] md:text-xs font-medium px-1.5 py-0.5 rounded-full bg-fenjes-yellow/10 text-fenjes-yellow-dark">
              {translatedDifficulty}
            </span>
            {variant === "completed" && (
              <span className="text-[10px] md:text-xs font-medium px-1.5 py-0.5 rounded-full bg-fenjes-green/10 text-fenjes-green">
                Concluído
              </span>
            )}
          </div>

          {/* Título e descrição - tamanhos adaptados para mobile */}
          <h3 className="text-base md:text-lg font-semibold mb-0.5 md:mb-1 line-clamp-1">{title}</h3>
          <p className="text-xs md:text-sm text-gray-600 line-clamp-2 mb-2 md:mb-3 flex-grow">
            {description}
          </p>

          {/* Informações adicionais - menor em mobile */}
          <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs text-gray-500 mb-2 md:mb-3">
            <div className="flex items-center gap-1">
              <Clock size={12} className="md:size-14" />
              <span>{duration}</span>
            </div>
            {targetAreas && targetAreas.length > 0 && (
              <div className="flex items-center gap-1">
                <Target size={12} className="md:size-14" />
                <span>{targetAreas.slice(0, 2).join(", ")}</span>
              </div>
            )}
          </div>

          {/* Botão de ação - ajustado para mobile */}
          <div className="flex justify-end mt-auto">
            <Button
              variant={variant === "featured" ? "secondary" : "outline"}
              size="sm"
              className="gap-1 group text-xs md:text-sm h-7 md:h-8"
              onClick={(e) => {
                e.stopPropagation();
                handleClick();
              }}
            >
              {variant === "completed" ? "Ver novamente" : "Iniciar"}
              <ChevronRight 
                size={14} 
                className="transition-transform group-hover:translate-x-1" 
              />
            </Button>
          </div>
        </div>
      </div>
    </DeepGlassCard>
  );
}
