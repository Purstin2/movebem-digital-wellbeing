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
  }
]; 