import React, { useState } from "react";
import { ExerciseCard } from "@/components/ui/exercise-card";
import { Exercise } from "@/types/onboarding";
import { Button } from "@/components/ui/button";
import { CircleCheck, CircleX, Filter, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { EmptyState } from "@/components/ui/empty-state";

interface ExerciseListProps {
  exercises: Exercise[];
  title?: string;
  description?: string;
  emptyMessage?: string;
  showFilter?: boolean;
  className?: string;
  layout?: "grid" | "list";
  completedExercises?: string[];
}

export function ExerciseList({
  exercises,
  title = "Exercícios",
  description,
  emptyMessage = "Não foram encontrados exercícios para mostrar",
  showFilter = true,
  className,
  layout = "grid",
  completedExercises = [],
}: ExerciseListProps) {
  const [filter, setFilter] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Filtra os exercícios com base nas categorias selecionadas
  const filteredExercises = filter
    ? exercises.filter(exercise => exercise.category === filter)
    : exercises;

  // Extrai categorias únicas para filtro
  const categories = Array.from(new Set(exercises.map(exercise => exercise.category)));

  return (
    <div className={cn("space-y-4 md:space-y-6", className)}>
      {/* Cabeçalho com título e descrição */}
      {(title || description) && (
        <div className="mb-4 md:mb-6">
          {title && <h2 className="text-xl md:text-2xl font-semibold text-fenjes-purple mb-1 md:mb-2">{title}</h2>}
          {description && <p className="text-sm md:text-base text-gray-600">{description}</p>}
        </div>
      )}

      {/* Filtros de categoria - Adaptado para Mobile */}
      {showFilter && categories.length > 1 && (
        <div className="mb-4 md:mb-6">
          {/* Botão de filtro para mobile */}
          <div className="flex md:hidden mb-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-between text-sm"
            >
              <span>Filtrar por categoria {filter ? `(${filter})` : ''}</span>
              <ChevronDown 
                size={16} 
                className={cn(
                  "transition-transform duration-200",
                  showFilters && "transform rotate-180"
                )} 
              />
            </Button>
          </div>

          {/* Filtros - Responsivo */}
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
                onClick={() => setFilter(category === filter ? null : category)}
                className="text-xs h-8 px-2.5 md:text-sm md:h-9 md:px-3"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Lista de exercícios - Responsiva */}
      {filteredExercises.length > 0 ? (
        <div className={cn(
          layout === "grid" 
            ? "grid gap-3 md:gap-4" : "space-y-3 md:space-y-4",
          layout === "grid" && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        )}>
          {filteredExercises.map(exercise => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              variant={completedExercises.includes(exercise.id) ? "completed" : "default"}
              imageUrl={`/images/exercises/${exercise.id}.jpg`}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={exercises.length === 0 ? <CircleX size={30} className="md:size-40" /> : <CircleCheck size={30} className="md:size-40" />}
          title={exercises.length === 0 ? "Sem exercícios" : "Nenhum resultado"}
          description={exercises.length === 0 ? emptyMessage : "Tente ajustar os filtros para encontrar exercícios"}
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