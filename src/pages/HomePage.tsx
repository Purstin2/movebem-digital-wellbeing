import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserProfile } from '@/types/onboarding'; 
import { Icons } from '@/components/icons'; 
import { Edit3, ArrowRight, User, Heart, Star, Zap } from 'lucide-react'; // Adicionei Utensils e Activity que estavam faltando
import { MedicalDisclaimer } from '@/components/ui/medical-disclaimer'; 

// Simulação de dados - idealmente viriam do estado global/contexto/API
interface LastDiaryEntry {
  date: string;
  painLevel: number; // 1-10
  notes?: string;
}

interface NextStep {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

interface RecentAchievement {
  title: string;
  icon: React.ReactNode;
  date: string;
}

const HomePage = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [lastDiaryEntry, setLastDiaryEntry] = useState<LastDiaryEntry | null>(null);
  const [nextStep, setNextStep] = useState<NextStep | null>(null);
  const [recentAchievements, setRecentAchievements] = useState<RecentAchievement[]>([]);

  useEffect(() => {
    try {
      const savedProfile = sessionStorage.getItem('userProfile');
      if (savedProfile) {
        const parsedProfile = JSON.parse(savedProfile) as UserProfile;
        setUserProfile(parsedProfile);

        if (!parsedProfile.currentPainLocation) { 
          setNextStep({
            title: 'Complete seu Perfil de Dor',
            description: 'Personalize sua jornada de alívio respondendo a algumas perguntas.',
            link: '/onboarding', 
            icon: <Edit3 className="h-6 w-6 text-fenjes-purple" />,
          });
        } else {
           setNextStep({
            title: 'Experimente uma Sessão de Yoga',
            description: 'Comece com nossos exercícios gentis na cadeira.',
            link: '/chair-yoga',
            icon: <Icons.chairYoga className="h-6 w-6 text-fenjes-purple" />,
          });
        }
      } else {
         setNextStep({
            title: 'Crie seu Perfil',
            description: 'Comece sua jornada de bem-estar configurando seu perfil.',
            link: '/onboarding',
            icon: <User className="h-6 w-6 text-fenjes-purple" />,
          });
      }

      const diaryData = localStorage.getItem('diaryEntries'); 
      if (diaryData) {
        const entries = JSON.parse(diaryData);
        if (entries.length > 0) {
          const lastEntry = entries[entries.length -1];
          setLastDiaryEntry({ date: new Date(lastEntry.date).toLocaleDateString('pt-BR'), painLevel: lastEntry.generalPainLevel });
        }
      }

      const achievementsData = localStorage.getItem('claimed-rewards');
       if (achievementsData) {
        const claimed = JSON.parse(achievementsData);
        const achList = [];
        if(claimed['reward-first-diary']) achList.push({ title: 'Primeiro Diário Completo', icon: <Edit3 className="h-5 w-5"/>, date: 'Recente' });
        if(claimed['reward-first-exercise']) achList.push({ title: 'Primeiro Exercício Feito', icon: <Icons.activity className="h-5 w-5"/>, date: 'Recente' }); // Corrigido para Icons.activity
        setRecentAchievements(achList.slice(0,2)); 
      }

    } catch (error) {
      console.error("Erro ao carregar dados da HomePage:", error);
    }
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bom dia';
    if (hour < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  return (
    <AppLayout>
      <div className="container mx-auto px-4 md:px-6 py-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {getGreeting()}
              {userProfile ? `, ${userProfile.firstName}!` : '!'}
            </h1>
            <p className="text-gray-500">
              Pronta para mais um dia de bem-estar com Fenjes?
            </p>
          </div>
          {userProfile && (
            <Avatar className="h-12 w-12">
              <AvatarImage src={userProfile.avatarUrl || undefined} alt={userProfile.firstName} />
              <AvatarFallback>{userProfile.firstName.substring(0,1)}</AvatarFallback>
            </Avatar>
          )}
        </div>

        {nextStep && (
          <Card className="bg-gradient-to-br from-fenjes-purple/10 to-fenjes-purple/20 shadow-lg">
            <CardHeader className="flex flex-row items-start gap-4 space-y-0">
              <div className="p-3 bg-fenjes-purple/20 rounded-full">
                {nextStep.icon}
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl text-fenjes-purple">{nextStep.title}</CardTitle>
                <p className="text-sm text-gray-600 mt-1">{nextStep.description}</p>
              </div>
            </CardHeader>
            <CardContent>
              <Button className="w-full sm:w-auto bg-fenjes-purple hover:bg-fenjes-purple-light" onClick={() => navigate(nextStep.link)}>
                {userProfile && !userProfile.currentPainLocation ? 'Responder Agora' : userProfile ? 'Continuar Jornada' : 'Criar Perfil'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lastDiaryEntry && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Edit3 className="h-5 w-5 text-fenjes-green" /> Diário Recente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-600">
                  Última entrada: {lastDiaryEntry.date}
                </p>
                <div className="flex items-center">
                  <p className="text-sm text-gray-600 mr-2">Nível de dor: </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Heart
                        key={i}
                        className={`h-4 w-4 ${ i < Math.ceil(lastDiaryEntry.painLevel / 2) ? "text-red-500 fill-red-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate('/diary')}>
                  Ver Diário Completo
                </Button>
              </CardContent>
            </Card>
          )}

          {recentAchievements.length > 0 && (
             <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Star className="h-5 w-5 text-fenjes-yellow" /> Conquistas Recentes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentAchievements.map(ach => (
                  <div key={ach.title} className="flex items-center gap-3 text-sm">
                    <span className="p-1.5 bg-fenjes-yellow/20 text-fenjes-yellow rounded-full">{ach.icon}</span>
                    <span className="text-gray-700">{ach.title}</span>
                  </div>
                ))}
                 <Button variant="outline" size="sm" className="w-full" onClick={() => navigate('/conquistas')}>
                  Ver Todas Conquistas
                </Button>
              </CardContent>
            </Card>
          )}

          <Card className="hover:shadow-md transition-shadow">
             <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Icons.nutrition className="h-5 w-5 text-fenjes-green" /> Nutrição Curativa 
                </CardTitle>
              </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Explore receitas e guias para uma alimentação que alivia.
              </p>
              <Button variant="outline" size="sm" className="w-full" onClick={() => navigate('/nutrition')}>
                Acessar Nutrição
              </Button>
            </CardContent>
          </Card>

           <Card className="hover:shadow-md transition-shadow">
             <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Icons.chairYoga className="h-5 w-5 text-fenjes-purple" /> Yoga na Cadeira
                </CardTitle>
              </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Movimentos gentis para seu conforto e flexibilidade.
              </p>
              <Button variant="outline" size="sm" className="w-full" onClick={() => navigate('/chair-yoga')}>
                Praticar Yoga
              </Button>
            </CardContent>
          </Card>

           <Card className="bg-fenjes-blue/10">
             <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="h-5 w-5 text-fenjes-blue" /> Momento Fenjes
                </CardTitle>
              </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 italic">
                "Acredite na sua capacidade de cura. Cada pequeno passo é uma vitória."
              </p>
            </CardContent>
          </Card>
        </div>
        
        <MedicalDisclaimer />

      </div>
    </AppLayout>
  );
};

export default HomePage; 