export type NutritionCategory = 'anti_inflammatory' | 'energy_boost' | 'hormonal_balance' | 'sleep_support' | 'digestive_health' | 'detox_support' | 'condition_specific';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface RecipeIngredient {
  item: string;
  benefit: string;
}

export interface Recipe {
  id: string;
  title: string;
  category: NutritionCategory;
  targetProfile: string[];
  difficulty: DifficultyLevel;
  prepTime: string;
  emotionalMessage: string;
  ingredients: RecipeIngredient[];
  preparation: string[];
  scientificBacking: string;
  timing: string;
  personalizedTips: Record<string, string>;
  imageUrl?: string;
}

export interface NutritionalProfile {
  primaryPain: 'neck' | 'shoulders' | 'back' | 'hips' | 'general';
  painLevel: 'low' | 'medium' | 'high';
  conditions: string[];
  age: string;
  goals: string[];
  
  // Nutritional needs detected from profile
  antiInflammatoryNeeds: boolean;
  hormonalSupport: boolean;
  energyOptimization: boolean;
  digestiveSupport: boolean;
  stressManagement: boolean;
  weightManagement: boolean;
  sleepSupport: boolean;
}

export interface PersonalizedNutrition {
  dailyRecommendations: Recipe[];
  weeklyMealPlan?: Recipe[][];
  shoppingList?: string[];
  personalizedTips: string[];
}

export interface NutritionalNeeds {
  antiInflammatory: boolean;
  hormonalSupport: boolean;
  energyOptimization: boolean;
  digestiveSupport: boolean;
  sleepSupport: boolean;
  specificConditions: string[];
} 