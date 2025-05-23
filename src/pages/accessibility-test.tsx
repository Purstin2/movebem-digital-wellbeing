import React from 'react';
import { Layout } from '../components/Layout';
import { SimpleAccessibilityTest } from '../components/SimpleAccessibilityTest';

const AccessibilityTestPage: React.FC = () => {
  return (
    <Layout>
      <SimpleAccessibilityTest />
      
      {/* Test elements */}
      <div style={{ padding: '20px', marginTop: '2rem', border: '1px solid #eee', borderRadius: '8px' }}>
        <h3>Elementos de Teste</h3>
        
        <div style={{ marginTop: '1rem' }}>
          <h4>Teste de Alvos de Toque</h4>
          {/* Small touch target */}
          <button style={{ 
            width: '30px', 
            height: '30px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            margin: '10px'
          }}>
            A
          </button>
          
          {/* Correct touch target */}
          <button style={{ 
            width: '44px', 
            height: '44px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            margin: '10px'
          }}>
            B
          </button>
        </div>
        
        <div style={{ marginTop: '1rem' }}>
          <h4>Teste de Tamanho de Fonte</h4>
          {/* Small font */}
          <p style={{ fontSize: '12px', marginBottom: '10px' }}>
            Este texto usa uma fonte pequena (12px)
          </p>
          
          {/* Correct font */}
          <p style={{ fontSize: '16px' }}>
            Este texto usa uma fonte adequada (16px)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AccessibilityTestPage; 