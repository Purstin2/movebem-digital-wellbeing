import { UserProfile } from '../types/onboarding';

// Define TrackWeek interface that was missing
export interface TrackWeek {
  week: number;
  theme: string;
  goals: string[];
  exercises: string[];
  nutritionTips: string[];
  mindfulnessPractice: string;
  personalizedTips?: string[]; // Optional property for generated tips
}

// Define Exercise interface that was missing
export interface Exercise {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  targetAreas: string[];
  conditions: string[];
  contraindications: string[];
  steps: ExerciseStep[];
  adaptations: Adaptation[];
  benefits: string[];
  safetyTips: string[];
}

// Define ExerciseStep and Adaptation interfaces
export interface ExerciseStep {
  step: number;
  title: string;
  instruction: string;
  duration?: string;
  breathingPattern?: string;
  commonMistakes?: string[];
  pose: string;
  adaptations?: {
    easy: string;
    normal: string;
    challenging: string;
  };
  safetyWarnings?: string[];
}

export interface Adaptation {
  condition: string;
  modification: string;
  visualCue?: string;
}

// Define Track interface that was missing
export interface Track {
  id: string;
  name: string;
  description: string;
  color: string;
  targetConditions: string[];
  weeks: TrackWeek[];
  nutritionFocus: string[];
  mindfulnessComponent: string[];
  focusAreas: string[];
  weeklyGoal: number;
  sessionDuration: number;
}

