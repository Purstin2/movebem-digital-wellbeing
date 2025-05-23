import { Recipe } from '@/types/nutrition';

export const antiInflammatoryRecipes: Recipe[] = [
  {
    id: 'ginger_turmeric_tea',
    title: 'Chá de Gengibre e Cúrcuma',
    category: 'anti_inflammatory',
    targetProfile: ['joint_pain', 'inflammation', 'morning_stiffness'],
    difficulty: 'easy',
    prepTime: '10 min',
    emotionalMessage: 'Um abraço quente para suas articulações',
    
    ingredients: [
      { item: '2cm gengibre fresco', benefit: 'Reduz inflamação em 30%' },
      { item: '1 col chá cúrcuma', benefit: 'Potente anti-inflamatório natural' },
      { item: '1 pitada pimenta preta', benefit: 'Aumenta absorção da cúrcuma' },
      { item: '1 pau de canela', benefit: 'Regula glicemia' },
      { item: 'Mel a gosto', benefit: 'Propriedades antibacterianas' }
    ],
    
    preparation: [
      'Ferva 2 xícaras de água',
      'Adicione gengibre ralado e deixe ferver 5 min',
      'Desligue o fogo e adicione cúrcuma e pimenta',
      'Deixe descansar 5 min e coe',
      'Adoce com mel a gosto'
    ],
    
    scientificBacking: 'Gengibre e cúrcuma contêm compostos que inibem as vias COX-2 inflamatórias',
    
    timing: 'Ideal pela manhã ou antes de dormir',
    
    personalizedTips: {
      arthritis: 'Tome morno para melhor absorção',
      digestive_issues: 'Comece com meia dose',
      diabetes: 'Use canela extra e evite mel'
    }
  },
  {
    id: 'omega3_breakfast_bowl',
    title: 'Bowl do Despertar Anti-inflamatório',
    category: 'anti_inflammatory',
    targetProfile: ['chronic_inflammation', 'joint_health'],
    difficulty: 'medium',
    prepTime: '15 min',
    emotionalMessage: 'Nutrientes poderosos para um dia sem dores',
    
    ingredients: [
      { item: '1/2 xícara aveia', benefit: 'Fibras anti-inflamatórias' },
      { item: '1 col sopa sementes chia', benefit: 'Ômega-3 vegetal' },
      { item: '1/4 abacate', benefit: 'Gorduras boas anti-inflamatórias' },
      { item: '1 punhado mirtilos', benefit: 'Antioxidantes potentes' },
      { item: '1 col sopa nozes', benefit: 'Ômega-3 e selênio' },
      { item: 'Canela a gosto', benefit: 'Regulador glicêmico natural' }
    ],
    
    preparation: [
      'Prepare aveia com água ou leite vegetal',
      'Adicione chia e deixe hidratar',
      'Incorpore abacate amassado',
      'Finalize com mirtilos, nozes e canela'
    ],
    
    scientificBacking: 'Combinação de ômega-3, antioxidantes e fibras reduz marcadores inflamatórios em 40%',
    
    timing: 'Café da manhã ou lanche da tarde',
    
    personalizedTips: {
      diabetes: 'Use mirtilos congelados sem açúcar',
      digestive_issues: 'Cozinhe bem a aveia',
      weight_management: 'Controle porção de nozes'
    }
  },
  {
    id: 'anti_inflammatory_soup',
    title: 'Sopa Curativa Anti-inflamatória',
    category: 'anti_inflammatory',
    targetProfile: ['inflammation', 'immune_support'],
    difficulty: 'medium',
    prepTime: '30 min',
    emotionalMessage: 'Um caldeirão de cura para seu corpo',
    
    ingredients: [
      { item: '2 cenouras', benefit: 'Beta-caroteno anti-inflamatório' },
      { item: '1 batata doce', benefit: 'Antioxidantes e fibras' },
      { item: '2cm gengibre', benefit: 'Reduz inflamação sistêmica' },
      { item: '1 cebola', benefit: 'Compostos sulfúricos anti-inflamatórios' },
      { item: '2 dentes alho', benefit: 'Propriedades anti-inflamatórias' },
      { item: '1 col chá cúrcuma', benefit: 'Potente anti-inflamatório' },
      { item: 'Coentro fresco', benefit: 'Desintoxicante natural' }
    ],
    
    preparation: [
      'Refogue cebola e alho em azeite',
      'Adicione gengibre e cúrcuma',
      'Acrescente vegetais cortados',
      'Cubra com água e cozinhe até macio',
      'Bata no liquidificador até cremoso',
      'Finalize com coentro fresco'
    ],
    
    scientificBacking: 'Combinação de compostos bioativos reduz marcadores inflamatórios CRP e IL-6',
    
    timing: 'Ideal para jantar ou almoço leve',
    
    personalizedTips: {
      digestive_issues: 'Evite coentro se sensível',
      high_blood_pressure: 'Reduza sal, aumente ervas',
      immune_compromised: 'Adicione cogumelos shiitake'
    }
  }
];

// Categorias de receitas anti-inflamatórias
export const antiInflammatoryCategories = {
  morning: ['ginger_turmeric_tea', 'omega3_breakfast_bowl'],
  lunch_dinner: ['anti_inflammatory_soup'],
  snacks: ['golden_milk_ultimate']
}; 