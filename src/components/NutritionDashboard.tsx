import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "@/types/onboarding";
import { Recipe } from "@/data/types";
import { DailyRecommendations } from "./ui/daily-recommendations";
import { RecipeList } from "./ui/recipe-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generatePersonalizedNutrition } from "@/lib/nutrition-utils";
import { allRecipes, antiInflammatoryRecipes, energyBoostingRecipes, hormonalBalanceRecipes, sleepRelaxationRecipes } from "@/data/recipes";
import { Button } from "@/components/ui/button";
import { Heart, Utensils, BookOpen, BookMarked, ChevronRight, Clock3 } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useFavoriteRecipes } from "@/hooks/use-favorite-recipes";
import { MedicalDisclaimer } from "@/components/ui/medical-disclaimer";

interface NutritionDashboardProps {
  userProfile?: UserProfile | null;
}

export const NutritionDashboard: React.FC<NutritionDashboardProps> = ({ userProfile }) => {
  const [personalizedContent, setPersonalizedContent] = useState<{
    dailyRecommendations: Recipe[];
    personalizedTips: string[];
  }>({
    dailyRecommendations: allRecipes.slice(0, 3),
    personalizedTips: []
  });

  useEffect(() => {
    if (userProfile) {
      const content = generatePersonalizedNutrition(userProfile);
      setPersonalizedContent({
        dailyRecommendations: content.dailyRecommendations,
        personalizedTips: content.personalizedTips
      });
    }
  }, [userProfile]);

  const { favoriteRecipes, toggleFavorite } = useFavoriteRecipes();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <MedicalDisclaimer />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Recomendações Diárias</CardTitle>
          </CardHeader>
          <CardContent>
            <DailyRecommendations 
              recipes={personalizedContent.dailyRecommendations}
              personalizedTips={personalizedContent.personalizedTips}
            />
          </CardContent>
        </Card>

        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Receitas Anti-inflamatórias</CardTitle>
          </CardHeader>
          <CardContent>
            <RecipeList 
              recipes={antiInflammatoryRecipes}
              favoriteRecipes={favoriteRecipes}
              onToggleFavorite={toggleFavorite}
            />
          </CardContent>
        </Card>

        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Receitas Energéticas</CardTitle>
          </CardHeader>
          <CardContent>
            <RecipeList 
              recipes={energyBoostingRecipes}
              favoriteRecipes={favoriteRecipes}
              onToggleFavorite={toggleFavorite}
            />
          </CardContent>
        </Card>

        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Receitas para Equilíbrio Hormonal</CardTitle>
          </CardHeader>
          <CardContent>
            <RecipeList 
              recipes={hormonalBalanceRecipes}
              favoriteRecipes={favoriteRecipes}
              onToggleFavorite={toggleFavorite}
            />
          </CardContent>
        </Card>

        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Receitas para Sono e Relaxamento</CardTitle>
          </CardHeader>
          <CardContent>
            <RecipeList 
              recipes={sleepRelaxationRecipes}
              favoriteRecipes={favoriteRecipes}
              onToggleFavorite={toggleFavorite}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}; 