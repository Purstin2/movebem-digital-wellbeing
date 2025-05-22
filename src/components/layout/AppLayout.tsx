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

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const { expanded } = useSidebar();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load user profile from session storage if exists
  useEffect(() => {
    try {
      const storedProfile = sessionStorage.getItem('userProfile');
      if (storedProfile) {
        setUserProfile(JSON.parse(storedProfile));
      }
    } catch (error) {
      console.error("Error loading profile:", error);
    }
  }, []);

  // Redirect to onboarding if no profile exists and not already on onboarding page
  useEffect(() => {
    if (!userProfile && location.pathname !== '/onboarding' && 
        !location.pathname.startsWith('/exercises/')) {
      // Uncomment for production
      // navigate('/onboarding');
      
      // Just show a toast for now
      toast({
        title: "Personalização recomendada",
        description: "Complete o quiz de onboarding para uma experiência personalizada",
        action: (
          <button
            onClick={() => navigate('/onboarding')}
            className="bg-fenjes-purple text-white px-3 py-1 rounded text-xs hover:bg-fenjes-purple-dark"
          >
            Ir para Quiz
          </button>
        )
      });
    }
  }, [userProfile, location.pathname, navigate, toast]);

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
    <div className="flex min-h-screen bg-fenjes-bg-light overflow-x-hidden">
      {/* Desktop Sidebar - hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar userProfile={userProfile} />
      </div>
      
      {/* Mobile Sidebar with Sheet component */}
      <div className="md:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="fixed top-4 left-4 z-50 bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white"
              aria-label="Menu"
            >
              <Menu size={24} className="text-fenjes-purple" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="left" 
            className="p-0 w-4/5 max-w-xs border-r border-fenjes-purple-light/20"
            onClose={() => setIsSheetOpen(false)}
            onPointerDownOutside={() => setIsSheetOpen(false)}
          >
            <Sidebar userProfile={userProfile} />
          </SheetContent>
        </Sheet>
      </div>
      
      <div className="flex flex-col flex-1 w-full">
        <Header userProfile={userProfile} />
        
        {personalizedTrack && location.pathname === "/" && (
          <div className="bg-fenjes-purple-light/20 p-2 md:p-3 text-center border-b text-fenjes-purple-dark animate-fade-in text-sm md:text-base">
            <span className="font-medium">
              Você está na {personalizedTrack} • Dia {userProfile?.currentDay || 4} de 21
            </span>
          </div>
        )}
        
        <main className="flex-1 p-3 md:p-6 overflow-y-auto overflow-x-hidden animate-fade-in">
          {children}
        </main>
        
        <footer className="p-3 md:p-4 border-t text-center text-xs md:text-sm text-gray-500 animate-fade-in">
          © 2025 Fenjes - Todos os direitos reservados
        </footer>
      </div>
    </div>
  );
}
