
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CategoryBadgeProps {
  icon?: ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function CategoryBadge({ icon, label, active = false, onClick }: CategoryBadgeProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full transition-all",
        "text-sm font-medium border",
        active 
          ? "bg-movebem-purple text-white border-movebem-purple" 
          : "bg-white text-gray-600 border-gray-200 hover:border-movebem-purple-light"
      )}
    >
      {icon && <span className="text-current">{icon}</span>}
      <span>{label}</span>
    </button>
  );
}
