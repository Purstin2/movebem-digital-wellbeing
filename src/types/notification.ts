export type NotificationTone = 'supportive' | 'encouraging' | 'celebratory' | 'welcoming' | 'informative';
export type NotificationUrgency = 'gentle' | 'normal' | 'excited' | 'proud';
export type EmotionalState = 'struggling' | 'motivated' | 'consistent' | 'missed';

export interface ContextualNotification {
  id: string;
  title: string;
  body: string;
  action: string;
  actionUrl?: string;
  tone: NotificationTone;
  urgency: NotificationUrgency;
  icon?: string;
  image?: string;
  special?: 'confetti' | 'progress_animation' | 'legendary_celebration';
  read?: boolean;
  createdAt: Date;
  expiresAt?: Date;
}

export interface UserBehavior {
  exerciseLogs: Array<{
    date: Date;
    duration: number;
    completed: boolean;
    timeOfDay: string;
  }>;
  moodLogs: Array<{
    date: Date;
    mood: string;
    value: number;
    factors?: string[];
  }>;
  energyLogs: Array<{
    date: Date;
    value: number;
    timeOfDay: string;
  }>;
  interactionLogs: Array<{
    date: Date;
    action: string;
    feature: string;
    duration?: number;
    timeOfDay: string;
  }>;
}

export interface NotificationStory {
  day: number;
  timing: 'morning' | 'evening' | 'celebration' | 'milestone' | 'completion';
  notification: {
    title: string;
    body: string;
    image?: string;
    action: string;
    actionUrl?: string;
    special?: 'confetti' | 'progress_animation' | 'legendary_celebration';
  };
}

export interface UserJourney {
  startDate: Date;
  currentDay: number;
  track: string;
  completedExercises: number;
  totalMinutesInvested: number;
  consecutiveDays: number;
  achievements: string[];
}

export interface CurrentUserState {
  emotionalState: EmotionalState;
  energyLevel: number;
  consistency: number;
  painLevel: number;
  lastActiveDate?: Date;
}

export interface OptimalTimingPatterns {
  dailyReminder: string; // HH:MM format
  motivational: string;
  celebration: string;
  educational: string;
} 