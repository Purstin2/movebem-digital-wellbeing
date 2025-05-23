import { Recipe } from '../types';

export const energyBoostRecipes: Recipe[] = [
  {
    id: 'energy-1',
    name: 'Smoothie Energético Verde',
    description: 'Smoothie rico em nutrientes para aumentar a energia.',
    difficulty: 'beginner',
    duration: 10,
    category: 'energy-boost',
    ingredients: [
      '2 xícaras de espinafre',
      '1 banana',
      '1 maçã',
      '1 colher de sopa de mel',
      '1 colher de sopa de sementes de chia',
      '1 xícara de água de coco',
      '1 colher de sopa de proteína em pó (opcional)'
    ],
    steps: [
      'Adicione todos os ingredientes no liquidificador',
      'Bata até ficar homogêneo',
      'Sirva imediatamente'
    ],
    benefits: [
      'Aumenta a energia',
      'Rico em vitaminas e minerais',
      'Auxilia na recuperação muscular'
    ],
    imageUrl: '/images/nutrition/placeholder-recipe.jpg',
    nutritionalInfo: {
      calories: 220,
      protein: 8,
      carbs: 40,
      fat: 5
    }
  },
  {
    id: 'energy-2',
    name: 'Barrinha de Energia Caseira',
    description: 'Snack energético e nutritivo para o dia a dia.',
    difficulty: 'beginner',
    duration: 20,
    category: 'energy-boost',
    ingredients: [
      '1 xícara de aveia',
      '1/2 xícara de amendoim',
      '1/2 xícara de uvas passas',
      '1/4 xícara de mel',
      '1/4 xícara de manteiga de amendoim',
      '1 colher de sopa de sementes de chia',
      '1 colher de sopa de sementes de linhaça'
    ],
    steps: [
      'Misture todos os ingredientes secos',
      'Adicione o mel e a manteiga de amendoim',
      'Misture bem até formar uma massa',
      'Pressione em uma forma',
      'Leve à geladeira por 1 hora',
      'Corte em barras e sirva'
    ],
    benefits: [
      'Fornece energia sustentável',
      'Rico em proteínas e fibras',
      'Ideal para lanches rápidos'
    ],
    imageUrl: '/images/nutrition/placeholder-recipe.jpg',
    nutritionalInfo: {
      calories: 180,
      protein: 6,
      carbs: 25,
      fat: 8
    }
  },
  {
    id: 'energy-3',
    name: 'Bowl de Açaí com Superalimentos',
    description: 'Bowl energético rico em antioxidantes e nutrientes.',
    difficulty: 'beginner',
    duration: 15,
    category: 'energy-boost',
    ingredients: [
      '1 pacote de polpa de açaí',
      '1 banana congelada',
      '1/2 xícara de morangos',
      '1/2 xícara de mirtilos',
      '1 colher de sopa de maca em pó',
      '1 colher de sopa de cacau em pó',
      '1 colher de sopa de sementes de chia',
      '1 colher de sopa de mel',
      '1/4 xícara de granola',
      '1/4 xícara de leite de amêndoas'
    ],
    steps: [
      'Bata o açaí com a banana e o leite de amêndoas',
      'Adicione a maca e o cacau em pó',
      'Coloque em uma tigela',
      'Decore com as frutas, sementes e granola',
      'Regue com mel'
    ],
    benefits: [
      'Rico em antioxidantes',
      'Fornece energia sustentável',
      'Alto teor de vitaminas e minerais',
      'Auxilia na recuperação muscular'
    ],
    imageUrl: '/images/nutrition/placeholder-recipe.jpg',
    nutritionalInfo: {
      calories: 350,
      protein: 10,
      carbs: 45,
      fat: 18
    }
  },
  {
    id: 'energy-4',
    name: 'Quinoa com Vegetais e Tofu',
    description: 'Refeição completa rica em proteínas e carboidratos complexos.',
    difficulty: 'beginner',
    duration: 25,
    category: 'energy-boost',
    ingredients: [
      '1 xícara de quinoa cozida',
      '200g de tofu firme',
      '1 xícara de brócolis',
      '1 xícara de cenoura picada',
      '1/2 xícara de pimentão vermelho',
      '2 colheres de sopa de azeite',
      '2 dentes de alho picados',
      '1 colher de sopa de gengibre ralado',
      '1 colher de sopa de molho de soja',
      '1 colher de chá de cúrcuma',
      'Sal e pimenta a gosto'
    ],
    steps: [
      'Cozinhe a quinoa conforme as instruções',
      'Corte o tofu em cubos',
      'Refogue o alho e o gengibre no azeite',
      'Adicione o tofu e tempere com cúrcuma',
      'Acrescente os vegetais e refogue',
      'Misture com a quinoa',
      'Tempere com molho de soja, sal e pimenta'
    ],
    benefits: [
      'Rica em proteínas vegetais',
      'Fornece energia sustentável',
      'Alta concentração de nutrientes',
      'Auxilia na recuperação muscular'
    ],
    imageUrl: '/images/nutrition/placeholder-recipe.jpg',
    nutritionalInfo: {
      calories: 380,
      protein: 18,
      carbs: 45,
      fat: 15
    }
  },
  {
    id: 'energy-5',
    name: 'Smoothie de Banana e Cacau',
    description: 'Smoothie energético rico em potássio e antioxidantes.',
    difficulty: 'beginner',
    duration: 10,
    category: 'energy-boost',
    ingredients: [
      '2 bananas congeladas',
      '1 colher de sopa de cacau em pó',
      '1 colher de sopa de mel',
      '1 colher de sopa de manteiga de amendoim',
      '1 xícara de leite de amêndoas',
      '1 colher de sopa de sementes de chia',
      '1 pitada de canela em pó'
    ],
    steps: [
      'Adicione todos os ingredientes no liquidificador',
      'Bata até ficar cremoso',
      'Sirva imediatamente'
    ],
    benefits: [
      'Rico em potássio',
      'Fornece energia sustentável',
      'Alto teor de antioxidantes',
      'Auxilia na recuperação muscular'
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
    id: 'energy-6',
    name: 'Bowl de Aveia com Frutas',
    description: 'Café da manhã energético e nutritivo.',
    difficulty: 'beginner',
    duration: 15,
    category: 'energy-boost',
    ingredients: [
      '1 xícara de aveia em flocos',
      '1 xícara de leite de amêndoas',
      '1 banana picada',
      '1/2 xícara de morangos',
      '1/2 xícara de mirtilos',
      '1 colher de sopa de mel',
      '1 colher de sopa de sementes de chia',
      '1 colher de sopa de nozes picadas',
      '1 pitada de canela em pó'
    ],
    steps: [
      'Misture a aveia com o leite de amêndoas',
      'Deixe descansar por 5 minutos',
      'Adicione as frutas picadas',
      'Polvilhe as sementes e nozes',
      'Regue com mel e canela'
    ],
    benefits: [
      'Rica em fibras',
      'Fornece energia sustentável',
      'Alto teor de vitaminas e minerais',
      'Auxilia na saciedade'
    ],
    imageUrl: '/images/nutrition/placeholder-recipe.jpg',
    nutritionalInfo: {
      calories: 320,
      protein: 10,
      carbs: 55,
      fat: 12
    }
  },
  {
    id: 'energy-7',
    name: 'Wrap de Grão-de-bico e Vegetais',
    description: 'Refeição completa rica em proteínas e carboidratos complexos.',
    difficulty: 'beginner',
    duration: 20,
    category: 'energy-boost',
    ingredients: [
      '2 wraps integrais',
      '1 xícara de grão-de-bico cozido',
      '1 xícara de mix de vegetais (cenoura, pepino, pimentão)',
      '1/4 xícara de hummus',
      '1 colher de sopa de azeite',
      '1 colher de chá de cominho em pó',
      '1 colher de chá de páprica',
      'Sal e pimenta a gosto',
      'Folhas de alface',
      'Tomate cereja'
    ],
    steps: [
      'Misture o grão-de-bico com os temperos',
      'Espalhe o hummus nos wraps',
      'Adicione os vegetais e o grão-de-bico',
      'Enrole os wraps',
      'Corte ao meio e sirva'
    ],
    benefits: [
      'Rica em proteínas vegetais',
      'Fornece energia sustentável',
      'Alta concentração de nutrientes',
      'Fonte de fibras'
    ],
    imageUrl: '/images/nutrition/placeholder-recipe.jpg',
    nutritionalInfo: {
      calories: 380,
      protein: 15,
      carbs: 55,
      fat: 12
    }
  },
  {
    id: 'energy-8',
    name: 'Smoothie de Manga e Gengibre',
    description: 'Smoothie tropical energético e refrescante.',
    difficulty: 'beginner',
    duration: 10,
    category: 'energy-boost',
    ingredients: [
      '1 manga madura',
      '1 banana',
      '1 colher de sopa de gengibre ralado',
      '1 colher de sopa de mel',
      '1 xícara de água de coco',
      '1 colher de sopa de sementes de chia',
      '1 pitada de canela em pó'
    ],
    steps: [
      'Adicione todos os ingredientes no liquidificador',
      'Bata até ficar homogêneo',
      'Sirva imediatamente'
    ],
    benefits: [
      'Rico em vitaminas A e C',
      'Fornece energia sustentável',
      'Alto teor de antioxidantes',
      'Auxilia na hidratação'
    ],
    imageUrl: '/images/nutrition/placeholder-recipe.jpg',
    nutritionalInfo: {
      calories: 250,
      protein: 4,
      carbs: 55,
      fat: 3
    }
  }
]; 