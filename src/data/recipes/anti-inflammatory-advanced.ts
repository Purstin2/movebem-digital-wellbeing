import { Recipe } from '@/types/nutrition';

export const antiInflammatoryRecipesAdvanced: Recipe[] = [
  {
    id: 'golden_milk_supreme',
    title: 'Golden Milk Supremo',
    category: 'anti_inflammatory',
    targetProfile: ['chronic_inflammation', 'joint_pain', 'sleep_issues'],
    difficulty: 'easy',
    prepTime: '10 min',
    emotionalMessage: 'Sabedoria ancestral em uma xícara dourada',
    
    ingredients: [
      { item: '1 xícara leite de amêndoas', benefit: 'Base nutritiva sem lácteos' },
      { item: '1 col chá cúrcuma', benefit: 'Curcumina anti-inflamatória' },
      { item: '1/2 col chá gengibre em pó', benefit: 'Reduz inflamação sistêmica' },
      { item: '1/4 col chá cardamomo', benefit: 'Digestivo e calmante' },
      { item: '1 pitada pimenta preta', benefit: 'Ativa curcumina' },
      { item: 'Mel de manuka', benefit: 'Propriedades antibacterianas' },
      { item: '1/2 col chá ashwagandha', benefit: 'Adaptógeno anti-stress' }
    ],
    
    preparation: [
      'Aqueça o leite sem ferver',
      'Adicione todos os temperos',
      'Misture bem com whisk',
      'Adoce com mel a gosto',
      'Beba morno antes de dormir'
    ],
    
    scientificBacking: 'Combinação de curcumina e piperina aumenta absorção em 2000%',
    
    timing: 'Ideal 1-2 horas antes de dormir',
    
    personalizedTips: {
      digestive_issues: 'Omita cardamomo se sensível',
      sleep_problems: 'Adicione noz-moscada',
      autoimmune: 'Consulte sobre ashwagandha'
    }
  },
  {
    id: 'berry_turmeric_smoothie',
    title: 'Smoothie Anti-inflamatório de Frutas Vermelhas',
    category: 'anti_inflammatory',
    targetProfile: ['inflammation', 'oxidative_stress'],
    difficulty: 'easy',
    prepTime: '5 min',
    emotionalMessage: 'Antioxidantes poderosos em cada gole',
    
    ingredients: [
      { item: '1 xícara mirtilos', benefit: 'Antocianinas anti-inflamatórias' },
      { item: '1/2 xícara framboesas', benefit: 'Polifenóis protetores' },
      { item: '1 col chá cúrcuma', benefit: 'Curcumina anti-inflamatória' },
      { item: '1 col sopa chia', benefit: 'Ômega-3 vegetal' },
      { item: '1 col chá gengibre', benefit: 'Gingeróis anti-inflamatórios' },
      { item: 'Leite de coco', benefit: 'Gorduras boas MCT' }
    ],
    
    preparation: [
      'Combine todos ingredientes no liquidificador',
      'Processe até ficar cremoso',
      'Ajuste consistência com leite de coco',
      'Sirva imediatamente'
    ],
    
    scientificBacking: 'Antocianinas reduzem marcadores inflamatórios em 32%',
    
    timing: 'Melhor consumido em jejum pela manhã',
    
    personalizedTips: {
      diabetes: 'Use berries congeladas sem açúcar',
      digestive_issues: 'Hidrate chia previamente',
      immune_compromised: 'Adicione própolis'
    }
  },
  {
    id: 'healing_bone_broth',
    title: 'Caldo de Ossos Curativo',
    category: 'anti_inflammatory',
    targetProfile: ['joint_health', 'gut_healing'],
    difficulty: 'medium',
    prepTime: '12h',
    emotionalMessage: 'Nutrição profunda para suas articulações',
    
    ingredients: [
      { item: '1kg ossos orgânicos', benefit: 'Colágeno e minerais' },
      { item: '2 cenouras', benefit: 'Beta-caroteno protetor' },
      { item: '1 cebola', benefit: 'Compostos sulfúricos' },
      { item: '2 talos aipo', benefit: 'Antioxidantes naturais' },
      { item: '2cm gengibre', benefit: 'Anti-inflamatório natural' },
      { item: '1 col chá cúrcuma', benefit: 'Curcumina potente' },
      { item: 'Ervas frescas', benefit: 'Nutrientes bioativos' }
    ],
    
    preparation: [
      'Asse os ossos por 30min',
      'Transfira para panela grande',
      'Adicione vegetais e 3L água',
      'Cozinhe em fogo baixo 12h',
      'Coe e armazene'
    ],
    
    scientificBacking: 'Colágeno e glicosaminoglicanos reduzem inflamação articular em 40%',
    
    timing: 'Consuma 1 xícara 2x ao dia',
    
    personalizedTips: {
      digestive_issues: 'Comece com pequenas porções',
      histamine: 'Cozinhe por menos tempo',
      immune_support: 'Adicione cogumelos medicinais'
    }
  }
];

// Categorias adicionais de receitas anti-inflamatórias
export const antiInflammatoryRecipesAdvancedCategories = {
  beverages: ['golden_milk_supreme', 'berry_turmeric_smoothie'],
  broths: ['healing_bone_broth'],
  snacks: ['anti_inflammatory_bites']
}; 