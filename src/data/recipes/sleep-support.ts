import { Recipe } from '../types';

export const sleepSupportRecipes: Recipe[] = [
  {
    id: 'sleep-1',
    name: 'Chá Relaxante para o Sono',
    description: 'Bebida quente com ingredientes naturais para melhorar a qualidade do sono.',
    difficulty: 'beginner',
    duration: 5,
    category: 'sleep-support',
    ingredients: [
      '1 colher de chá de camomila',
      '1 colher de chá de lavanda',
      '1 colher de chá de mel',
      '1 xícara de água quente',
      '1 colher de chá de valeriana (opcional)'
    ],
    steps: [
      'Ferva a água',
      'Adicione a camomila e a lavanda',
      'Deixe em infusão por 5 minutos',
      'Coe e adicione o mel',
      'Beba quente 30 minutos antes de dormir'
    ],
    benefits: [
      'Auxilia no relaxamento',
      'Melhora a qualidade do sono',
      'Reduz a ansiedade'
    ],
    imageUrl: '/recipes/relaxing-tea.jpg',
    nutritionalInfo: {
      calories: 30,
      protein: 0,
      carbs: 8,
      fat: 0
    }
  },
  {
    id: 'sleep-2',
    name: 'Leite Dourado',
    description: 'Bebida cremosa com cúrcuma e especiarias para um sono tranquilo.',
    difficulty: 'beginner',
    duration: 10,
    category: 'sleep-support',
    ingredients: [
      '1 xícara de leite de amêndoas',
      '1 colher de chá de cúrcuma em pó',
      '1/4 colher de chá de canela em pó',
      '1/4 colher de chá de gengibre em pó',
      '1 colher de chá de mel',
      '1 pitada de pimenta preta',
      '1 colher de chá de manteiga ghee (opcional)'
    ],
    steps: [
      'Aqueça o leite de amêndoas em uma panela',
      'Adicione a cúrcuma, canela e gengibre',
      'Misture bem e deixe ferver por 2 minutos',
      'Adicione o mel e a pimenta',
      'Se desejar, adicione a manteiga ghee',
      'Beba quente antes de dormir'
    ],
    benefits: [
      'Auxilia no relaxamento',
      'Melhora a qualidade do sono',
      'Tem propriedades anti-inflamatórias'
    ],
    imageUrl: '/recipes/golden-milk.jpg',
    nutritionalInfo: {
      calories: 120,
      protein: 2,
      carbs: 15,
      fat: 6
    }
  },
  {
    id: 'sleep-3',
    name: 'Chá de Ervas Calmantes',
    description: 'Bebida relaxante com ervas específicas para melhorar a qualidade do sono.',
    difficulty: 'beginner',
    duration: 10,
    category: 'sleep-support',
    ingredients: [
      '1 colher de chá de camomila',
      '1 colher de chá de passiflora',
      '1 colher de chá de melissa',
      '1 colher de chá de valeriana',
      '1 colher de chá de mel',
      '1 xícara de água quente',
      '1 pitada de canela em pó'
    ],
    steps: [
      'Ferva a água',
      'Adicione todas as ervas',
      'Deixe em infusão por 5-7 minutos',
      'Coe e adicione o mel',
      'Polvilhe a canela',
      'Beba quente 30 minutos antes de dormir'
    ],
    benefits: [
      'Combinação de ervas calmantes',
      'Auxilia no relaxamento',
      'Melhora a qualidade do sono',
      'Reduz a ansiedade'
    ],
    imageUrl: '/recipes/calming-tea.jpg',
    nutritionalInfo: {
      calories: 25,
      protein: 0,
      carbs: 6,
      fat: 0
    }
  },
  {
    id: 'sleep-4',
    name: 'Smoothie Relaxante de Cereja',
    description: 'Bebida rica em melatonina natural para melhorar o sono.',
    difficulty: 'beginner',
    duration: 10,
    category: 'sleep-support',
    ingredients: [
      '1 xícara de cerejas congeladas',
      '1 banana',
      '1 colher de sopa de sementes de chia',
      '1 colher de sopa de mel',
      '1 xícara de leite de amêndoas',
      '1 colher de chá de canela em pó',
      '1 colher de chá de gengibre ralado'
    ],
    steps: [
      'Adicione todos os ingredientes no liquidificador',
      'Bata até ficar homogêneo',
      'Sirva imediatamente',
      'Consuma 1 hora antes de dormir'
    ],
    benefits: [
      'Rico em melatonina natural',
      'Auxilia no relaxamento',
      'Melhora a qualidade do sono',
      'Fonte de triptofano'
    ],
    imageUrl: '/recipes/cherry-smoothie.jpg',
    nutritionalInfo: {
      calories: 220,
      protein: 5,
      carbs: 35,
      fat: 8
    }
  },
  {
    id: 'sleep-5',
    name: 'Chá de Camomila com Lavanda',
    description: 'Bebida relaxante para induzir o sono naturalmente.',
    difficulty: 'beginner',
    duration: 10,
    category: 'sleep-support',
    ingredients: [
      '1 colher de sopa de flores de camomila secas',
      '1 colher de chá de flores de lavanda secas',
      '1 colher de chá de mel',
      '1 xícara de água quente',
      '1 pitada de canela em pó (opcional)'
    ],
    steps: [
      'Ferva a água',
      'Adicione a camomila e a lavanda',
      'Deixe em infusão por 5 minutos',
      'Coe e adicione o mel',
      'Polvilhe com canela se desejar',
      'Beba quente antes de dormir'
    ],
    benefits: [
      'Induz relaxamento natural',
      'Melhora a qualidade do sono',
      'Reduz ansiedade',
      'Auxilia na digestão'
    ],
    imageUrl: '/recipes/chamomile-lavender-tea.jpg',
    nutritionalInfo: {
      calories: 20,
      protein: 0,
      carbs: 5,
      fat: 0
    }
  },
  {
    id: 'sleep-6',
    name: 'Smoothie de Banana e Amêndoas',
    description: 'Bebida rica em triptofano e magnésio para melhorar o sono.',
    difficulty: 'beginner',
    duration: 10,
    category: 'sleep-support',
    ingredients: [
      '1 banana madura',
      '1 xícara de leite de amêndoas',
      '1 colher de sopa de manteiga de amêndoas',
      '1 colher de chá de mel',
      '1 pitada de canela em pó',
      '1 pitada de noz-moscada'
    ],
    steps: [
      'Adicione todos os ingredientes no liquidificador',
      'Bata até ficar homogêneo',
      'Sirva morno ou em temperatura ambiente'
    ],
    benefits: [
      'Rico em triptofano',
      'Fonte de magnésio',
      'Auxilia na produção de melatonina',
      'Promove relaxamento muscular'
    ],
    imageUrl: '/recipes/banana-almond-smoothie.jpg',
    nutritionalInfo: {
      calories: 250,
      protein: 6,
      carbs: 35,
      fat: 12
    }
  },
  {
    id: 'sleep-7',
    name: 'Chá de Erva-cidreira com Maracujá',
    description: 'Bebida calmante para relaxar antes de dormir.',
    difficulty: 'beginner',
    duration: 10,
    category: 'sleep-support',
    ingredients: [
      '1 colher de sopa de erva-cidreira seca',
      '1 colher de chá de folhas de maracujá secas',
      '1 colher de chá de mel',
      '1 xícara de água quente',
      '1 rodela de limão (opcional)'
    ],
    steps: [
      'Ferva a água',
      'Adicione a erva-cidreira e as folhas de maracujá',
      'Deixe em infusão por 5 minutos',
      'Coe e adicione o mel',
      'Adicione a rodela de limão se desejar',
      'Beba quente antes de dormir'
    ],
    benefits: [
      'Efeito calmante natural',
      'Reduz ansiedade',
      'Melhora a qualidade do sono',
      'Auxilia na digestão'
    ],
    imageUrl: '/recipes/lemon-balm-passion-fruit-tea.jpg',
    nutritionalInfo: {
      calories: 25,
      protein: 0,
      carbs: 6,
      fat: 0
    }
  },
  {
    id: 'sleep-8',
    name: 'Leite de Cúrcuma com Gengibre',
    description: 'Bebida anti-inflamatória e relaxante para o sono.',
    difficulty: 'beginner',
    duration: 15,
    category: 'sleep-support',
    ingredients: [
      '1 xícara de leite de amêndoas',
      '1/2 colher de chá de cúrcuma em pó',
      '1/4 colher de chá de gengibre em pó',
      '1 colher de chá de mel',
      '1 pitada de pimenta preta',
      '1 pitada de canela em pó'
    ],
    steps: [
      'Aqueça o leite de amêndoas em fogo baixo',
      'Adicione a cúrcuma, gengibre e pimenta preta',
      'Mexa bem até dissolver',
      'Adicione o mel e a canela',
      'Sirva quente antes de dormir'
    ],
    benefits: [
      'Propriedades anti-inflamatórias',
      'Promove relaxamento',
      'Melhora a qualidade do sono',
      'Auxilia na digestão'
    ],
    imageUrl: '/recipes/turmeric-ginger-milk.jpg',
    nutritionalInfo: {
      calories: 120,
      protein: 2,
      carbs: 15,
      fat: 6
    }
  }
]; 