import React from "react";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface MedicalDisclaimerProps {
  className?: string;
  variant?: "default" | "compact" | "full";
}

export function MedicalDisclaimer({ className, variant = "default" }: MedicalDisclaimerProps) {
  const baseMessage = "Este conteúdo não substitui acompanhamento médico profissional.";
  
  const fullDisclaimer = (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-start gap-2">
        <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {baseMessage}
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 list-disc list-inside">
            <li>Consulte seu médico antes de iniciar qualquer programa de exercícios</li>
            <li>Pare imediatamente se sentir dor excessiva ou desconforto</li>
            <li>Adapte os exercícios conforme sua condição física individual</li>
            <li>Em caso de condições médicas específicas, busque orientação profissional</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const compactDisclaimer = (
    <div className={cn("flex items-center gap-2 text-sm", className)}>
      <AlertTriangle className="h-4 w-4 text-amber-500" />
      <p className="text-gray-600 dark:text-gray-300">
        {baseMessage}
      </p>
    </div>
  );

  const defaultDisclaimer = (
    <div className={cn("flex items-start gap-2", className)}>
      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
      <div>
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {baseMessage}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Consulte seu médico antes de iniciar qualquer programa de exercícios.
        </p>
      </div>
    </div>
  );

  switch (variant) {
    case "full":
      return fullDisclaimer;
    case "compact":
      return compactDisclaimer;
    default:
      return defaultDisclaimer;
  }
} 