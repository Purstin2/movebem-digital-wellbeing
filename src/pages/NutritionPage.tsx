import { useState, useEffect } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText, Heart, User, Download, ExternalLink, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { addNotification } from "@/components/ui/notifications";

// Tipos
interface Recipe {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Fácil' | 'Média' | 'Difícil';
  prepTime: string;
  ingredients: string[];
  instructions: string[];
  benefits: string[];
  imageUrl?: string;
}

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
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState<string[]>([]);
  const [showNutritionGuide, setShowNutritionGuide] = useState(false);
  const [nutritionGuide, setNutritionGuide] = useState<NutritionGuide | null>(null);
  const [activeGuideSection, setActiveGuideSection] = useState(0);
  const [showFavorites, setShowFavorites] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showRecipeDetail, setShowRecipeDetail] = useState(false);
  const { toast } = useToast();

  // Carregar receitas e favoritos
  useEffect(() => {
    // Carregar favoritos do localStorage
    try {
      const savedFavorites = localStorage.getItem('favorite-recipes');
      if (savedFavorites) {
        setFavoriteRecipes(JSON.parse(savedFavorites));
      }

      // Carregar perfil do usuário
      const savedProfile = sessionStorage.getItem('userProfile');
      if (savedProfile) {
        setUserProfile(JSON.parse(savedProfile));
      }
    } catch (error) {
      console.error("Erro ao carregar favoritos:", error);
    }

    // Carregar receitas mockadas - lista expandida
    const mockRecipes: Recipe[] = [
      {
        id: "recipe-1",
        title: "Moon Milk dos Sonhos Dourados",
        description: "Ritual noturno que embala corpo e alma",
        category: "Sono e Relaxamento",
        difficulty: "Fácil",
        prepTime: "8 min",
        ingredients: [
          "1 xícara de leite vegetal (amêndoas, aveia ou coco)",
          "1/2 colher de chá de açafrão em pó",
          "1/4 colher de chá de canela em pó",
          "1 pitada de cardamomo",
          "1 colher de chá de mel ou xarope de maple",
          "1/2 colher de chá de extrato de baunilha",
          "1 pitada de pimenta-do-reino"
        ],
        instructions: [
          "Aqueça o leite em fogo médio sem deixar ferver.",
          "Adicione o açafrão, canela, cardamomo e pimenta-do-reino.",
          "Mexa por 3-4 minutos em fogo baixo.",
          "Remova do fogo e adicione mel e baunilha.",
          "Sirva quente em uma caneca confortável."
        ],
        benefits: [
          "O açafrão contém curcumina, um anti-inflamatório natural",
          "Ajuda a relaxar o corpo e preparar para um sono reparador",
          "A canela ajuda a estabilizar os níveis de açúcar no sangue"
        ]
      },
      {
        id: "recipe-2",
        title: "Chá Digestivo de Gengibre e Lemon Grass",
        description: "Raízes douradas curando seu centro digestivo",
        category: "Saúde Digestiva",
        difficulty: "Fácil",
        prepTime: "10 min",
        ingredients: [
          "1 pedaço de gengibre fresco (2cm)",
          "2 talos de capim-limão (lemon grass)",
          "1 colher de chá de mel",
          "1 rodela de limão",
          "500ml de água filtrada"
        ],
        instructions: [
          "Corte o gengibre em fatias finas.",
          "Amasse levemente os talos de capim-limão para liberar os óleos.",
          "Ferva a água e adicione o gengibre e o capim-limão.",
          "Abaixe o fogo e deixe em infusão por 5-7 minutos.",
          "Coe o chá em uma xícara e adicione mel e limão a gosto."
        ],
        benefits: [
          "Gengibre ajuda a reduzir náuseas e desconforto estomacal",
          "Capim-limão tem propriedades calmantes para o sistema digestivo",
          "Estimula a digestão e reduz a sensação de inchaço"
        ]
      },
      {
        id: "recipe-3",
        title: "Curry Anti-Artrite da Recuperação",
        description: "Especiarias milenares acalmando suas articulações",
        category: "Específica",
        difficulty: "Média",
        prepTime: "35 min",
        ingredients: [
          "2 colheres de sopa de óleo de coco",
          "1 cebola média picada",
          "2 dentes de alho picados",
          "1 colher de sopa de gengibre ralado",
          "2 colheres de chá de açafrão em pó",
          "1 colher de chá de cominho em pó",
          "400g de legumes variados em cubos (cenoura, batata-doce, couve-flor)",
          "400ml de leite de coco",
          "200ml de caldo de legumes",
          "Sal e pimenta a gosto",
          "Coentro fresco para finalizar"
        ],
        instructions: [
          "Aqueça o óleo de coco em uma panela grande.",
          "Refogue a cebola, alho e gengibre até dourar.",
          "Adicione as especiarias e mexa por 1 minuto.",
          "Acrescente os legumes e mexa para cobri-los com as especiarias.",
          "Adicione o leite de coco e o caldo, e deixe cozinhar em fogo baixo por 20-25 minutos.",
          "Tempere com sal e pimenta, e finalize com coentro fresco."
        ],
        benefits: [
          "O açafrão contém curcumina, potente agente anti-inflamatório",
          "Gengibre ajuda a reduzir inflamações nas articulações",
          "Os antioxidantes combatem radicais livres que causam degeneração"
        ]
      },
      {
        id: "recipe-4",
        title: "Smoothie Verde Antiinflamatório",
        description: "Bebida refrescante para reduzir inflamações",
        category: "Antiinflamatório",
        difficulty: "Fácil",
        prepTime: "5 min",
        ingredients: [
          "1 xícara de espinafre",
          "1/2 abacate maduro",
          "1/2 banana congelada",
          "1 colher de chá de gengibre fresco ralado",
          "1 colher de sopa de semente de chia",
          "1 colher de sopa de óleo de linhaça",
          "1 xícara de leite de amêndoas",
          "Gotas de limão a gosto"
        ],
        instructions: [
          "Adicione todos os ingredientes no liquidificador.",
          "Bata até obter uma consistência cremosa.",
          "Adicione mais leite de amêndoas se necessário para ajustar a consistência.",
          "Sirva imediatamente para preservar os nutrientes."
        ],
        benefits: [
          "Rico em ômega-3 do óleo de linhaça, que combate inflamações",
          "Vitaminas do complexo B do espinafre para recuperação muscular",
          "Gorduras saudáveis do abacate para absorção de nutrientes"
        ]
      },
      {
        id: "recipe-5",
        title: "Infusão de Cúrcuma Dourada",
        description: "Bebida milenar para reduzir dores articulares",
        category: "Antiinflamatório",
        difficulty: "Fácil",
        prepTime: "7 min",
        ingredients: [
          "1 colher de chá de cúrcuma em pó",
          "1/2 colher de chá de canela em pó",
          "1 pitada de pimenta preta moída",
          "1 colher de chá de mel cru",
          "1 rodela de limão",
          "1 xícara de água quente"
        ],
        instructions: [
          "Misture a cúrcuma, canela e pimenta preta em uma xícara.",
          "Adicione água quente e misture bem.",
          "Acrescente o mel e mexa até dissolver.",
          "Finalize com a rodela de limão.",
          "Beba enquanto estiver morno."
        ],
        benefits: [
          "A curcumina da cúrcuma é um potente anti-inflamatório natural",
          "A pimenta preta aumenta a absorção da curcumina em até 2000%",
          "A canela ajuda a regular os níveis de açúcar no sangue"
        ]
      },
      {
        id: "recipe-6",
        title: "Mingau de Aveia Relaxante",
        description: "Café da manhã calmante para iniciar bem o dia",
        category: "Sono e Relaxamento",
        difficulty: "Fácil",
        prepTime: "12 min",
        ingredients: [
          "1/2 xícara de aveia em flocos",
          "1 xícara de leite vegetal (amêndoas ou aveia)",
          "1/2 banana madura amassada",
          "1 colher de chá de canela",
          "1 colher de sopa de mel ou agave",
          "1 colher de sopa de manteiga de amêndoas",
          "1 pitada de noz-moscada"
        ],
        instructions: [
          "Misture a aveia e o leite em uma panela pequena.",
          "Leve ao fogo médio e cozinhe por 5-7 minutos, mexendo ocasionalmente.",
          "Adicione a banana amassada e a canela, e continue mexendo.",
          "Quando estiver cremoso, retire do fogo.",
          "Sirva em uma tigela e finalize com mel, manteiga de amêndoas e uma pitada de noz-moscada."
        ],
        benefits: [
          "A aveia é rica em triptofano que ajuda na produção de serotonina",
          "A noz-moscada tem propriedades relaxantes naturais",
          "Carboidratos complexos da aveia liberam energia gradualmente ao longo do dia"
        ]
      }
    ];
    
    setRecipes(mockRecipes);
    
    // Carregar guia nutricional
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
            title: "Alimentos a Serem Evitados",
            text: "Certos alimentos podem aumentar a inflamação no corpo e potencialmente agravar condições articulares:",
            foods: [
              {
                name: "Açúcares refinados",
                benefits: "Aumentam marcadores inflamatórios no sangue"
              },
              {
                name: "Carboidratos refinados (pães brancos, massas)",
                benefits: "Elevam níveis de açúcar e inflamação"
              },
              {
                name: "Frituras e gorduras trans",
                benefits: "Promovem inflamação sistêmica"
              },
              {
                name: "Carnes processadas",
                benefits: "Contêm aditivos que podem aumentar inflamação"
              },
              {
                name: "Álcool em excesso",
                benefits: "Afeta metabolismo e aumenta inflamação"
              }
            ]
          },
          {
            title: "Hidratação Adequada",
            text: "A água é essencial para a saúde das articulações, pois a cartilagem é composta por aproximadamente 80% de água. A desidratação pode afetar a lubrificação das articulações e agravar problemas existentes.",
            tips: [
              "Beba pelo menos 2 litros de água por dia",
              "Aumente a ingestão em dias quentes ou quando praticar exercícios",
              "Chás de ervas sem açúcar também contribuem para a hidratação",
              "Monitore a cor da urina - deve ser amarelo claro, indicando boa hidratação"
            ]
          },
          {
            title: "Suplementação Recomendada",
            text: "Alguns suplementos podem ser benéficos para a saúde articular, mas devem ser tomados com orientação médica:",
            foods: [
              {
                name: "Ômega-3 (EPA e DHA)",
                benefits: "Reduz inflamação e alivia rigidez articular",
                serving: "1-3g diariamente"
              },
              {
                name: "Glucosamina e Condroitina",
                benefits: "Ajudam na formação de cartilagem e reduzem dor",
                serving: "1500mg de glucosamina e 1200mg de condroitina"
              },
              {
                name: "Colágeno hidrolisado",
                benefits: "Melhora a densidade da cartilagem",
                serving: "10g diariamente"
              },
              {
                name: "Vitamina D",
                benefits: "Essencial para saúde óssea e função muscular",
                serving: "1000-2000 UI diariamente"
              }
            ]
          }
        ]
      }
    });
  }, []);

  // Função para alternar favorito
  const toggleFavorite = (recipeId: string) => {
    let updatedFavorites: string[];

    if (favoriteRecipes.includes(recipeId)) {
      // Remover dos favoritos
      updatedFavorites = favoriteRecipes.filter(id => id !== recipeId);
      toast({
        title: "Removido dos favoritos",
        description: "Receita removida dos seus favoritos"
      });
    } else {
      // Adicionar aos favoritos
      updatedFavorites = [...favoriteRecipes, recipeId];
      toast({
        title: "Adicionado aos favoritos",
        description: "Receita adicionada aos seus favoritos"
      });
    }

    setFavoriteRecipes(updatedFavorites);
    localStorage.setItem('favorite-recipes', JSON.stringify(updatedFavorites));
  };

  // Ver detalhes da receita
  const viewRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setShowRecipeDetail(true);
  };

  // Filtrar receitas para a visualização atual
  const getVisibleRecipes = () => {
    if (showFavorites) {
      return recipes.filter(recipe => favoriteRecipes.includes(recipe.id));
    }
    return recipes;
  };

  return (
    <AppLayout>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-fenjes-purple">
              Nutrição Fenjes
            </h1>
            <p className="text-gray-600">Receitas e dicas personalizadas para sua saúde e bem-estar</p>
          </div>
          
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={() => setShowNutritionGuide(true)} 
              className="flex items-center gap-2"
            >
              <FileText size={16} /> Perfil Nutricional
            </Button>
            <Button 
              variant={showFavorites ? "default" : "outline"}
              onClick={() => setShowFavorites(!showFavorites)} 
              className={`flex items-center gap-2 ${showFavorites ? "bg-fenjes-purple text-white" : ""}`}
            >
              <Heart size={16} className={showFavorites ? "fill-current" : ""} /> Meus Favoritos
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <span className="text-3xl">🍲</span> Recomendações Nutricionais
            </h2>
          </div>

          <p className="text-gray-600 mb-6">
            Receitas personalizadas para suas necessidades de hoje
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleRecipes().length > 0 ? (
              getVisibleRecipes().map((recipe) => (
                <Card key={recipe.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-gray-100 h-40 flex items-center justify-center">
                    {recipe.imageUrl ? (
                      <img 
                        src={recipe.imageUrl} 
                        alt={recipe.title} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="text-5xl">{recipe.category === "Sono e Relaxamento" ? "🌙" : recipe.category === "Saúde Digestiva" ? "🌿" : recipe.category === "Antiinflamatório" ? "🌱" : "🌶️"}</div>
                    )}
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-xs bg-fenjes-purple/10 text-fenjes-purple px-2 py-0.5 rounded-full">
                          {recipe.category}
                        </span>
                        <span className="text-xs bg-fenjes-yellow/10 text-fenjes-yellow-dark ml-2 px-2 py-0.5 rounded-full">
                          {recipe.difficulty}
                        </span>
                      </div>
                      <button
                        onClick={() => toggleFavorite(recipe.id)}
                        className="text-gray-400 hover:text-fenjes-purple"
                        aria-label={favoriteRecipes.includes(recipe.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                      >
                        <Heart className={favoriteRecipes.includes(recipe.id) ? "fill-fenjes-purple text-fenjes-purple" : ""} size={18} />
                      </button>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-1">{recipe.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{recipe.description}</p>
                    
                    <div className="flex items-center text-gray-500 mb-3">
                      <Clock size={16} className="mr-1" /> 
                      <span className="text-xs">{recipe.prepTime}</span>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => viewRecipe(recipe)}
                    >
                      Ver receita
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <div className="mb-3 text-4xl">🍽️</div>
                <h3 className="text-lg font-medium mb-2">Nenhuma receita favorita ainda</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Você ainda não adicionou receitas aos seus favoritos
                </p>
                <Button 
                  onClick={() => setShowFavorites(false)} 
                  className="bg-fenjes-purple hover:bg-fenjes-purple-dark"
                >
                  Explorar Receitas
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="my-10">
          <h2 className="text-xl font-semibold mb-6">Recursos Nutricionais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Guia de Nutrição */}
            <Card className="bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div className="bg-fenjes-purple/10 text-fenjes-purple p-3 rounded-lg">
                    <FileText size={24} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-1">Guia de Nutrição</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Aprenda fundamentos de nutrição para bem-estar e saúde.
                </p>
                <Button 
                  className="w-full"
                  onClick={() => setShowNutritionGuide(true)}
                >
                  Ver Guia
                </Button>
              </CardContent>
            </Card>
            
            {/* Recursos Externos */}
            <Card className="bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div className="bg-fenjes-green/10 text-fenjes-green p-3 rounded-lg">
                    <ExternalLink size={24} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-1">Aprenda Mais</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Artigos, vídeos e recursos adicionais sobre nutrição.
                </p>
                <Button 
                  className="w-full"
                  variant="outline"
                  asChild
                >
                  <a href="https://fenjes.com/blog" target="_blank" rel="noopener noreferrer">
                    Acessar Conteúdo
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal do Guia Nutricional */}
      <Dialog open={showNutritionGuide} onOpenChange={setShowNutritionGuide}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-fenjes-purple">
              {nutritionGuide?.title}
            </DialogTitle>
            <DialogDescription>
              {nutritionGuide?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6">
            <Tabs defaultValue="0" onValueChange={(value) => setActiveGuideSection(parseInt(value))}>
              <TabsList className="w-full flex overflow-x-auto">
                {nutritionGuide?.content.sections.map((section, index) => (
                  <TabsTrigger 
                    key={index} 
                    value={index.toString()}
                    className="flex-shrink-0"
                  >
                    {section.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {nutritionGuide?.content.sections.map((section, index) => (
                <TabsContent key={index} value={index.toString()} className="pt-4">
                  <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                  <p className="mb-4 text-gray-700">{section.text}</p>
                  
                  {section.tips && (
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Dicas Práticas:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {section.tips.map((tip, i) => (
                          <li key={i} className="text-gray-700">{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {section.foods && (
                    <div>
                      <h4 className="font-medium mb-2">Alimentos Recomendados:</h4>
                      <div className="space-y-3">
                        {section.foods.map((food, i) => (
                          <div key={i} className="bg-gray-50 p-3 rounded-md">
                            <div className="font-medium">{food.name}</div>
                            <div className="text-sm text-gray-600">{food.benefits}</div>
                            {food.serving && (
                              <div className="text-xs text-gray-500 mt-1">
                                Porção recomendada: {food.serving}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between mt-6">
                    <Button
                      variant="outline"
                      onClick={() => {
                        const prevSection = activeGuideSection - 1;
                        if (prevSection >= 0) {
                          setActiveGuideSection(prevSection);
                        }
                      }}
                      disabled={activeGuideSection === 0}
                    >
                      Anterior
                    </Button>
                    
                    <Button
                      onClick={() => {
                        const nextSection = activeGuideSection + 1;
                        if (nextSection < nutritionGuide!.content.sections.length) {
                          setActiveGuideSection(nextSection);
                        } else {
                          // Última seção, fechar o guia
                          setShowNutritionGuide(false);
                          toast({
                            title: "Guia nutrição concluído",
                            description: "Você concluiu o guia nutricional!"
                          });
                        }
                      }}
                    >
                      {activeGuideSection === nutritionGuide!.content.sections.length - 1 
                        ? "Concluir" 
                        : "Próximo"
                      }
                    </Button>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal de Detalhes da Receita */}
      <Dialog open={showRecipeDetail} onOpenChange={setShowRecipeDetail}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedRecipe && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-fenjes-purple">
                  {selectedRecipe.title}
                </DialogTitle>
                <DialogDescription>
                  {selectedRecipe.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs bg-fenjes-purple/10 text-fenjes-purple px-2 py-0.5 rounded-full">
                    {selectedRecipe.category}
                  </span>
                  <span className="text-xs bg-fenjes-yellow/10 text-fenjes-yellow-dark px-2 py-0.5 rounded-full">
                    {selectedRecipe.difficulty}
                  </span>
                  <span className="text-xs flex items-center">
                    <Clock size={14} className="mr-1" /> 
                    {selectedRecipe.prepTime}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2 text-fenjes-purple">Ingredientes</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-6">
                      {selectedRecipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-gray-700">{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2 text-fenjes-purple">Modo de Preparo</h3>
                    <ol className="list-decimal pl-5 space-y-2 mb-6">
                      {selectedRecipe.instructions.map((instruction, index) => (
                        <li key={index} className="text-gray-700">{instruction}</li>
                      ))}
                    </ol>
                  </div>
                </div>
                
                <div className="mt-4 bg-fenjes-cream p-4 rounded-md">
                  <h3 className="font-semibold mb-2 text-fenjes-purple">Benefícios para Saúde</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedRecipe.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-700">{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setShowRecipeDetail(false)}
                  >
                    Fechar
                  </Button>
                  
                  <Button
                    onClick={() => {
                      toggleFavorite(selectedRecipe.id);
                    }}
                    className="flex items-center gap-2"
                  >
                    <Heart size={16} className={favoriteRecipes.includes(selectedRecipe.id) ? "fill-white" : ""} />
                    {favoriteRecipes.includes(selectedRecipe.id) 
                      ? "Remover dos favoritos" 
                      : "Adicionar aos favoritos"
                    }
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </AppLayout>
  );
};

export default NutritionPage;
