
import { BookmarkIcon, Clock } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ExerciseCardProps {
  title: string;
  duration: string;
  image: ReactNode;
  completed?: boolean;
  favorite?: boolean;
  onFavoriteToggle?: () => void;
  onClick?: () => void;
}

export function ExerciseCard({ 
  title, 
  duration, 
  image,
  completed = false, 
  favorite = false,
  onFavoriteToggle,
  onClick
}: ExerciseCardProps) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "relative bg-white rounded-xl overflow-hidden shadow-sm border transition-all",
        "hover:shadow-md hover:border-movebem-purple-light cursor-pointer hover:scale-105",
        "flex flex-col transform transition-transform duration-300 active:scale-95"
      )}
    >
      <div className="relative aspect-[4/3] bg-movebem-purple-light/20">
        <div className="w-full h-full transition-transform hover:scale-105 duration-300">
          {image}
        </div>
        
        {completed && (
          <div className="absolute top-2 left-2 bg-movebem-green text-white text-xs font-medium px-2 py-0.5 rounded-full animate-fade-in">
            Concluído
          </div>
        )}
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteToggle?.();
          }}
          className="absolute top-2 right-2 h-8 w-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors hover:scale-110 active:scale-95"
        >
          <BookmarkIcon 
            size={18} 
            className={cn(
              "transition-colors",
              favorite ? "fill-movebem-purple text-movebem-purple" : "text-gray-400"
            )} 
          />
        </button>
      </div>
      
      <div className="p-3">
        <h3 className="font-quicksand font-semibold text-gray-800 line-clamp-1">{title}</h3>
        <div className="flex items-center mt-2 text-sm text-gray-500">
          <Clock size={14} className="mr-1.5" />
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
}
