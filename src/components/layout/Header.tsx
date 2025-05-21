
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Calendar, Award, Menu } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useSidebar } from "@/context/SidebarContext";

export function Header() {
  const { toggleSidebar } = useSidebar();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Exercício Diário",
      message: "Seu exercício de hoje está aguardando você!",
      read: false,
      time: "Agora"
    },
    {
      id: 2,
      title: "Nova Conquista",
      message: "Você desbloqueou a conquista \"Persistente\"",
      read: false,
      time: "1h atrás"
    }
  ]);
  
  const { toast } = useToast();

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
    
    toast({
      title: "Notificações",
      description: "Todas as notificações foram marcadas como lidas",
    });
  };

  const notificationCount = notifications.filter(n => !n.read).length;
  
  return (
    <header className="sticky top-0 z-10 w-full px-4 md:px-6 py-3 bg-white border-b flex items-center justify-between">
      <div className="md:hidden">
        <button 
          className="p-1.5 rounded-md hover:bg-gray-100"
          onClick={toggleSidebar}
        >
          <Menu size={22} className="text-gray-600" />
        </button>
      </div>
      
      <h1 className="text-lg md:text-2xl font-quicksand font-semibold hidden md:block">
        <span className="text-movebem-purple-dark">Movendo-se com o </span> 
        <span className="text-movebem-purple">MoveBem</span>
      </h1>
      
      <div className="ml-auto flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Bell size={20} className="text-gray-600" />
              {notificationCount > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 bg-movebem-green rounded-full flex items-center justify-center text-white text-xs">
                  {notificationCount}
                </span>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 max-w-[calc(100vw-2rem)]">
            <div className="flex items-center justify-between px-4 py-3 font-medium border-b">
              <span>Notificações</span>
              {notificationCount > 0 && (
                <button 
                  className="text-xs text-movebem-purple hover:underline"
                  onClick={markAllAsRead}
                >
                  Marcar todas como lidas
                </button>
              )}
            </div>
            
            {notifications.length > 0 ? (
              <>
                {notifications.map(notification => (
                  <DropdownMenuItem key={notification.id} className="py-3 cursor-pointer">
                    <div className="flex gap-3 w-full">
                      <div className={`
                        h-10 w-10 rounded-full flex items-center justify-center shrink-0
                        ${notification.read ? 'bg-gray-100' : 'bg-movebem-purple-light/30'}
                      `}>
                        {notification.title.includes('Exercício') ? (
                          <Calendar className={notification.read ? 'text-gray-400' : 'text-movebem-purple'} size={20} />
                        ) : (
                          <Award className={notification.read ? 'text-gray-400' : 'text-movebem-purple'} size={20} />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className={`font-medium ${notification.read ? 'text-gray-500' : 'text-gray-800'}`}>
                            {notification.title}
                          </p>
                          <span className="text-xs text-gray-400">{notification.time}</span>
                        </div>
                        <p className={`text-sm ${notification.read ? 'text-gray-400' : 'text-gray-500'}`}>
                          {notification.message}
                        </p>
                      </div>
                      {!notification.read && (
                        <div className="h-2 w-2 mt-1 bg-movebem-green rounded-full shrink-0"></div>
                      )}
                    </div>
                  </DropdownMenuItem>
                ))}
                <div className="p-2 text-center">
                  <button className="text-sm text-movebem-purple hover:underline">
                    Ver todas
                  </button>
                </div>
              </>
            ) : (
              <div className="py-6 text-center text-gray-500">
                Nenhuma notificação
              </div>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-full hover:bg-gray-100 pr-2 pl-1 py-1 transition-colors">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-movebem-purple-light text-movebem-purple-dark font-medium">
                  MS
                </AvatarFallback>
              </Avatar>
              <span className="hidden md:inline text-sm font-medium text-gray-700">Marina</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer" asChild>
              <Link to="/profile">Meu Perfil</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" asChild>
              <Link to="/profile?tab=configuracoes">Configurações</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Ajuda</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-red-500">Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
