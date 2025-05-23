import React, { useState } from 'react';

interface TutorialStep {
  title: string;
  description: string;
  image?: string;
  tips: string[];
}

const tutorialSteps: TutorialStep[] = [
  {
    title: 'Bem-vindo ao FENJES',
    description: 'Seu programa personalizado de yoga na cadeira e bem-estar.',
    image: '/images/tutorial/welcome.jpg',
    tips: [
      'Navegue pelo menu principal',
      'Explore as diferentes seções',
      'Configure suas preferências'
    ]
  },
  {
    title: 'Avaliação Inicial',
    description: 'Responda algumas perguntas para personalizar sua experiência.',
    image: '/images/tutorial/assessment.jpg',
    tips: [
      'Seja honesto sobre suas limitações',
      'Indique seu nível de dor (1-10)',
      'Mencione condições médicas relevantes'
    ]
  },
  {
    title: 'Escolhendo Exercícios',
    description: 'Selecione exercícios adequados ao seu nível e condição.',
    image: '/images/tutorial/exercises.jpg',
    tips: [
      'Comece pelo nível iniciante',
      'Leia as contraindicações',
      'Siga as adaptações sugeridas'
    ]
  },
  {
    title: 'Preparando Receitas',
    description: 'Explore receitas personalizadas para seu bem-estar.',
    image: '/images/tutorial/recipes.jpg',
    tips: [
      'Verifique os ingredientes antecipadamente',
      'Siga as dicas de personalização',
      'Observe interações com medicamentos'
    ]
  }
];

interface TutorialProps {
  onComplete?: () => void;
}

export const Tutorial: React.FC<TutorialProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (onComplete) {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = tutorialSteps[currentStep];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Tutorial</h2>
          <p className="text-gray-600">
            Passo {currentStep + 1} de {tutorialSteps.length}
          </p>
        </div>

        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / tutorialSteps.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
        <p className="text-gray-700 mb-6">{step.description}</p>

        {step.image && (
          <div className="mb-6">
            <img 
              src={step.image} 
              alt={step.title}
              className="w-full rounded-lg"
            />
          </div>
        )}

        <div className="mb-6">
          <h4 className="font-medium mb-3">Dicas Importantes:</h4>
          <ul className="space-y-2">
            {step.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={`px-6 py-2 rounded-lg ${
            currentStep === 0
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
          }`}
        >
          Anterior
        </button>

        <button
          onClick={handleNext}
          className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          {currentStep === tutorialSteps.length - 1 ? 'Concluir' : 'Próximo'}
        </button>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          Precisa de ajuda? Entre em contato com nosso suporte através do email: suporte@fenjes.com
        </p>
      </div>
    </div>
  );
}; 