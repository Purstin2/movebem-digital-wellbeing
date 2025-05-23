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
  },
  // NOVAS RECEITAS ANTI-INFLAMATÓRIAS
  {
    id: 'turmeric_ginger_soup',
    title: 'Sopa Dourada Anti-inflamatória',
    category: 'anti_inflammatory',
    targetProfile: ['high_inflammation', 'chronic_pain', 'winter_wellness'],
    difficulty: 'medium',
    prepTime: '25 min',
    emotionalMessage: 'Cada colherada é um abraço quente para suas articulações',
    
    ingredients: [
      { item: '2 col sopa azeite extra virgem', benefit: 'Gorduras monoinsaturadas anti-inflamatórias' },
      { item: '1 cebola média picada', benefit: 'Compostos sulfúricos anti-inflamatórios' },
      { item: '3 dentes de alho', benefit: 'Alicina reduz dor articular' },
      { item: '2 col chá cúrcuma fresca ralada', benefit: 'Curcumina potente anti-inflamatório natural' },
      { item: '1 col sopa gengibre fresco ralado', benefit: 'Gingeróis reduzem enzimas inflamatórias' },
      { item: '1 cenoura média em cubos', benefit: 'Beta-caroteno antioxidante' },
      { item: '1 batata doce pequena em cubos', benefit: 'Antocianinas redutoras de inflamação' },
      { item: '4 xícaras de caldo de legumes', benefit: 'Hidratação e nutrientes bioativos' },
      { item: '1 lata leite de coco', benefit: 'Triglicerídeos de cadeia média anti-inflamatórios' },
      { item: 'Pimenta preta a gosto', benefit: 'Piperina aumenta absorção de curcumina em 2000%' },
      { item: 'Salsinha para finalizar', benefit: 'Clorofila desintoxicante' }
    ],
    
    preparation: [
      'Aqueça o azeite e refogue cebola até ficar translúcida',
      'Adicione alho, cúrcuma e gengibre, refogue 1 minuto sem queimar',
      'Acrescente cenoura e batata doce, misture bem com os temperos',
      'Adicione caldo de legumes, ferva e reduza fogo',
      'Cozinhe por 15 min até legumes macios',
      'Bata no liquidificador até textura aveludada',
      'Retorne à panela, adicione leite de coco, pimenta e aqueça sem ferver',
      'Finalize com salsinha fresca'
    ],
    
    scientificBacking: 'A combinação de cúrcuma e pimenta preta aumenta a biodisponibilidade da curcumina em até 2000%, maximizando seus efeitos anti-inflamatórios. Estudos mostram redução significativa de citocinas pró-inflamatórias após consumo regular.',
    
    timing: 'Ideal para jantar ou almoço leve durante períodos de crise inflamatória',
    
    personalizedTips: {
      digestive_sensitive: 'Reduza gengibre pela metade e evite pimenta em excesso',
      weight_management: 'Use apenas metade do leite de coco, substitua o resto por caldo',
      severe_inflammation: 'Adicione 1 col chá de óleo de coco extra ao servir para potencializar'
    },
    
    imageUrl: '/images/nutrition/turmeric_soup.jpg'
  },
  {
    id: 'berry_antiox_smoothie',
    title: 'Smoothie Antioxidante de Frutas Vermelhas',
    category: 'anti_inflammatory',
    targetProfile: ['joint_pain', 'post_exercise', 'inflammation_recovery'],
    difficulty: 'easy',
    prepTime: '5 min',
    emotionalMessage: 'Um oceano de antioxidantes para acalmar a tempestade inflamatória do seu corpo',
    
    ingredients: [
      { item: '1 xícara mix de frutas vermelhas congeladas', benefit: 'Antocianinas reduzem mediadores inflamatórios' },
      { item: '1/4 xícara cerejas sem caroço', benefit: 'Contém antocianinas que reduzem dor articular em 25%' },
      { item: '1 col sopa sementes de linhaça moídas', benefit: 'Ômega-3 ALA diminui proteína C-reativa' },
      { item: '1 col sopa proteína de ervilha', benefit: 'Aminoácidos para reparo tecidual sem inflamação' },
      { item: '1 xícara leite de coco light', benefit: 'MCTs anti-inflamatórios' },
      { item: '1/2 col chá extrato de baunilha', benefit: 'Vanilina acalma vias inflamatórias' },
      { item: '1 col chá canela', benefit: 'Contém compostos que inibem NF-kB inflamatório' },
      { item: 'Gelo a gosto', benefit: 'Efeito analgésico local' }
    ],
    
    preparation: [
      'Adicione todos os ingredientes no liquidificador',
      'Bata até obter consistência cremosa',
      'Ajuste a textura com mais gelo ou líquido conforme preferência',
      'Sirva imediatamente para máximo benefício antioxidante'
    ],
    
    scientificBacking: 'Frutas vermelhas são ricas em polifenóis, especialmente antocianinas, que inibem as vias COX-1 e COX-2, mesmos alvos de medicamentos anti-inflamatórios como ibuprofeno, mas sem efeitos colaterais gástricos.',
    
    timing: 'Ideal como café da manhã ou após exercícios para combater inflamação induzida por atividade física',
    
    personalizedTips: {
      diabetes: 'Substitua cerejas por morangos para menor índice glicêmico',
      fibromyalgia: 'Adicione 1 col chá de cúrcuma para potencializar efeito',
      autoimmune: 'Evite proteína de ervilha em caso de sensibilidade a leguminosas'
    },
    
    imageUrl: '/images/nutrition/berry_smoothie.jpg'
  },
  {
    id: 'antiinflam_breakfast_bowl',
    title: 'Bowl Antiinflamatório do Despertar',
    category: 'anti_inflammatory',
    targetProfile: ['morning_stiffness', 'chronic_pain', 'energy_boost'],
    difficulty: 'medium',
    prepTime: '15 min',
    emotionalMessage: 'Comece o dia nutrindo cada célula com poder anti-inflamatório',
    
    ingredients: [
      { item: '1/2 xícara aveia em flocos', benefit: 'Beta-glucanas reduzem citocinas inflamatórias' },
      { item: '1 col sopa sementes de chia', benefit: 'Ômega-3 inibe vias inflamatórias' },
      { item: '1 col chá canela', benefit: 'Reduz glicemia e inflamação associada' },
      { item: '1 col sopa açaí em pó', benefit: 'Antocianinas protegem células contra danos oxidativos' },
      { item: '1 col sopa nozes picadas', benefit: 'Ácidos graxos ômega-3 reduzem proteína C-reativa' },
      { item: '1/2 maçã verde ralada', benefit: 'Quercetina inibe histamina e mediadores inflamatórios' },
      { item: '1 col chá gengibre em pó', benefit: 'Gingeróis aliviam rigidez matinal' },
      { item: '1 xícara leite vegetal sem açúcar', benefit: 'Evita caseína potencialmente inflamatória' },
      { item: '1/2 col chá extrato de baunilha', benefit: 'Vanilina tem propriedades anti-inflamatórias' },
      { item: '1 col chá mel de manuka', benefit: 'Compostos antibacterianos e anti-inflamatórios' }
    ],
    
    preparation: [
      'Misture aveia, chia, canela, açaí em pó e gengibre em uma tigela',
      'Aqueça o leite vegetal até ficar morno (não ferver)',
      'Despeje sobre os ingredientes secos e misture bem',
      'Deixe descansar por 5 minutos para hidratar',
      'Adicione maçã ralada, nozes, baunilha e mel',
      'Misture bem e sirva morno'
    ],
    
    scientificBacking: 'A combinação de compostos polifenólicos de diversas fontes vegetais cria um efeito sinérgico anti-inflamatório. Estudos mostram que dietas ricas nestes compostos reduzem biomarcadores inflamatórios como IL-6 e TNF-α em até 35%.',
    
    timing: 'Consumir 30-60 minutos após acordar para combater rigidez matinal',
    
    personalizedTips: {
      rheumatoid_arthritis: 'Adicione 1/2 col chá de cúrcuma para potencializar efeito',
      digestive_sensitive: 'Cozinhe a aveia completamente para maior digestibilidade',
      blood_sugar_issues: 'Substitua mel por stevia e use maçã verde para menor impacto glicêmico'
    },
    
    imageUrl: '/images/nutrition/antiinflam_bowl.jpg'
  },
  {
    id: 'ginger_turmeric_tea',
    title: 'Chá Medicinal de Gengibre e Cúrcuma',
    category: 'anti_inflammatory',
    targetProfile: ['acute_pain', 'joint_inflammation', 'immune_support'],
    difficulty: 'easy',
    prepTime: '10 min',
    emotionalMessage: 'Um elixir quente que abraça cada articulação inflamada com gentileza curativa',
    
    ingredients: [
      { item: '1 pedaço de 2cm de gengibre fresco', benefit: 'Gingeróis bloqueiam enzimas inflamatórias COX e LOX' },
      { item: '1 pedaço de 2cm de cúrcuma fresca', benefit: 'Curcumina inibe NF-kB, redutor principal da inflamação' },
      { item: '1 pau de canela', benefit: 'Cinnamaldeído reduz citocinas inflamatórias' },
      { item: '3 cravos-da-índia', benefit: 'Eugenol tem ação analgésica local' },
      { item: '1 estrela de anis', benefit: 'Ácido shikímico suporta resposta imune saudável' },
      { item: '1 col chá pimenta preta', benefit: 'Piperina aumenta absorção de curcumina em 2000%' },
      { item: '1 col chá mel de manuka', benefit: 'Metilglioxal com propriedades antibacterianas e anti-inflamatórias' },
      { item: '1 fatia de limão', benefit: 'Vitamina C potencializa ação antioxidante' },
      { item: '2 xícaras de água filtrada', benefit: 'Veículo para extração de compostos bioativos' }
    ],
    
    preparation: [
      'Rale finamente o gengibre e a cúrcuma frescos',
      'Ferva a água em uma panela pequena',
      'Adicione gengibre, cúrcuma, canela, cravos, anis e pimenta',
      'Reduza o fogo e ferva suavemente por 5-7 minutos',
      'Desligue o fogo e deixe em infusão por mais 3 minutos',
      'Coe e adicione mel após o chá esfriar um pouco',
      'Finalize com fatia de limão ao servir'
    ],
    
    scientificBacking: 'Estudos demonstram que os compostos bioativos do gengibre e da cúrcuma inibem as mesmas vias enzimáticas que medicamentos anti-inflamatórios convencionais, mas sem efeitos adversos gastrintestinais quando consumidos adequadamente.',
    
    timing: 'Ideal para consumo 30 minutos antes de dormir ou durante crises de dor aguda',
    
    personalizedTips: {
      sensitive_stomach: 'Reduza gengibre pela metade e evite consumo com estômago vazio',
      hypertension: 'Omita o mel e monitore resposta à canela (pode reduzir pressão)',
      liver_support: 'Adicione 1 col chá de dente-de-leão seco para potencializar desintoxicação'
    },
    
    imageUrl: '/images/nutrition/ginger_tea.jpg'
  },
  {
    id: 'omega_power_salad',
    title: 'Salada Power de Ômegas',
    category: 'anti_inflammatory',
    targetProfile: ['joint_health', 'heart_health', 'brain_function'],
    difficulty: 'medium',
    prepTime: '15 min',
    emotionalMessage: 'Um jardim de nutrientes essenciais para silenciar a inflamação celular',
    
    ingredients: [
      { item: '2 xícaras de folhas verdes escuras variadas', benefit: 'Luteína e zeaxantina protegem células contra oxidação' },
      { item: '1/4 xícara de nozes', benefit: 'Ácido alfa-linolênico (ALA) reduz marcadores inflamatórios' },
      { item: '1 col sopa sementes de abóbora', benefit: 'Zinco suporta função imune saudável' },
      { item: '1/2 abacate', benefit: 'Gorduras monoinsaturadas anti-inflamatórias' },
      { item: '1/2 xícara de mirtilos frescos', benefit: 'Polifenóis reduzem estresse oxidativo articular' },
      { item: '100g de salmão selvagem cozido', benefit: 'EPA e DHA modulam resposta inflamatória' },
      { item: '1/4 xícara de chucrute ou kimchi', benefit: 'Probióticos regulam inflamação intestinal' },
      { item: '1 col sopa de cebola roxa fatiada', benefit: 'Quercetina inibe liberação de histamina' }
    ],
    
    preparation: [
      'Disponha as folhas verdes como base em uma tigela ampla',
      'Arranje harmoniosamente os demais ingredientes sobre as folhas',
      'Para o molho, misture em recipiente separado:',
      '2 col sopa de azeite extra virgem',
      '1 col sopa de suco de limão fresco',
      '1 dente de alho pequeno esmagado',
      '1/2 col chá de mostarda Dijon',
      '1 col chá de mel (opcional)',
      'Sal marinho e pimenta preta a gosto',
      'Regue a salada com o molho somente na hora de servir'
    ],
    
    scientificBacking: 'Os ácidos graxos ômega-3 presentes no salmão, nozes e abacate convertem-se em resolvinas e protectinas, compostos que ativamente "desligam" o processo inflamatório. Estudos indicam que dietas ricas em ômega-3 resultam em níveis 33% menores de proteína C-reativa.',
    
    timing: 'Ideal para almoço ou jantar leve, especialmente em dias de maior inflamação',
    
    personalizedTips: {
      pescatarian: 'Utilize conforme a receita original',
      vegetarian: 'Substitua salmão por 1/2 xícara de tofu firme marinado em alga nori',
      histamine_sensitive: 'Omita chucrute/kimchi e substitua por pepino fresco'
    },
    
    imageUrl: '/images/nutrition/omega_salad.jpg'
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
    title: 'Smoothie Potência de Linhaça',
    category: 'hormonal_balance',
    targetProfile: ['menopause_symptoms', 'estrogen_dominance', 'breast_health'],
    difficulty: 'easy',
    prepTime: '5 min',
    emotionalMessage: 'Equilibre suas ondas hormonais com carinho natural',
    
    ingredients: [
      { item: '2 col sopa linhaça moída', benefit: 'Lignanas regulam estrogênio' },
      { item: '1 banana madura', benefit: 'Potássio para equilíbrio mineral' },
      { item: '1/2 xícara mirtilos', benefit: 'Antioxidantes para saúde hormonal' },
      { item: '1 xícara leite vegetal', benefit: 'Sem disruptores hormonais' },
      { item: '1 col chá canela', benefit: 'Estabiliza níveis de açúcar' },
      { item: '1 punhado espinafre', benefit: 'Magnésio para equilíbrio' },
      { item: 'Gelo a gosto', benefit: 'Refrescante para ondas de calor' }
    ],
    
    preparation: [
      'Adicione todos os ingredientes no liquidificador',
      'Bata até ficar homogêneo',
      'Sirva imediatamente para máximo benefício'
    ],
    
    scientificBacking: 'Lignanas da linhaça se convertem em fitoestrogênios que modulam receptores estrogênicos',
    
    timing: 'Ideal para café da manhã ou lanche da tarde',
    
    personalizedTips: {
      hot_flashes: 'Adicione 1/2 col chá de maca peruana',
      low_energy: 'Inclua 1 col chá de mel orgânico',
      weight_concerns: 'Use água em vez de leite vegetal'
    },
    
    imageUrl: '/images/nutrition/flax_smoothie.jpg'
  },
  
  {
    id: 'maca_adaptogenic_latte',
    title: 'Latte Adaptogênico de Maca',
    category: 'hormonal_balance',
    targetProfile: ['fatigue', 'stress', 'hormonal_fluctuations'],
    difficulty: 'easy',
    prepTime: '7 min',
    emotionalMessage: 'Um abraço quente para suas glândulas cansadas',
    
    ingredients: [
      { item: '1 col chá maca em pó', benefit: 'Adaptógeno equilibrador hormonal' },
      { item: '1 xícara leite de amêndoas', benefit: 'Gorduras saudáveis para hormônios' },
      { item: '1/2 col chá canela', benefit: 'Estabiliza açúcar no sangue' },
      { item: '1/2 col chá gengibre em pó', benefit: 'Anti-inflamatório para TPM' },
      { item: '1 pitada noz-moscada', benefit: 'Relaxante para sistema nervoso' },
      { item: '1 col chá mel ou tâmara', benefit: 'Açúcar natural não disruptivo' }
    ],
    
    preparation: [
      'Aqueça o leite sem ferver',
      'Adicione todos os ingredientes em secos',
      'Use mixer/batedor de mão para espumar',
      'Adoce a gosto e sirva quente'
    ],
    
    scientificBacking: 'Maca contém alcaloides que apoiam o eixo hipotálamo-hipófise-adrenal',
    
    timing: 'Melhor consumido pela manhã ou início da tarde',
    
    personalizedTips: {
      adrenal_fatigue: 'Adicione 1/4 col chá ashwagandha',
      thyroid_issues: 'Evite consumir após 15h (pode energizar)',
      caffeine_sensitive: 'Ideal substituição para café'
    },
    
    imageUrl: '/images/nutrition/maca_latte.jpg'
  },
  // NOVAS RECEITAS PARA EQUILÍBRIO HORMONAL
  {
    id: 'seed_cycling_overnight_oats',
    title: 'Aveia com Ciclagem de Sementes',
    category: 'hormonal_balance',
    targetProfile: ['menstrual_irregularity', 'pms', 'fertility_support'],
    difficulty: 'easy',
    prepTime: '10 min + 8h geladeira',
    emotionalMessage: 'Nutra seu ciclo, uma colher de cada vez',
    
    ingredients: [
      { item: '1/2 xícara de aveia em flocos', benefit: 'Fibras para eliminação de estrogênio em excesso' },
      { item: '1 col sopa de sementes de abóbora', benefit: 'Zinco eleva progesterona na fase lútea' },
      { item: '1 col sopa de sementes de linhaça moídas', benefit: 'Lignanas modulam estrogênio na fase folicular' },
      { item: '1 col sopa de sementes de girassol', benefit: 'Selênio suporta conversão de T4 para T3 (tireóide)' },
      { item: '1 col chá de gergelim', benefit: 'Cálcio e zinco para equilíbrio hormonal' },
      { item: '1 xícara de leite vegetal sem açúcar', benefit: 'Evita disruptores hormonais da proteína animal' },
      { item: '1/2 maçã picada', benefit: 'Quercetina reduz inflamação relacionada a desequilíbrios hormonais' },
      { item: '1 col chá de canela', benefit: 'Regula resistência insulínica que afeta hormônios sexuais' },
      { item: '1 col chá de extrato de baunilha', benefit: 'Reduz desejos por açúcar que desestabilizam hormônios' }
    ],
    
    preparation: [
      'Combine aveia e leite vegetal em pote com tampa',
      'Adicione sementes específicas para sua fase do ciclo:',
      '- Fase folicular (dias 1-14): linhaça e gergelim',
      '- Fase lútea (dias 15-28): abóbora e girassol',
      'Adicione maçã, canela e baunilha',
      'Misture bem, tampe e deixe na geladeira durante a noite',
      'Pela manhã, ajuste consistência com mais leite se necessário',
      'Adicione toppings frescos opcionais (frutas, coco)'
    ],
    
    scientificBacking: 'A ciclagem de sementes baseia-se no fornecimento direcionado de nutrientes que suportam diferentes fases hormonais. Estudos preliminares mostram que esta prática pode melhorar sintomas de TPM em 61% das mulheres e regular ciclos em 33% dos casos.',
    
    timing: 'Consumir no café da manhã diariamente, ajustando as sementes conforme fase do ciclo',
    
    personalizedTips: {
      estrogen_dominance: 'Adicione 1 col chá de brócolis em pó (DIM) para metabolismo estrogênico',
      low_progesterone: 'Aumente sementes de abóbora para 2 col sopa na fase lútea',
      pcos: 'Adicione 1/2 col chá de canela extra e evite adoçantes de qualquer tipo'
    },
    
    imageUrl: '/images/nutrition/seed_cycling_oats.jpg'
  },
  {
    id: 'thyroid_support_soup',
    title: 'Sopa de Suporte Tireoidiano',
    category: 'hormonal_balance',
    targetProfile: ['thyroid_health', 'metabolism_sluggish', 'cold_intolerance'],
    difficulty: 'medium',
    prepTime: '30 min',
    emotionalMessage: 'Um caldo nutritivo para despertar sua mestre metabólica',
    
    ingredients: [
      { item: '2 col sopa de azeite de oliva', benefit: 'Ácidos graxos essenciais para produção hormonal' },
      { item: '1 cebola média picada', benefit: 'Compostos sulfúricos para desintoxicação hepática' },
      { item: '2 dentes de alho esmagados', benefit: 'Selênio para conversão de T4 em T3 ativo' },
      { item: '1 xícara de cogumelos shiitake fatiados', benefit: 'Adaptógenos que regulam eixo HPA' },
      { item: '2 cenouras médias em cubos', benefit: 'Beta-caroteno para receptores celulares de hormônio' },
      { item: '1 batata doce média em cubos', benefit: 'Carboidratos complexos para glândulas adrenais' },
      { item: '2 xícaras de couve picada', benefit: 'Fonte de iodo natural para tireoide' },
      { item: '1 folha de alga kombu (5cm²)', benefit: 'Iodo biodisponível essencial para hormônios tireoidianos' },
      { item: '1 col chá de cúrcuma', benefit: 'Anti-inflamatório para tireoidite autoimune' },
      { item: '1 col chá de semente de coentro moída', benefit: 'Suporte à desintoxicação de metais pesados' },
      { item: '6 xícaras de caldo vegetal caseiro', benefit: 'Aminoácidos e minerais biodisponíveis' },
      { item: '1 col sopa de miso (para finalizar)', benefit: 'Probióticos para eixo intestino-tireoide' }
    ],
    
    preparation: [
      'Em panela grande, aqueça azeite e refogue cebola até ficar translúcida',
      'Adicione alho e cogumelos, refogue por 3 minutos',
      'Acrescente cenoura e batata doce, refogue por mais 2 minutos',
      'Adicione especiarias e mexa para liberar aromas',
      'Acrescente caldo vegetal e alga kombu',
      'Cozinhe em fogo médio-baixo por 20 minutos até legumes macios',
      'Adicione couve nos últimos 5 minutos',
      'Retire do fogo, remova kombu',
      'Em uma tigela pequena, dissolva miso em um pouco do caldo quente',
      'Adicione miso dissolvido à sopa sem ferver novamente (preserva probióticos)'
    ],
    
    scientificBacking: 'A função tireoidiana adequada requer iodo biodisponível, selênio, zinco e antioxidantes para proteção contra estresse oxidativo. Este conjunto de nutrientes suporta a conversão periférica de T4 em T3, essencial para metabolismo celular ideal.',
    
    timing: 'Ideal para almoço ou jantar, 2-3 vezes por semana para suporte tireoidiano',
    
    personalizedTips: {
      hashimotos: 'Omita kombu e use sal marinho com iodo em pequena quantidade',
      hypothyroid: 'Adicione 1 col chá de gengibre para estimular circulação e metabolismo',
      heavy_metal_burden: 'Adicione 1/4 xícara de coentro fresco no final para quelação'
    },
    
    imageUrl: '/images/nutrition/thyroid_soup.jpg'
  },
  {
    id: 'adrenal_reset_elixir',
    title: 'Elixir de Restauração Adrenal',
    category: 'hormonal_balance',
    targetProfile: ['adrenal_fatigue', 'cortisol_imbalance', 'stress_recovery'],
    difficulty: 'easy',
    prepTime: '5 min',
    emotionalMessage: 'Um abraço em forma líquida para suas adrenais exaustas',
    
    ingredients: [
      { item: '1 xícara de leite de coco (lata)', benefit: 'Gorduras saudáveis cruciais para produção hormonal' },
      { item: '1 col chá de ashwagandha em pó', benefit: 'Adaptógeno que regula cortisol e equilibra eixo HPA' },
      { item: '1/2 col chá de canela', benefit: 'Estabiliza glicemia que impacta adrenais' },
      { item: '1/4 col chá de cardamomo', benefit: 'Calmante para sistema nervoso simpático' },
      { item: '1/2 col chá de baunilha pura', benefit: 'Reduz ansiedade e acalma sistema nervoso' },
      { item: '1 col chá de óleo de coco virgem', benefit: 'TCMs para energia celular sem sobrecarregar adrenais' },
      { item: '1 pitada de sal marinho não refinado', benefit: 'Minerais para equilíbrio eletrolítico adrenal' },
      { item: '1 col chá de mel cru (opcional)', benefit: 'Glicogênio para reserva hepática noturna' },
      { item: '1 xícara de água quente (não fervente)', benefit: 'Hidratação para função hormonal ótima' }
    ],
    
    preparation: [
      'Aqueça o leite de coco e água até ficar bem quente (não ferver)',
      'Coloque todos os ingredientes secos em liquidificador ou mixer',
      'Adicione o líquido quente e o óleo de coco',
      'Pulse até ficar homogêneo e espumoso',
      'Finalize com mel se desejar (opcional)',
      'Sirva imediatamente ou transfira para garrafa térmica'
    ],
    
    scientificBacking: 'A ashwagandha demonstrou em estudos clínicos reduzir níveis de cortisol em 28% após 60 dias de uso contínuo. Adrenais equilibradas melhoram função tireoidiana, metabolismo e níveis energéticos.',
    
    timing: 'Ideal para consumo à tarde (15-17h) quando cortisol naturalmente cai, ou 1 hora antes de dormir',
    
    personalizedTips: {
      insomnia: 'Adicione 1/4 col chá de noz-moscada para efeito calmante adicional',
      severe_exhaustion: 'Adicione 1/2 col chá de pó de reishi para suporte imunológico',
      morning_fatigue: 'Use metade da dose de ashwagandha se consumido pela manhã'
    },
    
    imageUrl: '/images/nutrition/adrenal_elixir.jpg'
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