import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface JourneyTrackerProps {
  onDayComplete?: (day: number) => void;
  className?: string;
}

export function JourneyTracker({ onDayComplete, className }: JourneyTrackerProps) {
  const [currentDay, setCurrentDay] = useState(1);
  const [todayComplete, setTodayComplete] = useState(false);
  const { toast } = useToast();
  
  // Carrega os dados do progresso ao iniciar
  useEffect(() => {
    try {
      // Verificar exercícios completos
      const completedExercises = JSON.parse(localStorage.getItem('completed-exercises') || '{}');
      const exerciseDays = Object.keys(completedExercises).length;
      
      // Verificar se há exercícios concluídos hoje
      const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
      const todayExercises = completedExercises[today] || [];
      
      // Determinar o dia atual baseado nos dias com exercícios completados
      const calculatedDay = Math.min(exerciseDays > 0 ? exerciseDays : 1, 21);
      
      // Atualizar o perfil do usuário com o dia atual
      const userProfile = JSON.parse(sessionStorage.getItem('userProfile') || '{}');
      userProfile.currentDay = calculatedDay;
      sessionStorage.setItem('userProfile', JSON.stringify(userProfile));
      
      // Atualizar o estado
      setCurrentDay(calculatedDay);
      setTodayComplete(todayExercises.length > 0);
      
    } catch (error) {
      console.error("Erro ao carregar progresso da jornada:", error);
      setCurrentDay(1);
    }
  }, []);
  
  // Função para marcar o dia atual como concluído manualmente
  const completeToday = () => {
    try {
      const today = new Date().toISOString().split('T')[0];
      const completedExercises = JSON.parse(localStorage.getItem('completed-exercises') || '{}');
      
      if (!completedExercises[today]) {
        completedExercises[today] = ['manual_completion'];
        localStorage.setItem('completed-exercises', JSON.stringify(completedExercises));
      }
      
      // Determinar o novo dia
      const newDay = Math.min(currentDay + 1, 21);
      
      // Atualizar perfil
      const userProfile = JSON.parse(sessionStorage.getItem('userProfile') || '{}');
      userProfile.currentDay = newDay;
      sessionStorage.setItem('userProfile', JSON.stringify(userProfile));
      
      setCurrentDay(newDay);
      setTodayComplete(true);
      
      if (onDayComplete) {
        onDayComplete(newDay);
      }
      
      toast({
        title: "Dia marcado como completo",
        description: newDay >= 21 
          ? "Parabéns! Você completou os 21 dias da jornada!" 
          : `Progresso atualizado para dia ${newDay}`,
      });
    } catch (error) {
      console.error("Erro ao completar dia:", error);
    }
  };
  
  // Mensagens para cada fase do plano
  const getJourneyMessage = () => {
    if (currentDay <= 7) {
      return "Fase 1: Construindo o hábito diário";
    } else if (currentDay <= 14) {
      return "Fase 2: Sentindo os primeiros resultados";
    } else {
      return "Fase 3: Transformação e domínio";
    }
  };

  // Porcentagem de conclusão
  const completionPercentage = Math.round((currentDay / 21) * 100);
  
  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-fenjes-purple to-fenjes-purple-light text-white p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-lg">Plano Prático 21 Dias</h2>
            <span className="bg-white/20 px-2 py-1 rounded text-xs">Dia {currentDay}/21</span>
          </div>
          <p className="text-sm text-fenjes-cream mb-3">{getJourneyMessage()}</p>
          
          <Progress 
            value={completionPercentage} 
            className="h-2 bg-white/20 [&>div]:bg-fenjes-yellow"
          />
        </div>
        
        <div className="p-4 bg-card">
          <p className="text-gray-700 text-sm mb-3">
            Cada prática é um passo em direção à sua transformação. Complete os exercícios diariamente para progredir.
          </p>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{completionPercentage}% completo</span>
            
            {!todayComplete && currentDay < 21 && (
              <Button 
                size="sm" 
                variant="outline"
                onClick={completeToday}
                className="text-xs"
              >
                Marcar Dia Como Completo
              </Button>
            )}
            
            {todayComplete && (
              <span className="text-fenjes-green text-xs font-medium">✓ Concluído hoje</span>
            )}
            
            {currentDay >= 21 && (
              <span className="text-fenjes-purple text-xs font-medium">Jornada completada!</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 