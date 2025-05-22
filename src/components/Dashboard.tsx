import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CelebratoryProgress } from "@/components/ui/celebratory-progress";
import { DeepGlassCard } from "@/components/ui/deep-glass-card";
import { ExerciseCard } from "@/components/ui/exercise-card";
import { BreathingButton } from "@/components/ui/breathing-button";
import { UserProfile } from "@/types/onboarding";
import { Trophy, Calendar, Clock, PlayCircle, Info, ArrowRight, Calendar as CalendarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@/hooks/use-media-query";

interface DashboardProps {
  userProfile?: UserProfile | null;
  featuredExercises: any[];
  recommendedExercises: any[];
}

export function Dashboard({ userProfile, featuredExercises, recommendedExercises }: DashboardProps) {
  const navigate = useNavigate();
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 640 : false;

  // Calcula o progresso do usuário de forma segura
  const progress = userProfile?.currentDay 
    ? Math.min((userProfile.currentDay / 30) * 100, 100) // Assumindo um programa de 30 dias
    : 0;

  return (
    <div className="container mx-auto px-4 md:px-6 py-4 md:py-6">
      {/* Cabeçalho da Dashboard - Adaptado para mobile */}
      <section className="mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="w-full md:w-auto">
            <h1 className="text-xl md:text-3xl font-quicksand font-semibold text-fenjes-purple">
              Bem-vindo{userProfile?.firstName ? `, ${userProfile.firstName}` : ''}!
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              O que vamos fazer hoje para melhorar seu bem-estar?
            </p>
          </div>
          
          {/* Botão de ação principal - Largura completa no mobile */}
          <BreathingButton 
            onClick={() => navigate("/treino-diario")}
            size={isMobile ? "default" : "lg"}
            breathingEffect={true}
            lowPerformanceMode={isMobile}
            className="w-full md:w-auto mt-2 md:mt-0"
          >
            <div className="flex items-center justify-center gap-2">
              <PlayCircle className="h-5 w-5" />
              <span>Iniciar Treino Diário</span>
            </div>
          </BreathingButton>
        </div>
        
        {/* Progresso do usuário - Adaptado para mobile */}
        {userProfile && (
          <DeepGlassCard 
            className="p-3 md:p-6"
            variant={progress >= 70 ? "empowered" : progress >= 40 ? "energetic" : "default"}
          >
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h2 className="text-base md:text-xl font-semibold">Seu Progresso</h2>
                  <p className="text-xs md:text-sm text-gray-600">
                    Dia {userProfile.currentDay} do seu programa personalizado
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-1 md:mt-0">
                  <Trophy className="h-4 md:h-5 w-4 md:w-5 text-fenjes-yellow" />
                  <span className="text-xs md:text-sm font-medium">
                    {progress >= 100 ? 'Programa concluído!' : `${Math.round(progress)}% concluído`}
                  </span>
                </div>
              </div>
              
              <CelebratoryProgress 
                value={progress}
                max={100}
                color={progress >= 70 ? "bg-gradient-to-r from-fenjes-yellow to-fenjes-purple" : "bg-fenjes-purple"}
                showAnimation={true}
                lowPerformanceMode={isMobile}
              />
            </div>
          </DeepGlassCard>
        )}
      </section>
      
      {/* Grid principal responsivo */}
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        {/* Seção de exercícios recomendados */}
        <Card>
          <CardHeader className="px-4 py-3 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <CardTitle className="text-lg md:text-xl text-fenjes-purple-dark">
                Seus Exercícios
              </CardTitle>
              <BreathingButton 
                variant="link"
                onClick={() => navigate("/exercicios")}
                className="text-fenjes-purple text-sm p-0 h-auto"
                breathingEffect={false}
              >
                <div className="flex items-center gap-1">
                  <span>Ver todos</span>
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                </div>
              </BreathingButton>
            </div>
            <CardDescription className="text-xs md:text-sm mt-1">
              Exercícios personalizados para você
            </CardDescription>
          </CardHeader>
          
          <CardContent className="px-4 pb-4 md:p-6 md:pt-0">
            {/* Grid responsivo para exercícios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {(recommendedExercises || []).map((exercise, index) => (
                <ExerciseCard
                  key={exercise.id || index}
                  exercise={exercise}
                  variant={index === 0 ? "featured" : "default"}
                  imageUrl={`/images/exercises/${exercise.id || `exercise-${index+1}`}.jpg`}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Seção de informações e estatísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {/* Próxima sessão */}
          <DeepGlassCard className="p-3 md:p-4" variant="primary">
            <div className="flex items-start gap-2 md:gap-3">
              <div className="bg-fenjes-purple/10 p-1.5 md:p-2 rounded-full">
                <CalendarIcon className="h-4 w-4 md:h-6 md:w-6 text-fenjes-purple" />
              </div>
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-0.5 md:mb-1">Próxima Sessão</h3>
                <p className="text-xs md:text-sm text-gray-600">Hoje, 17:00</p>
                <p className="text-xs md:text-sm text-gray-600 mt-0.5 md:mt-1">Alongamentos para Coluna</p>
                <BreathingButton 
                  variant="link" 
                  className="text-fenjes-purple p-0 mt-1 md:mt-2 text-xs md:text-sm h-auto" 
                  breathingEffect={false}
                  onClick={() => navigate("/calendario")}
                >
                  <span>Ver calendário</span>
                </BreathingButton>
              </div>
            </div>
          </DeepGlassCard>
          
          {/* Estatísticas */}
          <DeepGlassCard className="p-3 md:p-4" variant="calm">
            <h3 className="font-semibold text-base md:text-lg mb-2 md:mb-3">Seus Dados</h3>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <Calendar className="h-4 w-4 md:h-5 md:w-5 text-fenjes-purple-light" />
                  <span className="text-xs md:text-sm">Dias consecutivos</span>
                </div>
                <span className="font-medium text-xs md:text-sm">{userProfile?.currentDay || 0}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-fenjes-green" />
                  <span className="text-xs md:text-sm">Minutos de prática</span>
                </div>
                <span className="font-medium text-xs md:text-sm">{(userProfile?.currentDay || 0) * 15}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <Trophy className="h-4 w-4 md:h-5 md:w-5 text-fenjes-yellow" />
                  <span className="text-xs md:text-sm">Conquistas</span>
                </div>
                <span className="font-medium text-xs md:text-sm">{userProfile?.currentDay ? Math.floor(userProfile.currentDay / 5) : 0}</span>
              </div>
            </div>
          </DeepGlassCard>
          
          {/* Dica do dia */}
          <DeepGlassCard className="p-3 md:p-4 sm:col-span-2 lg:col-span-1" variant="energetic">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 md:h-5 md:w-5 text-fenjes-purple mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm md:text-base mb-0.5 md:mb-1">Dica do Dia</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Mantenha uma garrafa de água por perto durante os exercícios para se manter hidratado.
                </p>
              </div>
            </div>
          </DeepGlassCard>
        </div>
      </div>
    </div>
  );
} 