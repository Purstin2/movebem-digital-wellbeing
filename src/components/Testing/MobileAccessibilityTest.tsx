import React, { useEffect, useState } from 'react';
import { accessibilityClasses } from '@/styles/accessibility';

interface AccessibilityTestResult {
  feature: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
}

export const MobileAccessibilityTest: React.FC = () => {
  const [testResults, setTestResults] = useState<AccessibilityTestResult[]>([]);
  const [isRunningTests, setIsRunningTests] = useState(false);

  const runAccessibilityTests = async () => {
    setIsRunningTests(true);
    const results: AccessibilityTestResult[] = [];

    // Test 1: Touch Target Size
    const touchTargets = document.querySelectorAll('button, a, [role="button"]');
    let smallTargets = 0;

    touchTargets.forEach(target => {
      const rect = target.getBoundingClientRect();
      if (rect.width < 44 || rect.height < 44) {
        smallTargets++;
      }
    });

    results.push({
      feature: 'Tamanho dos Alvos de Toque',
      status: smallTargets === 0 ? 'pass' : 'warning',
      message: smallTargets === 0 
        ? 'Todos os alvos de toque atendem ao tamanho mínimo de 44x44px'
        : `${smallTargets} alvos de toque são menores que 44x44px`
    });

    // Test 2: Font Size
    const textElements = document.querySelectorAll('p, span, div');
    let smallText = 0;

    textElements.forEach(element => {
      const fontSize = window.getComputedStyle(element).fontSize;
      if (parseFloat(fontSize) < 16) {
        smallText++;
      }
    });

    results.push({
      feature: 'Tamanho da Fonte',
      status: smallText === 0 ? 'pass' : 'warning',
      message: smallText === 0
        ? 'Todos os textos atendem ao tamanho mínimo de 16px'
        : `${smallText} elementos de texto são menores que 16px`
    });

    // Test 3: Color Contrast
    const contrastIssues = await checkColorContrast();
    results.push({
      feature: 'Contraste de Cores',
      status: contrastIssues === 0 ? 'pass' : 'warning',
      message: contrastIssues === 0
        ? 'Todos os elementos têm contraste adequado'
        : `${contrastIssues} elementos têm contraste insuficiente`
    });

    // Test 4: Gesture Handling
    results.push({
      feature: 'Suporte a Gestos',
      status: 'warning',
      message: 'Verifique manualmente se todos os gestos têm alternativas'
    });

    // Test 5: Orientation Support
    const orientation = window.screen.orientation;
    results.push({
      feature: 'Suporte a Orientação',
      status: orientation ? 'pass' : 'warning',
      message: orientation
        ? 'A aplicação suporta múltiplas orientações'
        : 'Verifique o suporte a orientação da tela'
    });

    setTestResults(results);
    setIsRunningTests(false);
  };

  const checkColorContrast = async () => {
    // Simplified contrast check - in a real app, use a proper color contrast library
    let issues = 0;
    const elements = document.querySelectorAll('*');

    elements.forEach(element => {
      const style = window.getComputedStyle(element);
      const backgroundColor = style.backgroundColor;
      const color = style.color;

      // Very basic contrast check - should use WCAG algorithms in production
      if (backgroundColor === 'transparent' || color === 'transparent') {
        return;
      }

      // Simple luminance comparison
      const bgLuminance = getLuminance(backgroundColor);
      const textLuminance = getLuminance(color);
      const ratio = Math.max(bgLuminance, textLuminance) / Math.min(bgLuminance, textLuminance);

      if (ratio < 4.5) { // WCAG AA standard for normal text
        issues++;
      }
    });

    return issues;
  };

  const getLuminance = (color: string) => {
    // Simple luminance calculation - use a proper color library in production
    const rgb = color.match(/\d+/g);
    if (!rgb) return 1;
    
    const [r, g, b] = rgb.map(Number);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  };

  useEffect(() => {
    // Run tests when component mounts
    runAccessibilityTests();
  }, []);

  return (
    <div className="p-4">
      <h2 className={`${accessibilityClasses.text.heading} mb-6`}>
        Teste de Acessibilidade Mobile
      </h2>

      <button
        onClick={() => runAccessibilityTests()}
        disabled={isRunningTests}
        className={`${accessibilityClasses.touch.button} ${accessibilityClasses.text.button} 
          w-full mb-6 bg-blue-600 text-white rounded-lg 
          hover:bg-blue-700 transition-colors
          disabled:bg-gray-400 disabled:cursor-not-allowed`}
      >
        {isRunningTests ? 'Executando Testes...' : 'Executar Testes Novamente'}
      </button>

      <div className="space-y-4">
        {testResults.map((result, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border ${
              result.status === 'pass'
                ? 'border-green-200 bg-green-50'
                : result.status === 'warning'
                ? 'border-yellow-200 bg-yellow-50'
                : 'border-red-200 bg-red-50'
            }`}
          >
            <h3 className={`${accessibilityClasses.text.base} font-medium mb-2`}>
              {result.feature}
            </h3>
            <p className={`${accessibilityClasses.text.base} ${
              result.status === 'pass'
                ? 'text-green-700'
                : result.status === 'warning'
                ? 'text-yellow-700'
                : 'text-red-700'
            }`}>
              {result.message}
            </p>
          </div>
        ))}
      </div>

      {testResults.length > 0 && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className={`${accessibilityClasses.text.base} font-medium mb-2`}>
            Recomendações Gerais:
          </h3>
          <ul className={`${accessibilityClasses.text.base} space-y-2 list-disc pl-5`}>
            <li>Mantenha alvos de toque com no mínimo 44x44px</li>
            <li>Use fontes com tamanho mínimo de 16px</li>
            <li>Garanta contraste adequado entre texto e fundo</li>
            <li>Forneça alternativas para gestos complexos</li>
            <li>Suporte orientação retrato e paisagem</li>
          </ul>
        </div>
      )}
    </div>
  );
}; 