import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-fenjes-purple mb-4">
            Fenjes - Bem-estar Digital
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Sua jornada para uma vida com menos dor começa aqui. Escolha abaixo por onde deseja começar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Chair Yoga Card */}
          <Card className="overflow-hidden bg-gradient-to-br from-fenjes-purple/5 to-fenjes-purple/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <div className="p-6 flex flex-col h-full">
                <div className="text-5xl mb-4">💺</div>
                <h2 className="text-2xl font-bold text-fenjes-purple mb-2">
                  Yoga na Cadeira
                </h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  Exercícios terapêuticos que podem ser realizados sentada, projetados para mulheres com limitações de mobilidade.
                </p>
                <Button 
                  className="w-full bg-fenjes-purple hover:bg-fenjes-purple-light"
                  onClick={() => navigate("/chair-yoga")}
                >
                  Começar Yoga na Cadeira
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Nutrition Card */}
          <Card className="overflow-hidden bg-gradient-to-br from-fenjes-green/5 to-fenjes-green/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <div className="p-6 flex flex-col h-full">
                <div className="text-5xl mb-4">🍽️</div>
                <h2 className="text-2xl font-bold text-fenjes-green mb-2">
                  Nutrição Anti-inflamatória
                </h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  Receitas personalizadas para reduzir inflamação e dores crônicas através da alimentação.
                </p>
                <Button 
                  className="w-full bg-fenjes-green hover:opacity-90"
                  onClick={() => navigate("/nutrition")}
                >
                  Explorar Receitas
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-fenjes-purple mb-4">
            Sobre o Fenjes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            O Fenjes é um protocolo terapêutico digital específico para mulheres entre 35-65 anos com dores crônicas
            e limitações de mobilidade. Nossa missão é proporcionar alívio e bem-estar sem sair da cadeira.
          </p>
          <Button 
            variant="outline" 
            onClick={() => navigate("/sobre")}
          >
            Conheça Nossa História
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default HomePage; 