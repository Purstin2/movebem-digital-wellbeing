import React, { useState, useEffect } from 'react';
import { PersonalizedProgram, TrackRequirements } from '@/types/personalization';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface SpecializedTrackProps {
  type: 'therapeutic' | 'adaptive' | 'wellness';
  program: PersonalizedProgram;
  requirements: TrackRequirements;
}

export const SpecializedTrack: React.FC<SpecializedTrackProps> = ({
  type,
  program,
  requirements,
}) => {
  const getTrackInfo = () => {
    switch (type) {
      case 'therapeutic':
        return {
          title: 'Trilha Terapêutica',
          subtitle: 'Para Dores Severas/Crônicas',
          description: 'Programa especializado para recuperação e manejo de dores intensas',
          features: [
            'Exercícios com progressão muito gradual',
            'Adaptações específicas para cada nível de dor',
            'Monitoramento constante de sintomas',
            'Suporte profissional recomendado',
            'Foco em técnicas de alívio imediato'
          ],
          color: 'blue',
          icon: '🏥'
        };
      case 'adaptive':
        return {
          title: 'Trilha Adaptativa',
          subtitle: 'Para Limitações Moderadas',
          description: 'Programa personalizado para diferentes níveis de mobilidade',
          features: [
            'Exercícios adaptados à sua condição',
            'Progressão individualizada',
            'Variações para cada movimento',
            'Foco em ganho gradual de mobilidade',
            'Suporte para independência'
          ],
          color: 'green',
          icon: '⚡'
        };
      case 'wellness':
        return {
          title: 'Trilha Wellness',
          subtitle: 'Para Prevenção e Bem-estar',
          description: 'Programa holístico para manutenção da saúde',
          features: [
            'Exercícios preventivos',
            'Foco em força e flexibilidade',
            'Práticas de mindfulness',
            'Nutrição integrativa',
            'Hábitos saudáveis'
          ],
          color: 'purple',
          icon: '🌿'
        };
    }
  };

  const trackInfo = getTrackInfo();
  const colorSchemes = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-500',
      text: 'text-blue-700',
      button: 'bg-blue-500 hover:bg-blue-600',
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-500',
      text: 'text-green-700',
      button: 'bg-green-500 hover:bg-green-600',
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-500',
      text: 'text-purple-700',
      button: 'bg-purple-500 hover:bg-purple-600',
    },
  };

  const currentColorScheme = colorSchemes[trackInfo.color as keyof typeof colorSchemes];

  return (
    <div className={`rounded-lg ${currentColorScheme?.bg || 'bg-gray-50'} p-6 mb-8`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl" role="img" aria-label="Track icon">
          {trackInfo.icon}
        </span>
        <div>
          <h2 className={`text-2xl font-semibold ${currentColorScheme?.text || 'text-gray-700'}`}>
            {trackInfo.title}
          </h2>
          <p className="text-gray-600">{trackInfo.subtitle}</p>
        </div>
      </div>

      <p className="text-gray-700 mb-6">{trackInfo.description}</p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Características da Trilha */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className={`text-lg font-medium ${currentColorScheme?.text || 'text-gray-700'} mb-4`}>
            Características Principais
          </h3>
          <ul className="space-y-3">
            {trackInfo.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <svg
                  className={`w-5 h-5 ${currentColorScheme?.text || 'text-gray-700'}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Requisitos e Recomendações */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className={`text-lg font-medium ${currentColorScheme?.text || 'text-gray-700'} mb-4`}>
            Requisitos e Recomendações
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Nível de Dor Máximo:</p>
              <p className="text-gray-600">
                {requirements[type].maxPainLevel.level}/10
              </p>
            </div>
            <div>
              <p className="font-medium">Velocidade de Progressão:</p>
              <p className="text-gray-600">
                {requirements[type].progressionSpeed.replace('_', ' ')}
              </p>
            </div>
            <div>
              <p className="font-medium">Supervisão Profissional:</p>
              <p className="text-gray-600">
                {(requirements[type] as any).requiredProfessionalGuidance
                  ? 'Necessária'
                  : 'Recomendada'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer específico para a trilha */}
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
        <p className="text-sm text-yellow-700">
          Lembre-se: este plano é uma sugestão. Ouça seu corpo e ajuste conforme necessário.
        </p>
      </div>

      {/* Botão de Início/Continuação */}
      <button
        className={`w-full mt-6 py-3 px-6 text-white rounded-lg ${currentColorScheme?.button || 'bg-gray-500 hover:bg-gray-600'} transition-colors duration-200`}
      >
        {program.currentDay === 0
          ? 'Começar Jornada'
          : 'Continuar Jornada'}
      </button>
    </div>
  );
};

export default SpecializedTrack; 