// BANCO DE EXERCÍCIOS ESPECIALIZADOS
export const specializedExercises: Exercise[] = [
  // TRILHA TERAPÊUTICA - PESCOÇO
  {
    id: "neck_gentle_release",
    title: "Liberação Suave do Pescoço",
    description: "Movimento ultra-suave para alívio de tensão cervical",
    duration: "5 min",
    difficulty: "beginner",
    category: "neck",
    targetAreas: ["cervical", "trapézio", "base_crânio"],
    conditions: ["arthritis", "fibromyalgia", "anxiety"],
    contraindications: ["hérnia_cervical_aguda"],
    steps: [
      {
        step: 1,
        title: "Preparação Consciente",
        instruction: "Sente-se na beira da cadeira, pés apoiados no chão. Coloque uma mão no coração, sinta os batimentos. Respire 3 vezes profundamente, soltando a tensão a cada expiração.",
        duration: "1 min",
        breathingPattern: "4 segundos inspira, 6 segundos expira",
        pose: "seated_preparation",
        adaptations: {
          easy: "Mantenha as costas apoiadas no encosto se precisar de mais suporte",
          normal: "Sente-se na beira da cadeira, coluna ereta mas relaxada",
          challenging: "Mantenha os olhos fechados e foque na respiração consciente"
        }
      },
      {
        step: 2,
        title: "Micro-movimentos Laterais",
        instruction: "Muito devagar, incline a cabeça para o lado direito, como se a orelha quisesse tocar o ombro. NÃO force. Volte ao centro com a mesma suavidade. Repita para a esquerda.",
        duration: "2 min",
        breathingPattern: "Respire naturalmente",
        commonMistakes: ["Forçar o movimento", "Mover muito rápido", "Tensionar ombros"],
        pose: "neck_lateral",
        adaptations: {
          easy: "Amplitude muito reduzida, apenas 20% do movimento",
          normal: "Amplitude moderada, confortável",
          challenging: "Sutileza no movimento, foco na consciência"
        }
      },
      {
        step: 3,
        title: "Rotação Consciente",
        instruction: "Gire a cabeça suavemente para a direita, olhando sobre o ombro. Sinta o alongamento sem forçar. Volte ao centro e repita para a esquerda. Se sentir qualquer dor, diminua a amplitude.",
        duration: "2 min",
        breathingPattern: "Expire ao girar, inspire ao voltar",
        commonMistakes: ["Girar rápido demais", "Forçar além do confortável"],
        pose: "neck_rotation",
        adaptations: {
          easy: "Gire apenas 30% da amplitude total",
          normal: "Gire até onde for confortável",
          challenging: "Adicione pausas de 5s no ponto máximo"
        }
      }
    ],
    adaptations: [
      {
        condition: "arthritis",
        modification: "Amplitude 50% menor, movimentos ainda mais lentos",
        visualCue: "Como uma flor se movendo na brisa"
      },
      {
        condition: "fibromyalgia", 
        modification: "Pausas de 30s entre movimentos, foco na respiração",
        visualCue: "Movimento como mel escorrendo"
      }
    ],
    benefits: [
      "Reduz tensão cervical",
      "Melhora amplitude de movimento",
      "Diminui dores de cabeça",
      "Relaxa trapézio superior"
    ],
    safetyTips: [
      "PARE se sentir dor aguda",
      "Nunca force o movimento",
      "Mantenha ombros relaxados",
      "Se tiver tontura, pare e respire"
    ]
  },

  // TRILHA TERAPÊUTICA - LOMBAR
  {
    id: "lower_back_relief",
    title: "Alívio Lombar Sentado",
    description: "Sequência específica para dor lombar crônica",
    duration: "8 min",
    difficulty: "beginner",
    category: "back",
    targetAreas: ["lombar", "quadril", "glúteos"],
    conditions: ["herniated_disc", "chronic_pain", "arthritis"],
    contraindications: ["hérnia_aguda", "cirurgia_recente"],
    steps: [
      {
        step: 1,
        title: "Basculação Pélvica Micro",
        instruction: "Sente-se com as costas afastadas do encosto. Imagine que tem um rabo de cavalo: balance muito suavemente a pelve para frente e para trás, como se estivesse abanando o rabo.",
        duration: "2 min",
        breathingPattern: "Inspire levando pelve para frente, expire voltando",
        pose: "pelvic_tilt",
        adaptations: {
          easy: "Movimento mínimo, quase imperceptível",
          normal: "Pequeno movimento controlado",
          challenging: "Mais consciência das vértebras inferiores"
        }
      },
      {
        step: 2,
        title: "Abraço dos Joelhos",
        instruction: "Levante um joelho em direção ao peito, abraçando-o suavemente com as duas mãos. Sinta o alongamento na lombar. Solte e repita com a outra perna.",
        duration: "3 min",
        breathingPattern: "Respire profundamente enquanto abraça",
        commonMistakes: ["Puxar com força", "Tensionar pescoço"],
        pose: "knee_hug",
        adaptations: {
          easy: "Traga joelho apenas 30% do caminho",
          normal: "Traga joelho até onde for confortável",
          challenging: "Mantenha a posição por 3 respirações"
        }
      },
      {
        step: 3,
        title: "Torção Terapêutica",
        instruction: "Com os pés apoiados, gire o tronco suavemente para a direita, colocando a mão direita no encosto da cadeira. A lombar permanece apoiada. Volte ao centro e repita para o outro lado.",
        duration: "3 min",
        breathingPattern: "Expire ao girar, inspire ao voltar",
        pose: "seated_spinal_twist",
        adaptations: {
          easy: "Gire apenas o mínimo confortável",
          normal: "Gire mantendo lombar apoiada",
          challenging: "Adicione olhar para trás suavemente"
        }
      }
    ],
    adaptations: [
      {
        condition: "herniated_disc",
        modification: "Amplitude 30% menor, evitar flexão completa",
        visualCue: "Movimento como uma porta girando suavemente"
      }
    ],
    benefits: [
      "Descomprime vértebras lombares",
      "Aumenta circulação na região",
      "Relaxa músculos profundos",
      "Melhora flexibilidade do quadril"
    ],
    safetyTips: [
      "Mantenha lombar sempre apoiada",
      "Não force torções",
      "Se irradiar dor para pernas, pare",
      "Movimentos lentos e controlados"
    ]
  },

  // TRILHA ADAPTATIVA - MOBILIDADE GERAL
  {
    id: "full_body_mobility",
    title: "Mobilidade Corporal Adaptada",
    description: "Sequência completa para ganho gradual de movimento",
    duration: "12 min",
    difficulty: "intermediate",
    category: "full_body",
    targetAreas: ["cervical", "torácica", "lombar", "quadril", "ombros"],
    conditions: ["moderate_pain", "stiffness", "sedentary"],
    contraindications: ["lesões_agudas"],
    steps: [
      {
        step: 1,
        title: "Despertar Articular",
        instruction: "Comece com movimentos circulares suaves dos ombros, depois pescoço, pulsos e tornozelos. Como se estivesse 'ligando' cada articulação.",
        duration: "3 min",
        breathingPattern: "Respiração livre e profunda",
        pose: "joint_warmup",
        adaptations: {
          easy: "Foco em apenas 2-3 articulações principais",
          normal: "Movimento suave em todas articulações",
          challenging: "Adicione consciência proprioceptiva"
        }
      },
      {
        step: 2,
        title: "Onda da Coluna",
        instruction: "Imagine sua coluna como uma onda do mar. Comece curvando suavemente a cabeça para baixo, depois o pescoço, depois as costas, vértebra por vértebra. Volte desenrolando da mesma forma.",
        duration: "4 min",
        breathingPattern: "Expire descendo, inspire subindo",
        pose: "spinal_wave",
        adaptations: {
          easy: "Movimente apenas parte superior da coluna",
          normal: "Movimento completo mas reduzido",
          challenging: "Foco na articulação de cada vértebra"
        }
      },
      {
        step: 3,
        title: "Abertura do Coração",
        instruction: "Abra os braços como se fosse abraçar o mundo. Leve os ombros para trás, abrindo o peito. Sinta a expansão da caixa torácica.",
        duration: "3 min",
        breathingPattern: "Inspire expandindo, expire mantendo",
        pose: "heart_opening",
        adaptations: {
          easy: "Mantenha braços mais baixos",
          normal: "Braços na altura dos ombros",
          challenging: "Adicione respiração profunda expandindo costelas"
        }
      },
      {
        step: 4,
        title: "Integração Final",
        instruction: "Feche os olhos e faça um body scan mental. Sinta cada parte do corpo, agradeça por ele ter se movido hoje.",
        duration: "2 min",
        breathingPattern: "Respiração natural e consciente",
        pose: "meditation_seated",
        adaptations: {
          easy: "Mantenha olhos abertos com foco suave",
          normal: "Olhos fechados, foco na respiração",
          challenging: "Body scan detalhado e visualização"
        }
      }
    ],
    adaptations: [
      {
        condition: "limited_mobility",
        modification: "Todos os movimentos 50% menor amplitude",
        visualCue: "Como uma dança suave e lenta"
      }
    ],
    benefits: [
      "Melhora mobilidade geral",
      "Aumenta consciência corporal",
      "Reduz rigidez matinal",
      "Prepara corpo para atividades diárias"
    ],
    safetyTips: [
      "Respeite seus limites diários",
      "Alguns dias você pode fazer menos",
      "Foque na qualidade, não quantidade",
      "Escute seu corpo sempre"
    ]
  }
];

