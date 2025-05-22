import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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

interface HeaderProps {
  userProfile?: UserProfile | null;
}

export function Header({ userProfile }: HeaderProps) {
  const navigate = useNavigate();
  const { toggleSidebar } = useSidebar();
  const { toast } = useToast();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const hasShownInitialState = useRef(false);
  
  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Detecta preferências de redução de movimento
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);
        
        const handleMotionChange = (event: MediaQueryListEvent) => {
          setPrefersReducedMotion(event.matches);
        };
        
        mediaQuery.addEventListener('change', handleMotionChange);
        return () => mediaQuery.removeEventListener('change', handleMotionChange);
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
    <header className="sticky top-0 z-20 w-full px-3 md:px-6 py-3 bg-fenjes-purple text-white shadow-md ios-sticky-fix">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center ml-10 md:ml-0">
            <div className="h-10 w-32 md:w-40 bg-white rounded flex items-center justify-center overflow-hidden">
              {/* Placeholder para a logo - substituir pelo componente de imagem real */}
              <span className="text-fenjes-purple font-semibold text-sm md:text-base">LOGO FENJES</span>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center gap-1 md:gap-4">
          {!userProfile && (
            <BreathingButton 
              variant="secondary" 
              className="hidden md:flex items-center gap-2 bg-white text-fenjes-purple hover:bg-fenjes-purple-light"
              onClick={handleQuizClick}
              lowPerformanceMode={isMobile || prefersReducedMotion}
            >
              <span>Personalize sua experiência</span>
              <span className="text-xs bg-fenjes-purple text-white px-2 py-0.5 rounded">Novo</span>
            </BreathingButton>
          )}
          
          <NotificationCenter 
            userState={userState} 
            userJourney={userJourney} 
            className="hidden sm:flex"
          />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                className="flex items-center gap-1 md:gap-2 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 px-1.5 md:pr-2 md:pl-1 py-1 transition-colors touch-target"
                aria-label={`Menu do usuário: ${userName}`}
              >
                <Avatar className="h-7 w-7 md:h-8 md:w-8">
                  <AvatarFallback className="bg-white text-fenjes-purple font-medium text-xs md:text-sm">
                    {userInitials}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden md:inline text-sm font-medium text-white">{userName}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52 md:w-56">
              {!userProfile && (
                <DropdownMenuItem className="cursor-pointer touch-target" onClick={handleQuizClick}>
                  Fazer Quiz de Perfil
                </DropdownMenuItem>
              )}
              <DropdownMenuItem className="cursor-pointer touch-target" asChild>
                <Link to="/evolucao-pessoal">Meu Perfil</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer touch-target" asChild>
                <Link to="/evolucao-pessoal?tab=configuracoes">Configurações</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer touch-target">Ajuda</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer touch-target text-red-500">Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
