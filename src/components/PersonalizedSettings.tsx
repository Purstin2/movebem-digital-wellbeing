import React from 'react';
import { ChairYogaProfile } from '@/types/chair-yoga';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { 
  Eye, 
  Type, 
  Volume2, 
  Vibrate,
  Zap,
  Sun,
  Moon
} from 'lucide-react';

interface PersonalizedSettingsProps {
  profile: ChairYogaProfile;
  onUpdateSettings: (settings: ChairYogaProfile['personalizedSettings']) => void;
}

export function PersonalizedSettings({ profile, onUpdateSettings }: PersonalizedSettingsProps) {
  const [settings, setSettings] = React.useState(profile.personalizedSettings);
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  const handleSettingChange = (key: keyof ChairYogaProfile['personalizedSettings'], value: any) => {
    const newSettings = {
      ...settings,
      [key]: value
    };
    setSettings(newSettings);
    onUpdateSettings(newSettings);
  };

  return (
    <div className="space-y-6 p-4" role="region" aria-label="Configurações Personalizadas">
      <h2 className="text-2xl font-semibold mb-6">Configurações de Acessibilidade</h2>

      {/* Text Size Settings */}
      <Card className="p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Type className="h-5 w-5" />
              <div>
                <h3 className="font-medium">Tamanho do Texto</h3>
                <p className="text-sm text-gray-500">Ajuste o tamanho do texto para melhor leitura</p>
              </div>
            </div>
            <select
              value={settings.textSize}
              onChange={(e) => handleSettingChange('textSize', e.target.value)}
              className="rounded-md border p-2"
              aria-label="Selecione o tamanho do texto"
            >
              <option value="normal">Normal</option>
              <option value="large">Grande</option>
              <option value="extra-large">Extra Grande</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Escala da Fonte</label>
            <Slider
              value={[settings.fontScale]}
              min={1}
              max={1.5}
              step={0.1}
              onValueChange={([value]) => handleSettingChange('fontScale', value)}
              aria-label="Ajustar escala da fonte"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>100%</span>
              <span>150%</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Visual Settings */}
      <Card className="p-6">
        <div className="space-y-4">
          <h3 className="font-medium flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Configurações Visuais
          </h3>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Alto Contraste</p>
              <p className="text-sm text-gray-500">Melhora a legibilidade</p>
            </div>
            <Switch
              checked={settings.contrast === 'high'}
              onCheckedChange={(checked) => 
                handleSettingChange('contrast', checked ? 'high' : 'normal')
              }
              aria-label="Ativar alto contraste"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Reduzir Animações</p>
              <p className="text-sm text-gray-500">Diminui movimentos na tela</p>
            </div>
            <Switch
              checked={settings.animationSpeed === 'reduced'}
              onCheckedChange={(checked) => 
                handleSettingChange('animationSpeed', checked ? 'reduced' : 'normal')
              }
              aria-label="Reduzir animações"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Tema</p>
              <p className="text-sm text-gray-500">Escolha entre claro ou escuro</p>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </Card>

      {/* Feedback Settings */}
      <Card className="p-6">
        <div className="space-y-4">
          <h3 className="font-medium flex items-center gap-2">
            <Volume2 className="h-5 w-5" />
            Configurações de Feedback
          </h3>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Sons</p>
              <p className="text-sm text-gray-500">Feedback sonoro durante exercícios</p>
            </div>
            <Switch
              checked={settings.soundEnabled}
              onCheckedChange={(checked) => 
                handleSettingChange('soundEnabled', checked)
              }
              aria-label="Ativar sons"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Vibração</p>
              <p className="text-sm text-gray-500">Feedback tátil em dispositivos móveis</p>
            </div>
            <Switch
              checked={settings.hapticFeedback}
              onCheckedChange={(checked) => 
                handleSettingChange('hapticFeedback', checked)
              }
              aria-label="Ativar vibração"
            />
          </div>
        </div>
      </Card>

      {/* Performance Settings */}
      <Card className="p-6">
        <div className="space-y-4">
          <h3 className="font-medium flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Desempenho
          </h3>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Modo Leve</p>
              <p className="text-sm text-gray-500">Otimiza para dispositivos mais lentos</p>
            </div>
            <Switch
              checked={settings.animationSpeed === 'none'}
              onCheckedChange={(checked) => 
                handleSettingChange('animationSpeed', checked ? 'none' : 'normal')
              }
              aria-label="Ativar modo leve"
            />
          </div>
        </div>
      </Card>

      <p className="text-sm text-gray-500 mt-6">
        Estas configurações são salvas automaticamente e aplicadas em todas as páginas.
        Você pode alterá-las a qualquer momento.
      </p>
    </div>
  );
} 