import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChairYogaExercise, ChairYogaProfile } from "@/types/chair-yoga";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface ChairExercisePlayerProps {
  exercise: ChairYogaExercise;
  userProfile?: Partial<ChairYogaProfile>;
  onComplete?: () => void;
  onBack?: () => void;
}

export function ChairExercisePlayer({
  exercise,
  userProfile,
  onComplete,
  onBack,
}: ChairExercisePlayerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [chairSetup, setChairSetup] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  // Parse duration string to seconds
  const parseDuration = (duration: string): number => {
    if (duration.includes("min")) {
      const minutes = parseInt(duration.split(" ")[0], 10);
      return minutes * 60;
    } else if (duration.includes("s")) {
      return parseInt(duration.split("s")[0], 10);
    }
    return 60; // Default to 1 minute if format is unknown
  };

  // Initialize timer when step changes
  useEffect(() => {
    if (!exercise || !exercise.steps[currentStep]) return;
    
    const stepDuration = parseDuration(exercise.steps[currentStep].duration);
    setTimeLeft(stepDuration);
    setTotalTime(stepDuration);
    setIsPaused(true);
  }, [currentStep, exercise]);

  // Timer functionality
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          // Auto-advance to next step if not the last one
          if (currentStep < exercise.steps.length - 1) {
            setCurrentStep(currentStep + 1);
          } else {
            onComplete && onComplete();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, currentStep, exercise, onComplete]);

  // Format time for display
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Check if an adaptation exists for user's condition
  const getAdaptation = (): string | null => {
    if (!userProfile || !userProfile.conditions || !exercise.adaptations) return null;
    
    for (const condition of userProfile.conditions) {
      const adaptation = exercise.adaptations[condition];
      if (adaptation) return adaptation;
    }
    
    return null;
  };

  // Safety check if exercise contraindicated for user
  const isContraindicated = (): boolean => {
    if (!userProfile || !userProfile.conditions || !exercise.contraindications) return false;
    
    return exercise.contraindications.some(
      contraindication => userProfile.conditions?.includes(contraindication)
    );
  };

  if (!exercise) return null;

  return (
    <div className="chair-exercise-player max-w-4xl mx-auto space-y-4 md:space-y-6">
      {/* Back button */}
      <Button
        variant="ghost"
        size="sm" 
        onClick={onBack}
        className="text-xs md:text-sm"
      >
        <ChevronLeft size={16} className="mr-1" />
        Voltar aos exercícios
      </Button>
      
      {/* Exercise header */}
      <div className="bg-gradient-to-r from-fenjes-purple to-fenjes-purple-light text-white p-4 md:p-6 rounded-xl">
        <h1 className="text-xl md:text-2xl font-semibold mb-2">{exercise.title}</h1>
        <p className="text-sm md:text-base text-fenjes-cream opacity-90 mb-3">{exercise.description}</p>
        
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full flex items-center gap-1">
            💺 Exercício na Cadeira
          </span>
          <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full flex items-center gap-1">
            ⏱️ {exercise.duration}
          </span>
        </div>
      </div>

      {/* Chair setup guide */}
      {!chairSetup && (
        <Card className="p-4 md:p-6 border-fenjes-yellow/20 bg-fenjes-yellow/5">
          <h2 className="text-lg md:text-xl font-semibold text-fenjes-purple mb-4">
            💺 Prepare sua Cadeira para o Exercício
          </h2>
          
          <div className="space-y-3 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-fenjes-green flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span>Cadeira estável, sem rodinhas (ou trave as rodinhas)</span>
            </div>
            
            {exercise.chairRequirements.backrest && (
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-fenjes-green flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Encosto disponível para apoio</span>
              </div>
            )}
            
            {exercise.chairRequirements.armrests && (
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-fenjes-green flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Apoio para braços disponível</span>
              </div>
            )}
            
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-fenjes-green flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span>Pés tocam o chão confortavelmente</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-fenjes-green flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span>Espaço livre ao redor para mover braços</span>
            </div>
          </div>
          
          {isContraindicated() && (
            <div className="bg-red-50 border border-red-200 p-3 rounded-md mb-4">
              <div className="flex items-center gap-2">
                <AlertCircle size={18} className="text-red-500" />
                <h3 className="font-medium text-red-600">Atenção: Contraindicação Detectada</h3>
              </div>
              <p className="text-sm text-red-600 mt-1">
                Este exercício pode não ser adequado para sua condição específica. 
                Considere consultar seu profissional de saúde antes de prosseguir.
              </p>
            </div>
          )}
          
          <Button 
            className="w-full bg-fenjes-purple hover:bg-fenjes-purple-light"
            onClick={() => setChairSetup(true)}
          >
            💜 Minha Cadeira Está Pronta!
          </Button>
        </Card>
      )}

      {/* Exercise steps */}
      {chairSetup && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Visual guidance */}
          <Card className="p-4 md:p-6 border-fenjes-purple/20">
            <div className="bg-fenjes-cream/30 rounded-lg p-4 flex items-center justify-center">
              {exercise.imageUrl ? (
                <img 
                  src={exercise.imageUrl} 
                  alt={`Demonstração de ${exercise.steps[currentStep].name}`}
                  className="max-h-64 object-contain rounded-lg"
                />
              ) : (
                <div className="h-64 w-full flex items-center justify-center text-5xl">
                  {getCategoryIcon(exercise.category)}
                </div>
              )}
            </div>
            
            <div className="mt-4 p-3 bg-fenjes-purple/5 rounded-lg">
              <h4 className="font-medium text-sm text-fenjes-purple mb-1">
                💺 Posição na Cadeira:
              </h4>
              <p className="text-sm text-fenjes-text-warm">
                {exercise.chairPosition}
              </p>
            </div>
            
            {/* Progress bar */}
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Passo {currentStep + 1}/{exercise.steps.length}</span>
                <span>{formatTime(timeLeft)}</span>
              </div>
              <Progress value={(timeLeft / totalTime) * 100} className="h-2" />
            </div>
          </Card>
          
          {/* Instructions */}
          <Card className="p-4 md:p-6 border-fenjes-purple/20">
            <h3 className="text-lg md:text-xl font-medium text-fenjes-purple mb-3">
              {exercise.steps[currentStep].name}
            </h3>
            
            <div className="bg-fenjes-purple/5 p-4 rounded-lg mb-4">
              <p className="text-fenjes-text-warm">{exercise.steps[currentStep].instruction}</p>
            </div>
            
            {/* Adaptation for user condition */}
            {getAdaptation() && (
              <div className="bg-fenjes-green/10 p-3 rounded-lg mb-4">
                <h4 className="font-medium text-sm text-fenjes-green mb-1">
                  💜 Adaptação para sua condição:
                </h4>
                <p className="text-sm text-fenjes-text-warm">{getAdaptation()}</p>
              </div>
            )}
            
            {/* Breathing guidance */}
            <div className="bg-blue-50 p-3 rounded-lg mb-4">
              <h4 className="font-medium text-blue-800 mb-1">🫁 Respiração:</h4>
              <p className="text-sm text-blue-700">{exercise.steps[currentStep].breathing}</p>
            </div>
            
            {/* Visualization if available */}
            {exercise.steps[currentStep].visualization && (
              <div className="bg-fenjes-yellow/10 p-3 rounded-lg mb-4">
                <h4 className="font-medium text-fenjes-yellow-dark mb-1">✨ Visualização:</h4>
                <p className="text-sm text-fenjes-text-warm">
                  {exercise.steps[currentStep].visualization}
                </p>
              </div>
            )}
            
            {/* Safety note if available */}
            {exercise.steps[currentStep].safetyNote && (
              <div className="bg-red-50 p-3 rounded-lg mb-4">
                <h4 className="font-medium text-red-600 mb-1">⚠️ Nota de Segurança:</h4>
                <p className="text-sm text-red-700">
                  {exercise.steps[currentStep].safetyNote}
                </p>
              </div>
            )}
          </Card>
          
          {/* Controls */}
          <div className="lg:col-span-2 flex flex-col md:flex-row justify-center items-center gap-3">
            {currentStep > 0 && (
              <Button 
                variant="outline"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="w-full md:w-auto"
              >
                <ChevronLeft size={18} className="mr-1" />
                Passo Anterior
              </Button>
            )}
            
            <Button
              variant={isPaused ? "default" : "secondary"}
              onClick={() => setIsPaused(!isPaused)}
              className="w-full md:w-auto"
            >
              {isPaused ? (
                <>
                  <Play size={18} className="mr-1" />
                  Iniciar
                </>
              ) : (
                <>
                  <Pause size={18} className="mr-1" />
                  Pausar
                </>
              )}
            </Button>
            
            {currentStep < exercise.steps.length - 1 ? (
              <Button
                variant="outline"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="w-full md:w-auto"
              >
                Próximo Passo
                <ChevronRight size={18} className="ml-1" />
              </Button>
            ) : (
              <Button
                variant="secondary"
                onClick={onComplete}
                className="w-full md:w-auto"
              >
                <CheckCircle size={18} className="mr-1" />
                Concluir Exercício
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Helper function to get category icons
function getCategoryIcon(category: string): React.ReactNode {
  switch (category) {
    case "neck":
      return "💆‍♀️";
    case "shoulders":
      return "🌸";
    case "back":
      return "💪";
    case "hips":
      return "🦋";
    case "full_body":
      return "✨";
    default:
      return "💜";
  }
} 