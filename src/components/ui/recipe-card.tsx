import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Recipe } from "@/types/nutrition";
import { DeepGlassCard } from "@/components/ui/deep-glass-card";
import { Button } from "@/components/ui/button";
import { Clock, ChevronRight, Leaf, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface RecipeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  recipe: Recipe;
  variant?: "default" | "featured" | "recommended";
  showDetails?: boolean;
}

export function RecipeCard({
  className,
  recipe,
  variant = "default",
  showDetails = false,
  ...props
}: RecipeCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Verify if recipe exists
  if (!recipe) {
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
      case "anti_inflammatory":
        return "Anti-Inflamatória";
      case "energy_boost":
        return "Energia";
      case "hormonal_balance":
        return "Equilíbrio Hormonal";
      case "sleep_support":
        return "Sono e Relaxamento";
      case "digestive_health":
        return "Saúde Digestiva";
      case "detox_support":
        return "Detox";
      case "condition_specific":
        return "Específica";
      default:
        return category;
    }
  };

  // Get difficulty display
  const difficultyDisplay = {
    easy: "Fácil",
    medium: "Média",
    hard: "Difícil",
  };

  // Determine the icon based on the category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "anti_inflammatory":
        return <span className="text-fenjes-purple">🔮</span>;
      case "energy_boost":
        return <span>⚡</span>;
      case "hormonal_balance":
        return <span className="text-fenjes-pink">🌸</span>;
      case "sleep_support":
        return <span className="text-fenjes-blue-light">🌙</span>;
      case "digestive_health":
        return <span className="text-fenjes-green">🌿</span>;
      case "detox_support":
        return <span className="text-fenjes-blue">💦</span>;
      case "condition_specific":
        return <span className="text-fenjes-yellow">🎯</span>;
      default:
        return <Leaf size={14} />;
    }
  };

  return (
    <>
      <DeepGlassCard
        className={cn("w-full overflow-hidden transition-all", className)}
        variant={getCardVariant()}
        role="button"
        tabIndex={0}
        onClick={() => setIsDialogOpen(true)}
        onKeyDown={(e) => e.key === "Enter" && setIsDialogOpen(true)}
        hover={true}
        {...props}
      >
        <div className="flex flex-col h-full">
          {/* Image - fixed height for consistency */}
          {recipe.imageUrl && (
            <div className="w-full h-24 sm:h-28 md:h-32 overflow-hidden">
              <img
                src={recipe.imageUrl}
                alt={`Imagem para ${recipe.title}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  // Replace with a default image on error
                  e.currentTarget.src = '/images/nutrition/placeholder-recipe.jpg';
                }}
              />
            </div>
          )}

          {/* Content - smaller padding on mobile */}
          <div className="p-3 md:p-4 flex flex-col flex-grow">
            {/* Header with tags - smaller text on mobile */}
            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-1.5 md:mb-2">
              <span className="text-[10px] md:text-xs font-medium px-1.5 py-0.5 rounded-full bg-fenjes-purple/10 text-fenjes-purple flex items-center gap-0.5">
                {getCategoryIcon(recipe.category)}
                {getCategoryDisplay(recipe.category)}
              </span>
              <span className="text-[10px] md:text-xs font-medium px-1.5 py-0.5 rounded-full bg-fenjes-yellow/10 text-fenjes-yellow-dark">
                {difficultyDisplay[recipe.difficulty] || recipe.difficulty}
              </span>
            </div>

            {/* Title and message - adapted sizes for mobile */}
            <h3 className="text-base md:text-lg font-semibold mb-0.5 md:mb-1 line-clamp-1">
              {recipe.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-600 line-clamp-2 mb-2 md:mb-3 flex-grow">
              {recipe.emotionalMessage}
            </p>

            {/* Additional info - smaller on mobile */}
            <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs text-gray-500 mb-2 md:mb-3">
              <div className="flex items-center gap-1">
                <Clock size={12} className="md:size-14" />
                <span>{recipe.prepTime}</span>
              </div>
            </div>

            {/* Action button - adjusted for mobile */}
            <div className="flex justify-end mt-auto">
              <Button
                variant={variant === "featured" ? "secondary" : "outline"}
                size="sm"
                className="gap-1 group text-xs md:text-sm h-7 md:h-8"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDialogOpen(true);
                }}
              >
                Ver receita
                <ChevronRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </div>
          </div>
        </div>
      </DeepGlassCard>

      {/* Recipe details dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl text-fenjes-purple">
              {recipe.title}
            </DialogTitle>
            <DialogDescription className="text-sm md:text-base">
              {recipe.emotionalMessage}
            </DialogDescription>
          </DialogHeader>

          {/* Recipe image */}
          {recipe.imageUrl && (
            <div className="w-full h-40 md:h-48 overflow-hidden rounded-md mb-4">
              <img
                src={recipe.imageUrl}
                alt={`Imagem para ${recipe.title}`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = '/images/nutrition/placeholder-recipe.jpg';
                }}
              />
            </div>
          )}

          <div className="space-y-4">
            {/* Info bar */}
            <div className="flex flex-wrap gap-2 md:gap-4">
              <div className="flex items-center gap-1 text-xs md:text-sm">
                <Clock size={14} className="text-fenjes-purple" />
                <span>Preparo: {recipe.prepTime}</span>
              </div>
              <div className="flex items-center gap-1 text-xs md:text-sm">
                <span>{getCategoryIcon(recipe.category)}</span>
                <span>Categoria: {getCategoryDisplay(recipe.category)}</span>
              </div>
              <div className="flex items-center gap-1 text-xs md:text-sm">
                <span>🔍</span>
                <span>Dificuldade: {difficultyDisplay[recipe.difficulty]}</span>
              </div>
            </div>

            {/* Scientific backing */}
            <div className="bg-fenjes-purple/5 rounded-md p-3 text-xs md:text-sm flex gap-2 items-start">
              <Info size={14} className="text-fenjes-purple mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">{recipe.scientificBacking}</p>
            </div>

            {/* Ingredients */}
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-2">Ingredientes</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-1.5">
                    <span className="text-fenjes-purple">•</span>
                    <div>
                      <span className="font-medium">{ingredient.item}</span>
                      <span className="text-gray-500 block text-[10px] md:text-xs">
                        {ingredient.benefit}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preparation steps */}
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-2">Modo de Preparo</h4>
              <ol className="space-y-2 text-xs md:text-sm">
                {recipe.preparation.map((step, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="bg-fenjes-purple text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Best timing */}
            <div className="bg-fenjes-yellow/10 rounded-md p-3 text-xs md:text-sm flex gap-2 items-start">
              <Clock size={14} className="text-fenjes-yellow-dark mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-medium">Melhor momento: </span>
                {recipe.timing}
              </p>
            </div>

            {/* Personalized tips */}
            {Object.keys(recipe.personalizedTips).length > 0 && (
              <div>
                <h4 className="text-base md:text-lg font-semibold mb-2">Dicas Personalizadas</h4>
                <ul className="space-y-2 text-xs md:text-sm">
                  {Object.entries(recipe.personalizedTips).map(([condition, tip]) => (
                    <li key={condition} className="flex items-start gap-2">
                      <span className="text-fenjes-purple">✓</span>
                      <div>
                        <span className="font-medium">{condition}: </span>
                        <span>{tip}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 