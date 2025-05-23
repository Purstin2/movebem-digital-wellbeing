import { useEffect, useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { useToast } from '@/hooks/use-toast';
import { 
  User, Settings, Bell, Volume2, Moon, 
  CheckCircle2, Award, Clock, Calendar, 
  Minus, Plus, ShieldAlert 
} from "lucide-react";

interface UserSettings {
  darkMode: boolean;
  fontSize: number;
  soundVolume: number;
  focusMode: boolean;
  notifications: {
    dailyReminders: boolean;
    achievements: boolean;
    newContent: boolean;
  }
}

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();
  
  // Estado para configurações do usuário
  const [userSettings, setUserSettings] = useState<UserSettings>({
    darkMode: false,
    fontSize: 100,  // 100% é o tamanho padrão
    soundVolume: 75, // 75% é o volume padrão
    focusMode: false,
    notifications: {
      dailyReminders: true,
      achievements: true,
      newContent: false
    }
  });
  
  // Carregar configurações do usuário do localStorage ao iniciar
  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem('userSettings');
      if (savedSettings) {
        setUserSettings(JSON.parse(savedSettings));
      }
    } catch (error) {
      console.error("Erro ao carregar configurações:", error);
    }
  }, []);
  
  // Salvar configurações no localStorage quando mudarem
  useEffect(() => {
    try {
      localStorage.setItem('userSettings', JSON.stringify(userSettings));
    } catch (error) {
      console.error("Erro ao salvar configurações:", error);
    }
  }, [userSettings]);
  
  // Aplicar modo escuro
  useEffect(() => {
    const root = document.documentElement;
    
    if (userSettings.darkMode) {
      root.classList.add('dark');
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    } else {
      root.classList.remove('dark');
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
  }, [userSettings.darkMode]);
  
  // Aplicar tamanho da fonte
  useEffect(() => {
    document.documentElement.style.fontSize = `${userSettings.fontSize}%`;
  }, [userSettings.fontSize]);
  
  const userData = {
    name: "Marina Silva",
    email: "marina.silva@email.com",
    joined: "Maio 2025",
    plan: "Plano de 21 dias",
    progress: {
      daysCompleted: 4,
      totalMinutes: 85,
      achievements: 2
    }
  };
  
  // Manipuladores para alterar configurações
  const toggleDarkMode = () => {
    setUserSettings(prev => ({ ...prev, darkMode: !prev.darkMode }));
    toast({
      title: userSettings.darkMode ? "Modo claro ativado" : "Modo escuro ativado",
      duration: 1500
    });
  };
  
  const changeFontSize = (size: number) => {
    setUserSettings(prev => ({ ...prev, fontSize: size }));
  };
  
  const decreaseFontSize = () => {
    if (userSettings.fontSize > 80) {
      changeFontSize(userSettings.fontSize - 10);
    }
  };
  
  const increaseFontSize = () => {
    if (userSettings.fontSize < 120) {
      changeFontSize(userSettings.fontSize + 10);
    }
  };
  
  const changeVolume = (value: number[]) => {
    // Slider retorna um array, pegamos o primeiro valor
    const newVolume = value[0];
    setUserSettings(prev => ({ ...prev, soundVolume: newVolume }));
    
    // Aqui você poderia implementar a lógica para tocar um som de teste
    // Para demonstrar o volume atual
    const testSound = new Audio('/sounds/notification.mp3');
    testSound.volume = newVolume / 100;
    testSound.play().catch(e => console.log("Não foi possível tocar o som: ", e));
  };
  
  const toggleFocusMode = () => {
    setUserSettings(prev => ({ ...prev, focusMode: !prev.focusMode }));
    toast({
      title: userSettings.focusMode ? "Modo concentração desativado" : "Modo concentração ativado",
      duration: 1500
    });
  };
  
  const toggleNotification = (type: keyof typeof userSettings.notifications) => {
    setUserSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type]
      }
    }));
  };
  
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="font-quicksand text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Meu Perfil
        </h1>
        
        <Tabs defaultValue="perfil" className="mb-6">
          <TabsList className="mb-6 w-full sm:w-auto flex">
            <TabsTrigger value="perfil" className="flex-1 sm:flex-none h-12 touch-manipulation">
              <User size={16} className="mr-2" /> Perfil
            </TabsTrigger>
            <TabsTrigger value="configuracoes" className="flex-1 sm:flex-none h-12 touch-manipulation">
              <Settings size={16} className="mr-2" /> Configurações
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="perfil">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Profile Info */}
              <Card className="md:col-span-2 overflow-hidden">
                <CardHeader className="bg-fenjes-purple-light/20 border-b pb-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <Avatar className="h-20 w-20 border-4 border-white">
                      <AvatarFallback className="bg-fenjes-purple text-white text-2xl font-semibold">
                        MS
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center sm:text-left w-full">
                      <CardTitle className="text-xl font-quicksand">{userData.name}</CardTitle>
                      <CardDescription className="text-gray-600">{userData.email}</CardDescription>
                      <div className="flex items-center justify-center sm:justify-start gap-2 mt-2 text-sm text-gray-500">
                        <span>Membro desde {userData.joined}</span>
                        <span>•</span>
                        <span>{userData.plan}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-1 block">Nome</label>
                          <Input 
                            type="text" 
                            defaultValue={userData.name}
                            className="h-12 touch-manipulation" 
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                          <Input 
                            type="email" 
                            defaultValue={userData.email}
                            className="h-12 touch-manipulation" 
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">Áreas de Interesse</label>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <Checkbox id="postura" defaultChecked className="h-5 w-5 touch-manipulation" />
                              <label htmlFor="postura" className="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Postura</label>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Checkbox id="reducao-dor" defaultChecked className="h-5 w-5 touch-manipulation" />
                              <label htmlFor="reducao-dor" className="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Redução de dor</label>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Checkbox id="concentracao" className="h-5 w-5 touch-manipulation" />
                              <label htmlFor="concentracao" className="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Concentração</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2">
                        <Button 
                          variant="outline" 
                          onClick={() => setIsEditing(false)}
                          className="h-12 touch-manipulation order-2 sm:order-1"
                        >
                          Cancelar
                        </Button>
                        <Button 
                          className="bg-fenjes-purple hover:bg-fenjes-purple-dark h-12 touch-manipulation order-1 sm:order-2"
                          onClick={() => setIsEditing(false)}
                        >
                          Salvar Alterações
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Áreas de Foco</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-fenjes-purple-light/30 text-fenjes-purple-dark text-sm px-3 py-1.5 rounded-full">Postura</span>
                          <span className="bg-fenjes-purple-light/30 text-fenjes-purple-dark text-sm px-3 py-1.5 rounded-full">Redução de dor</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Objetivos</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center text-gray-600">
                            <CheckCircle2 size={18} className="text-fenjes-green mr-2 flex-shrink-0" /> 
                            <span>Melhorar postura durante trabalho sentado</span>
                          </li>
                          <li className="flex items-center text-gray-600">
                            <CheckCircle2 size={18} className="text-fenjes-green mr-2 flex-shrink-0" /> 
                            <span>Reduzir dor no pescoço e lombar</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button 
                          variant="outline"
                          onClick={() => setIsEditing(true)}
                          className="h-12 touch-manipulation"
                        >
                          Editar Perfil
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              {/* Progress Summary */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-quicksand">Meu Progresso</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-fenjes-purple-light/30 flex items-center justify-center text-fenjes-purple-dark">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Dias Completados</p>
                      <p className="font-medium text-gray-900">{userData.progress.daysCompleted} de 21</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-fenjes-green/20 flex items-center justify-center text-fenjes-green">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Tempo Total de Prática</p>
                      <p className="font-medium text-gray-900">{userData.progress.totalMinutes} minutos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Conquistas</p>
                      <p className="font-medium text-gray-900">{userData.progress.achievements} desbloqueadas</p>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-2 bg-fenjes-purple hover:bg-fenjes-purple-dark h-12 touch-manipulation"
                    variant="default"
                  >
                    Ver Progresso Completo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="configuracoes">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Notifications */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Bell size={18} />
                    <CardTitle className="text-lg font-quicksand">Notificações</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="pr-4">
                      <p className="text-gray-900 font-medium">Lembretes Diários</p>
                      <p className="text-sm text-gray-500">Receba um lembrete para seu exercício diário</p>
                    </div>
                    <Switch 
                      checked={userSettings.notifications.dailyReminders}
                      onCheckedChange={() => toggleNotification('dailyReminders')}
                      className="touch-manipulation"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="pr-4">
                      <p className="text-gray-900 font-medium">Novas Conquistas</p>
                      <p className="text-sm text-gray-500">Seja notificado quando desbloquear uma conquista</p>
                    </div>
                    <Switch 
                      checked={userSettings.notifications.achievements}
                      onCheckedChange={() => toggleNotification('achievements')}
                      className="touch-manipulation"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="pr-4">
                      <p className="text-gray-900 font-medium">Novos Materiais</p>
                      <p className="text-sm text-gray-500">Receba alertas sobre novos conteúdos</p>
                    </div>
                    <Switch 
                      checked={userSettings.notifications.newContent}
                      onCheckedChange={() => toggleNotification('newContent')}
                      className="touch-manipulation"
                    />
                  </div>
                </CardContent>
              </Card>
              
              {/* Appearance */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Moon size={18} />
                    <CardTitle className="text-lg font-quicksand">Aparência</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="pr-4">
                      <p className="text-gray-900 font-medium">Modo Escuro</p>
                      <p className="text-sm text-gray-500">Reduz o brilho da tela à noite</p>
                    </div>
                    <Switch 
                      checked={userSettings.darkMode}
                      onCheckedChange={toggleDarkMode}
                      className="touch-manipulation"
                    />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-gray-900 font-medium">Tamanho do Texto</p>
                        <p className="text-sm text-gray-500">Ajuste o tamanho do texto para melhor leitura</p>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={decreaseFontSize}
                          disabled={userSettings.fontSize <= 80}
                          className="h-8 w-8"
                        >
                          <Minus size={14} />
                        </Button>
                        <span className="flex items-center justify-center w-8">{userSettings.fontSize}%</span>
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={increaseFontSize}
                          disabled={userSettings.fontSize >= 120}
                          className="h-8 w-8"
                        >
                          <Plus size={14} />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-gray-900 font-medium">Som</p>
                      <Volume2 size={16} />
                    </div>
                    <p className="text-sm text-gray-500 mb-4">Sons de notificação e feedback</p>
                    <Slider 
                      value={[userSettings.soundVolume]}
                      max={100}
                      step={5}
                      onValueChange={changeVolume}
                      className="touch-manipulation"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>0%</span>
                      <span>50%</span>
                      <span>100%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="pr-4">
                      <p className="text-gray-900 font-medium">Modo de Concentração</p>
                      <p className="text-sm text-gray-500">Reduz distrações durante exercícios</p>
                    </div>
                    <Switch 
                      checked={userSettings.focusMode}
                      onCheckedChange={toggleFocusMode}
                      className="touch-manipulation"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
