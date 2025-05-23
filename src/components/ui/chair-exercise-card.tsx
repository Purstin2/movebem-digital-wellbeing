import React from "react";
import { cn } from "@/lib/utils";
import { ChairYogaExercise } from "@/types/chair-yoga";
import { DeepGlassCard } from "@/components/ui/deep-glass-card";
import { Button } from "@/components/ui/button";
import { Clock, ChevronRight, Heart, Play, Activity } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ChairExerciseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  exercise: ChairYogaExercise;
  variant?: "default" | "featured" | "recommended";
  showDetails?: boolean;
  isRecommended?: boolean;
  onFavoriteToggle?: () => void;
  isFavorite?: boolean;
  onStart: () => void;
  onToggleFavorite: (id: string) => void;
}

export function ChairExerciseCard({
  className,
  exercise,
  variant = "default",
  showDetails = false,
  isRecommended = false,
  onFavoriteToggle,
  isFavorite = false,
  onStart,
  onToggleFavorite,
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
            <div className="w-full h-full flex items-center justify-center bg-fenjes-purple/10">
              {getCategoryIcon(exercise.category)}
            </div>
          )}
        </div>

        {/* Content section */}
        <div className="flex-1 p-4 sm:p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
              {exercise.title}
            </h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 -mr-2"
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(exercise.id);
              }}
            >
              <Heart 
                className={cn(
                  "h-5 w-5",
                  isFavorite ? "fill-current text-fenjes-purple" : "text-gray-400"
                )} 
              />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge variant="outline" className="text-sm">
              <Clock className="mr-1 h-4 w-4" />
              {exercise.duration} min
            </Badge>
            <Badge variant="outline" className="text-sm">
              <Activity className="mr-1 h-4 w-4" />
              {difficultyDisplay[exercise.difficulty]}
            </Badge>
          </div>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            {exercise.description}
          </p>

          {showDetails && (
            <div className="mt-4 space-y-3">
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                  Benefícios:
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                  {exercise.steps.map((step, index) => (
                    <li key={index}>{step.instruction}</li>
                  ))}
                </ul>
              </div>

              {exercise.adaptations && (
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
                    Adaptações Disponíveis
                  </h4>
                  <ul className="list-disc list-inside text-sm text-blue-700 dark:text-blue-300">
                    {Object.entries(exercise.adaptations).map(([condition, adaptation]) => (
                      <li key={condition}>
                        <span className="font-medium">{conditionLabels[condition]}:</span>{' '}
                        {adaptation}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exercise.contraindications && exercise.contraindications.length > 0 && (
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <h4 className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">
                    ⚠️ Contraindicações
                  </h4>
                  <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300">
                    {exercise.contraindications.map((condition, index) => (
                      <li key={index}>{conditionLabels[condition]}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="p-4 sm:p-6 pt-0 flex flex-col sm:flex-row gap-3">
          <Button
            onClick={onStart}
            className="w-full h-12 text-base"
            aria-label={`Iniciar ${exercise.title}`}
          >
            <Play className="mr-2 h-5 w-5" />
            Iniciar Exercício
          </Button>
        </div>
      </div>
    </DeepGlassCard>
  );
} 