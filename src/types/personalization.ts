export interface PainLevel {
  level: number; // 1-10
  location: string;
  frequency: 'constant' | 'intermittent' | 'occasional';
  triggers?: string[];
}

export interface UserLimitation {
  type: 'mobility' | 'strength' | 'balance' | 'coordination' | 'endurance';
  severity: 'mild' | 'moderate' | 'severe';
  affectedAreas: string[];
  adaptations: string[];
}

export interface TherapyTrack {
  id: string;
  name: 'therapeutic' | 'adaptive' | 'wellness';
  description: string;
  suitableFor: {
    painLevels: PainLevel[];
    conditions: string[];
    limitations: string[];
  };
  progression: {
    initialPhase: number;
    phaseDuration: number;
    evaluationPoints: number[];
    adaptationTriggers: {
      painIncrease: number;
      limitationChange: string;
      fatigueLevel: number;
    };
  };
}

export interface PersonalizedProgram {
  userId: string;
  track: TherapyTrack;
  currentDay: number;
  painHistory: {
    date: Date;
    level: PainLevel;
    location: string;
    triggers?: string[];
  }[];
  limitations: UserLimitation[];
  adaptations: {
    exercises: Record<string, string>;
    recipes: Record<string, string>;
  };
  progressMetrics: {
    painReduction: number;
    mobilityImprovement: number;
    adherenceRate: number;
    satisfactionScore: number;
  };
}

export interface DailyAdaptation {
  date: Date;
  exercises: {
    id: string;
    adaptations: string[];
    intensity: number;
    duration: number;
    restPeriods: number;
  }[];
  recipes: {
    id: string;
    modifications: string[];
    portions: number;
    timing: string;
  }[];
  wellnessMetrics: {
    morningPain: PainLevel;
    energyLevel: number;
    sleepQuality: number;
    stressLevel: number;
  };
}

export interface MedicationInteraction {
  medicationType: string;
  exerciseWarnings: string[];
  recipeWarnings: string[];
  recommendations: string[];
  requiredModifications: string[];
}

export const painLevelAdaptations = {
  mild: [1, 2, 3],
  moderate: [4, 5, 6],
  severe: [7, 8, 9, 10]
};

export const trackAssignment = (
  painLevel: PainLevel,
  limitations: UserLimitation[],
  conditions: string[]
): TherapyTrack['name'] => {
  if (painLevel.level >= 7 || limitations.some(l => l.severity === 'severe')) {
    return 'therapeutic';
  } else if (painLevel.level >= 4 || limitations.some(l => l.severity === 'moderate')) {
    return 'adaptive';
  }
  return 'wellness';
};

export interface PhysicalLimitation {
  type: 'mobility' | 'strength' | 'balance' | 'coordination' | 'endurance';
  severity: 'mild' | 'moderate' | 'severe';
  affectedArea: string;
  accommodations: string[];
}

export interface MedicalCondition {
  name: string;
  medications: string[];
  restrictions: string[];
  precautions: string[];
}

export interface UserProfile {
  userId: string;
  painLevels: PainLevel[];
  limitations: PhysicalLimitation[];
  medicalConditions: MedicalCondition[];
  preferences: {
    exerciseTime: 'morning' | 'afternoon' | 'evening';
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    goals: string[];
  };
}

export interface ExerciseModification {
  original_exercise_id: string;
  pain_level_adaptations: {
    min_level: number;
    max_level: number;
    modifications: string[];
  }[];
  limitation_adaptations: {
    limitation_type: PhysicalLimitation['type'];
    severity: PhysicalLimitation['severity'];
    modifications: string[];
  }[];
  condition_specific_adaptations: {
    condition: string;
    modifications: string[];
    contraindications?: string[];
  }[];
}

export interface RecipeModification {
  originalRecipeId: string;
  medicalConditions: string[];
  allergies: string[];
  modifications: {
    ingredients: {
      original: string;
      substitute: string;
      reason: string;
    }[];
    instructions: string[];
    warnings: string[];
  };
}

// Constants for personalization
export const MAX_PAIN_LEVEL = 10;
export const MIN_PAIN_LEVEL = 1;
export const PROGRESSION_WEEKS = 3; // 21 days
export const TRACK_TYPES = ['therapeutic', 'adaptive', 'wellness'] as const;

