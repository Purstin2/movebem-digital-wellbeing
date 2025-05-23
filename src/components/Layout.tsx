import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header style={{
        backgroundColor: '#fff',
        padding: '1rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link href="/">
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>FENJES</span>
          </Link>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/exercises">Exercícios</Link>
            <Link href="/recipes">Receitas</Link>
            <Link href="/accessibility-test">Teste de Acessibilidade</Link>
          </div>
        </nav>
      </header>

      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        {children}
      </main>

      <footer style={{
        backgroundColor: '#f5f5f5',
        padding: '2rem',
        marginTop: '2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <p>© 2024 FENJES. Todos os direitos reservados.</p>
          <p style={{ marginTop: '1rem' }}>
            Suporte: suporte@fenjes.com.br | (11) 99999-9999
          </p>
        </div>
      </footer>
    </div>
  );
}; 