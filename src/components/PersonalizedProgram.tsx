import React from 'react';
import { PersonalizedProgram as ProgramType, TherapyTrack, PainLevel, UserLimitation } from '@/types/personalization';
import { ChairYogaExercise } from '@/types/chair-yoga';
import { Recipe } from '@/types/nutrition';

interface PersonalizedProgramProps {
  userProfile: {
    painLevel: PainLevel;
    conditions: string[];
    track: TherapyTrack;
  };
  exercises: ChairYogaExercise[];
  recipes: Recipe[];
  onUpdateProgress: (day: number, completed: boolean) => void;
}

// Define an internal structure for what the component's UI currently expects
interface InternalProgramData {
  userId: string;
  track: TherapyTrack;
  currentDay: number;
  // painHistory: { date: Date; level: PainLevel }[]; // Simplified for now
  limitations: UserLimitation[];
  adaptations: {
    exercises: Record<string, string>;
    recipes: Record<string, string>;
  };
  // progressMetrics: any; // Simplified for now
  
  // Fields specific to this component's internal logic/UI that are not in ProgramType
  exerciseSequence: string[];
  nutritionPlan: string[];
  progressionTimeline: {
    currentDay: number;
    totalDays: number;
    milestones: { day: number; achievement: string; completed: boolean }[];
  };
  contraindications: string[]; // from profile.conditions
}

const trackDescriptions = {
  therapeutic: {
    title: 'Trilha Terapêutica',
    description: 'Programa especializado para dores severas e condições crônicas',
    focus: 'Redução de dor e recuperação gradual'
  },
  adaptive: {
    title: 'Trilha Adaptativa',
    description: 'Exercícios modificados para limitações moderadas',
    focus: 'Adaptação e fortalecimento progressivo'
  },
  wellness: {
    title: 'Trilha Wellness',
    description: 'Programa preventivo e de bem-estar geral',
    focus: 'Manutenção da saúde e prevenção'
  }
};

