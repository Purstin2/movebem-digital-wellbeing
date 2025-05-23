import React, { useState } from 'react';

export const Tutorial = () => {
  const [step, setStep] = useState(0);
  
  const steps = [
    'Bem-vindo ao FENJES',
    'Configure seu perfil',
    'Explore exercícios',
    'Acesse suporte'
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl mb-4">{steps[step]}</h2>
      <button 
        onClick={() => setStep(s => Math.min(s + 1, steps.length - 1))}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        {step === steps.length - 1 ? 'Começar' : 'Próximo'}
      </button>
    </div>
  );
};

export default Tutorial; 