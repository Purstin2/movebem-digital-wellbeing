import { Recipe } from '@/types/nutrition';

// Anti-inflammatory recipes
export const antiInflammatoryRecipes: Recipe[] = [
  {
    id: 'golden_milk_ultimate',
    title: 'Golden Milk da Cura Dourada',
    category: 'anti_inflammatory',
    targetProfile: ['high_pain', 'arthritis', 'fibromyalgia'],
    difficulty: 'easy',
    prepTime: '5 min',
    emotionalMessage: 'Cada gole é um abraço interno que acalma inflamações',
    
    ingredients: [
      { item: '1 xícara leite de coco', benefit: 'Gorduras anti-inflamatórias' },
      { item: '1 col chá cúrcuma', benefit: 'Reduz inflamação em 40%' },
      { item: '1 pitada pimenta preta', benefit: 'Potencializa absorção da cúrcuma' },
      { item: '1 col chá gengibre ralado', benefit: 'Alivia dores articulares' },
      { item: 'Mel puro a gosto', benefit: 'Propriedades antibacterianas' }
    ],
    
    preparation: [
      'Aqueça o leite de coco em fogo baixo',
      'Adicione cúrcuma, gengibre e pimenta',
      'Mexa por 3 minutos até dourar',
      'Finalize com mel e beba morno'
    ],
    
    scientificBacking: 'Cúrcuma contém curcumina, que reduz marcadores inflamatórios IL-6 e TNF-α em 30-40% segundo estudos clínicos',
    
    timing: 'Melhor consumido à noite, 1h antes de dormir',
    
    personalizedTips: {
      high_pain: 'Tome diariamente durante crises de dor',
      arthritis: 'Adicione uma pitada de canela para potencializar',
      fibromyalgia: 'Comece com meia dose para testar tolerância'
    },
    
    imageUrl: '/images/nutrition/golden_milk.jpg'
  },

  {
    id: 'green_smoothie_warrior',
    title: 'Smoothie da Guerreira Verde',
    category: 'anti_inflammatory',
    targetProfile: ['moderate_pain', 'energy_boost'],
    difficulty: 'easy',
    prepTime: '3 min',
    emotionalMessage: 'Verde da natureza curando verde da esperança',
    
    ingredients: [
      { item: '1 xícara espinafre baby', benefit: 'Rico em magnésio relaxante' },
      { item: '1/2 abacate', benefit: 'Ômega-3 anti-inflamatório' },
      { item: '1 banana', benefit: 'Potássio para músculos' },
      { item: '1 col sopa chia', benefit: 'Ômega-3 vegetal' },
      { item: '1 xícara água de coco', benefit: 'Hidratação + eletrólitos' },
      { item: '1 col chá spirulina', benefit: 'Superalimento detox' }
    ],
    
    preparation: [
      'Bata todos ingredientes no liquidificador',
      'Adicione gelo se preferir mais gelado',
      'Beba imediatamente para preservar nutrientes'
    ],
    
    scientificBacking: 'Espinafre + abacate fornecem magnésio biodisponível, essencial para relaxamento muscular',
    
    timing: 'Ideal no café da manhã ou pré-exercício',
    
    personalizedTips: {
      morning_person: 'Substitua café por este smoothie',
      low_energy: 'Adicione 1 col sopa de cacau puro',
      digestive_sensitive: 'Retire spirulina se causar desconforto'
    },
    
    imageUrl: '/images/nutrition/green_smoothie.jpg'
  },

  {
    id: 'chia_pudding_healing',
    title: 'Pudim de Chia da Regeneração',
    category: 'anti_inflammatory',
    targetProfile: ['joint_pain', 'omega_deficient'],
    difficulty: 'easy',
    prepTime: '10 min + 4h geladeira',
    emotionalMessage: 'Pequenas sementes, grandes transformações',
    
    ingredients: [
      { item: '3 col sopa chia', benefit: '2400mg de ômega-3' },
      { item: '1 xícara leite de amêndoas', benefit: 'Cálcio para ossos' },
      { item: '1 col sopa mel manuka', benefit: 'Antibacteriano potente' },
      { item: '1/2 col chá baunilha', benefit: 'Antioxidante natural' },
      { item: 'Frutas vermelhas', benefit: 'Antocianinas anti-inflamatórias' }
    ],
    
    preparation: [
      'Misture chia com leite de amêndoas',
      'Adicione mel e baunilha',
      'Mexa bem e leve à geladeira por 4h',
      'Finalize com frutas vermelhas'
    ],
    
    scientificBacking: 'Chia fornece 18% das necessidades diárias de cálcio e ALA (ácido alfa-linolênico)',
    
    timing: 'Prepare à noite para café da manhã',
    
    personalizedTips: {
      bone_health: 'Adicione 1 col sopa tahine (cálcio extra)',
      sweet_cravings: 'Use banana amassada em vez de mel',
      protein_needs: 'Misture 1 col sopa protein vegetal'
    },
    
    imageUrl: '/images/nutrition/chia_pudding.jpg'
  }
];

