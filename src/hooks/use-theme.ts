import { useState, useEffect } from 'react';

type Theme = 'default' | 'high-contrast';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'default';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('theme-default', 'theme-high-contrast');
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme]);

  return { theme, setTheme };
} 