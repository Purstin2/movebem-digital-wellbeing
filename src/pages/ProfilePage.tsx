
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
      <div className="max-w-7xl mx-auto">
        <h1 className="font-quicksand text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Meu Perfil
        </h1>
        
        <Tabs defaultValue="perfil" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="perfil">
              <User size={16} className="mr-2" /> Perfil
            </TabsTrigger>
            <TabsTrigger value="configuracoes">
              <Settings size={16} className="mr-2" /> Configurações
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="perfil">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Profile Info */}
              <Card className="md:col-span-2 overflow-hidden">
                <CardHeader className="bg-movebem-purple-light/20 border-b pb-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <Avatar className="h-20 w-20 border-4 border-white">
                      <AvatarFallback className="bg-movebem-purple text-white text-2xl font-semibold">
                        MS
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center sm:text-left">
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
                <CardContent className="p-6">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-1 block">Nome</label>
                          <Input 
                            type="text" 
                            defaultValue={userData.name} 
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                          <Input 
                            type="email" 
                            defaultValue={userData.email} 
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-1 block">Áreas de Interesse</label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="postura" defaultChecked />
                              <label htmlFor="postura" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Postura</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="reducao-dor" defaultChecked />
                              <label htmlFor="reducao-dor" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Redução de dor</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="concentracao" />
                              <label htmlFor="concentracao" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Concentração</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => setIsEditing(false)}>
                          Cancelar
                        </Button>
                        <Button 
                          className="bg-movebem-purple hover:bg-movebem-purple-dark"
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
                          <span className="bg-movebem-purple-light/30 text-movebem-purple-dark text-sm px-3 py-1 rounded-full">Postura</span>
                          <span className="bg-movebem-purple-light/30 text-movebem-purple-dark text-sm px-3 py-1 rounded-full">Redução de dor</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Objetivos</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center text-gray-600">
                            <CheckCircle2 size={18} className="text-movebem-green mr-2" /> Melhorar postura durante trabalho sentado
                          </li>
                          <li className="flex items-center text-gray-600">
                            <CheckCircle2 size={18} className="text-movebem-green mr-2" /> Reduzir dor no pescoço e lombar
                          </li>
                        </ul>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button 
                          variant="outline"
                          onClick={() => setIsEditing(true)}
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
                <CardHeader>
                  <CardTitle className="text-lg font-quicksand">Meu Progresso</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-movebem-purple-light/30 flex items-center justify-center text-movebem-purple-dark">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Dias Completados</p>
                      <p className="font-medium text-gray-900">{userData.progress.daysCompleted} de 21</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-movebem-green/20 flex items-center justify-center text-movebem-green">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Tempo Total de Prática</p>
                      <p className="font-medium text-gray-900">{userData.progress.totalMinutes} minutos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Conquistas</p>
                      <p className="font-medium text-gray-900">{userData.progress.achievements} desbloqueadas</p>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-2 bg-movebem-purple hover:bg-movebem-purple-dark"
                    variant="default"
                  >
                    Ver Progresso Completo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="configuracoes">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Notifications */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Bell size={18} />
                    <CardTitle className="text-lg font-quicksand">Notificações</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900 font-medium">Lembretes Diários</p>
                      <p className="text-sm text-gray-500">Receba um lembrete para seu exercício diário</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900 font-medium">Novas Conquistas</p>
                      <p className="text-sm text-gray-500">Seja notificado quando desbloquear uma conquista</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900 font-medium">Novos Materiais</p>
                      <p className="text-sm text-gray-500">Receba alertas sobre novos conteúdos</p>
                    </div>
                    <Switch />
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
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900 font-medium">Modo Escuro</p>
                      <p className="text-sm text-gray-500">Alterar para tema escuro</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900 font-medium">Tamanho da Fonte</p>
                      <p className="text-sm text-gray-500">Ajustar o tamanho do texto</p>
                    </div>
                    <select className="border rounded-md px-2 py-1 text-sm">
                      <option>Normal</option>
                      <option>Grande</option>
                      <option>Muito Grande</option>
                    </select>
                  </div>
                </CardContent>
              </Card>
              
              {/* Sound */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Volume2 size={18} />
                    <CardTitle className="text-lg font-quicksand">Som</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900 font-medium">Sons de Exercícios</p>
                      <p className="text-sm text-gray-500">Sons de contagem e transição</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900 font-medium">Música de Fundo</p>
                      <p className="text-sm text-gray-500">Música ambiente durante os exercícios</p>
                    </div>
                    <Switch />
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
                  <div>
                    <p className="text-gray-900 font-medium">Alterar Senha</p>
                    <div className="mt-2 space-y-2">
                      <Input type="password" placeholder="Senha atual" />
                      <Input type="password" placeholder="Nova senha" />
                      <Input type="password" placeholder="Confirmar nova senha" />
                    </div>
                    <Button className="mt-3 w-full bg-movebem-purple hover:bg-movebem-purple-dark">
                      Atualizar Senha
                    </Button>
                  </div>
                  
                  <div className="pt-2">
                    <Button variant="outline" className="w-full text-red-500 border-red-200 hover:bg-red-50">
                      Encerrar Assinatura
                    </Button>
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
