import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import { NotificationsPanel } from '@/components/ui/notifications';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface HeaderProps {
  userProfile?: UserProfile | null;
}

export function Header({ userProfile }: HeaderProps) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const { toggleSidebar } = useSidebar();

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        <div className="flex items-center gap-2">
          {/* Botão de menu para mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={toggleSidebar}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Abrir menu</span>
          </Button>

          <Link to="/" className="flex items-center">
            <div className="h-10 w-32 md:w-40 bg-white rounded flex items-center justify-center overflow-hidden">
              {/* Placeholder para a logo - substituir pelo componente de imagem real */}
              <span className="text-fenjes-purple font-semibold text-sm md:text-base">LOGO FENJES</span>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center gap-1 md:gap-4">
          {!userProfile && (
            <button
              className="hidden md:flex items-center gap-2 bg-white text-fenjes-purple hover:bg-fenjes-purple-light px-3 py-1.5 rounded"
              onClick={handleQuizClick}
            >
              <span>Personalize sua experiência</span>
              <span className="text-xs bg-fenjes-purple text-white px-2 py-0.5 rounded">Novo</span>
            </button>
          )}
          
          {/* Componente de notificações */}
          <NotificationsPanel />
          
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
                <Link to="/perfil">Meu Perfil</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer touch-target" asChild>
                <Link to="/perfil?tab=configuracoes">Configurações</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer touch-target" asChild>
                <Link to="/help">Ajuda</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer touch-target text-red-500">Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
