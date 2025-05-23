import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    question: "Quais equipamentos preciso para praticar yoga na cadeira?",
    answer: "Apenas uma cadeira estável e confortável, sem rodas. Idealmente, a cadeira deve permitir que seus pés toquem o chão e tenha um encosto para apoiar as costas. Um pequeno travesseiro ou almofada pode ser útil para alguns exercícios."
  },
  {
    question: "É seguro praticar os exercícios mesmo com dor crônica?",
    answer: "Sim, os exercícios foram projetados especificamente para pessoas com dor crônica e limitação de movimento. No entanto, é fundamental respeitar os limites do seu corpo e parar imediatamente se sentir dor aguda. Sempre consulte seu médico antes de iniciar qualquer programa de exercícios, especialmente se você tem condições médicas específicas."
  },
  {
    question: "Com que frequência devo praticar os exercícios?",
    answer: "Para melhores resultados, recomendamos praticar diariamente por pelo menos 10-15 minutos. A consistência é mais importante que a duração. Se você está começando, pode iniciar com 5 minutos por dia e aumentar gradualmente."
  },
  {
    question: "Posso praticar os exercícios em dias de crise de dor?",
    answer: "Sim, temos exercícios específicos para dias de crise. Procure pelos exercícios marcados como 'para dor aguda' ou 'micro movimentos'. Estes são seguros para praticar mesmo em momentos de dor mais intensa, e podem ajudar a aliviar o desconforto."
  },
  {
    question: "Por quanto tempo devo seguir o programa para ver resultados?",
    answer: "A maioria dos usuários relata melhoras perceptíveis após 2-3 semanas de prática consistente. Para benefícios duradouros e progressivos, recomendamos seguir o programa por pelo menos 8 semanas."
  },
  {
    question: "As receitas substituem meus medicamentos anti-inflamatórios?",
    answer: "Não. As receitas anti-inflamatórias são um complemento natural ao seu tratamento, mas não substituem medicamentos prescritos. Sempre consulte seu médico antes de fazer qualquer alteração em seu regime medicamentoso."
  },
  {
    question: "Posso adaptar os exercícios se tiver limitações específicas?",
    answer: "Sim, cada exercício inclui adaptações para diferentes condições e limitações. O sistema também personaliza as recomendações com base no seu perfil e nível de dor. Se um movimento específico causar desconforto, utilize as adaptações sugeridas."
  },
  {
    question: "Como posso entrar em contato com suporte se tiver dúvidas?",
    answer: "Para suporte técnico ou dúvidas sobre o programa, você pode enviar um e-mail para suporte@fenjes.com.br ou utilizar o chat de suporte disponível de segunda a sexta, das 9h às 18h."
  }
];

interface FAQSectionProps {
  faqs?: FAQItem[];
  title?: string;
  className?: string;
}

export function FAQSection({ 
  faqs = DEFAULT_FAQS,
  title = "Perguntas Frequentes",
  className = "" 
}: FAQSectionProps) {
  return (
    <div className={`w-full max-w-3xl mx-auto py-4 ${className}`}>
      <h2 className="text-xl sm:text-2xl font-semibold text-fenjes-purple mb-4 sm:mb-6">
        {title}
      </h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-base sm:text-lg text-left font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base text-gray-700">
              <p className="py-2">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
} 