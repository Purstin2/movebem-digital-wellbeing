import React from 'react';
import { ProgressionPlan } from '@/types/personalization';

interface ProgressMetrics {
  painReduction: number;
  mobilityImprovement: number;
  adherenceRate: number;
  completedExercises: number;
  totalExercises: number;
  streak: number;
}

interface ProgressTrackerProps {
  metrics: ProgressMetrics;
  className?: string;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  metrics,
  className = ''
}) => {
  const formatPercentage = (value: number) => `${Math.round(value)}%`;

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      <h2 className="text-2xl font-semibold mb-6">Seu Progresso</h2>

      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Redução da Dor */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-blue-800 mb-2">
            Redução da Dor
          </h3>
          <div className="relative h-4 bg-blue-100 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-blue-600 transition-all duration-500"
              style={{ width: `${metrics.painReduction}%` }}
            />
          </div>
          <p className="mt-2 text-blue-600 font-medium">
            {formatPercentage(metrics.painReduction)}
          </p>
        </div>

        {/* Melhora na Mobilidade */}
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-green-800 mb-2">
            Melhora na Mobilidade
          </h3>
          <div className="relative h-4 bg-green-100 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-green-600 transition-all duration-500"
              style={{ width: `${metrics.mobilityImprovement}%` }}
            />
          </div>
          <p className="mt-2 text-green-600 font-medium">
            {formatPercentage(metrics.mobilityImprovement)}
          </p>
        </div>

        {/* Taxa de Aderência */}
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-purple-800 mb-2">
            Taxa de Aderência
          </h3>
          <div className="relative h-4 bg-purple-100 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-purple-600 transition-all duration-500"
              style={{ width: `${metrics.adherenceRate}%` }}
            />
          </div>
          <p className="mt-2 text-purple-600 font-medium">
            {formatPercentage(metrics.adherenceRate)}
          </p>
        </div>
      </div>

      {/* Exercícios Completados */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium">
            Exercícios Completados
          </h3>
          <span className="text-gray-600">
            {metrics.completedExercises} de {metrics.totalExercises}
          </span>
        </div>
        <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`absolute left-0 top-0 h-full transition-all duration-500 ${
              metrics.completedExercises / metrics.totalExercises >= 0.8
                ? 'bg-green-500'
                : metrics.completedExercises / metrics.totalExercises >= 0.6
                ? 'bg-yellow-500'
                : metrics.completedExercises / metrics.totalExercises >= 0.4
                ? 'bg-orange-500'
                : 'bg-red-500'
            }`}
            style={{
              width: `${(metrics.completedExercises / metrics.totalExercises) * 100}%`
            }}
          />
        </div>
      </div>

      {/* Sequência */}
      <div className="bg-orange-50 p-4 rounded-lg mb-8">
        <h3 className="text-lg font-medium text-orange-800 mb-2">
          Sequência Atual
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-orange-600">
            {metrics.streak}
          </span>
          <span className="text-orange-600">
            {metrics.streak === 1 ? 'dia' : 'dias'} consecutivos
          </span>
        </div>
      </div>

      {/* Dicas de Progresso */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-blue-800 mb-2">
          Dicas para Melhorar
        </h3>
        <ul className="space-y-2">
          {metrics.adherenceRate < 70 && (
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-blue-700">
                Tente estabelecer um horário fixo para seus exercícios
              </span>
            </li>
          )}
          {metrics.painReduction < 50 && (
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-blue-700">
                Considere ajustar a intensidade dos exercícios
              </span>
            </li>
          )}
          {metrics.mobilityImprovement < 60 && (
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-blue-700">
                Foque em exercícios de amplitude de movimento
              </span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProgressTracker; 