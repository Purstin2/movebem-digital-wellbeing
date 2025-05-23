import React from 'react';
import { AccessibilitySettingsProvider, AccessibilityControls } from '@/components/AccessibilitySettings';
import { MobileAccessibilityTester } from '@/components/MobileAccessibilityTester';
import { SupportSystem } from '@/components/SupportSystem';

const AccessibilityTestPage: React.FC = () => {
  return (
    <AccessibilitySettingsProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Teste de Acessibilidade
            </h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Seção de Configurações de Acessibilidade */}
            <section className="bg-white shadow rounded-lg">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6">
                  Configurações de Acessibilidade
                </h2>
                <AccessibilityControls />
              </div>
            </section>

            {/* Seção de Teste Mobile */}
            <section className="bg-white shadow rounded-lg">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6">
                  Teste em Dispositivos Móveis
                </h2>
                <MobileAccessibilityTester />
              </div>
            </section>

            {/* Seção de Suporte */}
            <section className="bg-white shadow rounded-lg md:col-span-2">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6">
                  Sistema de Suporte
                </h2>
                <SupportSystem />
              </div>
            </section>
          </div>

          {/* Área de Teste de Elementos */}
          <section className="mt-8 bg-white shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-6">
                Área de Teste de Elementos
              </h2>

              {/* Textos */}
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-medium">Teste de Texto</h3>
                <p className="text-base">
                  Este é um texto de parágrafo normal para testar a legibilidade e o contraste.
                </p>
                <p className="text-sm">
                  Este é um texto menor para testar diferentes tamanhos de fonte.
                </p>
                <p className="text-lg">
                  Este é um texto maior para testar a escala de fonte.
                </p>
              </div>

              {/* Botões */}
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-medium">Teste de Botões</h3>
                <div className="space-x-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Botão Primário
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
                    Botão Secundário
                  </button>
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                    Botão Outline
                  </button>
                </div>
              </div>

              {/* Formulário */}
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-medium">Teste de Formulário</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        Aceito os termos e condições
                      </span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Enviar
                  </button>
                </form>
              </div>

              {/* Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Teste de Links</h3>
                <div className="space-y-2">
                  <a href="#" className="text-blue-600 hover:underline block">
                    Link de navegação simples
                  </a>
                  <a href="#" className="text-blue-600 hover:underline block">
                    Link com ícone e texto mais longo para testar quebra de linha
                    <span className="inline-block ml-1">→</span>
                  </a>
                  <a href="#" className="text-blue-600 hover:underline block">
                    Link com descrição adicional
                    <span className="block text-sm text-gray-500">
                      Clique aqui para mais informações sobre acessibilidade
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </AccessibilitySettingsProvider>
  );
};

export default AccessibilityTestPage; 