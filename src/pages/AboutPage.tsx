import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-6">Sobre o Fenjes</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-lg mb-4">
            O Fenjes é um protocolo terapêutico digital específico para mulheres entre 35-65 anos 
            com dores crônicas e limitações de mobilidade.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-3">Nossa Missão</h2>
          <p className="mb-4">
            Proporcionar alívio e bem-estar através de técnicas terapêuticas adaptadas 
            que podem ser realizadas sem sair da cadeira.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">Nossa História</h2>
          <p className="mb-4">
            Fenjes surgiu da necessidade de oferecer soluções acessíveis para mulheres 
            que enfrentam limitações físicas diárias, mas desejam melhorar sua qualidade de vida.
          </p>
          
          <div className="mt-8">
            <Button onClick={() => navigate("/")}>Voltar para Início</Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AboutPage; 