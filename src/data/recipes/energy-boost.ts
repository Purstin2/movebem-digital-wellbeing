import { Recipe } from '@/types/nutrition';

export const energyBoostRecipes: Recipe[] = [
  {
    id: 'matcha_energy_balls',
    title: 'Bolinhas Energéticas de Matcha',
    category: 'energy_boost',
    targetProfile: ['afternoon_slump', 'mental_focus'],
    difficulty: 'easy',
    prepTime: '20 min',
    emotionalMessage: 'Energia sustentável em cada mordida',
    
    ingredients: [
      { item: '1 col chá matcha', benefit: 'Cafeína + L-teanina para foco' },
      { item: '1 xícara tâmaras', benefit: 'Energia natural sustentada' },
      { item: '1 xícara castanha de caju', benefit: 'Proteína e gorduras boas' },
      { item: '1/2 xícara coco ralado', benefit: 'MCTs para energia cerebral' },
      { item: '1 col sopa maca', benefit: 'Adaptógeno energizante' },
      { item: 'Pitada sal marinho', benefit: 'Eletrólitos essenciais' }
    ],
    
    preparation: [
      'Processe tâmaras e castanhas até formar pasta',
      'Adicione matcha, maca e sal',
      'Forme bolinhas pequenas',
      'Role no coco ralado',
      'Refrigere por 30min'
    ],
    
    scientificBacking: 'Matcha fornece energia por 4-6h sem picos de cortisol',
    
    timing: 'Ideal para meio da manhã ou tarde',
    
    personalizedTips: {
      caffeine_sensitive: 'Use metade do matcha',
      blood_sugar: 'Limite a 2 unidades por vez',
      nut_allergy: 'Substitua castanhas por sementes'
    }
  },
  {
    id: 'beet_energy_juice',
    title: 'Suco Energizante de Beterraba',
    category: 'energy_boost',
    targetProfile: ['physical_energy', 'exercise_performance'],
    difficulty: 'medium',
    prepTime: '15 min',
    emotionalMessage: 'Poder natural para seu dia',
    
    ingredients: [
      { item: '1 beterraba média', benefit: 'Nitratos para energia celular' },
      { item: '2 cenouras', benefit: 'Glicose de liberação lenta' },
      { item: '1 maçã', benefit: 'Frutose natural energizante' },
      { item: '2cm gengibre', benefit: 'Ativa circulação' },
      { item: '1/2 limão', benefit: 'Vitamina C para absorção' },
      { item: '1 col chá cúrcuma', benefit: 'Anti-inflamatório natural' }
    ],
    
    preparation: [
      'Lave e corte os vegetais',
      'Processe tudo no extrator',
      'Adicione cúrcuma ao suco',
      'Finalize com limão',
      'Sirva imediatamente'
    ],
    
    scientificBacking: 'Nitratos da beterraba aumentam performance física em 20%',
    
    timing: '30-60min antes de exercício ou pela manhã',
    
    personalizedTips: {
      blood_pressure: 'Monitore efeito dos nitratos',
      digestion: 'Dilua com água se necessário',
      diabetes: 'Use apenas meia maçã'
    }
  },
  {
    id: 'quinoa_power_bowl',
    title: 'Bowl Energético de Quinoa',
    category: 'energy_boost',
    targetProfile: ['sustained_energy', 'protein_needs'],
    difficulty: 'medium',
    prepTime: '25 min',
    emotionalMessage: 'Nutrição completa para energia duradoura',
    
    ingredients: [
      { item: '1 xícara quinoa', benefit: 'Proteína completa + carboidratos' },
      { item: '1/2 abacate', benefit: 'Gorduras para energia sustentada' },
      { item: '1 ovo cozido', benefit: 'Proteína e B12 para energia' },
      { item: 'Espinafre fresco', benefit: 'Ferro para oxigenação' },
      { item: 'Sementes de abóbora', benefit: 'Zinco e magnésio' },
      { item: 'Azeite extra virgem', benefit: 'Gorduras anti-inflamatórias' }
    ],
    
    preparation: [
      'Cozinhe quinoa (2:1 água:quinoa)',
      'Prepare vegetais e ovo',
      'Monte bowl com quinoa na base',
      'Adicione camadas de vegetais e ovo',
      'Finalize com sementes e azeite'
    ],
    
    scientificBacking: 'Combinação de proteínas e gorduras boas mantém energia por 4h',
    
    timing: 'Almoço ou pré-treino',
    
    personalizedTips: {
      vegan: 'Substitua ovo por tofu temperado',
      gluten_sensitive: 'Quinoa já é naturalmente sem glúten',
      iron_needs: 'Adicione mais vegetais verdes'
    }
  }
];

// Categorias de receitas energéticas
export const energyBoostCategories = {
  snacks: ['matcha_energy_balls'],
  drinks: ['beet_energy_juice'],
  meals: ['quinoa_power_bowl']
}; 