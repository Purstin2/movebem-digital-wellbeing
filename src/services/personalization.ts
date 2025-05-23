import { ChairYogaExercise, ChairYogaProfile, UserCondition } from '@/types/chair-yoga';
import { Recipe, NutritionalProfile, PersonalizedNutrition } from '@/types/nutrition';
import { UserProfile, Track } from '@/types/onboarding';
import { 
  ProgramTrack,
  ProgressionPlan,
  ExerciseAdaptation,
  RecipeModification,
  PainLevel,
  PhysicalLimitation
} from '@/types/personalization';

export interface PersonalizationContext {
  painLevel: number; // 1-10 scale
  specificLimitations: string[];
  conditions: UserCondition[];
  currentTrack: 'therapeutic' | 'adaptive' | 'wellness';
  progressionDay: number;
}

export class PersonalizationService {
  private static instance: PersonalizationService;
  
  private constructor() {}
  
  static getInstance(): PersonalizationService {
    if (!PersonalizationService.instance) {
      PersonalizationService.instance = new PersonalizationService();
    }
    return PersonalizationService.instance;
  }

  adaptExerciseForUser(
    exercise: ChairYogaExercise,
    context: PersonalizationContext
  ): ChairYogaExercise {
    const adapted = { ...exercise };

    // Adjust based on pain level
    if (context.painLevel >= 7) {
      adapted.difficulty = 'beginner';
      adapted.duration = this.reduceDuration(exercise.duration);
    }

    // Apply condition-specific adaptations
    context.conditions.forEach(condition => {
      if (condition.adaptations[exercise.id]) {
        adapted.steps = this.adaptStepsForCondition(
          exercise.steps,
          condition.adaptations[exercise.id]
        );
      }
    });

    // Adjust for specific limitations
    context.specificLimitations.forEach(limitation => {
      if (exercise.adaptations[limitation]) {
        adapted.steps = this.incorporateAdaptation(
          adapted.steps,
          exercise.adaptations[limitation]
        );
      }
    });

    return adapted;
  }

  createPersonalizedTrack(
    profile: UserProfile,
    baseTrack: Track
  ): Track {
    const personalizedTrack = { ...baseTrack };

    // Adjust track based on profile
    switch (profile.trackAssigned) {
      case 'therapeutic':
        personalizedTrack.sessionDuration = 15; // Shorter sessions
        personalizedTrack.weeklyGoal = 3; // Fewer sessions per week
        break;
      case 'adaptive':
        personalizedTrack.sessionDuration = 20;
        personalizedTrack.weeklyGoal = 4;
        break;
      case 'wellness':
        personalizedTrack.sessionDuration = 30;
        personalizedTrack.weeklyGoal = 5;
        break;
    }

    // Create 21-day progression
    personalizedTrack.weeks = this.create21DayProgression(
      profile,
      baseTrack.exercises
    );

    return personalizedTrack;
  }

  personalizeNutrition(
    profile: NutritionalProfile,
    recipes: Recipe[]
  ): PersonalizedNutrition {
    const recommendations = recipes.filter(recipe => {
      // Match recipes to user needs
      const matchesNeeds = this.matchRecipeToNeeds(recipe, profile);
      // Check for contraindications
      const isSafe = this.checkRecipeSafety(recipe, profile.conditions);
      return matchesNeeds && isSafe;
    });

    return {
      dailyRecommendations: this.prioritizeRecipes(recommendations, profile),
      personalizedTips: this.generateNutritionTips(profile),
      weeklyMealPlan: this.createWeeklyPlan(recommendations, profile)
    };
  }

  private reduceDuration(duration: string): string {
    const [time, unit] = duration.split(' ');
    return `${Math.floor(parseInt(time) * 0.7)} ${unit}`;
  }

  private adaptStepsForCondition(
    steps: any[],
    adaptation: string
  ): any[] {
    return steps.map(step => ({
      ...step,
      instruction: `${step.instruction} (${adaptation})`
    }));
  }

  private incorporateAdaptation(
    steps: any[],
    adaptation: string
  ): any[] {
    return steps.map(step => ({
      ...step,
      adaptations: {
        ...step.adaptations,
        specific: adaptation
      }
    }));
  }

  private create21DayProgression(
    profile: UserProfile,
    exercises: string[]
  ): any[] {
    // Implementation for 21-day progression
    return [];
  }

  private matchRecipeToNeeds(
    recipe: Recipe,
    profile: NutritionalProfile
  ): boolean {
    // Implementation for recipe matching
    return true;
  }

  private checkRecipeSafety(
    recipe: Recipe,
    conditions: string[]
  ): boolean {
    // Implementation for safety checking
    return true;
  }

