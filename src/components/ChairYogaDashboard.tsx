import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChairYogaProfile } from "@/types/chair-yoga";
import { chairYogaExercises, groupExercisesByCategory, getRecommendedExercises } from "@/data/chair-yoga-exercises";
import { ChairExerciseList } from "./ui/chair-exercise-list";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Heart, ChevronRight } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useFavoriteExercises } from "@/hooks/use-favorite-exercises";
import { JourneyTracker } from "@/components/JourneyTracker";
import { MedicalDisclaimer } from "@/components/ui/medical-disclaimer";

interface ChairYogaDashboardProps {
  userProfile?: Partial<ChairYogaProfile> | null;
}

export function ChairYogaDashboard({ userProfile }: ChairYogaDashboardProps) {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 640px)');
  const { favoriteExercises, toggleFavorite } = useFavoriteExercises();
  const [recommendedExercises, setRecommendedExercises] = useState(chairYogaExercises.slice(0, 3));
  
  // Group exercises by category for tabs
  const exercisesByCategory = groupExercisesByCategory(chairYogaExercises);

  // Generate personalized recommendations when user profile changes
  useEffect(() => {
    if (userProfile) {
      // Cast o userProfile para ter todos os campos necessários ou use valores padrão
      const profileForRecommendations = {
        primaryPain: userProfile.primaryPain || 'neck',
        conditions: userProfile.conditions || [],
        painLevel: userProfile.painLevel || 'medium',
        mobilityLevel: userProfile.mobilityLevel || 'moderate'
      };
      
      const recommended = getRecommendedExercises(profileForRecommendations);
      setRecommendedExercises(recommended);
    }
  }, [userProfile]);

  // Function to get exercise of the day based on user profile
  const getTodayExercise = () => {
    if (recommendedExercises.length > 0) {
      return recommendedExercises[0];
    }
    return chairYogaExercises[0]; // Default to first exercise if no recommendations
  };

  const todayExercise = getTodayExercise();

  return (
    <div className="container mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6">
      {/* Header - Responsive sizing */}
      <section className="mb-4 sm:mb-5 md:mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 mb-3 md:mb-6">
          <div>
            <h1 className="text-lg sm:text-xl md:text-3xl font-quicksand font-semibold text-fenjes-purple">
              Fenjes Yoga na Cadeira
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-0.5 md:mt-1">
              Momentos de cura sem sair da cadeira
            </p>
          </div>

          {/* Header action buttons */}
          <div className="flex gap-2 mt-1 md:mt-0">
            <Button
              variant="outline"
              size={isMobile ? "sm" : "default"}
              className="text-xs md:text-sm h-8 md:h-10 px-2 md:px-4"
              onClick={() => navigate("/perfil")}
            >
              Meu Perfil
            </Button>
            <Button 
              variant="secondary"
              size={isMobile ? "sm" : "default"}
              className="text-xs md:text-sm h-8 md:h-10 px-2 md:px-4"
              onClick={() => navigate("/favoritos")}
            >
              <Heart size={isMobile ? 14 : 16} className="mr-1 md:mr-2" />
              {favoriteExercises.length ? favoriteExercises.length : 'Meus'} Favoritos
            </Button>
          </div>
        </div>
      </section>

      {/* Progress tracker - Using the new JourneyTracker component */}
      <section className="mb-4 sm:mb-6 md:mb-8">
        <JourneyTracker />
      </section>

      {/* Today's exercise - Adjusted for mobile */}
      <section className="mb-5 sm:mb-6 md:mb-8">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-fenjes-purple mb-2 sm:mb-3 md:mb-4">
          💜 Seu Momento de Cura de Hoje
        </h2>
        
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-fenjes-purple/5 to-fenjes-cream/30">
            {/* Exercise image */}
            <div className="bg-fenjes-purple/10 p-3 md:p-4 flex items-center justify-center">
              {todayExercise.imageUrl ? (
                <img 
                  src={todayExercise.imageUrl} 
                  alt={todayExercise.title} 
                  className="max-h-32 sm:max-h-40 md:max-h-48 object-contain"
                />
              ) : (
                <div className="h-32 sm:h-40 md:h-48 w-full flex items-center justify-center text-4xl md:text-5xl">
                  {getCategoryIcon(todayExercise.category)}
                </div>
              )}
            </div>
            
            {/* Exercise details */}
            <div className="md:col-span-2 p-3 sm:p-4 md:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{todayExercise.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4">{todayExercise.description}</p>
              
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                <span className="text-[10px] sm:text-xs bg-fenjes-purple/10 text-fenjes-purple px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex items-center gap-1">
                  💺 Na Cadeira
                </span>
                <span className="text-[10px] sm:text-xs bg-fenjes-purple/10 text-fenjes-purple px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex items-center gap-1">
                  ⏱️ {todayExercise.duration}
                </span>
                <span className="text-[10px] sm:text-xs bg-fenjes-yellow/10 text-fenjes-yellow-dark px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex items-center gap-1">
                  {getCategoryIcon(todayExercise.category)} {getCategoryLabel(todayExercise.category)}
                </span>
              </div>
              
              <div className="bg-fenjes-green/5 p-2 sm:p-3 rounded-lg mb-3 md:mb-4">
                <p className="text-xs sm:text-sm text-fenjes-green">
                  ✨ {todayExercise.specificBenefit}
                </p>
              </div>
              
              <Button
                className="w-full sm:w-auto bg-fenjes-purple hover:bg-fenjes-purple-light text-xs sm:text-sm py-1.5 sm:py-2"
                onClick={() => navigate(`/exercicio/${todayExercise.id}`)}
              >
                Começar Este Exercício
                <ChevronRight size={14} className="ml-1" />
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* All exercises - Responsive tabs with horizontal scroll on mobile */}
      <section>
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-between items-center mb-3 md:mb-6 border-b overflow-x-auto pb-1">
            <TabsList className="overflow-x-auto pb-1 md:pb-0 justify-start flex-nowrap gap-1">
              <TabsTrigger value="all" className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap px-2 sm:px-3">
                Todos Exercícios
              </TabsTrigger>
              <TabsTrigger value="neck" className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap px-2 sm:px-3">
                Cervical 💆‍♀️
              </TabsTrigger>
              <TabsTrigger value="shoulders" className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap px-2 sm:px-3">
                Ombros 🌸
              </TabsTrigger>
              <TabsTrigger value="back" className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap px-2 sm:px-3">
                Coluna 💪
              </TabsTrigger>
              <TabsTrigger value="hips" className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap px-2 sm:px-3">
                Quadril 🦋
              </TabsTrigger>
              <TabsTrigger value="full_body" className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap px-2 sm:px-3">
                Corpo Completo ✨
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <ChairExerciseList 
              exercises={chairYogaExercises} 
              title="Todos os Exercícios" 
              description="Todos os exercícios são projetados para serem praticados na cadeira, respeitando suas limitações."
              favoriteExercises={favoriteExercises}
              onToggleFavorite={toggleFavorite}
              userProfile={userProfile || undefined}
            />
          </TabsContent>

          <TabsContent value="neck">
            <ChairExerciseList 
              exercises={exercisesByCategory.neck || []} 
              title="Libertação Cervical"
              description="Exercícios específicos para aliviar dores no pescoço e região cervical."
              favoriteExercises={favoriteExercises}
              onToggleFavorite={toggleFavorite}
              userProfile={userProfile || undefined}
            />
          </TabsContent>

          <TabsContent value="shoulders">
            <ChairExerciseList 
              exercises={exercisesByCategory.shoulders || []} 
              title="Desbloqueio dos Ombros"
              description="Movimentos para liberar tensão e recuperar mobilidade dos ombros."
              favoriteExercises={favoriteExercises}
              onToggleFavorite={toggleFavorite}
              userProfile={userProfile || undefined}
            />
          </TabsContent>

          <TabsContent value="back">
            <ChairExerciseList 
              exercises={exercisesByCategory.back || []} 
              title="Cuidado com a Coluna"
              description="Exercícios para aliviar dores lombares e melhorar postura."
              favoriteExercises={favoriteExercises}
              onToggleFavorite={toggleFavorite}
              userProfile={userProfile || undefined}
            />
          </TabsContent>

          <TabsContent value="hips">
            <ChairExerciseList 
              exercises={exercisesByCategory.hips || []} 
              title="Mobilidade do Quadril"
              description="Exercícios para melhorar flexibilidade e reduzir dores no quadril."
              favoriteExercises={favoriteExercises}
              onToggleFavorite={toggleFavorite}
              userProfile={userProfile || undefined}
            />
          </TabsContent>

          <TabsContent value="full_body">
            <ChairExerciseList 
              exercises={exercisesByCategory.full_body || []} 
              title="Sequências Completas"
              description="Exercícios que trabalham múltiplas áreas do corpo ao mesmo tempo."
              favoriteExercises={favoriteExercises}
              onToggleFavorite={toggleFavorite}
              userProfile={userProfile || undefined}
            />
          </TabsContent>
        </Tabs>
        
        {/* Medical disclaimer */}
        <MedicalDisclaimer variant="exercise" className="mt-8" />
      </section>
    </div>
  );
}

// Helper functions for categories
function getCategoryIcon(category: string): React.ReactNode {
  switch (category) {
    case "neck":
      return "🔄";
    case "shoulders":
      return "🙌";
    case "back":
      return "⬆️";
    case "hips":
      return "💃";
    case "full_body":
    case "full-body":
      return "✨";
    default:
      return "🧘‍♀️";
  }
}

function getCategoryLabel(category: string): string {
  switch (category) {
    case "neck":
      return "Cervical";
    case "shoulders":
      return "Ombros";
    case "back":
      return "Coluna";
    case "hips":
      return "Quadril";
    case "full_body":
    case "full-body":
      return "Corpo Todo";
    default:
      return category;
  }
} 