import { useParams, useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { useEffect, useState } from "react";
import { ChairYogaExercise } from "@/types/chair-yoga";
import { chairYogaExercises } from "@/data/chair-yoga-exercises";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Heart } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { useFavoriteExercises } from '@/hooks/use-favorite-exercises';

const ChairYogaExercisePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [exercise, setExercise] = useState<ChairYogaExercise | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [isExerciseMode, setIsExerciseMode] = useState(false);
  const { favoriteExercises, toggleFavorite } = useFavoriteExercises();

  useEffect(() => {
    // Simular carregamento de dados
    setLoading(true);
    
    // Buscar exercício pelo ID
    const foundExercise = chairYogaExercises.find(ex => ex.id === id);
    
    if (foundExercise) {
      setExercise(foundExercise);
      document.title = `${foundExercise.title} | Fenjes Yoga`;
    }
    
    setLoading(false);
  }, [id]);

  // Função auxiliar para exibir o nome da categoria
  const getCategoryDisplay = (category: string) => {
    switch (category) {
      case "neck":
        return "Pescoço";
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
  };

  // Função auxiliar para obter ícone da categoria
  const getCategoryIcon = (category: string) => {
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
  };

  // Função para iniciar o exercício
  const startExercise = () => {
    setIsExerciseMode(true);
    setCurrentStep(0);
    
    // Salva esta atividade no localStorage para o tracker da jornada
    try {
      const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
      const completedExercises = JSON.parse(localStorage.getItem('completed-exercises') || '{}');
      
      if (!completedExercises[today]) {
        completedExercises[today] = [];
      }
      
      if (!completedExercises[today].includes(id)) {
        completedExercises[today].push(id);
      }
      
      localStorage.setItem('completed-exercises', JSON.stringify(completedExercises));
      
      // Atualiza o dia atual do usuário
      const userProfile = JSON.parse(sessionStorage.getItem('userProfile') || '{}');
      const currentDay = userProfile.currentDay || 1;
      
      // Só incrementa se for um novo dia
      if (Object.keys(completedExercises).length > currentDay) {
        userProfile.currentDay = Object.keys(completedExercises).length;
        sessionStorage.setItem('userProfile', JSON.stringify(userProfile));
      }
    } catch (error) {
      console.error("Erro ao atualizar progresso:", error);
    }
    
    // Scroll para o topo para ver as instruções do exercício
    window.scrollTo(0, 0);
    
    toast({
      title: "Exercício iniciado",
      description: "Siga as instruções passo a passo",
    });
  };

  // Função para o próximo passo do exercício
  const nextStep = () => {
    if (exercise && currentStep < exercise.steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      // Exercício completado
      finishExercise();
    }
  };

  // Função para terminar o exercício
  const finishExercise = () => {
    setIsExerciseMode(false);
    toast({
      title: "Parabéns!",
      description: "Você completou o exercício",
    });
  };

  // Função para alternar favorito
  const handleToggleFavorite = () => {
    if (!exercise) return;
    
    toggleFavorite(exercise.id);
    
    toast({
      title: favoriteExercises.includes(exercise.id) 
        ? "Removido dos favoritos" 
        : "Adicionado aos favoritos",
      duration: 2000,
    });
  };
  
  if (loading) {
    return (
      <AppLayout>
        <div className="container mx-auto py-6 text-center">
          <p>Carregando exercício...</p>
        </div>
      </AppLayout>
    );
  }
  
  if (!exercise) {
    return (
      <AppLayout>
        <div className="container mx-auto py-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h1 className="text-2xl font-bold mb-4">Exercício não encontrado</h1>
            <p className="mb-6">Não foi possível encontrar o exercício com o ID: {id}</p>
            <Button onClick={() => navigate("/chair-yoga")}>
              Voltar para Yoga na Cadeira
            </Button>
          </div>
        </div>
      </AppLayout>
    );
  }

  // Modo de execução de exercício
  if (isExerciseMode && exercise.steps.length > 0) {
    const currentStepData = exercise.steps[currentStep];
    const isLastStep = currentStep === exercise.steps.length - 1;
    
    return (
      <AppLayout>
        <div className="container mx-auto py-6">
          <div className="mb-4">
            <Button variant="ghost" size="sm" onClick={() => setIsExerciseMode(false)}>
              <ArrowLeft size={16} className="mr-2" /> Voltar às instruções
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-fenjes-purple p-4 text-white">
              <h1 className="text-xl md:text-2xl font-bold">{exercise.title}</h1>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm">Passo {currentStep + 1} de {exercise.steps.length}</p>
                <p className="text-sm">{currentStepData.duration || "Sem tempo definido"}</p>
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-semibold text-fenjes-purple mb-4">{currentStepData.name}</h2>
              <p className="text-gray-700 mb-6">{currentStepData.instruction}</p>
              
              {currentStepData.breathing && (
                <div className="bg-fenjes-cream/20 p-4 rounded-lg mb-6">
                  <p className="text-gray-700">
                    <span className="font-semibold">Respiração:</span> {currentStepData.breathing}
                  </p>
                </div>
              )}
              
              {currentStepData.visualization && (
                <div className="bg-fenjes-purple/10 p-4 rounded-lg mb-6">
                  <p className="text-gray-700">
                    <span className="font-semibold">Visualização:</span> {currentStepData.visualization}
                  </p>
                </div>
              )}
              
              <Button 
                className="w-full mt-8 bg-fenjes-purple hover:bg-fenjes-purple-light py-3"
                onClick={nextStep}
              >
                {isLastStep ? "Concluir Exercício" : "Próximo Passo"}
              </Button>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="container mx-auto py-6">
        {/* Botão Voltar */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/chair-yoga")}
          className="mb-4"
        >
          <ArrowLeft size={16} className="mr-2" /> Voltar para Yoga na Cadeira
        </Button>

        {/* Título do Exercício */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-fenjes-purple">{exercise.title}</h1>

        {/* Card Principal */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          {/* Imagem / Ícone do exercício */}
          <div className="bg-fenjes-purple/10 p-8 flex items-center justify-center">
            {exercise.imageUrl ? (
              <img
                src={exercise.imageUrl}
                alt={exercise.title}
                className="max-h-56 object-contain"
              />
            ) : (
              <div className="text-6xl">{getCategoryIcon(exercise.category)}</div>
            )}
          </div>

          {/* Detalhes do exercício */}
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-fenjes-purple/10 text-fenjes-purple px-3 py-1 rounded-full flex items-center gap-1">
                💺 Exercício na Cadeira
              </span>
              <span className="text-xs bg-fenjes-purple/10 text-fenjes-purple px-3 py-1 rounded-full flex items-center gap-1">
                <Clock size={12} className="mr-1" /> {exercise.duration}
              </span>
              <span className="text-xs bg-fenjes-yellow/10 text-fenjes-yellow-dark px-3 py-1 rounded-full flex items-center gap-1">
                {getCategoryIcon(exercise.category)} {getCategoryDisplay(exercise.category)}
              </span>
              <span className="text-xs bg-fenjes-green/10 text-fenjes-green px-3 py-1 rounded-full flex items-center gap-1">
                {exercise.difficulty === "beginner" ? "Iniciante" : 
                 exercise.difficulty === "intermediate" ? "Intermediário" : "Avançado"}
              </span>
            </div>

            <p className="text-gray-700 mb-4">{exercise.description}</p>

            <div className="bg-fenjes-green/5 p-4 rounded-lg mb-6">
              <p className="text-fenjes-green">
                <span className="font-semibold">Benefício específico:</span> {exercise.specificBenefit}
              </p>
            </div>

            {/* Passos do Exercício */}
            <h2 className="text-xl font-semibold mb-4">Como Praticar</h2>
            <ol className="space-y-6 mb-6">
              {exercise.steps.map((step, index) => (
                <li key={index} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-fenjes-purple mb-2">{step.name}</h3>
                  <p className="text-gray-700 mb-2">{step.instruction}</p>
                  <div className="flex flex-wrap gap-2 text-xs mt-3">
                    {step.duration && (
                      <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded">
                        ⏱️ {step.duration}
                      </span>
                    )}
                    {step.breathing && (
                      <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded">
                        🫁 {step.breathing}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            {/* Adaptações se existirem */}
            {exercise.adaptations && Object.keys(exercise.adaptations).length > 0 && (
              <>
                <h2 className="text-xl font-semibold mb-4">Adaptações</h2>
                <ul className="space-y-2 mb-6">
                  {Object.entries(exercise.adaptations).map(([condition, adaptation]) => (
                    <li key={condition} className="flex gap-2 items-start">
                      <span className="text-fenjes-purple">•</span>
                      <div>
                        <span className="font-medium">{condition}:</span> {adaptation}
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button 
                className="bg-fenjes-purple hover:bg-fenjes-purple-light flex-grow"
                onClick={startExercise}
              >
                Iniciar Exercício
              </Button>
              <Button 
                variant="outline" 
                className={`flex-grow-0 ${favoriteExercises.includes(exercise.id) ? "bg-fenjes-purple/10" : ""}`}
                onClick={handleToggleFavorite}
              >
                <Heart 
                  size={16} 
                  className={`mr-2 ${favoriteExercises.includes(exercise.id) ? "fill-fenjes-purple text-fenjes-purple" : ""}`} 
                /> 
                {favoriteExercises.includes(exercise.id) ? "Salvo nos Favoritos" : "Salvar como Favorito"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ChairYogaExercisePage; 