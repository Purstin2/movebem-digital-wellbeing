export interface QuizOption {
  value: string;
  label: string;
  description: string;
  weight?: number; // Optional weight for scoring
}

export interface QuizQuestion {
  id: string;
  title: string;
  subtitle: string;
  type: 'single' | 'multiple' | 'slider';
  options: QuizOption[];
}

export interface QuizAnswer {
  questionId: string;
  value: string | string[];
}

export interface QuizResult {
  answers: QuizAnswer[];
  profile: any; // This will be replaced by the ChairYogaProfile type
} 