// SISTEMA DE TRILHAS
export const trackSystem: Track[] = [
  {
    id: "therapeutic",
    name: "Trilha Terapêutica",
    description: "Para dores crônicas e limitações severas",
    color: "bg-red-500",
    targetConditions: ["arthritis", "fibromyalgia", "herniated_disc", "chronic_pain"],
    weeks: [
      {
        week: 1,
        theme: "Alívio e Reconexão",
        goals: ["Reduzir dor imediata", "Reconectar com o corpo", "Estabelecer rotina"],
        exercises: ["neck_gentle_release", "lower_back_relief"],
        nutritionTips: [
          "Chá de cúrcuma pela manhã (anti-inflamatório)",
          "Hidratação: 1 copo d'água a cada hora",
          "Evitar açúcar refinado (aumenta inflamação)"
        ],
        mindfulnessPractice: "Respiração 4-7-8 para dor: 4s inspira, 7s segura, 8s expira"
      },
      {
        week: 2,
        theme: "Mobilidade Suave",
        goals: ["Aumentar amplitude gradualmente", "Melhorar circulação", "Reduzir rigidez"],
        exercises: ["neck_gentle_release", "lower_back_relief"],
        nutritionTips: [
          "Incluir ômega-3: linhaça, chia, nozes",
          "Frutas vermelhas (antioxidantes)",
          "Evitar alimentos processados"
        ],
        mindfulnessPractice: "Body scan de 5 minutos após exercícios"
      },
      {
        week: 3,
        theme: "Fortalecimento Interno",
        goals: ["Ativar músculos profundos", "Melhorar estabilidade", "Consolidar hábitos"],
        exercises: ["full_body_mobility"],
        nutritionTips: [
          "Proteína em cada refeição (recuperação muscular)",
          "Magnésio: folhas verdes, sementes",
          "Reduzir cafeína (tensão muscular)"
        ],
        mindfulnessPractice: "Meditação caminhando (mesmo que 2 minutos)"
      }
    ],
    nutritionFocus: ["anti-inflamatório", "hidratação", "magnésio", "ômega-3"],
    mindfulnessComponent: ["respiração para dor", "body scan", "aceitação corporal"],
    focusAreas: ["Alívio de dor", "Mobilidade básica", "Segurança"],
    weeklyGoal: 4,
    sessionDuration: 8
  },
  
  {
    id: "adaptive",
    name: "Trilha Adaptativa",
    description: "Para mobilidade moderada com progressão segura",
    color: "bg-blue-500",
    targetConditions: ["moderate_pain", "stiffness", "sedentary", "overweight"],
    weeks: [
      {
        week: 1,
        theme: "Despertar do Corpo",
        goals: ["Mobilizar articulações", "Melhorar circulação", "Criar consciência postural"],
        exercises: ["full_body_mobility"],
        nutritionTips: [
          "Começar o dia com limão + água morna",
          "Incluir fibras: aveia, frutas com casca",
          "Mastigar devagar (digestão + saciedade)"
        ],
        mindfulnessPractice: "Respiração consciente durante exercícios"
      },
      {
        week: 2,
        theme: "Força e Fluidez",
        goals: ["Aumentar resistência", "Melhorar coordenação", "Fortalecer core"],
        exercises: ["full_body_mobility"],
        nutritionTips: [
          "Proteína vegetal: feijões, lentilhas, quinoa",
          "Hidratação antes, durante e após exercícios",
          "Carboidratos complexos: batata doce, arroz integral"
        ],
        mindfulnessPractice: "Atenção plena nos movimentos"
      },
      {
        week: 3,
        theme: "Integração e Energia",
        goals: ["Movimentos fluidos", "Aumentar energia vital", "Autonomia corporal"],
        exercises: ["full_body_mobility"],
        nutritionTips: [
          "Variedade de cores no prato",
          "Lanches saudáveis: frutas + oleaginosas",
          "Jantar mais leve para melhor sono"
        ],
        mindfulnessPractice: "Gratidão corporal diária"
      }
    ],
    nutritionFocus: ["fibras", "proteínas vegetais", "hidratação", "energia sustentável"],
    mindfulnessComponent: ["atenção plena", "consciência postural", "gratidão corporal"],
    focusAreas: ["Mobilidade gradual", "Força funcional", "Bem-estar"],
    weeklyGoal: 5,
    sessionDuration: 12
  },

  {
    id: "wellness",
    name: "Trilha Bem-Estar",
    description: "Para prevenção e otimização da saúde",
    color: "bg-green-500",
    targetConditions: ["prevention", "wellness", "energy", "posture"],
    weeks: [
      {
        week: 1,
        theme: "Fundação Sólida",
        goals: ["Estabelecer base forte", "Melhorar postura", "Aumentar flexibilidade"],
        exercises: ["full_body_mobility"],
        nutritionTips: [
          "Superalimentos: spirulina, chlorella, açaí",
          "Hidratação com eletrólitos naturais",
          "Timing nutricional: proteína pós-exercício"
        ],
        mindfulnessPractice: "Meditação em movimento"
      },
      {
        week: 2,
        theme: "Força Dinâmica",
        goals: ["Desenvolver força funcional", "Melhorar resistência", "Coordenação avançada"],
        exercises: ["full_body_mobility"],
        nutritionTips: [
          "Estratégias de jejum intermitente",
          "Suplementação natural: vitamina D, B12",
          "Alimentação pré e pós-treino otimizada"
        ],
        mindfulnessPractice: "Flow state durante exercícios"
      },
      {
        week: 3,
        theme: "Performance e Longevidade",
        goals: ["Otimizar performance", "Prevenir lesões", "Sustentar resultados"],
        exercises: ["full_body_mobility"],
        nutritionTips: [
          "Biohacking nutricional avançado",
          "Cronobiologia alimentar",
          "Nutrição para longevidade"
        ],
        mindfulnessPractice: "Visualização para performance"
      }
    ],
    nutritionFocus: ["superalimentos", "biohacking", "performance", "longevidade"],
    mindfulnessComponent: ["flow state", "visualização", "otimização mental"],
    focusAreas: ["Prevenção", "Performance", "Longevidade"],
    weeklyGoal: 6,
    sessionDuration: 15
  }
];

