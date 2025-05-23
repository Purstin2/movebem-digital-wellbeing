import { useState, useEffect } from 'react';
import { ChairYogaProfile } from '@/types/chair-yoga';

type AccessibilitySettings = ChairYogaProfile['personalizedSettings'];

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontScale: 1,
  contrast: 'normal',
  animationSpeed: 'normal',
  soundEnabled: true,
  hapticFeedback: true,
  textSize: 'normal'
};

export function useAccessibility() {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    // Try to load settings from localStorage
    const saved = localStorage.getItem('accessibility_settings');
    return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
  });

  // Apply settings whenever they change
  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('accessibility_settings', JSON.stringify(settings));

    // Apply font scale
    document.documentElement.style.fontSize = `${settings.fontScale * 100}%`;

    // Apply contrast mode
    if (settings.contrast === 'high') {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply animation speed
    document.documentElement.setAttribute('data-animation', settings.animationSpeed);

    // Apply text size
    document.documentElement.setAttribute('data-text-size', settings.textSize);

  }, [settings]);

  // Function to update individual settings
  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Function to update multiple settings at once
  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    setSettings(prev => ({
      ...prev,
      ...newSettings
    }));
  };

  // Function to reset settings to defaults
  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  // Function to check if device supports haptic feedback
  const supportsHaptics = () => {
    return 'vibrate' in navigator;
  };

  // Function to trigger haptic feedback if enabled
  const triggerHaptic = (pattern: number | number[] = 200) => {
    if (settings.hapticFeedback && supportsHaptics()) {
      navigator.vibrate(pattern);
    }
  };

  // Function to play sound if enabled
  const playSound = async (soundUrl: string) => {
    if (settings.soundEnabled) {
      try {
        const audio = new Audio(soundUrl);
        await audio.play();
      } catch (error) {
        console.error('Error playing sound:', error);
      }
    }
  };

  return {
    settings,
    updateSetting,
    updateSettings,
    resetSettings,
    triggerHaptic,
    playSound,
    supportsHaptics: supportsHaptics()
  };
} 