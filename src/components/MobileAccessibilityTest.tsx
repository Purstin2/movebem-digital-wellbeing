import React, { useState } from 'react';

interface AccessibilityTestProps {
  className?: string;
}

export const MobileAccessibilityTest: React.FC<AccessibilityTestProps> = ({
  className = ''
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extra-large'>('normal');
  const [contrast, setContrast] = useState<'normal' | 'high'>('normal');
  const [touchTarget, setTouchTarget] = useState<'normal' | 'large'>('normal');

  return (
    <div className={`p-4 ${className}`}>
      <h2 className={`mb-6 font-semibold ${
        fontSize === 'normal' ? 'text-xl' :
        fontSize === 'large' ? 'text-2xl' : 'text-3xl'
      }`}>
        Teste de Acessibilidade Mobile
      </h2>

      {/* Configurações */}
      <div className="space-y-6 mb-8">
        {/* Tamanho da Fonte */}
        <div>
          <label className={`block mb-2 font-medium ${
            fontSize === 'normal' ? 'text-base' :
            fontSize === 'large' ? 'text-lg' : 'text-xl'
          }`}>
            Tamanho da Fonte
          </label>
          <div className="flex gap-2">
            {['normal', 'large', 'extra-large'].map((size) => (
              <button
                key={size}
                onClick={() => setFontSize(size as 'normal' | 'large' | 'extra-large')}
                className={`px-4 py-2 rounded-lg ${
                  touchTarget === 'large' ? 'min-h-[48px] min-w-[48px]' : 'min-h-[40px] min-w-[40px]'
                } ${
                  fontSize === size
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                } ${
                  contrast === 'high'
                    ? 'border-2 border-black'
                    : ''
                }`}
              >
                {size === 'normal' ? 'Normal' :
                 size === 'large' ? 'Grande' : 'Extra Grande'}
              </button>
            ))}
          </div>
        </div>

        {/* Contraste */}
        <div>
          <label className={`block mb-2 font-medium ${
            fontSize === 'normal' ? 'text-base' :
            fontSize === 'large' ? 'text-lg' : 'text-xl'
          }`}>
            Contraste
          </label>
          <div className="flex gap-2">
            {['normal', 'high'].map((c) => (
              <button
                key={c}
                onClick={() => setContrast(c as 'normal' | 'high')}
                className={`px-4 py-2 rounded-lg ${
                  touchTarget === 'large' ? 'min-h-[48px] min-w-[48px]' : 'min-h-[40px] min-w-[40px]'
                } ${
                  contrast === c
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                } ${
                  contrast === 'high'
                    ? 'border-2 border-black'
                    : ''
                }`}
              >
                {c === 'normal' ? 'Normal' : 'Alto Contraste'}
              </button>
            ))}
          </div>
        </div>

        {/* Alvos de Toque */}
        <div>
          <label className={`block mb-2 font-medium ${
            fontSize === 'normal' ? 'text-base' :
            fontSize === 'large' ? 'text-lg' : 'text-xl'
          }`}>
            Tamanho dos Botões
          </label>
          <div className="flex gap-2">
            {['normal', 'large'].map((size) => (
              <button
                key={size}
                onClick={() => setTouchTarget(size as 'normal' | 'large')}
                className={`px-4 py-2 rounded-lg ${
                  touchTarget === 'large' ? 'min-h-[48px] min-w-[48px]' : 'min-h-[40px] min-w-[40px]'
                } ${
                  touchTarget === size
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                } ${
                  contrast === 'high'
                    ? 'border-2 border-black'
                    : ''
                }`}
              >
                {size === 'normal' ? 'Normal' : 'Grande'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Área de Teste */}
      <div className={`p-4 rounded-lg ${
        contrast === 'high'
          ? 'bg-black text-white border-2 border-white'
          : 'bg-white text-gray-800 border border-gray-200'
      }`}>
        <h3 className={`mb-4 font-medium ${
          fontSize === 'normal' ? 'text-lg' :
          fontSize === 'large' ? 'text-xl' : 'text-2xl'
        }`}>
          Área de Teste
        </h3>

        <div className="space-y-4">
          {/* Botões de Teste */}
          <div className="flex flex-wrap gap-2">
            <button
              className={`rounded-lg ${
                touchTarget === 'large' ? 'min-h-[48px] px-6' : 'min-h-[40px] px-4'
              } py-2 ${
                contrast === 'high'
                  ? 'bg-white text-black border-2 border-black'
                  : 'bg-blue-600 text-white'
              }`}
            >
              Botão de Teste
            </button>
            <button
              className={`rounded-lg ${
                touchTarget === 'large' ? 'min-h-[48px] px-6' : 'min-h-[40px] px-4'
              } py-2 ${
                contrast === 'high'
                  ? 'bg-black text-white border-2 border-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              Botão Secundário
            </button>
          </div>

          {/* Texto de Teste */}
          <p className={`${
            fontSize === 'normal' ? 'text-base' :
            fontSize === 'large' ? 'text-lg' : 'text-xl'
          }`}>
            Este é um texto de exemplo para testar a legibilidade e o contraste.
            Verifique se você consegue ler facilmente e se os elementos são
            fáceis de tocar.
          </p>

          {/* Links de Teste */}
          <div className={`space-y-2 ${
            fontSize === 'normal' ? 'text-base' :
            fontSize === 'large' ? 'text-lg' : 'text-xl'
          }`}>
            <a
              href="#"
              className={`block ${
                touchTarget === 'large' ? 'py-3' : 'py-2'
              } ${
                contrast === 'high'
                  ? 'text-white underline'
                  : 'text-blue-600 hover:underline'
              }`}
            >
              Link de Exemplo 1
            </a>
            <a
              href="#"
              className={`block ${
                touchTarget === 'large' ? 'py-3' : 'py-2'
              } ${
                contrast === 'high'
                  ? 'text-white underline'
                  : 'text-blue-600 hover:underline'
              }`}
            >
              Link de Exemplo 2
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAccessibilityTest; 
    // Teste 1: Tamanho dos alvos de toque
    const touchTargets = document.querySelectorAll('button, a, input, select');
    let smallTargets = 0;
    touchTargets.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.width < 44 || rect.height < 44) smallTargets++;
    });

    newResults.push({
      name: 'Alvos de Toque',
      passed: smallTargets === 0,
      message: smallTargets === 0 
        ? 'OK: Todos os elementos têm tamanho adequado'
        : `Atenção: ${smallTargets} elementos menores que 44x44px`
    });

    // Teste 2: Tamanho da fonte
    const textElements = document.querySelectorAll('p, h1, h2, h3, span');
    let smallFonts = 0;
    textElements.forEach(el => {
      const size = parseInt(window.getComputedStyle(el).fontSize);
      if (size < 16) smallFonts++;
    });

    newResults.push({
      name: 'Tamanho da Fonte',
      passed: smallFonts === 0,
      message: smallFonts === 0
        ? 'OK: Todas as fontes têm tamanho adequado'
        : `Atenção: ${smallFonts} textos menores que 16px`
    });

    // Teste 3: Orientação
    const viewport = document.querySelector('meta[name="viewport"]');
    const orientationLocked = viewport?.getAttribute('content')?.includes('user-scalable=no');

    newResults.push({
      name: 'Orientação',
      passed: !orientationLocked,
      message: !orientationLocked
        ? 'OK: Orientação e zoom permitidos'
        : 'Atenção: Orientação ou zoom podem estar bloqueados'
    });

    setResults(newResults);
  };

  useEffect(() => {
    runTests();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Teste de Acessibilidade Mobile</h2>

      <button
        onClick={runTests}
        className="w-full p-4 bg-primary-dark text-white rounded-lg mb-6"
      >
        Executar Testes
      </button>

      <div className="space-y-4">
        {results.map((result, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              result.passed 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-red-50 border border-red-200'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span>{result.passed ? '✅' : '⚠️'}</span>
              <h3 className="font-medium">{result.name}</h3>
            </div>
            <p className="text-sm">{result.message}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-neutral-100 rounded-lg">
        <h3 className="font-medium mb-2">Recomendações:</h3>
        <ul className="text-sm space-y-1">
          <li>• Alvos de toque: mínimo 44x44px</li>
          <li>• Fontes: mínimo 16px</li>
          <li>• Permitir zoom e rotação</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileAccessibilityTest; 