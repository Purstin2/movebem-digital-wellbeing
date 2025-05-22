import React from "react";
import { cn } from "@/lib/utils";
import { ChairYogaExercise } from "@/types/chair-yoga";
import { DeepGlassCard } from "@/components/ui/deep-glass-card";
import { Button } from "@/components/ui/button";
import { Clock, ChevronRight } from "lucide-react";

interface ChairExerciseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  exercise: ChairYogaExercise;
  variant?: "default" | "featured" | "recommended";
  showDetails?: boolean;
  isRecommended?: boolean;
}

export function ChairExerciseCard({
  className,
  exercise,
  variant = "default",
  showDetails = false,
  isRecommended = false,
  ...props
}: ChairExerciseCardProps) {
  // Verify if exercise exists
  if (!exercise) {
    return null;
  }

  // Determine the style of the card based on the variant
  const getCardVariant = () => {
    switch (variant) {
      case "featured":
        return "primary";
      case "recommended":
        return "energetic";
      default:
        return "default";
    }
  };

  // Get category display name
  const getCategoryDisplay = (category: string) => {
    switch (category) {
      case "neck":
        return "Libertação Cervical";
      case "shoulders":
        return "Desbloqueio dos Ombros";
      case "back":
        return "Regeneração da Coluna";
      case "hips":
        return "Mobilidade do Quadril";
      case "full_body":
        return "Harmonia Completa";
      default:
        return category;
    }
  };

  // Get difficulty display
  const difficultyDisplay = {
    beginner: "Iniciante",
    intermediate: "Intermediário",
    advanced: "Avançado",
  };

  // Determine the icon based on the category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "neck":
        return <span className="text-fenjes-purple">💆‍♀️</span>;
      case "shoulders":
        return <span>🌸</span>;
      case "back":
        return <span className="text-fenjes-purple">💪</span>;
      case "hips":
        return <span className="text-fenjes-blue-light">🦋</span>;
      case "full_body":
        return <span className="text-fenjes-green">✨</span>;
      default:
        return <span className="text-fenjes-purple">💜</span>;
    }
  };

  // Convert conditions to readable labels
  const conditionLabels: Record<string, string> = {
    neck_pain: "Dor Cervical",
    headaches: "Dores de Cabeça",
    cervical_arthritis: "Artrite Cervical",
    shoulder_pain: "Dor nos Ombros",
    frozen_shoulder: "Ombro Congelado",
    upper_back_tension: "Tensão Superior",
    lower_back_pain: "Dor Lombar",
    spinal_stiffness: "Rigidez Espinal",
    disc_issues: "Problemas de Disco",
    hip_stiffness: "Rigidez do Quadril",
    sciatica: "Ciática",
    hip_arthritis: "Artrite do Quadril",
    general_stiffness: "Rigidez Geral",
    fatigue: "Fadiga",
    overall_wellness: "Bem-estar Geral",
    chronic_fatigue: "Fadiga Crônica",
    fibromyalgia: "Fibromialgia",
    low_energy: "Baixa Energia",
  };

  return (
    <DeepGlassCard
      className={cn("w-full overflow-hidden transition-all", className)}
      variant={isRecommended ? "energetic" : getCardVariant()}
      role="button"
      tabIndex={0}
      hover={true}
      {...props}
    >
      <div className="flex flex-col h-full">
        {/* Image - fixed height for consistency */}
        {exercise.imageUrl ? (
          <div className="w-full h-24 sm:h-28 md:h-32 overflow-hidden">
            <img
              src={exercise.imageUrl}
              alt={`Demonstração para ${exercise.title}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                // Replace with a default image on error
                e.currentTarget.src = '/images/exercises/placeholder-exercise.jpg';
              }}
            />
          </div>
        ) : (
          <div className="w-full h-24 sm:h-28 md:h-32 bg-fenjes-purple/5 flex items-center justify-center">
            <div className="text-3xl">
              {getCategoryIcon(exercise.category)}
            </div>
          </div>
        )}

        {/* Content - smaller padding on mobile */}
        <div className="p-3 md:p-4 flex flex-col flex-grow">
          {/* Chair icon to indicate seated exercise */}
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-fenjes-purple bg-fenjes-purple/10 px-2 py-0.5 rounded-full flex items-center gap-1">
              💺 Exercício na Cadeira
            </span>
            {isRecommended && (
              <span className="text-xs font-medium text-fenjes-yellow-dark bg-fenjes-yellow/10 px-2 py-0.5 rounded-full">
                ✨ Recomendado
              </span>
            )}
          </div>

          {/* Header with tags - smaller text on mobile */}
          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-1.5 md:mb-2">
            <span className="text-[10px] md:text-xs font-medium px-1.5 py-0.5 rounded-full bg-fenjes-purple/10 text-fenjes-purple flex items-center gap-0.5">
              {getCategoryIcon(exercise.category)}
              {getCategoryDisplay(exercise.category)}
            </span>
            <span className="text-[10px] md:text-xs font-medium px-1.5 py-0.5 rounded-full bg-fenjes-yellow/10 text-fenjes-yellow-dark">
              {difficultyDisplay[exercise.difficulty] || exercise.difficulty}
            </span>
          </div>

          {/* Title and message - adapted sizes for mobile */}
          <h3 className="text-base md:text-lg font-semibold mb-0.5 md:mb-1 line-clamp-1">
            {exercise.title}
          </h3>
          <p className="text-xs md:text-sm text-gray-600 line-clamp-2 mb-2 md:mb-3 flex-grow">
            {exercise.specificBenefit}
          </p>

          {/* Target conditions */}
          {exercise.targetConditions && exercise.targetConditions.length > 0 && (
            <div className="mb-2 md:mb-3">
              <div className="flex flex-wrap gap-1">
                {exercise.targetConditions.slice(0, 2).map((condition) => (
                  <span 
                    key={condition} 
                    className="text-[10px] md:text-xs bg-fenjes-green/10 text-fenjes-green px-1.5 py-0.5 rounded-full"
                  >
                    {conditionLabels[condition] || condition}
                  </span>
                ))}
                {exercise.targetConditions.length > 2 && (
                  <span className="text-[10px] md:text-xs bg-fenjes-green/5 text-fenjes-green px-1.5 py-0.5 rounded-full">
                    +{exercise.targetConditions.length - 2}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Duration */}
          <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs text-gray-500 mb-2 md:mb-3">
            <div className="flex items-center gap-1">
              <Clock size={12} className="md:size-14" />
              <span>{exercise.duration}</span>
            </div>
          </div>

          {/* Action button - adjusted for mobile */}
          <div className="flex justify-end mt-auto">
            <Button
              variant={variant === "featured" ? "secondary" : "outline"}
              size="sm"
              className="gap-1 group text-xs md:text-sm h-7 md:h-8"
            >
              Praticar agora
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