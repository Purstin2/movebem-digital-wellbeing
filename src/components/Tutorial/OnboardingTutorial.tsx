import React, { useState } from 'react';
import { accessibilityClasses } from '@/styles/accessibility';

interface TutorialStep {
  title: string;
  description: string;
  image: string;
  action?: string;
}

const tutorialSteps: TutorialStep[] = [
  {
    title: 'Bem-vinda ao FENJES',
    description: 'Seu programa personalizado de yoga na cadeira e bem-estar.',
    image: '/images/tutorial/welcome.jpg',
    action: 'Começar'
  },
  {
    title: 'Avaliação Inicial',
    description: 'Responda algumas perguntas para personalizarmos seu programa.',
    image: '/images/tutorial/assessment.jpg',
    action: 'Fazer Avaliação'
  },
  {
    title: 'Exercícios Personalizados',
    description: 'Receba exercícios adaptados ao seu nível de dor e limitações.',
    image: '/images/tutorial/exercises.jpg',
    action: 'Ver Exercícios'
  },
  {
    title: 'Receitas Nutritivas',
    description: 'Descubra receitas que complementam seus exercícios.',
    image: '/images/tutorial/recipes.jpg',
    action: 'Explorar Receitas'
  },
  {
    title: 'Acompanhamento',
    description: 'Registre seu progresso e ajuste seu programa conforme necessário.',
    image: '/images/tutorial/progress.jpg',
    action: 'Começar Jornada'
  }
];

interface OnboardingTutorialProps {
  onComplete: () => void;
}

export const OnboardingTutorial: React.FC<OnboardingTutorialProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [hasSeenTutorial, setHasSeenTutorial] = useState(false);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setHasSeenTutorial(true);
      onComplete();
    }
  };

  const handleSkip = () => {
    setHasSeenTutorial(true);
    onComplete();
  };

  if (hasSeenTutorial) return null;

  const step = tutorialSteps[currentStep];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full mx-4 overflow-hidden shadow-xl">
        {/* Progress Bar */}
        <div className="h-2 bg-gray-100">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${((currentStep + 1) / tutorialSteps.length) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Image */}
          <div className="relative h-48 md:h-64 rounded-lg overflow-hidden mb-6">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <h2 className={`${accessibilityClasses.text.heading} text-center mb-4`}>
            {step.title}
          </h2>
          <p className={`${accessibilityClasses.text.base} text-center text-gray-600 mb-8`}>
            {step.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-4">
            <button
              onClick={handleNext}
              className={`${accessibilityClasses.touch.button} ${accessibilityClasses.text.button} w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors`}
            >
              {step.action || 'Próximo'}
            </button>
            
            {currentStep === 0 && (
              <button
                onClick={handleSkip}
                className={`${accessibilityClasses.touch.button} ${accessibilityClasses.text.button} w-full text-gray-500 hover:text-gray-700 transition-colors`}
              >
                Pular Tutorial
              </button>
            )}
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {tutorialSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentStep ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 