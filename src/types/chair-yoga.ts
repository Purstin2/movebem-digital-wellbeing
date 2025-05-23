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
  category: 'neck' | 'shoulders' | 'back' | 'hips';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  targetConditions: string[];
  position: 'seated' | 'standing_supported';
  chairPosition: 'seated_edge' | 'seated_with_back_support';
  
  description: string;
  specificBenefit: string;
  
  steps: {
    name: string;
    instruction: string;
    duration: string;
    breathing: string;
    visualization?: string;
    safetyNote?: string;
  }[];
  
  adaptations: {
    [condition: string]: string;
  };
  
  painLevel?: {
    min: number; // 1-10 scale
    max: number; // 1-10 scale
    adaptations: {
      [level: number]: string;
    };
  };
  
  limitations?: {
    mobility: 'none' | 'mild' | 'moderate' | 'severe';
    balance: 'none' | 'mild' | 'moderate' | 'severe';
    strength: 'none' | 'mild' | 'moderate' | 'severe';
    adaptations: {
      [limitation: string]: string;
    };
  };
  
  contraindications: string[];
  imageUrl: string;
  
  chairRequirements: {
    backrest: boolean;
    armrests: boolean;
    wheels: boolean;
  };
  
  track?: 'therapeutic' | 'adaptive' | 'wellness';
  progressionPath?: string[]; // IDs of exercises in progression
}

export interface UserCondition {
  id: string;
  name: string;
  adaptations: Record<string, string>;
}

export interface ChairYogaProfile {
  primaryPain: 'neck' | 'shoulders' | 'back' | 'hips' | 'general';
  painLevel: number; // Changed from enum to 1-10 scale
  painHistory: Array<{
    date: Date;
    level: number;
    location: string;
    triggers?: string[];
  }>;
  conditions: string[];
  specificLimitations: {
    mobility: {
      neck: number; // 1-10 scale
      shoulders: number;
      back: number;
      hips: number;
    };
    strength: {
      upper: number;
      core: number;
      lower: number;
    };
    balance: number;
    coordination: number;
  };
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
  programTrack: 'therapeutic' | 'adaptive' | 'wellness';
  progressionPhase: {
    current: number; // 1-21 for 21-day progression
    history: Array<{
      day: number;
      completed: boolean;
      painLevel: number;
      notes?: string;
    }>;
  };
  adaptations: Record<string, {
    exerciseId: string;
    modification: string;
    effectiveness: number; // 1-5 scale
  }>;
  personalizedSettings: {
    fontScale: number;
    contrast: 'normal' | 'high';
    animationSpeed: 'normal' | 'reduced' | 'none';
    soundEnabled: boolean;
    hapticFeedback: boolean;
    textSize: 'normal' | 'large' | 'extra-large';
  };
}

export interface TherapeuticAchievement {
  id: string;
  name: string;
  icon: string;
  message: string;
  unlockedDate?: Date;
  isUnlocked: boolean;
}

export interface PersonalizationProfile {
  painLevel: number; // 1-10
  limitations: {
    mobility: 'none' | 'mild' | 'moderate' | 'severe';
    balance: 'none' | 'mild' | 'moderate' | 'severe';
    strength: 'none' | 'mild' | 'moderate' | 'severe';
  };
  conditions: string[];
  medications: string[];
  track: 'therapeutic' | 'adaptive' | 'wellness';
  preferences: {
    duration: 'short' | 'medium' | 'long';
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    focus: string[];
  };
}

export interface ProgressionPlan {
  userId: string;
  startDate: Date;
  track: 'therapeutic' | 'adaptive' | 'wellness';
  weeks: {
    weekNumber: number;
    focus: string;
    exercises: {
      day: number;
      exerciseIds: string[];
      recipes: string[];
      adaptations: string[];
    }[];
  }[];
  currentProgress: {
    week: number;
    day: number;
    completedExercises: string[];
  };
}

export const MedicalDisclaimer = {
  general: [
    'Este conteúdo não substitui acompanhamento médico profissional',
    'Consulte seu médico antes de iniciar qualquer programa de exercícios',
    'Pare imediatamente se sentir dor excessiva ou desconforto',
    'Adapte os exercícios conforme sua condição física individual',
    'Em caso de condições médicas específicas, busque orientação profissional'
  ],
  exerciseSpecific: (exercise: ChairYogaExercise) => [
    `Contraindicações específicas para ${exercise.title}:`,
    ...exercise.contraindications
  ],
  medicationWarnings: {
    anticoagulants: 'Evite exercícios com risco de impacto ou pressão excessiva',
    bloodPressure: 'Monitore sua pressão durante os exercícios',
    painMedication: 'Não exceda limites naturais de movimento'
  }
}; 