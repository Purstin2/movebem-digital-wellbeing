import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Lock, Award, CheckCircle, Calendar, Clock, Flame, ChevronRight, 
  Gift, Download, PlayCircle, BookOpen, Coffee, Trophy
} from "lucide-react";
import { JourneyTracker } from "@/components/JourneyTracker";
import { useToast } from "@/hooks/use-toast";
import { addNotification } from "@/components/ui/notifications";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
  unlockedAt?: string;
  progress?: number;
  type: 'streak' | 'milestone' | 'special';
  reward?: {
    id: string;
    title: string;
    description: string;
    type: 'content' | 'discount' | 'access' | 'feature' | 'badge';
    icon: React.ReactNode;
    claimed: boolean;
    href?: string;
  }
}

const AchievementsPage = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [currentDay, setCurrentDay] = useState(1);
  const [showRewardModal, setShowRewardModal] = useState<{id: string, title: string} | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Carregar conquistas
  useEffect(() => {
    // Carregar dia atual do usuario
    try {
      const userProfile = JSON.parse(sessionStorage.getItem('userProfile') || '{}');
      setCurrentDay(userProfile.currentDay || 1);
    } catch (error) {
      console.error("Erro ao carregar perfil:", error);
    }
    
    // Carregar status das recompensas já reivindicadas
    const claimedRewards = JSON.parse(localStorage.getItem('claimed-rewards') || '{}');
    
    // Gerar conquistas baseadas no progresso do usuário
    const day = currentDay;
    
    const generatedAchievements: Achievement[] = [
      {
        id: 'first-day',
        title: 'Primeiro Passo',
        description: 'Completou seu primeiro dia de prática',
        icon: <Calendar className="h-6 w-6 text-fenjes-purple" />,
        unlocked: day >= 1,
        unlockedAt: day >= 1 ? 'Dia 1' : undefined,
        type: 'milestone',
        reward: {
          id: 'reward-motivation-book',
          title: 'E-book: Força Mental',
          description: 'Um guia para manter a motivação em sua jornada de cura',
          type: 'content',
          icon: <BookOpen className="h-5 w-5 text-fenjes-purple" />,
          claimed: claimedRewards['reward-motivation-book'] || false,
          href: '/ebook-forca-mental'
        }
      },
      {
        id: 'first-week',
        title: 'Uma Semana de Cura',
        description: 'Completou 7 dias do plano prático',
        icon: <Calendar className="h-6 w-6 text-fenjes-purple" />,
        unlocked: day >= 7,
        unlockedAt: day >= 7 ? 'Dia 7' : undefined,
        progress: day < 7 ? (day / 7) * 100 : 100,
        type: 'milestone',
        reward: {
          id: 'reward-meditation-audio',
          title: 'Meditação Guiada Premium',
          description: 'Acesso à meditação exclusiva para relaxamento profundo',
          type: 'content',
          icon: <PlayCircle className="h-5 w-5 text-fenjes-purple" />,
          claimed: claimedRewards['reward-meditation-audio'] || false,
          href: '/meditation/deep-relax'
        }
      },
      {
        id: 'two-weeks',
        title: 'Comprometimento Notável',
        description: 'Completou 14 dias do plano prático',
        icon: <Award className="h-6 w-6 text-fenjes-purple" />,
        unlocked: day >= 14,
        unlockedAt: day >= 14 ? 'Dia 14' : undefined,
        progress: day < 14 ? (day / 14) * 100 : 100,
        type: 'milestone',
        reward: {
          id: 'reward-yoga-advanced',
          title: 'Acesso a Exercícios Avançados',
          description: 'Desbloqueie exercícios de yoga mais avançados para continuar sua evolução',
          type: 'feature',
          icon: <Gift className="h-5 w-5 text-fenjes-purple" />,
          claimed: claimedRewards['reward-yoga-advanced'] || false
        }
      },
      {
        id: 'full-program',
        title: 'Guerreiro da Cura',
        description: 'Completou todo o plano de 21 dias',
        icon: <Trophy className="h-6 w-6 text-fenjes-gold" />,
        unlocked: day >= 21,
        unlockedAt: day >= 21 ? 'Dia 21' : undefined,
        progress: day < 21 ? (day / 21) * 100 : 100,
        type: 'milestone',
        reward: {
          id: 'reward-certificate',
          title: 'Certificado de Conclusão',
          description: 'Certificado digital personalizado da sua jornada de 21 dias',
          type: 'content',
          icon: <Download className="h-5 w-5 text-fenjes-gold" />,
          claimed: claimedRewards['reward-certificate'] || false,
          href: '/certificate'
        }
      },
      {
        id: 'streak-3',
        title: 'Sequência de Dedicação',
        description: 'Praticou 3 dias consecutivos',
        icon: <Flame className="h-6 w-6 text-fenjes-orange" />,
        unlocked: day >= 3,
        unlockedAt: day >= 3 ? 'Dia 3' : undefined,
        progress: day < 3 ? (day / 3) * 100 : 100,
        type: 'streak',
        reward: {
          id: 'reward-streak-badge',
          title: 'Emblema de Dedicação',
          description: 'Emblema especial para seu perfil',
          type: 'badge',
          icon: <Award className="h-5 w-5 text-fenjes-orange" />,
          claimed: claimedRewards['reward-streak-badge'] || false
        }
      },
      {
        id: 'five-exercises',
        title: 'Explorador de Exercícios',
        description: 'Praticou 5 exercícios diferentes',
        icon: <CheckCircle className="h-6 w-6 text-fenjes-green" />,
        unlocked: Math.min(day * 0.7, 5) >= 5,
        progress: Math.min(day * 0.7, 5) < 5 ? (Math.min(day * 0.7, 5) / 5) * 100 : 100,
        type: 'special',
        reward: {
          id: 'reward-posture-guide',
          title: 'Guia de Postura no Trabalho',
          description: 'E-book com dicas para melhorar sua postura durante o dia',
          type: 'content',
          icon: <Coffee className="h-5 w-5 text-fenjes-green" />,
          claimed: claimedRewards['reward-posture-guide'] || false,
          href: '/downloads/guia-postura.pdf'
        }
      },
      {
        id: 'time-commitment',
        title: 'Dedicação Diária',
        description: 'Acumulou 60 minutos de prática',
        icon: <Clock className="h-6 w-6 text-fenjes-blue" />,
        unlocked: Math.min(day * 7, 60) >= 60,
        progress: Math.min(day * 7, 60) < 60 ? (Math.min(day * 7, 60) / 60) * 100 : 100,
        type: 'special',
        reward: {
          id: 'reward-discount',
          title: 'Cupom de 15% de Desconto',
          description: 'Desconto especial para sua próxima compra',
          type: 'discount',
          icon: <Gift className="h-5 w-5 text-fenjes-blue" />,
          claimed: claimedRewards['reward-discount'] || false
        }
      }
    ];
    
    setAchievements(generatedAchievements);
  }, [currentDay]);
  
  // Função para reivindicar recompensa
  const claimReward = (achievementId: string, rewardId: string, rewardTitle: string) => {
    // Atualizar localStorage
    const claimedRewards = JSON.parse(localStorage.getItem('claimed-rewards') || '{}');
    claimedRewards[rewardId] = true;
    localStorage.setItem('claimed-rewards', JSON.stringify(claimedRewards));
    
    // Atualizar estado
    setAchievements(prev => 
      prev.map(achievement => 
        achievement.id === achievementId && achievement.reward
          ? { 
              ...achievement, 
              reward: { ...achievement.reward, claimed: true } 
            }
          : achievement
      )
    );
    
    // Mostrar toast de sucesso
    toast({
      title: "Recompensa reivindicada!",
      description: `${rewardTitle} foi adicionado ao seu perfil.`,
      duration: 5000,
    });
    
    // Adicionar notificação
    addNotification({
      title: "Nova Recompensa Desbloqueada",
      description: `Você acabou de reivindicar: ${rewardTitle}`,
      type: "achievement",
      action: {
        label: "Ver Detalhes",
        href: "/conquistas"
      }
    });

    // Fechar modal se estiver aberto
    setShowRewardModal(null);
  };
  
  const unlockCount = achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Conquistas de Cura
        </h1>
        
        <div className="mb-6">
          <JourneyTracker 
            onDayComplete={(day) => setCurrentDay(day)}
            className="mb-2"
          />
        </div>
        
        <div className="mb-8">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-semibold">Seu Progresso</CardTitle>
                <Badge variant="outline" className="bg-fenjes-purple/10 border-fenjes-purple/20 text-fenjes-purple">
                  {unlockCount} de {totalCount}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Progress 
                value={(unlockCount / totalCount) * 100} 
                className="h-2.5 mb-4 [&>div]:bg-gray-800 dark:[&>div]:bg-gray-600" 
              />
              <p className="text-sm text-gray-500">
                Continue sua jornada diária para desbloquear novas conquistas e recompensas exclusivas.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-xl font-bold text-gray-800 mb-4 mt-8">Suas Conquistas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map(achievement => (
            <Card 
              key={achievement.id}
              className={`overflow-hidden transition-all duration-200 ${
                achievement.unlocked 
                  ? 'border-fenjes-purple/20 hover:shadow-md' 
                  : 'opacity-70 grayscale border-gray-200'
              }`}
            >
              <div className={`p-4 ${achievement.unlocked ? 'bg-fenjes-purple/10' : 'bg-gray-100'}`}>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className="mr-3 p-2 rounded-full bg-white">
                      {achievement.icon}
                    </div>
                    <h3 className="font-semibold">{achievement.title}</h3>
                  </div>
                  {!achievement.unlocked && <Lock size={16} className="text-gray-400" />}
                </div>
              </div>
              
              <CardContent className="p-4">
                <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                
                {achievement.progress !== undefined && !achievement.unlocked && (
                  <div className="mb-3">
                    <Progress 
                      value={achievement.progress} 
                      className="h-2 bg-muted [&>div]:bg-gray-800 dark:[&>div]:bg-gray-600"
                    />
                    <p className="text-xs text-right text-gray-500 mt-1">
                      {Math.round(achievement.progress)}% concluído
                    </p>
                  </div>
                )}
                
                {achievement.unlocked && achievement.reward && (
                  <div className="mt-3">
                    <h4 className="text-xs font-medium text-fenjes-purple mb-1">RECOMPENSA:</h4>
                    <div className="flex items-center gap-2 bg-fenjes-purple/5 p-2 rounded">
                      {achievement.reward.icon}
                      <div className="flex-1">
                        <p className="text-sm font-medium">{achievement.reward.title}</p>
                        <p className="text-xs text-gray-500">{achievement.reward.description}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {achievement.unlocked && (
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs bg-fenjes-green/10 text-fenjes-green px-2 py-1 rounded-full flex items-center">
                      <CheckCircle size={12} className="mr-1" /> Desbloqueado
                    </span>
                    <span className="text-xs text-gray-500">
                      {achievement.unlockedAt}
                    </span>
                  </div>
                )}
              </CardContent>
              
              {achievement.unlocked && achievement.reward && (
                <CardFooter className="pt-0 pb-4 px-4">
                  {achievement.reward.claimed ? (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full text-xs text-fenjes-green border-fenjes-green/20 bg-fenjes-green/5"
                      disabled
                    >
                      <CheckCircle size={14} className="mr-2" /> Recompensa Reivindicada
                    </Button>
                  ) : (
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="w-full text-xs btn-gradient-primary"
                      onClick={() => claimReward(achievement.id, achievement.reward!.id, achievement.reward!.title)}
                    >
                      <Gift size={14} className="mr-2" /> Reivindicar Recompensa
                    </Button>
                  )}
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button 
            variant="ghost"
            className="text-fenjes-purple hover:text-fenjes-purple-dark hover:bg-fenjes-purple/10"
            onClick={() => navigate("/chair-yoga")}
          >
            Continuar Exercícios <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>
      </div>
      
      {/* Modal de recompensa (simplificado) */}
      {showRewardModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-4">
            <h2 className="text-xl font-bold mb-4">Parabéns!</h2>
            <p className="mb-4">Você desbloqueou: <strong>{showRewardModal.title}</strong></p>
            <div className="flex justify-end gap-2">
              <Button 
                variant="outline" 
                onClick={() => setShowRewardModal(null)}
              >
                Fechar
              </Button>
              <Button 
                className="bg-fenjes-purple hover:bg-fenjes-purple-dark"
                onClick={() => claimReward('', showRewardModal.id, showRewardModal.title)}
              >
                Reivindicar
              </Button>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default AchievementsPage; 