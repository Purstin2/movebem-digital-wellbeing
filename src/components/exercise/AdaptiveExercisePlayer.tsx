
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { YogaIllustration } from "@/components/illustrations/YogaIllustration";
import { 
  Play, Pause, ArrowLeft, ArrowRight, 
  AlertTriangle, CheckCircle2, Heart, Volume2, VolumeX,
  Settings
} from "lucide-react";
import { ExerciseStep } from "@/types/onboarding";

interface AdaptiveExercisePlayerProps {
  title: string;
  steps: ExerciseStep[];
  category: string;
  onComplete: () => void;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  benefits?: string[];
}

const AdaptiveExercisePlayer = ({ 
  title, 
  steps, 
  category, 
  onComplete, 
  difficulty = 'beginner',
  benefits = []
}: AdaptiveExercisePlayerProps) => {
  // Player state
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60); // Default to 60 seconds per step
  const [adaptationLevel, setAdaptationLevel] = useState<'easy' | 'normal' | 'challenging'>('normal');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [userFeedback, setUserFeedback] = useState<'too_easy' | 'perfect' | 'too_hard' | null>(null);
  const [painCheckRequired, setPainCheckRequired] = useState(false);
  const [completed, setCompleted] = useState(false);

  // Set initial adaptation level based on difficulty
  useEffect(() => {
    if (difficulty === 'beginner') {
      setAdaptationLevel('easy');
    } else if (difficulty === 'advanced') {
      setAdaptationLevel('challenging');
    } else {
      setAdaptationLevel('normal');
    }
  }, [difficulty]);

  // Timer functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            // Auto-advance to next step
            if (currentStep < steps.length - 1) {
              setCurrentStep(prev => prev + 1);
              return 60; // Reset timer for next step
            } else {
              setIsPlaying(false);
              setCompleted(true);
              onComplete();
              return 0;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, timeRemaining, currentStep, steps, onComplete]);

  // Initialize timer when step changes
  useEffect(() => {
    if (currentStep < steps.length) {
      const duration = steps[currentStep].duration ? 
        parseInt(steps[currentStep].duration.split(' ')[0]) * 60 : 60;
      setTimeRemaining(duration);
    }
  }, [currentStep, steps]);

  // Pain check on step transition
  useEffect(() => {
    if (currentStep > 0 && currentStep % 2 === 0) {
      setPainCheckRequired(true);
    }
  }, [currentStep]);

  const currentStepData = steps[currentStep];
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;
  const timeProgress = currentStepData ? 
    timeRemaining > 0 ? ((60 - timeRemaining) / 60) * 100 : 100 : 0;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setIsPlaying(false);
    } else {
      setCompleted(true);
      onComplete();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setIsPlaying(false);
    }
  };

  const handleFeedback = (feedback: 'too_easy' | 'perfect' | 'too_hard') => {
    setUserFeedback(feedback);
    
    // Auto-adjust based on feedback
    if (feedback === 'too_easy' && adaptationLevel !== 'challenging') {
      setAdaptationLevel('challenging');
    } else if (feedback === 'too_hard' && adaptationLevel !== 'easy') {
      setAdaptationLevel('easy');
    }
    
    setTimeout(() => setUserFeedback(null), 3000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getAdaptationColor = () => {
    return adaptationLevel === 'easy' ? 'bg-green-100 text-green-800' :
           adaptationLevel === 'challenging' ? 'bg-orange-100 text-orange-800' :
           'bg-blue-100 text-blue-800';
  };

  if (!currentStepData) return <div>Exercício concluído!</div>;
  
  if (completed) {
    return (
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-movebem-purple-light rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-movebem-purple" />
          </div>
          <h2 className="text-xl font-quicksand font-bold mb-2">Exercício Concluído!</h2>
          <p className="text-gray-600 mb-4">Parabéns por completar o exercício.</p>
          <Button className="bg-movebem-purple hover:bg-movebem-purple-dark" onClick={onComplete}>
            Voltar para Exercícios
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Exercise Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-quicksand text-2xl font-bold text-gray-800">
            {title}
          </h1>
          <div className="flex items-center gap-3 mt-2">
            <Badge className={getAdaptationColor()}>
              Nível: {adaptationLevel === 'easy' ? 'Suave' : 
                      adaptationLevel === 'challenging' ? 'Desafiador' : 'Normal'}
            </Badge>
            <Badge variant="outline">
              Passo {currentStep + 1} de {steps.length}
            </Badge>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSoundEnabled(!soundEnabled)}
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </Button>
          
          <Button variant="outline" size="icon">
            <Settings size={18} />
          </Button>
        </div>
      </div>

      {/* Overall Progress */}
      <Card>
        <CardContent className="pt-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progresso do exercício</span>
            <span>{Math.round(progressPercentage)}% concluído</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </CardContent>
      </Card>

      {/* Pain Check */}
      {painCheckRequired && (
        <Alert className="border-orange-200 bg-orange-50">
          <Heart className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            <strong>Check de Segurança:</strong> Como está se sentindo? Se a dor aumentou, 
            vamos ajustar para um nível mais suave.
            <div className="flex gap-2 mt-2">
              <Button size="sm" variant="outline" onClick={() => {
                setAdaptationLevel('easy');
                setPainCheckRequired(false);
              }}>
                Mais suave, por favor
              </Button>
              <Button size="sm" variant="outline" onClick={() => setPainCheckRequired(false)}>
                Estou bem, pode continuar
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Main Player */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Illustration and Controls */}
        <Card className="lg:col-span-1">
          <CardContent className="p-6">
            {/* Movement illustration */}
            <div className="bg-movebem-purple-light/20 rounded-lg aspect-square flex items-center justify-center mb-4">
              <YogaIllustration pose={currentStepData.pose as any} />
            </div>
            
            {/* Timer */}
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-movebem-purple">
                {formatTime(timeRemaining)}
              </div>
              <Progress value={timeProgress} className="h-1 mt-2" />
            </div>
            
            {/* Controls */}
            <div className="flex justify-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevStep}
                disabled={currentStep === 0}
                className={currentStep === 0 ? "opacity-50" : ""}
              >
                <ArrowLeft size={18} />
              </Button>
              
              <Button
                onClick={isPlaying ? handlePause : handlePlay}
                className="bg-movebem-purple hover:bg-movebem-purple-dark"
              >
                {isPlaying ? <Pause size={18} className="mr-1" /> : <Play size={18} className="mr-1" />}
                {isPlaying ? "Pausar" : "Iniciar"}
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={handleNextStep}
                disabled={currentStep === steps.length - 1}
                className={currentStep === steps.length - 1 ? "opacity-50" : ""}
              >
                <ArrowRight size={18} />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-quicksand text-xl">
              {currentStepData.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {/* Main Instruction */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">O que fazer:</h3>
              <p className="text-gray-700">
                {currentStepData.instruction}
              </p>
              
              {currentStepData.adaptations && (
                <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm font-medium">
                    💡 Adaptação para seu nível ({adaptationLevel}):
                  </p>
                  <p className="text-blue-700 text-sm mt-1">
                    {currentStepData.adaptations[adaptationLevel]}
                  </p>
                </div>
              )}
            </div>

            {/* Breathing Pattern */}
            {currentStepData.breathingPattern && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">🫁 Respiração:</h3>
                <p className="text-blue-700">{currentStepData.breathingPattern}</p>
              </div>
            )}

            {/* Common Mistakes */}
            {currentStepData.commonMistakes && currentStepData.commonMistakes.length > 0 && (
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-medium text-yellow-800 mb-2">⚠️ Evite:</h3>
                <ul className="text-yellow-700 space-y-1">
                  {currentStepData.commonMistakes.map((mistake, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span>•</span>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Safety Warnings */}
            {currentStepData.safetyWarnings && currentStepData.safetyWarnings.length > 0 && (
              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>Importante:</strong>
                  <ul className="mt-1 space-y-1">
                    {currentStepData.safetyWarnings.map((warning, idx) => (
                      <li key={idx}>• {warning}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      </div>

      {/* User Feedback */}
      <Card>
        <CardContent className="pt-4">
          <h3 className="font-medium text-gray-800 mb-3">Como está sendo para você?</h3>
          <div className="flex gap-3">
            <Button
              variant={userFeedback === 'too_easy' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFeedback('too_easy')}
              className="flex-1"
            >
              😌 Muito fácil
            </Button>
            <Button
              variant={userFeedback === 'perfect' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFeedback('perfect')}
              className="flex-1"
            >
              👍 Perfeito
            </Button>
            <Button
              variant={userFeedback === 'too_hard' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFeedback('too_hard')}
              className="flex-1"
            >
              😰 Muito difícil
            </Button>
          </div>
          
          {userFeedback && (
            <div className="mt-3 p-3 bg-green-50 rounded-lg">
              <p className="text-green-800 text-sm">
                ✅ Obrigada pelo feedback! Estamos ajustando o exercício para você.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdaptiveExercisePlayer;
