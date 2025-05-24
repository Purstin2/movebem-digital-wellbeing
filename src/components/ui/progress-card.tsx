import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/ui/glass-card";

interface ProgressCardProps {
  title: string;
  currentValue: number;
  maxValue: number;
  color?: string;
  icon?: React.ReactNode;
  message?: string;
  className?: string;
}

export function ProgressCard({
  title,
  currentValue,
  maxValue,
  color = "bg-fenjes-yellow",
  icon,
  message,
  className
}: ProgressCardProps) {
  const percentage = Math.round((currentValue / maxValue) * 100);

  return (
    <GlassCard variant="hover" className={cn(className)}>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
            <div className="mt-1 flex items-baseline">
              <p className="text-2xl font-semibold text-fenjes-text-warm">{currentValue}</p>
              <p className="ml-1 text-sm text-gray-500">/ {maxValue}</p>
            </div>
          </div>
          {icon && (
            <div className="p-2 bg-fenjes-purple-light/20 rounded-md text-fenjes-purple-dark">
              {icon}
            </div>
          )}
        </div>
        
        <div className="mt-4">
          <div className="h-2 bg-fenjes-neutral-300 dark:bg-fenjes-neutral-700 rounded-full overflow-hidden">
            <div 
              className={cn("h-full rounded-full transition-all duration-500", color)}
              style={{ width: `${percentage}%` }} 
            ></div>
          </div>
          {message ? (
            <div className="mt-2 text-sm text-center text-fenjes-purple-dark font-medium">
              {message}
            </div>
          ) : (
            <div className="mt-1 text-right">
              <span className="text-xs text-gray-500">{percentage}%</span>
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
