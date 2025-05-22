import { Link, NavLink, useLocation } from 'react-router-dom';
import { Home, Library, Activity, Utensils, Gift, User, X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/context/SidebarContext';
import { UserProfile } from '@/types/onboarding';
import { HelpCircle } from 'lucide-react';
import { Icons } from '@/components/icons';
import { useEffect, useState } from 'react';

interface SidebarProps {
  className?: string;
  userProfile?: UserProfile | null;
}

export function Sidebar({ className, userProfile }: SidebarProps) {
  const { expanded, toggleSidebar } = useSidebar();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className={cn("h-full pb-12", className)}>
      <div className="space-y-2 md:space-y-4 py-2 md:py-4">
        <div className="px-2 md:px-3 py-2">
          {isMobile && (
            <div className="flex items-center justify-between mb-3 px-2">
              <Link to="/">
                <h2 className="text-xl font-semibold tracking-tight text-fenjes-purple">
                  Fenjes
                </h2>
              </Link>
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Fechar menu"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>
          )}
          
          {!isMobile && (
            <Link to="/">
              <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight text-fenjes-purple">
                Fenjes
              </h2>
            </Link>
          )}
          
          <div className="space-y-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                cn(
                  "group flex items-center rounded-md px-2 md:px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground touch-target",
                  isActive ? "bg-accent" : "transparent"
                )
              }
            >
              <Icons.home className="mr-2 h-4 w-4" />
              <span>Início</span>
            </NavLink>
            <NavLink
              to="/chair-yoga"
              className={({ isActive }) =>
                cn(
                  "group flex items-center rounded-md px-2 md:px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground touch-target",
                  isActive ? "bg-accent" : "transparent"
                )
              }
            >
              <Icons.chairYoga className="mr-2 h-4 w-4" />
              <span>Yoga na Cadeira</span>
            </NavLink>
            <NavLink
              to="/nutrition"
              className={({ isActive }) =>
                cn(
                  "group flex items-center rounded-md px-2 md:px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground touch-target",
                  isActive ? "bg-accent" : "transparent"
                )
              }
            >
              <Icons.nutrition className="mr-2 h-4 w-4" />
              <span>Nutrição Curativa</span>
            </NavLink>
            <NavLink
              to="/diary"
              className={({ isActive }) =>
                cn(
                  "group flex items-center rounded-md px-2 md:px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground touch-target",
                  isActive ? "bg-accent" : "transparent"
                )
              }
            >
              <Icons.diary className="mr-2 h-4 w-4" />
              <span>Diário de Alívio</span>
            </NavLink>
          </div>
        </div>
        <div className="px-2 md:px-3 py-2">
          <h2 className="mb-2 px-2 md:px-4 text-base md:text-lg font-semibold tracking-tight text-fenjes-purple">
            Minha Jornada
          </h2>
          <div className="space-y-1">
            <NavLink
              to="/evolucao-pessoal"
              className={({ isActive }) =>
                cn(
                  "group flex items-center rounded-md px-2 md:px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground touch-target",
                  isActive ? "bg-accent" : "transparent"
                )
              }
            >
              <Icons.progress className="mr-2 h-4 w-4" />
              <span>Conquistas de Cura</span>
            </NavLink>
            <NavLink
              to="/perfil"
              className={({ isActive }) =>
                cn(
                  "group flex items-center rounded-md px-2 md:px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground touch-target",
                  isActive ? "bg-accent" : "transparent"
                )
              }
            >
              <Icons.profile className="mr-2 h-4 w-4" />
              <span>Meu Perfil</span>
            </NavLink>
          </div>
        </div>
        <div className="px-2 md:px-3 py-2">
          <h2 className="mb-2 px-2 md:px-4 text-base md:text-lg font-semibold tracking-tight text-fenjes-purple">
            Ajuda
          </h2>
          <div className="space-y-1">
            <NavLink
              to="/help"
              className={({ isActive }) =>
                cn(
                  "group flex items-center rounded-md px-2 md:px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground touch-target",
                  isActive ? "bg-accent" : "transparent"
                )
              }
            >
              <Icons.help className="mr-2 h-4 w-4" />
              <span>Suporte Terapêutico</span>
            </NavLink>
          </div>
        </div>
        
        {isMobile && (
          <div className="px-3 py-4 mt-6 border-t border-gray-100">
            <div className="text-xs text-gray-500 text-center">
              {userProfile ? (
                <span>Conectado como {userProfile.firstName}<br />Dia {userProfile.currentDay || 1} de 21</span>
              ) : (
                <span>Acesse seu perfil<br />para personalizar a experiência</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
