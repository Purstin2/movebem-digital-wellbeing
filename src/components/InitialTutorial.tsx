import React, { useState } from 'react';

const steps = [
  {
    title: 'Bem-vindo ao FENJES',
    description: 'Vamos começar sua jornada de bem-estar.'
  },
  {
    title: 'Seu Perfil',
    description: 'Configure suas preferências e limitações.'
  },
  {
    title: 'Exercícios',
    description: 'Aprenda exercícios seguros e adaptados.'
  },
  {
    title: 'Suporte',
    description: 'Acesse ajuda quando precisar.'
  }
];

export const InitialTutorial = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">
            {steps[step].title}
          </h2>
          <p className="text-gray-600">
            {steps[step].description}
          </p>
        </div>

        <button
          onClick={nextStep}
          className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg"
        >
          {step === steps.length - 1 ? 'Começar' : 'Próximo'}
        </button>
      </div>
    </div>
  );
};

export default InitialTutorial; 