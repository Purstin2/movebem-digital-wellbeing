import { Recipe } from '@/types/nutrition';

export const hormonalBalanceRecipes: Recipe[] = [
  {
    id: 'maca_smoothie_balance',
    title: 'Smoothie Equilibrante de Maca',
    category: 'hormonal_balance',
    targetProfile: ['hormonal_imbalance', 'menopause_symptoms', 'fatigue'],
    difficulty: 'easy',
    prepTime: '5 min',
    emotionalMessage: 'Harmonia hormonal em cada gole',
    
    ingredients: [
      { item: '1 col chá maca peruana', benefit: 'Adaptógeno regulador hormonal' },
      { item: '1 banana', benefit: 'Triptofano para serotonina' },
      { item: '1 col sopa sementes de abóbora', benefit: 'Zinco para produção hormonal' },
      { item: '1 xícara leite de amêndoas', benefit: 'Vitamina E para equilíbrio' },
      { item: '1 tâmara', benefit: 'Ferro e energia sustentável' },
      { item: 'Canela a gosto', benefit: 'Regulador de insulina' }
    ],
    
    preparation: [
      'Combine todos ingredientes no liquidificador',
      'Bata até ficar cremoso',
      'Ajuste consistência com gelo se desejar',
      'Sirva imediatamente'
    ],
    
    scientificBacking: 'Maca peruana mostrou aumento de 150% na produção de hormônios reguladores em estudos clínicos',
    
    timing: 'Melhor consumido pela manhã',
    
    personalizedTips: {
      thyroid_issues: 'Evite maca crua, use gelatinizada',
      digestive_sensitive: 'Comece com 1/2 colher de maca',
      blood_sugar: 'Omita tâmara, use stevia'
    }
  },
  {
    id: 'seed_cycling_mix',
    title: 'Mix de Sementes Cíclico',
    category: 'hormonal_balance',
    targetProfile: ['menstrual_issues', 'fertility_support'],
    difficulty: 'easy',
    prepTime: '10 min',
    emotionalMessage: 'Nutrindo seu ciclo natural',
    
    ingredients: [
      { item: '2 col sopa sementes de girassol', benefit: 'Selênio para fase folicular' },
      { item: '2 col sopa sementes de linhaça', benefit: 'Lignanas reguladoras' },
      { item: '2 col sopa sementes de abóbora', benefit: 'Zinco para fase lútea' },
      { item: '2 col sopa sementes de gergelim', benefit: 'Cálcio para equilíbrio' },
      { item: '1 col chá canela', benefit: 'Regulação de glicose' }
    ],
    
    preparation: [
      'Moa todas as sementes no processador',
      'Divida em porções diárias',
      'Armazene em pote de vidro na geladeira',
      'Consuma 2 colheres por dia'
    ],
    
    scientificBacking: 'Seed cycling mostrou regularização do ciclo em 80% das mulheres após 3 meses',
    
    timing: 'Fase 1 (1-14 dias): girassol e linhaça, Fase 2 (15-28): abóbora e gergelim',
    
    personalizedTips: {
      irregular_cycle: 'Sincronize com lua nova/cheia',
      digestion: 'Sempre consuma moído fresco',
      absorption: 'Tome com gordura boa (abacate)'
    }
  },
  {
    id: 'adaptogenic_elixir',
    title: 'Elixir Adaptogênico',
    category: 'hormonal_balance',
    targetProfile: ['stress_hormones', 'adrenal_fatigue'],
    difficulty: 'medium',
    prepTime: '15 min',
    emotionalMessage: 'Equilíbrio e vitalidade em uma xícara',
    
    ingredients: [
      { item: '1 col chá ashwagandha', benefit: 'Reduz cortisol em 30%' },
      { item: '1 col chá rhodiola', benefit: 'Adaptógeno energizante' },
      { item: '1 col sopa cacau cru', benefit: 'Magnésio para relaxamento' },
      { item: '1 pitada pimenta caiena', benefit: 'Ativa circulação' },
      { item: 'Leite de coco a gosto', benefit: 'Gorduras para hormônios' },
      { item: 'Mel de manuka', benefit: 'Prebiótico regulador' }
    ],
    
    preparation: [
      'Aqueça leite de coco sem ferver',
      'Adicione adaptógenos e cacau',
      'Misture bem até dissolver',
      'Finalize com mel e pimenta',
      'Beba morno'
    ],
    
    scientificBacking: 'Ashwagandha reduz cortisol em 30% e melhora qualidade do sono em 72%',
    
    timing: 'Ideal antes de dormir ou em momentos de stress',
    
    personalizedTips: {
      anxiety: 'Omita pimenta caiena',
      sleep_issues: 'Adicione noz-moscada',
      autoimmune: 'Consulte médico sobre adaptógenos'
    }
  }
];

// Categorias de receitas hormonais
export const hormonalBalanceCategories = {
  morning: ['maca_smoothie_balance'],
  daily_support: ['seed_cycling_mix'],
  evening: ['adaptogenic_elixir']
}; 