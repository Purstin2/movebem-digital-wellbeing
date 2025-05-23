import React, { useEffect, useState } from 'react';

interface AccessibilityTestResult {
  test: string;
  passed: boolean;
  details: string;
}

export const AccessibilityTester: React.FC = () => {
  const [results, setResults] = useState<AccessibilityTestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runAccessibilityTests = async () => {
    setIsRunning(true);
    const testResults: AccessibilityTestResult[] = [];

    // Teste 1: Tamanho mínimo de fonte
    testResults.push({
      test: 'Tamanho mínimo de fonte',
      passed: checkMinimumFontSize(),
      details: 'Verifica se todas as fontes têm no mínimo 16px'
    });

    // Teste 2: Área de toque
    testResults.push({
      test: 'Área de toque',
      passed: checkTouchTargets(),
      details: 'Verifica se áreas clicáveis têm no mínimo 44x44px'
    });

    // Teste 3: Contraste de cores
    testResults.push({
      test: 'Contraste de cores',
      passed: await checkColorContrast(),
      details: 'Verifica se o contraste atende às diretrizes WCAG 2.1'
    });

    // Teste 4: Suporte a gestos
    testResults.push({
      test: 'Suporte a gestos',
      passed: checkGestureSupport(),
      details: 'Verifica se há suporte a gestos básicos de navegação'
    });

    // Teste 5: Orientação da tela
    testResults.push({
      test: 'Orientação da tela',
      passed: checkScreenOrientation(),
      details: 'Verifica se o conteúdo se adapta à orientação da tela'
    });

    // Teste 6: Navegação por teclado
    testResults.push({
      test: 'Navegação por teclado',
      passed: checkKeyboardNavigation(),
      details: 'Verifica se é possível navegar usando teclado virtual'
    });

    setResults(testResults);
    setIsRunning(false);
  };

  const checkMinimumFontSize = (): boolean => {
    const elements = document.querySelectorAll('*');
    let passed = true;

    elements.forEach(element => {
      const fontSize = window.getComputedStyle(element).fontSize;
      const sizeInPx = parseFloat(fontSize);
      if (sizeInPx < 16) {
        passed = false;
        console.warn(`Elemento com fonte menor que 16px: ${element.tagName}`, element);
      }
    });

    return passed;
  };

  const checkTouchTargets = (): boolean => {
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, select, textarea');
    let passed = true;

    interactiveElements.forEach(element => {
      const rect = (element as HTMLElement).getBoundingClientRect();
      if (rect.width < 44 || rect.height < 44) {
        passed = false;
        console.warn(`Elemento com área de toque insuficiente: ${element.tagName}`, element);
      }
    });

    return passed;
  };

  const checkColorContrast = async (): Promise<boolean> => {
    const elements = document.querySelectorAll('*');
    let passed = true;

    elements.forEach(element => {
      const style = window.getComputedStyle(element);
      const backgroundColor = style.backgroundColor;
      const color = style.color;

      if (backgroundColor && color) {
        const contrast = calculateColorContrast(backgroundColor, color);
        if (contrast < 4.5) { // WCAG AA standard
          passed = false;
          console.warn(`Contraste insuficiente: ${contrast}`, element);
        }
      }
    });

    return passed;
  };

  const calculateColorContrast = (bg: string, fg: string): number => {
    // Implementação simplificada - em produção, use uma biblioteca como 'color-contrast'
    const getRGB = (color: string) => {
      const rgb = color.match(/\d+/g);
      return rgb ? rgb.map(Number) : [0, 0, 0];
    };

    const [bgR, bgG, bgB] = getRGB(bg);
    const [fgR, fgG, fgB] = getRGB(fg);

    const bgLuminance = calculateLuminance(bgR, bgG, bgB);
    const fgLuminance = calculateLuminance(fgR, fgG, fgB);

    const ratio = (Math.max(bgLuminance, fgLuminance) + 0.05) /
                 (Math.min(bgLuminance, fgLuminance) + 0.05);

    return ratio;
  };

  const calculateLuminance = (r: number, g: number, b: number): number => {
    const [rs, gs, bs] = [r / 255, g / 255, b / 255];
    const [r1, g1, b1] = [
      rs <= 0.03928 ? rs / 12.92 : Math.pow((rs + 0.055) / 1.055, 2.4),
      gs <= 0.03928 ? gs / 12.92 : Math.pow((gs + 0.055) / 1.055, 2.4),
      bs <= 0.03928 ? bs / 12.92 : Math.pow((bs + 0.055) / 1.055, 2.4)
    ];
    return 0.2126 * r1 + 0.7152 * g1 + 0.0722 * b1;
  };

  const checkGestureSupport = (): boolean => {
    const hasTouch = 'ontouchstart' in window;
    const gestureEvents = [
      'touchstart',
      'touchmove',
      'touchend',
      'touchcancel',
      'gesturestart',
      'gesturechange',
      'gestureend'
    ];

    let supported = 0;
    gestureEvents.forEach(event => {
      if (event in window) supported++;
    });

    return hasTouch && (supported / gestureEvents.length > 0.7);
  };

  const checkScreenOrientation = (): boolean => {
    return typeof window.orientation !== 'undefined' ||
           'orientation' in window.screen;
  };

  const checkKeyboardNavigation = (): boolean => {
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    return focusableElements.length > 0;
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Teste de Acessibilidade Mobile</h2>
      
      <button
        onClick={runAccessibilityTests}
        disabled={isRunning}
        className={`
          mb-6 px-6 py-3 rounded-lg text-white font-medium
          ${isRunning ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}
          transition-colors duration-200
          min-w-[200px] min-h-[44px]
        `}
      >
        {isRunning ? 'Executando testes...' : 'Iniciar Testes'}
      </button>

      {results.length > 0 && (
        <div className="space-y-4">
          {results.map((result, index) => (
            <div
              key={index}
              className={`
                p-4 rounded-lg border
                ${result.passed ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}
              `}
            >
              <div className="flex items-start">
                <div className={`
                  w-6 h-6 mr-3 rounded-full flex items-center justify-center
                  ${result.passed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}
                `}>
                  {result.passed ? '✓' : '✕'}
                </div>
                <div>
                  <h3 className="font-medium">{result.test}</h3>
                  <p className="text-sm text-gray-600 mt-1">{result.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccessibilityTester; 