// Energy-boosting recipes
export const energyBoostingRecipes: Recipe[] = [
  {
    id: 'energy_balls_cacao',
    title: 'Bolinhas de Energia do Cacau Sagrado',
    category: 'energy_boost',
    targetProfile: ['low_energy', 'afternoon_crash', 'natural_sweetness'],
    difficulty: 'easy',
    prepTime: '15 min',
    emotionalMessage: 'Energia da natureza em cada mordida',
    
    ingredients: [
      { item: '1 xícara tâmaras medjool', benefit: 'Açúcar natural + potássio' },
      { item: '1/2 xícara castanha do Pará', benefit: 'Selênio + energia mental' },
      { item: '2 col sopa cacau cru', benefit: 'Teobromina + magnésio' },
      { item: '1 col sopa óleo coco', benefit: 'TCM para energia rápida' },
      { item: '1 col chá baunilha', benefit: 'Sabor + antioxidantes' },
      { item: 'Coco ralado p/ finalizar', benefit: 'Textura + gorduras boas' }
    ],
    
    preparation: [
      'Processe tâmaras até formar pasta',
      'Adicione castanhas e pulse levemente',
      'Misture cacau, óleo de coco e baunilha',
      'Faça bolinhas e passe no coco',
      'Refrigere por 30min'
    ],
    
    scientificBacking: 'Cacau cru contém anandamida, o "neurotransmissor da felicidade"',
    
    timing: 'Lanche pré-exercício ou tarde',
    
    personalizedTips: {
      nut_allergy: 'Substitua castanhas por sementes de girassol',
      diabetes: 'Reduza tâmaras e adicione mais coco',
      pre_workout: 'Coma 30min antes do exercício'
    },
    
    imageUrl: '/images/nutrition/energy_balls.jpg'
  },

  {
    id: 'matcha_latte_zen',
    title: 'Matcha Latte do Foco Zen',
    category: 'energy_boost',
    targetProfile: ['mental_clarity', 'caffeine_alternative'],
    difficulty: 'easy',
    prepTime: '5 min',
    emotionalMessage: 'Energia calma e concentrada',
    
    ingredients: [
      { item: '1 col chá matcha cerimonial', benefit: 'L-teanina + cafeína suave' },
      { item: '1 xícara leite de aveia', benefit: 'Beta-glucanos + cremosidade' },
      { item: '1 col chá óleo TCM', benefit: 'Energia cerebral rápida' },
      { item: '1/2 col chá mel manuka', benefit: 'Doçura + propriedades medicinais' },
      { item: 'Pitada canela', benefit: 'Regula açúcar no sangue' }
    ],
    
    preparation: [
      'Bata matcha com pouca água morna',
      'Aqueça leite de aveia com canela',
      'Misture matcha ao leite',
      'Adicione TCM e mel',
      'Bata para fazer espuma'
    ],
    
    scientificBacking: 'L-teanina + cafeína no matcha promove foco sem ansiedade',
    
    timing: 'Manhã ou início da tarde',
    
    personalizedTips: {
      caffeine_sensitive: 'Use apenas 1/2 col chá matcha',
      weight_loss: 'Substitua mel por stevia',
      brain_fog: 'Adicione 1 gota óleo essencial hortelã'
    },
    
    imageUrl: '/images/nutrition/matcha_latte.jpg'
  }
];

