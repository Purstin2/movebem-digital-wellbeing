import { Recipe } from '../types';

export const antiInflammatoryRecipes: Recipe[] = [
  {
    id: 'anti-inflammatory-1',
    name: 'Smoothie Anti-inflamatório',
    description: 'Smoothie rico em antioxidantes e anti-inflamatórios naturais.',
    difficulty: 'beginner',
    duration: 10,
    category: 'anti-inflammatory',
    ingredients: [
      '1 xícara de mirtilos',
      '1 banana',
      '1 colher de sopa de gengibre ralado',
      '1 colher de sopa de cúrcuma em pó',
      '1 colher de sopa de mel',
      '1 xícara de leite de amêndoas',
      '1 colher de sopa de sementes de chia'
    ],
    steps: [
      'Adicione todos os ingredientes no liquidificador',
      'Bata até ficar homogêneo',
      'Sirva imediatamente'
    ],
    benefits: [
      'Reduz inflamação',
      'Fortalece o sistema imunológico',
      'Auxilia na recuperação muscular'
    ],
    imageUrl: '/recipes/anti-inflammatory-smoothie.jpg',
    nutritionalInfo: {
      calories: 250,
      protein: 5,
      carbs: 45,
      fat: 8
    }
  },
  {
    id: 'anti-inflammatory-2',
    name: 'Salada de Quinoa com Cúrcuma',
    description: 'Salada nutritiva com propriedades anti-inflamatórias.',
    difficulty: 'beginner',
    duration: 20,
    category: 'anti-inflammatory',
    ingredients: [
      '1 xícara de quinoa cozida',
      '1/2 xícara de grão-de-bico cozido',
      '1/2 xícara de tomate cereja',
      '1/2 xícara de pepino picado',
      '1/4 xícara de cebola roxa',
      '1 colher de sopa de azeite',
      '1 colher de chá de cúrcuma',
      'Suco de 1 limão',
      'Sal e pimenta a gosto'
    ],
    steps: [
      'Misture a quinoa e o grão-de-bico em uma tigela',
      'Adicione os vegetais picados',
      'Tempere com azeite, cúrcuma, suco de limão, sal e pimenta',
      'Misture bem e sirva'
    ],
    benefits: [
      'Rica em proteínas vegetais',
      'Auxilia na redução de inflamação',
      'Fornece energia sustentável'
    ],
    imageUrl: '/recipes/quinoa-salad.jpg',
    nutritionalInfo: {
      calories: 320,
      protein: 12,
      carbs: 45,
      fat: 10
    }
  },
  {
    id: 'anti-inflammatory-3',
    name: 'Sopa de Cúrcuma e Gengibre',
    description: 'Sopa anti-inflamatória rica em curcumina e gingerol.',
    difficulty: 'beginner',
    duration: 25,
    category: 'anti-inflammatory',
    ingredients: [
      '1 cebola média picada',
      '2 dentes de alho picados',
      '2 colheres de sopa de cúrcuma em pó',
      '1 colher de sopa de gengibre ralado',
      '1 xícara de cenoura picada',
      '1 xícara de abóbora picada',
      '4 xícaras de caldo de legumes',
      '1 colher de sopa de azeite',
      '1/2 xícara de leite de coco',
      'Sal e pimenta a gosto',
      'Suco de 1 limão'
    ],
    steps: [
      'Refogue a cebola e o alho no azeite',
      'Adicione a cúrcuma e o gengibre',
      'Acrescente os legumes e o caldo',
      'Cozinhe até os legumes ficarem macios',
      'Bata no liquidificador até ficar cremosa',
      'Adicione o leite de coco e o suco de limão',
      'Tempere com sal e pimenta'
    ],
    benefits: [
      'Alta concentração de curcumina',
      'Propriedades anti-inflamatórias potentes',
      'Rica em antioxidantes',
      'Auxilia na recuperação muscular'
    ],
    imageUrl: '/recipes/turmeric-soup.jpg',
    nutritionalInfo: {
      calories: 180,
      protein: 4,
      carbs: 20,
      fat: 10
    }
  },
  {
    id: 'anti-inflammatory-4',
    name: 'Salada de Folhas Verdes com Ômega-3',
    description: 'Salada rica em ácidos graxos essenciais e antioxidantes.',
    difficulty: 'beginner',
    duration: 15,
    category: 'anti-inflammatory',
    ingredients: [
      '2 xícaras de mix de folhas verdes',
      '1/2 xícara de salmão grelhado',
      '1/4 xícara de nozes picadas',
      '1/4 xícara de sementes de chia',
      '1/4 xícara de azeite extra virgem',
      'Suco de 1 limão',
      '1 colher de chá de mostarda',
      '1 colher de chá de mel',
      'Sal e pimenta a gosto'
    ],
    steps: [
      'Misture as folhas verdes em uma tigela',
      'Adicione o salmão grelhado',
      'Polvilhe as nozes e sementes de chia',
      'Prepare o molho misturando azeite, limão, mostarda e mel',
      'Tempere com sal e pimenta',
      'Regue a salada com o molho'
    ],
    benefits: [
      'Rica em ômega-3',
      'Alta concentração de antioxidantes',
      'Auxilia na redução de inflamação',
      'Fonte de proteínas de alta qualidade'
    ],
    imageUrl: '/recipes/omega-salad.jpg',
    nutritionalInfo: {
      calories: 350,
      protein: 20,
      carbs: 15,
      fat: 25
    }
  }
]; 