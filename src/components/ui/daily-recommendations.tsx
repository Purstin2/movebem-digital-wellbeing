import React from "react";
import { Recipe } from "@/data/types";
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

export const DailyRecommendations: React.FC<DailyRecommendationsProps> = ({
  recipes,
  personalizedTips = [],
  className
}) => {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Featured recipe */}
      {recipes.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="text-fenjes-yellow" size={20} />
            <h3 className="text-lg font-semibold text-gray-900">
              Receita em Destaque
            </h3>
          </div>
          <RecipeCard
            recipe={recipes[0]}
            variant="featured"
            className="w-full"
          />
        </div>
      )}

      {/* Additional recommendations */}
      {recipes.length > 1 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Utensils className="text-fenjes-purple" size={20} />
            <h3 className="text-lg font-semibold text-gray-900">
              Mais Recomendações
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {recipes.slice(1).map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                variant="recommended"
              />
            ))}
          </div>
        </div>
      )}

      {/* Personalized tips */}
      {personalizedTips.length > 0 && (
        <Card className="bg-fenjes-purple/5">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-fenjes-purple">
              Dicas Personalizadas
            </CardTitle>
            <CardDescription>
              Recomendações específicas para seu perfil
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {personalizedTips.map((tip, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <span className="text-fenjes-purple">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

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