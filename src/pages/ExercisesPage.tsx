
import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { ExerciseCard } from "@/components/ui/exercise-card";
import { YogaIllustration } from "@/components/illustrations/YogaIllustration";
import { CategoryBadge } from "@/components/ui/category-badge";
import { CategoryIllustration } from "@/components/illustrations/CategoryIllustration";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

const ExercisesPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<number[]>([1, 4]);

  const categories = [
    { id: 'all', label: 'Todos', icon: null },
    { id: 'neck', label: 'Pescoço', icon: <CategoryIllustration category="neck" size={16} /> },
    { id: 'shoulders', label: 'Ombros', icon: <CategoryIllustration category="shoulders" size={16} /> },
    { id: 'back', label: 'Costas', icon: <CategoryIllustration category="back" size={16} /> },
    { id: 'hips', label: 'Quadril', icon: <CategoryIllustration category="hips" size={16} /> },
    { id: 'focus', label: 'Foco', icon: <CategoryIllustration category="focus" size={16} /> },
    { id: 'relaxation', label: 'Relaxamento', icon: <CategoryIllustration category="relaxation" size={16} /> },
  ];

  const exercises = [
    { id: 1, title: "Alongamento de Pescoço", duration: "5 min", pose: "default", completed: false, category: "neck" },
    { id: 2, title: "Rotação de Ombros", duration: "7 min", pose: "arms-up", completed: true, category: "shoulders" },
    { id: 3, title: "Inclinação Lateral", duration: "8 min", pose: "side-bend", completed: false, category: "back" },
    { id: 4, title: "Torção Suave", duration: "10 min", pose: "twist", completed: false, category: "back" },
    { id: 5, title: "Alongamento de Quadril", duration: "6 min", pose: "default", completed: true, category: "hips" },
    { id: 6, title: "Exercício de Foco", duration: "12 min", pose: "default", completed: false, category: "focus" },
    { id: 7, title: "Relaxamento Profundo", duration: "15 min", pose: "default", completed: false, category: "relaxation" },
    { id: 8, title: "Alongamento de Punhos", duration: "3 min", pose: "arms-up", completed: false, category: "shoulders" },
    { id: 9, title: "Mobilidade de Coluna", duration: "9 min", pose: "twist", completed: false, category: "back" },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const filteredExercises = exercises.filter(exercise => {
    const matchesCategory = activeCategory === null || activeCategory === "all" || exercise.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      exercise.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="font-quicksand text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Biblioteca de Exercícios
          </h1>
          <p className="text-gray-500">
            Explore exercícios específicos para cada parte do corpo ou necessidade
          </p>
        </header>

        {/* Search and filters */}
        <div className="bg-white rounded-xl p-4 mb-6 border shadow-sm">
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
                onClick={() => setActiveCategory(prev => prev === category.id ? null : category.id)}
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
                onClick={() => console.log(`Navigate to exercise ${exercise.id}`)}
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
