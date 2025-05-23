interface AccessibilityIssue {
  type: 'error' | 'warning';
  message: string;
  element?: string;
  recommendation: string;
}

interface TestResult {
  passed: boolean;
  issues: AccessibilityIssue[];
}

export const testMobileAccessibility = (rootElement: HTMLElement): TestResult => {
  const issues: AccessibilityIssue[] = [];

  // 1. Testar tamanho dos alvos de toque
  const touchTargets = rootElement.querySelectorAll('button, [role="button"], a, input, select');
  touchTargets.forEach(element => {
    const rect = (element as HTMLElement).getBoundingClientRect();
    if (rect.width < 44 || rect.height < 44) {
      issues.push({
        type: 'error',
        message: 'Alvo de toque muito pequeno',
        element: element.tagName.toLowerCase(),
        recommendation: 'Aumente o tamanho para pelo menos 44x44px'
      });
    }
  });

  // 2. Testar tamanho da fonte
  const textElements = rootElement.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, label');
  textElements.forEach(element => {
    const fontSize = parseInt(window.getComputedStyle(element).fontSize);
    if (fontSize < 16) {
      issues.push({
        type: 'warning',
        message: 'Fonte muito pequena para mobile',
        element: element.tagName.toLowerCase(),
        recommendation: 'Use fonte de pelo menos 16px em dispositivos móveis'
      });
    }
  });

  // 3. Testar espaçamento entre elementos
  const interactiveElements = Array.from(touchTargets);
  interactiveElements.forEach((element, index) => {
    if (index < interactiveElements.length - 1) {
      const rect1 = (element as HTMLElement).getBoundingClientRect();
      const rect2 = (interactiveElements[index + 1] as HTMLElement).getBoundingClientRect();
      const spacing = Math.min(
        Math.abs(rect1.right - rect2.left),
        Math.abs(rect1.bottom - rect2.top)
      );
      
      if (spacing < 8) {
        issues.push({
          type: 'warning',
          message: 'Elementos muito próximos',
          element: `${element.tagName.toLowerCase()} e ${interactiveElements[index + 1].tagName.toLowerCase()}`,
          recommendation: 'Mantenha pelo menos 8px de espaçamento entre elementos interativos'
        });
      }
    }
  });

  // 4. Testar rolagem horizontal
  if (rootElement.scrollWidth > window.innerWidth) {
    issues.push({
      type: 'error',
      message: 'Conteúdo causa rolagem horizontal',
      recommendation: 'Ajuste o layout para evitar rolagem horizontal em dispositivos móveis'
    });
  }

  // 5. Testar labels acessíveis
  const controls = rootElement.querySelectorAll('button, input, select, textarea');
  controls.forEach(control => {
    const hasAccessibleName = 
      control.hasAttribute('aria-label') ||
      control.hasAttribute('aria-labelledby') ||
      (control as HTMLInputElement).placeholder ||
      control.textContent?.trim();

    if (!hasAccessibleName) {
      issues.push({
        type: 'error',
        message: 'Controle sem label acessível',
        element: control.tagName.toLowerCase(),
        recommendation: 'Adicione aria-label ou texto visível para identificar o controle'
      });
    }
  });

  return {
    passed: issues.length === 0,
    issues
  };
};

export const generateAccessibilityReport = (result: TestResult): string => {
  let report = '# Relatório de Acessibilidade Mobile\n\n';
  
  if (result.passed) {
    report += '✅ Todos os testes passaram!\n\n';
  } else {
    report += `❌ Encontrados ${result.issues.length} problemas:\n\n`;
    
    const errorCount = result.issues.filter(i => i.type === 'error').length;
    const warningCount = result.issues.filter(i => i.type === 'warning').length;
    
    report += `- ${errorCount} erros\n`;
    report += `- ${warningCount} avisos\n\n`;
    
    result.issues.forEach((issue, index) => {
      report += `## Problema ${index + 1}\n`;
      report += `**Tipo:** ${issue.type === 'error' ? '🔴 Erro' : '🟡 Aviso'}\n`;
      report += `**Mensagem:** ${issue.message}\n`;
      if (issue.element) {
        report += `**Elemento:** \`${issue.element}\`\n`;
      }
      report += `**Recomendação:** ${issue.recommendation}\n\n`;
    });
  }
  
  return report;
};

export const simulateMobileDevice = (
  type: 'phone' | 'tablet' = 'phone',
  orientation: 'portrait' | 'landscape' = 'portrait'
): void => {
  const viewport = document.createElement('meta');
  viewport.name = 'viewport';
  
  switch (type) {
    case 'phone':
      viewport.content = orientation === 'portrait'
        ? 'width=375, initial-scale=1'
        : 'width=667, initial-scale=1';
      break;
    case 'tablet':
      viewport.content = orientation === 'portrait'
        ? 'width=768, initial-scale=1'
        : 'width=1024, initial-scale=1';
      break;
  }
  
  document.head.appendChild(viewport);
}; 