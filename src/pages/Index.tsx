
import { Link, useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { ExerciseCard } from "@/components/ui/exercise-card";
import { ProgressCard } from "@/components/ui/progress-card";
import { YogaIllustration } from "@/components/illustrations/YogaIllustration";
import { CategoryIllustration } from "@/components/illustrations/CategoryIllustration";
import { Calendar, Clock, Award, Flame, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { GlassCard } from "@/components/ui/glass-card";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [exercises] = useState([
    { id: 1, title: "Libertação Cervical Suave", duration: "5 min de autocuidado", pose: "default", completed: false },
    { id: 2, title: "Desbloqueio dos Ombros", duration: "7 min de autocuidado", pose: "arms-up", completed: true },
    { id: 3, title: "Abertura Lateral Regenerativa", duration: "8 min de autocuidado", pose: "side-bend", completed: false },
  ]);

  const [favorites, setFavorites] = useState<number[]>([1, 4]);
  const [minutesInvested, setMinutesInvested] = useState<number>(0);
  const [currentDay, setCurrentDay] = useState<number>(4);

  // Simular minutos investidos de acordo com exercícios completados
  useEffect(() => {
    // Em uma aplicação real, isso viria do backend
    const completedExercises = exercises.filter(ex => ex.completed);
    const totalMinutes = completedExercises.reduce((acc, ex) => {
      // Extrai apenas o número de minutos da string "X min de autocuidado"
      const minutes = parseInt(ex.duration.split(' ')[0]);
      return acc + (isNaN(minutes) ? 0 : minutes);
    }, 0);
    
    // Adicionar alguns minutos fixos para demonstração
    setMinutesInvested(totalMinutes + 73);
  }, [exercises]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const startDailyExercise = () => {
    navigate("/exercises/4"); // Navigate to the exercise
    toast({
      title: "Momento de Autocuidado",
      description: "Iniciando seu momento de transformação de hoje!",
    });
  };

  const quickAccessCategories = [
    { id: 'neck', label: 'Pescoço', icon: <CategoryIllustration category="neck" size={18} /> },
    { id: 'shoulders', label: 'Ombros', icon: <CategoryIllustration category="shoulders" size={18} /> },
    { id: 'back', label: 'Costas', icon: <CategoryIllustration category="back" size={18} /> },
    { id: 'hips', label: 'Quadril', icon: <CategoryIllustration category="hips" size={18} /> },
    { id: 'focus', label: 'Foco', icon: <CategoryIllustration category="focus" size={18} /> },
    { id: 'relaxation', label: 'Relaxamento', icon: <CategoryIllustration category="relaxation" size={18} /> },
  ];

  // Formatar data atual
  const getCurrentDate = () => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
    return new Date().toLocaleDateString('pt-BR', options);
  };

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        {/* Greeting and main exercise */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="font-quicksand text-2xl md:text-3xl font-bold text-fenjes-text-warm">
                <Calendar size={24} className="inline-block mr-2 text-fenjes-purple" /> 
                Bom dia, guerreira Marina!
              </h1>
              <p className="text-gray-500 mt-1">{getCurrentDate()}</p>
            </div>
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-fenjes-yellow to-fenjes-yellow-dark text-fenjes-text-warm font-medium w-full md:w-auto"
              onClick={startDailyExercise}
            >
              <Heart size={16} className="mr-2" /> Começar Meu Momento de Cura
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 glass-card overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-4 bg-fenjes-purple-light/20 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="font-quicksand font-semibold text-lg text-fenjes-purple-dark">
                    Seu Momento de Cura Diário
                  </h2>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={14} className="mr-1.5" />
                    <span>10 min de autocuidado</span>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 bg-fenjes-purple-light/20 rounded-lg aspect-square flex items-center justify-center">
                    <YogaIllustration pose="twist" />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="font-quicksand text-xl font-semibold text-fenjes-text-warm">
                      Sequência de Libertação Profunda
                    </h3>
                    
                    <p className="text-gray-600 mt-2">
                      Esta sequência vai ajudar a liberar tensões nas costas e melhorar a mobilidade da coluna. 
                      Ideal para quem passa muito tempo sentada.
                    </p>
                    
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-fenjes-purple-light text-fenjes-purple-dark text-xs font-medium mr-2 mt-0.5">
                          1
                        </span>
                        <span className="text-gray-700">Posição inicial com coluna ereta</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-fenjes-purple-light text-fenjes-purple-dark text-xs font-medium mr-2 mt-0.5">
                          2
                        </span>
                        <span className="text-gray-700">Rotação lenta para direita</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-fenjes-purple-light text-fenjes-purple-dark text-xs font-medium mr-2 mt-0.5">
                          3
                        </span>
                        <span className="text-gray-700">Retorno ao centro e rotação para esquerda</span>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <Button 
                        className="bg-fenjes-purple hover:bg-fenjes-purple-dark text-white w-full sm:w-auto transition-transform hover:scale-105"
                        onClick={startDailyExercise}
                      >
                        <Heart size={16} className="mr-2" /> Iniciar Agora
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <ProgressCard 
                title="Sua Jornada de Transformação" 
                currentValue={currentDay} 
                maxValue={21} 
                icon={<Calendar size={20} />}
                message={`${Math.round((currentDay/21)*100)}% mais próxima da sua liberdade`}
              />
              
              <ProgressCard 
                title="Minutos Investidos em Você" 
                currentValue={minutesInvested} 
                maxValue={210} 
                color="bg-fenjes-green" 
                icon={<Clock size={20} />}
                message={`${minutesInvested} minutos para sua melhor versão`}
              />
              
              <GlassCard variant="hover" className="p-4">
                <h3 className="font-quicksand font-semibold text-fenjes-text-warm">Próxima Conquista</h3>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-fenjes-yellow/30 flex items-center justify-center">
                    <Award size={24} className="text-fenjes-yellow-dark" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">7 Dias de Autocuidado</p>
                    <p className="text-sm text-gray-500">{currentDay} de 7 dias conquistados</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* SOS Area */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-quicksand text-xl font-semibold text-fenjes-text-warm">
              SOS Alívio Imediato
            </h2>
            <Link to="/momentos-de-liberdade" className="text-fenjes-purple hover:underline text-sm font-medium flex items-center">
              Ver Todos <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {quickAccessCategories.map((category) => (
              <Link 
                key={category.id} 
                to={`/momentos-de-liberdade?category=${category.id}`}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border transition-all hover:border-fenjes-purple hover:shadow-sm hover:scale-105"
              >
                <div className="h-12 w-12 rounded-full bg-fenjes-purple-light/20 flex items-center justify-center text-fenjes-purple-dark mb-2">
                  {category.icon}
                </div>
                <span className="text-sm text-gray-700 text-center">{category.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Exercises */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-quicksand text-xl font-semibold text-fenjes-text-warm">
              Seus Momentos de Liberdade
            </h2>
            <Link to="/momentos-de-liberdade" className="text-fenjes-purple hover:underline text-sm font-medium flex items-center">
              Ver Biblioteca <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                title={exercise.title}
                duration={exercise.duration}
                completed={exercise.completed}
                favorite={favorites.includes(exercise.id)}
                onFavoriteToggle={() => toggleFavorite(exercise.id)}
                onClick={() => navigate(`/exercises/${exercise.id}`)}
                image={<YogaIllustration pose={exercise.pose as any} />}
                badge={exercise.completed ? "Conquistado" : ""}
                className="glass-card border-none"
              />
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
