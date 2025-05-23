import React, { useState, useEffect } from 'react';
import { AccessibilityPreferences } from '@/types/personalization';

interface AccessibilitySettings {
  fontSize: 'normal' | 'large' | 'x-large';
  contrast: 'normal' | 'high';
  reducedMotion: boolean;
  buttonSize: 'normal' | 'large';
}

interface AccessibilitySettingsProps {
  preferences: AccessibilityPreferences;
  onUpdate: (preferences: AccessibilityPreferences) => void;
}

const defaultPreferences: AccessibilityPreferences = {
  fontSize: 16,
  highContrast: false,
  reducedMotion: false,
  touchTargetSize: 'normal',
  textSpacing: 1.5,
  lineHeight: 1.6,
};

export const AccessibilitySettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 'normal',
    contrast: 'normal',
    reducedMotion: false,
    buttonSize: 'normal'
  });

  useEffect(() => {
    // Apply settings to document root
    const root = document.documentElement;
    
    // Font size classes
    root.classList.remove('text-base', 'text-lg', 'text-xl');
    root.classList.add(
      settings.fontSize === 'normal' ? 'text-base' :
      settings.fontSize === 'large' ? 'text-lg' : 'text-xl'
    );

    // Contrast classes
    root.classList.toggle('high-contrast', settings.contrast === 'high');

    // Reduced motion
    root.classList.toggle('reduce-motion', settings.reducedMotion);

    // Button size
    root.classList.toggle('large-buttons', settings.buttonSize === 'large');
  }, [settings]);

  return (
    <AccessibilityContext.Provider value={{ settings, setSettings }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const AccessibilityControls: React.FC = () => {
  const { settings, setSettings } = React.useContext(AccessibilityContext);

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 z-50">
      <h2 className="text-lg font-semibold mb-4">Acessibilidade</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tamanho da Fonte
          </label>
          <div className="flex space-x-2">
            {['normal', 'large', 'x-large'].map((size) => (
              <button
                key={size}
                onClick={() => setSettings(prev => ({ ...prev, fontSize: size as 'normal' | 'large' | 'x-large' }))}
                className={`px-4 py-2 rounded-md ${
                  settings.fontSize === size
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {size === 'normal' ? 'A' : size === 'large' ? 'AA' : 'AAA'}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contraste
          </label>
          <button
            onClick={() => setSettings(prev => ({
              ...prev,
              contrast: prev.contrast === 'normal' ? 'high' : 'normal'
            }))}
            className={`w-full px-4 py-2 rounded-md ${
              settings.contrast === 'high'
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {settings.contrast === 'high' ? 'Alto Contraste' : 'Contraste Normal'}
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Animações
          </label>
          <button
            onClick={() => setSettings(prev => ({
              ...prev,
              reducedMotion: !prev.reducedMotion
            }))}
            className={`w-full px-4 py-2 rounded-md ${
              settings.reducedMotion
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {settings.reducedMotion ? 'Animações Reduzidas' : 'Animações Normais'}
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tamanho dos Botões
          </label>
          <button
            onClick={() => setSettings(prev => ({
              ...prev,
              buttonSize: prev.buttonSize === 'normal' ? 'large' : 'normal'
            }))}
            className={`w-full px-4 py-2 rounded-md ${
              settings.buttonSize === 'large'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {settings.buttonSize === 'large' ? 'Botões Grandes' : 'Botões Normais'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Create context
export const AccessibilityContext = React.createContext<{
  settings: AccessibilitySettings;
  setSettings: React.Dispatch<React.SetStateAction<AccessibilitySettings>>;
}>({
  settings: {
    fontSize: 'normal',
    contrast: 'normal',
    reducedMotion: false,
    buttonSize: 'normal'
  },
  setSettings: () => {}
});

export const AccessibilitySettings: React.FC<AccessibilitySettingsProps> = ({
  preferences,
  onUpdate,
}) => {
  const [currentPreferences, setCurrentPreferences] = useState<AccessibilityPreferences>(preferences);

  const handleChange = (key: keyof AccessibilityPreferences, value: any) => {
    const newPreferences = {
      ...currentPreferences,
      [key]: value,
    };
    setCurrentPreferences(newPreferences);
    onUpdate(newPreferences);
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Configurações de Acessibilidade
      </h2>

      <div className="space-y-6">
        {/* Tamanho da Fonte */}
        <div className="space-y-2">
          <label
            htmlFor="fontSize"
            className="block text-lg font-medium text-gray-700"
          >
            Tamanho da Fonte
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              id="fontSize"
              min={14}
              max={24}
              step={2}
              value={currentPreferences.fontSize}
              onChange={(e) => handleChange('fontSize', Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="min-w-[3ch] text-gray-600">
              {currentPreferences.fontSize}px
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Ajuste o tamanho do texto para melhor leitura
          </p>
        </div>

        {/* Alto Contraste */}
        <div className="flex items-center justify-between">
          <div>
            <label
              htmlFor="highContrast"
              className="text-lg font-medium text-gray-700"
            >
              Alto Contraste
            </label>
            <p className="text-sm text-gray-500">
              Aumenta o contraste para melhor visibilidade
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="highContrast"
              checked={currentPreferences.highContrast}
              onChange={(e) => handleChange('highContrast', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        {/* Redução de Movimento */}
        <div className="flex items-center justify-between">
          <div>
            <label
              htmlFor="reducedMotion"
              className="text-lg font-medium text-gray-700"
            >
              Reduzir Animações
            </label>
            <p className="text-sm text-gray-500">
              Minimiza animações e transições
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="reducedMotion"
              checked={currentPreferences.reducedMotion}
              onChange={(e) => handleChange('reducedMotion', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        {/* Tamanho dos Alvos de Toque */}
        <div className="space-y-2">
          <label
            htmlFor="touchTargetSize"
            className="block text-lg font-medium text-gray-700"
          >
            Tamanho dos Botões
          </label>
          <select
            id="touchTargetSize"
            value={currentPreferences.touchTargetSize}
            onChange={(e) =>
              handleChange('touchTargetSize', e.target.value as 'normal' | 'large')
            }
            className="block w-full p-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="normal">Normal (44px)</option>
            <option value="large">Grande (52px)</option>
          </select>
          <p className="text-sm text-gray-500">
            Ajusta o tamanho das áreas clicáveis
          </p>
        </div>

        {/* Espaçamento de Texto */}
        <div className="space-y-2">
          <label
            htmlFor="textSpacing"
            className="block text-lg font-medium text-gray-700"
          >
            Espaçamento de Texto
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              id="textSpacing"
              min={1}
              max={2}
              step={0.1}
              value={currentPreferences.textSpacing}
              onChange={(e) => handleChange('textSpacing', Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="min-w-[3ch] text-gray-600">
              {currentPreferences.textSpacing}x
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Ajusta o espaçamento entre letras e palavras
          </p>
        </div>

        {/* Altura da Linha */}
        <div className="space-y-2">
          <label
            htmlFor="lineHeight"
            className="block text-lg font-medium text-gray-700"
          >
            Altura da Linha
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              id="lineHeight"
              min={1.2}
              max={2}
              step={0.1}
              value={currentPreferences.lineHeight}
              onChange={(e) => handleChange('lineHeight', Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="min-w-[3ch] text-gray-600">
              {currentPreferences.lineHeight}x
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Ajusta o espaçamento entre linhas de texto
          </p>
        </div>

        {/* Botão de Teste */}
        <div className="mt-8">
          <button
            onClick={() => {
              // Aqui você pode adicionar lógica para testar as configurações
              alert('Configurações aplicadas! Verifique se a visualização está adequada.');
            }}
            className="w-full py-4 px-6 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors"
            style={{
              minHeight: currentPreferences.touchTargetSize === 'large' ? '52px' : '44px',
            }}
          >
            Testar Configurações
          </button>
        </div>

        {/* Dicas de Acessibilidade */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-medium text-blue-800 mb-2">
            Dicas de Acessibilidade
          </h3>
          <ul className="list-disc list-inside space-y-2 text-blue-700">
            <li>Use zoom do navegador para ajustar ainda mais o tamanho</li>
            <li>Ative o leitor de tela do seu dispositivo se necessário</li>
            <li>Ajuste o brilho da tela para melhor conforto visual</li>
            <li>Teste as configurações em diferentes condições de luz</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccessibilitySettings; 