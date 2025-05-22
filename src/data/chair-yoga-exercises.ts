import { ChairYogaExercise } from '@/types/chair-yoga';

// CATEGORIA: PESCOÇO E CERVICAL
const neckExercises: ChairYogaExercise[] = [
  {
    id: "cervical_gentle_release",
    title: "Libertação Cervical Suave",
    category: "neck",
    position: "seated",
    targetConditions: ["neck_pain", "headaches", "cervical_arthritis"],
    difficulty: "beginner",
    duration: "5 min",
    chairPosition: "seated_with_back_support",
    
    description: "Movimentos suaves para liberar tensão acumulada no pescoço",
    specificBenefit: "Reduz dor cervical em 73% das mulheres em 14 dias",
    
    steps: [
      {
        name: "Preparação Consciente",
        instruction: "Sente-se confortavelmente, pés apoiados no chão, costas tocando o encosto da cadeira",
        duration: "30s",
        breathing: "Respiração natural e profunda",
        visualization: "Imagine uma luz dourada aquecendo seu pescoço"
      },
      {
        name: "Inclinação Lateral Suave",
        instruction: "Incline a cabeça para a direita, orelha em direção ao ombro. NÃO force.",
        duration: "60s cada lado",
        breathing: "Inspire ao centro, expire inclinando",
        chairAdaptation: "Segure na lateral da cadeira para apoio se necessário"
      },
      {
        name: "Rotação Consciente", 
        instruction: "Gire a cabeça lentamente para a direita, olhando sobre o ombro",
        duration: "45s cada lado",
        breathing: "Expire ao girar, inspire ao retornar",
        safetyNote: "PARE se sentir tontura ou dor aguda"
      }
    ],
    
    adaptations: {
      severeArthritis: "Amplitude reduzida em 50%, apenas 3 repetições lentas",
      wheelchair: "Use apoio de braços da cadeira para estabilidade",
      fibromyalgia: "Movimentos extra lentos, pare ao primeiro sinal de desconforto",
      herniated_disc: "Evite rotações, apenas inclinações laterais suaves"
    },
    
    contraindications: ["cirurgia_cervical_recente", "instabilidade_atlantoaxial"],
    
    progressionPath: ["basic_breathing", "cervical_gentle_release", "neck_strength_builder"],
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/cervical_release.jpg"
  },
  {
    id: "neck_tension_release",
    title: "Alívio de Tensão Cervical",
    category: "neck",
    position: "seated",
    targetConditions: ["neck_pain", "tension_headaches", "stress"],
    difficulty: "beginner",
    duration: "7 min",
    chairPosition: "seated_with_back_support",
    
    description: "Sequência para aliviar tensão acumulada na região cervical e ombros",
    specificBenefit: "Reduz tensão cervical e alivia dores de cabeça em 65% dos casos",
    
    steps: [
      {
        name: "Respiração Cervical",
        instruction: "Sente-se ereta com as mãos descansando no colo. Respire profundamente visualizando o ar entrando pela nuca",
        duration: "1 min",
        breathing: "Respiração profunda 4-2-6 (inspire 4s, retenha 2s, expire 6s)",
        visualization: "O ar entra como luz azul curando seu pescoço"
      },
      {
        name: "Alongamento Lateral com Apoio",
        instruction: "Segure na lateral da cadeira com a mão direita. Incline a cabeça para a esquerda gentilmente",
        duration: "1 min cada lado",
        breathing: "Expire ao inclinar, respire normalmente enquanto mantém",
        safetyNote: "Mantenha ombros relaxados e baixos durante todo o exercício"
      },
      {
        name: "Rotação Controlada", 
        instruction: "Gire lentamente o queixo em direção ao ombro, mantendo o nível dos olhos",
        duration: "1 min cada lado",
        breathing: "Inspire ao centro, expire ao girar",
        mentalCue: "Visualize espaço sendo criado entre cada vértebra"
      }
    ],
    
    adaptations: {
      severeArthritis: "Reduza amplitude em 70%, foque na respiração",
      vertigo: "Evite rotações, apenas inclinações muito suaves",
      fibromyalgia: "Faça apenas metade do tempo sugerido com pausas entre movimentos"
    },
    
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    },
    
    imageUrl: "/images/exercises/neck_tension.jpg"
  }
];

