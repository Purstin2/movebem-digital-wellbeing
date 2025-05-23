import React, { useState } from 'react';

interface AccessibilityTestProps {
  className?: string;
}

export const AccessibilityTest: React.FC<AccessibilityTestProps> = ({
  className = ''
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [contrast, setContrast] = useState<'normal' | 'high'>('normal');

  return (
    <div className={`p-4 ${className}`}>
      <h2 className={`mb-4 font-semibold ${
        fontSize === 'large' ? 'text-2xl' : 'text-xl'
      }`}>
        Teste de Acessibilidade
      </h2>

      <div className="space-y-4 mb-6">
        {/* Tamanho da Fonte */}
        <div>
          <button
            onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
            className={`px-4 py-2 rounded-lg min-h-[48px] ${
              contrast === 'high'
                ? 'bg-black text-white border-2 border-white'
                : 'bg-blue-600 text-white'
            }`}
          >
            {fontSize === 'normal' ? 'Aumentar Fonte' : 'Diminuir Fonte'}
          </button>
        </div>

        {/* Contraste */}
        <div>
          <button
            onClick={() => setContrast(contrast === 'normal' ? 'high' : 'normal')}
            className={`px-4 py-2 rounded-lg min-h-[48px] ${
              contrast === 'high'
                ? 'bg-white text-black border-2 border-black'
                : 'bg-gray-600 text-white'
            }`}
          >
            {contrast === 'normal' ? 'Alto Contraste' : 'Contraste Normal'}
          </button>
        </div>
      </div>

      {/* Área de Teste */}
      <div className={`p-4 rounded-lg ${
        contrast === 'high'
          ? 'bg-black text-white border-2 border-white'
          : 'bg-white text-gray-800 border border-gray-200'
      }`}>
        <h3 className={`mb-4 font-medium ${
          fontSize === 'large' ? 'text-xl' : 'text-lg'
        }`}>
          Área de Teste
        </h3>

        <p className={fontSize === 'large' ? 'text-lg' : 'text-base'}>
          Este é um texto de exemplo para testar a legibilidade e o contraste.
          Verifique se você consegue ler facilmente.
        </p>

        <div className="mt-4">
          <a
            href="#"
            className={`block py-3 ${
              contrast === 'high'
                ? 'text-white underline'
                : 'text-blue-600 hover:underline'
            }`}
          >
            Link de Exemplo
          </a>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityTest; 
 