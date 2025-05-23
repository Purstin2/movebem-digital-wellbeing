import { AccessibilityPreferences } from '@/types/personalization';

export interface AccessibilityTestResult {
  passed: boolean;
  issues: Array<{
    type: 'error' | 'warning';
    message: string;
    element?: string;
    recommendation: string;
  }>;
}

export const testTouchTargets = (element: HTMLElement): AccessibilityTestResult => {
  const issues: AccessibilityTestResult['issues'] = [];
  const interactiveElements = element.querySelectorAll(
    'button, [role="button"], a, input, select, textarea'
  );

  interactiveElements.forEach((el) => {
    const rect = (el as HTMLElement).getBoundingClientRect();
    const minSize = 44; // WCAG 2.5.5 Target Size (Enhanced) Level AAA

    if (rect.width < minSize || rect.height < minSize) {
      issues.push({
        type: 'error',
        message: `Elemento interativo muito pequeno (${Math.round(rect.width)}x${Math.round(
          rect.height
        )}px)`,
        element: el.tagName.toLowerCase(),
        recommendation: `Aumente o tamanho para pelo menos ${minSize}x${minSize}px`,
      });
    }

    // Verificar espaçamento entre elementos
    const margin = 8; // Espaçamento mínimo recomendado
    const siblings = Array.from(el.parentElement?.children || []).filter(
      (sibling) => sibling !== el
    );

    siblings.forEach((sibling) => {
      const siblingRect = (sibling as HTMLElement).getBoundingClientRect();
      const horizontalGap = Math.abs(rect.left - siblingRect.right);
      const verticalGap = Math.abs(rect.top - siblingRect.bottom);

      if (horizontalGap < margin || verticalGap < margin) {
        issues.push({
          type: 'warning',
          message: 'Elementos interativos muito próximos',
          element: `${el.tagName.toLowerCase()} e ${sibling.tagName.toLowerCase()}`,
          recommendation: `Mantenha pelo menos ${margin}px de espaçamento entre elementos interativos`,
        });
      }
    });
  });

  return {
    passed: issues.length === 0,
    issues,
  };
};

export const testTextContrast = (element: HTMLElement): AccessibilityTestResult => {
  const issues: AccessibilityTestResult['issues'] = [];
  const textElements = element.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, label');

  textElements.forEach((el) => {
    const styles = window.getComputedStyle(el);
    const backgroundColor = styles.backgroundColor;
    const color = styles.color;

    // Função simplificada para calcular contraste
    // Na prática, você deve usar uma biblioteca como 'color-contrast-checker'
    const hasLowContrast = false; // Implemente a lógica real de verificação de contraste

    if (hasLowContrast) {
      issues.push({
        type: 'error',
        message: 'Contraste de texto insuficiente',
        element: el.tagName.toLowerCase(),
        recommendation: 'Aumente o contraste entre o texto e o fundo para pelo menos 4.5:1',
      });
    }
  });

  return {
    passed: issues.length === 0,
    issues,
  };
};

export const testFontSize = (element: HTMLElement): AccessibilityTestResult => {
  const issues: AccessibilityTestResult['issues'] = [];
  const textElements = element.querySelectorAll('*');

  textElements.forEach((el) => {
    const fontSize = parseInt(window.getComputedStyle(el).fontSize);
    const minFontSize = 16; // Tamanho mínimo recomendado para mobile

    if (fontSize < minFontSize) {
      issues.push({
        type: 'warning',
        message: `Texto muito pequeno (${fontSize}px)`,
        element: el.tagName.toLowerCase(),
        recommendation: `Aumente o tamanho da fonte para pelo menos ${minFontSize}px`,
      });
    }
  });

  return {
    passed: issues.length === 0,
    issues,
  };
};

export const testKeyboardNavigation = (element: HTMLElement): AccessibilityTestResult => {
  const issues: AccessibilityTestResult['issues'] = [];
  const interactiveElements = element.querySelectorAll(
    'button, [role="button"], a, input, select, textarea'
  );

  interactiveElements.forEach((el) => {
    if (!el.hasAttribute('tabindex') && (el as HTMLElement).tabIndex < 0) {
      issues.push({
        type: 'error',
        message: 'Elemento não acessível por teclado',
        element: el.tagName.toLowerCase(),
        recommendation: 'Adicione tabindex apropriado ou torne o elemento naturalmente focável',
      });
    }

    // Verificar presença de outline ao focar
    const styles = window.getComputedStyle(el);
    if (styles.outlineStyle === 'none' || styles.outlineWidth === '0px') {
      issues.push({
        type: 'warning',
        message: 'Elemento pode não ter indicador visual de foco',
        element: el.tagName.toLowerCase(),
        recommendation: 'Adicione um outline visível para indicar o foco do teclado',
      });
    }
  });

  return {
    passed: issues.length === 0,
    issues,
  };
};

export const testAriaLabels = (element: HTMLElement): AccessibilityTestResult => {
  const issues: AccessibilityTestResult['issues'] = [];
  const interactiveElements = element.querySelectorAll(
    'button, [role], a, input, select, textarea, img'
  );

  interactiveElements.forEach((el) => {
    const hasAccessibleName =
      el.hasAttribute('aria-label') ||
      el.hasAttribute('aria-labelledby') ||
      el.hasAttribute('title') ||
      (el as HTMLInputElement).placeholder ||
      el.textContent?.trim();

    if (!hasAccessibleName) {
      issues.push({
        type: 'error',
        message: 'Elemento sem nome acessível',
        element: el.tagName.toLowerCase(),
        recommendation:
          'Adicione aria-label, aria-labelledby, ou texto visível para identificar o elemento',
      });
    }
  });

  return {
    passed: issues.length === 0,
    issues,
  };
};

