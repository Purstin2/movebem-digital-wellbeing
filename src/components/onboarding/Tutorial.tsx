import React from 'react';
import { motion } from 'framer-motion';

interface TutorialStep {
  title: string;
  description: string;
  icon: string;
  tips: string[];
}

const tutorialSteps: TutorialStep[] = [
  {
    title: 'Bem-vinda ao FENJES',
    description: 'Seu programa personalizado de yoga na cadeira e bem-estar.',
    icon: '🧘‍♀️',
    tips: [
      'Programa adaptado ao seu perfil',
      'Exercícios seguros e progressivos',
      'Receitas nutritivas personalizadas'
    ]
  },
  {
    title: 'Avaliação Inicial',
    description: 'Vamos conhecer suas necessidades e limitações.',
    icon: '📋',
    tips: [
      'Informe seu nível de dor (1-10)',
      'Descreva suas limitações específicas',
      'Compartilhe condições médicas relevantes'
    ]
  },
  {
    title: 'Escolha sua Trilha',
    description: 'Selecione o programa mais adequado para você.',
    icon: '🛣️',
    tips: [
      'Terapêutica: Para dores severas/crônicas',
      'Adaptativa: Para limitações moderadas',
      'Wellness: Para prevenção e bem-estar'
    ]
  },
  {
    title: 'Pratique com Segurança',
    description: 'Dicas importantes para sua jornada.',
    icon: '🛡️',
    tips: [
      'Siga as adaptações recomendadas',
      'Respeite seus limites',
      'Mantenha-se hidratada'
    ]
  }
];

interface TutorialProps {
  onComplete: () => void;
}

export const Tutorial: React.FC<TutorialProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = React.useState(0);

  const nextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
        >
          <div className="text-center mb-8">
            <span className="text-4xl mb-4 block">{tutorialSteps[currentStep].icon}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {tutorialSteps[currentStep].title}
            </h2>
            <p className="text-lg text-gray-600">
              {tutorialSteps[currentStep].description}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {tutorialSteps[currentStep].tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center space-x-3 text-gray-700"
              >
                <svg
                  className="w-5 h-5 text-purple-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{tip}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={previousStep}
              disabled={currentStep === 0}
              className={`px-6 py-2 rounded-lg text-lg transition-colors ${
                currentStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-purple-600 hover:bg-purple-50'
              }`}
            >
              Anterior
            </button>
            <div className="flex space-x-2">
              {tutorialSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentStep ? 'bg-purple-500' : 'bg-purple-200'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextStep}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg text-lg hover:bg-purple-700 transition-colors"
            >
              {currentStep === tutorialSteps.length - 1 ? 'Começar' : 'Próximo'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tutorial; 