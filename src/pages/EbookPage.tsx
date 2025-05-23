import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  ArrowRight, 
  Brain, 
  Heart, 
  Flame, 
  Award, 
  BarChart, 
  ListTodo 
} from "lucide-react";

const EbookPage = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  
  const chapters = [
    {
      id: "introducao",
      title: "Introdução",
      icon: <BookOpen className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-lg font-medium text-fenjes-purple">
            Bem-vindo ao guia Força Mental
          </p>
          
          <p>
            Este guia foi criado para ajudá-lo a desenvolver e manter a motivação 
            necessária para completar sua jornada de bem-estar e alívio das dores.
          </p>
          
          <p>
            Ao longo dos próximos capítulos, você descobrirá técnicas cientificamente 
            comprovadas para fortalecer sua determinação, superar barreiras mentais, 
            e criar hábitos duradouros que contribuirão para sua saúde física e mental.
          </p>
          
          <div className="bg-fenjes-purple/10 p-4 rounded-md">
            <p className="font-medium">Por que a força mental é importante?</p>
            <p className="mt-2">
              A recuperação física está intrinsecamente ligada ao estado mental. 
              Quando desenvolvemos resiliência e determinação, nosso corpo responde melhor 
              aos tratamentos e práticas de bem-estar. Este guia é seu parceiro nessa jornada.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "ciencia-motivacao",
      title: "A Ciência da Motivação",
      icon: <Brain className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-lg font-medium text-fenjes-purple">
            Entendendo como funciona a motivação
          </p>
          
          <p>
            A motivação não é apenas um sentimento abstrato - ela possui bases neurológicas 
            e psicológicas bem definidas que podem ser compreendidas e influenciadas.
          </p>
          
          <h3 className="font-medium mt-6 mb-2">Os três pilares da motivação sustentável:</h3>
          
          <div className="space-y-3">
            <div className="bg-white p-3 rounded shadow-sm border">
              <p className="font-medium">1. Autonomia</p>
              <p className="text-sm text-gray-600">
                Sentir que você está no controle de suas escolhas aumenta significativamente 
                a motivação intrínseca. Defina seus próprios objetivos dentro do programa.
              </p>
            </div>
            
            <div className="bg-white p-3 rounded shadow-sm border">
              <p className="font-medium">2. Domínio</p>
              <p className="text-sm text-gray-600">
                A sensação de progressão e melhoria das habilidades é um poderoso motivador. 
                Celebre até os pequenos avanços em sua prática diária.
              </p>
            </div>
            
            <div className="bg-white p-3 rounded shadow-sm border">
              <p className="font-medium">3. Propósito</p>
              <p className="text-sm text-gray-600">
                Conectar suas ações a um objetivo maior torna a motivação mais resistente 
                a obstáculos. Lembre-se sempre do motivo pelo qual você começou.
              </p>
            </div>
          </div>
          
          <p className="mt-6">
            Os neurotransmissores dopamina e serotonina desempenham papéis cruciais nos sistemas 
            de recompensa do cérebro. Atividades que você aprecia naturalmente, mesmo pequenas, 
            antes ou depois dos exercícios, podem ajudar a associar sentimentos positivos à sua prática.
          </p>
        </div>
      )
    },
    {
      id: "barreiras-mentais",
      title: "Superando Barreiras",
      icon: <Flame className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-lg font-medium text-fenjes-purple">
            Identificando e superando barreiras mentais
          </p>
          
          <p>
            Os obstáculos psicológicos muitas vezes são mais desafiadores que os físicos. 
            Reconhecê-los é o primeiro passo para superá-los.
          </p>
          
          <div className="bg-fenjes-cream p-4 rounded-md mb-6">
            <h3 className="font-medium mb-2">Barreiras comuns e como superá-las:</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium text-fenjes-purple">Perfeccionismo</p>
                <p className="text-sm">
                  <strong>Sintomas:</strong> Desistir quando não consegue fazer perfeitamente, 
                  desmotivação após falhas.
                </p>
                <p className="text-sm">
                  <strong>Solução:</strong> Adote a mentalidade de progressão, não de perfeição. 
                  Um exercício feito com pequenas imperfeições ainda é infinitamente melhor que 
                  nenhum exercício.
                </p>
              </div>
              
              <div>
                <p className="font-medium text-fenjes-purple">Comparação com outros</p>
                <p className="text-sm">
                  <strong>Sintomas:</strong> Desencorajamento ao comparar seu progresso com 
                  outras pessoas.
                </p>
                <p className="text-sm">
                  <strong>Solução:</strong> Compare-se apenas com você mesmo do passado. 
                  Cada corpo é único, com suas limitações e potencialidades.
                </p>
              </div>
              
              <div>
                <p className="font-medium text-fenjes-purple">Pensamento Tudo-ou-Nada</p>
                <p className="text-sm">
                  <strong>Sintomas:</strong> Desistir da jornada inteira após falhar em um dia.
                </p>
                <p className="text-sm">
                  <strong>Solução:</strong> Entenda que o caminho não é linear. Um dia menos 
                  produtivo não invalida seu progresso geral. Retorne à rotina sem culpa.
                </p>
              </div>
            </div>
          </div>
          
          <p className="italic border-l-4 border-fenjes-purple pl-3 text-gray-600">
            "A persistência é o caminho do êxito." — Charles Chaplin
          </p>
          
          <p className="mt-4">
            Lembre-se de que sentir resistência é normal e parte do processo. 
            Reconhecer esses padrões mentais permite que você os observe e escolha 
            conscientemente como responder a eles, em vez de reagir automaticamente.
          </p>
        </div>
      )
    },
    {
      id: "habitos-duradouros",
      title: "Construindo Hábitos",
      icon: <ListTodo className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-lg font-medium text-fenjes-purple">
            Formando hábitos duradouros
          </p>
          
          <p>
            A verdadeira transformação acontece quando a prática se torna um hábito natural, 
            não dependendo apenas de motivação momentânea.
          </p>
          
          <h3 className="font-medium mt-6 mb-2">O ciclo de hábitos comprovado cientificamente:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white p-4 rounded shadow-sm border">
              <div className="font-medium text-fenjes-purple mb-1 flex items-center">
                <div className="bg-fenjes-purple text-white h-6 w-6 rounded-full flex items-center justify-center text-sm mr-2">1</div>
                Gatilho
              </div>
              <p className="text-sm text-gray-600">
                Um sinal que inicia o comportamento. Escolha um horário fixo ou uma atividade 
                existente para ancorar sua prática.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded shadow-sm border">
              <div className="font-medium text-fenjes-purple mb-1 flex items-center">
                <div className="bg-fenjes-purple text-white h-6 w-6 rounded-full flex items-center justify-center text-sm mr-2">2</div>
                Rotina
              </div>
              <p className="text-sm text-gray-600">
                O comportamento em si. Seus exercícios diários. Comece com sessões curtas 
                e aumente gradualmente.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded shadow-sm border">
              <div className="font-medium text-fenjes-purple mb-1 flex items-center">
                <div className="bg-fenjes-purple text-white h-6 w-6 rounded-full flex items-center justify-center text-sm mr-2">3</div>
                Recompensa
              </div>
              <p className="text-sm text-gray-600">
                O benefício que você obtém. Note como se sente após a prática e celebre 
                conscientemente essa sensação.
              </p>
            </div>
          </div>
          
          <h3 className="font-medium mt-6 mb-2">Dicas práticas para estabelecer hábitos:</h3>
          
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>A regra dos 2 minutos:</strong> Comece com versões ultrassimplificadas do hábito que levem apenas 2 minutos.</li>
            <li><strong>Preparação de ambiente:</strong> Deixe tudo pronto para sua prática do dia seguinte na noite anterior.</li>
            <li><strong>Rastreamento visual:</strong> Marque um calendário ou use o sistema de acompanhamento do app para visualizar sua constância.</li>
            <li><strong>Micro-compromissos:</strong> Comprometa-se a fazer apenas 5 minutos. Uma vez iniciado, é provável que continue.</li>
          </ul>
          
          <div className="bg-fenjes-purple/10 p-4 rounded-md mt-4">
            <p className="font-medium">Lembre-se:</p>
            <p className="mt-2">
              Pesquisas mostram que são necessários em média 66 dias para formar um hábito automático, 
              com variação de 18 a 254 dias. Seu programa de 21 dias é apenas o começo da jornada.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "autocuidado",
      title: "Autocuidado Mental",
      icon: <Heart className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-lg font-medium text-fenjes-purple">
            Práticas de autocuidado para a mente
          </p>
          
          <p>
            Assim como seu corpo precisa de cuidados, sua mente também necessita 
            de atenção e nutrição para manter a motivação e equilíbrio.
          </p>
          
          <div className="bg-fenjes-cream p-4 rounded-md mb-4">
            <h3 className="font-medium mb-2">Práticas diárias recomendadas:</h3>
            
            <div className="space-y-3">
              <div>
                <p className="font-medium text-fenjes-purple">Mindfulness (5 minutos)</p>
                <p className="text-sm">
                  Dedique alguns minutos para estar plenamente presente, observando 
                  sensações físicas e pensamentos sem julgamento.
                </p>
              </div>
              
              <div>
                <p className="font-medium text-fenjes-purple">Gratidão (3 minutos)</p>
                <p className="text-sm">
                  Reflita sobre três coisas pelas quais você é grato hoje, incluindo 
                  avanços em sua jornada de bem-estar.
                </p>
              </div>
              
              <div>
                <p className="font-medium text-fenjes-purple">Desconexão digital (30 minutos)</p>
                <p className="text-sm">
                  Reserve um período diário sem telas para reduzir o estresse e 
                  melhorar a qualidade do sono.
                </p>
              </div>
            </div>
          </div>
          
          <h3 className="font-medium mt-6 mb-2">Como lidar com dias difíceis:</h3>
          
          <p>
            Mesmo com toda motivação, haverá dias em que você se sentirá cansado ou 
            desmotivado. Nesses momentos:
          </p>
          
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Prática gentil:</strong> Opte por uma versão mais suave dos exercícios.</li>
            <li><strong>Permissão para descansar:</strong> Às vezes, um dia de descanso intencional é necessário.</li>
            <li><strong>Autocompaixão:</strong> Fale consigo mesmo como falaria com um amigo querido que está passando por dificuldades.</li>
            <li><strong>Reavalie expectativas:</strong> Modifique temporariamente suas metas se necessário.</li>
          </ul>
          
          <div className="italic border-l-4 border-fenjes-purple pl-3 text-gray-600 mt-4">
            "O autocuidado não é autoindulgência, é autopreservação." — Audre Lorde
          </div>
          
          <p className="mt-4">
            Lembre-se de que o autocuidado mental não é um luxo, mas uma necessidade 
            para sustentabilidade a longo prazo em qualquer jornada de transformação.
          </p>
        </div>
      )
    },
    {
      id: "progresso",
      title: "Medindo Progresso",
      icon: <BarChart className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-lg font-medium text-fenjes-purple">
            Acompanhando e celebrando seu progresso
          </p>
          
          <p>
            Medir seu progresso não só fornece informações valiosas sobre sua evolução, 
            mas também atua como um poderoso motivador ao tornar visíveis os resultados 
            de seus esforços.
          </p>
          
          <h3 className="font-medium mt-6 mb-2">Métricas além da dor:</h3>
          
          <div className="bg-white rounded shadow-sm border p-4 space-y-3">
            <p>
              Embora a redução da dor seja um objetivo importante, há muitos outros 
              indicadores de progresso que você pode acompanhar:
            </p>
            
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Amplitude de movimento</strong> - Consegue alcançar mais longe?</li>
              <li><strong>Duração do exercício</strong> - Consegue praticar por mais tempo?</li>
              <li><strong>Recuperação</strong> - Seu corpo se recupera mais rapidamente após atividades?</li>
              <li><strong>Energia diária</strong> - Está experimentando mais vitalidade?</li>
              <li><strong>Qualidade do sono</strong> - Seu sono está mais profundo e reparador?</li>
              <li><strong>Estado de humor</strong> - Está mais equilibrado emocionalmente?</li>
            </ul>
          </div>
          
          <h3 className="font-medium mt-6 mb-2">A importância de celebrar pequenas vitórias:</h3>
          
          <p>
            A neurociência mostra que celebrar pequenas conquistas libera dopamina, 
            que não apenas gera sensação de prazer, mas também consolida os circuitos 
            neurais envolvidos no novo comportamento.
          </p>
          
          <div className="bg-fenjes-cream p-4 rounded-md mt-4">
            <p className="font-medium">Dicas para celebrar seu progresso:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Mantenha um "diário de vitórias" onde registra todos os avanços, por menores que sejam</li>
              <li>Compartilhe seus marcos com alguém que apoia sua jornada</li>
              <li>Crie pequenas recompensas não alimentares para marcos específicos</li>
              <li>Tire "fotos de progresso" de sua postura e mobilidade</li>
              <li>Reconheça seu esforço e persistência, não apenas os resultados</li>
            </ul>
          </div>
          
          <p className="mt-4">
            Lembre-se: o progresso raramente é linear. Haverá plateaus e até mesmo 
            retrocessos temporários. Isso faz parte do processo natural de transformação 
            e não deve desencorajá-lo.
          </p>
        </div>
      )
    },
    {
      id: "comunidade",
      title: "O Poder da Comunidade",
      icon: <Award className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-lg font-medium text-fenjes-purple">
            Aproveitando o suporte social
          </p>
          
          <p>
            Estudos mostram que as pessoas têm 95% mais chance de completar um objetivo 
            de saúde quando contam com alguma forma de suporte social. A comunidade pode 
            ser um recurso poderoso em sua jornada.
          </p>
          
          <div className="bg-white rounded shadow-sm border p-4 mb-6">
            <h3 className="font-medium mb-2">Como encontrar apoio:</h3>
            
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Comunidade Fenjes:</strong> Utilize os recursos comunitários disponíveis na plataforma.</li>
              <li><strong>Parceiro de responsabilidade:</strong> Encontre alguém com objetivos similares e façam check-ins regulares.</li>
              <li><strong>Apoio familiar:</strong> Comunique suas intenções a seus familiares e peça apoio específico.</li>
              <li><strong>Grupos online:</strong> Existem diversas comunidades de bem-estar e alívio de dores nas redes sociais.</li>
            </ul>
          </div>
          
          <h3 className="font-medium mt-6 mb-2">Apoio efetivo vs. contraproducente:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded">
              <p className="font-medium text-green-700 mb-2">Apoio efetivo</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Validar seu esforço e progresso</li>
                <li>Oferecer encorajamento específico</li>
                <li>Respeitar sua autonomia</li>
                <li>Comemorar suas vitórias</li>
                <li>Praticar escuta ativa quando você compartilha desafios</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded">
              <p className="font-medium text-red-700 mb-2">Apoio contraproducente</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Críticas e julgamentos</li>
                <li>"Sabotagem" (mesmo que bem-intencionada)</li>
                <li>Minimizar seus desafios</li>
                <li>Comparações com outras pessoas</li>
                <li>Conselhos não solicitados sobre "curas milagrosas"</li>
              </ul>
            </div>
          </div>
          
          <p className="mt-4">
            É importante comunicar às pessoas ao seu redor qual tipo de apoio você 
            precisa. Muitas vezes, as pessoas querem ajudar mas não sabem como.
          </p>
          
          <div className="bg-fenjes-purple/10 p-4 rounded-md mt-4">
            <p className="font-medium">Uma nota sobre inspiração:</p>
            <p className="mt-2">
              Encontrar histórias inspiradoras de pessoas que superaram desafios similares 
              pode ser extremamente motivador. Procure por testemunhos, documentários ou 
              livros que ressoem com sua jornada pessoal.
            </p>
          </div>
        </div>
      )
    }
  ];
  
  const nextChapter = () => {
    if (activeChapter < chapters.length - 1) {
      setActiveChapter(activeChapter + 1);
    }
  };
  
  const previousChapter = () => {
    if (activeChapter > 0) {
      setActiveChapter(activeChapter - 1);
    }
  };
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-6">
        <header className="mb-6">
          <div className="flex items-center mb-2">
            <div className="bg-fenjes-purple/10 text-fenjes-purple p-2 rounded-lg mr-3">
              <BookOpen size={24} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              E-book: Força Mental
            </h1>
          </div>
          <p className="text-gray-600">
            Um guia para manter a motivação em sua jornada de bem-estar e alívio de dores
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Capítulos</CardTitle>
                </CardHeader>
                <CardContent className="px-2 py-0">
                  <nav className="space-y-1">
                    {chapters.map((chapter, index) => (
                      <Button
                        key={chapter.id}
                        variant={activeChapter === index ? "default" : "ghost"}
                        className={`w-full justify-start ${activeChapter === index ? "bg-fenjes-purple" : ""}`}
                        onClick={() => setActiveChapter(index)}
                      >
                        <span className="mr-2">{chapter.icon}</span>
                        <span>{chapter.title}</span>
                      </Button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-3">
            <Card>
              <CardHeader className="pb-3 border-b">
                <CardTitle>{chapters[activeChapter].title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {chapters[activeChapter].content}
              </CardContent>
              
              <div className="p-4 flex justify-between items-center border-t">
                <Button
                  variant="outline"
                  onClick={previousChapter}
                  disabled={activeChapter === 0}
                >
                  Anterior
                </Button>
                
                <div className="text-sm text-gray-500">
                  {activeChapter + 1} de {chapters.length}
                </div>
                
                <Button
                  onClick={nextChapter}
                  disabled={activeChapter === chapters.length - 1}
                  className="bg-fenjes-purple hover:bg-fenjes-purple-dark"
                >
                  Próximo <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </Card>
            
            {/* Barra de progresso */}
            <div className="mt-6 bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Seu progresso</h3>
                <span className="text-sm text-gray-500">
                  {Math.round(((activeChapter + 1) / chapters.length) * 100)}% completo
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-fenjes-purple rounded-full"
                  style={{width: `${((activeChapter + 1) / chapters.length) * 100}%`}}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default EbookPage; 