export interface Exercise {
  id: string;
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  category: string;
  steps: string[];
  benefits: string[];
  precautions: string[];
  imageUrl: string;
  videoUrl: string;
  equipment: string[];
  targetMuscles: string[];
  modifications: string[];
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  category: string;
  ingredients: string[];
  steps: string[];
  benefits: string[];
  imageUrl: string;
  nutritionalInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
} 