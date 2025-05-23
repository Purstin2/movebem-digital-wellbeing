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
      
      <div className="grid gap-6">
        {/* Recomendações Diárias */}
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

        {/* Biblioteca de Receitas */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Biblioteca de Receitas</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">Todas</TabsTrigger>
                <TabsTrigger value="anti-inflammatory">Anti-inflamatórias</TabsTrigger>
                <TabsTrigger value="energy-boost">Energéticas</TabsTrigger>
                <TabsTrigger value="hormonal-balance">Hormonais</TabsTrigger>
                <TabsTrigger value="sleep-support">Sono</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <RecipeList 
                  recipes={allRecipes}
                  favoriteRecipes={favoriteRecipes}
                  onToggleFavorite={toggleFavorite}
                  showFilter={true}
                />
              </TabsContent>

              <TabsContent value="anti-inflammatory" className="mt-6">
                <RecipeList 
                  recipes={antiInflammatoryRecipes}
                  favoriteRecipes={favoriteRecipes}
                  onToggleFavorite={toggleFavorite}
                  showFilter={true}
                />
              </TabsContent>

              <TabsContent value="energy-boost" className="mt-6">
                <RecipeList 
                  recipes={energyBoostingRecipes}
                  favoriteRecipes={favoriteRecipes}
                  onToggleFavorite={toggleFavorite}
                  showFilter={true}
                />
              </TabsContent>

              <TabsContent value="hormonal-balance" className="mt-6">
                <RecipeList 
                  recipes={hormonalBalanceRecipes}
                  favoriteRecipes={favoriteRecipes}
                  onToggleFavorite={toggleFavorite}
                  showFilter={true}
                />
              </TabsContent>

              <TabsContent value="sleep-support" className="mt-6">
                <RecipeList 
                  recipes={sleepRelaxationRecipes}
                  favoriteRecipes={favoriteRecipes}
                  onToggleFavorite={toggleFavorite}
                  showFilter={true}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}; 