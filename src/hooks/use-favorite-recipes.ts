import { useState, useEffect } from 'react';

export function useFavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState<string[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem('fenjes-favorite-recipes');
    
    if (storedFavorites) {
      try {
        const parsedFavorites = JSON.parse(storedFavorites);
        if (Array.isArray(parsedFavorites)) {
          setFavoriteRecipes(parsedFavorites);
        }
      } catch (err) {
        console.error('Error parsing favorite recipes:', err);
        // Reset in case of invalid data
        localStorage.removeItem('fenjes-favorite-recipes');
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('fenjes-favorite-recipes', JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  // Add a recipe to favorites
  const addFavorite = (recipeId: string) => {
    setFavoriteRecipes(prev => {
      if (prev.includes(recipeId)) return prev;
      return [...prev, recipeId];
    });
  };

  // Remove a recipe from favorites
  const removeFavorite = (recipeId: string) => {
    setFavoriteRecipes(prev => prev.filter(id => id !== recipeId));
  };

  // Toggle favorite status
  const toggleFavorite = (recipeId: string) => {
    setFavoriteRecipes(prev => {
      if (prev.includes(recipeId)) {
        return prev.filter(id => id !== recipeId);
      } else {
        return [...prev, recipeId];
      }
    });
  };

  // Check if a recipe is a favorite
  const isFavorite = (recipeId: string) => {
    return favoriteRecipes.includes(recipeId);
  };

  return {
    favoriteRecipes,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite
  };
} 