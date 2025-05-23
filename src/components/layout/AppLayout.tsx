import { ReactNode, useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/types/onboarding';
import { useSidebar } from "@/context/SidebarContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

interface AppLayoutProps {
  children: ReactNode;
  className?: string;
  showHeader?: boolean;
  showSidebar?: boolean;
  userProfile?: UserProfile;
}

export function AppLayout({ children, className, showHeader = true, showSidebar = true, userProfile: propUserProfile }: AppLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(propUserProfile || null);
  const { expanded, toggleSidebar } = useSidebar();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [onboardingToastShown, setOnboardingToastShown] = useState(false);

  // Detectar tamanho de tela para responsividade
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Verificar dark mode
  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem('userSettings');
      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        setIsDarkMode(settings.darkMode || false);
      }
    } catch (error) {
      console.error("Erro ao carregar configurações de tema:", error);
    }
  }, []);

  // Aplicar dark mode ao elemento raiz
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Load user profile from session storage if exists
  useEffect(() => {
    // Se já temos um perfil de usuário das props, não precisamos carregar do sessionStorage
    if (propUserProfile) {
      setUserProfile(propUserProfile);
      return;
    }
    
    try {
      const storedProfile = sessionStorage.getItem('userProfile');
      if (storedProfile) {
        setUserProfile(JSON.parse(storedProfile));
      } else {
        // Se não existir perfil, criar um mock para testes
        const mockProfile: UserProfile = {
          firstName: "Usuário",
          currentDay: 1,
          painLevel: "medium" as const,
          primaryPain: "back" as const,
          mobilityLevel: "moderate" as const,
          trackAssigned: "adaptive" as const,
          goals: ["reduce_pain", "improve_posture"],
          age: "30-45",
          conditions: ["sedentary"],
          experience: "beginner" as const
        };
        sessionStorage.setItem('userProfile', JSON.stringify(mockProfile));
        setUserProfile(mockProfile);
      }
    } catch (error) {
      console.error("Error loading profile:", error);
    }
  }, [propUserProfile]);

  // Mostrar toast de onboarding apenas uma vez por sessão
  useEffect(() => {
    // Verificar se o usuário já completou onboarding ou se toast já foi mostrado
    const onboardingCompleted = sessionStorage.getItem('onboardingCompleted');
    
    if (!onboardingCompleted && !onboardingToastShown && location.pathname !== '/onboarding') {
      // Marcar que o toast foi mostrado para não repetir
      setOnboardingToastShown(true);
      
      toast({
        title: "Plano Prático de 21 Dias",
        description: "Complete o quiz inicial para personalizar sua jornada de 21 dias",
        action: (
          <button
            onClick={() => {
              navigate('/onboarding');
              // Marcar que o usuário foi para o onboarding
              sessionStorage.setItem('onboardingCompleted', 'true');
            }}
            className="bg-fenjes-purple text-white px-3 py-1 rounded text-xs hover:bg-fenjes-purple-dark"
          >
            Iniciar Jornada
          </button>
        )
      });
    }
  }, [userProfile, location.pathname, navigate, toast, onboardingToastShown]);

  // Notificação de mudança de página e reset de scroll
  useEffect(() => {
    // Scroll para o topo quando mudar de página
    window.scrollTo(0, 0);
    
    // Mensagem de boas vindas para novas seções
    if (location.pathname !== '/' && !sessionStorage.getItem(`visited-${location.pathname}`)) {
      const messages: Record<string, string> = {
        '/momentos-de-liberdade': 'Biblioteca completa de exercícios para sua jornada de transformação',
        '/conquistas': 'Acompanhe sua evolução e conquistas na jornada de 21 dias',
        '/alimentos-que-curam': 'Dicas nutricionais que complementam sua jornada de cura',
        '/tesouros-exclusivos': 'Materiais exclusivos para membros Fenjes',
        '/evolucao-pessoal': 'Gerencie seu perfil e veja seu progresso',
      };
      
      if (messages[location.pathname]) {
        toast({
          title: `Bem-vindo à seção ${location.pathname.substring(1).replace('-', ' ')}`,
          description: messages[location.pathname],
          duration: 5000,
        });
        
        // Marca como visitado
        sessionStorage.setItem(`visited-${location.pathname}`, 'true');
      }
    }
  }, [location.pathname, toast]);

  // Determine if we should show a personalized greeting based on user profile
  const getPersonalizedGreeting = () => {
    if (userProfile) {
      if (userProfile.trackAssigned === 'therapeutic') {
        return "Trilha Terapêutica";
      } else if (userProfile.trackAssigned === 'adaptive') {
        return "Trilha Adaptativa";
      } else {
        return "Trilha Bem-Estar";
      }
    }
    return null;
  };

  const personalizedTrack = getPersonalizedGreeting();

  return (
    <div className={cn(
      "min-h-screen flex flex-col bg-background text-foreground",
      isDarkMode && "dark"
    )}>
      {showHeader && <Header userProfile={userProfile} />}

      {personalizedTrack && location.pathname === "/" && (
        <div className="bg-fenjes-purple-light/20 p-2 md:p-3 text-center border-b text-fenjes-purple-dark animate-fade-in text-sm md:text-base">
          <span className="font-medium">
            Plano Prático de 21 Dias • Dia {userProfile?.currentDay || 1}/21 • {personalizedTrack}
          </span>
        </div>
      )}
      
      <div className="flex-1 flex">
        {showSidebar && (
          <>
            {/* Overlay em dispositivos móveis */}
            {isMobile && expanded && (
              <div 
                className="fixed inset-0 bg-black/50 z-20 md:hidden"
                onClick={toggleSidebar}
              />
            )}
            <div className={cn(
              "fixed inset-y-0 z-30 flex-shrink-0 transition-all duration-300 mt-16 bg-white",
              "md:w-64 md:left-0 md:relative md:mt-0",
              expanded ? "left-0" : "-left-full",
              (isMobile && expanded) && "w-64"
            )}>
              <Sidebar userProfile={userProfile} className="border-r min-h-screen py-4" />
            </div>
          </>
        )}
        
        <main className={cn(
          "flex-1 w-full transition-all duration-300 overflow-auto p-3 md:p-6",
          showSidebar && "md:ml-0",
          className
        )}>
          {children}
        </main>
      </div>

      <footer className="p-3 md:p-4 border-t text-center text-xs md:text-sm text-muted-foreground">
        © 2025 Fenjes - Todos os direitos reservados
      </footer>
      
      <Toaster />
    </div>
  );
}
