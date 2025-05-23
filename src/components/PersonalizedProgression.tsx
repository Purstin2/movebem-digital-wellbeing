import React from 'react';
import { PersonalizedProgram, DailyRoutine, ProgressMetrics } from '@/types/personalization';

interface PersonalizedProgressionProps {
  program: PersonalizedProgram;
  onProgressUpdate: (metrics: ProgressMetrics) => void;
  onDayComplete: (day: number) => void;
}

export const PersonalizedProgression: React.FC<PersonalizedProgressionProps> = ({
  program,
  onProgressUpdate,
  onDayComplete
}) => {
  const [currentDay, setCurrentDay] = React.useState(1);
  const [dailyMetrics, setDailyMetrics] = React.useState<ProgressMetrics>({
    painLevels: [],
    mobilityProgress: [],
    wellnessScores: []
  });

  const getCurrentRoutine = (): DailyRoutine | undefined => {
    return program.dailyRoutines.find(routine => routine.day === currentDay);
  };

  const handlePainUpdate = (level: number, location: string) => {
    const newPainLevels = [
      ...dailyMetrics.painLevels,
      { date: new Date(), level, location }
    ];
    
    setDailyMetrics(prev => ({
      ...prev,
      painLevels: newPainLevels
    }));

    // Ajusta programa se dor > 7
    if (level > 7) {
      alert('Nível de dor alto detectado. Programa será ajustado automaticamente.');
      // Implementar lógica de ajuste
    }
  };

  const handleWellnessUpdate = (scores: {
    energy: number;
    sleep: number;
    mood: number;
    discomfort: number;
  }) => {
    const newWellnessScores = [
      ...dailyMetrics.wellnessScores,
      { date: new Date(), ...scores }
    ];

    setDailyMetrics(prev => ({
      ...prev,
      wellnessScores: newWellnessScores
    }));
  };

  const completeDay = () => {
    onProgressUpdate(dailyMetrics);
    onDayComplete(currentDay);
    setCurrentDay(prev => Math.min(prev + 1, 21));
  };

  const routine = getCurrentRoutine();

  if (!routine) {
    return <div>Programa concluído!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Dia {currentDay} de 21</h2>
        
        {/* Progresso Visual */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
          <div 
            className="bg-blue-600 rounded-full h-4 transition-all duration-500"
            style={{ width: `${(currentDay / 21) * 100}%` }}
          />
        </div>

        {/* Exercícios do Dia */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Exercícios de Hoje</h3>
          <div className="space-y-4">
            {routine.exercises.map((exercise, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium">{exercise.id}</h4>
                <p className="text-gray-600">Duração: {exercise.duration}min</p>
                {exercise.adaptations?.map((adaptation, i) => (
                  <p key={i} className="text-sm text-blue-600">{adaptation}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Receitas do Dia */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Receitas de Hoje</h3>
          <div className="space-y-4">
            {routine.recipes.map((recipe, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium">{recipe.id}</h4>
                <p className="text-gray-600">Horário: {recipe.timing}</p>
                {recipe.modifications?.map((mod, i) => (
                  <p key={i} className="text-sm text-green-600">{mod}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Avaliação de Dor */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Como está sua dor hoje?</h3>
          <div className="flex space-x-2">
            {[1,2,3,4,5,6,7,8,9,10].map(level => (
              <button
                key={level}
                onClick={() => handlePainUpdate(level, 'geral')}
                className={`
                  w-10 h-10 rounded-full font-medium
                  ${level <= 3 ? 'bg-green-100 text-green-800' : ''}
                  ${level > 3 && level <= 7 ? 'bg-yellow-100 text-yellow-800' : ''}
                  ${level > 7 ? 'bg-red-100 text-red-800' : ''}
                  hover:ring-2 hover:ring-offset-2 hover:ring-blue-500
                `}
              >
                {level}
              </button>
            ))}
          </div>
        </section>

        {/* Avaliação de Bem-estar */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Como você está se sentindo?</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Energia</label>
              <input 
                type="range" 
                min="1" 
                max="10" 
                className="w-full"
                onChange={(e) => handleWellnessUpdate({
                  energy: parseInt(e.target.value),
                  sleep: dailyMetrics.wellnessScores[dailyMetrics.wellnessScores.length - 1]?.sleep || 5,
                  mood: dailyMetrics.wellnessScores[dailyMetrics.wellnessScores.length - 1]?.mood || 5,
                  discomfort: dailyMetrics.wellnessScores[dailyMetrics.wellnessScores.length - 1]?.discomfort || 5
                })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Sono</label>
              <input 
                type="range" 
                min="1" 
                max="10" 
                className="w-full"
                onChange={(e) => handleWellnessUpdate({
                  energy: dailyMetrics.wellnessScores[dailyMetrics.wellnessScores.length - 1]?.energy || 5,
                  sleep: parseInt(e.target.value),
                  mood: dailyMetrics.wellnessScores[dailyMetrics.wellnessScores.length - 1]?.mood || 5,
                  discomfort: dailyMetrics.wellnessScores[dailyMetrics.wellnessScores.length - 1]?.discomfort || 5
                })}
              />
            </div>
          </div>
        </section>

        {/* Botão de Conclusão */}
        <button
          onClick={completeDay}
          className="w-full bg-blue-600 text-white rounded-lg py-3 text-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Concluir Dia {currentDay}
        </button>
      </div>
    </div>
  );
};

export default PersonalizedProgression; 