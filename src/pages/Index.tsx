
import { Link, useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { ExerciseCard } from "@/components/ui/exercise-card";
import { ProgressCard } from "@/components/ui/progress-card";
import { YogaIllustration } from "@/components/illustrations/YogaIllustration";
import { CategoryIllustration } from "@/components/illustrations/CategoryIllustration";
import { Calendar, Clock, Award, Flame, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [exercises] = useState([
    { id: 1, title: "Alongamento de Pescoço", duration: "5 min", pose: "default", completed: false },
    { id: 2, title: "Rotação de Ombros", duration: "7 min", pose: "arms-up", completed: true },
    { id: 3, title: "Inclinação Lateral", duration: "8 min", pose: "side-bend", completed: false },
  ]);

  const [favorites, setFavorites] = useState<number[]>([1]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const startDailyExercise = () => {
    navigate("/exercises/4"); // Navigate to the "Torção Suave" exercise
    toast({
      title: "Exercício Diário",
      description: "Iniciando seu exercício diário de hoje!",
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

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        {/* Greeting and main exercise */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="font-quicksand text-2xl md:text-3xl font-bold text-gray-800">
                Olá, Marina!
              </h1>
              <p className="text-gray-500 mt-1">Segunda-feira, 20 de Maio</p>
            </div>
            <Button 
              variant="default" 
              className="bg-movebem-purple hover:bg-movebem-purple-dark w-full md:w-auto animate-pulse-subtle"
              onClick={startDailyExercise}
            >
              Iniciar Exercício Diário
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-4 bg-movebem-purple-light/20 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="font-quicksand font-semibold text-lg text-movebem-purple-dark">
                    Exercício do Dia
                  </h2>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={14} className="mr-1.5" />
                    <span>10 min</span>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 bg-movebem-purple-light/20 rounded-lg aspect-square flex items-center justify-center">
                    <YogaIllustration pose="twist" />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="font-quicksand text-xl font-semibold text-gray-800">
                      Sequência de Torção Suave
                    </h3>
                    
                    <p className="text-gray-600 mt-2">
                      Esta sequência vai ajudar a aliviar tensões nas costas e melhorar a mobilidade da coluna. 
                      Ideal para quem passa muito tempo sentado.
                    </p>
                    
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-movebem-purple-light text-movebem-purple-dark text-xs font-medium mr-2 mt-0.5">
                          1
                        </span>
                        <span className="text-gray-700">Posição inicial com coluna ereta</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-movebem-purple-light text-movebem-purple-dark text-xs font-medium mr-2 mt-0.5">
                          2
                        </span>
                        <span className="text-gray-700">Rotação lenta para direita</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-movebem-purple-light text-movebem-purple-dark text-xs font-medium mr-2 mt-0.5">
                          3
                        </span>
                        <span className="text-gray-700">Retorno ao centro e rotação para esquerda</span>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <Button 
                        className="bg-movebem-purple hover:bg-movebem-purple-dark w-full sm:w-auto transition-transform hover:scale-105"
                        onClick={startDailyExercise}
                      >
                        Iniciar Agora
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <ProgressCard 
                title="Plano de 21 Dias" 
                currentValue={4} 
                maxValue={21} 
                icon={<Calendar size={20} />} 
              />
              
              <ProgressCard 
                title="Minutos Praticados" 
                currentValue={85} 
                maxValue={210} 
                color="bg-movebem-green" 
                icon={<Clock size={20} />} 
              />
              
              <div className="bg-white rounded-xl p-4 shadow-sm border hover:shadow-md transition-shadow">
                <h3 className="font-quicksand font-semibold text-gray-800">Próxima Conquista</h3>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-movebem-purple-light/30 flex items-center justify-center">
                    <Award size={24} className="text-movebem-purple" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">7 Dias Seguidos</p>
                    <p className="text-sm text-gray-500">4 de 7 dias completos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOS Area */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-quicksand text-xl font-semibold text-gray-800">
              SOS Alívio Rápido
            </h2>
            <Link to="/exercises" className="text-movebem-purple hover:underline text-sm font-medium flex items-center">
              Ver Todos <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {quickAccessCategories.map((category) => (
              <Link 
                key={category.id} 
                to={`/exercises?category=${category.id}`}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border transition-all hover:border-movebem-purple hover:shadow-sm hover:scale-105"
              >
                <div className="h-12 w-12 rounded-full bg-movebem-purple-light/20 flex items-center justify-center text-movebem-purple-dark mb-2">
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
            <h2 className="font-quicksand text-xl font-semibold text-gray-800">
              Exercícios Recentes
            </h2>
            <Link to="/exercises" className="text-movebem-purple hover:underline text-sm font-medium flex items-center">
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
              />
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
