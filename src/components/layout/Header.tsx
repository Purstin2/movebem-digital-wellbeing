
import { useState } from 'react';
import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [notifications] = useState(2);
  
  return (
    <header className="sticky top-0 z-10 w-full px-4 md:px-6 py-3 bg-white border-b flex items-center justify-between">
      <h1 className="text-lg md:text-2xl font-quicksand font-semibold hidden md:block">
        <span className="text-movebem-purple-dark">Movendo-se com o </span> 
        <span className="text-movebem-purple">MoveBem</span>
      </h1>
      
      <div className="ml-auto flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Bell size={20} className="text-gray-600" />
              {notifications > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 bg-movebem-green rounded-full flex items-center justify-center text-white text-xs">
                  {notifications}
                </span>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <div className="px-4 py-3 font-medium border-b">
              Notificações
            </div>
            <DropdownMenuItem className="py-3 cursor-pointer">
              <div>
                <p className="font-medium">Exercício Diário</p>
                <p className="text-sm text-gray-500">Seu exercício de hoje está aguardando você!</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-3 cursor-pointer">
              <div>
                <p className="font-medium">Nova Conquista</p>
                <p className="text-sm text-gray-500">Você desbloqueou a conquista "Persistente"</p>
              </div>
            </DropdownMenuItem>
            <div className="p-2 text-center">
              <button className="text-sm text-movebem-purple hover:underline">
                Ver todas
              </button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-full hover:bg-gray-100 pr-2 pl-1 py-1 transition-colors">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-movebem-purple-light text-movebem-purple-dark font-medium">
                  MB
                </AvatarFallback>
              </Avatar>
              <span className="hidden md:inline text-sm font-medium text-gray-700">Marina</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer">Meu Perfil</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Configurações</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Ajuda</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-red-500">Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
