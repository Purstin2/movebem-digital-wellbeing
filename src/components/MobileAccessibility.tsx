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
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Acessibilidade</h2>

        {/* Tamanho da Fonte */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Tamanho da Fonte</label>
          <select
            value={preferences.fontSize}
            onChange={(e) => updatePreference('fontSize', e.target.value)}
            className="w-full p-2 border rounded min-h-[44px]"
          >
            <option value="normal">Normal</option>
            <option value="large">Grande</option>
            <option value="extra_large">Extra Grande</option>
          </select>
        </div>

        {/* Contraste */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Contraste</label>
          <select
            value={preferences.contrast}
            onChange={(e) => updatePreference('contrast', e.target.value)}
            className="w-full p-2 border rounded min-h-[44px]"
          >
            <option value="normal">Normal</option>
            <option value="high">Alto</option>
            <option value="maximum">Máximo</option>
          </select>
        </div>

        {/* Modo de Cor */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Modo de Cor</label>
          <select
            value={preferences.colorMode}
            onChange={(e) => updatePreference('colorMode', e.target.value)}
            className="w-full p-2 border rounded min-h-[44px]"
          >
            <option value="light">Claro</option>
            <option value="dark">Escuro</option>
            <option value="high_contrast">Alto Contraste</option>
          </select>
        </div>

        {/* Animações */}
        <div>
          <label className="block font-medium mb-2">Animações</label>
          <select
            value={preferences.animations}
            onChange={(e) => updatePreference('animations', e.target.value)}
            className="w-full p-2 border rounded min-h-[44px]"
          >
            <option value="normal">Normal</option>
            <option value="reduced">Reduzidas</option>
            <option value="none">Desativadas</option>
          </select>
        </div>
      </div>

      <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="font-medium text-blue-800 mb-2">Dicas</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Use dois dedos para zoom</li>
          <li>• Gire o dispositivo se necessário</li>
          <li>• Ative o leitor de tela do dispositivo</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileAccessibility; 