import { useState, useEffect } from 'react';

export function useFavoriteExercises() {
  const [favoriteExercises, setFavoriteExercises] = useState<string[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem('fenjes-favorite-exercises');
    
    if (storedFavorites) {
      try {
        const parsedFavorites = JSON.parse(storedFavorites);
        if (Array.isArray(parsedFavorites)) {
          setFavoriteExercises(parsedFavorites);
        }
      } catch (err) {
        console.error('Error parsing favorite exercises:', err);
        // Reset in case of invalid data
        localStorage.removeItem('fenjes-favorite-exercises');
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('fenjes-favorite-exercises', JSON.stringify(favoriteExercises));
  }, [favoriteExercises]);

  // Add an exercise to favorites
  const addFavorite = (exerciseId: string) => {
    setFavoriteExercises(prev => {
      if (prev.includes(exerciseId)) return prev;
      return [...prev, exerciseId];
    });
  };

  // Remove an exercise from favorites
  const removeFavorite = (exerciseId: string) => {
    setFavoriteExercises(prev => prev.filter(id => id !== exerciseId));
  };

  // Toggle favorite status
  const toggleFavorite = (exerciseId: string) => {
    setFavoriteExercises(prev => {
      if (prev.includes(exerciseId)) {
        return prev.filter(id => id !== exerciseId);
      } else {
        return [...prev, exerciseId];
      }
    });
  };

  // Check if an exercise is a favorite
  const isFavorite = (exerciseId: string) => {
    return favoriteExercises.includes(exerciseId);
  };

  return {
    favoriteExercises,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite
  };
} 