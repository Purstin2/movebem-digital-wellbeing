import React, { useState, useEffect } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Recipe } from "@/data/types";
import { allRecipes } from "@/data/recipes";
import { generatePersonalizedNutrition } from "@/lib/nutrition-utils";
import { UserProfile } from "@/types/onboarding";
import { RecipeList } from "@/components/ui/recipe-list";
import { useFavoriteRecipes } from "@/hooks/use-favorite-recipes";
import { RecipeCard } from "@/components/ui/recipe-card";

interface NutritionGuide {
  id: string;
  title: string;
  description: string;
  content: {
    sections: {
      title: string;
      text: string;
      tips?: string[];
      foods?: {
        name: string;
        benefits: string;
        serving?: string;
      }[];
    }[];
  };
}

const NutritionPage = () => {
  const [showNutritionGuide, setShowNutritionGuide] = useState(false);
  const [nutritionGuide, setNutritionGuide] = useState<NutritionGuide | null>(null);
  const [activeGuideSection, setActiveGuideSection] = useState(0);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const { toast } = useToast();
  const { favoriteRecipes, toggleFavorite } = useFavoriteRecipes();

  const [personalizedContent, setPersonalizedContent] = useState<{
    dailyRecommendations: Recipe[];
    personalizedTips: string[];
  }>({
    dailyRecommendations: [],
    personalizedTips: []
  });

  useEffect(() => {
    try {
      const savedProfile = sessionStorage.getItem('userProfile');
      if (savedProfile) {
        const parsedProfile = JSON.parse(savedProfile) as UserProfile;
        setUserProfile(parsedProfile);
        const content = generatePersonalizedNutrition(parsedProfile);
        setPersonalizedContent({
          dailyRecommendations: content.dailyRecommendations,
          personalizedTips: content.personalizedTips
        });
      } else {
        setPersonalizedContent({
          dailyRecommendations: [],
          personalizedTips: []
        });
      }
    } catch (error) {
      console.error("Erro ao carregar perfil do usuário:", error);
      toast({
        title: "Erro ao carregar perfil",
        description: "Não foi possível carregar seu perfil. Tente atualizar a página.",
        variant: "destructive",
      });
    }

    setNutritionGuide({
      id: "guide-1",
      title: "Guia Nutricional para Saúde Articular",
      description: "Princípios nutricionais para reduzir inflamação e fortalecer articulações",
      content: {
        sections: [
          {
            title: "Princípios Anti-inflamatórios",
            text: "A inflamação crônica é um dos principais fatores para dores articulares e musculares. Uma alimentação anti-inflamatória pode ajudar a reduzir sintomas e melhorar sua mobilidade.",
            tips: [
              "Consuma alimentos ricos em ômega-3 diariamente",
              "Reduza ou elimine açúcares refinados",
              "Evite alimentos processados e frituras",
              "Inclua especiarias anti-inflamatórias como açafrão e gengibre"
            ]
          },
          {
            title: "Alimentos Recomendados",
            text: "Estes alimentos devem ser priorizados em sua dieta para combater a inflamação e promover a saúde das articulações:",
            foods: [
              {
                name: "Peixes gordos (salmão, sardinha)",
                benefits: "Ricos em ômega-3, reduzem marcadores inflamatórios",
                serving: "2-3 vezes por semana"
              },
              {
                name: "Frutas vermelhas (morango, mirtilo)",
                benefits: "Antioxidantes que combatem inflamação",
                serving: "1 xícara diariamente"
              },
              {
                name: "Vegetais de folhas verdes",
                benefits: "Ricos em antioxidantes e vitamina K para ossos",
                serving: "2-3 porções diárias"
              },
              {
                name: "Nozes e sementes",
                benefits: "Ômega-3, vitamina E e minerais essenciais",
                serving: "30g por dia (um punhado)"
              },
              {
                name: "Azeite de oliva extra-virgem",
                benefits: "Rico em compostos anti-inflamatórios",
                serving: "2 colheres de sopa diárias"
              },
              {
                name: "Açafrão (cúrcuma)",
                benefits: "Contém curcumina, potente anti-inflamatório",
                serving: "1/2 colher de chá diária com pimenta preta"
              }
            ]
          },
          {
            title: "Alimentos a Evitar ou Limitar",
            text: "Certos alimentos podem agravar a inflamação e devem ser consumidos com moderação ou evitados:",
            foods: [
              { name: "Açúcares refinados e doces", benefits: "Aumentam a inflamação e o ganho de peso" },
              { name: "Gorduras saturadas e trans", benefits: "Presentes em carnes vermelhas gordurosas, frituras e processados" },
              { name: "Carboidratos refinados", benefits: "Pão branco, massas e produtos de farinha branca" },
              { name: "Alimentos processados e ultraprocessados", benefits: "Ricos em aditivos, conservantes e ingredientes inflamatórios" }
            ]
          },
          {
            title: "Hidratação e Movimento",
            text: "Manter-se hidratado e ativo é crucial para a saúde articular. A água ajuda a lubrificar as articulações, enquanto o movimento regular fortalece os músculos e melhora a flexibilidade.",
            tips: [
              "Beba pelo menos 2 litros de água por dia.",
              "Incorpore exercícios de baixo impacto, como caminhada ou natação.",
              "Considere o yoga ou tai chi para melhorar o equilíbrio e a flexibilidade."
            ]
          }
        ]
      }
    });
  }, [toast]);

  const recommendedIds = personalizedContent.dailyRecommendations.map(r => r.id);
  const hasRecommendations = personalizedContent.dailyRecommendations.length > 0;

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-wrap justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-fenjes-purple">
              Nutrição Fenjes
            </h1>
            <p className="text-sm sm:text-base text-gray-600">Receitas e dicas personalizadas para sua saúde e bem-estar</p>
          </div>
          
          <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
            <Button 
              variant="outline" 
              onClick={() => setShowNutritionGuide(true)} 
              className="flex items-center gap-1.5 sm:gap-2 h-9 sm:h-10 text-sm sm:text-base w-full sm:w-auto"
            >
              <FileText size={16} /> Guia Nutricional
            </Button>
          </div>
        </div>

        <Card className="col-span-full">
          <CardContent className="pt-4 sm:pt-6 px-3 sm:px-6">
            <Tabs defaultValue={hasRecommendations ? "recommended" : "library"} className="w-full">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 mb-3 sm:mb-4">
                {hasRecommendations && (
                  <TabsTrigger value="recommended" className="h-9 sm:h-10 text-sm sm:text-base">
                    Recomendadas para Você
                  </TabsTrigger>
                )}
                <TabsTrigger value="library" className="h-9 sm:h-10 text-sm sm:text-base">
                  Biblioteca de Receitas
                </TabsTrigger>
              </TabsList>
              {hasRecommendations && (
                <TabsContent value="recommended" className="mt-2">
                  <RecipeList
                    recipes={personalizedContent.dailyRecommendations}
                    favoriteRecipes={favoriteRecipes}
                    onToggleFavorite={toggleFavorite}
                    showFilter={false}
                    recommendedIds={recommendedIds}
                    title="Recomendadas para Você"
                    emptyMessage="Nenhuma receita recomendada para seu perfil no momento."
                  />
                </TabsContent>
              )}
              <TabsContent value="library" className="mt-2">
                <RecipeList
                  recipes={allRecipes}
                  favoriteRecipes={favoriteRecipes}
                  onToggleFavorite={toggleFavorite}
                  showFilter={true}
                  recommendedIds={[]}
                  title="Nossa Biblioteca Completa"
                  emptyMessage="Nenhuma receita encontrada. Que tal explorar outras categorias?"
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
            
        {nutritionGuide && (
          <Dialog open={showNutritionGuide} onOpenChange={setShowNutritionGuide}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
              <DialogHeader>
                <DialogTitle className="text-xl sm:text-2xl text-fenjes-purple">
                  {nutritionGuide.title}
                </DialogTitle>
                <DialogDescription className="text-sm sm:text-base">
                  {nutritionGuide.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 sm:mt-6 flex flex-col overflow-hidden">
                <Tabs defaultValue={activeGuideSection.toString()} onValueChange={(value) => setActiveGuideSection(parseInt(value))} className="flex flex-col overflow-hidden">
                  <TabsList className="w-full flex overflow-x-auto flex-shrink-0 gap-1 sm:gap-2">
                    {nutritionGuide.content.sections.map((section, index) => (
                      <TabsTrigger 
                        key={index} 
                        value={index.toString()}
                        className="flex-shrink-0 text-xs sm:text-sm whitespace-nowrap px-2 sm:px-3 py-1.5 sm:py-2"
                      >
                        {section.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
              
                  {nutritionGuide.content.sections.map((section, index) => (
                    <TabsContent 
                      key={index} 
                      value={index.toString()} 
                      className="pt-3 sm:pt-4 overflow-y-auto flex-grow"
                    >
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{section.title}</h3>
                      <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-700">{section.text}</p>
                  
                      {section.tips && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm sm:text-base">Dicas:</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {section.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="text-sm sm:text-base text-gray-600">
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {section.foods && (
                        <div className="mt-4">
                          <h4 className="font-medium mb-2 text-sm sm:text-base">Alimentos Recomendados:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {section.foods.map((food, foodIndex) => (
                              <div 
                                key={foodIndex} 
                                className="bg-gray-50 rounded-lg p-3 sm:p-4"
                              >
                                <h5 className="font-medium text-sm sm:text-base text-fenjes-purple mb-1">
                                  {food.name}
                                </h5>
                                <p className="text-xs sm:text-sm text-gray-600 mb-1">
                                  {food.benefits}
                                </p>
                                {food.serving && (
                                  <p className="text-xs sm:text-sm text-gray-500 italic">
                                    Porção recomendada: {food.serving}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </AppLayout>
  );
};

export default NutritionPage;
