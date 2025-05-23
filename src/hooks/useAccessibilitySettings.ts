import { useState, useEffect } from 'react';

export interface AccessibilitySettings {
  fontSize: 'normal' | 'large' | 'extra-large';
  contrast: 'normal' | 'high';
  reduceMotion: boolean;
  touchTargets: 'normal' | 'large';
  hapticFeedback: boolean;
  screenReader: boolean;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 'normal',
  contrast: 'normal',
  reduceMotion: false,
  touchTargets: 'normal',
  hapticFeedback: true,
  screenReader: false
};

export const useAccessibilitySettings = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    if (typeof window === 'undefined') return defaultSettings;
    
    const savedSettings = localStorage.getItem('accessibilitySettings');
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
  });

  useEffect(() => {
    // Salvar configurações no localStorage
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));

    // Aplicar classes CSS globais
    const root = document.documentElement;
    
    // Tamanho da fonte
    root.style.setProperty('--base-font-size', getFontSize(settings.fontSize));
    
    // Contraste
    if (settings.contrast === 'high') {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Redução de movimento
    if (settings.reduceMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }

    // Tamanho dos alvos de toque
    if (settings.touchTargets === 'large') {
      root.classList.add('large-touch-targets');
    } else {
      root.classList.remove('large-touch-targets');
    }

    // Feedback tátil
    if (settings.hapticFeedback && 'vibrate' in navigator) {
      root.classList.add('haptic-feedback');
    } else {
      root.classList.remove('haptic-feedback');
    }

    // Leitor de tela
    if (settings.screenReader) {
      root.setAttribute('role', 'application');
      root.setAttribute('aria-label', 'FENJES - Yoga na Cadeira');
    } else {
      root.removeAttribute('role');
      root.removeAttribute('aria-label');
    }
  }, [settings]);

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    setSettings(prev => ({
      ...prev,
      ...newSettings
    }));
  };

  const getFontSize = (size: AccessibilitySettings['fontSize']): string => {
    switch (size) {
      case 'large':
        return '20px';
      case 'extra-large':
        return '24px';
      default:
        return '16px';
    }
  };

  const triggerHapticFeedback = () => {
    if (settings.hapticFeedback && 'vibrate' in navigator) {
      navigator.vibrate(50); // 50ms de vibração
    }
  };

  const announceToScreenReader = (message: string) => {
    if (settings.screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('role', 'alert');
      announcement.setAttribute('aria-live', 'polite');
      announcement.style.position = 'absolute';
      announcement.style.left = '-9999px';
      announcement.textContent = message;
      
      document.body.appendChild(announcement);
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  };

  return {
    settings,
    updateSettings,
    triggerHapticFeedback,
    announceToScreenReader
  };
};

export default useAccessibilitySettings; 