import React from 'react';
import { TherapeuticTrack, AdaptiveTrack, WellnessTrack } from '@/types/personalization';

interface TrackSelectorProps {
  onTrackSelect: (track: 'therapeutic' | 'adaptive' | 'wellness') => void;
  userPainLevel?: number;
  hasLimitations?: boolean;
  className?: string;
}

const TrackSelector: React.FC<TrackSelectorProps> = ({
  onTrackSelect,
  userPainLevel = 0,
  hasLimitations = false,
  className = ''
}) => {
  const getRecommendedTrack = () => {
    if (userPainLevel >= 7) return 'therapeutic';
    if (userPainLevel >= 4 || hasLimitations) return 'adaptive';
    return 'wellness';
  };

  const trackInfo = {
    therapeutic: {
      title: 'Trilha Terapêutica',
      description: 'Desenvolvida para dores severas e condições crônicas',
      features: [
        'Exercícios de baixo impacto',
        'Progressão muito gradual',
        'Foco em alívio da dor',
        'Suporte nutricional anti-inflamatório'
      ],
      recommended: userPainLevel >= 7
    },
    adaptive: {
      title: 'Trilha Adaptativa',
      description: 'Ideal para limitações moderadas e reabilitação',
      features: [
        'Exercícios adaptados',
        'Progressão personalizada',
        'Foco em funcionalidade',
        'Suporte nutricional específico'
      ],
      recommended: userPainLevel >= 4 || hasLimitations
    },
    wellness: {
      title: 'Trilha Wellness',
      description: 'Para prevenção e manutenção da saúde',
      features: [
        'Exercícios variados',
        'Progressão regular',
        'Foco em bem-estar',
        'Nutrição balanceada'
      ],
      recommended: userPainLevel < 4 && !hasLimitations
    }
  };

  return (
    <div className={`grid gap-6 ${className}`}>
      <h2 className="text-2xl font-bold mb-4">Escolha sua Trilha</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(trackInfo).map(([track, info]) => (
          <div
            key={track}
            className={`
              p-6 rounded-lg border-2 transition-all
              ${info.recommended ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}
              hover:border-blue-500 hover:shadow-lg
            `}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold">{info.title}</h3>
              {info.recommended && (
                <span className="bg-blue-500 text-white text-sm px-2 py-1 rounded">
                  Recomendada
                </span>
              )}
            </div>
            
            <p className="text-gray-600 mb-4">{info.description}</p>
            
            <ul className="mb-6 space-y-2">
              {info.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm">
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
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => onTrackSelect(track as 'therapeutic' | 'adaptive' | 'wellness')}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Selecionar Trilha
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Nota:</strong> A recomendação é baseada no seu nível de dor e limitações atuais.
          Consulte um profissional de saúde antes de iniciar qualquer programa de exercícios.
        </p>
      </div>
    </div>
  );
};

export default TrackSelector; 