// Hormonal balance recipes
export const hormonalBalanceRecipes: Recipe[] = [
  {
    id: 'flax_seed_power_smoothie',
    title: 'Smoothie de Linhaça do Poder Feminino',
    category: 'hormonal_balance',
    targetProfile: ['menopause', 'perimenopause', 'pms', 'hormone_imbalance'],
    difficulty: 'easy',
    prepTime: '5 min',
    emotionalMessage: 'Pequenas sementes, grande equilíbrio feminino',
    
    ingredients: [
      { item: '2 col sopa linhaça dourada moída', benefit: 'Lignanas para equilíbrio estrogênico' },
      { item: '1 banana', benefit: 'Vitamina B6 + triptofano' },
      { item: '1/2 xícara frutas vermelhas', benefit: 'Antocianinas + antioxidantes' },
      { item: '1 xícara leite de amêndoas', benefit: 'Cálcio + vitamina E' },
      { item: '1 col sopa manteiga amêndoa', benefit: 'Magnésio + gorduras estabilizadoras' },
      { item: '1 pitada canela', benefit: 'Regula insulina + hormônios' }
    ],
    
    preparation: [
      'Moa linhaça na hora para preservar nutrientes',
      'Bata todos ingredientes até cremoso',
      'Adicione gelo se preferir gelado',
      'Beba imediatamente'
    ],
    
    scientificBacking: 'Linhaça contém 75-800x mais lignanas que outros alimentos, modulando estrogênio naturalmente',
    
    timing: 'Manhã, fase folicular do ciclo (dias 1-14)',
    
    personalizedTips: {
      menopause: 'Tome diariamente para reduzir fogachos',
      pms: 'Aumente dose 1 semana antes da menstruação',
      estrogen_dominance: 'Combine com vegetais crucíferos no almoço',
      digestive_sensitive: 'Comece com 1 col sopa linhaça'
    },
    
    imageUrl: '/images/nutrition/flax_smoothie.jpg'
  }
];

// Sleep and relaxation recipes
export const sleepRelaxationRecipes: Recipe[] = [
  {
    id: 'moon_milk_dreams',
    title: 'Moon Milk dos Sonhos Dourados',
    category: 'sleep_support',
    targetProfile: ['insomnia', 'anxiety_sleep', 'restless_mind'],
    difficulty: 'easy',
    prepTime: '8 min',
    emotionalMessage: 'Ritual noturno que embala corpo e alma',
    
    ingredients: [
      { item: '1 xícara leite vegetal morno', benefit: 'Triptofano + conforto' },
      { item: '1/2 col chá cúrcuma', benefit: 'Anti-inflamatório + cor dourada' },
      { item: '1 pitada noz moscada', benefit: 'Sedativo natural + sabor' },
      { item: '1/2 col chá mel de manuka', benefit: 'Regula melatonina + doçura' },
      { item: '1/4 col chá ashwagandha', benefit: 'Reduz cortisol + relaxamento' },
      { item: '2 gotas óleo lavanda comestível', benefit: 'Aromaterápico + calmante' }
    ],
    
    preparation: [
      'Aqueça leite sem ferver',
      'Misture cúrcuma, noz moscada e ashwagandha',
      'Adicione ao leite morno mexendo',
      'Incorpore mel e óleo de lavanda',
      'Beba devagar, saboreando cada gole'
    ],
    
    scientificBacking: 'Ashwagandha melhora qualidade do sono em 72% e reduz tempo para adormecer',
    
    timing: '30-60min antes de dormir',
    
    personalizedTips: {
      lavender_sensitive: 'Substitua por baunilha',
      diabetes: 'Use stevia em vez de mel',
      meditation: 'Beba durante prática noturna'
    },
    
    imageUrl: '/images/nutrition/moon_milk.jpg'
  }
];

