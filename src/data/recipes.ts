import { Recipe } from './types';
import { antiInflammatoryRecipes as newAntiInflammatoryRecipes } from './recipes/anti-inflammatory';
import { energyBoostRecipes as newEnergyBoostRecipes } from './recipes/energy-boost';
import { hormonalBalanceRecipes as newHormonalBalanceRecipes } from './recipes/hormonal-balance';
import { sleepSupportRecipes as newSleepSupportRecipes } from './recipes/sleep-support';

// Export all recipes from new files
export const antiInflammatoryRecipes = newAntiInflammatoryRecipes;
export const energyBoostingRecipes = newEnergyBoostRecipes;
export const hormonalBalanceRecipes = newHormonalBalanceRecipes;
export const sleepRelaxationRecipes = newSleepSupportRecipes;

// Combined recipes for easier access
export const allRecipes: Recipe[] = [
  ...antiInflammatoryRecipes,
  ...energyBoostingRecipes,
  ...hormonalBalanceRecipes,
  ...sleepRelaxationRecipes
]; 

// Export the recommendation function
export const getRecommendedRecipes = (
  nutritionalProfile: { 
    primaryPain: string; 
    conditions: string[];
    goals: string[];
    antiInflammatoryNeeds: boolean;
    hormonalSupport: boolean;
    energyOptimization: boolean;
    digestiveSupport: boolean;
    stressManagement: boolean;
    sleepSupport: boolean;
    currentDay?: number;
  }
) => {
  let relevantRecipes = [...allRecipes];
  
  // Filter based on nutritional needs
  if (nutritionalProfile.antiInflammatoryNeeds) {
    relevantRecipes = relevantRecipes.filter(recipe => 
      recipe.category === 'anti-inflammatory'
    );
  }
  
  if (nutritionalProfile.hormonalSupport) {
    relevantRecipes = relevantRecipes.filter(recipe => 
      recipe.category === 'hormonal-balance'
    );
  }
  
  if (nutritionalProfile.energyOptimization) {
    relevantRecipes = relevantRecipes.filter(recipe => 
      recipe.category === 'energy-boost'
    );
  }
  
  if (nutritionalProfile.sleepSupport) {
    relevantRecipes = relevantRecipes.filter(recipe => 
      recipe.category === 'sleep-support'
    );
  }
  
  // Personalização baseada em progressão temporal (se disponível)
  if (nutritionalProfile.currentDay) {
    // Semana 1: Receitas simples e básicas
    if (nutritionalProfile.currentDay <= 7) {
      relevantRecipes = relevantRecipes.filter(recipe => 
        recipe.difficulty === 'beginner'
      );
    }
  }
  
  return relevantRecipes;
}; 