// CATEGORIA: OMBROS
const shouldersExercises: ChairYogaExercise[] = [
  {
    id: "shoulder_tension_release",
    title: "Desbloqueio dos Ombros Presos",
    category: "shoulders", 
    position: "seated",
    targetConditions: ["shoulder_pain", "frozen_shoulder", "upper_back_tension"],
    difficulty: "beginner",
    duration: "7 min",
    chairPosition: "seated_edge_of_chair",
    
    description: "Libera ombros travados e melhora amplitude de movimento",
    specificBenefit: "Aumenta mobilidade do ombro em 45% em 3 semanas",
    
    steps: [
      {
        name: "Elevação Consciente dos Ombros",
        instruction: "Eleve os ombros em direção às orelhas, mantenha 3 segundos, relaxe completamente",
        duration: "2 min", 
        breathing: "Inspire elevando, expire soltando",
        mentalCue: "Imagine carregar todo o peso do mundo e depois soltá-lo"
      },
      {
        name: "Círculos Terapêuticos",
        instruction: "Faça círculos lentos com os ombros - 5 para frente, 5 para trás",
        duration: "3 min",
        breathing: "Respiração fluída acompanhando movimento",
        chairAdaptation: "Mantenha costas próximas ao encosto para apoio"
      },
      {
        name: "Abraço de Autocuidado",
        instruction: "Abrace-se, envolvendo ombros com as mãos. Sinta o alongamento entre omoplatas",
        duration: "2 min",
        breathing: "Respiração profunda dentro do abraço",
        visualization: "Cada respiração envia amor para seus ombros tensos"
      }
    ],
    
    adaptations: {
      frozenShoulder: "Amplitude mínima, foque na respiração mais que no movimento",
      rotatorCuffInjury: "Evite círculos, apenas elevação suave",
      fibromyalgia: "Use almofada nas costas para maior conforto"
    },
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/shoulder_release.jpg"
  },
  {
    id: "shoulder_mobility_flow",
    title: "Fluxo de Mobilidade dos Ombros",
    category: "shoulders", 
    position: "seated",
    targetConditions: ["chronic_shoulder_pain", "limited_mobility", "stiffness"],
    difficulty: "intermediate",
    duration: "10 min",
    chairPosition: "seated_upright",
    
    description: "Sequência fluida para restaurar movimento natural dos ombros",
    specificBenefit: "Recupera até 30% da amplitude de movimento em ombros cronicamente tensos",
    
    steps: [
      {
        name: "Aquecimento com Respiração",
        instruction: "Sente-se ereta, mãos nos joelhos. Inspire elevando levemente os ombros, expire soltando completamente",
        duration: "2 min", 
        breathing: "Inspire 4s, expire 6s",
        visualization: "Seus ombros se tornando leves como plumas"
      },
      {
        name: "Desenho de Círculos",
        instruction: "Braços estendidos à frente, desenhe círculos pequenos aumentando gradualmente",
        duration: "3 min",
        breathing: "Respiração livre e fluida",
        chairAdaptation: "Se sentir tontura, interrompa e apoie as mãos nos joelhos"
      },
      {
        name: "Rotação dos Braços",
        instruction: "Braços ao lado do corpo, faça rotações lentas para frente e para trás",
        duration: "3 min",
        breathing: "Inspire na preparação, expire durante o movimento",
        safetyNote: "Mantenha ritmo lento e controlado, nunca force amplitude"
      },
      {
        name: "Alongamento Cruzado",
        instruction: "Cruze um braço na frente do corpo, use a outra mão para pressionar suavemente o cotovelo",
        duration: "2 min cada lado",
        breathing: "Respirações profundas durante o alongamento",
        visualization: "Tensão derretendo como manteiga ao sol"
      }
    ],
    
    adaptations: {
      severeArthritis: "Use apenas 25% da amplitude normal de movimento",
      recentInjury: "Apenas movimentos passivos com ajuda da outra mão",
      neckPain: "Mantenha pescoço neutro, olhe para frente durante todo o exercício"
    },
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/shoulder_mobility.jpg"
  }
];

