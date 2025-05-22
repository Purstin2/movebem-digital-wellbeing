
import { UserProfile, Exercise, ExerciseStep, Adaptation } from '@/types/onboarding';

// Helper to determine the appropriate adaptation level
export const determineAdaptationLevel = (
  userProfile: UserProfile, 
  dailyData?: { painLevel: number; energyLevel: number }
): 'easy' | 'normal' | 'challenging' => {
  // If we have daily data, prioritize it
  if (dailyData) {
    if (dailyData.painLevel >= 7) return 'easy';
    if (dailyData.painLevel <= 3 && dailyData.energyLevel >= 8) return 'challenging';
  }
  
  // Fall back to user profile data
  if (userProfile.painLevel === 'high' || userProfile.mobilityLevel === 'limited') {
    return 'easy';
  }
  
  if (userProfile.painLevel === 'low' && 
      userProfile.mobilityLevel === 'good' && 
      userProfile.experience === 'experienced') {
    return 'challenging';
  }
  
  // Default adaptation level
  return 'normal';
};

// Find relevant adaptations for a user's specific conditions
export const findRelevantAdaptations = (
  exercise: Exercise,
  userProfile: UserProfile
): Adaptation[] => {
  if (!exercise.adaptations || !userProfile.conditions) {
    return [];
  }
  
  return exercise.adaptations.filter(adaptation => 
    userProfile.conditions.some(condition => 
      adaptation.condition === condition
    )
  );
};

// Adjust exercise step instructions based on a user's needs
export const getAdaptedInstructions = (
  step: ExerciseStep,
  adaptationLevel: 'easy' | 'normal' | 'challenging',
  userConditions: string[] = []
): string => {
  // If the step has specific adaptations for the level, use that
  if (step.adaptations && step.adaptations[adaptationLevel]) {
    return step.adaptations[adaptationLevel];
  }
  
  // If no specific adaptation is available, return the original instruction
  return step.instruction;
};

// Calculate recommended exercise duration based on user experience
export const getRecommendedDuration = (
  baseDuration: number,
  userProfile: UserProfile
): number => {
  const multipliers = {
    beginner: 0.8, // 20% shorter for beginners
    some: 1.0,     // standard duration
    experienced: 1.2 // 20% longer for experienced users
  };
  
  const multiplier = multipliers[userProfile.experience] || 1.0;
  return Math.round(baseDuration * multiplier);
};

// Parse duration string to seconds
export const parseDuration = (duration: string): number => {
  const match = duration.match(/(\d+)\s*min/);
  if (match) {
    return parseInt(match[1], 10) * 60;
  }
  return 60; // Default to 1 min
};
