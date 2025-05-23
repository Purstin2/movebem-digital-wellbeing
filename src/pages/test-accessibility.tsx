import React from 'react';
import { MobileAccessibilityTest } from '@/components/Testing/MobileAccessibilityTest';
import { accessibilityClasses } from '@/styles/accessibility';

const TestAccessibilityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className={`${accessibilityClasses.text.heading}`}>
            Testes de Acessibilidade Mobile
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="bg-white rounded-lg shadow">
          <MobileAccessibilityTest />
        </div>

        {/* Test Elements */}
        <div className="mt-8">
          <section className="p-6 bg-white rounded-lg shadow">
            <h2 className={`${accessibilityClasses.text.heading} mb-4`}>
              Elementos de Teste
            </h2>

            {/* Touch Targets */}
            <div className="mb-8">
              <h3 className={`${accessibilityClasses.text.base} font-medium mb-4`}>
                Alvos de Toque
              </h3>
              <div className="flex gap-4">
                <button className="w-8 h-8 bg-blue-500 text-white rounded">
                  Pequeno
                </button>
                <button className={`${accessibilityClasses.touch.button} bg-blue-500 text-white rounded`}>
                  Adequado
                </button>
              </div>
            </div>

            {/* Font Sizes */}
            <div className="mb-8">
              <h3 className={`${accessibilityClasses.text.base} font-medium mb-4`}>
                Tamanhos de Fonte
              </h3>
              <p style={{ fontSize: '12px' }}>Texto muito pequeno (12px)</p>
              <p style={{ fontSize: '14px' }}>Texto pequeno (14px)</p>
              <p className={accessibilityClasses.text.base}>
                Texto adequado (16px+)
              </p>
            </div>

            {/* Color Contrast */}
            <div>
              <h3 className={`${accessibilityClasses.text.base} font-medium mb-4`}>
                Contraste de Cores
              </h3>
              <p className="text-gray-400">Baixo contraste</p>
              <p className="text-gray-900">Contraste adequado</p>
              <p className="text-white bg-blue-600 p-2 rounded">Alto contraste</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TestAccessibilityPage; 