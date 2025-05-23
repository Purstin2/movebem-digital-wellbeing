export const checkMobileA11y = (root: HTMLElement) => {
  const issues = [];

  // Check touch targets
  root.querySelectorAll('button, a, input, select').forEach(el => {
    const rect = (el as HTMLElement).getBoundingClientRect();
    if (rect.width < 44 || rect.height < 44) {
      issues.push(`Elemento ${el.tagName} muito pequeno (${rect.width}x${rect.height}px)`);
    }
  });

  // Check font sizes
  root.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, label').forEach(el => {
    const size = parseInt(window.getComputedStyle(el).fontSize);
    if (size < 16) {
      issues.push(`Texto em ${el.tagName} muito pequeno (${size}px)`);
    }
  });

  // Check horizontal scroll
  if (root.scrollWidth > window.innerWidth) {
    issues.push('Página tem rolagem horizontal');
  }

  return {
    ok: issues.length === 0,
    issues,
    summary: issues.length === 0 
      ? '✅ Todos os testes passaram!' 
      : `❌ Encontrados ${issues.length} problemas:\n${issues.join('\n')}`
  };
};

export const setMobileViewport = (width = 375) => {
  const viewport = document.createElement('meta');
  viewport.name = 'viewport';
  viewport.content = `width=${width}, initial-scale=1`;
  document.head.appendChild(viewport);
}; 
 