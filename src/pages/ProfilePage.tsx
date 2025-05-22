import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { 
  User, Settings, Bell, Volume2, Moon, 
  CheckCircle2, Award, Clock, Calendar 
} from "lucide-react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  
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
                <CardHeader className="bg-movebem-purple-light/20 border-b pb-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <Avatar className="h-20 w-20 border-4 border-white">
                      <AvatarFallback className="bg-movebem-purple text-white text-2xl font-semibold">
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
                          className="bg-movebem-purple hover:bg-movebem-purple-dark h-12 touch-manipulation order-1 sm:order-2"
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
                          <span className="bg-movebem-purple-light/30 text-movebem-purple-dark text-sm px-3 py-1.5 rounded-full">Postura</span>
                          <span className="bg-movebem-purple-light/30 text-movebem-purple-dark text-sm px-3 py-1.5 rounded-full">Redução de dor</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Objetivos</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center text-gray-600">
                            <CheckCircle2 size={18} className="text-movebem-green mr-2 flex-shrink-0" /> 
                            <span>Melhorar postura durante trabalho sentado</span>
                          </li>
                          <li className="flex items-center text-gray-600">
                            <CheckCircle2 size={18} className="text-movebem-green mr-2 flex-shrink-0" /> 
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
                    <div className="h-12 w-12 rounded-full bg-movebem-purple-light/30 flex items-center justify-center text-movebem-purple-dark">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Dias Completados</p>
                      <p className="font-medium text-gray-900">{userData.progress.daysCompleted} de 21</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-movebem-green/20 flex items-center justify-center text-movebem-green">
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
                    className="w-full mt-2 bg-movebem-purple hover:bg-movebem-purple-dark h-12 touch-manipulation"
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
                    <Switch defaultChecked className="touch-manipulation" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="pr-4">
                      <p className="text-gray-900 font-medium">Novas Conquistas</p>
                      <p className="text-sm text-gray-500">Seja notificado quando desbloquear uma conquista</p>
                    </div>
                    <Switch defaultChecked className="touch-manipulation" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="pr-4">
                      <p className="text-gray-900 font-medium">Novos Materiais</p>
                      <p className="text-sm text-gray-500">Receba alertas sobre novos conteúdos</p>
                    </div>
                    <Switch className="touch-manipulation" />
                  </div>
                </CardContent>
              </Card>
              
              {/* Appearance */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Settings size={18} />
                    <CardTitle className="text-lg font-quicksand">Aparência</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="pr-4">
                      <p className="text-gray-900 font-medium">Modo Escuro</p>
                      <p className="text-sm text-gray-500">Reduz o brilho da tela à noite</p>
                    </div>
                    <Switch className="touch-manipulation" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="pr-4">
                      <p className="text-gray-900 font-medium">Tamanho do Texto</p>
                      <p className="text-sm text-gray-500">Ajuste o tamanho do texto para melhor leitura</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="h-9 w-9 touch-manipulation">A-</Button>
                      <Button variant="outline" size="sm" className="h-9 w-9 touch-manipulation">A+</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="pr-4">
                      <p className="text-gray-900 font-medium">Som</p>
                      <p className="text-sm text-gray-500">Sons de notificação e feedback</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Volume2 size={18} className="text-gray-500" />
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        defaultValue="80" 
                        className="w-24 touch-manipulation"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="pr-4">
                      <p className="text-gray-900 font-medium">Modo de Concentração</p>
                      <p className="text-sm text-gray-500">Reduz distrações durante exercícios</p>
                    </div>
                    <Switch className="touch-manipulation" />
                  </div>
                </CardContent>
              </Card>
              
              {/* Account */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <User size={18} />
                    <CardTitle className="text-lg font-quicksand">Conta</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start h-12 touch-manipulation"
                  >
                    Alterar Senha
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start h-12 touch-manipulation"
                  >
                    Gerenciar Assinatura
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600 h-12 touch-manipulation"
                  >
                    Excluir Conta
                  </Button>
                </CardContent>
              </Card>
              
              {/* Privacy */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-quicksand">Privacidade</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="pr-4">
                      <p className="text-gray-900 font-medium">Compartilhar Dados de Progresso</p>
                      <p className="text-sm text-gray-500">Ajuda a melhorar o aplicativo</p>
                    </div>
                    <Switch defaultChecked className="touch-manipulation" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="pr-4">
                      <p className="text-gray-900 font-medium">Receber Emails</p>
                      <p className="text-sm text-gray-500">Newsletters e dicas personalizadas</p>
                    </div>
                    <Switch defaultChecked className="touch-manipulation" />
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start h-12 touch-manipulation"
                  >
                    Ver Política de Privacidade
                  </Button>
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
