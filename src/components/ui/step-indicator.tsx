
import { cn } from '@/lib/utils';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  onStepClick?: (step: number) => void;
}

export function StepIndicator({ 
  currentStep, 
  totalSteps, 
  onStepClick 
}: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 my-4">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <button
          key={index}
          onClick={() => onStepClick?.(index + 1)}
          className={cn(
            "h-2.5 rounded-full transition-all duration-300",
            currentStep === index + 1 
              ? "w-8 bg-movebem-purple" 
              : "w-2.5 bg-gray-200 hover:bg-movebem-purple-light/50 hover:scale-110"
          )}
          aria-label={`Ir para o passo ${index + 1}`}
          style={{ animationDelay: `${index * 100}ms` }}
        />
      ))}
    </div>
  );
}
