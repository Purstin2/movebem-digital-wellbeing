
import { Link, useLocation } from 'react-router-dom';
import { Home, Library, Activity, Utensils, Gift, User, X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/context/SidebarContext';

export function Sidebar() {
  const { expanded, toggleSidebar, setExpanded } = useSidebar();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: Library, label: 'Exercícios', href: '/exercises' },
    { icon: Activity, label: 'Progresso', href: '/progress' },
    { icon: Utensils, label: 'Nutrição', href: '/nutrition' },
    { icon: Gift, label: 'Bônus', href: '/bonus' },
    { icon: User, label: 'Perfil', href: '/profile' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {expanded && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden animate-fade-in" 
          onClick={toggleSidebar}
        />
      )}
    
      <aside className={cn(
        "fixed md:sticky top-0 left-0 h-screen bg-white z-30 transition-all duration-300 flex flex-col shadow-md",
        expanded ? "w-64" : "w-0 md:w-16 overflow-hidden"
      )}>
        <div className="flex items-center justify-between p-4">
          <div className={cn("flex items-center gap-2", !expanded && "md:hidden")}>
            <div className="bg-movebem-purple h-8 w-8 rounded-md flex items-center justify-center">
              <span className="text-white font-quicksand font-bold">MB</span>
            </div>
            {expanded && <span className="font-quicksand font-bold text-lg text-movebem-purple-dark animate-fade-in">MoveBem</span>}
          </div>
          <button 
            onClick={toggleSidebar} 
            className="p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:scale-110 active:scale-95"
          >
            {expanded ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <nav className="flex-1 pt-6 overflow-y-auto">
          <ul className="space-y-1 px-2">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.href || 
                (item.href !== '/' && location.pathname.startsWith(item.href));
              
              return (
                <li key={item.href} style={{ animationDelay: `${index * 50}ms` }} className="animate-fade-in">
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-3 rounded-md transition-all",
                      "hover:bg-movebem-purple-light/20 text-gray-600 hover:text-movebem-purple-dark",
                      isActive && "bg-movebem-purple-light/30 text-movebem-purple-dark font-medium",
                      "hover:scale-105 active:scale-95"
                    )}
                    onClick={() => window.innerWidth < 768 && setExpanded(false)}
                  >
                    <item.icon size={20} className={isActive ? "text-movebem-purple" : ""} />
                    {expanded && <span>{item.label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="p-4">
          {expanded && (
            <div className="bg-movebem-purple-light/20 rounded-md p-3 text-sm animate-fade-in">
              <p className="font-medium text-movebem-purple-dark">Plano 21 dias</p>
              <p className="text-gray-600 text-xs mt-1">Dia 4 de 21</p>
              <div className="h-1.5 bg-gray-200 rounded-full mt-2">
                <div className="h-full bg-movebem-purple rounded-full animate-progress-fill" style={{ width: '19%' }}></div>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