// Utility types
export type TrackType = typeof TRACK_TYPES[number];
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export type TherapyTrackName = TherapyTrack['name'];

export interface DietaryRestriction {
  type: string;
  foods: string[];
  alternatives: string[];
  reason: string;
}

export interface ProgressionPlan {
  userId: string;
  track: ProgramTrack;
  startDate: Date;
  currentDay: number;
  exercises: {
    day: number;
    exerciseIds: string[];
    completed: boolean;
    adaptations: string[];
  }[];
  recipes: {
    day: number;
    recipeIds: string[];
    completed: boolean;
    modifications: string[];
  }[];
}

export interface ExerciseAdaptation {
  originalExerciseId: string;
  painLevel: number;
  limitations: string[];
  modifications: {
    steps: string[];
    props: string[];
    precautions: string[];
  };
}

export interface RecipeAdaptation {
  diabetic: {
    sweeteners: {
      honey: 'stevia',
      'maple syrup': 'monk fruit',
      sugar: 'erythritol'
    },
    portions: {
      fruits: 0.5,  // reduzir pela metade
      carbs: 0.75   // reduzir 25%
    }
  };
  
  hypertension: {
    sodium: {
      salt: 'herb blend',
      'soy sauce': 'coconut aminos'
    },
    restricted: [
      'processed foods',
      'cured meats',
      'pickled foods'
    ]
  };
  
  thyroid: {
    avoid: [
      'raw cruciferous',
      'soy products',
      'excess iodine'
    ],
    increase: [
      'selenium rich',
      'zinc rich',
      'iron rich'
    ]
  };
}

export interface LimitationProfile {
  type: string;
  severity: 'mild' | 'moderate' | 'severe';
  affectedAreas: string[];
  adaptations: Record<string, string>;
}

export interface AccessibilityPreferences {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  touchTargetSize: 'normal' | 'large';
  textSpacing: number;
  lineHeight: number;
}

export interface TherapeuticTrack {
  painManagement: {
    exercises: string[];
    recipes: string[];
    adaptations: Record<string, string>;
  };
  rehabilitationGoals: {
    shortTerm: string[];
    longTerm: string[];
    progress: number;
  };
  medicalConsiderations: string[];
}

export interface AdaptiveTrack {
  modifiedExercises: {
    original: string;
    adapted: string;
    reason: string;
  }[];
  supportiveRecipes: string[];
  accommodations: Record<string, string>;
}

export interface WellnessTrack {
  preventiveExercises: string[];
  maintenanceRecipes: string[];
  lifestyleRecommendations: string[];
}

export interface ProgressionDay {
  day: number;
  exercises: string[];
  recipes: string[];
  reflections: {
    painLevel: PainLevel;
    energyLevel: number;
    notes: string;
  };
  achievements: string[];
}

export interface SupportResources {
  faqCategory: string;
  commonIssues: string[];
  solutions: string[];
  professionalContact: {
    type: string;
    name: string;
    contact: string;
    availability: string;
  };
}

export type ProgramTrack = 'therapeutic' | 'adaptive' | 'wellness';

export interface TrackRequirements {
  therapeutic: {
    maxPainLevel: PainLevel;
    requiredProfessionalGuidance: boolean;
    adaptationRequired: boolean;
    progressionSpeed: 'very_slow' | 'slow' | 'moderate';
  };
  adaptive: {
    maxPainLevel: PainLevel;
    adaptationRequired: boolean;
    progressionSpeed: 'slow' | 'moderate';
  };
  wellness: {
    maxPainLevel: PainLevel;
    adaptationRequired: boolean;
    progressionSpeed: 'moderate' | 'normal';
  };
}

export interface ChairYogaExercise {
  id: string;
  title: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  contraindications: string[];
  adaptations: {
    [key in PhysicalLimitation['type']]?: string[];
  };
}

export interface Recipe {
  id: string;
  title: string;
  category: string;
  contraindications?: string[];
  targetProfile: string[];
  personalizedTips: {
    [condition: string]: string;
  };
} 