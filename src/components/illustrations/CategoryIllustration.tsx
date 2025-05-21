
import { cn } from "@/lib/utils";

interface CategoryIllustrationProps {
  category: 'neck' | 'shoulders' | 'back' | 'hips' | 'focus' | 'relaxation';
  size?: number;
  className?: string;
}

export function CategoryIllustration({ category, size = 24, className }: CategoryIllustrationProps) {
  const getPath = () => {
    switch (category) {
      case 'neck':
        return (
          <path 
            d="M12 15c-1.5 0-3-1-3-3a3 3 0 0 1 3-3c1 0 1.5.5 2 1l1 1c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-2-1.5-3-3-3" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
        );
      case 'shoulders':
        return (
          <path 
            d="M8 9a4 4 0 0 1 8 0c0 1.5-.5 3-2 4 1.5 1 2 2.5 2 4a4 4 0 0 1-8 0c0-1.5.5-3 2-4-1.5-1-2-2.5-2-4z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
        );
      case 'back':
        return (
          <path 
            d="M12 7v10M8 9c0-2 2-4 4-4s4 2 4 4M8 15c0 2 2 4 4 4s4-2 4-4" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
        );
      case 'hips':
        return (
          <path 
            d="M12 8a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0v-4a4 4 0 0 1 4-4z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
        );
      case 'focus':
        return (
          <>
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path 
              d="M12 5v1M12 18v1M5 12H4M20 12h-1M7.05 7.05l-.7-.7M17.66 17.66l-.7-.7M17.66 7.05l.7-.7M7.05 17.66l-.7.7" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
            />
          </>
        );
      case 'relaxation':
        return (
          <>
            <path 
              d="M6 11c1.5 0 3 .5 3 2s-1.5 2-3 2m12 0c-1.5 0-3-.5-3-2s1.5-2 3-2" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
            />
            <path 
              d="M12 17a5 5 0 0 0 5-5 5 5 0 0 0-10 0 5 5 0 0 0 5 5z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              fill="none"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none"
      className={cn("", className)}
    >
      {getPath()}
    </svg>
  );
}
