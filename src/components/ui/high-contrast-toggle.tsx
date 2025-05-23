import React from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

export function HighContrastToggle() {
  const { theme, setTheme } = useTheme();
  const isHighContrast = theme === 'high-contrast';

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(isHighContrast ? 'default' : 'high-contrast')}
      className="w-9 h-9 px-0"
      aria-label={isHighContrast ? "Desativar Alto Contraste" : "Ativar Alto Contraste"}
    >
      {isHighContrast ? (
        <Sun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5" aria-hidden="true" />
      )}
    </Button>
  );
} 