import React from 'react';
import { PersonalizedProgram, PainLevel } from '@/types/personalization';

interface ProgressionTrackerProps {
  program: PersonalizedProgram;
  onUpdateProgress: (data: {
    day: number;
    painLevels?: { [key: string]: PainLevel };
    completedExercise?: {
      id: string;
      difficulty: number;
      painLevel?: PainLevel;
      notes?: string;
    };
  }) => void;
}

export const ProgressionTracker: React.FC<ProgressionTrackerProps> = ({
  program,
  onUpdateProgress,
}) => {
  const totalDays = 21;
  const currentDay = program.progressTracking.currentDay;
  const track = program.track;

  const getTrackColor = () => {
    switch (track) {
      case 'therapeutic':
        return 'bg-blue-100 border-blue-500';
      case 'adaptive':
        return 'bg-green-100 border-green-500';
      case 'wellness':
        return 'bg-purple-100 border-purple-500';
      default:
        return 'bg-gray-100 border-gray-500';
    }
  };

  const getTrackTitle = () => {
    switch (track) {
      case 'therapeutic':
        return 'Trilha Terapêutica - Cuidado Especializado';
      case 'adaptive':
        return 'Trilha Adaptativa - Progresso Gradual';
      case 'wellness':
        return 'Trilha Wellness - Bem-estar Integral';
      default:
        return 'Trilha Personalizada';
    }
  };

  const getTrackDescription = () => {
    switch (track) {
      case 'therapeutic':
        return 'Foco em recuperação e alívio de dores severas/crônicas';
      case 'adaptive':
        return 'Adaptações específicas para suas limitações';
      case 'wellness':
        return 'Prevenção e manutenção da saúde global';
      default:
        return 'Programa personalizado para suas necessidades';
    }
  };

  return (
    <div className={`rounded-lg border-l-4 p-6 mb-8 ${getTrackColor()}`}>
      <h2 className="text-2xl font-semibold mb-4">{getTrackTitle()}</h2>
      <p className="text-gray-600 mb-6">{getTrackDescription()}</p>

      <div className="space-y-6">
        {/* Progresso Geral */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-3">Progresso da Jornada</h3>
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary-500 transition-all duration-500"
              style={{ width: `${(currentDay / totalDays) * 100}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Dia {currentDay} de {totalDays}
          </p>
        </div>

        {/* Exercícios do Dia */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-3">Exercícios de Hoje</h3>
          <div className="space-y-3">
            {program.weeklySchedule[new Date().toLocaleDateString('pt-BR', { weekday: 'long' })]?.exercises.map((exerciseId) => (
              <div
                key={exerciseId}
                className="flex items-center justify-between p-3 bg-gray-50 rounded"
              >
                <span>{exerciseId}</span>
                <button
                  onClick={() => onUpdateProgress({ day: currentDay, completedExercise: { id: exerciseId, difficulty: 1 } })}
                  className="px-4 py-2 text-sm bg-primary-500 text-white rounded hover:bg-primary-600 transition"
                >
                  Concluir
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Monitoramento de Dor */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-3">Monitoramento de Dor</h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(program.progressTracking.painLevelHistory[0]?.levels || {}).map(([area, level]) => (
              <div key={area} className="p-3 bg-gray-50 rounded">
                <p className="text-sm font-medium">{area}</p>
                <div className="flex items-center mt-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <button
                      key={num}
                      onClick={() => onUpdateProgress({
                        day: currentDay,
                        painLevels: { [area]: num as PainLevel }
                      })}
                      className={`w-6 h-6 rounded-full text-xs mr-1 ${
                        level === num
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dicas do Dia */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-3">Dicas do Dia</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Mantenha-se hidratado durante os exercícios</li>
            <li>Respeite seus limites de dor e mobilidade</li>
            <li>Registre suas sensações após cada prática</li>
            <li>Em caso de dúvidas, consulte seu profissional</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgressionTracker; 