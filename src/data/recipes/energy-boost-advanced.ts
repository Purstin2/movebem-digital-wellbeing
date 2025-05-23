import { Recipe } from '@/types/nutrition';

export const energyBoostRecipesAdvanced: Recipe[] = [
  {
    id: 'adaptogenic_energy_elixir',
    title: 'Elixir Energético Adaptogênico',
    category: 'energy_boost',
    targetProfile: ['fatigue', 'stress', 'brain_fog'],
    difficulty: 'medium',
    prepTime: '10 min',
    emotionalMessage: 'Energia sustentável para seu dia',
    
    ingredients: [
      { item: '1 col chá cordyceps', benefit: 'Aumenta ATP celular' },
      { item: '1 col chá rhodiola', benefit: 'Adaptógeno energizante' },
      { item: '1 col sopa cacau cru', benefit: 'Teobromina natural' },
      { item: '1 tâmara', benefit: 'Açúcares complexos' },
      { item: '1 col chá maca', benefit: 'Energia hormonal' },
      { item: 'Leite de amêndoas', benefit: 'Proteína vegetal' },
      { item: '1 pitada sal rosa', benefit: 'Minerais essenciais' }
    ],
    
    preparation: [
      'Aqueça leite sem ferver',
      'Adicione adaptógenos e cacau',
      'Bata tudo no liquidificador',
      'Adoce com tâmara',
      'Sirva morno'
    ],
    
    scientificBacking: 'Cordyceps aumenta produção de ATP em 55% em estudos clínicos',
    
    timing: 'Ideal 30min antes de atividade física',
    
    personalizedTips: {
      blood_pressure: 'Monitore efeito dos adaptógenos',
      anxiety: 'Reduza dose de rhodiola',
      afternoon_fatigue: 'Tome como lanche da tarde'
    }
  },
  {
    id: 'focus_power_balls',
    title: 'Bolinhas do Poder Mental',
    category: 'energy_boost',
    targetProfile: ['mental_focus', 'sustained_energy'],
    difficulty: 'easy',
    prepTime: '15 min',
    emotionalMessage: 'Combustível para seu cérebro',
    
    ingredients: [
      { item: '1 xícara nozes', benefit: 'Ômega-3 para cognição' },
      { item: '1/2 xícara goji berry', benefit: 'Antioxidantes cerebrais' },
      { item: '2 col sopa lions mane', benefit: 'Cogumelo neuroprotetor' },
      { item: '1 col sopa MCT em pó', benefit: 'Energia cerebral rápida' },
      { item: '1 col chá canela', benefit: 'Estabiliza glicemia' },
      { item: 'Mel de manuka', benefit: 'Energia sustentável' }
    ],
    
    preparation: [
      'Processe nozes até formar farinha',
      'Adicione demais ingredientes secos',
      'Incorpore mel até formar massa',
      'Modele bolinhas pequenas',
      'Refrigere 1h'
    ],
    
    scientificBacking: 'Lions mane aumenta NGF cerebral em 60%',
    
    timing: 'Consuma 2-3 unidades pela manhã',
    
    personalizedTips: {
      nut_allergy: 'Substitua por sementes',
      diabetes: 'Use stevia no lugar do mel',
      digestive: 'Comece com 1 unidade'
    }
  },
  {
    id: 'pre_workout_power_shake',
    title: 'Shake Pré-Treino Natural',
    category: 'energy_boost',
    targetProfile: ['exercise_performance', 'stamina'],
    difficulty: 'easy',
    prepTime: '5 min',
    emotionalMessage: 'Energia limpa para seu treino',
    
    ingredients: [
      { item: '1 banana', benefit: 'Carboidratos rápidos' },
      { item: '1 col sopa spirulina', benefit: 'Aminoácidos completos' },
      { item: '1 col chá matcha', benefit: 'Cafeína sustentada' },
      { item: '1 col sopa sementes chia', benefit: 'Ômega-3 energético' },
      { item: '1 col chá gengibre', benefit: 'Aumenta circulação' },
      { item: 'Água de coco', benefit: 'Eletrólitos naturais' }
    ],
    
    preparation: [
      'Hidrate chia por 10min',
      'Combine todos ingredientes',
      'Bata até homogêneo',
      'Sirva imediatamente'
    ],
    
    scientificBacking: 'Spirulina aumenta resistência física em 40%',
    
    timing: '30min antes do exercício',
    
    personalizedTips: {
      caffeine_sensitive: 'Reduza matcha pela metade',
      blood_sugar: 'Use meia banana',
      pre_competition: 'Dobre spirulina'
    }
  }
];

// Categorias adicionais de receitas energéticas
export const energyBoostRecipesAdvancedCategories = {
  adaptogenic: ['adaptogenic_energy_elixir'],
  brain_power: ['focus_power_balls'],
  workout_fuel: ['pre_workout_power_shake']
}; 