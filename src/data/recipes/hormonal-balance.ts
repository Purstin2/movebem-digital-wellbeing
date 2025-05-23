import { Recipe } from '../types';

export const hormonalBalanceRecipes: Recipe[] = [
  {
    id: 'hormonal-1',
    name: 'Chá de Maca e Canela',
    description: 'Bebida quente para auxiliar no equilíbrio hormonal.',
    difficulty: 'beginner',
    duration: 5,
    category: 'hormonal-balance',
    ingredients: [
      '1 colher de chá de maca em pó',
      '1 pau de canela',
      '1 colher de chá de mel',
      '1 xícara de água quente',
      '1 colher de chá de gengibre ralado (opcional)'
    ],
    steps: [
      'Ferva a água com a canela e o gengibre',
      'Desligue o fogo e adicione a maca em pó',
      'Coe e adicione o mel',
      'Beba quente'
    ],
    benefits: [
      'Auxilia no equilíbrio hormonal',
      'Aumenta a energia',
      'Melhora o humor'
    ],
    imageUrl: '/images/nutrition/placeholder-recipe.jpg',
    nutritionalInfo: {
      calories: 50,
      protein: 1,
      carbs: 12,
      fat: 0
    }
  },
  {
    id: 'hormonal-2',
    name: 'Bowl de Frutas com Sementes',
    description: 'Refeição nutritiva rica em nutrientes para equilíbrio hormonal.',
    difficulty: 'beginner',
    duration: 15,
    category: 'hormonal-balance',
    ingredients: [
      '1 xícara de iogurte natural',
      '1/2 xícara de morangos',
      '1/2 xícara de mirtilos',
      '1 colher de sopa de sementes de linhaça',
      '1 colher de sopa de sementes de chia',
      '1 colher de sopa de mel',
      '1 colher de sopa de nozes picadas'
    ],
    steps: [
      'Coloque o iogurte em uma tigela',
      'Adicione as frutas',
      'Polvilhe as sementes e nozes',
      'Regue com mel',
      'Misture bem e sirva'
    ],
    benefits: [
      'Rico em ômega-3',
      'Auxilia no equilíbrio hormonal',
      'Fornece energia sustentável'
    ],
    imageUrl: '/images/nutrition/placeholder-recipe.jpg',
    nutritionalInfo: {
      calories: 280,
      protein: 12,
      carbs: 35,
      fat: 15
    }
  },
  {
    id: 'hormonal-3',
    name: 'Smoothie de Maca e Cacau',
    description: 'Bebida rica em adaptógenos e minerais para equilíbrio hormonal.',
    difficulty: 'beginner',
    duration: 10,
    category: 'hormonal-balance',
    ingredients: [
      '1 banana congelada',
      '1 colher de sopa de maca em pó',
      '1 colher de sopa de cacau em pó',
      '1 colher de sopa de sementes de cânhamo',
      '1 colher de sopa de manteiga de amêndoas',
      '1 xícara de leite de amêndoas',
      '1 colher de sopa de mel',
      '1 pitada de canela em pó'
    ],
    steps: [
      'Adicione todos os ingredientes no liquidificador',
      'Bata até ficar cremoso',
      'Sirva imediatamente'
    ],
    benefits: [
      'Rico em adaptógenos',
      'Auxilia no equilíbrio hormonal',
      'Fonte de magnésio e zinco',
      'Melhora a energia e o humor'
    ],
    imageUrl: '/images/nutrition/placeholder-recipe.jpg',
    nutritionalInfo: {
      calories: 280,
      protein: 8,
      carbs: 35,
      fat: 15
    }
  },
  {
    id: 'hormonal-4',
    name: 'Salada de Quinoa com Vegetais Crucíferos',
    description: 'Refeição rica em nutrientes para suporte hormonal.',
    difficulty: 'beginner',
    duration: 20,
    category: 'hormonal-balance',
    ingredients: [
      '1 xícara de quinoa cozida',
      '1 xícara de brócolis picado',
      '1 xícara de couve-flor picada',
      '1/2 xícara de repolho roxo picado',
      '1/4 xícara de sementes de abóbora',
      '1/4 xícara de azeite extra virgem',
      'Suco de 1 limão',
      '1 colher de chá de mostarda',
      '1 colher de chá de mel',
      'Sal e pimenta a gosto'
    ],
    steps: [
      'Cozinhe a quinoa conforme as instruções',
      'Refogue levemente os vegetais crucíferos',
      'Misture a quinoa com os vegetais',
      'Prepare o molho com azeite, limão, mostarda e mel',
      'Tempere com sal e pimenta',
      'Polvilhe as sementes de abóbora'
    ],
    benefits: [
      'Rica em indol-3-carbinol',
      'Auxilia na detoxificação hormonal',
      'Fonte de proteínas vegetais',
      'Rica em minerais essenciais'
    ],
    imageUrl: '/images/nutrition/placeholder-recipe.jpg',
    nutritionalInfo: {
      calories: 320,
      protein: 12,
      carbs: 40,
      fat: 18
    }
  },
  {
    id: 'hormonal-5',
    name: 'Smoothie de Sementes e Frutas',
    description: 'Smoothie rico em ômega-3 e nutrientes para equilíbrio hormonal.',
    difficulty: 'beginner',
    duration: 10,
    category: 'hormonal-balance',
    ingredients: [
      '1 banana',
      '1/2 xícara de morangos',
      '1 colher de sopa de sementes de linhaça',
      '1 colher de sopa de sementes de chia',
      '1 colher de sopa de sementes de abóbora',
      '1 xícara de leite de amêndoas',
      '1 colher de sopa de mel',
      '1 pitada de canela em pó'
    ],
    steps: [
      'Adicione todos os ingredientes no liquidificador',
      'Bata até ficar homogêneo',
      'Sirva imediatamente'
    ],
    benefits: [
      'Rico em ômega-3',
      'Auxilia no equilíbrio hormonal',
      'Fonte de minerais essenciais',
      'Melhora a digestão'
    ],
    imageUrl: '/images/nutrition/placeholder-recipe.jpg',
    nutritionalInfo: {
      calories: 280,
      protein: 8,
      carbs: 45,
      fat: 12
    }
  },
  {
    id: 'hormonal-6',
    name: 'Salada de Folhas Verdes com Sementes',
    description: 'Salada rica em nutrientes para suporte hormonal.',
    difficulty: 'beginner',
    duration: 15,
    category: 'hormonal-balance',
    ingredients: [
      '2 xícaras de mix de folhas verdes',
      '1/4 xícara de sementes de girassol',
      '1/4 xícara de sementes de abóbora',
      '1/4 xícara de sementes de chia',
      '1/4 xícara de azeite extra virgem',
      'Suco de 1 limão',
      '1 colher de chá de mostarda',
      '1 colher de chá de mel',
      'Sal e pimenta a gosto'
    ],
    steps: [
      'Misture as folhas verdes em uma tigela',
      'Adicione as sementes',
      'Prepare o molho com azeite, limão, mostarda e mel',
      'Tempere com sal e pimenta',
      'Regue a salada com o molho'
    ],
    benefits: [
      'Rica em ômega-3',
      'Auxilia no equilíbrio hormonal',
      'Fonte de minerais essenciais',
      'Melhora a digestão'
    ],
    imageUrl: '/images/nutrition/placeholder-recipe.jpg',
    nutritionalInfo: {
      calories: 320,
      protein: 10,
      carbs: 15,
      fat: 25
    }
  },
  {
    id: 'hormonal-7',
    name: 'Chá de Sementes de Feno-grego',
    description: 'Bebida quente para auxiliar no equilíbrio hormonal.',
    difficulty: 'beginner',
    duration: 10,
    category: 'hormonal-balance',
    ingredients: [
      '1 colher de chá de sementes de feno-grego',
      '1 pau de canela',
      '1 colher de chá de mel',
      '1 xícara de água quente',
      '1 colher de chá de gengibre ralado (opcional)'
    ],
    steps: [
      'Ferva a água com a canela e o gengibre',
      'Adicione as sementes de feno-grego',
      'Deixe em infusão por 5 minutos',
      'Coe e adicione o mel',
      'Beba quente'
    ],
    benefits: [
      'Auxilia no equilíbrio hormonal',
      'Melhora a digestão',
      'Aumenta a energia',
      'Reduz inflamação'
    ],
    imageUrl: '/images/nutrition/placeholder-recipe.jpg',
    nutritionalInfo: {
      calories: 30,
      protein: 1,
      carbs: 8,
      fat: 0
    }
  },
  {
    id: 'hormonal-8',
    name: 'Bowl de Quinoa com Vegetais Crucíferos',
    description: 'Refeição completa rica em nutrientes para suporte hormonal.',
    difficulty: 'beginner',
    duration: 25,
    category: 'hormonal-balance',
    ingredients: [
      '1 xícara de quinoa cozida',
      '1 xícara de brócolis picado',
      '1 xícara de couve-flor picada',
      '1/2 xícara de repolho roxo picado',
      '1/4 xícara de sementes de abóbora',
      '1/4 xícara de azeite extra virgem',
      'Suco de 1 limão',
      '1 colher de chá de mostarda',
      '1 colher de chá de mel',
      'Sal e pimenta a gosto'
    ],
    steps: [
      'Cozinhe a quinoa conforme as instruções',
      'Refogue levemente os vegetais crucíferos',
      'Misture a quinoa com os vegetais',
      'Prepare o molho com azeite, limão, mostarda e mel',
      'Tempere com sal e pimenta',
      'Polvilhe as sementes de abóbora'
    ],
    benefits: [
      'Rica em indol-3-carbinol',
      'Auxilia na detoxificação hormonal',
      'Fonte de proteínas vegetais',
      'Rica em minerais essenciais'
    ],
    imageUrl: '/images/nutrition/placeholder-recipe.jpg',
    nutritionalInfo: {
      calories: 320,
      protein: 12,
      carbs: 40,
      fat: 18
    }
  }
]; 