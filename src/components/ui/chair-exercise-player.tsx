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
    <div className="chair-exercise-player max-w-4xl mx-auto space-y-3 md:space-y-6 px-3 md:px-6">
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
      
      {/* Exercise header - Made more compact on mobile */}
      <div className="bg-gradient-to-r from-fenjes-purple to-fenjes-purple-light text-white p-3 md:p-6 rounded-lg md:rounded-xl">
        <h1 className="text-lg md:text-2xl font-semibold mb-1 md:mb-2">{exercise.title}</h1>
        <p className="text-xs md:text-base text-fenjes-cream opacity-90 mb-2 md:mb-3">{exercise.description}</p>
        
        <div className="flex flex-wrap gap-1 md:gap-2">
          <span className="text-[10px] md:text-xs bg-white/20 text-white px-1.5 md:px-2 py-0.5 md:py-1 rounded-full flex items-center gap-1">
            💺 Exercício na Cadeira
          </span>
          <span className="text-[10px] md:text-xs bg-white/20 text-white px-1.5 md:px-2 py-0.5 md:py-1 rounded-full flex items-center gap-1">
            ⏱️ {exercise.duration}
          </span>
        </div>
      </div>

      {/* Chair setup guide - More compact on mobile */}
      {!chairSetup && (
        <Card className="p-3 md:p-6 border-fenjes-yellow/20 bg-fenjes-yellow/5">
          <h2 className="text-base md:text-xl font-semibold text-fenjes-purple mb-3 md:mb-4">
            💺 Prepare sua Cadeira para o Exercício
          </h2>
          
          <div className="space-y-2 md:space-y-3 mb-4 md:mb-5 text-sm md:text-base">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-fenjes-green flex items-center justify-center">
                <span className="text-white text-xs md:text-sm">✓</span>
              </div>
              <span>Cadeira estável, sem rodinhas (ou trave as rodinhas)</span>
            </div>
            
            {exercise.chairRequirements.backrest && (
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-fenjes-green flex items-center justify-center">
                  <span className="text-white text-xs md:text-sm">✓</span>
                </div>
                <span>Encosto disponível para apoio</span>
              </div>
            )}
            
            {exercise.chairRequirements.armrests && (
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-fenjes-green flex items-center justify-center">
                  <span className="text-white text-xs md:text-sm">✓</span>
                </div>
                <span>Apoio para braços disponível</span>
              </div>
            )}
            
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-fenjes-green flex items-center justify-center">
                <span className="text-white text-xs md:text-sm">✓</span>
              </div>
              <span>Pés tocam o chão confortavelmente</span>
            </div>
            
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-fenjes-green flex items-center justify-center">
                <span className="text-white text-xs md:text-sm">✓</span>
              </div>
              <span>Espaço livre ao redor para mover braços</span>
            </div>
          </div>
          
          {isContraindicated() && (
            <div className="bg-red-50 border border-red-200 p-2 md:p-3 rounded-md mb-3 md:mb-4 text-xs md:text-sm">
              <div className="flex items-center gap-1.5 md:gap-2">
                <AlertCircle size={16} className="text-red-500" />
                <h3 className="font-medium text-red-600">Atenção: Contraindicação Detectada</h3>
              </div>
              <p className="text-red-600 mt-1">
                Este exercício pode não ser adequado para sua condição específica. 
                Considere consultar seu profissional de saúde antes de prosseguir.
              </p>
            </div>
          )}
          
          <Button 
            className="w-full bg-fenjes-purple hover:bg-fenjes-purple-light text-xs md:text-sm"
            onClick={() => setChairSetup(true)}
          >
            💜 Minha Cadeira Está Pronta!
          </Button>
        </Card>
      )}

      {/* Exercise steps */}
      {chairSetup && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
          {/* Visual guidance */}
          <Card className="p-3 md:p-6 border-fenjes-purple/20">
            <div className="bg-fenjes-cream/30 rounded-lg p-2 md:p-4 flex items-center justify-center">
              {exercise.imageUrl ? (
                <img 
                  src={exercise.imageUrl} 
                  alt={`Demonstração de ${exercise.steps[currentStep].name}`}
                  className="max-h-48 md:max-h-64 object-contain rounded-lg"
                />
              ) : (
                <div className="h-48 md:h-64 w-full flex items-center justify-center text-4xl md:text-5xl">
                  {getCategoryIcon(exercise.category)}
                </div>
              )}
            </div>
            
            <div className="mt-3 md:mt-4 p-2 md:p-3 bg-fenjes-purple/5 rounded-lg">
              <h4 className="font-medium text-xs md:text-sm text-fenjes-purple mb-0.5 md:mb-1">
                💺 Posição na Cadeira:
              </h4>
              <p className="text-xs md:text-sm text-fenjes-text-warm">
                {exercise.chairPosition}
              </p>
            </div>
            
            {/* Progress bar */}
            <div className="mt-3 md:mt-4">
              <div className="flex justify-between text-xs md:text-sm mb-1">
                <span>Passo {currentStep + 1}/{exercise.steps.length}</span>
                <span>{formatTime(timeLeft)}</span>
              </div>
              <Progress value={(timeLeft / totalTime) * 100} className="h-1.5 md:h-2" />
            </div>
          </Card>
          
          {/* Instructions */}
          <Card className="p-3 md:p-6 border-fenjes-purple/20">
            <h3 className="text-base md:text-xl font-medium text-fenjes-purple mb-2 md:mb-3">
              {exercise.steps[currentStep].name}
            </h3>
            
            <div className="bg-fenjes-purple/5 p-2 md:p-4 rounded-lg mb-2 md:mb-4 text-xs md:text-base">
              <p className="text-fenjes-text-warm">{exercise.steps[currentStep].instruction}</p>
            </div>
            
            {/* Adaptation for user condition */}
            {getAdaptation() && (
              <div className="bg-fenjes-green/10 p-2 md:p-3 rounded-lg mb-2 md:mb-4">
                <h4 className="font-medium text-xs md:text-sm text-fenjes-green mb-0.5 md:mb-1">
                  💜 Adaptação para sua condição:
                </h4>
                <p className="text-xs md:text-sm text-fenjes-text-warm">{getAdaptation()}</p>
              </div>
            )}
            
            {/* Breathing guidance */}
            <div className="bg-blue-50 p-2 md:p-3 rounded-lg mb-2 md:mb-4">
              <h4 className="font-medium text-xs md:text-sm text-blue-800 mb-0.5 md:mb-1">🫁 Respiração:</h4>
              <p className="text-xs md:text-sm text-blue-700">{exercise.steps[currentStep].breathing}</p>
            </div>
            
            {/* Visualization if available */}
            {exercise.steps[currentStep].visualization && (
              <div className="bg-fenjes-yellow/10 p-2 md:p-3 rounded-lg mb-2 md:mb-4">
                <h4 className="font-medium text-xs md:text-sm text-fenjes-yellow-dark mb-0.5 md:mb-1">✨ Visualização:</h4>
                <p className="text-xs md:text-sm text-fenjes-text-warm">
                  {exercise.steps[currentStep].visualization}
                </p>
              </div>
            )}
            
            {/* Safety note if available */}
            {exercise.steps[currentStep].safetyNote && (
              <div className="bg-red-50 p-2 md:p-3 rounded-lg mb-2 md:mb-4">
                <h4 className="font-medium text-xs md:text-sm text-red-600 mb-0.5 md:mb-1">⚠️ Nota de Segurança:</h4>
                <p className="text-xs md:text-sm text-red-700">
                  {exercise.steps[currentStep].safetyNote}
                </p>
              </div>
            )}
          </Card>
          
          {/* Controls - Stack on mobile, row on larger screens */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mt-4">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(currentStep - 1)}
              disabled={currentStep === 0}
              className="w-full md:w-auto h-12 md:h-14 text-base md:text-lg"
              aria-label="Passo anterior"
            >
              <ChevronLeft size={24} className="mr-2" aria-hidden="true" />
              Anterior
            </Button>

            <Button
              variant={isPaused ? "default" : "secondary"}
              onClick={() => setIsPaused(!isPaused)}
              className="w-full md:w-auto h-12 md:h-14 text-base md:text-lg"
              aria-label={isPaused ? "Iniciar exercício" : "Pausar exercício"}
            >
              {isPaused ? (
                <>
                  <Play size={24} className="mr-2" aria-hidden="true" />
                  Iniciar
                </>
              ) : (
                <>
                  <Pause size={24} className="mr-2" aria-hidden="true" />
                  Pausar
                </>
              )}
            </Button>

            <Button
              variant="outline"
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={currentStep === exercise.steps.length - 1}
              className="w-full md:w-auto h-12 md:h-14 text-base md:text-lg"
              aria-label="Próximo passo"
            >
              <ChevronRight size={24} className="mr-2" aria-hidden="true" />
              Próximo
            </Button>
          </div>
        </div>
      )}

      {/* Progress indicator */}
      <div 
        className="mt-6"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={exercise.steps.length}
        aria-valuenow={currentStep + 1}
        aria-label="Progresso do exercício"
      >
        <div className="flex justify-between text-sm md:text-base mb-2">
          <span>Passo {currentStep + 1} de {exercise.steps.length}</span>
          <span>{Math.round(((currentStep + 1) / exercise.steps.length) * 100)}%</span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
          <div 
            className="h-full bg-fenjes-purple rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / exercise.steps.length) * 100}%` }}
          />
        </div>
      </div>
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