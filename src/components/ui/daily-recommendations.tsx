import React from "react";
import { Recipe } from "@/types/nutrition";
import { RecipeCard } from "@/components/ui/recipe-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Utensils, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DailyRecommendationsProps {
  recipes: Recipe[];
  personalizedTips?: string[];
  className?: string;
}

export function DailyRecommendations({
  recipes,
  personalizedTips,
  className,
}: DailyRecommendationsProps) {
  if (!recipes || recipes.length === 0) {
    return null;
  }

  // Featured recipe is the first one
  const featuredRecipe = recipes[0];
  // Additional recommendations
  const additionalRecipes = recipes.slice(1);

  return (
    <div className={cn("space-y-4 md:space-y-6", className)}>
      {/* Header */}
      <div className="mb-2 md:mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-fenjes-purple flex items-center gap-2">
          <Utensils size={22} className="md:size-24" /> Recomendações Nutricionais
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          Receitas personalizadas para suas necessidades de hoje
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Featured Recipe Card - Takes full width on mobile, 2/3 on larger screens */}
        <div className="md:col-span-2 h-full">
          <Card className="h-full border-fenjes-purple/20 bg-gradient-to-br from-white to-fenjes-purple/5 overflow-hidden">
            <CardHeader className="pb-0 md:pb-2">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles size={16} className="text-fenjes-yellow" />
                <CardTitle className="text-base md:text-lg text-fenjes-purple">
                  Receita Destacada
                </CardTitle>
              </div>
              <CardDescription className="text-xs md:text-sm">
                Escolhemos especialmente para você hoje
              </CardDescription>
            </CardHeader>

            <CardContent className="p-3 md:p-4 md:pt-2">
              <RecipeCard recipe={featuredRecipe} variant="featured" />
            </CardContent>
          </Card>
        </div>

        {/* Tips and Additional Recommendations - Takes full width on mobile, 1/3 on larger screens */}
        <div className="space-y-4">
          {/* Personalized Tips Card */}
          {personalizedTips && personalizedTips.length > 0 && (
            <Card className="border-fenjes-green/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-base md:text-lg text-fenjes-green">
                  Dicas Personalizadas
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2 text-xs md:text-sm">
                  {personalizedTips.slice(0, 3).map((tip, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-fenjes-green flex-shrink-0">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
                {personalizedTips.length > 3 && (
                  <Button
                    variant="link"
                    size="sm"
                    className="text-xs md:text-sm text-fenjes-green p-0 h-auto mt-2"
                  >
                    Ver mais dicas
                  </Button>
                )}
              </CardContent>
            </Card>
          )}

          {/* Additional Recommendations Card */}
          {additionalRecipes.length > 0 && (
            <Card className="border-fenjes-purple/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-base md:text-lg text-fenjes-purple">
                  Outras Sugestões
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0 space-y-2">
                {additionalRecipes.map((recipe) => (
                  <div key={recipe.id} className="group p-2 rounded-md hover:bg-fenjes-purple/5 transition-colors">
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-md overflow-hidden bg-gray-100">
                        {recipe.imageUrl ? (
                          <img
                            src={recipe.imageUrl}
                            alt={recipe.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-lg">
                            {getCategoryIcon(recipe.category)}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-grow min-w-0">
                        <h4 className="font-medium text-sm line-clamp-1">{recipe.title}</h4>
                        <p className="text-xs text-gray-500 line-clamp-1">{recipe.emotionalMessage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

// Helper function to get category icons
function getCategoryIcon(category: string): React.ReactNode {
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
      return "🥗";
  }
} 