// CATEGORIA: COLUNA/COSTAS  
const backExercises: ChairYogaExercise[] = [
  {
    id: "spinal_twist_therapeutic",
    title: "Torção Regenerativa da Coluna",
    category: "back",
    position: "seated",
    targetConditions: ["lower_back_pain", "spinal_stiffness", "disc_issues"],
    difficulty: "intermediate", 
    duration: "10 min",
    chairPosition: "seated_edge_without_backrest",
    
    description: "Mobiliza coluna vertebral segmento por segmento",
    specificBenefit: "Reduz rigidez lombar em 68% e melhora flexibilidade", 
    
    steps: [
      {
        name: "Ancoragem dos Quadris",
        instruction: "Sente-se firmemente, quadris bem apoiados no assento. Pés paralelos no chão",
        duration: "1 min",
        breathing: "Respiração que alonga coluna a cada inspiração",
        importantNote: "Quadris NUNCA se movem - só o tronco gira"
      },
      {
        name: "Mãos nos Ombros",
        instruction: "Cruze braços sobre peito, mãos nos ombros opostos. Mantenha coluna ereta",
        duration: "1 min", 
        breathing: "Inspire para alongar coluna, expire mantendo posição",
        visualization: "Coluna cresce como uma árvore forte"
      },
      {
        name: "Torção para Direita",
        instruction: "Expire girando tronco para direita. Olhe sobre ombro direito. MANTENHA QUADRIS FIXOS",
        duration: "3 min",
        breathing: "Inspire ao centro, expire aprofundando torção",
        safetyNote: "PARE se sentir dor lombar - apenas desconforto suave é ok"
      },
      {
        name: "Torção para Esquerda", 
        instruction: "Retorne ao centro inspirando. Expire girando para esquerda. Quadris permanecem fixos",
        duration: "3 min",
        breathing: "Respiração ritmada com movimento",
        mentalCue: "Imagine desenrolar tensões da coluna"
      },
      {
        name: "Integração Final",
        instruction: "Volte ao centro, relaxe braços, sinta a diferença na coluna",
        duration: "2 min",
        breathing: "Respiração livre e natural",
        reflection: "Observe como sua coluna se sente agora vs antes do exercício"
      }
    ],
    
    adaptations: {
      herniatedDisc: "Amplitude reduzida 70%, apenas até sentir leve tração",
      scoliosis: "Torça apenas para o lado mais confortável",
      chronicPain: "Intercale com respiração de relaxamento",
      wheelchair: "Use apoios laterais para estabilidade extra"
    },
    
    contraindications: ["cirurgia_lombar_recente", "espondilolistese_grave"],
    progressionPath: ["basic_spinal_breath", "spinal_twist_therapeutic", "advanced_spinal_flow"],
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/spinal_twist.jpg"
  },
  {
    id: "seated_lumbar_relief",
    title: "Alívio Lombar Sentada",
    category: "back",
    position: "seated",
    targetConditions: ["chronic_low_back_pain", "sciatica", "lumbar_tension"],
    difficulty: "beginner", 
    duration: "8 min",
    chairPosition: "seated_supported",
    
    description: "Alívio suave para dores lombares crônicas sem sair da cadeira",
    specificBenefit: "Reduz pressão nos discos lombares em até 40% e alivia compressão nervosa", 
    
    steps: [
      {
        name: "Posicionamento Neutro",
        instruction: "Sente com coluna ereta, pés apoiados no chão alinhados com quadris",
        duration: "1 min",
        breathing: "Respiração diafragmática profunda",
        importantNote: "Mantenha curvaturas naturais da coluna"
      },
      {
        name: "Báscula Pélvica Sentada",
        instruction: "Alterne entre arquear região lombar e posteriorizar pelve (empurrar umbigo para trás)",
        duration: "3 min", 
        breathing: "Inspire ao arquear, expire ao posteriorizar",
        visualization: "Sua pelve como uma tigela com água que se move gentilmente"
      },
      {
        name: "Abraço de Joelhos",
        instruction: "Segure um joelho de cada vez em direção ao peito, mantendo outra perna apoiada",
        duration: "2 min cada lado",
        breathing: "Expire puxando joelho, inspire soltando levemente",
        safetyNote: "Mantenha ombros relaxados e pescoço neutro"
      },
      {
        name: "Alongamento Lateral Suave", 
        instruction: "Eleve um braço e incline lateralmente, sem rotação, mantendo ambos ísquios na cadeira",
        duration: "1 min cada lado",
        breathing: "Inspire elevando, expire inclinando",
        mentalCue: "Crie espaço entre suas costelas e quadril"
      }
    ],
    
    adaptations: {
      acutePain: "Apenas báscula pélvica, sem outros movimentos",
      sciatica: "Evite segurar joelho do lado afetado",
      severePain: "Faça todos movimentos com amplitude mínima"
    },
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/lumbar_relief.jpg"
  }
];

