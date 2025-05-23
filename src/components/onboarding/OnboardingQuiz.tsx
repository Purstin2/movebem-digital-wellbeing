import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Heart, Zap } from "lucide-react";
import { StepIndicator } from "@/components/ui/step-indicator";
import { useToast } from "@/hooks/use-toast";
import { QuizAnswer, UserProfile } from "@/types/onboarding";
import QuizResults from "./QuizResults";
import { QuizQuestion } from "@/types/quiz";
import { ChairYogaProfile } from "@/types/chair-yoga";

const OnboardingQuiz = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const quizQuestions: QuizQuestion[] = [
    {
      id: "pain_intensity",
      title: "Em uma escala de 1 a 10, qual é sua dor atual?",
      subtitle: "1 = sem dor, 10 = dor extrema",
      type: "slider",
      options: Array.from({length: 10}, (_, i) => ({
        value: String(i + 1),
        label: String(i + 1),
        description: i === 0 ? "Sem dor" : i === 9 ? "Dor extrema" : ""
      }))
    },
    {
      id: "pain_locations",
      title: "Onde você sente dor? (selecione todas que se aplicam)",
      subtitle: "Isso nos ajuda a personalizar seus exercícios",
      type: "multiple",
      options: [
        { value: "neck", label: "Pescoço", description: "Região cervical" },
        { value: "shoulders", label: "Ombros", description: "Incluindo escápulas" },
        { value: "upper_back", label: "Parte superior das costas", description: "Região torácica" },
        { value: "lower_back", label: "Parte inferior das costas", description: "Região lombar" },
        { value: "hips", label: "Quadril", description: "Incluindo região pélvica" },
        { value: "knees", label: "Joelhos", description: "Articulação do joelho" },
        { value: "general", label: "Dor generalizada", description: "Múltiplas áreas" }
      ]
    },
    {
      id: "pain_frequency",
      title: "Com que frequência você sente dor?",
      subtitle: "Escolha a opção que melhor descreve sua situação",
      type: "single",
      options: [
        { value: "constant", label: "Constante", description: "Presente a maior parte do tempo" },
        { value: "intermittent", label: "Intermitente", description: "Vai e volta durante o dia" },
        { value: "occasional", label: "Ocasional", description: "Alguns dias da semana" }
      ]
    },
    {
      id: "pain_triggers",
      title: "O que costuma piorar sua dor?",
      subtitle: "Selecione todos que se aplicam",
      type: "multiple",
      options: [
        { value: "sitting", label: "Sentar por muito tempo", description: "" },
        { value: "standing", label: "Ficar em pé", description: "" },
        { value: "movement", label: "Certos movimentos", description: "" },
        { value: "stress", label: "Estresse/Ansiedade", description: "" },
        { value: "weather", label: "Mudança de clima", description: "" },
        { value: "sleep", label: "Dormir mal", description: "" }
      ]
    },
    {
      id: "mobility_limitations",
      title: "Quais movimentos são difíceis para você?",
      subtitle: "Isso nos ajuda a adaptar os exercícios",
      type: "multiple",
      options: [
        { value: "neck_rotation", label: "Girar o pescoço", description: "" },
        { value: "arm_raising", label: "Levantar os braços", description: "" },
        { value: "bending", label: "Curvar-se para frente", description: "" },
        { value: "twisting", label: "Fazer rotação do tronco", description: "" },
        { value: "hip_movement", label: "Movimentar o quadril", description: "" }
      ]
    },
    {
      id: "health_conditions",
      title: "Você tem alguma dessas condições?",
      subtitle: "Selecione todas que se aplicam",
      type: "multiple",
      options: [
        { value: "arthritis", label: "Artrite/Artrose", description: "Inflamação articular" },
        { value: "osteoporosis", label: "Osteoporose", description: "Fragilidade óssea" },
        { value: "fibromyalgia", label: "Fibromialgia", description: "Dor crônica" },
        { value: "herniated_disc", label: "Hérnia de Disco", description: "Problema na coluna" },
        { value: "hypertension", label: "Hipertensão", description: "Pressão alta" },
        { value: "diabetes", label: "Diabetes", description: "Tipo 1 ou 2" },
        { value: "none", label: "Nenhuma das anteriores", description: "" }
      ]
    },
    {
      id: "experience_level",
      title: "Qual sua experiência com exercícios?",
      subtitle: "Seja sincero - vamos começar no nível certo",
      type: "single",
      options: [
        { value: "beginner", label: "Iniciante", description: "Primeira vez ou retornando" },
        { value: "intermediate", label: "Intermediário", description: "Pratica ocasionalmente" },
        { value: "advanced", label: "Avançado", description: "Pratica regularmente" }
      ]
    },
    {
      id: "preferences",
      title: "Preferências de acessibilidade",
      subtitle: "Personalize sua experiência",
      type: "multiple",
      options: [
        { value: "high_contrast", label: "Alto Contraste", description: "Melhor visibilidade" },
        { value: "large_text", label: "Texto Grande", description: "Facilita leitura" },
        { value: "reduced_motion", label: "Reduzir Animações", description: "Menos movimento na tela" },
        { value: "sound_off", label: "Desativar Sons", description: "Modo silencioso" }
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: string, weight: number) => {
    const newAnswer = { questionId, value, weight };
    setAnswers(prev => prev.filter(a => a.questionId !== questionId).concat(newAnswer));
  };

  const handleMultipleAnswer = (questionId: string, value: string, weight: number, checked: boolean) => {
    if (checked) {
      const newAnswer = { questionId: `${questionId}_${value}`, value, weight };
      setAnswers(prev => prev.concat(newAnswer));
    } else {
      setAnswers(prev => prev.filter(a => a.questionId !== `${questionId}_${value}`));
    }
  };

  const generateProfile = (): UserProfile => {
    const painAnswer = answers.find(a => a.questionId === "pain_intensity");
    const primaryPainAnswer = answers.find(a => a.questionId === "primary_pain");
    const mobilityAnswer = answers.find(a => a.questionId === "mobility_level");
    const ageAnswer = answers.find(a => a.questionId === "age_range");
    const experienceAnswer = answers.find(a => a.questionId === "experience");
    
    const goals = answers
      .filter(a => a.questionId.startsWith("main_goals_"))
      .map(a => a.value);
    
    const conditions = answers
      .filter(a => a.questionId.startsWith("health_conditions_"))
      .map(a => a.value)
      .filter(condition => condition !== 'none');

    // Calculate the recommended track
    const totalWeight = conditions.length * 2 + 
      (painAnswer?.value === 'high' ? 3 : painAnswer?.value === 'medium' ? 2 : 1) +
      (mobilityAnswer?.value === 'limited' ? 3 : mobilityAnswer?.value === 'moderate' ? 2 : 1);

    let recommendedTrack: 'therapeutic' | 'adaptive' | 'wellness' = 'wellness';
    if (totalWeight >= 8) recommendedTrack = "therapeutic";
    else if (totalWeight >= 5) recommendedTrack = "adaptive";
    
    return {
      painLevel: (painAnswer?.value as any) || 'medium',
      primaryPain: (primaryPainAnswer?.value as any) || 'back',
      mobilityLevel: (mobilityAnswer?.value as any) || 'moderate',
      goals,
      age: ageAnswer?.value || '36-45',
      conditions,
      experience: (experienceAnswer?.value as any) || 'beginner',
      trackAssigned: recommendedTrack,
      currentDay: 1,
      startDate: new Date(),
      preferences: {
        soundEnabled: true,
        reminderTime: '09:00',
        adaptationLevel: 'normal'
      }
    };
  };

  const nextStep = () => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitting(true);
      try {
        const newProfile = generateProfile();
        // Here you would typically save to a database
        console.log("Generated profile:", newProfile);
        
        setProfile(newProfile);
        
        // For now just store in sessionStorage as an example
        sessionStorage.setItem('userProfile', JSON.stringify(newProfile));
        
        toast({
          title: "Perfil criado com sucesso!",
          description: "Seu programa personalizado está pronto.",
        });
      } catch (error) {
        console.error("Error generating profile:", error);
        toast({
          title: "Erro ao criar perfil",
          description: "Tente novamente em alguns instantes.",
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGoToDashboard = () => {
    navigate('/');
  };

  const progress = ((currentStep + 1) / (quizQuestions.length + 1)) * 100;

  if (profile) {
    return (
      <QuizResults 
        profile={profile} 
        onComplete={handleGoToDashboard} 
      />
    );
  }

  const currentQuestion = quizQuestions[currentStep];
  const isQuestionAnswered = currentQuestion.type === "single" 
    ? answers.some(a => a.questionId === currentQuestion.id)
    : answers.some(a => a.questionId.startsWith(currentQuestion.id + "_"));

  return (
    <div className="max-w-2xl mx-auto p-4 animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">
            Pergunta {currentStep + 1} de {quizQuestions.length}
          </span>
          <span className="text-sm font-medium text-movebem-purple">
            {Math.round(progress)}% concluído
          </span>
        </div>
        <Progress value={progress} className="h-2" />
        
        <div className="mt-4">
          <StepIndicator 
            currentStep={currentStep + 1} 
            totalSteps={quizQuestions.length} 
            onStepClick={(step) => setCurrentStep(step - 1)}
          />
        </div>
      </div>

      <Card className="mb-8 hover:shadow-md transition-shadow">
        <CardHeader className="text-center border-b bg-movebem-purple-light/10">
          <CardTitle className="text-xl font-quicksand text-gray-800">
            {currentQuestion.title}
          </CardTitle>
          {currentQuestion.subtitle && (
            <p className="text-gray-600 text-sm">{currentQuestion.subtitle}</p>
          )}
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          {currentQuestion.type === "single" ? (
            <RadioGroup
              value={answers.find(a => a.questionId === currentQuestion.id)?.value || ""}
              onValueChange={(value) => {
                const option = currentQuestion.options.find(o => o.value === value);
                if (option) {
                  handleAnswer(currentQuestion.id, value, option.weight);
                }
              }}
            >
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <div 
                    key={option.value} 
                    className="flex items-start space-x-3 p-3 rounded-lg border transition-all hover:border-movebem-purple/50 hover:bg-gray-50"
                  >
                    <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                      <div className="font-medium text-gray-800">{option.label}</div>
                      {option.description && (
                        <div className="text-sm text-gray-500 mt-1">{option.description}</div>
                      )}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          ) : (
            <div className="space-y-3">
              {currentQuestion.options.map((option) => {
                const isChecked = answers.some(a => a.questionId === `${currentQuestion.id}_${option.value}`);
                
                return (
                  <div 
                    key={option.value} 
                    className={`flex items-start space-x-3 p-3 rounded-lg border transition-all hover:border-movebem-purple/50 hover:bg-gray-50 ${isChecked ? 'bg-movebem-purple-light/20 border-movebem-purple/50' : ''}`}
                  >
                    <input
                      type="checkbox"
                      id={option.value}
                      className="mt-1"
                      checked={isChecked}
                      onChange={(e) => handleMultipleAnswer(
                        currentQuestion.id, 
                        option.value, 
                        option.weight, 
                        e.target.checked
                      )}
                    />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                      <div className="font-medium text-gray-800">{option.label}</div>
                      {option.description && (
                        <div className="text-sm text-gray-500 mt-1">{option.description}</div>
                      )}
                    </Label>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={previousStep}
          disabled={currentStep === 0}
          className="hover:bg-gray-100 transition-colors"
        >
          Anterior
        </Button>
        <Button
          onClick={nextStep}
          className="bg-movebem-purple hover:bg-movebem-purple-dark transition-all hover:scale-105"
          disabled={!isQuestionAnswered || isSubmitting}
        >
          {isSubmitting ? "Processando..." : currentStep === quizQuestions.length - 1 ? "Ver Meu Plano" : "Próxima"}
        </Button>
      </div>
    </div>
  );
};

export default OnboardingQuiz;