// Digestive health recipes
export const digestiveDetoxRecipes: Recipe[] = [
  {
    id: 'ginger_turmeric_digestive_tea',
    title: 'Chá Digestivo de Gengibre e Cúrcuma',
    category: 'digestive_health',
    targetProfile: ['bloating', 'digestive_issues', 'inflammation'],
    difficulty: 'easy',
    prepTime: '10 min',
    emotionalMessage: 'Raízes douradas curando seu centro digestivo',
    
    ingredients: [
      { item: '1 pedaço gengibre fresco (3cm)', benefit: 'Estimula digestão + anti-náusea' },
      { item: '1 col chá cúrcuma fresca ralada', benefit: 'Anti-inflamatório + bile' },
      { item: '1 col chá mel manuka', benefit: 'Prebiótico + propriedades medicinais' },
      { item: '1/2 limão espremido', benefit: 'Estimula enzimas + vitamina C' },
      { item: '1 pitada pimenta preta', benefit: 'Melhora absorção cúrcuma' },
      { item: 'Folhas hortelã fresca', benefit: 'Digestão + refrescância' }
    ],
    
    preparation: [
      'Ferva água com gengibre por 5min',
      'Adicione cúrcuma e cozinhe 2min',
      'Coe para xícara',
      'Acrescente mel, limão e pimenta',
      'Finalize com folhas de hortelã'
    ],
    
    scientificBacking: 'Gengibre acelera esvaziamento gástrico em 50% e reduz náuseas',
    
    timing: '30min antes das refeições principais',
    
    personalizedTips: {
      acid_reflux: 'Reduza limão e tome morno, não quente',
      gallstones: 'Consulte médico antes de usar cúrcuma',
      pregnancy: 'Limite gengibre a 1g por dia'
    },
    
    imageUrl: '/images/nutrition/ginger_tea.jpg'
  }
];

// Condition-specific recipes
export const conditionSpecificRecipes: Recipe[] = [
  {
    id: 'arthritis_anti_inflammatory_curry',
    title: 'Curry Anti-Artrite da Recuperação',
    category: 'condition_specific',
    targetProfile: ['arthritis', 'joint_pain', 'chronic_inflammation'],
    difficulty: 'medium',
    prepTime: '35 min',
    emotionalMessage: 'Especiarias milenares acalmando suas articulações',
    
    ingredients: [
      { item: '2 col sopa cúrcuma fresca', benefit: 'Curcumina 95% + piperina' },
      { item: '1 col sopa gengibre ralado', benefit: 'Gingerol anti-inflamatório' },
      { item: '400ml leite coco integral', benefit: 'Gorduras para absorção curcumina' },
      { item: '1 xícara grão-de-bico cozido', benefit: 'Proteína + fibras' },
      { item: '1 xícara espinafre', benefit: 'Magnésio + antioxidantes' },
      { item: '1 col chá pimenta preta moída', benefit: 'Aumenta absorção 2000%' },
      { item: 'Coentro e cebolinha', benefit: 'Quelação metais + sabor' }
    ],
    
    preparation: [
      'Refogue cúrcuma e gengibre em óleo coco',
      'Adicione leite de coco e deixe ferver',
      'Acrescente grão-de-bico e cozinhe 10min',
      'Misture espinafre até murchar',
      'Tempere com pimenta preta',
      'Finalize com coentro fresco'
    ],
    
    scientificBacking: 'Esta combinação reduz marcadores inflamatórios IL-6 e TNF-α em 40-60%',
    
    timing: 'Jantar, especialmente durante crises inflamatórias',
    
    personalizedTips: {
      rheumatoid_arthritis: 'Tome diariamente por 8 semanas',
      sensitive_stomach: 'Comece com 1/2 porção',
      blood_thinners: 'Monitore INR se toma warfarina'
    },
    
    imageUrl: '/images/nutrition/arthritis_curry.jpg'
  }
];

// Combined recipes for easier access
export const allRecipes: Recipe[] = [
  ...antiInflammatoryRecipes,
  ...energyBoostingRecipes,
  ...hormonalBalanceRecipes,
  ...sleepRelaxationRecipes,
  ...digestiveDetoxRecipes,
  ...conditionSpecificRecipes
]; 