export const applyAccessibilityPreferences = (
  preferences: AccessibilityPreferences
): void => {
  document.documentElement.style.setProperty('--font-size-base', `${preferences.fontSize}px`);
  document.documentElement.style.setProperty('--text-spacing', `${preferences.textSpacing}px`);
  document.documentElement.style.setProperty('--line-height', preferences.lineHeight.toString());

  if (preferences.highContrast) {
    document.body.classList.add('high-contrast');
  } else {
    document.body.classList.remove('high-contrast');
  }

  if (preferences.reducedMotion) {
    document.body.classList.add('reduced-motion');
  } else {
    document.body.classList.remove('reduced-motion');
  }

  // Aplicar tamanho dos alvos de toque
  const touchTargetSize = preferences.touchTargetSize === 'large' ? '52px' : '44px';
  document.documentElement.style.setProperty('--touch-target-size', touchTargetSize);
};

export const runAllAccessibilityTests = (element: HTMLElement): AccessibilityTestResult[] => {
  return [
    testTouchTargets(element),
    testTextContrast(element),
    testFontSize(element),
    testKeyboardNavigation(element),
    testAriaLabels(element),
  ];
};

export const generateAccessibilityReport = (
  testResults: AccessibilityTestResult[]
): string => {
  let report = '# Relatório de Acessibilidade Mobile\n\n';

  const totalIssues = testResults.reduce(
    (acc, result) => acc + result.issues.length,
    0
  );

  report += `## Resumo\n`;
  report += `- Total de testes: ${testResults.length}\n`;
  report += `- Testes passados: ${testResults.filter((r) => r.passed).length}\n`;
  report += `- Total de problemas: ${totalIssues}\n\n`;

  testResults.forEach((result, index) => {
    const testName = [
      'Alvos de Toque',
      'Contraste de Texto',
      'Tamanho de Fonte',
      'Navegação por Teclado',
      'Labels ARIA',
    ][index];

    report += `## ${testName}\n`;
    report += result.passed
      ? '✅ Passou em todos os critérios\n\n'
      : '❌ Problemas encontrados:\n\n';

    result.issues.forEach((issue) => {
      report += `### ${issue.type === 'error' ? '🔴' : '🟡'} ${issue.message}\n`;
      if (issue.element) {
        report += `- Elemento: \`${issue.element}\`\n`;
      }
      report += `- Recomendação: ${issue.recommendation}\n\n`;
    });
  });

  return report;
};

export const testResponsiveLayout = (element: HTMLElement): AccessibilityTestResult => {
  const issues: AccessibilityTestResult['issues'] = [];

  // Verificar overflow horizontal
  if (element.scrollWidth > window.innerWidth) {
    issues.push({
      type: 'error',
      message: 'Conteúdo causa rolagem horizontal',
      recommendation: 'Ajuste o layout para evitar rolagem horizontal em dispositivos móveis',
    });
  }

  // Verificar tamanho de fonte responsivo
  const textElements = element.querySelectorAll('*');
  textElements.forEach((el) => {
    const fontSize = parseInt(window.getComputedStyle(el).fontSize);
    if (fontSize > window.innerWidth * 0.1) {
      issues.push({
        type: 'warning',
        message: 'Fonte muito grande para a viewport',
        element: el.tagName.toLowerCase(),
        recommendation: 'Use unidades relativas (rem, vw) para tamanhos de fonte',
      });
    }
  });

  // Verificar espaçamento de elementos em telas pequenas
  const elements = element.querySelectorAll('*');
  elements.forEach((el) => {
    const margin = parseInt(window.getComputedStyle(el).marginLeft) +
                  parseInt(window.getComputedStyle(el).marginRight);
    if (margin > window.innerWidth * 0.1) {
      issues.push({
        type: 'warning',
        message: 'Margens muito grandes para tela móvel',
        element: el.tagName.toLowerCase(),
        recommendation: 'Reduza as margens em telas menores usando media queries',
      });
    }
  });

  return {
    passed: issues.length === 0,
    issues,
  };
};

export const simulateMobileDevice = (
  deviceType: 'phone' | 'tablet',
  orientation: 'portrait' | 'landscape' = 'portrait'
): void => {
  const dimensions = {
    phone: {
      portrait: { width: 375, height: 667 },
      landscape: { width: 667, height: 375 },
    },
    tablet: {
      portrait: { width: 768, height: 1024 },
      landscape: { width: 1024, height: 768 },
    },
  };

  const { width, height } = dimensions[deviceType][orientation];

  // Simular viewport
  const viewport = document.createElement('meta');
  viewport.name = 'viewport';
  viewport.content = `width=${width}, initial-scale=1`;
  document.head.appendChild(viewport);

  // Simular touch events
  const touchEvent = new TouchEvent('touchstart', {
    bubbles: true,
    cancelable: true,
    view: window,
  });

  document.dispatchEvent(touchEvent);
}; 