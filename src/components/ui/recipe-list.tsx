import React, { useState } from "react";
import { RecipeCard } from "@/components/ui/recipe-card";
import { Recipe } from "@/data/types";
import { Button } from "@/components/ui/button";
import { Filter, ChevronDown, CircleCheck, CircleX } from "lucide-react";
import { cn } from "@/lib/utils";
import { EmptyState } from "@/components/ui/empty-state";

interface RecipeListProps {
  recipes: Recipe[];
  title?: string;
  description?: string;
  emptyMessage?: string;
  showFilter?: boolean;
  className?: string;
  layout?: "grid" | "list";
  favoriteRecipes?: string[];
  onToggleFavorite?: (recipeId: string) => void;
}

export const RecipeList: React.FC<RecipeListProps> = ({
  recipes,
  title,
  description,
  emptyMessage = "Nenhuma receita encontrada",
  showFilter = false,
  className,
  layout = "grid",
  favoriteRecipes = [],
  onToggleFavorite
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredRecipes = recipes.filter(recipe => {
    if (selectedDifficulty && recipe.difficulty !== selectedDifficulty) return false;
    if (selectedCategory && recipe.category !== selectedCategory) return false;
    return true;
  });

  const difficulties = Array.from(new Set(recipes.map(r => r.difficulty)));
  const categories = Array.from(new Set(recipes.map(r => r.category)));

  if (recipes.length === 0) {
    return (
      <EmptyState
        title={emptyMessage}
        description="Tente ajustar os filtros ou explore outras categorias"
      />
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {title && (
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-fenjes-purple">{title}</h2>
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
      )}

      {showFilter && (
        <div className="space-y-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="w-full sm:w-auto"
          >
            <Filter size={16} className="mr-2" />
            Filtros
            <ChevronDown
              size={16}
              className={cn(
                "ml-2 transition-transform",
                showFilters && "rotate-180"
              )}
            />
          </Button>

          {showFilters && (
            <div className="grid gap-4 p-4 border rounded-lg bg-white">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Dificuldade</h3>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map(difficulty => (
                    <Button
                      key={difficulty}
                      variant={selectedDifficulty === difficulty ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedDifficulty(
                        selectedDifficulty === difficulty ? null : difficulty
                      )}
                    >
                      {selectedDifficulty === difficulty ? (
                        <CircleCheck size={16} className="mr-2" />
                      ) : (
                        <CircleX size={16} className="mr-2" />
                      )}
                      {difficulty}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Categoria</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(
                        selectedCategory === category ? null : category
                      )}
                    >
                      {selectedCategory === category ? (
                        <CircleCheck size={16} className="mr-2" />
                      ) : (
                        <CircleX size={16} className="mr-2" />
                      )}
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className={cn(
        "grid gap-4",
        layout === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
      )}>
        {filteredRecipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isFavorite={favoriteRecipes.includes(recipe.id)}
            onToggleFavorite={() => onToggleFavorite?.(recipe.id)}
          />
        ))}
      </div>
    </div>
  );
}; 