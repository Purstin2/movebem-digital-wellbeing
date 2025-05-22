import { UserProfile } from '@/types/onboarding';
import { NutritionalNeeds, PersonalizedNutrition, Recipe } from '@/types/nutrition';
import { allRecipes } from '@/data/recipes';

/**
 * Detects nutritional needs based on user profile
 */
export const detectNutritionalNeeds = (userProfile: UserProfile): NutritionalNeeds => {
  const needs: NutritionalNeeds = {
    antiInflammatory: false,
    hormonalSupport: false,
    energyOptimization: false,
    digestiveSupport: false,
    sleepSupport: false,
    specificConditions: []
  };
  
  // Anti-inflammatory needs
  if (userProfile.painLevel === 'high' || 
      (userProfile.conditions && 
       (userProfile.conditions.includes('arthritis') || 
        userProfile.conditions.includes('fibromyalgia')))) {
    needs.antiInflammatory = true;
  }
  
  // Hormonal support
  if (userProfile.age === '46-55' || 
      userProfile.age === '56-65' ||
      (userProfile.conditions && 
       userProfile.conditions.includes('menopause'))) {
    needs.hormonalSupport = true;
  }
  
  // Energy optimization
  if ((userProfile.goals && 
       userProfile.goals.includes('energy')) ||
      (userProfile.conditions && 
       userProfile.conditions.includes('fatigue'))) {
    needs.energyOptimization = true;
  }
  
  // Digestive support
  if ((userProfile.conditions && 
       userProfile.conditions.includes('digestive_issues')) ||
      userProfile.age === '56-65') {
    needs.digestiveSupport = true;
  }
  
  // Sleep support
  if ((userProfile.conditions && 
       (userProfile.conditions.includes('insomnia') || 
        userProfile.conditions.includes('anxiety'))) ||
      (userProfile.goals && 
       userProfile.goals.includes('better_sleep'))) {
    needs.sleepSupport = true;
  }
  
  // Specific conditions
  if (userProfile.conditions) {
    const relevantConditions = [
      'arthritis', 
      'diabetes', 
      'fibromyalgia', 
      'menopause',
      'anxiety'
    ];
    
    needs.specificConditions = userProfile.conditions.filter(
      condition => relevantConditions.includes(condition)
    );
  }
  
  return needs;
};

/**
 * Prioritizes recipes based on user profile and needs
 */
export const prioritizeRecipes = (
  recipes: Recipe[], 
  userProfile: UserProfile,
  needs: NutritionalNeeds
): Recipe[] => {
  // Add a relevance score to each recipe
  const recipesWithScores = recipes.map(recipe => {
    let score = 0;
    
    // Increase score for matching target profiles
    if (recipe.targetProfile) {
      // Primary pain area matches
      if (recipe.targetProfile.includes(userProfile.primaryPain)) {
        score += 3;
      }
      
      // Pain level matches
      if (recipe.targetProfile.includes(userProfile.painLevel === 'high' ? 'high_pain' : 
                                       userProfile.painLevel === 'medium' ? 'moderate_pain' : 
                                       'low_pain')) {
        score += 3;
      }
      
      // Conditions match
      if (userProfile.conditions) {
        userProfile.conditions.forEach(condition => {
          if (recipe.targetProfile.includes(condition)) {
            score += 5;
          }
        });
      }
      
      // Goals match
      if (userProfile.goals) {
        userProfile.goals.forEach(goal => {
          if (recipe.targetProfile.includes(goal)) {
            score += 2;
          }
        });
      }
    }
    
    // Increase score based on nutritional needs
    if (needs.antiInflammatory && recipe.category === 'anti_inflammatory') {
      score += 4;
    }
    
    if (needs.hormonalSupport && recipe.category === 'hormonal_balance') {
      score += 4;
    }
    
    if (needs.energyOptimization && recipe.category === 'energy_boost') {
      score += 4;
    }
    
    if (needs.digestiveSupport && 
        (recipe.category === 'digestive_health' || recipe.category === 'detox_support')) {
      score += 4;
    }
    
    if (needs.sleepSupport && recipe.category === 'sleep_support') {
      score += 4;
    }
    
    // Increase score for condition-specific recipes that match user conditions
    if (recipe.category === 'condition_specific' && needs.specificConditions.length > 0) {
      needs.specificConditions.forEach(condition => {
        if (recipe.targetProfile.includes(condition)) {
          score += 6;
        }
      });
    }
    
    return { recipe, score };
  });
  
  // Sort by score (descending)
  recipesWithScores.sort((a, b) => b.score - a.score);
  
  // Return just the recipes in prioritized order
  return recipesWithScores.map(item => item.recipe);
};

/**
 * Generates personalized nutrition recommendations
 */
export const generatePersonalizedNutrition = (userProfile: UserProfile): PersonalizedNutrition => {
  // Detect nutritional needs
  const needs = detectNutritionalNeeds(userProfile);
  
  // Prioritize recipes
  const prioritizedRecipes = prioritizeRecipes(allRecipes, userProfile, needs);
  
  // Generate daily recommendations (top 3 recipes)
  const dailyRecommendations = prioritizedRecipes.slice(0, 3);
  
  // Generate personalized tips
  const personalizedTips: string[] = [];
  
  if (needs.antiInflammatory) {
    personalizedTips.push('💜 Consuma cúrcuma com pimenta preta para potencializar absorção');
    personalizedTips.push('🐟 Inclua ômega-3 pelo menos 3x por semana');
  }
  
  if (needs.hormonalSupport) {
    personalizedTips.push('🌸 Sementes de linhaça são suas aliadas hormonais - 2 col/sopa/dia');
    personalizedTips.push('🥗 Vegetais crucíferos ajudam no metabolismo estrogênico');
  }
  
  if (needs.energyOptimization) {
    personalizedTips.push('⚡ Combine carboidrato + proteína para energia sustentável');
    personalizedTips.push('💧 Desidratação é a causa #1 de fadiga - beba 2L água/dia');
  }
  
  if (userProfile.age === '56-65') {
    personalizedTips.push('🦴 Priorize cálcio + vitamina D para saúde óssea');
    personalizedTips.push('🧠 Antioxidantes protegem cognição - frutas vermelhas diariamente');
  }
  
  if (needs.sleepSupport) {
    personalizedTips.push('😴 Evite cafeína após 14h para melhor qualidade do sono');
    personalizedTips.push('🌙 Magnésio antes de dormir pode melhorar relaxamento muscular');
  }
  
  if (needs.digestiveSupport) {
    personalizedTips.push('🍵 Gengibre e hortelã são excelentes para aliviar desconforto digestivo');
    personalizedTips.push('🥄 Coma devagar e mastigue bem os alimentos para melhor digestão');
  }
  
  return {
    dailyRecommendations,
    personalizedTips
  };
}; 