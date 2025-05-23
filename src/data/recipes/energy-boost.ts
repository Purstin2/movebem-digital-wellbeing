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
    imageUrl: '/recipes/green-smoothie.jpg',
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
    imageUrl: '/recipes/energy-bar.jpg',
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
    imageUrl: '/recipes/acai-bowl.jpg',
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
    imageUrl: '/recipes/quinoa-tofu.jpg',
    nutritionalInfo: {
      calories: 380,
      protein: 18,
      carbs: 45,
      fat: 15
    }
  }
]; 