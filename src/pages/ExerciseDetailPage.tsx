
import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { YogaIllustration } from "@/components/illustrations/YogaIllustration";
import { StepIndicator } from "@/components/ui/step-indicator";
import { Button } from "@/components/ui/button";
import { BookmarkIcon, Clock, Calendar, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const ExerciseDetailPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const [completed, setCompleted] = useState(false);
  const { toast } = useToast();

  const exercise = {
    id: 4,
    title: "Torção Suave da Coluna",
    duration: "10 min",
    description: "Este exercício ajuda a melhorar a flexibilidade da coluna e aliviar tensões nas costas. É ideal para quem passa muito tempo sentado e precisa melhorar a postura.",
    category: "back",
    level: "Iniciante",
    steps: [
      {
        title: "Posição inicial",
        instruction: "Sente-se ereta na beira da cadeira com os pés apoiados no chão na largura do quadril. Mantenha as costas afastadas do encosto. Respire profundamente algumas vezes.",
        pose: "default"
      },
      {
        title: "Mãos nos ombros",
        instruction: "Coloque as mãos nos ombros opostos, com os cotovelos para os lados. Mantenha a coluna alongada e o pescoço alinhado com a coluna.",
        pose: "arms-up"
      },
      {
        title: "Rotação para direita",
        instruction: "Inspire profundamente e, ao expirar, gire lentamente o tronco para a direita. Mantenha os quadris fixos e gire apenas a partir da cintura para cima. Olhe sobre o ombro direito.",
        pose: "twist"
      },
      {
        title: "Rotação para esquerda",
        instruction: "Retorne ao centro inspirando. Ao expirar, gire lentamente o tronco para a esquerda. Mantenha os quadris fixos e gire apenas a partir da cintura para cima. Olhe sobre o ombro esquerdo.",
        pose: "twist"
      }
    ],
    benefits: [
      "Melhora a mobilidade da coluna",
      "Alivia tensão nas costas",
      "Estimula a digestão",
      "Melhora a postura e o alinhamento"
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

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
          <div>
            <Button variant="ghost" size="sm" className="mb-2" asChild>
              <a href="/exercises">
                <ArrowLeft size={16} className="mr-1" /> Voltar para Exercícios
              </a>
            </Button>
            <h1 className="font-quicksand text-2xl md:text-3xl font-bold text-gray-800">
              {exercise.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock size={16} className="mr-1.5" />
                <span>{exercise.duration}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1.5" />
                <span>{exercise.level}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleFavorite}
              className={cn(
                favorite ? "text-movebem-purple border-movebem-purple" : "text-gray-400"
              )}
            >
              <BookmarkIcon size={18} className={favorite ? "fill-movebem-purple" : ""} />
            </Button>
            <Button 
              onClick={markCompleted} 
              disabled={completed}
              className={cn(
                "bg-movebem-green hover:bg-movebem-green/90",
                completed && "opacity-50 cursor-not-allowed"
              )}
            >
              <CheckCircle size={18} className="mr-1.5" />
              {completed ? "Concluído" : "Marcar como Concluído"}
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl border shadow-sm overflow-hidden mb-8">
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
              </div>

              <div className="md:w-2/3 lg:w-3/4">
                <div className="flex items-center mb-3">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-movebem-purple text-white text-sm font-medium mr-2">
                    {currentStep}
                  </span>
                  <h2 className="font-quicksand text-xl font-semibold text-gray-800">
                    {currentStepData.title}
                  </h2>
                </div>

                <p className="text-gray-600 mb-6">
                  {currentStepData.instruction}
                </p>
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={prevStep} 
                    disabled={currentStep === 1}
                    className={cn(currentStep === 1 && "opacity-50 cursor-not-allowed")}
                  >
                    <ArrowLeft size={16} className="mr-1.5" /> Anterior
                  </Button>
                  
                  <Button 
                    onClick={nextStep} 
                    disabled={currentStep === exercise.steps.length}
                    className={cn(
                      "bg-movebem-purple hover:bg-movebem-purple-dark",
                      currentStep === exercise.steps.length && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    Próximo <ArrowRight size={16} className="ml-1.5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 md:p-6">
            <h2 className="font-quicksand text-lg font-semibold text-gray-800 mb-3">
              Sobre este exercício
            </h2>
            
            <p className="text-gray-600 mb-4">
              {exercise.description}
            </p>
            
            <h3 className="font-quicksand font-medium text-gray-800 mb-2">Benefícios:</h3>
            <ul className="space-y-1 text-gray-600">
              {exercise.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-movebem-green mr-2"></div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ExerciseDetailPage;