  private prioritizeRecipes(
    recipes: Recipe[],
    profile: NutritionalProfile
  ): Recipe[] {
    // Implementation for recipe prioritization
    return recipes;
  }

  private generateNutritionTips(
    profile: NutritionalProfile
  ): string[] {
    // Implementation for tip generation
    return [];
  }

  private createWeeklyPlan(
    recipes: Recipe[],
    profile: NutritionalProfile
  ): Recipe[][] {
    // Implementation for weekly plan
    return [];
  }

  // Determina a trilha mais apropriada baseada no perfil do usuário
  static determineTrack(profile: UserProfile): ProgramTrack['type'] {
    const maxPainLevel = Math.max(...profile.painLevels.map(p => p.level));
    const hasSevereLimitations = profile.limitations.some(l => l.severity === 'severe');
    
    if (maxPainLevel >= 7 || hasSevereLimitations) {
      return 'therapeutic';
    } else if (maxPainLevel >= 4 || profile.limitations.length > 0) {
      return 'adaptive';
    }
    return 'wellness';
  }

  // Cria um plano de progressão personalizado de 21 dias
  static createProgressionPlan(
    profile: UserProfile,
    exercises: ChairYogaExercise[],
    recipes: Recipe[]
  ): ProgressionPlan {
    const track = this.determineTrack(profile);
    const plan: ProgressionPlan = {
      userId: profile.userId,
      track: {
        type: track,
        description: this.getTrackDescription(track),
        requirements: this.getTrackRequirements(track)
      },
      startDate: new Date(),
      currentDay: 1,
      exercises: [],
      recipes: []
    };

    // Distribui exercícios pelos 21 dias
    for (let day = 1; day <= 21; day++) {
      const dayExercises = this.selectDailyExercises(exercises, profile, day);
      plan.exercises.push({
        day,
        exerciseIds: dayExercises.map(e => e.id),
        completed: false,
        adaptations: this.generateExerciseAdaptations(dayExercises, profile)
      });

      const dayRecipes = this.selectDailyRecipes(recipes, profile, day);
      plan.recipes.push({
        day,
        recipeIds: dayRecipes.map(r => r.id),
        completed: false,
        modifications: this.generateRecipeModifications(dayRecipes, profile)
      });
    }

    return plan;
  }

  // Seleciona exercícios apropriados para o dia
  private static selectDailyExercises(
    exercises: ChairYogaExercise[],
    profile: UserProfile,
    day: number
  ): ChairYogaExercise[] {
    const weekNumber = Math.ceil(day / 7);
    const difficulty = this.calculateProgressiveDifficulty(profile, weekNumber);
    
    return exercises
      .filter(exercise => {
        // Filtra por nível de dificuldade
        if (exercise.difficulty !== difficulty) return false;
        
        // Verifica contraindicações
        if (this.hasContraindications(exercise, profile)) return false;
        
        // Verifica se é apropriado para as condições do usuário
        return this.isExerciseAppropriate(exercise, profile);
      })
      .slice(0, 3); // Seleciona 3 exercícios por dia
  }

  // Gera adaptações específicas para exercícios
  private static generateExerciseAdaptations(
    exercises: ChairYogaExercise[],
    profile: UserProfile
  ): string[] {
    const adaptations: string[] = [];
    
    exercises.forEach(exercise => {
      const painLevel = this.getRelevantPainLevel(profile, exercise.category);
      if (painLevel > 5) {
        adaptations.push(`Reduza amplitude de movimento em ${exercise.title}`);
        adaptations.push(`Aumente pausas entre repetições`);
      }

      profile.limitations.forEach(limitation => {
        if (this.isLimitationRelevant(limitation, exercise)) {
          adaptations.push(
            ...this.generateLimitationAdaptations(limitation, exercise)
          );
        }
      });
    });

    return adaptations;
  }

  // Seleciona receitas apropriadas para o dia
  private static selectDailyRecipes(
    recipes: Recipe[],
    profile: UserProfile,
    day: number
  ): Recipe[] {
    return recipes
      .filter(recipe => {
        // Verifica restrições alimentares
        if (this.hasRecipeRestrictions(recipe, profile)) return false;
        
        // Verifica se beneficia as condições do usuário
        return this.isRecipeAppropriate(recipe, profile);
      })
      .slice(0, 2); // Seleciona 2 receitas por dia
  }

  // Gera modificações específicas para receitas
  private static generateRecipeModifications(
    recipes: Recipe[],
    profile: UserProfile
  ): string[] {
    const modifications: string[] = [];
    
    recipes.forEach(recipe => {
      profile.medicalConditions.forEach(condition => {
        const recipeModifications = this.getRecipeModificationsForCondition(
          recipe,
          condition
        );
        modifications.push(...recipeModifications);
      });
    });

    return modifications;
  }

