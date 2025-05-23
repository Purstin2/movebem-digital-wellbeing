import React from 'react';
import { PhysicalLimitation, PainLevel } from '@/types/personalization';

interface ExerciseAdaptation {
  id: string;
  name: string;
  description: string;
  targetAreas: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  modifications: {
    mobility: string[];
    strength: string[];
    balance: string[];
    coordination: string[];
    endurance: string[];
  };
  painConsiderations: {
    level: number;
    recommendations: string[];
  }[];
  equipment: {
    required: string[];
    alternatives: string[];
  };
  precautions: string[];
}

interface ExerciseAdaptationsProps {
  exercise: ExerciseAdaptation;
  userLimitations?: PhysicalLimitation[];
  painLevels?: PainLevel[];
  className?: string;
}

export const ExerciseAdaptations: React.FC<ExerciseAdaptationsProps> = ({
  exercise,
  userLimitations = [],
  painLevels = [],
  className = ''
}) => {
  const getRelevantModifications = () => {
    const modifications: string[] = [];
    
    userLimitations.forEach(limitation => {
      const limitationMods = exercise.modifications[limitation.type];
      if (limitationMods) {
        modifications.push(...limitationMods.filter(mod => 
          limitation.severity === 'severe' || 
          (limitation.severity === 'moderate' && !mod.includes('severa'))
        ));
      }
    });

    return [...new Set(modifications)];
  };

  const getPainAdaptations = () => {
    const adaptations: string[] = [];
    
    painLevels.forEach(pain => {
      const painRecs = exercise.painConsiderations
        .filter(consideration => consideration.level <= pain.level)
        .flatMap(consideration => consideration.recommendations);
      
      adaptations.push(...painRecs);
    });

    return [...new Set(adaptations)];
  };

  const modifications = getRelevantModifications();
  const painAdaptations = getPainAdaptations();

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      <h3 className="text-xl font-semibold mb-4">
        Adaptações para {exercise.name}
      </h3>

      {/* Nível de Dificuldade */}
      <div className="mb-6">
        <h4 className="text-lg font-medium mb-2">Nível de Dificuldade</h4>
        <div className="flex gap-2">
          {['beginner', 'intermediate', 'advanced'].map(level => (
            <span
              key={level}
              className={`px-3 py-1 rounded-full text-sm ${
                exercise.difficulty === level
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {level === 'beginner' ? 'Iniciante' :
               level === 'intermediate' ? 'Intermediário' : 'Avançado'}
            </span>
          ))}
        </div>
      </div>

      {/* Áreas Alvo */}
      <div className="mb-6">
        <h4 className="text-lg font-medium mb-2">Áreas Trabalhadas</h4>
        <div className="flex flex-wrap gap-2">
          {exercise.targetAreas.map((area, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      {/* Modificações Baseadas em Limitações */}
      {modifications.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">Adaptações Recomendadas</h4>
          <ul className="space-y-2">
            {modifications.map((modification, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">{modification}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Adaptações para Dor */}
      {painAdaptations.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">Considerações para Dor</h4>
          <ul className="space-y-2">
            {painAdaptations.map((adaptation, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-700">{adaptation}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Equipamento */}
      <div className="mb-6">
        <h4 className="text-lg font-medium mb-2">Equipamento</h4>
        <div className="space-y-4">
          <div>
            <h5 className="text-base font-medium text-gray-700 mb-1">Necessário:</h5>
            <ul className="list-disc list-inside text-gray-600">
              {exercise.equipment.required.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-base font-medium text-gray-700 mb-1">Alternativas:</h5>
            <ul className="list-disc list-inside text-gray-600">
              {exercise.equipment.alternatives.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Precauções */}
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="text-lg font-medium text-yellow-800 mb-2">Precauções</h4>
        <ul className="space-y-2">
          {exercise.precautions.map((precaution, index) => (
            <li key={index} className="flex items-start">
              <span className="text-yellow-500 mr-2">⚠️</span>
              <span className="text-yellow-800">{precaution}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExerciseAdaptations; 