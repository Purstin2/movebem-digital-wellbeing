import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserProfile } from '@/types/onboarding';
import { Icons } from '@/components/icons';
import { ArrowRight, Edit3, User, Zap, Heart, Star, Wind, Leaf, Brain } from 'lucide-react';
import { MedicalDisclaimer } from '@/components/ui/medical-disclaimer';

interface NextStep {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  ctaText: string;
}

const HomePage = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [nextStep, setNextStep] = useState<NextStep | null>(null);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Bom dia');
    else if (hour < 18) setGreeting('Boa tarde');
    else setGreeting('Boa noite');

    try {
      const savedProfile = sessionStorage.getItem('userProfile');
      if (savedProfile) {
        const parsedProfile = JSON.parse(savedProfile) as UserProfile;
        setUserProfile(parsedProfile);

        if (!parsedProfile.primaryPain) {
          setNextStep({
            title: 'Complete Seu Perfil de Dor',
            description: 'Personalize sua jornada de alívio respondendo a algumas perguntas cruciais.',
            link: '/onboarding',
            icon: <Edit3 className="h-8 w-8 text-white" />,
            ctaText: 'Personalizar Agora',
          });
        } else {
          setNextStep({
            title: 'Continue Sua Jornada de Yoga',
            description: 'Explore uma nova sessão de yoga na cadeira, adaptada para você.',
            link: '/chair-yoga',
            icon: <Icons.chairYoga className="h-8 w-8 text-white" />,
            ctaText: 'Praticar Yoga',
          });
        }
      } else {
        setNextStep({
          title: 'Crie Seu Perfil Fenjes',
          description: 'Comece sua jornada de bem-estar configurando seu perfil personalizado.',
          link: '/onboarding',
          icon: <User className="h-8 w-8 text-white" />,
          ctaText: 'Criar Perfil',
        });
      }
    } catch (error) {
      console.error("Erro ao carregar dados da HomePage:", error);
      setNextStep({
        title: 'Comece Sua Jornada',
        description: 'Explore os recursos do Fenjes para uma vida com mais bem-estar.',
        link: '/onboarding',
        icon: <Zap className="h-8 w-8 text-white" />,
        ctaText: 'Iniciar',
      });
    }
  }, []);

  const featureCards = [
    {
      title: "Yoga Gentil e Adaptado",
      description: "Sessões de yoga na cadeira seguras e eficazes, projetadas para todos os níveis, com foco no alívio da dor e na melhoria da mobilidade.",
      icon: <Icons.chairYoga className="h-10 w-10 text-fenjes-purple" />,
      link: "/chair-yoga",
      cta: "Explorar Exercícios",
      bgColor: "bg-fenjes-purple/10",
      textColor: "text-fenjes-purple",
    },
    {
      title: "Nutrição que Cura",
      description: "Descubra receitas anti-inflamatórias e planos nutricionais que complementam sua jornada de bem-estar e promovem a recuperação.",
      icon: <Icons.nutrition className="h-10 w-10 text-fenjes-green" />,
      link: "/nutrition",
      cta: "Ver Receitas",
      bgColor: "bg-fenjes-green/10",
      textColor: "text-fenjes-green",
    },
    {
      title: "Diário de Bem-Estar",
      description: "Monitore seu progresso, registre suas sensações e reflita sobre sua jornada. Uma ferramenta poderosa para o autoconhecimento.",
      icon: <Icons.diary className="h-10 w-10 text-fenjes-blue" />,
      link: "/diary",
      cta: "Acessar Diário",
      bgColor: "bg-fenjes-blue/10",
      textColor: "text-fenjes-blue",
    },
  ];

  return (
    <AppLayout showSidebar={true} showNavbar={true}>
      <div className="min-h-screen bg-gradient-to-br from-fenjes-white to-fenjes-blue/10">
        {/* Hero Section */}
        <section className="py-16 md:py-24 text-center bg-fenjes-purple text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-fenjes-purple via-fenjes-purple-dark to-fenjes-blue opacity-70"></div>
          <div className="absolute inset-0 pattern-cross pattern-white pattern-bg-transparent pattern-opacity-10 pattern-size-12"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            {userProfile && (
              <Avatar className="h-20 w-20 mx-auto mb-6 border-4 border-white shadow-lg">
                <AvatarImage src={undefined} alt={userProfile.firstName || 'Usuário'} />
                <AvatarFallback className="text-2xl bg-fenjes-blue-light text-fenjes-purple-dark">
                  {userProfile.firstName ? userProfile.firstName.substring(0,1).toUpperCase() : 'U'}
                </AvatarFallback>
              </Avatar>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {greeting}{userProfile ? `, ${userProfile.firstName}` : ''}!
            </h1>
            <p className="text-lg md:text-xl text-fenjes-blue/30 mb-8 max-w-2xl mx-auto">
              Seu refúgio diário para alívio, movimento e nutrição. Redescubra o bem-estar com Fenjes.
            </p>
            {nextStep && (
              <Button
                size="lg"
                className="bg-white text-fenjes-purple hover:bg-gray-100 shadow-lg transform hover:scale-105 transition-transform duration-300"
                onClick={() => navigate(nextStep.link)}
              >
                {nextStep.ctaText} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>
        </section>

        {/* Next Step / Personalized Action Section */}
        {nextStep && !userProfile?.primaryPain && (
          <section className="py-12 bg-fenjes-blue-light">
            <div className="container mx-auto px-6">
              <Card className="bg-white shadow-xl border-2 border-fenjes-purple transform hover:scale-[1.02] transition-transform duration-300">
                <CardHeader className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                  <div className="p-4 bg-fenjes-purple rounded-full text-white">
                    {nextStep.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-fenjes-purple mb-1">{nextStep.title}</CardTitle>
                    <p className="text-gray-600">{nextStep.description}</p>
                  </div>
                  <Button className="mt-4 md:mt-0 bg-fenjes-purple hover:bg-fenjes-purple-dark" onClick={() => navigate(nextStep.link)}>
                    {nextStep.ctaText} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardHeader>
              </Card>
            </div>
          </section>
        )}

        {/* Features Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
              Descubra o Poder do Fenjes
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-xl mx-auto">
              Ferramentas e recursos desenhados para apoiar sua jornada única de bem-estar.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featureCards.map((card) => (
                <Card key={card.title} className={`${card.bgColor} shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col`}>
                  <CardHeader className="items-center text-center">
                    <div className="p-3 rounded-full bg-white mb-4 shadow">
                      {card.icon}
                    </div>
                    <CardTitle className={`text-xl font-semibold ${card.textColor}`}>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-700 text-sm mb-6 text-center">{card.description}</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button variant="outline" className={`w-full ${card.textColor} border-${card.textColor.split('-')[1]} hover:bg-${card.textColor.split('-')[1]}/10`} onClick={() => navigate(card.link)}>
                      {card.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Inspirational Quote Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <Zap className="h-12 w-12 text-fenjes-yellow mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">Momento Fenjes</h3>
            <p className="text-xl text-gray-600 italic max-w-2xl mx-auto">
              "Acredite na sua capacidade de cura. Cada pequeno passo é uma vitória em direção ao seu bem-estar."
            </p>
          </div>
        </section>
        
        {/* Achievements Quick Glance - Optional, if data is available */}
        {/* This could be a small section if you want to add back recent achievements */}

        <MedicalDisclaimer />
      </div>
    </AppLayout>
  );
};

export default HomePage; 