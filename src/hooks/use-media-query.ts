import { useEffect, useState } from 'react';

/**
 * Hook para verificar se uma media query corresponde à janela atual
 * @param query A media query a ser verificada, ex: '(max-width: 768px)'
 * @returns Boolean indicando se a media query corresponde
 */
export function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Verifica se está no ambiente do navegador
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    // Função para atualizar o estado das correspondências
    const handleChange = () => {
      setMatches(getMatches(query));
    };

    // Verifica se está no ambiente do navegador
    if (typeof window === 'undefined') {
      return;
    }

    // Cria MediaQueryList para observar mudanças
    const mediaQuery = window.matchMedia(query);

    // Configura a detecção de mudanças inicial e registra o listener
    handleChange();

    try {
      // Abordagem moderna
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } catch (e) {
      // Fallback para navegadores antigos
      try {
        // @ts-ignore - Ignorando erro de tipo para compatibilidade com navegadores antigos
        mediaQuery.addListener(handleChange);
        return () => {
          // @ts-ignore - Ignorando erro de tipo para compatibilidade com navegadores antigos
          mediaQuery.removeListener(handleChange);
        };
      } catch (error) {
        console.warn('Browser não suporta detecção de mudanças em media queries');
        return undefined;
      }
    }
  }, [query]);

  return matches;
} 