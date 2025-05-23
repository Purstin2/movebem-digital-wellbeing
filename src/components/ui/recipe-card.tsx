import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Recipe } from "@/data/types";
import { DeepGlassCard } from "@/components/ui/deep-glass-card";
import { Button } from "@/components/ui/button";
import { Clock, ChevronRight, Leaf, Info, Heart, Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface RecipeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  recipe: Recipe;
  variant?: "default" | "featured" | "recommended";
  showDetails?: boolean;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  isRecommended?: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  variant = "default",
  showDetails = false,
  isFavorite = false,
  onToggleFavorite,
  isRecommended = false,
  className,
  ...props
}) => {
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <DeepGlassCard
      className={cn(
        "group relative overflow-hidden transition-all duration-300 hover:shadow-lg",
        variant === "featured" && "border-2 border-fenjes-purple",
        variant === "recommended" && "border-2 border-fenjes-yellow",
        className
      )}
      {...props}
    >
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
        <img
          src={imageError ? "/images/nutrition/placeholder-recipe.jpg" : recipe.imageUrl}
          alt={recipe.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={handleImageError}
        />
        {variant === "featured" && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        )}
        {variant === "recommended" && (
          <div className="absolute inset-0 bg-gradient-to-t from-fenjes-yellow/20 to-transparent" />
        )}
        {isRecommended && (
          <div className="absolute top-2 left-2 bg-fenjes-yellow text-xs font-bold px-2 py-1 rounded flex items-center gap-1 shadow">
            <Star size={14} className="text-fenjes-purple" /> Recomendada
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-fenjes-purple">
            {recipe.category}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">
              <Clock size={14} className="mr-1 inline" />
              {recipe.duration} min
            </span>
            {onToggleFavorite && (
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={onToggleFavorite}
              >
                <Heart
                  size={16}
                  className={cn(
                    "transition-colors",
                    isFavorite ? "fill-fenjes-purple text-fenjes-purple" : "text-gray-400"
                  )}
                />
              </Button>
            )}
          </div>
        </div>

        <h3 className="mb-1 text-lg font-semibold text-gray-900">
          {recipe.name}
        </h3>
        <p className="mb-3 text-sm text-gray-600 line-clamp-2">
          {recipe.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-gray-500">
            Dificuldade: {recipe.difficulty}
          </span>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-fenjes-purple hover:text-fenjes-purple/80"
              >
                Ver detalhes
                <ChevronRight size={14} className="ml-1" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-fenjes-purple">
                  {recipe.name}
                </DialogTitle>
                <DialogDescription>
                  {recipe.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="mb-2 text-lg font-semibold">Ingredientes</h4>
                  <ul className="list-inside list-disc space-y-1">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-gray-700">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 text-lg font-semibold">Modo de Preparo</h4>
                  <ol className="list-inside list-decimal space-y-2">
                    {recipe.steps.map((step, index) => (
                      <li key={index} className="text-gray-700">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h4 className="mb-2 text-lg font-semibold">Benefícios</h4>
                  <ul className="list-inside list-disc space-y-1">
                    {recipe.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-700">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 text-lg font-semibold">Informação Nutricional</h4>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="rounded-lg bg-gray-50 p-3 text-center">
                      <p className="text-sm text-gray-500">Calorias</p>
                      <p className="text-lg font-semibold text-fenjes-purple">
                        {recipe.nutritionalInfo.calories}
                      </p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3 text-center">
                      <p className="text-sm text-gray-500">Proteínas</p>
                      <p className="text-lg font-semibold text-fenjes-purple">
                        {recipe.nutritionalInfo.protein}g
                      </p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3 text-center">
                      <p className="text-sm text-gray-500">Carboidratos</p>
                      <p className="text-lg font-semibold text-fenjes-purple">
                        {recipe.nutritionalInfo.carbs}g
                      </p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3 text-center">
                      <p className="text-sm text-gray-500">Gorduras</p>
                      <p className="text-lg font-semibold text-fenjes-purple">
                        {recipe.nutritionalInfo.fat}g
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </DeepGlassCard>
  );
}; 