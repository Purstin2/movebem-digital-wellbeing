import React, { useEffect, useState } from 'react';
import { AccessibilityPreferences } from '@/types/personalization';

interface MobileAccessibilityProps {
  preferences: AccessibilityPreferences;
  onPreferencesChange: (newPreferences: AccessibilityPreferences) => void;
}

const MobileAccessibility: React.FC<MobileAccessibilityProps> = ({
  preferences,
  onPreferencesChange
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;

  const updatePreference = (key: keyof AccessibilityPreferences, value: any) => {
    onPreferencesChange({ ...preferences, [key]: value });
  };

  return (
    <div className="p-4 space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-6">Acessibilidade Mobile</h2>

        {/* Tamanho da Fonte */}
        <div className="mb-6">
          <label className="block text-base font-medium mb-2">
            Tamanho da Fonte
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: 'normal', label: 'Normal' },
              { value: 'large', label: 'Grande' },
              { value: 'extra_large', label: 'Extra' }
            ].map(({ value, label }) => (
              <button
                key={value}
                onClick={() => updatePreference('fontSize', value)}
                className={`
                  p-4 rounded-lg text-center border-2 min-h-[44px]
                  ${preferences.fontSize === value
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200'
                  }
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Contraste */}
        <div className="mb-6">
          <label className="block text-base font-medium mb-2">
            Contraste
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { value: 'normal', label: 'Normal' },
              { value: 'high', label: 'Alto' }
            ].map(({ value, label }) => (
              <button
                key={value}
                onClick={() => updatePreference('contrast', value)}
                className={`
                  p-4 rounded-lg text-center border-2 min-h-[44px]
                  ${preferences.contrast === value
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200'
                  }
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Animações */}
        <div className="mb-6">
          <label className="block text-base font-medium mb-2">
            Animações
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { value: 'normal', label: 'Normal' },
              { value: 'reduced', label: 'Reduzidas' }
            ].map(({ value, label }) => (
              <button
                key={value}
                onClick={() => updatePreference('animations', value)}
                className={`
                  p-4 rounded-lg text-center border-2 min-h-[44px]
                  ${preferences.animations === value
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200'
                  }
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Modo de Cor */}
        <div>
          <label className="block text-base font-medium mb-2">
            Modo de Cor
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { value: 'light', label: 'Claro' },
              { value: 'dark', label: 'Escuro' }
            ].map(({ value, label }) => (
              <button
                key={value}
                onClick={() => updatePreference('colorMode', value)}
                className={`
                  p-4 rounded-lg text-center border-2 min-h-[44px]
                  ${preferences.colorMode === value
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200'
                  }
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="font-medium text-blue-800 mb-2">Dicas de Acessibilidade</h3>
        <ul className="space-y-2 text-sm text-blue-700">
          <li>• Use dois dedos para zoom</li>
          <li>• Gire o dispositivo se necessário</li>
          <li>• Ative o leitor de tela do dispositivo</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileAccessibility; 