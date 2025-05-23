import React from 'react';

interface TroubleshootingItem {
  issue: string;
  symptoms: string[];
  solutions: string[];
  warningLevel: 'low' | 'medium' | 'high';
  seekMedical: boolean;
}

const troubleshootingData: TroubleshootingItem[] = [
  {
    issue: 'Dor Aguda Durante Exercício',
    symptoms: [
      'Dor súbita e intensa',
      'Dor que piora com movimento',
      'Possível sensação de "estalo"'
    ],
    solutions: [
      'Pare imediatamente o exercício',
      'Aplique gelo por 15-20 minutos',
      'Evite movimentar a área afetada'
    ],
    warningLevel: 'high',
    seekMedical: true
  },
  {
    issue: 'Desconforto Muscular Pós-Exercício',
    symptoms: [
      'Dor muscular leve a moderada',
      'Rigidez ao movimento',
      'Melhora gradual em 24-48h'
    ],
    solutions: [
      'Faça alongamentos suaves',
      'Mantenha-se hidratado',
      'Reduza intensidade temporariamente'
    ],
    warningLevel: 'low',
    seekMedical: false
  },
  {
    issue: 'Reação a Receitas',
    symptoms: [
      'Desconforto digestivo',
      'Alterações na energia',
      'Sensibilidade a ingredientes'
    ],
    solutions: [
      'Identifique ingrediente causador',
      'Ajuste porções e frequência',
      'Use substitutos recomendados'
    ],
    warningLevel: 'medium',
    seekMedical: true
  }
];

interface TroubleshootingProps {
  category?: 'exercise' | 'recipe' | 'all';
}

export const Troubleshooting: React.FC<TroubleshootingProps> = ({ category = 'all' }) => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Soluções de Problemas</h2>

      <div className="space-y-8">
        {troubleshootingData.map((item, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-lg border ${
              item.warningLevel === 'high' 
                ? 'border-red-200 bg-red-50' 
                : item.warningLevel === 'medium'
                ? 'border-yellow-200 bg-yellow-50'
                : 'border-green-200 bg-green-50'
            }`}
          >
            <h3 className="text-lg font-semibold mb-4">{item.issue}</h3>
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">Sintomas:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {item.symptoms.map((symptom, idx) => (
                  <li key={idx} className="text-gray-700">{symptom}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-medium mb-2">Soluções:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {item.solutions.map((solution, idx) => (
                  <li key={idx} className="text-gray-700">{solution}</li>
                ))}
              </ul>
            </div>

            {item.seekMedical && (
              <div className="mt-4 p-3 bg-red-100 rounded text-red-700 text-sm">
                ⚠️ Procure atendimento médico se os sintomas persistirem ou se agravarem
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          Em caso de emergência, procure atendimento médico imediato ou ligue para 192 (SAMU).
        </p>
      </div>
    </div>
  );
}; 