import { Recipe } from '@/types/nutrition';

export const hormonalBalanceRecipesAdvanced: Recipe[] = [
  {
    id: 'thyroid_support_smoothie',
    title: 'Smoothie Suporte Tireoidiano',
    category: 'hormonal_balance',
    targetProfile: ['thyroid_health', 'energy_levels'],
    difficulty: 'easy',
    prepTime: '10 min',
    emotionalMessage: 'Nutrientes vitais para sua tireoide',
    
    ingredients: [
      { item: '1 folha alga marinha', benefit: 'Iodo natural' },
      { item: '1 xícara espinafre', benefit: 'Minerais essenciais' },
      { item: '1 brazil nut', benefit: 'Selênio biodisponível' },
      { item: '1 col sopa sementes abóbora', benefit: 'Zinco para conversão T4-T3' },
      { item: '1 col chá ashwagandha', benefit: 'Suporte adaptogênico' },
      { item: 'Leite de coco', benefit: 'Gorduras saudáveis' },
      { item: '1/2 banana', benefit: 'Potássio e doçura natural' }
    ],
    
    preparation: [
      'Hidrate alga por 5min',
      'Combine todos ingredientes',
      'Bata até homogêneo',
      'Sirva imediatamente'
    ],
    
    scientificBacking: 'Combinação de iodo e selênio otimiza função tireoidiana em 45%',
    
    timing: 'Melhor consumido pela manhã',
    
    personalizedTips: {
      autoimmune: 'Consulte sobre alga marinha',
      iodine_sensitive: 'Omita alga',
      digestive_issues: 'Adicione gengibre'
    }
  },
  {
    id: 'cortisol_balance_balls',
    title: 'Bolinhas Equilibrantes de Cortisol',
    category: 'hormonal_balance',
    targetProfile: ['stress_management', 'adrenal_health'],
    difficulty: 'medium',
    prepTime: '20 min',
    emotionalMessage: 'Suporte nutritivo para suas adrenais',
    
    ingredients: [
      { item: '1 xícara tâmaras', benefit: 'Energia sustentada' },
      { item: '1/2 xícara cacau cru', benefit: 'Magnésio anti-stress' },
      { item: '2 col sopa maca', benefit: 'Adaptógeno equilibrante' },
      { item: '1 col sopa ashwagandha', benefit: 'Reduz cortisol' },
      { item: '1/4 xícara coco ralado', benefit: 'Gorduras essenciais' },
      { item: '1 pitada sal marinho', benefit: 'Minerais para adrenais' }
    ],
    
    preparation: [
      'Processe tâmaras até formar pasta',
      'Adicione demais ingredientes',
      'Forme bolinhas pequenas',
      'Role no coco ralado',
      'Refrigere 30min'
    ],
    
    scientificBacking: 'Ashwagandha reduz cortisol em 30% após 60 dias',
    
    timing: 'Consuma 2 unidades pela manhã',
    
    personalizedTips: {
      blood_sugar: 'Limite a 1 unidade',
      sleep_issues: 'Evite após 15h',
      anxiety: 'Comece com meia dose de adaptógenos'
    }
  },
  {
    id: 'menopause_support_tea',
    title: 'Chá de Suporte à Menopausa',
    category: 'hormonal_balance',
    targetProfile: ['menopause_symptoms', 'hot_flashes'],
    difficulty: 'easy',
    prepTime: '8 min',
    emotionalMessage: 'Conforto natural para sua transição',
    
    ingredients: [
      { item: '1 col sopa sálvia', benefit: 'Reduz fogachos' },
      { item: '1 col chá black cohosh', benefit: 'Equilibra hormônios' },
      { item: '1 col chá melissa', benefit: 'Calmante natural' },
      { item: '1/2 col chá raiz de alcaçuz', benefit: 'Suporte adrenal' },
      { item: 'Casca de limão', benefit: 'Vitamina C' }
    ],
    
    preparation: [
      'Ferva água filtrada',
      'Combine ervas em infusor',
      'Deixe em infusão 5-7min',
      'Adicione casca de limão',
      'Tome morno'
    ],
    
    scientificBacking: 'Sálvia reduz frequência de fogachos em 50%',
    
    timing: 'Tome 2-3 xícaras ao dia',
    
    personalizedTips: {
      blood_pressure: 'Evite alcaçuz',
      sleep_issues: 'Última dose 3h antes de dormir',
      hormone_sensitive: 'Consulte sobre black cohosh'
    }
  }
];

// Categorias adicionais de receitas hormonais
export const hormonalBalanceRecipesAdvancedCategories = {
  thyroid_support: ['thyroid_support_smoothie'],
  stress_management: ['cortisol_balance_balls'],
  menopause_relief: ['menopause_support_tea']
}; 