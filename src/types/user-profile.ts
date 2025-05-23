export type PainLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type BodyArea = 'neck' | 'shoulders' | 'upper_back' | 'lower_back' | 'hips' | 'knees' | 'ankles';

export type PhysicalLimitation = {
  area: BodyArea;
  description: string;
  painLevel: PainLevel;
  triggers?: string[];
  aggravators?: string[];
  reliefFactors?: string[];
};

export type MedicalCondition = {
  name: string;
  severity: 'mild' | 'moderate' | 'severe';
  medications?: string[];
  restrictions?: string[];
  requiresModification: boolean;
};

export type UserProfile = {
  id: string;
  name: string;
  age: number;
  physicalLimitations: PhysicalLimitation[];
  medicalConditions: MedicalCondition[];
  exerciseExperience: 'beginner' | 'intermediate' | 'advanced';
  preferredTime: 'morning' | 'afternoon' | 'evening';
  dietaryRestrictions?: string[];
  medications?: string[];
  goals: string[];
  painAreas: BodyArea[];
  maxPainLevel: PainLevel;
  needsChairSupport: boolean;
  mobilityLevel: 'limited' | 'moderate' | 'full';
  balanceConfidence: 'low' | 'medium' | 'high';
  energyLevel: 'low' | 'medium' | 'high';
  stressLevel: 'low' | 'medium' | 'high';
  sleepQuality: 'poor' | 'fair' | 'good';
  preferredTrack?: 'therapeutic' | 'adaptive' | 'wellness';
};

export interface ProgramTrack {
  name: 'therapeutic' | 'adaptive' | 'wellness';
  description: string;
  requirements: {
    max_pain_level: number;
    allowed_limitations: string[];
    medical_clearance_needed: boolean;
  };
  progression: {
    duration_days: number;
    phases: {
      name: string;
      duration_days: number;
      exercise_intensity: number;
      required_adaptations: string[];
    }[];
  };
}

export interface DailyPlan {
  date: string;
  track: ProgramTrack['name'];
  exercises: {
    id: string;
    adaptations: string[];
    pain_monitoring: boolean;
  }[];
  recipes: {
    id: string;
    modifications: string[];
  }[];
  wellness_tips: string[];
  safety_reminders: string[];
}

export type ExerciseModification = {
  originalExerciseId: string;
  modifiedSteps: string[];
  supportProps: string[];
  precautions: string[];
  alternativeBreathing?: string;
  reducedDuration?: string;
  painManagementTips: string[];
};

export type PersonalizationSettings = {
  textSize: 'normal' | 'large' | 'extra-large';
  contrast: 'normal' | 'high';
  animationSpeed: 'normal' | 'reduced' | 'none';
  soundEnabled: boolean;
  useVoiceGuide: boolean;
  showDetailedInstructions: boolean;
  requiresRestReminders: boolean;
  showPainScale: boolean;
  emergencyContactSet: boolean;
}; 