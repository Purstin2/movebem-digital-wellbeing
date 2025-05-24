import React from 'react';

interface SimpleProgressProps {
  painReduction: number;
  mobilityImprovement: number;
  adherenceRate: number;
  className?: string;
}

export const SimpleProgress: React.FC<SimpleProgressProps> = ({
  painReduction,
  mobilityImprovement,
  adherenceRate,
  className = ''
}) => {
  const formatPercentage = (value: number) => `${Math.round(value)}%`;

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      <h2 className="text-2xl font-semibold mb-6">Seu Progresso</h2>

      <div className="space-y-6">
        {/* Redução da Dor */}
        <div>
          <h3 className="text-lg font-medium mb-2">Redução da Dor</h3>
          <div className="relative h-4 bg-fenjes-neutral-300 dark:bg-fenjes-neutral-700 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-fenjes-yellow transition-all duration-500"
              style={{ width: `${painReduction}%` }}
            />
          </div>
          <p className="mt-2 text-gray-600">{formatPercentage(painReduction)}</p>
        </div>

        {/* Melhora na Mobilidade */}
        <div>
          <h3 className="text-lg font-medium mb-2">Melhora na Mobilidade</h3>
          <div className="relative h-4 bg-fenjes-neutral-300 dark:bg-fenjes-neutral-700 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-fenjes-yellow transition-all duration-500"
              style={{ width: `${mobilityImprovement}%` }}
            />
          </div>
          <p className="mt-2 text-gray-600">{formatPercentage(mobilityImprovement)}</p>
        </div>

        {/* Taxa de Aderência */}
        <div>
          <h3 className="text-lg font-medium mb-2">Taxa de Aderência</h3>
          <div className="relative h-4 bg-fenjes-neutral-300 dark:bg-fenjes-neutral-700 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-fenjes-yellow transition-all duration-500"
              style={{ width: `${adherenceRate}%` }}
            />
          </div>
          <p className="mt-2 text-gray-600">{formatPercentage(adherenceRate)}</p>
        </div>
      </div>

      {/* Dicas */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-medium text-blue-800 mb-2">
          Dicas para Melhorar
        </h3>
        <ul className="space-y-2 text-blue-700">
          {adherenceRate < 70 && (
            <li>• Mantenha um horário fixo para exercícios</li>
          )}
          {painReduction < 50 && (
            <li>• Ajuste a intensidade dos exercícios</li>
          )}
          {mobilityImprovement < 60 && (
            <li>• Foque em exercícios de mobilidade</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SimpleProgress; 