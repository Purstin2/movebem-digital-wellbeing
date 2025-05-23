import React from 'react';
import { Layout } from '../components/Layout';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div style={{
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          FENJES
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#666',
          marginBottom: '2rem'
        }}>
          Plataforma digital de bem-estar para mulheres 35+
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          margin: '2rem 0'
        }}>
          <div style={{
            padding: '2rem',
            backgroundColor: '#f8f8f8',
            borderRadius: '8px',
            textAlign: 'left'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Exercícios Adaptados
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>✓ 45 exercícios de yoga</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ 3 níveis de dificuldade</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ Adaptações personalizadas</li>
            </ul>
            <Link href="/exercises" style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#4a90e2',
              color: 'white',
              borderRadius: '4px',
              textDecoration: 'none'
            }}>
              Ver Exercícios
            </Link>
          </div>

          <div style={{
            padding: '2rem',
            backgroundColor: '#f8f8f8',
            borderRadius: '8px',
            textAlign: 'left'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Receitas Terapêuticas
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>✓ 30+ receitas anti-inflamatórias</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ Opções para restrições alimentares</li>
              <li style={{ marginBottom: '0.5rem' }}>✓ Informações nutricionais</li>
            </ul>
            <Link href="/recipes" style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#4a90e2',
              color: 'white',
              borderRadius: '4px',
              textDecoration: 'none'
            }}>
              Ver Receitas
            </Link>
          </div>
        </div>

        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: '#f0f7ff',
          borderRadius: '8px'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Comece sua jornada de bem-estar
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Junte-se a milhares de mulheres que já descobriram uma vida com mais
            disposição e menos dores através do FENJES.
          </p>
          <Link href="/register" style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#2d5ca6',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '1.1rem'
          }}>
            Começar Agora
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
