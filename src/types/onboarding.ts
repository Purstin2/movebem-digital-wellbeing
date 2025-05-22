
export interface QuizAnswer {
  questionId: string;
  value: string;
  weight: number;
}

export interface UserProfile {
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
