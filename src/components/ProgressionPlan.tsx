import React from 'react';
import { ProgressionPlan as ProgressionPlanType } from '@/types/personalization';

interface ProgressionPlanProps {
  plan: ProgressionPlanType;
  currentDay: number;
  onComplete: (day: number) => void;
  className?: string;
}

const ProgressionPlan: React.FC<ProgressionPlanProps> = ({
  plan,
  currentDay,
  onComplete,
  className = ''
}) => {
  const weeks = Array.from({ length: 3 }, (_, i) => i + 1);
  const daysInWeek = Array.from({ length: 7 }, (_, i) => i + 1);

  const getWeeklyGoals = (week: number) => {
    return plan.weeklyGoals[week] || {
      exerciseTargets: [],
      nutritionTargets: [],
      adaptationNotes: []
    };
  };

  const isDayComplete = (weekNum: number, dayNum: number) => {
    const absoluteDay = (weekNum - 1) * 7 + dayNum;
    return absoluteDay < currentDay;
  };

  const isCurrentDay = (weekNum: number, dayNum: number) => {
    const absoluteDay = (weekNum - 1) * 7 + dayNum;
    return absoluteDay === currentDay;
  };

  return (
    <div className={`space-y-8 ${className}`}>
      <h2 className="text-2xl font-bold mb-6">Seu Plano de Progressão de 21 Dias</h2>

      {weeks.map(weekNum => {
        const goals = getWeeklyGoals(weekNum);
        
        return (
          <div key={weekNum} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-xl font-semibold">Semana {weekNum}</h3>
            </div>

            <div className="p-6">
              {/* Objetivos Semanais */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Objetivos da Semana:</h4>
                <ul className="space-y-2">
                  {goals.exerciseTargets.map((target, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {target}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Grade de Dias */}
              <div className="grid grid-cols-7 gap-2">
                {daysInWeek.map(dayNum => {
                  const absoluteDay = (weekNum - 1) * 7 + dayNum;
                  const dayComplete = isDayComplete(weekNum, dayNum);
                  const isToday = isCurrentDay(weekNum, dayNum);

                  return (
                    <button
                      key={dayNum}
                      onClick={() => !dayComplete && isToday && onComplete(absoluteDay)}
                      className={`
                        p-4 rounded-lg text-center transition-all
                        ${dayComplete ? 'bg-green-100 text-green-800' : ''}
                        ${isToday ? 'bg-blue-100 text-blue-800 ring-2 ring-blue-500' : ''}
                        ${!dayComplete && !isToday ? 'bg-gray-50 text-gray-400' : ''}
                        hover:opacity-90
                      `}
                      disabled={!isToday}
                    >
                      <div className="font-medium">Dia {dayNum}</div>
                      {dayComplete && (
                        <svg
                          className="w-5 h-5 mx-auto mt-1 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Notas de Adaptação */}
              {goals.adaptationNotes.length > 0 && (
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-medium mb-2">Notas de Adaptação:</h4>
                  <ul className="space-y-1 text-sm text-yellow-800">
                    {goals.adaptationNotes.map((note, idx) => (
                      <li key={idx}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Barra de Progresso */}
      <div className="mt-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progresso Geral</span>
          <span>{Math.round((currentDay / 21) * 100)}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-500"
            style={{ width: `${(currentDay / 21) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressionPlan; 