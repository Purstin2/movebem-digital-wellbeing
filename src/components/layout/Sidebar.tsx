import { Link, NavLink } from 'react-router-dom';
import { Home, Library, Activity, Utensils, Gift, User, X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/context/SidebarContext';
import { UserProfile } from '@/types/onboarding';
import { HelpCircle } from 'lucide-react';
import { Icons } from '@/components/icons';

interface SidebarProps {
  className?: string;
  user?: UserProfile;
}

export function Sidebar({ className, user }: SidebarProps) {
  const { expanded, toggleSidebar } = useSidebar();
  
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <Link to="/">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight text-fenjes-purple">
              Fenjes
            </h2>
          </Link>
          <div className="space-y-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
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
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
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
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
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
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  isActive ? "bg-accent" : "transparent"
                )
              }
            >
              <Icons.diary className="mr-2 h-4 w-4" />
              <span>Diário de Alívio</span>
            </NavLink>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-fenjes-purple">
            Minha Jornada
          </h2>
          <div className="space-y-1">
            <NavLink
              to="/evolucao-pessoal"
              className={({ isActive }) =>
                cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
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
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  isActive ? "bg-accent" : "transparent"
                )
              }
            >
              <Icons.profile className="mr-2 h-4 w-4" />
              <span>Meu Perfil</span>
            </NavLink>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-fenjes-purple">
            Ajuda
          </h2>
          <div className="space-y-1">
            <NavLink
              to="/help"
              className={({ isActive }) =>
                cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  isActive ? "bg-accent" : "transparent"
                )
              }
            >
              <Icons.help className="mr-2 h-4 w-4" />
              <span>Suporte Terapêutico</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