// ALGORITMO DE RECOMENDAÇÃO DE TRILHA
export const recommendTrack = (profile: UserProfile): string => {
  let score = 0;
  
  // Análise de dor
  if (profile.painLevel === 'high') score += 3;
  else if (profile.painLevel === 'medium') score += 2;
  else score += 1;
  
  // Análise de mobilidade
  if (profile.mobilityLevel === 'limited') score += 3;
  else if (profile.mobilityLevel === 'moderate') score += 2;
  else score += 1;
  
  // Análise de condições
  const therapeuticConditions = ['arthritis', 'fibromyalgia', 'herniated_disc'];
  const hasTherapeuticCondition = profile.conditions.some(c => 
    therapeuticConditions.includes(c)
  );
  if (hasTherapeuticCondition) score += 3;
  
  // Análise de experiência
  if (profile.experience === 'beginner') score += 2;
  else if (profile.experience === 'some') score += 1;
  
  // Decisão da trilha
  if (score >= 7) return 'therapeutic';
  if (score >= 4) return 'adaptive';
  return 'wellness';
};

export const getTrackInfo = (trackId: string) => {
  const trackFound = trackSystem.find(t => t.id === trackId);
  if (trackFound) {
    return trackFound;
  }
  
  // Default track info if not found
  return {
    id: "wellness",
    name: "Trilha Bem-Estar",
    description: "Para prevenção e otimização da saúde",
    color: "bg-green-500",
    focusAreas: ["Prevenção", "Performance", "Longevidade"],
    weeklyGoal: 6,
    sessionDuration: 15,
    targetConditions: [],
    weeks: [],
    nutritionFocus: [],
    mindfulnessComponent: []
  };
};

