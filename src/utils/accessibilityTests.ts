export interface AccessibilityTestResult {
  passed: boolean;
  details: string;
}

export const testTouchTargets = (): AccessibilityTestResult => {
  const elements = document.querySelectorAll('button, a, [role="button"], input, select');
  const smallTargets: string[] = [];

  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.width < 44 || rect.height < 44) {
      smallTargets.push(el.tagName.toLowerCase());
    }
  });

  return {
    passed: smallTargets.length === 0,
    details: smallTargets.length === 0
      ? 'Todos os elementos têm tamanho adequado'
      : `Elementos pequenos encontrados: ${smallTargets.join(', ')}`
  };
};

export const testFontSizes = (): AccessibilityTestResult => {
  const elements = document.querySelectorAll('p, span, div, button, a, input, label');
  const smallFonts: string[] = [];

  elements.forEach((el) => {
    const fontSize = parseInt(window.getComputedStyle(el).fontSize);
    if (fontSize < 16) {
      smallFonts.push(`${el.tagName.toLowerCase()} (${fontSize}px)`);
    }
  });

  return {
    passed: smallFonts.length === 0,
    details: smallFonts.length === 0
      ? 'Todas as fontes têm tamanho adequado'
      : `Fontes pequenas encontradas: ${smallFonts.join(', ')}`
  };
};

export const testSpacing = (): AccessibilityTestResult => {
  const elements = document.querySelectorAll('*');
  const tightSpacing: string[] = [];

  elements.forEach((el) => {
    const style = window.getComputedStyle(el);
    const margin = parseInt(style.marginBottom) + parseInt(style.marginTop);
    if (margin < 8) {
      tightSpacing.push(el.tagName.toLowerCase());
    }
  });

  return {
    passed: tightSpacing.length === 0,
    details: tightSpacing.length === 0
      ? 'Espaçamento adequado entre elementos'
      : `Elementos com espaçamento insuficiente: ${tightSpacing.join(', ')}`
  };
};

export const testContrast = (): AccessibilityTestResult => {
  // Simplified contrast check - in reality, you'd want to use a more sophisticated
  // algorithm that actually calculates contrast ratios
  const elements = document.querySelectorAll('*');
  const lowContrast: string[] = [];

  elements.forEach((el) => {
    const style = window.getComputedStyle(el);
    const backgroundColor = style.backgroundColor;
    const color = style.color;
    
    // This is a very basic check - you'd want to use a proper color contrast algorithm
    if (backgroundColor === 'transparent' || color === 'transparent') {
      return;
    }

    // Add to low contrast if the element has text and might have contrast issues
    if (el.textContent?.trim() && (backgroundColor === color)) {
      lowContrast.push(el.tagName.toLowerCase());
    }
  });

  return {
    passed: lowContrast.length === 0,
    details: lowContrast.length === 0
      ? 'Contraste adequado em todos os elementos'
      : `Elementos com possível baixo contraste: ${lowContrast.join(', ')}`
  };
}; 