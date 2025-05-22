import React from "react";
import { cn } from "@/lib/utils";
import { ChairYogaExercise } from "@/types/chair-yoga";
import { DeepGlassCard } from "@/components/ui/deep-glass-card";
import { Button } from "@/components/ui/button";
import { Clock, ChevronRight, Heart } from "lucide-react";

interface ChairExerciseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  exercise: ChairYogaExercise;
  variant?: "default" | "featured" | "recommended";
  showDetails?: boolean;
  isRecommended?: boolean;
  onFavoriteToggle?: () => void;
  isFavorite?: boolean;
}

export function ChairExerciseCard({
  className,
  exercise,
  variant = "default",
  showDetails = false,
  isRecommended = false,
  onFavoriteToggle,
  isFavorite = false,
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
        return "Pescoço";
      case "shoulders":
        return "Ombros";
      case "back":
        return "Coluna";
      case "hips":
        return "Quadril";
      case "full_body":
      case "full-body":
        return "Corpo Todo";
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
        return <span>🔄</span>;
      case "shoulders":
        return <span>🙌</span>;
      case "back":
        return <span>⬆️</span>;
      case "hips":
        return <span>💃</span>;
      case "full_body":
      case "full-body":
        return <span>✨</span>;
      default:
        return <span>🧘‍♀️</span>;
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
      className={cn("w-full overflow-hidden transition-all h-full", className)}
      variant={isRecommended ? "energetic" : getCardVariant()}
      role="button"
      tabIndex={0}
      hover={true}
      {...props}
    >
      <div className="flex flex-col h-full">
        {/* Image section */}
        <div className="relative w-full h-20 sm:h-28 overflow-hidden bg-fenjes-purple/5">
          {exercise.imageUrl ? (
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
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-2xl sm:text-3xl">
                {getCategoryIcon(exercise.category)}
              </div>
            </div>
          )}
          
          {/* Favorite button overlay */}
          {onFavoriteToggle && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onFavoriteToggle();
              }}
              className="absolute top-1 right-1 p-1 rounded-full bg-white/80 hover:bg-white"
              aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
            >
              <Heart 
                size={14} 
                className={cn(
                  "transition-colors", 
                  isFavorite ? "fill-fenjes-purple text-fenjes-purple" : "text-gray-400"
                )} 
              />
            </button>
          )}
        </div>

        {/* Content - smaller padding on mobile */}
        <div className="p-2 sm:p-3 flex flex-col flex-grow">
          {/* Chair icon to indicate seated exercise */}
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-medium text-fenjes-purple bg-fenjes-purple/10 px-1.5 py-0.5 rounded-full flex items-center gap-1">
              💺 Na Cadeira
            </span>
            {isRecommended && (
              <span className="text-[10px] font-medium text-fenjes-yellow-dark bg-fenjes-yellow/10 px-1.5 py-0.5 rounded-full">
                ✨ Recomendado
              </span>
            )}
          </div>

          {/* Title and message */}
          <h3 className="text-sm font-semibold mb-1 line-clamp-1">
            {exercise.title}
          </h3>
          
          <p className="text-[10px] sm:text-xs text-gray-600 line-clamp-2 mb-1.5 flex-grow">
            {exercise.specificBenefit || exercise.description}
          </p>

          {/* Bottom section with tags */}
          <div className="flex items-center justify-between mt-auto">
            {/* Duration */}
            <div className="flex items-center text-[10px] text-gray-500">
              <Clock size={10} className="mr-1" />
              <span>{exercise.duration}</span>
            </div>
            
            {/* Category tag */}
            <span className="text-[8px] bg-fenjes-purple/10 text-fenjes-purple px-1 py-0.5 rounded-full flex items-center gap-0.5">
              {getCategoryIcon(exercise.category)}
            </span>
          </div>
        </div>
      </div>
    </DeepGlassCard>
  );
} 