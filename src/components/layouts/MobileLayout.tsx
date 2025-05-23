import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface MobileLayoutProps {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
  showMenu?: boolean;
}

export const MobileLayout: React.FC<MobileLayoutProps> = ({
  children,
  title,
  showBackButton = true,
  showMenu = true
}) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  const handleBack = () => {
    router.back();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="h-16 px-4 flex items-center justify-between">
          <div className="flex items-center">
            {showBackButton && (
              <button
                onClick={handleBack}
                className="touch-target mr-2 p-2 rounded-full hover:bg-gray-100"
                aria-label="Voltar"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}
            <h1 className="text-xl font-semibold truncate">{title}</h1>
          </div>

          {showMenu && (
            <button
              onClick={toggleMenu}
              className="touch-target p-2 rounded-full hover:bg-gray-100"
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          />
        )}

        {/* Menu Content */}
        <nav
          className={`
            fixed right-0 top-16 bottom-0 w-64 bg-white shadow-xl transform transition-transform duration-200 ease-in-out z-50
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="py-4">
            <a
              href="/"
              className="block px-4 py-3 text-lg hover:bg-gray-100"
            >
              Página Inicial
            </a>
            <a
              href="/exercises"
              className="block px-4 py-3 text-lg hover:bg-gray-100"
            >
              Exercícios
            </a>
            <a
              href="/recipes"
              className="block px-4 py-3 text-lg hover:bg-gray-100"
            >
              Receitas
            </a>
            <a
              href="/profile"
              className="block px-4 py-3 text-lg hover:bg-gray-100"
            >
              Perfil
            </a>
            <a
              href="/settings"
              className="block px-4 py-3 text-lg hover:bg-gray-100"
            >
              Configurações
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16 min-h-screen">
        {!isPortrait && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center text-white p-4">
            <div className="text-center">
              <svg
                className="w-16 h-16 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <h2 className="text-xl font-semibold mb-2">
                Modo Retrato Recomendado
              </h2>
              <p>
                Para melhor experiência, por favor, gire seu dispositivo para o modo retrato.
              </p>
            </div>
          </div>
        )}

        <div className="px-4 py-6">{children}</div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="flex justify-around">
          <a
            href="/"
            className="touch-target flex-1 py-3 flex flex-col items-center justify-center"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-xs mt-1">Início</span>
          </a>

          <a
            href="/exercises"
            className="touch-target flex-1 py-3 flex flex-col items-center justify-center"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-xs mt-1">Exercícios</span>
          </a>

          <a
            href="/recipes"
            className="touch-target flex-1 py-3 flex flex-col items-center justify-center"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <span className="text-xs mt-1">Receitas</span>
          </a>

          <a
            href="/profile"
            className="touch-target flex-1 py-3 flex flex-col items-center justify-center"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-xs mt-1">Perfil</span>
          </a>
        </div>
      </nav>

      {/* Bottom Padding for Navigation */}
      <div className="h-16" />
    </div>
  );
};

export default MobileLayout; 