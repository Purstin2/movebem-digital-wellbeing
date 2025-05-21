
import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CategoryBadge } from "@/components/ui/category-badge";
import { Search, Heart, ChevronRight, AppleIcon, Leaf, Coffee } from "lucide-react";

const NutritionPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const mealCategories = [
    { id: "breakfast", label: "Café da Manhã", icon: <Coffee size={18} /> },
    { id: "lunch", label: "Almoço", icon: <AppleIcon size={18} /> },
    { id: "dinner", label: "Jantar", icon: <AppleIcon size={18} /> },
    { id: "snacks", label: "Lanches", icon: <AppleIcon size={18} /> },
    { id: "antiInflammatory", label: "Anti-inflamatórios", icon: <Leaf size={18} /> },
  ];

  const nutritionTips = [
    {
      id: 1,
      title: "Anti-inflamatórios Naturais",
      description: "Alimentos que ajudam a reduzir inflamação no corpo e complementam seus exercícios.",
      image: "bg-movebem-purple-light/30",
    },
    {
      id: 2,
      title: "Hidratação Otimizada",
      description: "A importância da água para flexibilidade e recuperação muscular.",
      image: "bg-movebem-green/30",
    },
    {
      id: 3,
      title: "Nutrientes para Mobilidade",
      description: "Vitaminas e minerais essenciais para saúde das articulações.",
      image: "bg-blue-100",
    },
  ];

  const mealSuggestions = [
    {
      id: 1,
      category: "breakfast",
      title: "Mingau de Aveia com Frutas",
      description: "Rico em fibras e antioxidantes para começar o dia com energia",
      prepTime: "10 min",
      ingredients: ["Aveia", "Banana", "Mel", "Canela"],
      antiInflammatory: true,
    },
    {
      id: 2,
      category: "lunch",
      title: "Salada de Quinoa com Legumes",
      description: "Proteína vegetal e nutrientes para o meio do dia",
      prepTime: "20 min",
      ingredients: ["Quinoa", "Pepino", "Tomate", "Azeite"],
      antiInflammatory: true,
    },
    {
      id: 3,
      category: "dinner",
      title: "Sopa de Legumes",
      description: "Leve e nutritiva para o final do dia",
      prepTime: "30 min",
      ingredients: ["Abóbora", "Cenoura", "Cebola", "Alho"],
      antiInflammatory: true,
    },
    {
      id: 4,
      category: "snacks",
      title: "Mix de Castanhas",
      description: "Ômega 3 e gorduras boas para lanches",
      prepTime: "5 min",
      ingredients: ["Castanha do Brasil", "Nozes", "Amêndoas"],
      antiInflammatory: true,
    },
    {
      id: 5, 
      category: "breakfast",
      title: "Smoothie Verde",
      description: "Vitaminas e minerais em forma líquida",
      prepTime: "8 min",
      ingredients: ["Couve", "Banana", "Maçã", "Gengibre"],
      antiInflammatory: true,
    },
  ];

  const filteredMeals = mealSuggestions.filter(meal => {
    const matchesSearch = !searchQuery || 
      meal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      meal.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !activeCategory || 
      meal.category === activeCategory || 
      (activeCategory === "antiInflammatory" && meal.antiInflammatory);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="font-quicksand text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Nutrição Complementar
        </h1>

        <Tabs defaultValue="recomendacoes" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="recomendacoes">Recomendações</TabsTrigger>
            <TabsTrigger value="receitas">Receitas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="recomendacoes">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nutritionTips.map(tip => (
                <Card key={tip.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className={`h-32 ${tip.image} flex items-center justify-center`}>
                    <Leaf size={48} className="text-movebem-purple/50" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-quicksand font-semibold text-lg mb-2">{tip.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{tip.description}</p>
                    <Button variant="link" className="text-movebem-purple p-0 h-auto flex items-center gap-1">
                      Ler mais <ChevronRight size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="receitas">
            <div className="grid grid-cols-1 gap-4">
              {/* Search and filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="relative md:w-1/3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Buscar receitas..."
                    className="w-full pl-10 pr-4 py-2 border rounded-md"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {mealCategories.map(category => (
                    <CategoryBadge
                      key={category.id}
                      icon={category.icon}
                      label={category.label}
                      active={activeCategory === category.id}
                      onClick={() => setActiveCategory(prev => 
                        prev === category.id ? null : category.id
                      )}
                    />
                  ))}
                </div>
              </div>
              
              {/* Meal cards */}
              {filteredMeals.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredMeals.map(meal => (
                    <Card key={meal.id} className="h-full">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <CardTitle className="text-lg font-quicksand">{meal.title}</CardTitle>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Heart size={18} className="text-gray-400 hover:text-movebem-purple" />
                          </Button>
                        </div>
                        <span className="text-xs bg-movebem-purple-light/30 text-movebem-purple-dark px-2 py-1 rounded-full">
                          {mealCategories.find(c => c.id === meal.category)?.label || meal.category}
                        </span>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm mb-3">{meal.description}</p>
                        <div className="text-xs text-gray-500 mb-3">Tempo de preparo: {meal.prepTime}</div>
                        <div>
                          <p className="text-xs text-gray-600 font-medium mb-1">Ingredientes:</p>
                          <div className="flex flex-wrap gap-1">
                            {meal.ingredients.map((ingredient, idx) => (
                              <span 
                                key={idx} 
                                className="text-xs bg-gray-100 px-2 py-0.5 rounded-full"
                              >
                                {ingredient}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  Nenhuma receita encontrada. Tente outros termos de busca.
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default NutritionPage;
