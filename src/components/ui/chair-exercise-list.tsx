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
  onExerciseSelect?: (exerciseId: string) => void;
  gridCols?: number;
}

export function ChairExerciseList({
  exercises,
  title,
  description,
  emptyMessage = "Não foram encontrados exercícios para mostrar",
  showFilter = true,
  className,
  layout = "grid",
  favoriteExercises = [],
  onToggleFavorite,
  onExerciseSelect,
  gridCols = 3,
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
        return "Pescoço";
      case "shoulders":
        return "Ombros";
      case "back":
        return "Coluna";
      case "hips":
        return "Quadril";
      case "full-body":
      case "full_body":
        return "Corpo Todo";
      default:
        return category;
    }
  };
  
  // Get category icon
  const getCategoryIcon = (category: string): React.ReactNode => {
    switch (category) {
      case "neck":
        return "🔄";
      case "shoulders":
        return "🙌";
      case "back":
        return "⬆️";
      case "hips":
        return "💃";
      case "full-body":
      case "full_body":
        return "✨";
      default:
        return "🧘‍♀️";
    }
  };

  // Configure grid columns based on prop
  const gridColsClass = () => {
    switch (gridCols) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 sm:grid-cols-2";
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }
  };

  const handleExerciseClick = (exercise: ChairYogaExercise) => {
    if (onExerciseSelect) {
      onExerciseSelect(exercise.id);
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Header with title and description */}
      {(title || description) && (
        <div className="mb-3 sm:mb-4">
          {title && <h2 className="text-lg sm:text-xl font-semibold text-fenjes-purple mb-1">{title}</h2>}
          {description && <p className="text-xs sm:text-sm text-gray-600">{description}</p>}
        </div>
      )}

      {/* Category filters - Mobile Responsive */}
      {showFilter && categories.length > 1 && (
        <div className="mb-3 sm:mb-4">
          {/* Mobile filter button */}
          <div className="flex md:hidden mb-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-between text-xs"
            >
              <span>Filtrar por região {filter ? `(${getCategoryDisplay(filter)})` : ''}</span>
              <ChevronDown 
                size={14} 
                className={cn(
                  "transition-transform duration-200",
                  showFilters && "transform rotate-180"
                )} 
              />
            </Button>
          </div>

          {/* Filters - Responsive */}
          <div className={cn(
            "flex flex-wrap gap-1 sm:gap-1.5",
            !showFilters && "hidden md:flex"
          )}>
            <Button
              variant={filter === null ? "secondary" : "outline"}
              size="sm"
              onClick={() => setFilter(null)}
              className="flex items-center gap-1 text-xs h-7 px-2"
            >
              <Filter size={12} />
              Todos
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={filter === category ? "secondary" : "outline"}
                size="sm"
                onClick={() => setFilter(category as BodyCategory)}
                className="text-xs h-7 px-2 flex items-center gap-1"
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
            ? "grid gap-2 sm:gap-3" : "space-y-2 sm:space-y-3",
          layout === "grid" && gridColsClass()
        )}>
          {filteredExercises.map(exercise => (
            <ChairExerciseCard
              key={exercise.id}
              exercise={exercise}
              variant={favoriteExercises.includes(exercise.id) ? "featured" : "default"}
              onClick={() => handleExerciseClick(exercise)}
              className="cursor-pointer"
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<CircleX size={24} className="sm:size-30" />}
          title="Nenhum exercício encontrado"
          description={filter ? "Tente ajustar os filtros para encontrar exercícios" : emptyMessage}
          action={
            filter !== null && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setFilter(null)}
                className="text-xs"
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