// GERADOR DE PLANO PERSONALIZADO
export const generatePersonalizedPlan = (profile: UserProfile) => {
  const recommendedTrack = recommendTrack(profile);
  const track = trackSystem.find(t => t.id === recommendedTrack)!;
  
  // Personalizar exercícios baseado no foco principal de dor
  const customizedExercises = specializedExercises.filter(exercise => {
    // Se tem condições específicas, filtrar exercícios compatíveis
    if (profile.conditions.length > 0) {
      return profile.conditions.some(condition => 
        exercise.conditions.includes(condition) || exercise.conditions.includes('general')
      );
    }
    
    // Se tem dor específica, focar nessa área
    if (profile.primaryPain !== 'general') {
      return exercise.targetAreas.includes(profile.primaryPain) || 
             exercise.category === profile.primaryPain ||
             exercise.category === 'full_body';
    }
    
    return true;
  });
  
  // Ajustar duração baseado na experiência
  const adjustedDuration = profile.experience === 'beginner' ? 0.7 : 
                          profile.experience === 'some' ? 0.85 : 1.0;
  
  return {
    track,
    exercises: customizedExercises,
    durationMultiplier: adjustedDuration,
    focusAreas: [profile.primaryPain],
    specialConsiderations: profile.conditions,
    weeklyGoals: track.weeks.map(week => ({
      ...week,
      personalizedTips: generatePersonalizedTips(profile, week)
    }))
  };
};

const generatePersonalizedTips = (profile: UserProfile, week: TrackWeek) => {
  const tips = [];
  
  // Tips baseados na idade
  if (profile.age === '65+') {
    tips.push("Faça movimentos extra lentos - sua sabedoria corporal vale mais que velocidade");
  } else if (profile.age === '25-35') {
    tips.push("Use tecnologia a seu favor - apps de lembrete podem ajudar na consistência");
  }
  
  // Tips baseados nos objetivos
  if (profile.goals.includes('weight_loss')) {
    tips.push("Combine os exercícios com caminhadas leves quando possível");
  }
  
  if (profile.goals.includes('anxiety')) {
    tips.push("Foque extra na respiração - ela é sua ferramenta anti-ansiedade");
  }
  
  // Tips baseados nas condições
  if (profile.conditions.includes('arthritis')) {
    tips.push("Em dias de maior inflamação, faça apenas respiração consciente");
  }
  
  return tips;
};

// SISTEMA DE PROGRESSÃO ADAPTATIVA
export const getNextWeekRecommendation = (
  currentWeek: number, 
  userProgress: { completedDays: number; painLevelChange?: number },
  profile: UserProfile
) => {
  const consistency = userProgress.completedDays / (currentWeek * 7);
  const painImprovement = userProgress.painLevelChange || 0;
  
  // Se consistência baixa, manter semana atual
  if (consistency < 0.6) {
    return {
      recommendation: 'repeat',
      message: 'Vamos consolidar esta semana antes de avançar. Consistência é mais importante que velocidade.',
      adjustments: ['Reduzir duração em 30%', 'Focar em 3 exercícios principais']
    };
  }
  
  // Se dor aumentou, recuar
  if (painImprovement < -1) {
    return {
      recommendation: 'step_back',
      message: 'Vamos dar um passo atrás e focar no alívio. Seu corpo está pedindo mais cuidado.',
      adjustments: ['Trocar para exercícios mais suaves', 'Aumentar componente de relaxamento']
    };
  }
  
  // Progressão normal
  return {
    recommendation: 'advance',
    message: 'Parabéns! Você está pronta para novos desafios.',
    adjustments: []
  };
};
