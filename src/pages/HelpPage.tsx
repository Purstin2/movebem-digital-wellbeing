import { AppLayout } from "@/components/layout/AppLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HelpPage = () => {
  return (
    <AppLayout>
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-6">Suporte Terapêutico</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-lg mb-6">
            Encontre respostas para suas dúvidas e obtenha suporte para sua jornada de bem-estar.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Como os exercícios de yoga na cadeira podem me ajudar?</AccordionTrigger>
              <AccordionContent>
                Os exercícios de yoga na cadeira são adaptados para pessoas com mobilidade reduzida e oferecem
                benefícios como alívio de dores, melhora da flexibilidade, fortalecimento muscular e redução de estresse,
                tudo isso sem precisar levantar-se da cadeira.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Com que frequência devo praticar os exercícios?</AccordionTrigger>
              <AccordionContent>
                Recomendamos a prática diária por pelo menos 15-20 minutos. Mesmo sessões curtas regulares são mais
                benéficas do que sessões longas e esporádicas. Escute seu corpo e ajuste a intensidade conforme necessário.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>As receitas são adequadas para dietas especiais?</AccordionTrigger>
              <AccordionContent>
                Nossas receitas anti-inflamatórias podem ser adaptadas para várias necessidades dietéticas. 
                Se você tem restrições alimentares específicas, consulte as variações sugeridas em cada receita
                ou entre em contato conosco para orientações personalizadas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-8 p-4 bg-fenjes-purple/10 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Precisa de mais ajuda?</h2>
            <p className="mb-4">Entre em contato com nossa equipe de suporte:</p>
            <p className="text-fenjes-purple">suporte@fenjes.com.br</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HelpPage; 