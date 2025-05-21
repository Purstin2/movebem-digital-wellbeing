
import { ReactNode, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation();
  const { toast } = useToast();

  // Notificação de mudança de página e reset de scroll
  useEffect(() => {
    // Scroll para o topo quando mudar de página
    window.scrollTo(0, 0);
    
    // Mensagem de boas vindas para novas seções
    if (location.pathname !== '/' && !sessionStorage.getItem(`visited-${location.pathname}`)) {
      const messages: Record<string, string> = {
        '/exercises': 'Biblioteca completa de exercícios para você começar',
        '/progress': 'Acompanhe sua evolução e conquistas',
        '/nutrition': 'Dicas nutricionais para complementar seus exercícios',
        '/bonus': 'Materiais exclusivos para membros',
        '/profile': 'Gerencie seu perfil e configurações',
      };
      
      if (messages[location.pathname]) {
        toast({
          title: `Bem-vindo à seção ${location.pathname.substring(1)}`,
          description: messages[location.pathname],
          duration: 5000,
        });
        
        // Marca como visitado
        sessionStorage.setItem(`visited-${location.pathname}`, 'true');
      }
    }
  }, [location.pathname, toast]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <main className="flex-1 p-4 md:p-6 overflow-auto animate-fade-in">
          {children}
        </main>
        
        <footer className="p-4 border-t text-center text-sm text-gray-500 animate-fade-in">
          © 2025 MoveBem - Todos os direitos reservados
        </footer>
      </div>
    </div>
  );
}
