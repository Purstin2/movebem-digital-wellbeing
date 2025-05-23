import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Eye, Type, Zap } from 'lucide-react';

interface AccessibilityControlsProps {
  className?: string;
}

export function AccessibilityControls({ className = '' }: AccessibilityControlsProps) {
  // State for accessibility preferences
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [largerText, setLargerText] = useState<number>(1); // 1 = default, 1.25 = large, 1.5 = extra large
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  
  // Load preferences on component mount
  useEffect(() => {
    // Load high contrast preference
    const savedHighContrast = localStorage.getItem('highContrast');
    if (savedHighContrast) {
      setHighContrast(savedHighContrast === 'true');
    }
    
    // Load font size preference
    const savedFontSize = localStorage.getItem('largerText');
    if (savedFontSize) {
      setLargerText(parseFloat(savedFontSize));
    }
    
    // Load motion preference
    const savedReducedMotion = localStorage.getItem('reducedMotion');
    if (savedReducedMotion) {
      setReducedMotion(savedReducedMotion === 'true');
    }
    
    // Apply preferences immediately
    applyAccessibilityPreferences(
      savedHighContrast === 'true',
      savedFontSize ? parseFloat(savedFontSize) : 1,
      savedReducedMotion === 'true'
    );
  }, []);
  
  // Apply preferences when they change
  useEffect(() => {
    applyAccessibilityPreferences(highContrast, largerText, reducedMotion);
    
    // Save preferences to localStorage
    localStorage.setItem('highContrast', highContrast.toString());
    localStorage.setItem('largerText', largerText.toString());
    localStorage.setItem('reducedMotion', reducedMotion.toString());
  }, [highContrast, largerText, reducedMotion]);
  
  // Helper function to apply all accessibility preferences
  const applyAccessibilityPreferences = (
    contrast: boolean, 
    fontSize: number, 
    motion: boolean
  ) => {
    // Apply high contrast mode
    if (contrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
    
    // Apply font size
    document.documentElement.style.fontSize = `${fontSize * 100}%`;
    
    // Apply reduced motion
    if (motion) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
  };
  
  return (
    <div className={`p-4 rounded-lg border ${highContrast ? 'bg-black text-white border-white' : 'bg-white border-gray-200'} ${className}`}>
      <h3 className={`text-lg font-semibold mb-4 ${highContrast ? 'text-white' : 'text-fenjes-purple'}`}>
        Acessibilidade
      </h3>
      
      <div className="space-y-6">
        {/* High Contrast Mode */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Eye size={20} className={highContrast ? 'text-yellow-300' : 'text-fenjes-purple'} />
            <Label htmlFor="high-contrast" className="text-base">
              Modo Alto Contraste
            </Label>
          </div>
          <Switch 
            id="high-contrast"
            checked={highContrast}
            onCheckedChange={setHighContrast}
            className={highContrast ? 'bg-yellow-300' : ''}
          />
        </div>
        
        {/* Larger Text */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Type size={20} className={highContrast ? 'text-yellow-300' : 'text-fenjes-purple'} />
            <Label htmlFor="font-size" className="text-base">
              Tamanho da Fonte: {largerText === 1 ? 'Normal' : largerText === 1.25 ? 'Grande' : 'Extra Grande'}
            </Label>
          </div>
          <Slider
            id="font-size"
            min={1}
            max={1.5}
            step={0.25}
            value={[largerText]}
            onValueChange={(values) => setLargerText(values[0])}
            className={highContrast ? 'bg-gray-800' : ''}
          />
          <div className="flex justify-between text-xs mt-1">
            <span>Normal</span>
            <span>Grande</span>
            <span>Extra Grande</span>
          </div>
        </div>
        
        {/* Reduced Motion */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap size={20} className={highContrast ? 'text-yellow-300' : 'text-fenjes-purple'} />
            <Label htmlFor="reduced-motion" className="text-base">
              Reduzir Animações
            </Label>
          </div>
          <Switch 
            id="reduced-motion" 
            checked={reducedMotion}
            onCheckedChange={setReducedMotion}
            className={highContrast ? 'bg-yellow-300' : ''}
          />
        </div>
      </div>
      
      <p className={`mt-6 text-xs ${highContrast ? 'text-yellow-300' : 'text-gray-500'}`}>
        Estas configurações serão salvas e aplicadas em todas as páginas do Fenjes.
      </p>
    </div>
  );
} 