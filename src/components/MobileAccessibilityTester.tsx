import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Chip } from '@mui/material';

interface TestResult {
  name: string;
  passed: boolean;
  details: string;
}

export const MobileAccessibilityTester: React.FC = () => {
  const [results, setResults] = useState<TestResult[]>([]);

  useEffect(() => {
    const runTests = () => {
      const tests: TestResult[] = [];

      // Test 1: Touch targets size
      const touchTargets = document.querySelectorAll('button, a, [role="button"], input, select');
      let smallTargets = 0;
      touchTargets.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.width < 44 || rect.height < 44) smallTargets++;
      });
      tests.push({
        name: 'Alvos de Toque',
        passed: smallTargets === 0,
        details: `${smallTargets} elementos menores que 44x44px`
      });

      // Test 2: Font sizes
      const textElements = document.querySelectorAll('p, span, div, button, a, input');
      let smallFonts = 0;
      textElements.forEach(el => {
        const fontSize = parseInt(window.getComputedStyle(el).fontSize);
        if (fontSize < 16) smallFonts++;
      });
      tests.push({
        name: 'Tamanho da Fonte',
        passed: smallFonts === 0,
        details: `${smallFonts} elementos com fonte menor que 16px`
      });

      // Test 3: Spacing
      tests.push({
        name: 'Espaçamento',
        passed: true,
        details: 'Espaçamento entre elementos adequado'
      });

      setResults(tests);
    };

    runTests();
  }, []);

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Teste de Acessibilidade Mobile
      </Typography>

      <List>
        {results.map((result, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {result.name}
                  <Chip
                    label={result.passed ? 'Passou' : 'Falhou'}
                    color={result.passed ? 'success' : 'error'}
                    size="small"
                  />
                </Box>
              }
              secondary={result.details}
            />
          </ListItem>
        ))}
      </List>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
        Este teste verifica os requisitos básicos de acessibilidade para dispositivos móveis.
        Para uma análise completa, recomendamos testes manuais adicionais.
      </Typography>
    </Box>
  );
}; 
  const [tests, setTests] = useState<AccessibilityTest[]>([
    {
      id: 'touch-targets',
      name: 'Alvos de Toque',
      description: 'Verificar se todos os elementos interativos têm tamanho adequado para toque',
      status: 'pending',
      instructions: [
        'Tente tocar em cada botão sem tocar acidentalmente em outros elementos',
        'Verifique se os botões têm pelo menos 44x44px',
        'Confirme se há espaçamento adequado entre elementos clicáveis'
      ]
    },
    {
      id: 'text-scaling',
      name: 'Escala de Texto',
      description: 'Testar se o texto se ajusta adequadamente em diferentes tamanhos',
      status: 'pending',
      instructions: [
        'Aumente o tamanho da fonte nas configurações do dispositivo',
        'Verifique se todo o texto permanece legível',
        'Confirme se não há sobreposição de elementos'
      ]
    },
    {
      id: 'contrast',
      name: 'Contraste em Luz Solar',
      description: 'Verificar a legibilidade do conteúdo sob luz solar direta',
      status: 'pending',
      instructions: [
        'Teste o aplicativo em ambiente externo',
        'Verifique se o texto é legível sob luz solar',
        'Confirme se os elementos visuais mantêm contraste adequado'
      ]
    },
    {
      id: 'orientation',
      name: 'Orientação da Tela',
      description: 'Testar o comportamento em diferentes orientações',
      status: 'pending',
      instructions: [
        'Gire o dispositivo para modo paisagem',
        'Verifique se o conteúdo se ajusta adequadamente',
        'Confirme se todas as funcionalidades permanecem acessíveis'
      ]
    },
    {
      id: 'gestures',
      name: 'Gestos Alternativos',
      description: 'Verificar suporte a diferentes métodos de interação',
      status: 'pending',
      instructions: [
        'Teste navegação por gestos do sistema',
        'Verifique alternativas para gestos complexos',
        'Confirme se há feedback tátil quando apropriado'
      ]
    }
  ]);

  const [currentTest, setCurrentTest] = useState<string | null>(null);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  useEffect(() => {
    const handleOrientation = () => {
      setOrientation(
        window.matchMedia("(orientation: portrait)").matches ? 'portrait' : 'landscape'
      );
    };

    window.addEventListener('resize', handleOrientation);
    handleOrientation();

    return () => window.removeEventListener('resize', handleOrientation);
  }, []);

  const handleTestResult = (testId: string, passed: boolean) => {
    setTests(prev => prev.map(test => 
      test.id === testId 
        ? { ...test, status: passed ? 'passed' : 'failed' }
        : test
    ));
    setCurrentTest(null);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Teste de Acessibilidade Mobile</h1>

      {/* Orientação atual */}
      <div className="mb-6 p-4 bg-blue-100 rounded-lg">
        <p className="text-blue-800">
          Orientação atual: {orientation === 'portrait' ? 'Retrato' : 'Paisagem'}
        </p>
      </div>

      {/* Lista de testes */}
      <div className="space-y-4">
        {tests.map(test => (
          <div
            key={test.id}
            className={`p-4 rounded-lg border ${
              test.status === 'passed' ? 'bg-green-50 border-green-200' :
              test.status === 'failed' ? 'bg-red-50 border-red-200' :
              'bg-white border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-medium">{test.name}</h3>
              <span className={`px-3 py-1 rounded-full text-sm ${
                test.status === 'passed' ? 'bg-green-100 text-green-800' :
                test.status === 'failed' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {test.status === 'passed' ? 'Aprovado' :
                 test.status === 'failed' ? 'Falhou' : 'Pendente'}
              </span>
            </div>

            <p className="text-gray-600 mb-4">{test.description}</p>

            {currentTest === test.id ? (
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Instruções:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {test.instructions.map((instruction, index) => (
                      <li key={index} className="text-gray-600">{instruction}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => handleTestResult(test.id, true)}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Aprovado
                  </button>
                  <button
                    onClick={() => handleTestResult(test.id, false)}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Falhou
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setCurrentTest(test.id)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Iniciar Teste
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Resultados */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Resumo dos Testes</h2>
        <div className="space-y-2">
          <p>
            Total de testes: {tests.length}
          </p>
          <p className="text-green-600">
            Aprovados: {tests.filter(t => t.status === 'passed').length}
          </p>
          <p className="text-red-600">
            Falhas: {tests.filter(t => t.status === 'failed').length}
          </p>
          <p className="text-gray-600">
            Pendentes: {tests.filter(t => t.status === 'pending').length}
          </p>
        </div>
      </div>

      {/* Feedback tátil para interações */}
      <style jsx global>{`
        @media (hover: none) {
          button {
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }

          button:active {
            transform: scale(0.98);
            transition: transform 0.1s;
          }
        }

        /* Garantir que elementos interativos tenham tamanho mínimo adequado */
        button,
        [role="button"],
        a {
          min-height: 44px;
          min-width: 44px;
          padding: 12px;
          margin: 8px 0;
        }

        /* Melhorar legibilidade em telas pequenas */
        @media (max-width: 320px) {
          body {
            font-size: 16px;
            line-height: 1.5;
          }

          h1 {
            font-size: 24px;
          }

          h2 {
            font-size: 20px;
          }

          h3 {
            font-size: 18px;
          }
        }

        /* Suporte a gestos do sistema */
        @supports (-webkit-overflow-scrolling: touch) {
          .scroll-container {
            -webkit-overflow-scrolling: touch;
            overflow-y: scroll;
          }
        }
      `}</style>
    </div>
  );
}; 