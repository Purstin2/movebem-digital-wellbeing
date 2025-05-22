export interface QuizAnswer {
  questionId: string;
  value: string;
  weight: number;
}

export interface UserProfile {
  firstName?: string;
  painLevel: 'low' | 'medium' | 'high';
  primaryPain: 'neck' | 'shoulders' | 'back' | 'hips' | 'general';
  mobilityLevel: 'limited' | 'moderate' | 'good';
  goals: string[];
  age: string;
  conditions: string[];
  experience: 'beginner' | 'some' | 'experienced';
  trackAssigned?: 'therapeutic' | 'adaptive' | 'wellness';
  currentDay?: number;
  startDate?: Date;
  preferences?: {
    soundEnabled: boolean;
    reminderTime: string;
    adaptationLevel: 'easy' | 'normal' | 'challenging';
  };
}

export interface ExerciseStep {
  step: number;
  title: string;
  instruction: string;
  duration?: string;
  breathingPattern?: string;
  commonMistakes?: string[];
  pose: string;
  adaptations?: {
    easy: string;
    normal: string;
    challenging: string;
  };
  safetyWarnings?: string[];
}

export interface Adaptation {
  condition: string;
  modification: string;
  visualCue?: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  targetAreas: string[];
  conditions: string[];
  contraindications: string[];
  steps: ExerciseStep[];
  adaptations: Adaptation[];
  benefits: string[];
  safetyTips: string[];
}

export interface Track {
  id: string;
  name: string;
  description: string;
  color: string;
  targetConditions: string[];
  weeks: TrackWeek[];
  nutritionFocus: string[];
  mindfulnessComponent: string[];
  focusAreas: string[];
  weeklyGoal: number;
  sessionDuration: number;
}

export interface TrackWeek {
  week: number;
  theme: string;
  goals: string[];
  exercises: string[];
  nutritionTips: string[];
  mindfulnessPractice: string;
}
