import { ChairYogaExercise } from "@/types/chair-yoga";

export const shoulderExercises: ChairYogaExercise[] = [
  {
    id: "shoulder-rolls-beginner",
    title: "Rolamentos Suaves dos Ombros",
    category: "shoulders",
    difficulty: "beginner",
    duration: "5",
    targetConditions: ["shoulder_pain", "frozen_shoulder"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento suave de rotação dos ombros para aliviar tensão e melhorar a mobilidade.",
    specificBenefit: "Alivia tensão nos ombros e melhora a amplitude de movimento.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e ombros relaxados.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Rolamento para Frente",
        instruction: "Role os ombros suavemente para frente em movimentos circulares.",
        duration: "2 min",
        breathing: "Inspire ao subir, expire ao descer"
      },
      {
        name: "Rolamento para Trás",
        instruction: "Role os ombros suavemente para trás em movimentos circulares.",
        duration: "2 min",
        breathing: "Inspire ao subir, expire ao descer"
      }
    ],
    adaptations: {
      shoulder_pain: "Reduza a amplitude do movimento e faça pausas mais longas entre as repetições.",
      frozen_shoulder: "Use uma toalha enrolada para apoio e reduza a amplitude do movimento."
    },
    contraindications: ["instabilidade_escapular", "lesão_aguda_ombro"],
    imageUrl: "/images/exercises/shoulder-rolls.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "shoulder-shrugs-beginner",
    title: "Elevação Suave dos Ombros",
    category: "shoulders",
    difficulty: "beginner",
    duration: "5",
    targetConditions: ["shoulder_pain", "upper_back_tension"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento suave de elevação dos ombros para alongar e fortalecer.",
    specificBenefit: "Alonga os músculos superiores das costas e melhora a mobilidade dos ombros.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e mãos apoiadas no colo.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Elevação",
        instruction: "Eleve suavemente os ombros em direção às orelhas.",
        duration: "2 min",
        breathing: "Inspire ao elevar, expire ao descer"
      },
      {
        name: "Retorno",
        instruction: "Retorne suavemente à posição inicial.",
        duration: "2 min",
        breathing: "Inspire ao elevar, expire ao descer"
      }
    ],
    adaptations: {
      shoulder_pain: "Reduza a amplitude do movimento e aumente o tempo de pausa entre as repetições.",
      upper_back_tension: "Adicione uma leve pressão com as mãos nos ombros para aumentar o alongamento."
    },
    contraindications: ["instabilidade_escapular", "lesão_aguda_ombro"],
    imageUrl: "/images/exercises/shoulder-shrugs.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "shoulder-squeeze-beginner",
    title: "Aproximação Suave das Escápulas",
    category: "shoulders",
    difficulty: "beginner",
    duration: "5",
    targetConditions: ["shoulder_pain", "upper_back_tension"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento suave de aproximação das escápulas para fortalecer os músculos posteriores.",
    specificBenefit: "Fortalece os músculos entre as escápulas e melhora a postura.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e braços relaxados ao lado do corpo.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Aproximação",
        instruction: "Aproxime suavemente as escápulas, como se estivesse segurando um lápis entre elas.",
        duration: "2 min",
        breathing: "Inspire ao aproximar, expire ao relaxar"
      },
      {
        name: "Retorno",
        instruction: "Retorne suavemente à posição inicial.",
        duration: "2 min",
        breathing: "Inspire ao aproximar, expire ao relaxar"
      }
    ],
    adaptations: {
      shoulder_pain: "Reduza a intensidade da contração e aumente o tempo de pausa entre as repetições.",
      upper_back_tension: "Adicione uma leve pressão com as mãos nas escápulas para aumentar o alongamento."
    },
    contraindications: ["instabilidade_escapular", "lesão_aguda_ombro"],
    imageUrl: "/images/exercises/shoulder-squeeze.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "shoulder-circles-beginner",
    title: "Círculos Suaves dos Ombros",
    category: "shoulders",
    difficulty: "beginner",
    duration: "5",
    targetConditions: ["shoulder_pain", "frozen_shoulder"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento circular suave dos ombros para melhorar a mobilidade e coordenação.",
    specificBenefit: "Melhora a mobilidade dos ombros e reduz tensão muscular.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e braços relaxados ao lado do corpo.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Círculos para Frente",
        instruction: "Faça círculos suaves com os ombros para frente.",
        duration: "2 min",
        breathing: "Inspire ao subir, expire ao descer"
      },
      {
        name: "Círculos para Trás",
        instruction: "Faça círculos suaves com os ombros para trás.",
        duration: "2 min",
        breathing: "Inspire ao subir, expire ao descer"
      }
    ],
    adaptations: {
      shoulder_pain: "Reduza a amplitude do movimento e aumente o tempo de pausa entre as repetições.",
      frozen_shoulder: "Use uma toalha enrolada para apoio e reduza a amplitude do movimento."
    },
    contraindications: ["instabilidade_escapular", "lesão_aguda_ombro"],
    imageUrl: "/images/exercises/shoulder-circles.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "shoulder-rolls-intermediate",
    title: "Rolamentos dos Ombros com Resistência",
    category: "shoulders",
    difficulty: "intermediate",
    duration: "8",
    targetConditions: ["shoulder_pain", "frozen_shoulder"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento de rotação dos ombros com resistência suave para fortalecer e melhorar a mobilidade.",
    specificBenefit: "Fortalece os músculos dos ombros e melhora a amplitude de movimento.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as duas mãos na altura dos ombros.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Rolamento com Resistência",
        instruction: "Role os ombros para frente e para trás, mantendo a tensão na faixa elástica.",
        duration: "3 min",
        breathing: "Inspire ao subir, expire ao descer"
      },
      {
        name: "Variação Lateral",
        instruction: "Adicione movimentos laterais mantendo a tensão na faixa.",
        duration: "4 min",
        breathing: "Inspire ao subir, expire ao descer"
      }
    ],
    adaptations: {
      shoulder_pain: "Use uma faixa elástica mais leve e reduza a amplitude do movimento.",
      frozen_shoulder: "Use uma toalha enrolada para apoio e reduza a tensão na faixa."
    },
    contraindications: ["instabilidade_escapular", "lesão_aguda_ombro"],
    imageUrl: "/images/exercises/shoulder-rolls-resistance.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "shoulder-shrugs-intermediate",
    title: "Elevação dos Ombros com Peso",
    category: "shoulders",
    difficulty: "intermediate",
    duration: "8",
    targetConditions: ["shoulder_pain", "upper_back_tension"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento de elevação dos ombros com peso leve para fortalecer e alongar.",
    specificBenefit: "Fortalece os músculos superiores das costas e melhora a postura.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure pesos leves nas mãos.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Elevação com Peso",
        instruction: "Eleve os ombros em direção às orelhas, mantendo os pesos nas mãos.",
        duration: "3 min",
        breathing: "Inspire ao elevar, expire ao descer"
      },
      {
        name: "Variação com Rotação",
        instruction: "Adicione uma leve rotação dos ombros durante a elevação.",
        duration: "4 min",
        breathing: "Inspire ao elevar, expire ao descer"
      }
    ],
    adaptations: {
      shoulder_pain: "Use pesos mais leves e reduza a amplitude do movimento.",
      upper_back_tension: "Adicione uma leve pressão com as mãos nos ombros para aumentar o alongamento."
    },
    contraindications: ["instabilidade_escapular", "lesão_aguda_ombro"],
    imageUrl: "/images/exercises/shoulder-shrugs-weight.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "shoulder-squeeze-intermediate",
    title: "Aproximação das Escápulas com Resistência",
    category: "shoulders",
    difficulty: "intermediate",
    duration: "8",
    targetConditions: ["shoulder_pain", "upper_back_tension"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento de aproximação das escápulas com resistência para fortalecer os músculos posteriores.",
    specificBenefit: "Fortalece os músculos entre as escápulas e melhora a postura.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as mãos na frente do peito.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Aproximação com Resistência",
        instruction: "Aproxime as escápulas enquanto puxa a faixa elástica para os lados.",
        duration: "3 min",
        breathing: "Inspire ao aproximar, expire ao relaxar"
      },
      {
        name: "Variação com Elevação",
        instruction: "Adicione uma leve elevação dos braços durante a aproximação.",
        duration: "4 min",
        breathing: "Inspire ao aproximar, expire ao relaxar"
      }
    ],
    adaptations: {
      shoulder_pain: "Use uma faixa elástica mais leve e reduza a amplitude do movimento.",
      upper_back_tension: "Adicione uma leve pressão com as mãos nas escápulas para aumentar o alongamento."
    },
    contraindications: ["instabilidade_escapular", "lesão_aguda_ombro"],
    imageUrl: "/images/exercises/shoulder-squeeze-resistance.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "shoulder-circles-intermediate",
    title: "Círculos dos Ombros com Resistência",
    category: "shoulders",
    difficulty: "intermediate",
    duration: "8",
    targetConditions: ["shoulder_pain", "frozen_shoulder"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento circular dos ombros com resistência para melhorar a mobilidade e força.",
    specificBenefit: "Melhora a mobilidade dos ombros e fortalece os músculos estabilizadores.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as mãos na altura dos ombros.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Círculos com Resistência",
        instruction: "Faça círculos com os ombros mantendo a tensão na faixa elástica.",
        duration: "3 min",
        breathing: "Inspire ao subir, expire ao descer"
      },
      {
        name: "Variação com Amplitude",
        instruction: "Aumente gradualmente a amplitude dos círculos mantendo a tensão.",
        duration: "4 min",
        breathing: "Inspire ao subir, expire ao descer"
      }
    ],
    adaptations: {
      shoulder_pain: "Use uma faixa elástica mais leve e reduza a amplitude do movimento.",
      frozen_shoulder: "Use uma toalha enrolada para apoio e reduza a tensão na faixa."
    },
    contraindications: ["instabilidade_escapular", "lesão_aguda_ombro"],
    imageUrl: "/images/exercises/shoulder-circles-resistance.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "shoulder-rolls-advanced",
    title: "Rolamentos Integrados dos Ombros",
    category: "shoulders",
    difficulty: "advanced",
    duration: "10",
    targetConditions: ["shoulder_pain", "frozen_shoulder"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Sequência integrada de movimentos dos ombros combinando rotação, elevação e resistência.",
    specificBenefit: "Melhora a coordenação, força e mobilidade dos ombros de forma integrada.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as duas mãos na altura dos ombros.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Sequência Integrada",
        instruction: "Combine rotação dos ombros com elevação e resistência na faixa elástica.",
        duration: "4 min",
        breathing: "Inspire ao subir, expire ao descer"
      },
      {
        name: "Variação Dinâmica",
        instruction: "Adicione movimentos laterais e diagonais mantendo a tensão e coordenação.",
        duration: "5 min",
        breathing: "Inspire ao subir, expire ao descer"
      }
    ],
    adaptations: {
      shoulder_pain: "Use uma faixa elástica mais leve e reduza a complexidade dos movimentos.",
      frozen_shoulder: "Use uma toalha enrolada para apoio e reduza a amplitude dos movimentos."
    },
    contraindications: ["instabilidade_escapular", "lesão_aguda_ombro"],
    imageUrl: "/images/exercises/shoulder-rolls-integrated.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "shoulder-shrugs-advanced",
    title: "Elevação Integrada dos Ombros",
    category: "shoulders",
    difficulty: "advanced",
    duration: "10",
    targetConditions: ["shoulder_pain", "upper_back_tension"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Sequência integrada de elevação dos ombros combinando peso e movimento dinâmico.",
    specificBenefit: "Fortalece os músculos superiores das costas e melhora a coordenação.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure pesos leves nas mãos.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Sequência Integrada",
        instruction: "Combine elevação dos ombros com rotação e movimento dinâmico dos braços.",
        duration: "4 min",
        breathing: "Inspire ao elevar, expire ao descer"
      },
      {
        name: "Variação Dinâmica",
        instruction: "Adicione movimentos circulares e diagonais mantendo o controle.",
        duration: "5 min",
        breathing: "Inspire ao elevar, expire ao descer"
      }
    ],
    adaptations: {
      shoulder_pain: "Use pesos mais leves e reduza a complexidade dos movimentos.",
      upper_back_tension: "Adicione uma leve pressão com as mãos nos ombros para aumentar o alongamento."
    },
    contraindications: ["instabilidade_escapular", "lesão_aguda_ombro"],
    imageUrl: "/images/exercises/shoulder-shrugs-integrated.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "shoulder-squeeze-advanced",
    title: "Aproximação Integrada das Escápulas",
    category: "shoulders",
    difficulty: "advanced",
    duration: "10",
    targetConditions: ["shoulder_pain", "upper_back_tension"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Sequência integrada de aproximação das escápulas combinando resistência e movimento dinâmico.",
    specificBenefit: "Fortalece os músculos entre as escápulas e melhora a coordenação.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as mãos na frente do peito.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Sequência Integrada",
        instruction: "Combine aproximação das escápulas com movimento dinâmico dos braços.",
        duration: "4 min",
        breathing: "Inspire ao aproximar, expire ao relaxar"
      },
      {
        name: "Variação Dinâmica",
        instruction: "Adicione movimentos circulares e diagonais mantendo a tensão.",
        duration: "5 min",
        breathing: "Inspire ao aproximar, expire ao relaxar"
      }
    ],
    adaptations: {
      shoulder_pain: "Use uma faixa elástica mais leve e reduza a complexidade dos movimentos.",
      upper_back_tension: "Adicione uma leve pressão com as mãos nas escápulas para aumentar o alongamento."
    },
    contraindications: ["instabilidade_escapular", "lesão_aguda_ombro"],
    imageUrl: "/images/exercises/shoulder-squeeze-integrated.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "shoulder-circles-advanced",
    title: "Círculos Integrados dos Ombros",
    category: "shoulders",
    difficulty: "advanced",
    duration: "10",
    targetConditions: ["shoulder_pain", "frozen_shoulder"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Sequência integrada de círculos dos ombros combinando resistência e movimento dinâmico.",
    specificBenefit: "Melhora a mobilidade dos ombros e fortalece os músculos estabilizadores de forma integrada.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as mãos na altura dos ombros.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Sequência Integrada",
        instruction: "Combine círculos dos ombros com movimento dinâmico dos braços.",
        duration: "4 min",
        breathing: "Inspire ao subir, expire ao descer"
      },
      {
        name: "Variação Dinâmica",
        instruction: "Adicione movimentos diagonais e espirais mantendo a tensão.",
        duration: "5 min",
        breathing: "Inspire ao subir, expire ao descer"
      }
    ],
    adaptations: {
      shoulder_pain: "Use uma faixa elástica mais leve e reduza a complexidade dos movimentos.",
      frozen_shoulder: "Use uma toalha enrolada para apoio e reduza a amplitude dos movimentos."
    },
    contraindications: ["instabilidade_escapular", "lesão_aguda_ombro"],
    imageUrl: "/images/exercises/shoulder-circles-integrated.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  }
]; 