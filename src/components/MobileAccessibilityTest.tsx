import React, { useEffect, useState } from 'react';

interface AccessibilityTestResult {
  name: string;
  passed: boolean;
  details: string;
}

export const MobileAccessibilityTest: React.FC = () => {
  const [results, setResults] = useState<AccessibilityTestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runTests = () => {
    setIsRunning(true);
    const testResults: AccessibilityTestResult[] = [];

    // Teste 1: Tamanho mínimo de toque
    const touchTargets = document.querySelectorAll('button, a, input, select');
    let smallTargets = 0;
    touchTargets.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.width < 44 || rect.height < 44) {
        smallTargets++;
      }
    });
    testResults.push({
      name: 'Alvos de Toque',
      passed: smallTargets === 0,
      details: smallTargets === 0 
        ? 'Todos os elementos interativos têm tamanho adequado'
        : `${smallTargets} elementos menores que 44x44px`
    });

    // Teste 2: Contraste de cores
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, label');
    let lowContrast = 0;
    textElements.forEach(element => {
      const style = window.getComputedStyle(element);
      const backgroundColor = style.backgroundColor;
      const color = style.color;
      // Simplificação: apenas verifica se não é texto preto em fundo branco
      if (color !== 'rgb(0, 0, 0)' || backgroundColor !== 'rgb(255, 255, 255)') {
        lowContrast++;
      }
    });
    testResults.push({
      name: 'Contraste de Cores',
      passed: lowContrast === 0,
      details: lowContrast === 0
        ? 'Todos os textos têm contraste adequado'
        : `${lowContrast} elementos podem ter contraste inadequado`
    });

    // Teste 3: Tamanho de fonte
    let smallFonts = 0;
    textElements.forEach(element => {
      const fontSize = parseInt(window.getComputedStyle(element).fontSize);
      if (fontSize < 16) {
        smallFonts++;
      }
    });
    testResults.push({
      name: 'Tamanho da Fonte',
      passed: smallFonts === 0,
      details: smallFonts === 0
        ? 'Todas as fontes têm tamanho adequado'
        : `${smallFonts} elementos com fonte menor que 16px`
    });

    // Teste 4: Orientação flexível
    const isFlexible = !document.querySelector('meta[name="viewport"][content*="user-scalable=no"]');
    testResults.push({
      name: 'Zoom e Orientação',
      passed: isFlexible,
      details: isFlexible
        ? 'Zoom e rotação permitidos'
        : 'Zoom ou rotação podem estar bloqueados'
    });

    setResults(testResults);
    setIsRunning(false);
  };

  useEffect(() => {
    // Executa testes automaticamente na montagem
    runTests();
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Teste de Acessibilidade Mobile</h2>

      {/* Botão de Teste */}
      <button
        onClick={runTests}
        disabled={isRunning}
        className="w-full mb-6 p-4 bg-primary-dark text-white rounded-lg font-medium disabled:opacity-50"
      >
        {isRunning ? 'Executando...' : 'Executar Testes'}
      </button>

      {/* Resultados */}
      <div className="space-y-4">
        {results.map((result, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border ${
              result.passed
                ? 'bg-green-50 border-green-200'
                : 'bg-red-50 border-red-200'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">
                {result.passed ? '✅' : '⚠️'}
              </span>
              <h3 className="font-medium">
                {result.name}
              </h3>
            </div>
            <p className={`text-sm ${
              result.passed ? 'text-green-700' : 'text-red-700'
            }`}>
              {result.details}
            </p>
          </div>
        ))}
      </div>

      {/* Recomendações */}
      <div className="mt-6 p-4 bg-neutral-100 rounded-lg">
        <h3 className="font-medium mb-2">Recomendações:</h3>
        <ul className="text-sm space-y-2">
          <li>• Alvos de toque devem ter no mínimo 44x44px</li>
          <li>• Fontes devem ter no mínimo 16px</li>
          <li>• Manter contraste de cores adequado</li>
          <li>• Permitir zoom e rotação da tela</li>
          <li>• Testar com diferentes tamanhos de tela</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileAccessibilityTest; 