import React from 'react';

interface TestResult {
  name: string;
  passed: boolean;
  description: string;
  recommendation?: string;
}

interface AccessibilityTestProps {
  onTestComplete: (results: TestResult[]) => void;
}

export const MobileAccessibilityTest: React.FC<AccessibilityTestProps> = ({
  onTestComplete
}) => {
  const [currentTest, setCurrentTest] = React.useState(0);
  const [results, setResults] = React.useState<TestResult[]>([]);

  const accessibilityTests = [
    {
      name: 'Tamanho do Texto',
      test: () => {
        const minFontSize = 16; // 16px minimum
        const bodyFontSize = window.getComputedStyle(document.body).fontSize;
        const size = parseFloat(bodyFontSize);
        return {
          passed: size >= minFontSize,
          description: 'Verifica se o tamanho mínimo da fonte é 16px',
          recommendation: size < minFontSize ? 'Aumente o tamanho mínimo da fonte para 16px' : undefined
        };
      }
    },
    {
      name: 'Área de Toque',
      test: () => {
        const minTouchArea = 44; // 44x44px minimum
        const touchableElements = document.querySelectorAll('button, a, [role="button"], input, select');
        let smallElements = 0;
        
        touchableElements.forEach(element => {
          const rect = element.getBoundingClientRect();
          if (rect.width < minTouchArea || rect.height < minTouchArea) {
            smallElements++;
          }
        });

        return {
          passed: smallElements === 0,
          description: 'Verifica se as áreas de toque têm no mínimo 44x44px',
          recommendation: smallElements > 0 ? `Ajuste ${smallElements} elementos para terem área mínima de 44x44px` : undefined
        };
      }
    },
    {
      name: 'Contraste de Cores',
      test: () => {
        const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a');
        let lowContrastCount = 0;

        textElements.forEach(element => {
          const style = window.getComputedStyle(element);
          const backgroundColor = style.backgroundColor;
          const color = style.color;
          
          // Simplified contrast check - in production, use a proper contrast calculation
          if (backgroundColor === color) {
            lowContrastCount++;
          }
        });

        return {
          passed: lowContrastCount === 0,
          description: 'Verifica o contraste entre texto e fundo',
          recommendation: lowContrastCount > 0 ? `Melhore o contraste em ${lowContrastCount} elementos` : undefined
        };
      }
    },
    {
      name: 'Espaçamento de Elementos',
      test: () => {
        const minSpacing = 8; // 8px minimum
        const elements = document.querySelectorAll('button, a, input, select');
        let closeElements = 0;

        elements.forEach(element => {
          const rect = element.getBoundingClientRect();
          const style = window.getComputedStyle(element);
          const margin = parseFloat(style.marginBottom) || 0;
          
          if (margin < minSpacing) {
            closeElements++;
          }
        });

        return {
          passed: closeElements === 0,
          description: 'Verifica o espaçamento entre elementos interativos',
          recommendation: closeElements > 0 ? `Aumente o espaçamento em ${closeElements} elementos` : undefined
        };
      }
    },
    {
      name: 'Orientação Responsiva',
      test: () => {
        const isLocked = document.documentElement.hasAttribute('data-orientation-lock');
        return {
          passed: !isLocked,
          description: 'Verifica se o conteúdo se adapta a diferentes orientações',
          recommendation: isLocked ? 'Remova bloqueios de orientação da tela' : undefined
        };
      }
    }
  ];

  const runTest = () => {
    if (currentTest < accessibilityTests.length) {
      const test = accessibilityTests[currentTest];
      const result = test.test();
      
      setResults(prev => [...prev, {
        name: test.name,
        passed: result.passed,
        description: result.description,
        recommendation: result.recommendation
      }]);

      setCurrentTest(prev => prev + 1);

      if (currentTest === accessibilityTests.length - 1) {
        onTestComplete(results);
      }
    }
  };

  React.useEffect(() => {
    runTest();
  }, [currentTest]);

  if (currentTest >= accessibilityTests.length) {
    return (
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Resultados do Teste de Acessibilidade
        </h2>
        
        <div className="space-y-4">
          {results.map((result, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${
                result.passed ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
              }`}
            >
              <div className="flex items-center space-x-2">
                {result.passed ? (
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                <h3 className="font-medium text-gray-900">{result.name}</h3>
              </div>
              
              <p className="mt-2 text-sm text-gray-600">
                {result.description}
              </p>
              
              {result.recommendation && (
                <p className="mt-2 text-sm font-medium text-red-700">
                  Recomendação: {result.recommendation}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <p className="text-base text-gray-700">
            {results.filter(r => r.passed).length} de {results.length} testes passaram
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default MobileAccessibilityTest; 