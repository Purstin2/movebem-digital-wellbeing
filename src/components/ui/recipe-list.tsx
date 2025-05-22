import React, { useState } from "react";
import { RecipeCard } from "@/components/ui/recipe-card";
import { Recipe, NutritionCategory } from "@/types/nutrition";
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

export function RecipeList({
  recipes,
  title = "Receitas",
  description,
  emptyMessage = "Não foram encontradas receitas para mostrar",
  showFilter = true,
  className,
  layout = "grid",
  favoriteRecipes = [],
  onToggleFavorite,
}: RecipeListProps) {
  const [filter, setFilter] = useState<NutritionCategory | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Filter recipes based on selected category
  const filteredRecipes = filter
    ? recipes.filter(recipe => recipe.category === filter)
    : recipes;

  // Extract unique categories for filtering
  const categories = Array.from(new Set(recipes.map(recipe => recipe.category)));
  
  // Get human-readable category names
  const getCategoryDisplay = (category: string): string => {
    switch (category) {
      case "anti_inflammatory":
        return "Anti-Inflamatórias";
      case "energy_boost":
        return "Energia";
      case "hormonal_balance":
        return "Equilíbrio Hormonal";
      case "sleep_support":
        return "Sono";
      case "digestive_health":
        return "Digestiva";
      case "detox_support":
        return "Detox";
      case "condition_specific":
        return "Específicas";
      default:
        return category;
    }
  };
  
  // Get category icon
  const getCategoryIcon = (category: string): React.ReactNode => {
    switch (category) {
      case "anti_inflammatory":
        return "🔮";
      case "energy_boost":
        return "⚡";
      case "hormonal_balance":
        return "🌸";
      case "sleep_support":
        return "🌙";
      case "digestive_health":
        return "🌿";
      case "detox_support":
        return "💦";
      case "condition_specific":
        return "🎯";
      default:
        return "";
    }
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
              <span>Filtrar por categoria {filter ? `(${getCategoryDisplay(filter)})` : ''}</span>
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
              Todas
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={filter === category ? "secondary" : "outline"}
                size="sm"
                onClick={() => setFilter(category as NutritionCategory)}
                className="text-xs h-8 px-2.5 md:text-sm md:h-9 md:px-3 flex items-center gap-1"
              >
                <span>{getCategoryIcon(category)}</span>
                {getCategoryDisplay(category)}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Recipe list - Responsive */}
      {filteredRecipes.length > 0 ? (
        <div className={cn(
          layout === "grid" 
            ? "grid gap-3 md:gap-4" : "space-y-3 md:space-y-4",
          layout === "grid" && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        )}>
          {filteredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              variant={favoriteRecipes.includes(recipe.id) ? "recommended" : "default"}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={recipes.length === 0 ? <CircleX size={30} className="md:size-40" /> : <CircleCheck size={30} className="md:size-40" />}
          title={recipes.length === 0 ? "Sem receitas" : "Nenhum resultado"}
          description={recipes.length === 0 ? emptyMessage : "Tente ajustar os filtros para encontrar receitas"}
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