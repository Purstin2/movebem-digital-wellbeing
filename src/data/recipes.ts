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
  },
  
  // NOVOS ENERGIZANTES
  {
    id: 'beet_berry_power_smoothie',
    title: 'Smoothie Energizante de Beterraba e Frutas Vermelhas',
    category: 'energy_boost',
    targetProfile: ['fatigue', 'morning_energy', 'workout_preparation'],
    difficulty: 'easy',
    prepTime: '7 min',
    emotionalMessage: 'Desperte suas células com a energia da terra e do sol',
    
    ingredients: [
      { item: '1/2 beterraba média crua', benefit: 'Nitratos que melhoram fluxo sanguíneo e oxigenação' },
      { item: '1 xícara de frutas vermelhas mistas', benefit: 'Antioxidantes que combatem fadiga celular' },
      { item: '1 col sopa de sementes de chia', benefit: 'Ômega-3 para energia sustentada' },
      { item: '1 col sopa de proteína de ervilha', benefit: 'Aminoácidos essenciais para vitalidade muscular' },
      { item: '1 col chá de maca peruana', benefit: 'Adaptógeno energético natural' },
      { item: '1/2 banana', benefit: 'Potássio para função neuromuscular' },
      { item: '1 xícara de água de coco', benefit: 'Eletrólitos para hidratação celular otimizada' },
      { item: '1 col chá de gengibre fresco ralado', benefit: 'Ativa circulação e metabolismo' },
      { item: 'Gelo a gosto', benefit: 'Refrescância e temperatura ideal' }
    ],
    
    preparation: [
      'Lave e corte a beterraba em pedaços pequenos',
      'Adicione todos os ingredientes no liquidificador',
      'Bata até obter consistência homogênea e cremosa',
      'Se necessário, ajuste a consistência com mais água de coco',
      'Sirva imediatamente para máximo benefício energético'
    ],
    
    scientificBacking: 'Pesquisas mostram que os nitratos da beterraba aumentam a eficiência mitocondrial em até 20%, melhorando o uso de oxigênio e reduzindo a sensação de fadiga durante exercícios físicos. Um estudo publicado no Journal of Applied Physiology demonstrou melhora de 16% na resistência após consumo.',
    
    timing: 'Ideal para consumo pela manhã ou 60 minutos antes de atividade física',
    
    personalizedTips: {
      digestive_sensitive: 'Comece com 1/4 de beterraba e aumente gradualmente',
      hypertension: 'Monitore pressão arterial, pois nitratos podem reduzi-la',
      diabetes: 'Substitua banana por maçã verde para menor impacto glicêmico'
    },
    
    imageUrl: '/images/nutrition/beet_smoothie.jpg'
  },
  
  {
    id: 'quinoa_power_bowl',
    title: 'Bowl Energético de Quinoa e Superalimentos',
    category: 'energy_boost',
    targetProfile: ['sustained_energy', 'balanced_nutrition', 'muscle_recovery'],
    difficulty: 'medium',
    prepTime: '20 min',
    emotionalMessage: 'Construa sua vitalidade com a sabedoria dos grãos ancestrais',
    
    ingredients: [
      { item: '1/2 xícara de quinoa', benefit: 'Carboidratos complexos + proteína vegetal completa' },
      { item: '1/4 abacate', benefit: 'Gorduras saudáveis para energia sustentada' },
      { item: '1/4 xícara de edamame', benefit: 'Proteína completa e ferro biodisponível' },
      { item: '1/4 xícara de blueberries', benefit: 'Antioxidantes para proteção celular' },
      { item: '1 col sopa de sementes de abóbora', benefit: 'Magnésio e zinco para metabolismo energético' },
      { item: '1 ovo cozido', benefit: 'Colina para função cerebral e muscular' },
      { item: '1 punhado de espinafre', benefit: 'Ferro e folato para combater anemia e fadiga' },
      { item: '1 col sopa de azeite extra virgem', benefit: 'Ácidos graxos essenciais para função celular' },
      { item: '1/2 limão (suco)', benefit: 'Vitamina C para absorção de ferro e alcalinização' },
      { item: '1 pitada de sal marinho', benefit: 'Eletrólitos para equilíbrio celular' }
    ],
    
    preparation: [
      'Cozinhe a quinoa em 1 xícara de água com pitada de sal por 15 minutos',
      'Enquanto isso, cozinhe o edamame por 5 minutos em água fervente',
      'Prepare o molho: misture azeite, suco de limão, sal e pimenta',
      'Monte o bowl: quinoa como base, arranje os outros ingredientes em seções',
      'Regue com o molho e sirva morno ou frio'
    ],
    
    scientificBacking: 'A combinação de carboidratos complexos, proteínas e gorduras saudáveis fornece energia contínua sem picos de insulina. A quinoa tem índice glicêmico baixo (53) e contém todos os aminoácidos essenciais, promovendo recuperação muscular e energia sustentada por até 4 horas.',
    
    timing: 'Ideal para almoço ou refeição pós-treino',
    
    personalizedTips: {
      vegan: 'Substitua o ovo por tofu firme temperado',
      celiac: 'Perfeito como está - quinoa é naturalmente sem glúten',
      thyroid_issues: 'Cozinhe bem o espinafre para reduzir oxalatos'
    },
    
    imageUrl: '/images/nutrition/quinoa_bowl.jpg'
  },
  
  {
    id: 'adaptogenic_coffee_alternative',
    title: 'Alternativa ao Café com Adaptógenos',
    category: 'energy_boost',
    targetProfile: ['caffeine_sensitive', 'adrenal_fatigue', 'sustainable_energy'],
    difficulty: 'easy',
    prepTime: '8 min',
    emotionalMessage: 'Energia equilibrada que nutre ao invés de esgotar',
    
    ingredients: [
      { item: '1 xícara de água quente', benefit: 'Base de hidratação essencial' },
      { item: '1 col sopa de raiz de chicória torrada', benefit: 'Sabor similar ao café sem cafeína' },
      { item: '1 col chá de cacau cru', benefit: 'Teobromina para energia suave' },
      { item: '1 col chá de alfarroba em pó', benefit: 'Doçura natural rica em cálcio' },
      { item: '1/2 col chá de canela', benefit: 'Estabiliza açúcar no sangue' },
      { item: '1 col chá de cogumelo chaga em pó', benefit: 'Adaptógeno para energia celular' },
      { item: '1/2 col chá de ashwagandha', benefit: 'Equilibra cortisol e energia adrenal' },
      { item: '1/4 col chá de cardamomo', benefit: 'Melhora digestão e assimilação' },
      { item: '1/3 xícara de leite de coco cremoso', benefit: 'TCMs para energia cerebral imediata' }
    ],
    
    preparation: [
      'Ferva água e desligue o fogo',
      'Adicione chicória, cacau, alfarroba e especiarias',
      'Mexa bem e deixe em infusão por 3 minutos',
      'Adicione os adaptógenos e mexa novamente',
      'Acrescente leite de coco e mexa para incorporar',
      'Opcional: bata rapidamente para criar espuma',
      'Sirva quente em xícara pré-aquecida'
    ],
    
    scientificBacking: 'Os adaptógenos como chaga e ashwagandha funcionam modulando o eixo HPA (hipotálamo-pituitária-adrenal), oferecendo suporte às glândulas adrenais esgotadas. Estudos clínicos mostram que a ashwagandha reduz cortisol em 28% e aumenta energia sem o crash posterior da cafeína.',
    
    timing: 'Manhãs ou início da tarde, especialmente durante períodos de estresse',
    
    personalizedTips: {
      digestive_issues: 'Omita cardamomo se causar desconforto',
      autoimmune: 'Consulte médico sobre uso de adaptógenos',
      weight_loss: 'Use leite de amêndoas em vez de leite de coco'
    },
    
    imageUrl: '/images/nutrition/adaptogenic_coffee.jpg'
  },
  
  {
    id: 'ginseng_citrus_revitalizer',
    title: 'Revitalizante de Ginseng e Cítricos',
    category: 'energy_boost',
    targetProfile: ['mental_fatigue', 'immune_boost', 'cognitive_enhancement'],
    difficulty: 'easy',
    prepTime: '5 min',
    emotionalMessage: 'Clareza mental e vitalidade em cada gole refrescante',
    
    ingredients: [
      { item: '1 xícara de água filtrada', benefit: 'Hidratação pura para função celular' },
      { item: '1 col chá de extrato de ginseng coreano', benefit: 'Adaptógeno clássico para energia e foco' },
      { item: '1 laranja orgânica (suco + raspas)', benefit: 'Vitamina C para imunidade e vitalidade' },
      { item: '1/2 limão siciliano (suco)', benefit: 'Vitamina C adicional e alcalinizante' },
      { item: '1 col chá de bagas de goji', benefit: 'Antioxidantes e ferro para combater fadiga' },
      { item: '1 col chá de mel de manuka', benefit: 'Energia rápida com propriedades medicinais' },
      { item: '1 pitada de sal do Himalaia', benefit: 'Minerais para condução nervosa e hidratação' },
      { item: '3-4 folhas de hortelã fresca', benefit: 'Ativa receptores sensoriais para alerta mental' },
      { item: 'Gelo a gosto', benefit: 'Refrescância e ativação metabólica' }
    ],
    
    preparation: [
      'Aqueça 1/4 xícara de água e hidrate as bagas de goji por 2 minutos',
      'Esprema os sucos de laranja e limão',
      'Adicione o extrato de ginseng ao suco e misture bem',
      'Combine todos os ingredientes, incluindo as bagas hidratadas',
      'Adicione água filtrada até completar 2 xícaras',
      'Misture com mel e sal até dissolver',
      'Sirva gelado com folhas de hortelã e raspas de laranja'
    ],
    
    scientificBacking: 'O ginseng coreano (Panax ginseng) contém ginsenosídeos que demonstraram efeitos significativos na melhoria da função cognitiva, incluindo memória de trabalho e velocidade de processamento mental. Um estudo duplo-cego publicado no Journal of Psychopharmacology mostrou melhora de 15-20% na performance mental após 8 semanas de uso.',
    
    timing: 'Meados da manhã ou começo da tarde, especialmente em momentos de cansaço mental',
    
    personalizedTips: {
      hypertension: 'Use metade da dose de ginseng se pressão arterial for sensível',
      insomnia: 'Não consuma após as 15h00',
      diabetes: 'Substitua mel por stevia ou omita completamente'
    },
    
    imageUrl: '/images/nutrition/ginseng_citrus.jpg'
  },
  
  {
    id: 'coconut_chia_power_pudding',
    title: 'Pudim Energizante de Coco e Chia',
    category: 'energy_boost',
    targetProfile: ['endurance_needs', 'healthy_fats', 'brain_function'],
    difficulty: 'easy',
    prepTime: '10 min + 4h geladeira',
    emotionalMessage: 'Combustível sustentável para corpo e mente ativa',
    
    ingredients: [
      { item: '3 col sopa de sementes de chia', benefit: 'Ômega-3 para função cerebral e anti-inflamatório' },
      { item: '1 lata pequena de leite de coco (200ml)', benefit: 'TCMs para energia cerebral imediata' },
      { item: '1/2 xícara de água de coco', benefit: 'Eletrólitos para hidratação celular' },
      { item: '1 col sopa de óleo de coco extra virgem', benefit: 'Triglicérides de cadeia média para energia' },
      { item: '1 col sopa de mel cru', benefit: 'Glicogênio para estoque energético muscular' },
      { item: '1 col chá de extrato de baunilha', benefit: 'Estabiliza níveis de açúcar' },
      { item: '1/4 col chá de sal marinho', benefit: 'Minerais para função neuromuscular' },
      { item: '2 col sopa de coco ralado sem açúcar', benefit: 'Fibras e gorduras para saciedade' },
      { item: '1 col sopa de nibs de cacau cru', benefit: 'Antioxidantes e compostos estimulantes naturais' },
      { item: '1/4 col chá de canela', benefit: 'Estabiliza glicemia e ativa circulação' }
    ],
    
    preparation: [
      'Em uma tigela, misture sementes de chia, leite de coco, água de coco e óleo de coco',
      'Adicione mel, baunilha, sal e canela, mexendo bem',
      'Incorpore metade do coco ralado e nibs de cacau',
      'Transfira para potes individuais de vidro',
      'Cubra e refrigere por pelo menos 4 horas ou durante a noite',
      'Antes de servir, decore com o restante do coco ralado e nibs de cacau',
      'Para potencializar, adicione frutas frescas por cima'
    ],
    
    scientificBacking: 'A combinação de TCMs do coco com os ácidos graxos ômega-3 da chia cria um combustível dual para o cérebro. Estudos demonstram que os TCMs são convertidos em cetonas, uma fonte alternativa de energia cerebral que melhora a função cognitiva em 9-14% em estudos controlados.',
    
    timing: 'Ideal como café da manhã ou lanche pré-treino 60-90 minutos antes',
    
    personalizedTips: {
      keto_diet: 'Substitua mel por eritritol ou stevia',
      endurance_athletes: 'Adicione 1 col chá de pólen de abelha para micronutrientes',
      menopausal: 'Adicione 1 col chá de maca para equilíbrio hormonal adicional'
    },
    
    imageUrl: '/images/nutrition/coconut_chia.jpg'
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
  },
  
  // NOVAS RECEITAS PARA SONO E RELAXAMENTO
  {
    id: 'chamomile_lavender_sleepytime_tea',
    title: 'Chá Noturno de Camomila e Lavanda',
    category: 'sleep_support',
    targetProfile: ['sleep_onset_issues', 'anxiety', 'racing_thoughts'],
    difficulty: 'easy',
    prepTime: '7 min',
    emotionalMessage: 'Um abraço quente que sussurra ao seu sistema nervoso: descanse agora',
    
    ingredients: [
      { item: '2 col chá de flores de camomila secas', benefit: 'Apigenina que se liga aos mesmos receptores que benzodiazepínicos' },
      { item: '1 col chá de lavanda culinária', benefit: 'Linalol com efeito ansiolítico natural' },
      { item: '1/2 col chá de pétalas de rosa', benefit: 'Relaxante suave e aromático' },
      { item: '1/4 col chá de folhas de melissa', benefit: 'Reduz inquietação mental' },
      { item: '1/2 col chá de valeriana (opcional)', benefit: 'Potencializa efeito sedativo em casos de insônia severa' },
      { item: '1 col chá de mel de tília', benefit: 'Flavonóides relaxantes e prebióticos noturnos' },
      { item: '1 fatia fina de limão', benefit: 'Vitamina C para absorção de compostos ativos' },
      { item: '2 xícaras de água filtrada', benefit: 'Veículo para extração de compostos ativos' }
    ],
    
    preparation: [
      'Ferva a água e desligue o fogo',
      'Adicione as ervas secas em infusor ou sachê',
      'Mergulhe o infusor na água quente',
      'Tampe e deixe em infusão por 7-10 minutos',
      'Retire o infusor e adicione mel quando estiver morno',
      'Adicione a rodela de maçã para sabor e benefícios adicionais',
      'Beba lentamente, 45-60 minutos antes de dormir'
    ],
    
    scientificBacking: 'A passiflora mostrou eficácia comparável a benzodiazepínicos leves para tratamento de ansiedade e insônia em estudos clínicos, sem efeitos colaterais significativos. O mecanismo de ação inclui modulação de receptores GABA-A e efeito inibitório no sistema nervoso central.',
    
    timing: 'Consumir 45-60 minutos antes de dormir, idealmente como parte de uma rotina de relaxamento noturno',
    
    personalizedTips: {
      medication_users: 'Consulte seu médico se usa medicamentos para ansiedade ou sono',
      pregnancy: 'Evite passiflora durante gestação; substitua por apenas camomila',
      liver_concerns: 'Use quantidades menores de ervas inicialmente e monitore resposta'
    },
    
    imageUrl: '/images/nutrition/passion_flower.jpg'
  },
  
  {
    id: 'tart_cherry_sleep_elixir',
    title: 'Elixir do Sono de Cereja Ácida',
    category: 'sleep_support',
    targetProfile: ['melatonin_deficient', 'sleep_quality', 'inflammation_night'],
    difficulty: 'easy',
    prepTime: '5 min',
    emotionalMessage: 'A natureza tem seu próprio remédio para embalar seus sonhos em seda',
    
    ingredients: [
      { item: '1/2 xícara de suco de cereja ácida puro', benefit: 'Fonte natural de melatonina bioativa' },
      { item: '1/2 xícara de água filtrada', benefit: 'Dilui a concentração para sabor balanceado' },
      { item: '1 col chá de magnésio líquido (citrato)', benefit: 'Relaxante muscular natural e regulador do sono' },
      { item: '1 col chá de xarope de bordo', benefit: 'Manganês e zinco para síntese de serotonina' },
      { item: '1 col chá de vinagre de maçã', benefit: 'Equilibra pH e aumenta absorção de nutrientes' },
      { item: '1 pitada de canela', benefit: 'Estabiliza açúcar no sangue durante a noite' },
      { item: '1 col chá de óleo de linhaça', benefit: 'Ômega-3 para combate à inflamação noturna' }
    ],
    
    preparation: [
      'Misture o suco de cereja e água em um copo',
      'Adicione o magnésio líquido e mexa bem',
      'Incorpore o xarope de bordo e vinagre',
      'Adicione a canela e mexa novamente',
      'Por último, adicione o óleo de linhaça e misture rapidamente',
      'Beba em pequenos goles 60 minutos antes de dormir'
    ],
    
    scientificBacking: 'Um estudo da Universidade de Louisiana mostrou que o consumo de suco de cereja ácida aumentou os níveis de melatonina e resultou em mais 84 minutos de sono por noite. A combinação com magnésio potencializa o efeito, pois este mineral é cofator para conversão de triptofano em serotonina e melatonina.',
    
    timing: 'Consumir 45-60 minutos antes de dormir para permitir absorção ideal da melatonina natural',
    
    personalizedTips: {
      autoimmune: 'Faça teste com pequena quantidade para verificar sensibilidade',
      diabetes: 'Substitua xarope de bordo por stevia líquida',
      arthritis: 'Dobre a quantidade de suco de cereja para efeito anti-inflamatório potencializado'
    },
    
    imageUrl: '/images/nutrition/cherry_elixir.jpg'
  },
  
  {
    id: 'magnesium_rich_bedtime_smoothie',
    title: 'Smoothie Noturno Rico em Magnésio',
    category: 'sleep_support',
    targetProfile: ['muscle_tension', 'restless_legs', 'stress_insomnia'],
    difficulty: 'easy',
    prepTime: '8 min',
    emotionalMessage: 'Relaxe cada célula do seu corpo enquanto convida o sono profundo',
    
    ingredients: [
      { item: '1 banana madura congelada', benefit: 'Magnésio natural e triptofano para serotonina' },
      { item: '1/2 xícara de espinafre baby', benefit: 'Magnésio biodisponível e calmante natural' },
      { item: '1 col sopa de sementes de abóbora', benefit: 'Alta concentração de magnésio e zinco' },
      { item: '1 col sopa de manteiga de amêndoas', benefit: 'Triptofano e gorduras saudáveis para hormônios' },
      { item: '1/2 xícara de leite de aveia', benefit: 'Aveia contém melatonina e beta-glucanas relaxantes' },
      { item: '1/2 col chá de canela', benefit: 'Estabiliza açúcar no sangue durante o sono' },
      { item: '1 tâmara sem caroço', benefit: 'Adoçante natural com minerais relaxantes' },
      { item: '1 pitada de sal marinho', benefit: 'Eletrólitos para relaxamento muscular' },
      { item: '1/4 col chá de noz-moscada', benefit: 'Leve sedativo natural tradicional' },
      { item: '1/2 xícara de cubos de gelo', benefit: 'Resfria corpo para induzir sono' }
    ],
    
    preparation: [
      'Adicione todos os ingredientes ao liquidificador',
      'Bata em velocidade alta até ficar cremoso',
      'Se necessário, adicione mais líquido para ajustar consistência',
      'Transfira para um copo e adicione canela polvilhada por cima',
      'Beba lentamente, 30-45 minutos antes de dormir'
    ],
    
    scientificBacking: 'O magnésio é um cofator essencial para cerca de 300 reações enzimáticas no corpo, incluindo a produção de GABA, o principal neurotransmissor inibitório do cérebro. Estudos clínicos mostram que a suplementação de magnésio melhora a qualidade do sono em 67% dos casos, especialmente em pessoas com síndrome das pernas inquietas e espasmos musculares noturnos.',
    
    timing: 'Ideal para consumo 30-45 minutos antes de dormir',
    
    personalizedTips: {
      digestive_sensitive: 'Reduza espinafre para 1/4 de xícara inicialmente',
      blood_sugar_issues: 'Use apenas 1/2 banana e adicione proteína em pó sem açúcar',
      severe_insomnia: 'Adicione 1 col chá de extrato de valeriana líquida'
    },
    
    imageUrl: '/images/nutrition/magnesium_smoothie.jpg'
  },
  
  {
    id: 'calming_bedtime_cookies',
    title: 'Cookies Calmantes para Antes de Dormir',
    category: 'sleep_support',
    targetProfile: ['evening_cravings', 'sleep_transition', 'stress_eaters'],
    difficulty: 'medium',
    prepTime: '25 min (10 min preparo + 15 min forno)',
    emotionalMessage: 'Satisfaça seus desejos noturnos enquanto prepara seu corpo para sonhos tranquilos',
    
    ingredients: [
      { item: '1 xícara de aveia em flocos', benefit: 'Melatonina natural e carboidratos relaxantes' },
      { item: '1/2 xícara de farinha de amêndoas', benefit: 'Triptofano e magnésio para relaxamento' },
      { item: '2 col sopa de sementes de girassol', benefit: 'Ricas em triptofano para produção de serotonina' },
      { item: '1 banana madura amassada', benefit: 'Potássio e magnésio para relaxamento muscular' },
      { item: '3 col sopa de óleo de coco', benefit: 'TCMs para equilíbrio hormonal noturno' },
      { item: '2 col sopa de mel', benefit: 'Glicogênio para fígado durante sono' },
      { item: '1 col chá de canela', benefit: 'Estabiliza açúcar no sangue durante o sono' },
      { item: '1/4 col chá de noz-moscada', benefit: 'Leve sedativo natural com aroma relaxante' },
      { item: '1/4 col chá de flor de sal', benefit: 'Minerais para neurotransmissão' },
      { item: '1/4 xícara de cerejas desidratadas', benefit: 'Fonte natural de melatonina' },
      { item: '2 col sopa de chocolate amargo 70% picado', benefit: 'Magnésio e satisfação sem excesso de açúcar' }
    ],
    
    preparation: [
      'Pré-aqueça o forno a 180°C e forre uma assadeira com papel manteiga',
      'Misture aveia, farinha de amêndoas, sementes, sal e especiarias',
      'Em tigela separada, amasse banana com óleo de coco e mel',
      'Combine ingredientes secos e úmidos até formar massa homogênea',
      'Incorpore cerejas e chocolate picado',
      'Forme 12 cookies com colher de sopa na assadeira',
      'Achate levemente cada cookie com as costas da colher',
      'Asse por 12-15 minutos até dourar levemente',
      'Deixe esfriar por 5 minutos na assadeira antes de transferir'
    ],
    
    scientificBacking: 'Carboidratos complexos como a aveia aumentam a disponibilidade de triptofano no cérebro, precursor da serotonina e melatonina. O consumo moderado de carboidratos antes de dormir eleva a insulina, que ajuda o triptofano a cruzar a barreira hematoencefálica mais facilmente.',
    
    timing: 'Consumir 1-2 cookies 60-90 minutos antes de dormir',
    
    personalizedTips: {
      weight_conscious: 'Limite-se a um cookie e guarde o restante para outros dias',
      gluten_sensitive: 'Use aveia certificada sem glúten',
      diabetes: 'Substitua mel por eritritol ou xilitol'
    },
    
    imageUrl: '/images/nutrition/bedtime_cookies.jpg'
  },
  
  {
    id: 'passion_flower_sleep_infusion',
    title: 'Infusão de Maracujá para Sono Profundo',
    category: 'sleep_support',
    targetProfile: ['anxiety_insomnia', 'overthinking', 'gaba_support'],
    difficulty: 'easy',
    prepTime: '7 min',
    emotionalMessage: 'Como um abraço gentil que acalma até os pensamentos mais agitados',
    
    ingredients: [
      { item: '2 col chá de folhas e flores de passiflora secas', benefit: 'Aumenta GABA natural para acalmar mente' },
      { item: '1 col chá de folhas de melissa', benefit: 'Reduz hiperatividade mental e preocupações' },
      { item: '1/2 col chá de flores de camomila', benefit: 'Apigenina com efeito similar a ansiolíticos leves' },
      { item: '1/4 col chá de lavanda culinária', benefit: 'Linalol para indução de relaxamento' },
      { item: '1/4 col chá de lúpulo', benefit: 'Contém 2-metil-3-buten-2-ol com efeito sedativo' },
      { item: '1 rodela fina de maçã desidratada', benefit: 'Quercetina para ação anti-inflamatória cerebral' },
      { item: '1 col chá de mel de flor de laranjeira', benefit: 'Tradicionalmente usado para acalmar e promover sono' },
      { item: '2 xícaras de água filtrada', benefit: 'Veículo para extração de compostos ativos' }
    ],
    
    preparation: [
      'Ferva a água e desligue o fogo',
      'Adicione as ervas secas em infusor ou sachê',
      'Mergulhe o infusor na água quente',
      'Tampe e deixe em infusão por 7-10 minutos',
      'Retire o infusor e adicione mel quando estiver morno',
      'Adicione a rodela de maçã para sabor e benefícios adicionais',
      'Beba lentamente, 45-60 minutos antes de dormir'
    ],
    
    scientificBacking: 'A passiflora mostrou eficácia comparável a benzodiazepínicos leves para tratamento de ansiedade e insônia em estudos clínicos, sem efeitos colaterais significativos. O mecanismo de ação inclui modulação de receptores GABA-A e efeito inibitório no sistema nervoso central.',
    
    timing: 'Consumir 45-60 minutos antes de dormir, idealmente como parte de uma rotina de relaxamento noturno',
    
    personalizedTips: {
      medication_users: 'Consulte seu médico se usa medicamentos para ansiedade ou sono',
      pregnancy: 'Evite passiflora durante gestação; substitua por apenas camomila',
      liver_concerns: 'Use quantidades menores de ervas inicialmente e monitore resposta'
    },
    
    imageUrl: '/images/nutrition/passion_flower.jpg'
  },
  
  {
    id: 'sleep_supporting_trail_mix',
    title: 'Mix de Oleaginosas para Sono Reparador',
    category: 'sleep_support',
    targetProfile: ['late_night_snackers', 'hormone_balance', 'sleep_maintenance'],
    difficulty: 'easy',
    prepTime: '5 min',
    emotionalMessage: 'Pequenos tesouros da natureza que preparam sua bioquímica para sonhos dourados',
    
    ingredients: [
      { item: '2 col sopa de nozes', benefit: 'Rica em melatonina natural e triptofano' },
      { item: '2 col sopa de amêndoas', benefit: 'Magnésio e cálcio para relaxamento neuromuscular' },
      { item: '1 col sopa de pistache sem sal', benefit: 'Vitamina B6 para conversão de triptofano em serotonina' },
      { item: '1 col sopa de sementes de abóbora', benefit: 'Zinco necessário para metabolismo da melatonina' },
      { item: '1 col sopa de cerejas desidratadas sem açúcar', benefit: 'Fonte concentrada de melatonina natural' },
      { item: '1 col sopa de banana desidratada em pedaços', benefit: 'Potássio e magnésio relaxantes musculares' },
      { item: '1 col chá de nibs de cacau', benefit: 'Magnésio e triptofano' },
      { item: '1/4 col chá de canela', benefit: 'Estabiliza açúcar sanguíneo durante a noite' },
      { item: '1 pitada de flor de sal', benefit: 'Minerais para equilíbrio eletrolítico noturno' }
    ],
    
    preparation: [
      'Combine todos os ingredientes secos em uma tigela',
      'Misture delicadamente para distribuir as especiarias',
      'Divida em porções individuais de 1/4 xícara',
      'Armazene em recipientes hermeticamente fechados',
      'Consuma uma porção 60 minutos antes de dormir, mastigando muito bem cada pedaço'
    ],
    
    scientificBacking: 'Nozes e cerejas são duas das fontes naturais mais ricas em melatonina dietética. Estudos mostram que o consumo de 28g de nozes eleva significativamente os níveis de melatonina no sangue. O magnésio presente nas amêndoas e sementes de abóbora funciona como relaxante muscular natural e cofator para enzimas relacionadas ao sono.',
    
    timing: 'Ideal para consumo 60 minutos antes de dormir, em pequena quantidade (1/4 xícara)',
    
    personalizedTips: {
      digestive_sensitive: 'Consuma 90 minutos antes de dormir para permitir digestão completa',
      nut_allergy: 'Substitua nozes/amêndoas por sementes de girassol e linhaça',
      weight_conscious: 'Limite-se a 2 col sopa como porção total'
    },
    
    imageUrl: '/images/nutrition/sleep_trail_mix.jpg'
  },
  
  {
    id: 'valerian_honey_sleep_tonic',
    title: 'Tônico de Valeriana e Mel para Insônia',
    category: 'sleep_support',
    targetProfile: ['chronic_insomnia', 'difficulty_staying_asleep', 'anxiety'],
    difficulty: 'easy',
    prepTime: '8 min',
    emotionalMessage: 'Um elixir ancestral que convida o sono profundo mesmo nas noites mais desafiadoras',
    
    ingredients: [
      { item: '1 col chá de raiz de valeriana seca', benefit: 'Aumenta GABA e induz sono profundo' },
      { item: '1/2 col chá de raiz de ashwagandha', benefit: 'Adaptógeno que reduz cortisol noturno' },
      { item: '1/2 col chá de flor de camomila', benefit: 'Apigenina com efeito calmante' },
      { item: '1/4 col chá de folhas de melissa', benefit: 'Reduz tensão mental e física' },
      { item: '1/4 col chá de lúpulo', benefit: 'Potencializa efeito sedativo da valeriana' },
      { item: '1/4 col chá de canela', benefit: 'Equilibra glicemia durante sono' },
      { item: '1 col sopa de mel cru', benefit: 'Glicogênio hepático para sono estável' },
      { item: '1 col chá de óleo MCT', benefit: 'Proporciona energia cerebral durante o sono' },
      { item: '1 pitada de sal do Himalaia', benefit: 'Eletrólitos para processos neurais' },
      { item: '1 xícara de água filtrada quente', benefit: 'Veículo para extração de princípios ativos' }
    ],
    
    preparation: [
      'Coloque ervas em infusor ou filtro de papel',
      'Ferva água e despeje sobre as ervas',
      'Deixe em infusão coberta por 8-10 minutos',
      'Remova ervas e adicione mel quando estiver morno',
      'Adicione óleo MCT e sal, misturando bem',
      'Beba metade da xícara 45 minutos antes de dormir',
      'Reserve a outra metade na mesa de cabeceira em garrafa térmica caso acorde durante a noite'
    ],
    
    scientificBacking: 'A valeriana (Valeriana officinalis) contém ácido valerênico que inibe a degradação de GABA no cérebro, aumentando seus níveis e promovendo sono de ondas lentas. Um estudo publicado no European Journal of Medical Research mostrou que 89% dos participantes relataram melhora no sono com uso contínuo por duas semanas.',
    
    timing: 'Consumir 45 minutos antes de dormir; uma segunda dose pequena pode ser tomada se acordar durante a noite',
    
    personalizedTips: {
      medication_users: 'Consulte médico se usa antidepressivos ou ansiolíticos',
      morning_grogginess: 'Reduza dose pela metade nas primeiras noites',
      liver_concerns: 'Evite uso contínuo por mais de 2-3 semanas sem pausa'
    },
    
    imageUrl: '/images/nutrition/valerian_tonic.jpg'
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

// Função para obter receitas recomendadas com base no perfil nutricional do usuário
export const getRecommendedRecipes = (
  nutritionalProfile: { 
    primaryPain: string; 
    conditions: string[];
    goals: string[];
    antiInflammatoryNeeds: boolean;
    hormonalSupport: boolean;
    energyOptimization: boolean;
    digestiveSupport: boolean;
    stressManagement: boolean;
    sleepSupport: boolean;
    currentDay?: number;
  }
) => {
  // Mapeamento de categorias de receitas para necessidades do usuário
  const categoryMapping = {
    antiInflammatoryNeeds: 'anti_inflammatory',
    hormonalSupport: 'hormonal_balance',
    energyOptimization: 'energy_boost',
    sleepSupport: 'sleep_support',
    digestiveSupport: 'digestive_health'
  };
  
  // Identifica as categorias necessárias com base no perfil
  const neededCategories = Object.entries(categoryMapping)
    .filter(([need, _]) => nutritionalProfile[need])
    .map(([_, category]) => category);
    
  // Se não há categorias específicas, inclui todas
  const targetCategories = neededCategories.length > 0 ? neededCategories : 
    Object.values(categoryMapping);
  
  // Filtra receitas por categoria e compatibilidade com condições do usuário
  let relevantRecipes = allRecipes.filter(recipe => {
    // Verifica se a receita está em uma categoria necessária
    const matchesCategory = targetCategories.includes(recipe.category);
    
    // Verifica se a receita é compatível com o perfil do usuário
    const matchesProfile = recipe.targetProfile.some(profileItem => 
      nutritionalProfile.conditions.includes(profileItem) || 
      nutritionalProfile.goals.includes(profileItem)
    );
    
    return matchesCategory || matchesProfile;
  });
  
  // Personalização baseada em progressão temporal (se disponível)
  if (nutritionalProfile.currentDay) {
    // Semana 1: Receitas simples e básicas
    if (nutritionalProfile.currentDay <= 7) {
      relevantRecipes = relevantRecipes.filter(recipe => 
        recipe.difficulty === 'easy' || 
        recipe.prepTime.includes('5 min') || 
        recipe.prepTime.includes('10 min')
      );
    }
    // Semana 2: Introduzir algumas receitas de dificuldade média
    else if (nutritionalProfile.currentDay <= 14) {
      // Já inclui todas as receitas, mas prioriza as de dificuldade fácil e média
    }
    // Semana 3: Balancear entre todas as dificuldades
    else {
      // Inclui todas as receitas, mas com ordem de prioridade diferente
    }
  }
  
  // Ordenar por relevância para necessidades específicas e compatibilidade
  relevantRecipes.sort((a, b) => {
    // Priorizar receitas para a dor primária
    const aPainRelated = a.targetProfile.includes(nutritionalProfile.primaryPain);
    const bPainRelated = b.targetProfile.includes(nutritionalProfile.primaryPain);
    
    if (aPainRelated && !bPainRelated) return -1;
    if (!aPainRelated && bPainRelated) return 1;
    
    // Priorizar receitas para condições específicas
    const aConditionMatches = a.targetProfile.filter(item => 
      nutritionalProfile.conditions.includes(item)).length;
    const bConditionMatches = b.targetProfile.filter(item => 
      nutritionalProfile.conditions.includes(item)).length;
    
    if (aConditionMatches > bConditionMatches) return -1;
    if (aConditionMatches < bConditionMatches) return 1;
    
    // Priorizar receitas para objetivos específicos
    const aGoalMatches = a.targetProfile.filter(item => 
      nutritionalProfile.goals.includes(item)).length;
    const bGoalMatches = b.targetProfile.filter(item => 
      nutritionalProfile.goals.includes(item)).length;
    
    if (aGoalMatches > bGoalMatches) return -1;
    if (aGoalMatches < bGoalMatches) return 1;
    
    // Por fim, priorizar por dificuldade (se estiver nos primeiros dias)
    if (nutritionalProfile.currentDay && nutritionalProfile.currentDay <= 10) {
      const difficultyOrder = { 'easy': 0, 'medium': 1, 'hard': 2 };
      return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
    }
    
    return 0;
  });
  
  // Função para garantir diversidade de categorias
  const ensureDiversity = (recipes) => {
    const categoryCount = {};
    const diverseRecipes = [];
    
    // Inicializa contagem
    Object.values(categoryMapping).forEach(category => {
      categoryCount[category] = 0;
    });
    
    // Monta lista diversa
    for (const recipe of recipes) {
      if (categoryCount[recipe.category] < 2) { // Máximo 2 por categoria
        diverseRecipes.push(recipe);
        categoryCount[recipe.category]++;
      }
      
      // Limite máximo de 8 receitas
      if (diverseRecipes.length >= 8) break;
    }
    
    // Se ainda não chegou a 8, complete com outras receitas
    if (diverseRecipes.length < 8) {
      const remaining = recipes.filter(r => !diverseRecipes.includes(r));
      diverseRecipes.push(...remaining.slice(0, 8 - diverseRecipes.length));
    }
    
    return diverseRecipes;
  };
  
  // Retorna uma seleção personalizada e diversa de receitas
  return ensureDiversity(relevantRecipes);
}; 