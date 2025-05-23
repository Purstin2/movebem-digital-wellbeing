import React, { useState, useEffect } from 'react';
import { AccessibilityPreferences } from '@/types/personalization';

interface AccessibilityControlsProps {
  onPreferencesChange: (preferences: AccessibilityPreferences) => void;
  initialPreferences?: AccessibilityPreferences;
  className?: string;
}

const defaultPreferences: AccessibilityPreferences = {
  fontSize: 16,
  highContrast: false,
  reducedMotion: false,
  touchTargetSize: 'normal',
  textSpacing: 1.5,
  lineHeight: 1.5,
};

export const AccessibilityControls: React.FC<AccessibilityControlsProps> = ({
  onPreferencesChange,
  initialPreferences = defaultPreferences,
  className = '',
}) => {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>(initialPreferences);

  useEffect(() => {
    // Apply preferences to document
    document.documentElement.style.setProperty('--base-font-size', `${preferences.fontSize}px`);
    document.documentElement.style.setProperty('--text-spacing', `${preferences.textSpacing}`);
    document.documentElement.style.setProperty('--line-height', `${preferences.lineHeight}`);
    
    document.documentElement.setAttribute(
      'data-theme',
      preferences.highContrast ? 'high-contrast' : 'default'
    );
    
    document.documentElement.setAttribute(
      'data-touch-target',
      preferences.touchTargetSize
    );

    if (preferences.reducedMotion) {
      document.documentElement.setAttribute('data-reduced-motion', 'true');
    } else {
      document.documentElement.removeAttribute('data-reduced-motion');
    }
  }, [preferences]);

  const handlePreferenceChange = (key: keyof AccessibilityPreferences, value: any) => {
    const newPreferences = { ...preferences, [key]: value };
    setPreferences(newPreferences);
    onPreferencesChange(newPreferences);
  };

  return (
    <div className={`p-4 bg-white rounded-lg shadow ${className}`}>
      <h2 className="text-xl font-semibold mb-4">Configurações de Acessibilidade</h2>
      
      <div className="space-y-6">
        {/* Font Size Control */}
        <div>
          <label htmlFor="fontSize" className="block text-sm font-medium mb-2">
            Tamanho da Fonte: {preferences.fontSize}px
          </label>
          <input
            type="range"
            id="fontSize"
            min="16"
            max="24"
            step="2"
            value={preferences.fontSize}
            onChange={(e) => handlePreferenceChange('fontSize', Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* High Contrast Toggle */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="highContrast"
            checked={preferences.highContrast}
            onChange={(e) => handlePreferenceChange('highContrast', e.target.checked)}
            className="h-4 w-4 text-blue-600"
          />
          <label htmlFor="highContrast" className="ml-2 block text-sm">
            Alto Contraste
          </label>
        </div>

        {/* Reduced Motion Toggle */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="reducedMotion"
            checked={preferences.reducedMotion}
            onChange={(e) => handlePreferenceChange('reducedMotion', e.target.checked)}
            className="h-4 w-4 text-blue-600"
          />
          <label htmlFor="reducedMotion" className="ml-2 block text-sm">
            Reduzir Animações
          </label>
        </div>

        {/* Touch Target Size */}
        <div>
          <label htmlFor="touchTargetSize" className="block text-sm font-medium mb-2">
            Tamanho dos Botões
          </label>
          <select
            id="touchTargetSize"
            value={preferences.touchTargetSize}
            onChange={(e) => handlePreferenceChange('touchTargetSize', e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="normal">Normal</option>
            <option value="large">Grande</option>
          </select>
        </div>

        {/* Text Spacing */}
        <div>
          <label htmlFor="textSpacing" className="block text-sm font-medium mb-2">
            Espaçamento do Texto: {preferences.textSpacing}
          </label>
          <input
            type="range"
            id="textSpacing"
            min="1"
            max="2"
            step="0.1"
            value={preferences.textSpacing}
            onChange={(e) => handlePreferenceChange('textSpacing', Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Line Height */}
        <div>
          <label htmlFor="lineHeight" className="block text-sm font-medium mb-2">
            Altura da Linha: {preferences.lineHeight}
          </label>
          <input
            type="range"
            id="lineHeight"
            min="1"
            max="2"
            step="0.1"
            value={preferences.lineHeight}
            onChange={(e) => handlePreferenceChange('lineHeight', Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={() => {
          setPreferences(defaultPreferences);
          onPreferencesChange(defaultPreferences);
        }}
        className="mt-6 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        Restaurar Padrões
      </button>
    </div>
  );
};

export default AccessibilityControls; 