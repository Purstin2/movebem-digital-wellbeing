import { Recipe } from '@/types/nutrition';

export const sleepSupportRecipesAdvanced: Recipe[] = [
  {
    id: 'deep_sleep_elixir',
    title: 'Elixir do Sono Profundo',
    category: 'sleep_support',
    targetProfile: ['insomnia', 'anxiety', 'poor_sleep_quality'],
    difficulty: 'easy',
    prepTime: '8 min',
    emotionalMessage: 'Seu passaporte para o sono reparador',
    
    ingredients: [
      { item: '1 xícara leite de amêndoas', benefit: 'Triptofano natural' },
      { item: '1 col chá reishi', benefit: 'Cogumelo calmante' },
      { item: '1/2 col chá noz-moscada', benefit: 'Sedativo natural' },
      { item: '1 col chá ashwagandha', benefit: 'Adaptógeno relaxante' },
      { item: '1 col chá canela', benefit: 'Estabiliza glicose noturna' },
      { item: '1 tâmara', benefit: 'Magnésio natural' },
      { item: '1 pitada sal rosa', benefit: 'Minerais para sono' }
    ],
    
    preparation: [
      'Aqueça leite sem ferver',
      'Adicione adaptógenos e especiarias',
      'Bata tudo no liquidificador',
      'Coe se necessário',
      'Sirva morno'
    ],
    
    scientificBacking: 'Reishi aumenta tempo de sono profundo em 47%',
    
    timing: '1 hora antes de dormir',
    
    personalizedTips: {
      anxiety: 'Dobre ashwagandha',
      digestive: 'Omita noz-moscada',
      blood_sugar: 'Use stevia no lugar da tâmara'
    }
  },
  {
    id: 'sleep_support_bites',
    title: 'Bocadinhos do Sono',
    category: 'sleep_support',
    targetProfile: ['night_hunger', 'sleep_support'],
    difficulty: 'medium',
    prepTime: '20 min',
    emotionalMessage: 'Doces sonhos em cada mordida',
    
    ingredients: [
      { item: '1 xícara amêndoas', benefit: 'Magnésio relaxante' },
      { item: '1/2 xícara cerejas secas', benefit: 'Melatonina natural' },
      { item: '2 col sopa sementes abóbora', benefit: 'Triptofano e zinco' },
      { item: '1 col sopa camomila em pó', benefit: 'Calmante natural' },
      { item: '1 col chá lavanda culinária', benefit: 'Aroma relaxante' },
      { item: 'Mel de manuka', benefit: 'Glicogênio noturno' }
    ],
    
    preparation: [
      'Processe amêndoas e sementes',
      'Adicione cerejas picadas',
      'Incorpore ervas e mel',
      'Forme bolinhas pequenas',
      'Refrigere 1h'
    ],
    
    scientificBacking: 'Cerejas aumentam melatonina em 85% em 2h',
    
    timing: '2 horas antes de dormir',
    
    personalizedTips: {
      nut_allergy: 'Use apenas sementes',
      diabetes: 'Limite a 1 unidade',
      digestion: 'Tome com chá de gengibre'
    }
  },
  {
    id: 'calming_bedtime_tea',
    title: 'Chá Calmante Noturno',
    category: 'sleep_support',
    targetProfile: ['anxiety', 'racing_mind'],
    difficulty: 'easy',
    prepTime: '5 min',
    emotionalMessage: 'Tranquilidade em uma xícara',
    
    ingredients: [
      { item: '1 col sopa passiflora', benefit: 'Aumenta GABA cerebral' },
      { item: '1 col chá valeriana', benefit: 'Sedativo natural' },
      { item: '1 col chá lúpulo', benefit: 'Relaxante natural' },
      { item: '1/2 col chá camomila', benefit: 'Calmante suave' },
      { item: '1 pitada lavanda', benefit: 'Aroma relaxante' }
    ],
    
    preparation: [
      'Ferva água filtrada',
      'Combine ervas em infusor',
      'Deixe em infusão 8min',
      'Coe e sirva morno',
      'Respire o aroma antes de beber'
    ],
    
    scientificBacking: 'Combinação de ervas reduz tempo para dormir em 55%',
    
    timing: '45min antes de deitar',
    
    personalizedTips: {
      pregnancy: 'Evite valeriana',
      medications: 'Consulte sobre interações',
      anxiety: 'Adicione melissa'
    }
  }
];

// Categorias adicionais de receitas para sono
export const sleepSupportRecipesAdvancedCategories = {
  elixirs: ['deep_sleep_elixir'],
  snacks: ['sleep_support_bites'],
  teas: ['calming_bedtime_tea']
}; 