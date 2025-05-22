import React from "react";
import { cn } from "@/lib/utils";

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
}

/**
 * Componente para exibir estados vazios com uma mensagem amigável
 */
export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center py-12 px-4",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="mb-4 text-gray-300" aria-hidden="true">
          {icon}
        </div>
      )}
      
      <h3 className="font-quicksand font-semibold text-lg text-gray-700 mb-1">
        {title}
      </h3>
      
      <p className="text-sm text-gray-500 mb-4 max-w-xs">
        {description}
      </p>
      
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
} 