import React, { useState } from 'react';
import { accessibilityClasses } from '@/styles/accessibility';

interface FAQItem {
  question: string;
  answer: string;
  category: 'exercises' | 'recipes' | 'general' | 'technical';
}

const faqData: FAQItem[] = [
  {
    question: 'Como sei se posso fazer os exercícios?',
    answer: 'Consulte seu médico antes de iniciar o programa. Comece pelos exercícios marcados como "iniciante" e siga as adaptações recomendadas para sua condição.',
    category: 'exercises'
  },
  {
    question: 'O que fazer se sentir dor durante os exercícios?',
    answer: 'Pare imediatamente se sentir dor aguda ou desconforto intenso. Use a escala de dor (1-10) como guia - não ultrapasse 5/10.',
    category: 'exercises'
  },
  {
    question: 'Posso adaptar as receitas às minhas restrições alimentares?',
    answer: 'Sim! Cada receita inclui sugestões de adaptações para diferentes necessidades. Consulte a seção de "Adaptações" em cada receita.',
    category: 'recipes'
  },
  {
    question: 'Com que frequência devo fazer os exercícios?',
    answer: 'Recomendamos seguir o plano de 21 dias personalizado, que considera sua condição atual e objetivos.',
    category: 'general'
  },
  {
    question: 'Como acompanhar meu progresso?',
    answer: 'Use o diário de progresso no app para registrar níveis de dor, limitações e observações após cada sessão.',
    category: 'general'
  },
  {
    question: 'O que fazer se a aplicação não carregar?',
    answer: 'Verifique sua conexão com internet, limpe o cache do navegador ou entre em contato com nosso suporte técnico.',
    category: 'technical'
  }
];

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQs = faqData.filter(faq => 
    (activeCategory === 'all' || faq.category === activeCategory) &&
    (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
     faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'exercises', label: 'Exercícios' },
    { id: 'recipes', label: 'Receitas' },
    { id: 'general', label: 'Geral' },
    { id: 'technical', label: 'Técnico' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className={`${accessibilityClasses.text.heading} mb-6`}>
        Perguntas Frequentes
      </h2>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <input
          type="search"
          placeholder="Buscar perguntas..."
          className={`${accessibilityClasses.text.base} w-full p-3 border rounded-lg`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`${accessibilityClasses.touch.button} ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              } rounded-full transition-colors`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFAQs.map((faq, index) => (
          <details
            key={index}
            className="group bg-white rounded-lg shadow-sm border p-4"
          >
            <summary className={`${accessibilityClasses.text.base} font-medium cursor-pointer`}>
              {faq.question}
            </summary>
            <p className={`${accessibilityClasses.text.base} mt-4 text-gray-600`}>
              {faq.answer}
            </p>
          </details>
        ))}

        {filteredFAQs.length === 0 && (
          <p className={`${accessibilityClasses.text.base} text-center text-gray-500`}>
            Nenhuma pergunta encontrada. Tente outros termos ou entre em contato com nosso suporte.
          </p>
        )}
      </div>

      {/* Support Contact */}
      <div className="mt-12 p-6 bg-blue-50 rounded-lg">
        <h3 className={`${accessibilityClasses.text.heading} text-blue-800 mb-4`}>
          Ainda tem dúvidas?
        </h3>
        <p className={`${accessibilityClasses.text.base} text-blue-700`}>
          Nossa equipe está disponível para ajudar:
        </p>
        <ul className="mt-4 space-y-2">
          <li className={`${accessibilityClasses.text.base}`}>
            📧 Email: suporte@fenjes.com
          </li>
          <li className={`${accessibilityClasses.text.base}`}>
            📱 WhatsApp: (11) 99999-9999
          </li>
          <li className={`${accessibilityClasses.text.base}`}>
            ⏰ Horário: Seg-Sex, 8h às 18h
          </li>
        </ul>
      </div>
    </div>
  );
}; 