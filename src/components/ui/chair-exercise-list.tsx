import React, { useState } from "react";
import { ChairExerciseCard } from "@/components/ui/chair-exercise-card";
import { ChairYogaExercise, BodyCategory } from "@/types/chair-yoga";
import { Button } from "@/components/ui/button";
import { Filter, ChevronDown, CircleX } from "lucide-react";
import { cn } from "@/lib/utils";
import { EmptyState } from "@/components/ui/empty-state";

interface ChairExerciseListProps {
  exercises: ChairYogaExercise[];
  title?: string;
  description?: string;
  emptyMessage?: string;
  showFilter?: boolean;
  className?: string;
  layout?: "grid" | "list";
  favoriteExercises?: string[];
  onToggleFavorite?: (exerciseId: string) => void;
  userProfile?: any;
}

export function ChairExerciseList({
  exercises,
  title = "Exercícios",
  description,
  emptyMessage = "Não foram encontrados exercícios para mostrar",
  showFilter = true,
  className,
  layout = "grid",
  favoriteExercises = [],
  onToggleFavorite,
  userProfile,
}: ChairExerciseListProps) {
  const [filter, setFilter] = useState<BodyCategory | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Filter exercises based on selected category
  const filteredExercises = filter
    ? exercises.filter(exercise => exercise.category === filter)
    : exercises;

  // Extract unique categories for filtering
  const categories = Array.from(new Set(exercises.map(exercise => exercise.category)));
  
  // Get human-readable category names
  const getCategoryDisplay = (category: string): string => {
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
  
  // Get category icon
  const getCategoryIcon = (category: string): React.ReactNode => {
    switch (category) {
      case "neck":
        return "💆‍♀️";
      case "shoulders":
        return "🌸";
      case "back":
        return "💪";
      case "hips":
        return "🦋";
      case "full_body":
        return "✨";
      default:
        return "💜";
    }
  };
  
  // Check if exercise is recommended for user based on their conditions
  const isRecommendedForUser = (exercise: ChairYogaExercise): boolean => {
    if (!userProfile) return false;
    
    // Check if exercise targets user's primary pain area
    if (exercise.category === userProfile.primaryPain) {
      return true;
    }
    
    // Check if exercise targets any of user's conditions
    if (userProfile.conditions && exercise.targetConditions) {
      return exercise.targetConditions.some(condition => 
        userProfile.conditions.includes(condition)
      );
    }
    
    return false;
  };

  return (
    <div className={cn("space-y-4 md:space-y-6", className)}>
      {/* Header with title and description */}
      {(title || description) && (
        <div className="mb-4 md:mb-6">
          {title && <h2 className="text-xl md:text-2xl font-semibold text-fenjes-purple mb-1 md:mb-2">{title}</h2>}
          {description && <p className="text-sm md:text-base text-gray-600">{description}</p>}
        </div>
      )}

      {/* Category filters - Mobile Responsive */}
      {showFilter && categories.length > 1 && (
        <div className="mb-4 md:mb-6">
          {/* Mobile filter button */}
          <div className="flex md:hidden mb-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-between text-sm"
            >
              <span>Filtrar por região {filter ? `(${getCategoryDisplay(filter)})` : ''}</span>
              <ChevronDown 
                size={16} 
                className={cn(
                  "transition-transform duration-200",
                  showFilters && "transform rotate-180"
                )} 
              />
            </Button>
          </div>

          {/* Filters - Responsive */}
          <div className={cn(
            "flex flex-wrap gap-1.5 md:gap-2",
            !showFilters && "hidden md:flex"
          )}>
            <Button
              variant={filter === null ? "secondary" : "outline"}
              size="sm"
              onClick={() => setFilter(null)}
              className="flex items-center gap-1 text-xs h-8 px-2.5 md:text-sm md:h-9 md:px-3"
            >
              <Filter size={13} className="md:size-14" />
              Todos
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={filter === category ? "secondary" : "outline"}
                size="sm"
                onClick={() => setFilter(category as BodyCategory)}
                className="text-xs h-8 px-2.5 md:text-sm md:h-9 md:px-3 flex items-center gap-1"
              >
                <span>{getCategoryIcon(category)}</span>
                {getCategoryDisplay(category)}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Exercise list - Responsive */}
      {filteredExercises.length > 0 ? (
        <div className={cn(
          layout === "grid" 
            ? "grid gap-3 md:gap-4" : "space-y-3 md:space-y-4",
          layout === "grid" && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        )}>
          {filteredExercises.map(exercise => (
            <ChairExerciseCard
              key={exercise.id}
              exercise={exercise}
              isRecommended={userProfile ? isRecommendedForUser(exercise) : false}
              variant={favoriteExercises.includes(exercise.id) ? "featured" : "default"}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<CircleX size={30} className="md:size-40" />}
          title="Nenhum exercício encontrado"
          description={filter ? "Tente ajustar os filtros para encontrar exercícios" : emptyMessage}
          action={
            filter !== null && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setFilter(null)}
                className="text-xs md:text-sm"
              >
                Limpar filtro
              </Button>
            )
          }
        />
      )}
    </div>
  );
} 