  // Utilitários privados
  private static getTrackDescription(track: ProgramTrack['type']): string {
    const descriptions = {
      therapeutic: 'Programa terapêutico para manejo de dor e recuperação',
      adaptive: 'Programa adaptativo para limitações moderadas',
      wellness: 'Programa de bem-estar para prevenção e manutenção'
    };
    return descriptions[track];
  }

  private static getTrackRequirements(track: ProgramTrack['type']) {
    const requirements = {
      therapeutic: {
        maxPainLevel: 8,
        allowedLimitations: ['mobility', 'strength', 'balance'],
        excludedConditions: ['acute_injury', 'severe_vertigo']
      },
      adaptive: {
        maxPainLevel: 6,
        allowedLimitations: ['mobility', 'balance'],
        excludedConditions: ['acute_injury']
      },
      wellness: {
        maxPainLevel: 4,
        allowedLimitations: [],
        excludedConditions: []
      }
    };
    return requirements[track];
  }

  private static calculateProgressiveDifficulty(
    profile: UserProfile,
    weekNumber: number
  ): string {
    const baseLevel = profile.preferences.difficulty;
    if (weekNumber === 1) return baseLevel;
    
    const progressionMap = {
      beginner: ['beginner', 'beginner', 'intermediate'],
      intermediate: ['intermediate', 'intermediate', 'advanced'],
      advanced: ['advanced', 'advanced', 'advanced']
    };
    
    return progressionMap[baseLevel][weekNumber - 1] || baseLevel;
  }

  private static hasContraindications(
    exercise: ChairYogaExercise,
    profile: UserProfile
  ): boolean {
    return exercise.contraindications.some(
      contraindication => 
        profile.medicalConditions.includes(contraindication)
    );
  }

  private static isExerciseAppropriate(
    exercise: ChairYogaExercise,
    profile: UserProfile
  ): boolean {
    // Verifica se o exercício é apropriado para as condições do usuário
    const relevantPainLevel = this.getRelevantPainLevel(profile, exercise.category);
    if (relevantPainLevel > 7) return false;

    // Verifica se há adaptações disponíveis para limitações
    const hasRequiredAdaptations = profile.limitations.every(limitation =>
      exercise.adaptations[limitation.type]
    );

    return hasRequiredAdaptations;
  }

  private static getRelevantPainLevel(
    profile: UserProfile,
    category: string
  ): number {
    const relevantPain = profile.painLevels.find(
      pain => pain.location.toLowerCase().includes(category.toLowerCase())
    );
    return relevantPain?.level || 0;
  }

  private static isLimitationRelevant(
    limitation: PhysicalLimitation,
    exercise: ChairYogaExercise
  ): boolean {
    // Mapeia limitações para categorias de exercícios
    const limitationMap = {
      mobility: ['neck', 'shoulders', 'back', 'hips'],
      balance: ['standing', 'dynamic'],
      strength: ['resistance', 'holding'],
      coordination: ['flow', 'sequence']
    };

    return limitationMap[limitation.type].some(
      category => exercise.category.includes(category)
    );
  }

  private static generateLimitationAdaptations(
    limitation: PhysicalLimitation,
    exercise: ChairYogaExercise
  ): string[] {
    const adaptations = [];
    const { type, severity } = limitation;

    if (severity === 'severe') {
      adaptations.push(`Use suporte adicional para ${exercise.title}`);
      adaptations.push(`Reduza amplitude em 50%`);
    } else if (severity === 'moderate') {
      adaptations.push(`Modifique ${exercise.title} conforme necessário`);
      adaptations.push(`Faça pausas frequentes`);
    }

    return adaptations;
  }

  private static hasRecipeRestrictions(
    recipe: Recipe,
    profile: UserProfile
  ): boolean {
    return profile.medicalConditions.some(condition =>
      recipe.contraindications?.includes(condition)
    );
  }

  private static isRecipeAppropriate(
    recipe: Recipe,
    profile: UserProfile
  ): boolean {
    // Verifica se a receita beneficia as condições do usuário
    return recipe.targetProfile.some(target =>
      profile.medicalConditions.includes(target)
    );
  }

  private static getRecipeModificationsForCondition(
    recipe: Recipe,
    condition: string
  ): string[] {
    const modifications = [];
    
    if (recipe.personalizedTips[condition]) {
      modifications.push(recipe.personalizedTips[condition]);
    }

    return modifications;
  }
} 