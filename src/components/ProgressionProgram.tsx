import React from 'react';
import { ProgramTrack, DailyPlan } from '@/types/user-profile';

interface ProgressionProgramProps {
  track: ProgramTrack['name'];
  currentDay: number;
  dailyPlans: DailyPlan[];
  onComplete: (day: number) => void;
  className?: string;
}

const trackInfo = {
  therapeutic: {
    title: 'Trilha Terapêutica',
    description: 'Foco em alívio de dor e recuperação gradual',
    icon: '🌟',
    phases: [
      { name: 'Alívio', days: 1-7 },
      { name: 'Estabilização', days: 8-14 },
      { name: 'Fortalecimento', days: 15-21 }
    ]
  },
  adaptive: {
    title: 'Trilha Adaptativa',
    description: 'Adaptação progressiva para limitações moderadas',
    icon: '🌱',
    phases: [
      { name: 'Consciência', days: 1-7 },
      { name: 'Adaptação', days: 8-14 },
      { name: 'Integração', days: 15-21 }
    ]
  },
  wellness: {
    title: 'Trilha Wellness',
    description: 'Foco em bem-estar e prevenção',
    icon: '🌸',
    phases: [
      { name: 'Fundação', days: 1-7 },
      { name: 'Expansão', days: 8-14 },
      { name: 'Florescimento', days: 15-21 }
    ]
  }
};

export const ProgressionProgram: React.FC<ProgressionProgramProps> = ({
  track,
  currentDay,
  dailyPlans,
  onComplete,
  className = ''
}) => {
  const info = trackInfo[track];
  const currentPhase = Math.floor((currentDay - 1) / 7);

  return (
    <div className={`max-w-4xl mx-auto p-4 ${className}`}>
      {/* Track Header */}
      <div className="mb-8 text-center">
        <div className="text-4xl mb-2">{info.icon}</div>
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          {info.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {info.description}
        </p>
      </div>

      {/* Progress Overview */}
      <div className="mb-8">
        <div className="h-2 bg-fenjes-neutral-300 dark:bg-fenjes-neutral-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-fenjes-yellow transition-all duration-500"
            style={{ width: `${(currentDay / 21) * 100}%` }}
          />
        </div>
        <div className="mt-2 text-center text-gray-600 dark:text-gray-300">
          Dia {currentDay} de 21
        </div>
      </div>

      {/* Phases */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        {info.phases.map((phase, index) => (
          <div
            key={index}
            className={`
              p-4 rounded-lg border-2
              ${currentPhase === index
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : currentPhase > index
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                  : 'border-gray-200 dark:border-gray-700'
              }
            `}
          >
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
              {phase.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Dias {phase.days}
            </p>
          </div>
        ))}
      </div>

      {/* Today's Plan */}
      {dailyPlans[currentDay - 1] && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Plano de Hoje
          </h3>
          
          {/* Exercises */}
          <div className="mb-6">
            <h4 className="font-medium mb-2 text-gray-900 dark:text-white">
              Exercícios
            </h4>
            <ul className="space-y-2">
              {dailyPlans[currentDay - 1].exercises.map((exercise, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                >
                  <span>•</span>
                  <span>{exercise.id}</span>
                  {exercise.adaptations.length > 0 && (
                    <span className="text-sm text-blue-600 dark:text-blue-400">
                      (com adaptações)
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Recipes */}
          <div className="mb-6">
            <h4 className="font-medium mb-2 text-gray-900 dark:text-white">
              Receitas Sugeridas
            </h4>
            <ul className="space-y-2">
              {dailyPlans[currentDay - 1].recipes.map((recipe, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                >
                  <span>•</span>
                  <span>{recipe.id}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tips */}
          <div className="mb-6">
            <h4 className="font-medium mb-2 text-gray-900 dark:text-white">
              Dicas de Bem-estar
            </h4>
            <ul className="space-y-2">
              {dailyPlans[currentDay - 1].wellness_tips.map((tip, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                >
                  <span>•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Complete Button */}
          <button
            onClick={() => onComplete(currentDay)}
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors min-h-[44px]"
          >
            Completar Dia {currentDay}
          </button>
        </div>
      )}

      {/* Safety Reminders */}
      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
        <h4 className="font-medium mb-2 text-amber-900 dark:text-amber-100">
          ⚠️ Lembretes de Segurança
        </h4>
        <ul className="space-y-2">
          {dailyPlans[currentDay - 1]?.safety_reminders.map((reminder, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-amber-800 dark:text-amber-200"
            >
              <span>•</span>
              <span>{reminder}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Barra de Progresso (This one was at the bottom of the file in search results) */}
      <div className="mt-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progresso Geral</span>
          <span>{Math.round((currentDay / 21) * 100)}%</span>
        </div>
        <div className="h-2 bg-fenjes-neutral-300 dark:bg-fenjes-neutral-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-fenjes-yellow transition-all duration-500"
            style={{ width: `${(currentDay / 21) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressionProgram; 