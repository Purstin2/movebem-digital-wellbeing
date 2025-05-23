import { useEffect, useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { ChairYogaExercise } from "@/types/chair-yoga";
import { chairYogaExercises } from "@/data/chair-yoga-exercises";
import { useFavoriteExercises } from "@/hooks/use-favorite-exercises";
import { ChairExerciseList } from "@/components/ui/chair-exercise-list";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { EmptyState } from "@/components/ui/empty-state";

const FavoritesPage = () => {
  const navigate = useNavigate();
  const { favoriteExercises, toggleFavorite } = useFavoriteExercises();
  const [favoriteItems, setFavoriteItems] = useState<ChairYogaExercise[]>([]);
  
  useEffect(() => {
    // Filtrar exercícios que são favoritos
    const items = chairYogaExercises.filter(exercise => 
      favoriteExercises.includes(exercise.id)
    );
    setFavoriteItems(items);
  }, [favoriteExercises]);
  
  return (
    <AppLayout>
      <div className="container mx-auto py-6">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="mr-4"
          >
            <ArrowLeft size={16} className="mr-2" /> Voltar
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold text-fenjes-purple">
            Meus Exercícios Favoritos
          </h1>
        </div>
        
        {favoriteItems.length > 0 ? (
          <ChairExerciseList 
            exercises={favoriteItems}
            favoriteExercises={favoriteExercises}
            onToggleFavorite={toggleFavorite}
            showFilter={false}
            layout="grid"
            gridCols={3}
            description="Exercícios que você marcou como favoritos para acesso rápido."
          />
        ) : (
          <EmptyState 
            title="Você ainda não tem favoritos"
            description="Explore exercícios e salve seus favoritos para acessá-los facilmente."
            action={
              <Button 
                onClick={() => navigate("/chair-yoga")}
                variant="secondary"
              >
                Descobrir Exercícios
              </Button>
            }
          />
        )}
      </div>
    </AppLayout>
  );
};

export default FavoritesPage; 