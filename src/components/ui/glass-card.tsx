
import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'hover' | 'purple';
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variantClasses = {
      default: "backdrop-blur-md bg-white/10 border border-white/20",
      hover: "backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300",
      purple: "backdrop-blur-md bg-fenjes-purple/10 border border-fenjes-purple/20"
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl shadow-lg",
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
