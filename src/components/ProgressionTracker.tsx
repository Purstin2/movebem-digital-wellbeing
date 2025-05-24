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
          <div className="h-4 bg-fenjes-neutral-300 dark:bg-fenjes-neutral-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-fenjes-yellow transition-all duration-500"
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
          {/* ... rest of the component ... */}
        </div>
      </div>
    </div>
  );
};