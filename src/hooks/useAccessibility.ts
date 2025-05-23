import { useState, useEffect } from 'react';
import { AccessibilityPreferences } from '@/types/personalization';

const defaultPreferences: AccessibilityPreferences = {
  fontSize: 'normal',
  contrast: 'normal',
  animations: 'normal',
  buttonSize: 'normal',
  navigationStyle: 'standard',
  colorMode: 'light'
};

export const useAccessibility = () => {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>(() => {
    const saved = localStorage.getItem('accessibility-preferences');
    return saved ? JSON.parse(saved) : defaultPreferences;
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    localStorage.setItem('accessibility-preferences', JSON.stringify(preferences));

    // Apply preferences to document
    document.documentElement.style.setProperty(
      '--font-size-base',
      preferences.fontSize === 'normal' ? '16px' : preferences.fontSize === 'large' ? '18px' : '20px'
    );

    document.documentElement.classList.toggle('high-contrast', preferences.contrast === 'high');
    document.documentElement.classList.toggle('reduced-motion', preferences.animations === 'reduced');
    document.documentElement.classList.toggle('no-motion', preferences.animations === 'none');
    document.documentElement.classList.toggle('large-buttons', preferences.buttonSize === 'large');
    document.documentElement.classList.toggle('simplified-nav', preferences.navigationStyle === 'simplified');
    document.documentElement.setAttribute('data-theme', preferences.colorMode);
  }, [preferences]);

  const updatePreference = <K extends keyof AccessibilityPreferences>(
    key: K,
    value: AccessibilityPreferences[K]
  ) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  return {
    preferences,
    updatePreference,
    isMobile
  };
};

export default useAccessibility; 
 