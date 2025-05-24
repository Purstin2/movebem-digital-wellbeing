import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { ExerciseCard } from "@/components/ui/exercise-card";
import { YogaIllustration } from "@/components/illustrations/YogaIllustration";
import { CategoryBadge } from "@/components/ui/category-badge";
import { CategoryIllustration } from "@/components/illustrations/CategoryIllustration";
import { Search, Filter, Heart, CheckCircle2, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserProfile, Exercise } from "@/types/onboarding";
import { specializedExercises, trackSystem, getTrackInfo } from "@/utils/trackSystem";
import { useIsMobile } from "@/hooks/use-mobile";

const ExercisesPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  // Check if there's a category in URL parameters
  const categoryParam = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam || null);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<number[]>([1, 4]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  // Load user profile from session storage
  useEffect(() => {
    try {
      const storedProfile = sessionStorage.getItem('userProfile');
      if (storedProfile) {
        setUserProfile(JSON.parse(storedProfile));
      }
    } catch (error) {
      console.error("Error loading profile:", error);
    }
  }, []);

  const categories = [
    { id: 'all', label: 'Todos', icon: null },
    { id: 'neck', label: 'Pescoço', icon: <CategoryIllustration category="neck" size={16} /> },
    { id: 'shoulders', label: 'Ombros', icon: <CategoryIllustration category="shoulders" size={16} /> },
    { id: 'back', label: 'Costas', icon: <CategoryIllustration category="back" size={16} /> },
    { id: 'hips', label: 'Quadril', icon: <CategoryIllustration category="hips" size={16} /> },
    { id: 'focus', label: 'Foco', icon: <CategoryIllustration category="focus" size={16} /> },
    { id: 'relaxation', label: 'Relaxamento', icon: <CategoryIllustration category="relaxation" size={16} /> },
  ];

  interface MappedExercise extends Omit<Exercise, 'id' | 'steps' | 'adaptations' | 'contraindications' | 'conditions' | 'benefits' | 'safetyTips'> {
    id: number;
    originalId?: string;
    pose: string;
    completed: boolean;
    isSpecialized?: boolean;
    imageUrl?: string;
  }

  const specializedExercisesMapped: MappedExercise[] = specializedExercises.map((exercise, index) => ({
    ...exercise,
    id: index + specializedExercises.length + 100,
    originalId: exercise.id,
    pose: exercise.steps[0]?.pose || "default",
    completed: false,
    isSpecialized: true,
  }));

  const defaultExercises: MappedExercise[] = [
    { id: 1, title: "Alongamento de Pescoço", description: "Solte a tensão do pescoço com este alongamento suave.", duration: "5 min", pose: "default", completed: false, category: "neck", difficulty: "beginner", targetAreas: ["Pescoço"] },
    { id: 2, title: "Rotação de Ombros", description: "Mobilize seus ombros e alivie a rigidez.", duration: "7 min", pose: "arms-up", completed: true, category: "shoulders", difficulty: "beginner", targetAreas: ["Ombros"] },
    { id: 3, title: "Inclinação Lateral", description: "Alongue as laterais do tronco para maior flexibilidade.", duration: "8 min", pose: "side-bend", completed: false, category: "back", difficulty: "beginner", targetAreas: ["Costas"] },
    { id: 4, title: "Torção Suave", description: "Melhore a flexibilidade da coluna com uma torção gentil.", duration: "10 min", pose: "twist", completed: false, category: "back", difficulty: "intermediate", targetAreas: ["Costas"] },
    { id: 5, title: "Alongamento de Quadril", description: "Solte a rigidez do quadril e melhore a mobilidade.", duration: "6 min", pose: "default", completed: true, category: "hips", difficulty: "beginner", targetAreas: ["Quadril"] },
    { id: 6, title: "Exercício de Foco", description: "Acalme sua mente e melhore sua concentração.", duration: "12 min", pose: "default", completed: false, category: "focus", difficulty: "intermediate", targetAreas: ["Mente"] },
    { id: 7, title: "Relaxamento Profundo", description: "Relaxe todo o corpo e alivie o estresse.", duration: "15 min", pose: "default", completed: false, category: "relaxation", difficulty: "beginner", targetAreas: ["Corpo Todo"] },
    { id: 8, title: "Alongamento de Punhos", description: "Previna dores nos punhos com alongamentos simples.", duration: "3 min", pose: "arms-up", completed: false, category: "shoulders", difficulty: "beginner", targetAreas: ["Braços", "Punhos"] },
    { id: 9, title: "Mobilidade de Coluna", description: "Mantenha sua coluna saudável e flexível.", duration: "9 min", pose: "twist", completed: false, category: "back", difficulty: "intermediate", targetAreas: ["Costas"] },
  ];

  const allExercises = [...specializedExercisesMapped, ...defaultExercises.filter(e => 
    !specializedExercisesMapped.some(se => se.title === e.title || se.originalId === e.originalId))
  ];

  const toggleFavorite = (exerciseId: number) => {
    const exercise = allExercises.find(e => e.id === exerciseId);
    if (!exercise) return;

    setFavorites(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(item => item !== exerciseId) 
        : [...prev, exerciseId]
    );
    
    toast({
      title: favorites.includes(exerciseId) ? "Removido dos favoritos" : "Adicionado aos favoritos",
      description: `${exercise.title} foi ${favorites.includes(exerciseId) ? "removido dos" : "adicionado aos"} seus favoritos.`,
    });
  };

  const filteredExercises = allExercises.filter(exercise => {
    const matchesCategory = activeCategory === null || activeCategory === "all" || exercise.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      exercise.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(prev => prev === categoryId ? null : categoryId);
  };

  const getTrackExercises = () => {
    if (!userProfile?.trackAssigned) return [];
    const trackId = userProfile.trackAssigned;
    const track = trackSystem.find(t => t.id === trackId);
    if (!track) return [];
    const currentWeek = Math.ceil((userProfile.currentDay || 1) / 7);
    const weekData = track.weeks[Math.min(currentWeek - 1, track.weeks.length - 1)];
    if (!weekData) return [];
    return allExercises.filter(exercise => 
      weekData.exercises.includes(exercise.originalId || `non-specialized-${exercise.id}`)
    );
  };

  const trackExercises = getTrackExercises();
  const trackInfo = userProfile?.trackAssigned ? getTrackInfo(userProfile.trackAssigned) : null;

  const getTrackIcon = (trackId?: string) => {
    switch(trackId) {
      case 'therapeutic': return <Heart className="text-red-500" />;
      case 'adaptive': return <CheckCircle2 className="text-blue-500" />;
      case 'wellness': return <Zap className="text-green-500" />;
      default: return null;
    }
  };

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 animate-fade-in">
        <header className="mb-6 sm:mb-8">
          <h1 className="font-quicksand text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Biblioteca de Exercícios
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Explore exercícios específicos para cada parte do corpo ou necessidade
          </p>
        </header>

        {userProfile?.trackAssigned && trackInfo && trackExercises.length > 0 && (
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className={`p-1.5 rounded-full ${trackInfo.color.replace('bg-', 'bg-opacity-20 bg-')}`}>
                {getTrackIcon(userProfile.trackAssigned)}
              </div>
              <h2 className="font-quicksand text-lg sm:text-xl font-semibold">
                Sua Trilha {trackInfo.name}
              </h2>
            </div>
            
            <Card className="mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-50">
              <CardHeader className="pb-2 p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base sm:text-lg">Exercícios Recomendados</CardTitle>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    Dia {userProfile.currentDay || 1}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {trackExercises.slice(0, 3).map((exercise) => (
                    <ExerciseCard
                      key={exercise.id}
                      exercise={exercise as unknown as Exercise}
                      compact={isMobile}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-4">
            <div className="relative w-full sm:max-w-xs">
              <Input 
                placeholder="Buscar exercícios..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            {categories.map(category => (
              <CategoryBadge
                key={category.id}
                icon={category.icon}
                label={category.label}
                active={activeCategory === category.id}
                onClick={() => handleCategoryClick(category.id)}
              />
            ))}
          </div>
        </div>

        
        {filteredExercises.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredExercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise as unknown as Exercise}
                compact={isMobile}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <YogaIllustration pose="default" className="mx-auto mb-4 w-32 h-32 text-gray-300" />
            <p className="text-gray-500">Nenhum exercício encontrado. Tente um termo de busca ou filtro diferente.</p>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default ExercisesPage;
