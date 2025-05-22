
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

const OnboardingQuiz = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions = [
    {
      id: "pain_intensity",
      title: "Como você descreveria seu nível de dor no dia a dia?",
      subtitle: "Seja honesta, isso nos ajuda a personalizar sua experiência",
      type: "single",
      options: [
        { value: "low", label: "Desconforto leve (1-3)", description: "Tensão ocasional, rigidez matinal", weight: 1 },
        { value: "medium", label: "Dor moderada (4-6)", description: "Dor constante que atrapalha atividades", weight: 2 },
        { value: "high", label: "Dor intensa (7-10)", description: "Dor que limita muito meu movimento", weight: 3 }
      ]
    },
    {
      id: "primary_pain",
      title: "Onde você sente mais dor ou desconforto?",
      subtitle: "Escolha a área que mais te incomoda",
      type: "single",
      options: [
        { value: "neck", label: "Pescoço e Nuca", description: "Tensão, dor de cabeça, torcicolo", weight: 1 },
        { value: "shoulders", label: "Ombros e Braços", description: "Ombros travados, dor nos braços", weight: 1 },
        { value: "back", label: "Costas e Lombar", description: "Dor nas costas, lombar, ciático", weight: 1 },
        { value: "hips", label: "Quadril e Pernas", description: "Quadril rígido, dor nas pernas", weight: 1 },
        { value: "general", label: "Corpo Todo", description: "Dor generalizada, fibromialgia", weight: 2 }
      ]
    },
    {
      id: "mobility_level",
      title: "Como está sua mobilidade atual?",
      subtitle: "Isso nos ajuda a criar exercícios seguros para você",
      type: "single",
      options: [
        { value: "limited", label: "Bem limitada", description: "Dificuldade para me mover, levantar, agachar", weight: 3 },
        { value: "moderate", label: "Moderada", description: "Consigo me mover mas com desconforto", weight: 2 },
        { value: "good", label: "Boa", description: "Me movo bem, só sinto rigidez às vezes", weight: 1 }
      ]
    },
    {
      id: "health_conditions",
      title: "Você tem alguma dessas condições? (pode marcar várias)",
      subtitle: "Isso nos permite adaptar os exercícios com total segurança",
      type: "multiple",
      options: [
        { value: "arthritis", label: "Artrite ou Artrose", description: "", weight: 2 },
        { value: "fibromyalgia", label: "Fibromialgia", description: "", weight: 3 },
        { value: "herniated_disc", label: "Hérnia de Disco", description: "", weight: 3 },
        { value: "anxiety", label: "Ansiedade ou Estresse", description: "", weight: 1 },
        { value: "overweight", label: "Sobrepeso", description: "", weight: 1 },
        { value: "diabetes", label: "Diabetes", description: "", weight: 1 },
        { value: "none", label: "Nenhuma das anteriores", description: "", weight: 0 }
      ]
    },
    {
      id: "main_goals",
      title: "Quais são seus principais objetivos? (pode marcar várias)",
      subtitle: "Vamos focar no que é mais importante para você",
      type: "multiple",
      options: [
        { value: "pain_relief", label: "Diminuir as dores", description: "Viver sem dor constante", weight: 3 },
        { value: "mobility", label: "Melhorar mobilidade", description: "Me mover com mais facilidade", weight: 2 },
        { value: "weight_loss", label: "Perder peso", description: "Emagrecer de forma saudável", weight: 1 },
        { value: "anxiety", label: "Reduzir ansiedade", description: "Mais calma e relaxamento", weight: 1 },
        { value: "energy", label: "Ter mais energia", description: "Disposição para o dia a dia", weight: 1 },
        { value: "posture", label: "Melhorar postura", description: "Postura mais ereta e elegante", weight: 1 }
      ]
    },
    {
      id: "experience",
      title: "Qual sua experiência com exercícios?",
      subtitle: "Sem julgamentos! Queremos criar o plano perfeito para você",
      type: "single",
      options: [
        { value: "beginner", label: "Iniciante total", description: "Nunca fiz exercícios regulares", weight: 3 },
        { value: "some", label: "Já tentei algumas vezes", description: "Já fiz academia/yoga mas parei", weight: 2 },
        { value: "experienced", label: "Tenho experiência", description: "Pratico exercícios regularmente", weight: 1 }
      ]
    },
    {
      id: "age_range",
      title: "Qual sua faixa etária?",
      subtitle: "Nos ajuda a personalizar exercícios e dicas",
      type: "single",
      options: [
        { value: "25-35", label: "25-35 anos", description: "", weight: 1 },
        { value: "36-45", label: "36-45 anos", description: "", weight: 1 },
        { value: "46-55", label: "46-55 anos", description: "", weight: 2 },
        { value: "56-65", label: "56-65 anos", description: "", weight: 2 },
        { value: "65+", label: "Mais de 65 anos", description: "", weight: 3 }
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
    if (currentStep < questions.length - 1) {
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

  const progress = ((currentStep + 1) / (questions.length + 1)) * 100;

  if (profile) {
    return (
      <QuizResults 
        profile={profile} 
        onComplete={handleGoToDashboard} 
      />
    );
  }

  const currentQuestion = questions[currentStep];
  const isQuestionAnswered = currentQuestion.type === "single" 
    ? answers.some(a => a.questionId === currentQuestion.id)
    : answers.some(a => a.questionId.startsWith(currentQuestion.id + "_"));

  return (
    <div className="max-w-2xl mx-auto p-4 animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">
            Pergunta {currentStep + 1} de {questions.length}
          </span>
          <span className="text-sm font-medium text-movebem-purple">
            {Math.round(progress)}% concluído
          </span>
        </div>
        <Progress value={progress} className="h-2" />
        
        <div className="mt-4">
          <StepIndicator 
            currentStep={currentStep + 1} 
            totalSteps={questions.length} 
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
          {isSubmitting ? "Processando..." : currentStep === questions.length - 1 ? "Ver Meu Plano" : "Próxima"}
        </Button>
      </div>
    </div>
  );
};

export default OnboardingQuiz;
