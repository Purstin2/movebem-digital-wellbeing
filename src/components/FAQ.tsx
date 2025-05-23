import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'exercises' | 'recipes' | 'medical' | 'technical';
}

interface FAQProps {
  className?: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Como sei se posso fazer os exercícios?',
    answer: 'Consulte seu médico antes de iniciar qualquer programa de exercícios. Nossos exercícios são adaptáveis para diferentes níveis de mobilidade e condições físicas, mas é importante ter liberação médica, especialmente se você tem condições pré-existentes.',
    category: 'medical'
  },
  {
    question: 'O que fazer se sentir dor durante os exercícios?',
    answer: 'Pare imediatamente se sentir dor aguda ou desconforto intenso. Um leve desconforto pode ser normal, mas dor não é. Consulte seu médico se a dor persistir. Você pode adaptar os exercícios usando nossas opções de modificação para torná-los mais confortáveis.',
    category: 'exercises'
  },
  {
    question: 'Como adaptar os exercícios para minhas limitações?',
    answer: 'Cada exercício inclui variações e adaptações específicas. Use o sistema de personalização para indicar suas limitações, e receberá versões adaptadas automaticamente. Você também pode ajustar a intensidade e amplitude dos movimentos conforme sua necessidade.',
    category: 'exercises'
  },
  {
    question: 'As receitas são seguras para diabéticos?',
    answer: 'Todas as receitas incluem informações nutricionais e adaptações para diferentes condições, incluindo diabetes. Procure as opções marcadas como "adequadas para diabéticos" e siga as modificações sugeridas. Consulte seu nutricionista para adaptações personalizadas.',
    category: 'recipes'
  },
  {
    question: 'Como aumentar o tamanho do texto?',
    answer: 'Use as configurações de acessibilidade no menu superior para ajustar o tamanho do texto, contraste e outros elementos visuais. Você pode escolher entre tamanho normal, grande ou extra grande para melhor legibilidade.',
    category: 'technical'
  },
  {
    question: 'Posso fazer os exercícios todos os dias?',
    answer: 'Recomendamos seguir o programa personalizado de 21 dias, que inclui dias de descanso apropriados. A frequência ideal depende do seu nível de condicionamento e condições físicas. O sistema ajustará automaticamente a frequência com base no seu progresso.',
    category: 'exercises'
  },
  {
    question: 'Como saber se estou progredindo?',
    answer: 'O sistema acompanha seu progresso através de métricas como redução da dor, melhora da mobilidade e aderência ao programa. Você receberá relatórios semanais e recomendações de ajustes baseados em seu desempenho.',
    category: 'technical'
  },
  {
    question: 'E se eu tiver uma emergência durante os exercícios?',
    answer: 'Em caso de emergência (dor intensa, tontura, falta de ar), pare imediatamente e procure atendimento médico. Tenha sempre um telefone por perto e, se possível, pratique com um acompanhante. Em emergências, ligue para 192 (SAMU).',
    category: 'medical'
  }
];

export const FAQ: React.FC<FAQProps> = ({ className = '' }) => {
  const [activeCategory, setActiveCategory] = useState<FAQItem['category'] | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'exercises', label: 'Exercícios' },
    { id: 'recipes', label: 'Receitas' },
    { id: 'medical', label: 'Saúde' },
    { id: 'technical', label: 'Técnico' }
  ];

  const filteredItems = faqItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      <h2 className="text-2xl font-semibold mb-6">Perguntas Frequentes</h2>

      {/* Barra de Pesquisa */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Pesquisar perguntas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Filtros por Categoria */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id as FAQItem['category'] | 'all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Lista de Perguntas */}
      <div className="space-y-4">
        {filteredItems.map((item, index) => (
          <details
            key={index}
            className="bg-gray-50 rounded-lg p-4 group"
          >
            <summary className="font-medium text-lg cursor-pointer list-none">
              <div className="flex justify-between items-center">
                <span>{item.question}</span>
                <span className="transform group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </div>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {item.answer}
            </p>
          </details>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          Nenhuma pergunta encontrada. Tente outros termos ou categorias.
        </p>
      )}

      {/* Suporte Adicional */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-medium text-blue-800 mb-2">
          Precisa de mais ajuda?
        </h3>
        <p className="text-blue-600">
          Entre em contato com nosso suporte através do e-mail suporte@fenjes.com ou
          pelo telefone 0800-123-4567 (seg-sex, 9h-18h).
        </p>
      </div>
    </div>
  );
};

export default FAQ; 