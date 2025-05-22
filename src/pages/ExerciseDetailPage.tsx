import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { YogaIllustration } from "@/components/illustrations/YogaIllustration";
import { StepIndicator } from "@/components/ui/step-indicator";
import { Button } from "@/components/ui/button";
import { BookmarkIcon, Clock, ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import AdaptiveExercisePlayer from "@/components/exercise/AdaptiveExercisePlayer";
import { ExerciseStep } from "@/types/onboarding";

const ExerciseDetailPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [inExerciseMode, setInExerciseMode] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const exercise = {
    id: "4",
    title: "Torção Suave da Coluna",
    duration: "10 min",
    description: "Este exercício ajuda a melhorar a flexibilidade da coluna e aliviar tensões nas costas. É ideal para quem passa muito tempo sentado e precisa melhorar a postura.",
    category: "back",
    difficulty: "beginner",
    targetAreas: ["coluna", "lombar", "abdomen"],
    conditions: ["sedentarismo", "dor_lombar"],
    contraindications: ["hérnia_recente", "cirurgia_recente"],
    steps: [
      {
        step: 1,
        title: "Posição inicial",
        instruction: "Sente-se ereta na beira da cadeira com os pés apoiados no chão na largura do quadril. Mantenha as costas afastadas do encosto. Respire profundamente algumas vezes.",
        duration: "1 min",
        breathingPattern: "Respire naturalmente e profundamente",
        pose: "default",
        adaptations: {
          easy: "Sente-se com as costas apoiadas para maior suporte",
          normal: "Sente-se na beira da cadeira, coluna ereta mas relaxada",
          challenging: "Sente-se sem apoiar os pés, ativando o core"
        }
      },
      {
        step: 2,
        title: "Mãos nos ombros",
        instruction: "Coloque as mãos nos ombros opostos, com os cotovelos para os lados. Mantenha a coluna alongada e o pescoço alinhado com a coluna.",
        duration: "2 min",
        breathingPattern: "Inspire expandindo o peito, expire relaxando",
        commonMistakes: ["Elevar os ombros", "Curvar a coluna"],
        pose: "arms-up",
        adaptations: {
          easy: "Mantenha os braços relaxados se sentir tensão nos ombros",
          normal: "Mãos nos ombros opostos como descrito",
          challenging: "Mantenha os cotovelos um pouco mais elevados"
        }
      },
      {
        step: 3,
        title: "Rotação para direita",
        instruction: "Inspire profundamente e, ao expirar, gire lentamente o tronco para a direita. Mantenha os quadris fixos e gire apenas a partir da cintura para cima. Olhe sobre o ombro direito.",
        duration: "3 min",
        breathingPattern: "Expire ao girar, inspire ao retornar",
        commonMistakes: ["Girar os quadris", "Girar muito rápido", "Forçar demais a rotação"],
        pose: "twist",
        adaptations: {
          easy: "Gire apenas até onde for confortável, amplitude reduzida",
          normal: "Gire até sentir um alongamento agradável",
          challenging: "Mantenha a posição por 3 respirações completas"
        },
        safetyWarnings: ["Se sentir dor aguda, pare imediatamente"]
      },
      {
        step: 4,
        title: "Rotação para esquerda",
        instruction: "Retorne ao centro inspirando. Ao expirar, gire lentamente o tronco para a esquerda. Mantenha os quadris fixos e gire apenas a partir da cintura para cima. Olhe sobre o ombro esquerdo.",
        duration: "3 min",
        breathingPattern: "Expire ao girar, inspire ao retornar",
        commonMistakes: ["Girar os quadris", "Tensionar o pescoço"],
        pose: "twist",
        adaptations: {
          easy: "Gire apenas até onde for confortável, amplitude reduzida",
          normal: "Gire até sentir um alongamento agradável",
          challenging: "Adicione uma pequena inclinação lateral"
        },
        safetyWarnings: ["Se sentir dor aguda, pare imediatamente"]
      },
      {
        step: 5,
        title: "Finalização",
        instruction: "Volte ao centro, relaxe os braços e faça 3 respirações profundas. Sinta a diferença na sua coluna e observe como está seu corpo agora.",
        duration: "1 min",
        breathingPattern: "Respiração profunda e consciente",
        pose: "default",
        adaptations: {
          easy: "Apenas respire tranquilamente",
          normal: "Faça um escaneamento mental do corpo",
          challenging: "Adicione uma intenção positiva para sua coluna"
        }
      }
    ],
    benefits: [
      "Melhora a mobilidade da coluna",
      "Alivia tensão nas costas",
      "Estimula a digestão",
      "Melhora a postura e o alinhamento"
    ],
    safetyTips: [
      "Mantenha os movimentos lentos e controlados",
      "Respeite seus limites de flexibilidade",
      "Mantenha a respiração fluindo naturalmente",
      "Se sentir qualquer dor aguda, pare imediatamente"
    ],
    adaptations: [
      {
        condition: "lombar_sensível",
        modification: "Reduzir amplitude da torção em 50%",
        visualCue: "Como virar apenas o suficiente para ver a parede lateral"
      },
      {
        condition: "ombros_tensos",
        modification: "Braços relaxados ao lado em vez de cruzados",
        visualCue: "Mãos descansando no colo ou segurando os lados da cadeira"
      }
    ]
  };

  const currentStepData = exercise.steps[currentStep - 1];

  const nextStep = () => {
    if (currentStep < exercise.steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleFavorite = () => {
    setFavorite(!favorite);
    toast({
      title: favorite ? "Removido dos favoritos" : "Adicionado aos favoritos",
      description: `"${exercise.title}" foi ${favorite ? "removido dos" : "adicionado aos"} seus exercícios favoritos.`,
    });
  };

  const markCompleted = () => {
    setCompleted(true);
    toast({
      title: "Exercício concluído!",
      description: "Parabéns por completar este exercício! Continue assim.",
    });
  };

  const handleStartExercise = () => {
    setInExerciseMode(true);
  };

  const handleExerciseComplete = () => {
    setInExerciseMode(false);
    setCompleted(true);
    toast({
      title: "Exercício concluído!",
      description: "Parabéns por completar este exercício! Continue assim.",
    });
  };

  if (inExerciseMode) {
    return (
      <AppLayout>
        <AdaptiveExercisePlayer 
          title={exercise.title}
          steps={exercise.steps as ExerciseStep[]}
          category={exercise.category}
          difficulty={exercise.difficulty as any}
          benefits={exercise.benefits}
          onComplete={handleExerciseComplete}
        />
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
          <div className="w-full">
            <Button 
              variant="ghost" 
              size="sm" 
              className="mb-2 -ml-2 h-10 touch-manipulation" 
              onClick={() => navigate('/exercises')}
            >
              <ArrowLeft size={16} className="mr-1" /> Voltar para Exercícios
            </Button>
            <h1 className="font-quicksand text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
              {exercise.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock size={16} className="mr-1.5" />
                <span>{exercise.duration}</span>
              </div>
              <div className="flex items-center">
                <span className="px-2 py-0.5 bg-gray-100 rounded text-gray-700">
                  {exercise.difficulty === "beginner" ? "Iniciante" :
                   exercise.difficulty === "intermediate" ? "Intermediário" :
                   "Avançado"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-2 md:mt-0 w-full md:w-auto justify-end">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleFavorite}
              className={cn(
                "h-12 w-12 touch-manipulation",
                favorite ? "text-movebem-purple border-movebem-purple" : "text-gray-400"
              )}
            >
              <BookmarkIcon size={20} className={favorite ? "fill-movebem-purple" : ""} />
            </Button>
            <Button 
              onClick={markCompleted} 
              disabled={completed}
              className={cn(
                "bg-movebem-green hover:bg-movebem-green/90 h-12 px-4 touch-manipulation",
                completed && "opacity-50 cursor-not-allowed"
              )}
            >
              <CheckCircle size={20} className="mr-1.5" />
              <span className="sm:inline hidden">{completed ? "Concluído" : "Marcar como Concluído"}</span>
              <span className="sm:hidden inline">{completed ? "Concluído" : "Concluir"}</span>
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl border shadow-sm overflow-hidden mb-6">
          <div className="p-4 md:p-6 border-b bg-movebem-purple-light/10">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 lg:w-1/4">
                <div className="bg-movebem-purple-light/20 rounded-lg aspect-square flex items-center justify-center mb-4">
                  <YogaIllustration pose={currentStepData.pose as any} />
                </div>
                
                <StepIndicator 
                  currentStep={currentStep} 
                  totalSteps={exercise.steps.length} 
                  onStepClick={setCurrentStep}
                />
                
                <div className="flex justify-between mt-4 gap-2">
                  <Button 
                    variant="outline" 
                    onClick={prevStep} 
                    disabled={currentStep === 1}
                    className="flex-1 h-10 touch-manipulation"
                  >
                    <ArrowLeft size={16} className="mr-1" /> Anterior
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={nextStep} 
                    disabled={currentStep === exercise.steps.length}
                    className="flex-1 h-10 touch-manipulation"
                  >
                    Próximo <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </div>
              
              <div className="md:w-2/3 lg:w-3/4 space-y-5">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-1">
                    {currentStep}. {currentStepData.title}
                  </h2>
                  <div className="text-sm text-gray-500 mb-2">
                    Duração: {currentStepData.duration}
                  </div>
                  <p className="text-gray-700 text-base sm:text-lg">
                    {currentStepData.instruction}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Padrão de Respiração</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {currentStepData.breathingPattern}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Adaptações</h3>
                  <div className="space-y-2">
                    <div className="bg-green-50 p-3 rounded-md">
                      <span className="text-green-700 font-medium block text-sm">Suave:</span>
                      <span className="text-gray-700 text-sm">{currentStepData.adaptations?.easy}</span>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <span className="text-blue-700 font-medium block text-sm">Normal:</span>
                      <span className="text-gray-700 text-sm">{currentStepData.adaptations?.normal}</span>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-md">
                      <span className="text-orange-700 font-medium block text-sm">Desafiador:</span>
                      <span className="text-gray-700 text-sm">{currentStepData.adaptations?.challenging}</span>
                    </div>
                  </div>
                </div>
                
                {currentStepData.commonMistakes && (
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">Erros Comuns</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-700">
                      {currentStepData.commonMistakes.map((mistake, idx) => (
                        <li key={idx}>{mistake}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {currentStepData.safetyWarnings && (
                  <div className="bg-red-50 p-3 rounded-md flex items-start gap-2">
                    <AlertTriangle size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-red-700 block text-sm">Atenção:</span>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        {Array.isArray(currentStepData.safetyWarnings) 
                          ? currentStepData.safetyWarnings.map((warning, idx) => (
                              <li key={idx}>{warning}</li>
                            ))
                          : <li>{currentStepData.safetyWarnings}</li>
                        }
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 lg:w-1/4">
                <h3 className="font-medium text-gray-800 mb-3">Benefícios</h3>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-700">
                  {exercise.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div className="md:w-2/3 lg:w-3/4">
                <h3 className="font-medium text-gray-800 mb-3">Dicas de Segurança</h3>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-700 mb-6">
                  {exercise.safetyTips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full md:w-auto bg-movebem-purple hover:bg-movebem-purple-dark h-12 touch-manipulation"
                  onClick={handleStartExercise}
                >
                  <Play size={18} className="mr-2" /> Iniciar Exercício Guiado
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ExerciseDetailPage;
