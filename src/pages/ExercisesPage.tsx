
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
import { UserProfile } from "@/types/onboarding";
import { specializedExercises, trackSystem, getTrackInfo } from "@/utils/trackSystem";

const ExercisesPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
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

  // Update the interface for mapped exercises to include originalId
  interface MappedExercise {
    id: number;
    originalId?: string; // Add this property as optional
    title: string;
    duration: string;
    pose: string;
    completed: boolean;
    category: string;
    difficulty: string;
    isSpecialized?: boolean;
    description?: string;
  }

  // Convert specialized exercises to match the local exercise format
  const specializedExercisesMapped: MappedExercise[] = specializedExercises.map((exercise, index) => ({
    id: index + 1,
    originalId: exercise.id,
    title: exercise.title,
    duration: exercise.duration,
    pose: exercise.steps[0].pose,
    completed: false,
    category: exercise.category,
    difficulty: exercise.difficulty,
    isSpecialized: true,
    description: exercise.description,
  }));

  // Combine with existing exercises
  const defaultExercises: MappedExercise[] = [
    { id: 1, title: "Alongamento de Pescoço", duration: "5 min", pose: "default", completed: false, category: "neck", difficulty: "beginner" },
    { id: 2, title: "Rotação de Ombros", duration: "7 min", pose: "arms-up", completed: true, category: "shoulders", difficulty: "beginner" },
    { id: 3, title: "Inclinação Lateral", duration: "8 min", pose: "side-bend", completed: false, category: "back", difficulty: "beginner" },
    { id: 4, title: "Torção Suave", duration: "10 min", pose: "twist", completed: false, category: "back", difficulty: "intermediate" },
    { id: 5, title: "Alongamento de Quadril", duration: "6 min", pose: "default", completed: true, category: "hips", difficulty: "beginner" },
    { id: 6, title: "Exercício de Foco", duration: "12 min", pose: "default", completed: false, category: "focus", difficulty: "intermediate" },
    { id: 7, title: "Relaxamento Profundo", duration: "15 min", pose: "default", completed: false, category: "relaxation", difficulty: "beginner" },
    { id: 8, title: "Alongamento de Punhos", duration: "3 min", pose: "arms-up", completed: false, category: "shoulders", difficulty: "beginner" },
    { id: 9, title: "Mobilidade de Coluna", duration: "9 min", pose: "twist", completed: false, category: "back", difficulty: "intermediate" },
  ];

  // Get all exercises, prioritizing the specialized ones
  const allExercises = [...specializedExercisesMapped, ...defaultExercises.filter(e => 
    !specializedExercisesMapped.some(se => se.title === e.title))];

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
    
    toast({
      title: favorites.includes(id) ? "Removido dos favoritos" : "Adicionado aos favoritos",
      description: `O exercício foi ${favorites.includes(id) ? "removido dos" : "adicionado aos"} seus favoritos.`,
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
    
    // Get exercise IDs from the current week (based on currentDay)
    const currentWeek = Math.ceil((userProfile.currentDay || 1) / 7);
    const weekData = track.weeks[Math.min(currentWeek - 1, track.weeks.length - 1)];
    
    if (!weekData) return [];
    
    // Get the exercises for the current week
    return allExercises.filter(exercise => 
      specializedExercises.some(specEx => 
        specEx.id === (exercise.originalId || "") && 
        weekData.exercises.includes(specEx.id)
      )
    );
  };

  const trackExercises = getTrackExercises();
  const trackInfo = userProfile?.trackAssigned ? getTrackInfo(userProfile.trackAssigned) : null;

  const getTrackIcon = (trackId?: string) => {
    switch(trackId) {
      case 'therapeutic':
        return <Heart className="text-red-500" />;
      case 'adaptive':
        return <CheckCircle2 className="text-blue-500" />;
      case 'wellness':
        return <Zap className="text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto animate-fade-in">
        <header className="mb-8">
          <h1 className="font-quicksand text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Biblioteca de Exercícios
          </h1>
          <p className="text-gray-500">
            Explore exercícios específicos para cada parte do corpo ou necessidade
          </p>
        </header>

        {/* User Track Section */}
        {userProfile?.trackAssigned && trackInfo && trackExercises.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className={`p-1.5 rounded-full ${trackInfo.color.replace('bg-', 'bg-opacity-20 bg-')}`}>
                {getTrackIcon(userProfile.trackAssigned)}
              </div>
              <h2 className="font-quicksand text-xl font-semibold">
                Sua Trilha {trackInfo.name}
              </h2>
            </div>
            
            <Card className="mb-6 bg-gradient-to-r from-white to-gray-50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Exercícios Recomendados</CardTitle>
                  <Badge variant="outline">
                    Dia {userProfile.currentDay || 1}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {trackExercises.slice(0, 3).map((exercise) => (
                    <ExerciseCard
                      key={exercise.id}
                      title={exercise.title}
                      duration={exercise.duration}
                      completed={exercise.completed}
                      favorite={favorites.includes(exercise.id)}
                      onFavoriteToggle={() => toggleFavorite(exercise.id)}
                      onClick={() => navigate(`/exercises/${exercise.id}`)}
                      image={<YogaIllustration pose={exercise.pose as any} />}
                      className="border-l-4 border-l-movebem-purple"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Search and filters */}
        <div className="bg-white rounded-xl p-4 mb-6 border shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Buscar exercícios..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-500" />
              <span className="text-sm text-gray-500">Filtros:</span>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
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

        {/* Exercises Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredExercises.length > 0 ? (
            filteredExercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                title={exercise.title}
                duration={exercise.duration}
                completed={exercise.completed}
                favorite={favorites.includes(exercise.id)}
                onFavoriteToggle={() => toggleFavorite(exercise.id)}
                onClick={() => navigate(`/exercises/${exercise.id}`)}
                image={<YogaIllustration pose={exercise.pose as any} />}
              />
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <h3 className="text-lg font-quicksand font-medium text-gray-700 mb-2">
                Nenhum exercício encontrado
              </h3>
              <p className="text-gray-500">
                Tente ajustar seus filtros ou buscar por outro termo
              </p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default ExercisesPage;
