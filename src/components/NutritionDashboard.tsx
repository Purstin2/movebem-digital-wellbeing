import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "@/types/onboarding";
import { Recipe } from "@/types/nutrition";
import { DailyRecommendations } from "./ui/daily-recommendations";
import { RecipeList } from "./ui/recipe-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generatePersonalizedNutrition } from "@/lib/nutrition-utils";
import { allRecipes, antiInflammatoryRecipes, energyBoostingRecipes, hormonalBalanceRecipes, sleepRelaxationRecipes, digestiveDetoxRecipes, conditionSpecificRecipes } from "@/data/recipes";
import { Button } from "@/components/ui/button";
import { Heart, Utensils, BookOpen, BookMarked } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useFavoriteRecipes } from "@/hooks/use-favorite-recipes";

interface NutritionDashboardProps {
  userProfile?: UserProfile | null;
}

export function NutritionDashboard({ userProfile }: NutritionDashboardProps) {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 640px)');
  const { favoriteRecipes, toggleFavorite } = useFavoriteRecipes();
  const [personalizedContent, setPersonalizedContent] = useState<{
    dailyRecommendations: Recipe[];
    personalizedTips: string[];
  }>({
    dailyRecommendations: [],
    personalizedTips: []
  });

  // Generate personalized content when user profile changes
  useEffect(() => {
    if (userProfile) {
      const content = generatePersonalizedNutrition(userProfile);
      setPersonalizedContent(content);
    } else {
      // Default recommendations if no user profile
      setPersonalizedContent({
        dailyRecommendations: allRecipes.slice(0, 3),
        personalizedTips: [
          "💧 Mantenha-se hidratado com pelo menos 2L de água por dia",
          "🍓 Inclua frutas vermelhas regularmente por seus antioxidantes",
          "🥗 Vegetais de folhas verdes são essenciais para minerais e fibras"
        ]
      });
    }
  }, [userProfile]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-4 md:py-6">
      {/* Header */}
      <section className="mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 mb-4 md:mb-6">
          <div>
            <h1 className="text-xl md:text-3xl font-quicksand font-semibold text-fenjes-purple">
              Nutrição Fenjes
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              Receitas e dicas personalizadas para sua saúde e bem-estar
            </p>
          </div>

          {/* Header action buttons */}
          <div className="flex gap-2 mt-2 md:mt-0">
            <Button
              variant="outline"
              size={isMobile ? "sm" : "default"}
              onClick={() => navigate("/perfil-nutricional")}
              className="text-xs md:text-sm"
            >
              <BookOpen size={isMobile ? 14 : 16} className="mr-1 md:mr-2" />
              Perfil Nutricional
            </Button>
            <Button 
              variant="secondary"
              size={isMobile ? "sm" : "default"}
              className="text-xs md:text-sm"
            >
              <Heart size={isMobile ? 14 : 16} className="mr-1 md:mr-2" />
              {favoriteRecipes.length ? favoriteRecipes.length : 'Meus'} Favoritos
            </Button>
          </div>
        </div>
      </section>

      {/* Daily personalized recommendations */}
      <section className="mb-8 md:mb-10">
        <DailyRecommendations
          recipes={personalizedContent.dailyRecommendations}
          personalizedTips={personalizedContent.personalizedTips}
        />
      </section>

      {/* Recipe categories */}
      <section>
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-between items-center mb-4 md:mb-6 border-b">
            <TabsList className="overflow-x-auto pb-2 md:pb-0 justify-start md:justify-center flex-grow gap-1">
              <TabsTrigger value="all" className="text-xs md:text-sm">Todas Receitas</TabsTrigger>
              <TabsTrigger value="anti-inflammatory" className="text-xs md:text-sm">Anti-Inflamatórias</TabsTrigger>
              <TabsTrigger value="energy" className="text-xs md:text-sm">Energia</TabsTrigger>
              <TabsTrigger value="hormonal" className="text-xs md:text-sm">Equilíbrio Hormonal</TabsTrigger>
              <TabsTrigger value="sleep" className="text-xs md:text-sm">Sono</TabsTrigger>
              <TabsTrigger value="digestive" className="text-xs md:text-sm">Digestivas</TabsTrigger>
              <TabsTrigger value="conditions" className="text-xs md:text-sm">Específicas</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <RecipeList 
              recipes={allRecipes} 
              title="Todas as Receitas" 
              favoriteRecipes={favoriteRecipes}
              onToggleFavorite={toggleFavorite}
            />
          </TabsContent>

          <TabsContent value="anti-inflammatory">
            <RecipeList 
              recipes={antiInflammatoryRecipes} 
              title="Receitas Anti-Inflamatórias"
              description="Reduza inflamação e alivie dores com estas receitas medicinais."
              favoriteRecipes={favoriteRecipes}
              onToggleFavorite={toggleFavorite}
            />
          </TabsContent>

          <TabsContent value="energy">
            <RecipeList 
              recipes={energyBoostingRecipes} 
              title="Receitas para Energia"
              description="Aumente sua disposição naturalmente com estas receitas energizantes."
              favoriteRecipes={favoriteRecipes}
              onToggleFavorite={toggleFavorite}
            />
          </TabsContent>

          <TabsContent value="hormonal">
            <RecipeList 
              recipes={hormonalBalanceRecipes} 
              title="Receitas para Equilíbrio Hormonal"
              description="Apoie seu sistema hormonal com alimentos que nutrem e equilibram."
              favoriteRecipes={favoriteRecipes}
              onToggleFavorite={toggleFavorite}
            />
          </TabsContent>

          <TabsContent value="sleep">
            <RecipeList 
              recipes={sleepRelaxationRecipes} 
              title="Receitas para Sono e Relaxamento"
              description="Prepare-se para um sono reparador com estas receitas calmantes."
              favoriteRecipes={favoriteRecipes}
              onToggleFavorite={toggleFavorite}
            />
          </TabsContent>
          
          <TabsContent value="digestive">
            <RecipeList 
              recipes={digestiveDetoxRecipes} 
              title="Receitas para Digestão e Detox"
              description="Cuide da sua saúde digestiva com estas receitas suaves e purificantes."
              favoriteRecipes={favoriteRecipes}
              onToggleFavorite={toggleFavorite}
            />
          </TabsContent>
          
          <TabsContent value="conditions">
            <RecipeList 
              recipes={conditionSpecificRecipes} 
              title="Receitas para Condições Específicas"
              description="Preparações especialmente formuladas para necessidades específicas."
              favoriteRecipes={favoriteRecipes}
              onToggleFavorite={toggleFavorite}
            />
          </TabsContent>
        </Tabs>
      </section>

      {/* Additional nutrition resources */}
      <section className="mt-10 md:mt-12">
        <h2 className="text-lg md:text-xl font-semibold text-fenjes-purple mb-4">Recursos Nutricionais</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-white to-fenjes-purple/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-base md:text-lg flex items-center gap-2">
                <BookMarked size={18} className="text-fenjes-purple" /> Guia de Nutrição
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs md:text-sm mb-3">Aprenda fundamentos de nutrição para bem-estar e saúde.</p>
              <Button variant="outline" size="sm" className="text-xs md:text-sm w-full">Ver Guia</Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-white to-fenjes-yellow/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-base md:text-lg flex items-center gap-2">
                <Utensils size={18} className="text-fenjes-yellow" /> Lista de Compras
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs md:text-sm mb-3">Ingredientes essenciais para suas receitas personalizadas.</p>
              <Button variant="outline" size="sm" className="text-xs md:text-sm w-full">Gerar Lista</Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-white to-fenjes-green/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-base md:text-lg flex items-center gap-2">
                <Heart size={18} className="text-fenjes-green" /> Consulta Nutricional
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs md:text-sm mb-3">Agende uma consulta com especialista em nutrição.</p>
              <Button variant="outline" size="sm" className="text-xs md:text-sm w-full">Saiba Mais</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 