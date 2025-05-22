
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Heart, Zap } from "lucide-react";
import { UserProfile } from "@/types/onboarding";
import { useState, useEffect } from "react";
import { GlassCard } from "@/components/ui/glass-card";

interface QuizResultsProps {
  profile: UserProfile;
  onComplete: () => void;
}

const QuizResults = ({ profile, onComplete }: QuizResultsProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    setIsAnimating(true);
  }, []);

  const trackInfo = {
    therapeutic: {
      title: "Trilha da Cura Suave",
      description: "Foco total em alívio de dor e recuperação",
      icon: <Heart className="text-red-500" />,
      color: "bg-red-50 border-red-200"
    },
    adaptive: {
      title: "Trilha do Renascimento", 
      description: "Exercícios seguros com progressão gradual",
      icon: <CheckCircle2 className="text-blue-500" />,
      color: "bg-blue-50 border-blue-200"
    },
    wellness: {
      title: "Trilha da Vitalidade",
      description: "Fortalecimento e prevenção",
      icon: <Zap className="text-green-500" />,
      color: "bg-green-50 border-green-200"
    }
  };

  const track = trackInfo[profile.trackAssigned || 'adaptive' as keyof typeof trackInfo];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <GlassCard className="mb-6 overflow-hidden animate-fade-in">
        <div className="h-2 bg-fenjes-purple"></div>
        <CardHeader className="text-center">
          <div className={`
            w-24 h-24 mx-auto mb-4 
            bg-fenjes-purple-light 
            rounded-full flex items-center justify-center
            ${isAnimating ? 'animate-scale-in' : ''}
          `}>
            <CheckCircle2 className="w-12 h-12 text-fenjes-purple" />
          </div>
          <CardTitle className="text-2xl font-quicksand text-fenjes-text-warm">
            ✨ Sua Jornada de Libertação Está Pronta!
          </CardTitle>
          <p className="text-gray-600">
            Baseado nas suas respostas, criamos um programa específico para você
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className={`
            p-4 rounded-lg border-2 ${track.color} 
            transform transition-all duration-500 
            ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            <div className="flex items-center gap-3 mb-2">
              {track.icon}
              <h3 className="text-lg font-semibold">💜 {track.title}</h3>
            </div>
            <p className="text-gray-700">{track.description}</p>
          </div>

          <div className={`
            grid grid-cols-2 gap-4
            transform transition-all duration-500 delay-100
            ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-2xl font-bold text-fenjes-purple">21</div>
              <div className="text-sm text-gray-600">Dias de transformação</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-2xl font-bold text-fenjes-purple">5-15</div>
              <div className="text-sm text-gray-600">Min de autocuidado</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className={`
              p-4 bg-fenjes-purple-light/20 rounded-lg
              transform transition-all duration-500 delay-200
              ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `}>
              <h4 className="font-medium text-fenjes-text-warm mb-2">Seu perfil de saúde:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-fenjes-purple rounded-full"></span>
                  <span>Nível de dor: {profile.painLevel === 'high' ? 'Alto' : profile.painLevel === 'medium' ? 'Moderado' : 'Baixo'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-fenjes-purple rounded-full"></span>
                  <span>Área principal: {
                    {
                      'neck': 'Pescoço', 
                      'shoulders': 'Ombros', 
                      'back': 'Costas', 
                      'hips': 'Quadril', 
                      'general': 'Geral'
                    }[profile.primaryPain]
                  }</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-fenjes-purple rounded-full"></span>
                  <span>Experiência: {
                    {
                      'beginner': 'Iniciante', 
                      'some': 'Alguma experiência', 
                      'experienced': 'Experiente'
                    }[profile.experience]
                  }</span>
                </li>
              </ul>
            </div>

            <Button 
              onClick={onComplete} 
              className={`
                w-full bg-gradient-to-r from-fenjes-yellow to-fenjes-yellow-dark
                text-fenjes-text-warm font-medium
                transform transition-all duration-500 delay-300 hover:scale-105
                ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              `}
            >
              ✨ Começar Minha Transformação Agora
            </Button>
          </div>
        </CardContent>
      </GlassCard>
    </div>
  );
};

export default QuizResults;