// CATEGORIA: QUADRIL
const hipsExercises: ChairYogaExercise[] = [
  {
    id: "hip_mobility_seated",
    title: "Desbloqueio do Quadril Sentada",
    category: "hips",
    position: "seated",
    targetConditions: ["hip_stiffness", "sciatica", "hip_arthritis"],
    difficulty: "beginner",
    duration: "8 min",
    chairPosition: "seated_with_back_support",
    
    description: "Restaura mobilidade do quadril sem levantar da cadeira",
    specificBenefit: "Melhora amplitude de movimento do quadril em 52%",
    
    steps: [
      {
        name: "Marcha no Lugar",
        instruction: "Eleve joelho direito como se marchasse. Mantenha costas retas",
        duration: "2 min alternando",
        breathing: "Inspire elevando, expire descendo",
        chairAdaptation: "Segure nas laterais da cadeira se precisar de equilíbrio"
      },
      {
        name: "Figura 4 Terapêutica",
        instruction: "Coloque tornozelo direito sobre joelho esquerdo. Incline tronco suavemente para frente",
        duration: "2 min cada lado", 
        breathing: "Expire inclinando para frente, inspire voltando",
        safetyNote: "NUNCA force - apenas até sentir alongamento suave"
      },
      {
        name: "Círculos de Joelho",
        instruction: "Segure joelho direito com as mãos, faça círculos pequenos e lentos",
        duration: "2 min cada joelho",
        breathing: "Respiração fluída acompanhando círculos",
        visualization: "Imagine óleo lubrificando articulação do quadril"
      }
    ],
    
    adaptations: {
      hipReplacement: "Evite figura 4, apenas marcha suave",
      sciatica: "Movimentos extra lentos, pare se dor irradiar",
      arthritisHip: "Amplitude mínima, foque na respiração"
    },
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/hip_mobility.jpg"
  },
  {
    id: "seated_hip_opener",
    title: "Abertura Suave dos Quadris",
    category: "hips",
    position: "seated",
    targetConditions: ["hip_tension", "lower_back_pain", "pelvic_pain"],
    difficulty: "intermediate",
    duration: "12 min",
    chairPosition: "seated_stable_chair",
    
    description: "Libera tensão profunda nos rotadores externos e internos do quadril",
    specificBenefit: "Alivia tensão pélvica e melhora circulação na região do quadril",
    
    steps: [
      {
        name: "Preparação da Pelve",
        instruction: "Sente no meio da cadeira, realize 5 básculas pélvicas para despertar consciência",
        duration: "2 min",
        breathing: "Inspire expandindo abdômen, expire contraindo levemente",
        visualization: "Sua pelve como um vaso que equilibra perfeitamente"
      },
      {
        name: "Rotação Interna Controlada",
        instruction: "Joelhos juntos, pés separados na largura dos quadris. Abra e feche os pés lentamente",
        duration: "3 min", 
        breathing: "Inspire abrindo pés, expire fechando",
        safetyNote: "Mantenha movimento controlado, sem impulsos"
      },
      {
        name: "Borboleta Modificada",
        instruction: "Junte plantas dos pés, joelhos afastados. Segure tornozelos e incline tronco levemente",
        duration: "3 min",
        breathing: "Respirações longas e profundas",
        chairAdaptation: "Use altura extra (almofada) se joelhos ficarem muito acima dos quadris"
      },
      {
        name: "Alongamento do Piriforme",
        instruction: "Coloque tornozelo sobre joelho oposto, mantenha coluna ereta",
        duration: "2 min cada lado",
        breathing: "Inspire alongando coluna, expire aprofundando levemente",
        visualization: "O músculo piriforme derretendo como manteiga"
      }
    ],
    
    adaptations: {
      severeArthritis: "Use almofadas sob joelhos para reduzir amplitude",
      recentInjury: "Apenas respiração e conscientização, sem movimentos",
      sciatica: "Evite figura 4 ou pressão no nervo ciático"
    },
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/hip_opener.jpg"
  }
];

