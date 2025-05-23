import React from 'react';

interface MedicalDisclaimerProps {
  variant?: 'full' | 'compact' | 'exercise' | 'recipe';
  className?: string;
}

export function MedicalDisclaimer({ 
  variant = 'full',
  className = ''
}: MedicalDisclaimerProps) {
  
  // Base styles
  const baseStyles = "text-sm rounded-md mt-4 p-4 bg-orange-50 border border-orange-200 text-orange-800";
  
  // Full disclaimer content
  const fullContent = (
    <>
      <h4 className="font-semibold text-base mb-2">Aviso Médico Importante:</h4>
      <p className="mb-2">Este conteúdo não substitui acompanhamento médico profissional. Consulte seu médico antes de iniciar qualquer programa de exercícios.</p>
      <p className="mb-2">Pare imediatamente se sentir dor excessiva ou desconforto. Adapte os exercícios conforme sua condição física individual.</p>
      <p>Em caso de condições médicas específicas, busque orientação profissional.</p>
    </>
  );
  
  // Compact disclaimer content
  const compactContent = (
    <p className="text-sm">
      <span className="font-bold">Aviso Médico:</span> Este conteúdo não substitui orientação médica profissional. Consulte seu médico antes de iniciar.
    </p>
  );
  
  // Exercise specific disclaimer
  const exerciseContent = (
    <>
      <h4 className="font-semibold text-base mb-1">Aviso para Exercícios:</h4>
      <p className="mb-1">Consulte um profissional antes de iniciar estes exercícios. Pare imediatamente se sentir dor excessiva ou desconforto.</p>
      <p>Adapte conforme sua condição física e respeite as contraindicações indicadas.</p>
    </>
  );
  
  // Recipe specific disclaimer
  const recipeContent = (
    <>
      <h4 className="font-semibold text-base mb-1">Aviso Nutricional:</h4>
      <p className="mb-1">Estas receitas têm propósito informativo. Não representam prescrição médica ou nutricional.</p>
      <p>Se você tem condições de saúde específicas, alergias ou segue dieta restritiva, consulte um profissional de saúde antes de consumir.</p>
    </>
  );
  
  // Select content based on variant
  const content = 
    variant === 'compact' ? compactContent :
    variant === 'exercise' ? exerciseContent :
    variant === 'recipe' ? recipeContent :
    fullContent;
  
  return (
    <div className={`${baseStyles} ${className}`} role="alert" aria-live="polite">
      {content}
    </div>
  );
} 