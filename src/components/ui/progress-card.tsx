
import { cn } from "@/lib/utils";

interface ProgressCardProps {
  title: string;
  currentValue: number;
  maxValue: number;
  color?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function ProgressCard({
  title,
  currentValue,
  maxValue,
  color = "bg-movebem-purple",
  icon,
  className
}: ProgressCardProps) {
  const percentage = Math.round((currentValue / maxValue) * 100);

  return (
    <div className={cn("bg-white rounded-xl p-4 shadow-sm border", className)}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
          <div className="mt-1 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{currentValue}</p>
            <p className="ml-1 text-sm text-gray-500">/ {maxValue}</p>
          </div>
        </div>
        {icon && (
          <div className="p-2 bg-movebem-purple-light/20 rounded-md text-movebem-purple-dark">
            {icon}
          </div>
        )}
      </div>
      
      <div className="mt-4">
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={cn("h-full rounded-full transition-all duration-500", color)}
            style={{ width: `${percentage}%` }} 
          ></div>
        </div>
        <div className="mt-1 text-right">
          <span className="text-xs text-gray-500">{percentage}%</span>
        </div>
      </div>
    </div>
  );
}