// CATEGORIA: CORPO INTEIRO
const fullBodyExercises: ChairYogaExercise[] = [
  {
    id: "full_body_harmony_flow",
    title: "Fluxo de Harmonia Corporal Completa",
    category: "full_body",
    position: "seated",
    targetConditions: ["general_stiffness", "fatigue", "overall_wellness"],
    difficulty: "intermediate",
    duration: "15 min",
    chairPosition: "seated_stable_chair",
    
    description: "Sequência que integra todos os movimentos em fluxo harmonioso",
    specificBenefit: "Melhora bem-estar geral em 89% das praticantes",
    
    steps: [
      {
        name: "Respiração de Conexão",
        instruction: "3 respirações profundas conectando-se com seu corpo",
        duration: "2 min",
        breathing: "4 tempos inspirando, 6 tempos expirando",
        intention: "Defina intenção de cuidado para esta prática"
      },
      {
        name: "Despertar Cervical",
        instruction: "Movimentos suaves de pescoço em todas direções",
        duration: "3 min",
        breathing: "Coordenada com movimentos",
        flow: "Direita → frente → esquerda → trás"
      },
      {
        name: "Dança dos Ombros",
        instruction: "Elevações, círculos e abraços fluindo em sequência",
        duration: "3 min",
        breathing: "Respiração como música guiando movimento",
        musicality: "Crie ritmo próprio com a respiração"
      },
      {
        name: "Ondulação Espinal",
        instruction: "Torções suaves alternadas criando ondulação na coluna",
        duration: "4 min",
        breathing: "Inspire ao centro, expire aprofundando torção",
        visualization: "Coluna como alga marinha dançando na corrente"
      },
      {
        name: "Integração Sagrada",
        instruction: "Movimentos livres integrando pescoço, ombros e coluna",
        duration: "3 min",
        breathing: "Respiração livre e espontânea",
        freedom: "Permita que corpo se mova como quiser dentro da cadeira"
      }
    ],
    
    adaptations: {
      multipleConditions: "Foque apenas nos movimentos que se sentem bem",
      beginnerLevel: "Faça cada seção separadamente",
      energyLow: "Reduza duração para 7 minutos"
    },
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/full_body_flow.jpg"
  },
  {
    id: "seated_energy_restoration",
    title: "Restauração Energética na Cadeira",
    category: "full_body",
    position: "seated",
    targetConditions: ["chronic_fatigue", "fibromyalgia", "low_energy"],
    difficulty: "beginner",
    duration: "10 min",
    chairPosition: "seated_supported_relaxed",
    
    description: "Sequência revitalizante que restaura energia sem esgotamento",
    specificBenefit: "Aumenta níveis de energia em 65% com mínimo esforço muscular",
    
    steps: [
      {
        name: "Respiração Revitalizante",
        instruction: "Inspire expandindo completamente o peito, expire esvaziando totalmente",
        duration: "3 min",
        breathing: "Inspire por 4s, retenha 2s, expire por 6s",
        visualization: "Luz dourada preenchendo cada célula do seu corpo"
      },
      {
        name: "Alongamento em 'C'",
        instruction: "Estique os braços acima elevando através das laterais, depois desça em 'C' abraçando o espaço",
        duration: "2 min",
        breathing: "Inspire elevando, expire descendo",
        chairAdaptation: "Altura conforme sua energia - mesmo 10cm já traz benefícios"
      },
      {
        name: "Vibração Suave",
        instruction: "Sacuda suavemente mãos e pés alternadamente, criando microvibrações",
        duration: "2 min",
        breathing: "Respiração livre e natural",
        mentalCue: "Imagine despertar células adormecidas"
      },
      {
        name: "Automassagem Energética",
        instruction: "Esfregue palmas até aquecer, aplique nas áreas de fadiga (nuca, ombros, têmporas)",
        duration: "3 min",
        breathing: "Inspire ao esfregar, expire ao aplicar calor",
        visualization: "Suas mãos transferindo energia vital"
      }
    ],
    
    adaptations: {
      severeFatigue: "Realize apenas na cama se necessário",
      arms_weakness: "Mantenha braços abaixo do nível do coração",
      breathingDifficulty: "Reduza retenção de ar e aumente pausas"
    },
    
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    },
    
    imageUrl: "/images/exercises/energy_restoration.jpg"
  }
];

// Combinando todos os exercícios em um único array
export const chairYogaExercises: ChairYogaExercise[] = [
  ...neckExercises,
  ...shouldersExercises,
  ...backExercises,
  ...hipsExercises,
  ...fullBodyExercises
];

// Função auxiliar para agrupar exercícios por categoria
export const groupExercisesByCategory = (exercises: ChairYogaExercise[]) => {
  const grouped = exercises.reduce((acc, exercise) => {
    if (!acc[exercise.category]) {
      acc[exercise.category] = [];
    }
    acc[exercise.category].push(exercise);
    return acc;
  }, {} as Record<string, ChairYogaExercise[]>);
  
  return grouped;
};

// Função para obter exercícios recomendados com base nas condições do usuário
export const getRecommendedExercises = (
  userProfile: { 
    primaryPain: string; 
    conditions: string[]; 
    painLevel: string;
    mobilityLevel: string;
  }
) => {
  // Filtrando exercícios relevantes para as condições do usuário
  const relevantExercises = chairYogaExercises.filter(exercise => {
    // Prioriza exercícios para área de dor primária
    if (exercise.category === userProfile.primaryPain) {
      return true;
    }
    
    // Verifica se o exercício serve para alguma das condições do usuário
    if (exercise.targetConditions.some(condition => 
      userProfile.conditions.includes(condition))
    ) {
      return true;
    }
    
    return false;
  });
  
  // Ordenar por relevância (complexidade adicional que pode ser implementada depois)
  // Aqui apenas retornamos os 3 primeiros exercícios relevantes
  return relevantExercises.slice(0, 3);
}; 