import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useSidebar } from "@/context/SidebarContext";
import { UserProfile } from '@/types/onboarding';
import { Button } from '@/components/ui/button';
import { NotificationCenter } from '@/components/ui/notification-center';
import { CurrentUserState, UserJourney } from '@/types/notification';
import { BreathingButton } from '@/components/ui/breathing-button';
import { useMediaQuery } from '@/hooks/use-media-query';

interface HeaderProps {
  userProfile?: UserProfile | null;
}

export function Header({ userProfile }: HeaderProps) {
  const navigate = useNavigate();
  const { toggleSidebar } = useSidebar();
  const { toast } = useToast();
  const isMobile = useMediaQuery('(max-width: 640px)');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const hasShownInitialState = useRef(false);
  
  // Detecta preferências de redução de movimento
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);
      } catch (e) {
        // Fallback silencioso - manterá o valor padrão
      }
    }
  }, []);
  
  // Dados mockados para demonstração - em produção viriam da API
  const [userState, setUserState] = useState<CurrentUserState>(() => {
    // Inicializa com estado baseado no perfil, se existir
    if (userProfile) {
      return {
        emotionalState: userProfile.painLevel === 'high' ? 'struggling' : 'motivated',
        energyLevel: 7,
        consistency: userProfile.currentDay || 1,
        painLevel: userProfile.painLevel === 'high' ? 7 : userProfile.painLevel === 'medium' ? 4 : 2,
        lastActiveDate: new Date()
      };
    }
    
    return {
      emotionalState: 'motivated',
      energyLevel: 7,
      consistency: 5,
      painLevel: 3,
      lastActiveDate: new Date()
    };
  });
  
  const [userJourney, setUserJourney] = useState<UserJourney>(() => ({
    startDate: new Date(Date.now() - ((userProfile?.currentDay || 1) * 24 * 60 * 60 * 1000)),
    currentDay: userProfile?.currentDay || 1,
    track: userProfile?.trackAssigned || 'therapeutic',
    completedExercises: userProfile?.currentDay ? userProfile.currentDay * 2 - 1 : 0,
    totalMinutesInvested: userProfile?.currentDay ? userProfile.currentDay * 15 : 0,
    consecutiveDays: Math.min(userProfile?.currentDay || 0, 7),
    achievements: ['first_day']
  }));
  
  // Atualiza a jornada do usuário quando o perfil é atualizado
  useEffect(() => {
    if (userProfile) {
      setUserJourney(prev => ({
        ...prev,
        currentDay: userProfile.currentDay || prev.currentDay,
        track: userProfile.trackAssigned || prev.track
      }));
    }
  }, [userProfile]);

  // Verifica se é o dia 7 ou 21 para celebração única
  useEffect(() => {
    if (!hasShownInitialState.current && userProfile?.currentDay) {
      hasShownInitialState.current = true;
      
      // Se estiver no dia 7 ou 21, define o estado emocional para 'consistent'
      // para disparar a celebração correspondente
      if (userProfile.currentDay === 7 || userProfile.currentDay === 21) {
        setUserState(prev => ({
          ...prev,
          emotionalState: 'consistent'
        }));
      }
    }
  }, [userProfile]);
  
  const userName = userProfile ? userProfile.firstName || "Marina" : "Visitante";
  const userInitials = userName.substring(0, 2).toUpperCase();

  const handleQuizClick = useCallback(() => {
    navigate('/onboarding');
    toast({
      title: "Quiz de Perfil",
      description: "Vamos personalizar sua experiência com o Fenjes",
    });
  }, [navigate, toast]);
  
  return (
    <header className="sticky top-0 z-10 w-full px-4 md:px-6 py-3 bg-white border-b flex items-center justify-between">
      <div className="md:hidden">
        <button 
          className="p-1.5 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors"
          onClick={toggleSidebar}
          aria-label="Abrir menu lateral"
        >
          <Menu size={22} className="text-gray-600" />
        </button>
      </div>
      
      <h1 className="text-lg md:text-2xl font-quicksand font-semibold hidden md:block">
        <span className="text-fenjes-purple-dark">Liberte-se com </span> 
        <span className="text-fenjes-purple">Fenjes</span>
      </h1>
      
      <div className="ml-auto flex items-center gap-2 md:gap-4">
        {!userProfile && (
          <BreathingButton 
            variant="outline" 
            className="hidden md:flex items-center gap-2 text-fenjes-purple border-fenjes-purple hover:bg-fenjes-purple/10"
            onClick={handleQuizClick}
            lowPerformanceMode={isMobile || prefersReducedMotion}
          >
            <span>Personalize sua experiência</span>
            <span className="text-xs bg-fenjes-purple text-white px-2 py-0.5 rounded">Novo</span>
          </BreathingButton>
        )}
        
        <NotificationCenter userState={userState} userJourney={userJourney} />
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button 
              className="flex items-center gap-2 rounded-full hover:bg-gray-100 active:bg-gray-200 pr-2 pl-1 py-1 transition-colors"
              aria-label={`Menu do usuário: ${userName}`}
            >
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-fenjes-purple-light text-fenjes-purple-dark font-medium">
                  {userInitials}
                </AvatarFallback>
              </Avatar>
              <span className="hidden md:inline text-sm font-medium text-gray-700">{userName}</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {!userProfile && (
              <DropdownMenuItem className="cursor-pointer" onClick={handleQuizClick}>
                Fazer Quiz de Perfil
              </DropdownMenuItem>
            )}
            <DropdownMenuItem className="cursor-pointer" asChild>
              <Link to="/evolucao-pessoal">Meu Perfil</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" asChild>
              <Link to="/evolucao-pessoal?tab=configuracoes">Configurações</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Ajuda</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-red-500">Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