export const PersonalizedProgram: React.FC<PersonalizedProgramProps> = ({
  userProfile,
  exercises,
  recipes,
  onUpdateProgress
}) => {
  const [currentDay, setCurrentDay] = React.useState(1);
  // Use the internal data structure for the program state
  const [program, setProgram] = React.useState<InternalProgramData | null>(null);

  React.useEffect(() => {
    const generatedProgram = generateProgram(userProfile, exercises, recipes);
    setProgram(generatedProgram);
  }, [userProfile, exercises, recipes]);

  const generateProgram = (
    profile: PersonalizedProgramProps['userProfile'],
    availableExercises: ChairYogaExercise[],
    availableRecipes: Recipe[]
  ): InternalProgramData => { // Returns InternalProgramData
    const suitableExercises = availableExercises.filter(exercise => {
      const isAppropriateForPainLevel = 
        (profile.painLevel.level >= 7 && exercise.difficulty === 'beginner') ||
        (profile.painLevel.level >= 4 && profile.painLevel.level <= 6 && exercise.difficulty !== 'advanced') ||
        (profile.painLevel.level < 4);

      const hasNoContraindications = !exercise.contraindications?.some(
        contra => profile.conditions.includes(contra)
      );
      return isAppropriateForPainLevel && hasNoContraindications;
    });

    // TODO: Revisit recipe filtering logic based on actual Recipe type and user profile conditions.
    // For now, including all recipes to avoid type errors with non-existent fields.
    const suitableRecipes = availableRecipes;

    const exerciseSequence = generateExerciseSequence(suitableExercises, profile.track);
    const nutritionPlan = generateNutritionPlan(suitableRecipes, profile.track);
    const milestones = generateMilestones(profile.track);

    return {
      userId: 'temp-user-id', // Placeholder
      track: profile.track,
      currentDay: 1, // Initial current day
      limitations: profile.conditions.map(condition => ({
        type: condition as any, // TEMPORARY: Needs proper mapping from string to UserLimitationType
        severity: profile.painLevel.level >= 7 ? 'severe' : profile.painLevel.level >= 4 ? 'moderate' : 'mild',
        affectedAreas: [condition], 
        adaptations: [] as string[] 
      })),
      adaptations: generateAdaptations(profile),
      exerciseSequence,
      nutritionPlan,
      progressionTimeline: {
        currentDay: 1,
        totalDays: 21,
        milestones
      },
      contraindications: profile.conditions,
    };
  };

  const generateExerciseSequence = (
    exercises: ChairYogaExercise[],
    track: TherapyTrack
  ): string[] => {
    switch (track.name) {
      case 'therapeutic':
        return [];
      case 'adaptive':
        return [];
      case 'wellness':
        return [];
      default:
        return [];
    }
  };

  const generateTherapeuticSequence = (exercises: ChairYogaExercise[]): string[] => { return []; };
  const generateAdaptiveSequence = (exercises: ChairYogaExercise[]): string[] => { return []; };
  const generateWellnessSequence = (exercises: ChairYogaExercise[]): string[] => { return []; };

  const generateNutritionPlan = (
    recipes: Recipe[],
    track: TherapyTrack
  ): string[] => {
    switch (track.name) {
      case 'therapeutic':
        return recipes
          .filter(r => r.category === 'anti_inflammatory')
          .map(r => r.id);
      case 'adaptive':
        return recipes
          .filter(r => r.category === 'hormonal_balance' || r.category === 'energy_boost')
          .map(r => r.id);
      case 'wellness':
        return recipes
          .filter(r => r.category === 'sleep_support' || r.category === 'energy_boost')
          .map(r => r.id);
      default:
        return [];
    }
  };

  const generateMilestones = (track: TherapyTrack) => {
    const baseMilestones = [
      { day: 1, achievement: 'Início da Jornada', completed: false },
      { day: 7, achievement: 'Primeira Semana Completa', completed: false },
      { day: 14, achievement: 'Duas Semanas de Dedicação', completed: false },
      { day: 21, achievement: 'Programa Concluído!', completed: false }
    ];

    switch (track.name) {
      case 'therapeutic':
        return [
          ...baseMilestones,
          { day: 3, achievement: 'Primeiros Passos na Redução da Dor', completed: false },
          { day: 10, achievement: 'Progresso na Mobilidade', completed: false }
        ];
      case 'adaptive':
        return [
          ...baseMilestones,
          { day: 5, achievement: 'Adaptações Dominadas', completed: false },
          { day: 12, achievement: 'Novo Nível de Conforto', completed: false }
        ];
      case 'wellness':
        return [
          ...baseMilestones,
          { day: 4, achievement: 'Hábitos Saudáveis Estabelecidos', completed: false },
          { day: 18, achievement: 'Bem-Estar Elevado', completed: false }
        ];
      default:
        return baseMilestones;
    }
  };

  const generateAdaptations = (profile: PersonalizedProgramProps['userProfile']) => {
    const adaptationsResult: Record<string, string> = {};

    if (profile.painLevel.level >= 7) {
      adaptationsResult.movement = 'Realizar movimentos com amplitude mínima';
      adaptationsResult.pace = 'Velocidade muito reduzida';
      adaptationsResult.rest = 'Pausas frequentes entre exercícios';
    } else if (profile.painLevel.level >= 4) {
      adaptationsResult.movement = 'Amplitude moderada conforme conforto';
      adaptationsResult.pace = 'Velocidade reduzida';
      adaptationsResult.rest = 'Pausas regulares conforme necessidade';
    }

    profile.conditions.forEach(condition => {
      adaptationsResult[condition] = `Adaptações específicas para ${condition}`;
    });

    return { exercises: adaptationsResult, recipes: {} };
  };

  if (!program) {
    return <div>Gerando seu programa personalizado...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4">
          {trackDescriptions[program.track.name].title}
        </h1>
        <p className="text-lg mb-2">{trackDescriptions[program.track.name].description}</p>
        <p className="text-lg mb-6">Foco: {trackDescriptions[program.track.name].focus}</p>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Seu Progresso</h2>
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex-1 h-2 bg-fenjes-neutral-300 dark:bg-fenjes-neutral-700 rounded-full">
              <div 
                className="h-full bg-fenjes-yellow rounded-full"
                style={{ width: `${(currentDay / 21) * 100}%` }}
              />
            </div>
            <span className="text-lg font-medium">Dia {currentDay}/21</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-medium mb-2">Exercícios de Hoje</h3>
              <ul className="space-y-2">
                {program.exerciseSequence.slice((currentDay - 1) * 3, currentDay * 3).map((exerciseId) => {
                  const exercise = exercises.find(e => e.id === exerciseId);
                  return exercise ? (
                    <li key={exercise.id} className="flex items-center space-x-2">
                      <input 
                        type="checkbox"
                        className="w-5 h-5 text-blue-600 rounded"
                        onChange={(e) => onUpdateProgress(currentDay, e.target.checked)}
                      />
                      <span>{exercise.title}</span>
                    </li>
                  ) : null;
                })}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Receitas Recomendadas</h3>
              <ul className="space-y-2">
                {program.nutritionPlan.slice((currentDay - 1) * 2, currentDay * 2).map((recipeId) => {
                  const recipe = recipes.find(r => r.id === recipeId);
                  return recipe ? (
                    <li key={recipe.id}>{recipe.name}</li>
                  ) : null;
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Próximos Marcos</h2>
          <div className="space-y-4">
            {program.progressionTimeline.milestones
              .filter(m => !m.completed && m.day >= currentDay)
              .slice(0, 3)
              .map((milestone) => (
                <div key={milestone.day} className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-medium">D{milestone.day}</span>
                  </div>
                  <span className="flex-1">{milestone.achievement}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedProgram; 