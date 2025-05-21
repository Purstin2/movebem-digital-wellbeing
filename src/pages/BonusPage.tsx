
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Video, Download, Book, PlayCircle, Coffee, Lock } from "lucide-react";

const BonusPage = () => {
  const bonusContent = [
    {
      id: 1,
      title: "E-book: Guia Completo de Yoga na Cadeira",
      description: "Um guia detalhado com mais de 30 posturas explicadas passo a passo.",
      icon: <Book size={24} />,
      type: "E-book",
      format: "PDF - 15MB",
      unlocked: true,
    },
    {
      id: 2,
      title: "Meditação Guiada para Alívio de Tensão",
      description: "Áudio de 15 minutos para relaxamento profundo durante o expediente.",
      icon: <Coffee size={24} />,
      type: "Áudio",
      format: "MP3 - 12min",
      unlocked: true,
    },
    {
      id: 3,
      title: "Workshop: Ergonomia no Home Office",
      description: "Aprenda a organizar seu espaço de trabalho para prevenir dores.",
      icon: <Video size={24} />,
      type: "Vídeo",
      format: "MP4 - 24min",
      unlocked: true,
    },
    {
      id: 4,
      title: "Receitas Anti-Inflamatórias",
      description: "Coletânea de receitas para complementar sua prática.",
      icon: <FileText size={24} />,
      type: "E-book",
      format: "PDF - 8MB",
      unlocked: false,
    },
    {
      id: 5,
      title: "Técnicas Avançadas de Respiração",
      description: "Métodos respiratórios para aumentar foco e reduzir ansiedade.",
      icon: <Video size={24} />,
      type: "Vídeo",
      format: "MP4 - 18min",
      unlocked: false,
    },
    {
      id: 6,
      title: "Kit de Ferramentas Para Auto-Massagem",
      description: "Guia de uso para acessórios simples de auto-massagem.",
      icon: <FileText size={24} />,
      type: "Guia",
      format: "PDF - 6MB",
      unlocked: false,
    },
  ];

  const featuredBonus = bonusContent[0];

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="font-quicksand text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Materiais Bônus
        </h1>
        
        <p className="text-gray-600 mb-8">
          Materiais extras para complementar sua jornada de bem-estar. Novos conteúdos são desbloqueados conforme você avança no programa.
        </p>
        
        {/* Featured bonus */}
        <Card className="mb-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="bg-movebem-purple-light/30 p-6 flex items-center justify-center">
              <div className="p-4 rounded-full bg-white/80">
                {featuredBonus.icon}
              </div>
            </div>
            <div className="md:col-span-2 p-6">
              <h2 className="font-quicksand text-xl font-semibold mb-2">{featuredBonus.title}</h2>
              <div className="flex items-center text-xs text-gray-500 mb-3">
                <span className="bg-gray-100 rounded-full px-2 py-0.5 mr-2">{featuredBonus.type}</span>
                <span>{featuredBonus.format}</span>
              </div>
              <p className="text-gray-600 mb-4">{featuredBonus.description}</p>
              <Button className="bg-movebem-purple hover:bg-movebem-purple-dark">
                <Download size={18} className="mr-2" /> Baixar Material
              </Button>
            </div>
          </div>
        </Card>
        
        {/* All bonus materials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonusContent.slice(1).map((bonus) => (
            <Card key={bonus.id} className="overflow-hidden h-full">
              <div 
                className={`h-3 ${bonus.unlocked ? 'bg-movebem-purple' : 'bg-gray-300'}`}
              ></div>
              <CardHeader className="pt-5 pb-2">
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg ${bonus.unlocked ? 'bg-movebem-purple-light/30' : 'bg-gray-100'} mr-4`}>
                    {bonus.icon}
                  </div>
                  <div>
                    <CardTitle className="text-base font-quicksand mb-1">
                      {bonus.title}
                    </CardTitle>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="bg-gray-100 rounded-full px-2 py-0.5 mr-2">{bonus.type}</span>
                      <span>{bonus.format}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{bonus.description}</p>
                {bonus.unlocked ? (
                  <Button className="w-full bg-movebem-purple hover:bg-movebem-purple-dark">
                    {bonus.type === "Vídeo" ? (
                      <>
                        <PlayCircle size={18} className="mr-2" /> Assistir
                      </>
                    ) : (
                      <>
                        <Download size={18} className="mr-2" /> Baixar
                      </>
                    )}
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full" disabled>
                    <Lock size={18} className="mr-2" /> Bloqueado
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default BonusPage;
