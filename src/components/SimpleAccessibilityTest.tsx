import React from 'react';

export const SimpleAccessibilityTest: React.FC = () => {
  const runTests = () => {
    // Test touch targets
    const touchTargets = document.querySelectorAll('button, a, [role="button"], input');
    let smallTargets = 0;
    touchTargets.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.width < 44 || rect.height < 44) smallTargets++;
    });

    // Test font sizes
    const textElements = document.querySelectorAll('p, span, div, button, a');
    let smallFonts = 0;
    textElements.forEach(el => {
      const fontSize = parseInt(window.getComputedStyle(el).fontSize);
      if (fontSize < 16) smallFonts++;
    });

    return {
      touchTargets: smallTargets === 0,
      fonts: smallFonts === 0
    };
  };

  const results = runTests();

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Teste de Acessibilidade Mobile</h2>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Resultados:</h3>
        <ul>
          <li>
            Alvos de Toque: {' '}
            <span style={{ color: results.touchTargets ? 'green' : 'red' }}>
              {results.touchTargets ? 'Passou' : 'Falhou'}
            </span>
          </li>
          <li>
            Tamanho das Fontes: {' '}
            <span style={{ color: results.fonts ? 'green' : 'red' }}>
              {results.fonts ? 'Passou' : 'Falhou'}
            </span>
          </li>
        </ul>
      </div>

      <p style={{ marginTop: '20px', color: '#666' }}>
        Este é um teste básico de acessibilidade. Para uma análise completa,
        recomendamos testes manuais adicionais.
      </p>
    </div>
  );
}; 