
import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CategoryBadge } from "@/components/ui/category-badge";
import { Activity, Award, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { ProgressCard } from "@/components/ui/progress-card";

const ProgressPage = () => {
  const [activeView, setActiveView] = useState<"dias" | "tempo" | "conquistas">("dias");
  const [currentWeek, setCurrentWeek] = useState(1);
  
  const weekProgress = [
    { day: "Segunda", completed: true, date: "15/05" },
    { day: "Terça", completed: true, date: "16/05" },
    { day: "Quarta", completed: true, date: "17/05" },
    { day: "Quinta", completed: true, date: "18/05" },
    { day: "Sexta", completed: false, date: "19/05" },
    { day: "Sábado", completed: false, date: "20/05" },
    { day: "Domingo", completed: false, date: "21/05" },
  ];
  
  const achievements = [
    { name: "Primeiro Dia", description: "Concluiu seu primeiro exercício", earned: true, icon: <Award className="text-movebem-purple h-8 w-8" /> },
    { name: "Consistência", description: "7 dias seguidos de prática", earned: false, icon: <Calendar className="text-movebem-purple h-8 w-8" /> },
    { name: "Meio Caminho", description: "Atingiu 50% do plano", earned: false, icon: <Activity className="text-movebem-purple h-8 w-8" /> },
    { name: "Dedicação", description: "60 minutos de prática acumulados", earned: true, icon: <Clock className="text-movebem-purple h-8 w-8" /> },
  ];
  
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="font-quicksand text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Seu Progresso
        </h1>
        
        {/* Filter Options */}
        <div className="flex flex-wrap gap-2 mb-6">
          <CategoryBadge 
            label="Dias de Prática" 
            icon={<Calendar size={18} />}
            active={activeView === "dias"}
            onClick={() => setActiveView("dias")}
          />
          <CategoryBadge 
            label="Tempo de Prática" 
            icon={<Clock size={18} />}
            active={activeView === "tempo"}
            onClick={() => setActiveView("tempo")}
          />
          <CategoryBadge 
            label="Conquistas" 
            icon={<Award size={18} />}
            active={activeView === "conquistas"}
            onClick={() => setActiveView("conquistas")}
          />
        </div>
        
        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
          
          <ProgressCard 
            title="Conquistas" 
            currentValue={2} 
            maxValue={8} 
            color="bg-movebem-purple-light" 
            icon={<Award size={20} />} 
          />
        </div>
        
        {activeView === "dias" && (
          <Card className="mb-8">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-quicksand text-gray-800">Semana {currentWeek} de 3</CardTitle>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setCurrentWeek(prev => Math.max(1, prev - 1))}
                  disabled={currentWeek === 1}
                >
                  <ChevronLeft size={18} />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setCurrentWeek(prev => Math.min(3, prev + 1))}
                  disabled={currentWeek === 3}
                >
                  <ChevronRight size={18} />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2">
                {weekProgress.map((day, index) => (
                  <div key={index} className="text-center">
                    <div className={`
                      h-14 w-14 mx-auto rounded-full flex items-center justify-center
                      ${day.completed ? 'bg-movebem-purple text-white' : 'bg-gray-100 text-gray-400'}
                    `}>
                      {day.date}
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-600">{day.day}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
        
        {activeView === "tempo" && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg font-quicksand text-gray-800">Tempo de Prática (Últimos 7 dias)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between pt-4">
                {[15, 20, 30, 10, 5, 0, 0].map((minutes, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="bg-movebem-purple w-10 rounded-t-md transition-all duration-500"
                      style={{ height: `${(minutes / 30) * 100}%` }}
                    ></div>
                    <p className="mt-2 text-xs text-gray-500">
                      {weekProgress[index].day.substring(0, 3)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center text-sm text-gray-500">
                Total: 80 minutos esta semana
              </div>
            </CardContent>
          </Card>
        )}
        
        {activeView === "conquistas" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className={`border-l-4 ${achievement.earned ? 'border-l-movebem-purple' : 'border-l-gray-200'}`}>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className={`rounded-full p-2 ${achievement.earned ? 'bg-movebem-purple-light/30' : 'bg-gray-100'}`}>
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className={`font-quicksand font-semibold ${achievement.earned ? 'text-gray-800' : 'text-gray-500'}`}>
                      {achievement.name}
                    </h3>
                    <p className="text-sm text-gray-500">{achievement.description}</p>
                  </div>
                  <div className="ml-auto">
                    {achievement.earned ? (
                      <span className="text-movebem-green">✓</span>
                    ) : (
                      <span className="text-gray-300">○</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default ProgressPage;
