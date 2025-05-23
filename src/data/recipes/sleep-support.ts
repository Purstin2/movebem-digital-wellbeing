import { Recipe } from '@/types/nutrition';

export const sleepSupportRecipes: Recipe[] = [
  {
    id: 'chamomile_lavender_tea',
    title: 'Chá Calmante de Camomila e Lavanda',
    category: 'sleep_support',
    targetProfile: ['insomnia', 'anxiety', 'stress'],
    difficulty: 'easy',
    prepTime: '5 min',
    emotionalMessage: 'Um abraço quente para sua noite',
    
    ingredients: [
      { item: '2 col chá camomila', benefit: 'Apigenina induz sono' },
      { item: '1/2 col chá lavanda', benefit: 'Relaxante natural' },
      { item: '1 col chá melissa', benefit: 'Reduz ansiedade noturna' },
      { item: '1/2 col chá passiflora', benefit: 'Aumenta GABA cerebral' },
      { item: 'Mel de manuka', benefit: 'Prebiótico noturno' }
    ],
    
    preparation: [
      'Ferva água filtrada',
      'Combine ervas em infusor',
      'Deixe em infusão 5-7 min',
      'Adoce levemente com mel',
      'Beba 30-60min antes de dormir'
    ],
    
    scientificBacking: 'Camomila aumenta sono profundo em 25% segundo estudos',
    
    timing: '1 hora antes de dormir',
    
    personalizedTips: {
      sensitive_sleep: 'Evite mel se acordar à noite',
      anxiety: 'Adicione mais melissa',
      pregnancy: 'Consulte sobre passiflora'
    }
  },
  {
    id: 'tryptophan_sleep_balls',
    title: 'Bolinhas do Sono',
    category: 'sleep_support',
    targetProfile: ['poor_sleep', 'late_night_hunger'],
    difficulty: 'easy',
    prepTime: '15 min',
    emotionalMessage: 'Doces sonhos em cada mordida',
    
    ingredients: [
      { item: '1 xícara tâmaras', benefit: 'Triptofano natural' },
      { item: '1/2 xícara cerejas secas', benefit: 'Melatonina natural' },
      { item: '1/2 xícara amêndoas', benefit: 'Magnésio relaxante' },
      { item: '2 col sopa cacau', benefit: 'Magnésio e serotonina' },
      { item: '1 col chá canela', benefit: 'Estabiliza açúcar' },
      { item: 'Pitada noz-moscada', benefit: 'Propriedades sedativas' }
    ],
    
    preparation: [
      'Processe tâmaras e cerejas',
      'Adicione amêndoas moídas',
      'Incorpore cacau e especiarias',
      'Forme bolinhas pequenas',
      'Refrigere 30min'
    ],
    
    scientificBacking: 'Combinação de triptofano e melatonina natural melhora sono em 40%',
    
    timing: '2 horas antes de dormir',
    
    personalizedTips: {
      blood_sugar: 'Limite a 2 unidades',
      nut_allergy: 'Use sementes de abóbora',
      digestion: 'Mastigue muito bem'
    }
  },
  {
    id: 'sleep_promoting_milk',
    title: 'Leite Dourado do Sono',
    category: 'sleep_support',
    targetProfile: ['sleep_quality', 'night_anxiety'],
    difficulty: 'easy',
    prepTime: '10 min',
    emotionalMessage: 'Relaxamento profundo em cada gole',
    
    ingredients: [
      { item: '1 xícara leite de amêndoas', benefit: 'Triptofano e cálcio' },
      { item: '1/2 col chá cúrcuma', benefit: 'Anti-inflamatório noturno' },
      { item: '1/4 col chá noz-moscada', benefit: 'Miorrelaxante natural' },
      { item: '1/2 col chá canela', benefit: 'Estabiliza glicemia' },
      { item: '1 col chá ashwagandha', benefit: 'Adaptógeno calmante' },
      { item: 'Mel de manuka', benefit: 'Glicose lenta para sono' }
    ],
    
    preparation: [
      'Aqueça leite sem ferver',
      'Adicione especiarias e ashwagandha',
      'Misture bem até homogêneo',
      'Adoce levemente com mel',
      'Beba morno 1h antes de dormir'
    ],
    
    scientificBacking: 'Ashwagandha reduz insônia em 72% dos casos em 60 dias',
    
    timing: '60-90min antes de dormir',
    
    personalizedTips: {
      dairy_free: 'Use leite de amêndoas ou aveia',
      blood_sugar: 'Omita mel ou use stevia',
      autoimmune: 'Verifique uso de ashwagandha'
    }
  }
];

// Categorias de receitas para sono
export const sleepSupportCategories = {
  teas: ['chamomile_lavender_tea'],
  snacks: ['tryptophan_sleep_balls'],
  drinks: ['sleep_promoting_milk']
}; 