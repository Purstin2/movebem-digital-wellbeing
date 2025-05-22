export type BodyCategory = 'neck' | 'shoulders' | 'back' | 'hips' | 'full_body';
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface ChairPosition {
  name: string;
  description: string;
  suitableFor: string[];
}

export interface ChairRequirements {
  backrest: boolean;
  armrests: boolean;
  wheels: boolean;
}

export interface ExerciseStep {
  name: string;
  instruction: string;
  duration: string;
  breathing: string;
  visualization?: string;
  mentalCue?: string;
  importantNote?: string;
  safetyNote?: string;
  chairAdaptation?: string;
  reflection?: string;
  flow?: string;
  intention?: string;
  freedom?: string;
  musicality?: string;
}

export interface ChairYogaExercise {
  id: string;
  title: string;
  category: BodyCategory;
  position: 'seated'; // Always seated
  targetConditions: string[];
  difficulty: DifficultyLevel;
  duration: string;
  chairPosition: string;
  description: string;
  specificBenefit: string;
  steps: ExerciseStep[];
  adaptations: Record<string, string>;
  contraindications?: string[];
  progressionPath?: string[];
  chairRequirements: ChairRequirements;
  imageUrl?: string;
}

export interface UserCondition {
  id: string;
  name: string;
  adaptations: Record<string, string>;
}

export interface ChairYogaProfile {
  primaryPain: 'neck' | 'shoulders' | 'back' | 'hips' | 'general';
  painLevel: 'low' | 'medium' | 'high';
  conditions: string[];
  mobilityLevel: 'minimal' | 'moderate' | 'good';
  initialPain: number;
  currentPain: number;
  mobilityImprovement: number;
  chairType: 'standard' | 'office' | 'wheelchair' | 'armchair';
  completedExercises: string[];
  preferredExerciseTime: string;
  lastExercise?: Date;
  currentMood?: string;
  currentDay: number;
}

export interface TherapeuticAchievement {
  id: string;
  name: string;
  icon: string;
  message: string;
  unlockedDate?: Date;
  isUnlocked: boolean;
} 