import React, { useState } from 'react';
import { AccessibilityPreferences } from '@/types/personalization';

interface TestResults {
  touchTargetSize: boolean;
  textReadability: boolean;
  contrast: boolean;
}

export const MobileAccessibilityTest: React.FC<{
  preferences: AccessibilityPreferences;
  onComplete: (results: TestResults) => void;
}> = ({ preferences, onComplete }) => {
  const [results, setResults] = useState<TestResults>({
    touchTargetSize: false,
    textReadability: false,
    contrast: false
  });

  const [step, setStep] = useState(0);

  const checkTouchTarget = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    
    const isValid = 
      touch.clientX >= rect.left &&
      touch.clientX <= rect.right &&
      touch.clientY >= rect.top &&
      touch.clientY <= rect.bottom;

    setResults(prev => ({ ...prev, touchTargetSize: isValid }));
    setStep(1);
  };

  const checkReadability = () => {
    const isReadable = preferences.fontSize >= 16 && preferences.textSpacing >= 1.5;
    setResults(prev => ({ ...prev, textReadability: isReadable }));
    setStep(2);
  };

  const checkContrast = () => {
    setResults(prev => ({ ...prev, contrast: preferences.highContrast }));
    onComplete(results);
    setStep(3);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Teste de Acessibilidade Mobile</h2>

      {step === 0 && (
        <div
          onTouchStart={checkTouchTarget}
          className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4"
        >
          Toque aqui para testar área de toque
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <p className="text-lg">O texto está legível?</p>
          <button
            onClick={checkReadability}
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg"
          >
            Sim, consigo ler bem
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <p className="text-lg">O contraste está adequado?</p>
          <button
            onClick={checkContrast}
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg"
          >
            Sim, está bom
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="mt-4">
          <h3 className="font-medium mb-2">Resultados:</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className={`w-4 h-4 rounded-full mr-2 ${
                results.touchTargetSize ? 'bg-green-500' : 'bg-red-500'
              }`} />
              Área de Toque
            </li>
            <li className="flex items-center">
              <span className={`w-4 h-4 rounded-full mr-2 ${
                results.textReadability ? 'bg-green-500' : 'bg-red-500'
              }`} />
              Legibilidade
            </li>
            <li className="flex items-center">
              <span className={`w-4 h-4 rounded-full mr-2 ${
                results.contrast ? 'bg-green-500' : 'bg-red-500'
              }`} />
              Contraste
            </li>
          </ul>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <h4 className="font-medium mb-2">Recomendações:</h4>
            <ul className="text-sm space-y-1">
              {!results.touchTargetSize && (
                <li>• Aumente o tamanho dos elementos clicáveis (mínimo 44px)</li>
              )}
              {!results.textReadability && (
                <li>• Ajuste o tamanho da fonte (mínimo 16px) e espaçamento</li>
              )}
              {!results.contrast && (
                <li>• Ative o modo de alto contraste nas configurações</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}; 