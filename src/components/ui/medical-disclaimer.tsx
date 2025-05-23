import React from 'react';

interface MedicalDisclaimerProps {
  variant?: 'full' | 'compact' | 'exercise' | 'recipe';
  className?: string;
  painLevel?: number;
  conditions?: string[];
}

const generalDisclaimers = [
  'Este conteúdo não substitui acompanhamento médico profissional',
  'Consulte seu médico antes de iniciar qualquer programa de exercícios',
  'Pare imediatamente se sentir dor excessiva ou desconforto',
  'Adapte os exercícios conforme sua condição física individual',
  'Em caso de condições médicas específicas, busque orientação profissional'
];

const exerciseDisclaimers = [
  'Realize os exercícios em ambiente seguro e bem iluminado',
  'Use uma cadeira estável e firme',
  'Mantenha-se hidratado durante a prática',
  'Respeite seus limites físicos',
  'Em caso de tontura ou mal-estar, interrompa imediatamente'
];

const recipeDisclaimers = [
  'Verifique alergias e intolerâncias antes do preparo',
  'Consulte seu médico sobre interações com medicamentos',
  'Ajuste porções conforme suas necessidades individuais',
  'Em caso de reação adversa, descontinue o uso',
  'Gestantes e lactantes devem consultar profissional de saúde'
];

export function MedicalDisclaimer({ 
  variant = 'full',
  className = '',
  painLevel,
  conditions = []
}: MedicalDisclaimerProps) {
  
  // Base styles with improved accessibility
  const baseStyles = "text-base rounded-lg mt-4 p-6 bg-orange-50 border border-orange-200 text-orange-800";
  
  // Pain level specific warnings
  const getPainWarning = () => {
    if (painLevel && painLevel > 7) {
      return (
        <div className="mt-3 p-3 bg-red-100 rounded text-red-800">
          <strong>⚠️ Atenção:</strong> Seu nível de dor é elevado. Consulte um profissional de saúde antes de iniciar qualquer atividade física.
        </div>
      );
    }
    return null;
  };

  // Condition specific warnings
  const getConditionWarnings = () => {
    if (conditions.length > 0) {
      return (
        <div className="mt-3 p-3 bg-yellow-100 rounded text-yellow-800">
          <strong>Condições Específicas:</strong>
          <ul className="mt-1 list-disc list-inside">
            {conditions.map((condition, index) => (
              <li key={index}>Consulte seu médico sobre adaptações necessárias para: {condition}</li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  };

  // Full disclaimer content
  const fullContent = (
    <>
      <h4 className="font-semibold text-lg mb-4">Aviso Médico Importante</h4>
      {generalDisclaimers.map((disclaimer, index) => (
        <p key={index} className="mb-2">• {disclaimer}</p>
      ))}
      {getPainWarning()}
      {getConditionWarnings()}
      <div className="mt-4 p-3 bg-blue-100 rounded text-blue-800">
        Em caso de emergência, ligue para 192 (SAMU)
      </div>
    </>
  );
  
  // Compact disclaimer content
  const compactContent = (
    <div className="flex items-center">
      <span className="text-2xl mr-2">⚠️</span>
      <p className="text-base">
        <strong>Aviso Médico:</strong> {generalDisclaimers[0]}
      </p>
    </div>
  );
  
  // Exercise specific disclaimer
  const exerciseContent = (
    <>
      <h4 className="font-semibold text-lg mb-3">Aviso para Exercícios</h4>
      {exerciseDisclaimers.map((disclaimer, index) => (
        <p key={index} className="mb-2">• {disclaimer}</p>
      ))}
      {getPainWarning()}
      {getConditionWarnings()}
    </>
  );
  
  // Recipe specific disclaimer
  const recipeContent = (
    <>
      <h4 className="font-semibold text-lg mb-3">Aviso Nutricional</h4>
      {recipeDisclaimers.map((disclaimer, index) => (
        <p key={index} className="mb-2">• {disclaimer}</p>
      ))}
      {getConditionWarnings()}
    </>
  );
  
  // Select content based on variant
  const content = 
    variant === 'compact' ? compactContent :
    variant === 'exercise' ? exerciseContent :
    variant === 'recipe' ? recipeContent :
    fullContent;
  
  return (
    <div 
      className={`${baseStyles} ${className}`} 
      role="alert" 
      aria-live="polite"
      style={{ fontSize: '16px', lineHeight: '1.5' }}
    >
      {content}
    </div>
  );
} 