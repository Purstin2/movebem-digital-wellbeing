import { Recipe } from '@/types/nutrition';
import { antiInflammatoryRecipes } from './recipes/anti-inflammatory';
import { hormonalBalanceRecipes } from './recipes/hormonal-balance';
import { energyBoostRecipes } from './recipes/energy-boost';
import { sleepSupportRecipes } from './recipes/sleep-support';

// Combine all recipes
export const allRecipes: Recipe[] = [
  ...antiInflammatoryRecipes,
  ...hormonalBalanceRecipes,
  ...energyBoostRecipes,
  ...sleepSupportRecipes
];

// Recipe categories for filtering
export const recipeCategories = {
  anti_inflammatory: {
    title: 'Anti-inflamatórias',
    description: 'Receitas que ajudam a reduzir inflamação e dor',
    recipes: antiInflammatoryRecipes.map(r => r.id)
  },
  hormonal_balance: {
    title: 'Equilíbrio Hormonal',
    description: 'Suporte natural para harmonia hormonal',
    recipes: hormonalBalanceRecipes.map(r => r.id)
  },
  energy_boost: {
    title: 'Energia e Vitalidade',
    description: 'Receitas para mais disposição no dia',
    recipes: energyBoostRecipes.map(r => r.id)
  },
  sleep_support: {
    title: 'Suporte ao Sono',
    description: 'Ajuda natural para uma boa noite de sono',
    recipes: sleepSupportRecipes.map(r => r.id)
  }
};

// Helper function to get recipes by category
export const getRecipesByCategory = (category: string): Recipe[] => {
  return allRecipes.filter(recipe => recipe.category === category);
};

// Helper function to get recipes by target profile
export const getRecipesByProfile = (profile: string[]): Recipe[] => {
  return allRecipes.filter(recipe => 
    recipe.targetProfile.some(target => profile.includes(target))
  );
};

// Helper function to get recipes by difficulty
export const getRecipesByDifficulty = (difficulty: string): Recipe[] => {
  return allRecipes.filter(recipe => recipe.difficulty === difficulty);
};

// Helper function to get recommended recipes based on user profile
export const getRecommendedRecipes = (userProfile: {
  primaryCondition: string;
  secondaryConditions: string[];
  dietaryRestrictions: string[];
  cookingSkill: string;
}): Recipe[] => {
  const { primaryCondition, secondaryConditions, dietaryRestrictions, cookingSkill } = userProfile;
  
  // First get recipes matching primary condition
  let recommended = allRecipes.filter(recipe =>
    recipe.targetProfile.includes(primaryCondition)
  );
  
  // Then add recipes matching secondary conditions
  const secondaryRecipes = allRecipes.filter(recipe =>
    recipe.targetProfile.some(target => secondaryConditions.includes(target))
  );
  
  recommended = [...recommended, ...secondaryRecipes];
  
  // Filter out recipes with ingredients that conflict with dietary restrictions
  recommended = recommended.filter(recipe =>
    !recipe.ingredients.some(ing => 
      dietaryRestrictions.some(restriction => 
        ing.item.toLowerCase().includes(restriction.toLowerCase())
      )
    )
  );
  
  // Filter by cooking skill level
  if (cookingSkill === 'beginner') {
    recommended = recommended.filter(r => r.difficulty === 'easy');
  }
  
  // Remove duplicates
  recommended = Array.from(new Set(recommended));
  
  // Limit to top 10 most relevant
  return recommended.slice(0, 10);
}; 