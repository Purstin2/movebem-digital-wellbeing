import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

interface MedicalDisclaimerProps {
  variant?: 'full' | 'compact' | 'exercise' | 'recipe';
  className?: string;
}

export function MedicalDisclaimer({ 
  variant = 'full',
  className = ''
}: MedicalDisclaimerProps) {
  
  // Base styles with improved contrast and readability
  const baseStyles = "text-base lg:text-lg p-4 rounded-lg border-2 border-red-600 bg-red-50 dark:bg-red-900/10 dark:border-red-800";
  
  // Full disclaimer content
  const fullContent = (
    <>
      <h4 className="font-semibold text-lg lg:text-xl mb-3 text-red-800 dark:text-red-200">
        Aviso Médico Importante
      </h4>
      <div className="space-y-2 text-red-700 dark:text-red-300">
        <p>Este conteúdo não substitui acompanhamento médico profissional. Consulte seu médico antes de iniciar qualquer programa de exercícios.</p>
        <p>Pare imediatamente se sentir dor excessiva ou desconforto. Adapte os exercícios conforme sua condição física individual.</p>
        <p>Em caso de condições médicas específicas, busque orientação profissional.</p>
      </div>
    </>
  );
  
  // Compact disclaimer content
  const compactContent = (
    <p className="text-base lg:text-lg text-red-700 dark:text-red-300">
      <span className="font-bold">Aviso Médico:</span> Este conteúdo não substitui orientação médica profissional. Consulte seu médico antes de iniciar.
    </p>
  );
  
  // Exercise specific disclaimer
  const exerciseContent = (
    <>
      <h4 className="font-semibold text-lg lg:text-xl mb-2 text-red-800 dark:text-red-200">
        Aviso para Exercícios
      </h4>
      <div className="space-y-2 text-red-700 dark:text-red-300">
        <p>Consulte um profissional antes de iniciar estes exercícios. Pare imediatamente se sentir dor excessiva ou desconforto.</p>
        <p>Adapte conforme sua condição física e respeite as contraindicações indicadas.</p>
      </div>
    </>
  );
  
  // Recipe specific disclaimer
  const recipeContent = (
    <>
      <h4 className="font-semibold text-lg lg:text-xl mb-2 text-red-800 dark:text-red-200">
        Aviso Nutricional
      </h4>
      <div className="space-y-2 text-red-700 dark:text-red-300">
        <p>Estas receitas têm propósito informativo. Não representam prescrição médica ou nutricional.</p>
        <p>Se você tem condições de saúde específicas, alergias ou segue dieta restritiva, consulte um profissional de saúde antes de consumir.</p>
      </div>
    </>
  );
  
  // Select content based on variant
  const content = 
    variant === 'compact' ? compactContent :
    variant === 'exercise' ? exerciseContent :
    variant === 'recipe' ? recipeContent :
    fullContent;
  
  return (
    <Alert 
      className={`${baseStyles} ${className}`} 
      role="alert" 
      aria-live="polite"
      tabIndex={0}
    >
      <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" aria-hidden="true" />
      <AlertDescription>{content}</AlertDescription>
    </Alert>
  );
} 