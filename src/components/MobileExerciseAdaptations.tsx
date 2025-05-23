import React, { useEffect, useState } from 'react';

interface MobileExerciseAdaptationsProps {
  className?: string;
  painLevel: number;
}

export const MobileExerciseAdaptations: React.FC<MobileExerciseAdaptationsProps> = ({
  className = '',
  painLevel
}) => {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  useEffect(() => {
    const updateOrientation = () => {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
    };

    updateOrientation();
    window.addEventListener('resize', updateOrientation);
    window.addEventListener('orientationchange', updateOrientation);

    return () => {
      window.removeEventListener('resize', updateOrientation);
      window.removeEventListener('orientationchange', updateOrientation);
    };
  }, []);

  const getAdaptationLevel = () => {
    if (painLevel >= 7) return 'severe';
    if (painLevel >= 4) return 'moderate';
    return 'mild';
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Orientação do Dispositivo */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-lg font-semibold mb-2">📱 Visualização</h3>
        <div className="p-3 bg-neutral-100 rounded-lg">
          <p className="flex items-center gap-2">
            <span className="text-xl">
              {orientation === 'portrait' ? '📱' : '📱↔️'}
            </span>
            <span>
              {orientation === 'portrait'
                ? 'Modo retrato: melhor para instruções'
                : 'Modo paisagem: melhor para visão geral'}
            </span>
          </p>
        </div>
      </div>

      {/* Adaptações por Nível de Dor */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-lg font-semibold mb-2">
          Adaptações para Dor Nível {painLevel}/10
        </h3>

        {getAdaptationLevel() === 'severe' && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 font-medium mb-2">⚠️ Atenção Máxima</p>
            <ul className="space-y-1 text-sm">
              <li>• Movimentos mínimos apenas</li>
              <li>• Foque na respiração</li>
              <li>• Use suportes sempre</li>
              <li>• Pare se a dor aumentar</li>
            </ul>
          </div>
        )}

        {getAdaptationLevel() === 'moderate' && (
          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-700 font-medium mb-2">⚠️ Precauções</p>
            <ul className="space-y-1 text-sm">
              <li>• Reduza amplitude 50%</li>
              <li>• Aumente pausas</li>
              <li>• Use suporte se necessário</li>
            </ul>
          </div>
        )}

        {getAdaptationLevel() === 'mild' && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 font-medium mb-2">✓ Adaptações Leves</p>
            <ul className="space-y-1 text-sm">
              <li>• Amplitude confortável</li>
              <li>• Mantenha alinhamento</li>
              <li>• Respeite limites</li>
            </ul>
          </div>
        )}
      </div>

      {/* Dicas de Uso */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-lg font-semibold mb-2">Dicas de Uso</h3>
        <div className="space-y-3">
          <div className="p-3 bg-neutral-100 rounded-lg">
            <h4 className="font-medium mb-1">🔍 Gestos</h4>
            <ul className="text-sm">
              <li>• Pinça: zoom em detalhes</li>
              <li>• Deslize: próxima etapa</li>
              <li>• Toque duplo: reset zoom</li>
            </ul>
          </div>

          <div className="p-3 bg-neutral-100 rounded-lg">
            <h4 className="font-medium mb-1">💡 Ambiente</h4>
            <ul className="text-sm">
              <li>• Celular estável</li>
              <li>• Boa iluminação</li>
              <li>• Sem distrações</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Controles */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => document.documentElement.requestFullscreen()}
          className="p-4 bg-primary-dark text-white rounded-lg text-center font-medium hover:bg-primary-dark/90 transition-colors"
        >
          Tela Cheia
        </button>
        
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-4 bg-neutral-200 text-neutral-800 rounded-lg text-center font-medium hover:bg-neutral-300 transition-colors"
        >
          Topo
        </button>
      </div>
    </div>
  );
};

export default MobileExerciseAdaptations; 