import { ChairYogaExercise } from "@/types/chair-yoga";

export const spineExercises: ChairYogaExercise[] = [
  {
    id: "spine-twist-beginner",
    title: "Torção Suave da Coluna",
    category: "back",
    difficulty: "beginner",
    duration: "5",
    targetConditions: ["back_pain", "spinal_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento suave de torção da coluna para melhorar a mobilidade e aliviar tensão.",
    specificBenefit: "Melhora a mobilidade da coluna e reduz tensão muscular.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e mãos apoiadas no colo.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Torção Suave",
        instruction: "Gire suavemente o tronco para um lado, mantendo os quadris estáveis.",
        duration: "2 min",
        breathing: "Inspire ao girar, expire ao retornar"
      },
      {
        name: "Retorno",
        instruction: "Retorne suavemente à posição central.",
        duration: "2 min",
        breathing: "Inspire ao girar, expire ao retornar"
      }
    ],
    adaptations: {
      back_pain: "Reduza a amplitude do movimento e use o encosto da cadeira para apoio.",
      spinal_stiffness: "Adicione uma leve pressão com as mãos nos joelhos para aumentar o alongamento."
    },
    contraindications: ["herniated_disc", "spinal_instability"],
    imageUrl: "/images/exercises/spine-twist.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "spine-flexion-beginner",
    title: "Flexão Suave da Coluna",
    category: "back",
    difficulty: "beginner",
    duration: "5",
    targetConditions: ["back_pain", "spinal_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento suave de flexão da coluna para alongar e relaxar.",
    specificBenefit: "Alonga os músculos das costas e melhora a flexibilidade da coluna.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e mãos apoiadas no colo.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Flexão Suave",
        instruction: "Dobre suavemente o tronco para frente, mantendo a coluna alongada.",
        duration: "2 min",
        breathing: "Inspire ao preparar, expire ao dobrar"
      },
      {
        name: "Retorno",
        instruction: "Retorne suavemente à posição ereta.",
        duration: "2 min",
        breathing: "Inspire ao retornar, expire ao estabilizar"
      }
    ],
    adaptations: {
      back_pain: "Reduza a amplitude do movimento e use o encosto da cadeira para apoio.",
      spinal_stiffness: "Adicione uma leve pressão com as mãos nos joelhos para aumentar o alongamento."
    },
    contraindications: ["herniated_disc", "spinal_instability"],
    imageUrl: "/images/exercises/spine-flexion.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "spine-extension-beginner",
    title: "Extensão Suave da Coluna",
    category: "back",
    difficulty: "beginner",
    duration: "5",
    targetConditions: ["back_pain", "spinal_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento suave de extensão da coluna para fortalecer e alongar.",
    specificBenefit: "Fortalece os músculos das costas e melhora a postura.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e mãos apoiadas no colo.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Extensão Suave",
        instruction: "Arqueie suavemente a coluna para trás, mantendo o controle.",
        duration: "2 min",
        breathing: "Inspire ao preparar, expire ao arquear"
      },
      {
        name: "Retorno",
        instruction: "Retorne suavemente à posição ereta.",
        duration: "2 min",
        breathing: "Inspire ao retornar, expire ao estabilizar"
      }
    ],
    adaptations: {
      back_pain: "Reduza a amplitude do movimento e use o encosto da cadeira para apoio.",
      spinal_stiffness: "Adicione uma leve pressão com as mãos na parte inferior das costas para aumentar o alongamento."
    },
    contraindications: ["herniated_disc", "spinal_instability"],
    imageUrl: "/images/exercises/spine-extension.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "spine-lateral-beginner",
    title: "Inclinação Lateral Suave da Coluna",
    category: "back",
    difficulty: "beginner",
    duration: "5",
    targetConditions: ["back_pain", "spinal_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento suave de inclinação lateral da coluna para alongar e relaxar.",
    specificBenefit: "Alonga os músculos laterais da coluna e melhora a mobilidade.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e mãos apoiadas no colo.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Inclinação Suave",
        instruction: "Incline suavemente o tronco para um lado, mantendo os quadris estáveis.",
        duration: "2 min",
        breathing: "Inspire ao preparar, expire ao inclinar"
      },
      {
        name: "Retorno",
        instruction: "Retorne suavemente à posição central.",
        duration: "2 min",
        breathing: "Inspire ao retornar, expire ao estabilizar"
      }
    ],
    adaptations: {
      back_pain: "Reduza a amplitude do movimento e use o encosto da cadeira para apoio.",
      spinal_stiffness: "Adicione uma leve pressão com as mãos no quadril para aumentar o alongamento."
    },
    contraindications: ["herniated_disc", "spinal_instability"],
    imageUrl: "/images/exercises/spine-lateral.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "spine-twist-intermediate",
    title: "Torção da Coluna com Resistência",
    category: "back",
    difficulty: "intermediate",
    duration: "8",
    targetConditions: ["back_pain", "spinal_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento de torção da coluna com resistência suave para fortalecer e melhorar a mobilidade.",
    specificBenefit: "Fortalece os músculos da coluna e melhora a amplitude de movimento.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as duas mãos na frente do peito.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Torção com Resistência",
        instruction: "Gire o tronco mantendo a tensão na faixa elástica.",
        duration: "3 min",
        breathing: "Inspire ao girar, expire ao retornar"
      },
      {
        name: "Variação com Elevação",
        instruction: "Adicione uma leve elevação dos braços durante a torção.",
        duration: "4 min",
        breathing: "Inspire ao girar, expire ao retornar"
      }
    ],
    adaptations: {
      back_pain: "Use uma faixa elástica mais leve e reduza a amplitude do movimento.",
      spinal_stiffness: "Adicione uma leve pressão com as mãos nos joelhos para aumentar o alongamento."
    },
    contraindications: ["herniated_disc", "spinal_instability"],
    imageUrl: "/images/exercises/spine-twist-resistance.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "spine-flexion-intermediate",
    title: "Flexão da Coluna com Resistência",
    category: "back",
    difficulty: "intermediate",
    duration: "8",
    targetConditions: ["back_pain", "spinal_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento de flexão da coluna com resistência suave para fortalecer e alongar.",
    specificBenefit: "Fortalece os músculos das costas e melhora a flexibilidade.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as mãos na frente do peito.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Flexão com Resistência",
        instruction: "Dobre o tronco para frente mantendo a tensão na faixa elástica.",
        duration: "3 min",
        breathing: "Inspire ao preparar, expire ao dobrar"
      },
      {
        name: "Variação com Rotação",
        instruction: "Adicione uma leve rotação durante a flexão.",
        duration: "4 min",
        breathing: "Inspire ao preparar, expire ao dobrar"
      }
    ],
    adaptations: {
      back_pain: "Use uma faixa elástica mais leve e reduza a amplitude do movimento.",
      spinal_stiffness: "Adicione uma leve pressão com as mãos nos joelhos para aumentar o alongamento."
    },
    contraindications: ["herniated_disc", "spinal_instability"],
    imageUrl: "/images/exercises/spine-flexion-resistance.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "spine-extension-intermediate",
    title: "Extensão da Coluna com Resistência",
    category: "back",
    difficulty: "intermediate",
    duration: "8",
    targetConditions: ["back_pain", "spinal_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento de extensão da coluna com resistência suave para fortalecer e alongar.",
    specificBenefit: "Fortalece os músculos das costas e melhora a postura.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as mãos atrás da cabeça.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Extensão com Resistência",
        instruction: "Arqueie a coluna para trás mantendo a tensão na faixa elástica.",
        duration: "3 min",
        breathing: "Inspire ao preparar, expire ao arquear"
      },
      {
        name: "Variação com Rotação",
        instruction: "Adicione uma leve rotação durante a extensão.",
        duration: "4 min",
        breathing: "Inspire ao preparar, expire ao arquear"
      }
    ],
    adaptations: {
      back_pain: "Use uma faixa elástica mais leve e reduza a amplitude do movimento.",
      spinal_stiffness: "Adicione uma leve pressão com as mãos na parte inferior das costas para aumentar o alongamento."
    },
    contraindications: ["herniated_disc", "spinal_instability"],
    imageUrl: "/images/exercises/spine-extension-resistance.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "spine-lateral-intermediate",
    title: "Inclinação Lateral da Coluna com Resistência",
    category: "back",
    difficulty: "intermediate",
    duration: "8",
    targetConditions: ["back_pain", "spinal_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento de inclinação lateral da coluna com resistência suave para fortalecer e alongar.",
    specificBenefit: "Fortalece os músculos laterais da coluna e melhora a mobilidade.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as mãos na altura dos ombros.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Inclinação com Resistência",
        instruction: "Incline o tronco para um lado mantendo a tensão na faixa elástica.",
        duration: "3 min",
        breathing: "Inspire ao preparar, expire ao inclinar"
      },
      {
        name: "Variação com Rotação",
        instruction: "Adicione uma leve rotação durante a inclinação.",
        duration: "4 min",
        breathing: "Inspire ao preparar, expire ao inclinar"
      }
    ],
    adaptations: {
      back_pain: "Use uma faixa elástica mais leve e reduza a amplitude do movimento.",
      spinal_stiffness: "Adicione uma leve pressão com as mãos no quadril para aumentar o alongamento."
    },
    contraindications: ["herniated_disc", "spinal_instability"],
    imageUrl: "/images/exercises/spine-lateral-resistance.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "spine-twist-advanced",
    title: "Torção Integrada da Coluna",
    category: "back",
    difficulty: "advanced",
    duration: "10",
    targetConditions: ["back_pain", "spinal_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Sequência integrada de movimentos da coluna combinando torção, resistência e movimento dinâmico.",
    specificBenefit: "Melhora a coordenação, força e mobilidade da coluna de forma integrada.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as duas mãos na frente do peito.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Sequência Integrada",
        instruction: "Combine torção da coluna com elevação dos braços e resistência na faixa elástica.",
        duration: "4 min",
        breathing: "Inspire ao girar, expire ao retornar"
      },
      {
        name: "Variação Dinâmica",
        instruction: "Adicione movimentos circulares e diagonais mantendo a tensão e coordenação.",
        duration: "5 min",
        breathing: "Inspire ao girar, expire ao retornar"
      }
    ],
    adaptations: {
      back_pain: "Use uma faixa elástica mais leve e reduza a complexidade dos movimentos.",
      spinal_stiffness: "Adicione uma leve pressão com as mãos nos joelhos para aumentar o alongamento."
    },
    contraindications: ["herniated_disc", "spinal_instability"],
    imageUrl: "/images/exercises/spine-twist-integrated.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "spine-flexion-advanced",
    title: "Flexão Integrada da Coluna",
    category: "back",
    difficulty: "advanced",
    duration: "10",
    targetConditions: ["back_pain", "spinal_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Sequência integrada de movimentos da coluna combinando flexão, resistência e movimento dinâmico.",
    specificBenefit: "Fortalece os músculos das costas e melhora a coordenação de forma integrada.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as mãos na frente do peito.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Sequência Integrada",
        instruction: "Combine flexão da coluna com rotação e movimento dinâmico dos braços.",
        duration: "4 min",
        breathing: "Inspire ao preparar, expire ao dobrar"
      },
      {
        name: "Variação Dinâmica",
        instruction: "Adicione movimentos circulares e diagonais mantendo a tensão.",
        duration: "5 min",
        breathing: "Inspire ao preparar, expire ao dobrar"
      }
    ],
    adaptations: {
      back_pain: "Use uma faixa elástica mais leve e reduza a complexidade dos movimentos.",
      spinal_stiffness: "Adicione uma leve pressão com as mãos nos joelhos para aumentar o alongamento."
    },
    contraindications: ["herniated_disc", "spinal_instability"],
    imageUrl: "/images/exercises/spine-flexion-integrated.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "spine-extension-advanced",
    title: "Extensão Integrada da Coluna",
    category: "back",
    difficulty: "advanced",
    duration: "10",
    targetConditions: ["back_pain", "spinal_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Sequência integrada de movimentos da coluna combinando extensão, resistência e movimento dinâmico.",
    specificBenefit: "Fortalece os músculos das costas e melhora a postura de forma integrada.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as mãos atrás da cabeça.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Sequência Integrada",
        instruction: "Combine extensão da coluna com rotação e movimento dinâmico dos braços.",
        duration: "4 min",
        breathing: "Inspire ao preparar, expire ao arquear"
      },
      {
        name: "Variação Dinâmica",
        instruction: "Adicione movimentos circulares e diagonais mantendo a tensão.",
        duration: "5 min",
        breathing: "Inspire ao preparar, expire ao arquear"
      }
    ],
    adaptations: {
      back_pain: "Use uma faixa elástica mais leve e reduza a complexidade dos movimentos.",
      spinal_stiffness: "Adicione uma leve pressão com as mãos na parte inferior das costas para aumentar o alongamento."
    },
    contraindications: ["herniated_disc", "spinal_instability"],
    imageUrl: "/images/exercises/spine-extension-integrated.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "spine-lateral-advanced",
    title: "Inclinação Lateral Integrada da Coluna",
    category: "back",
    difficulty: "advanced",
    duration: "10",
    targetConditions: ["back_pain", "spinal_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Sequência integrada de movimentos da coluna combinando inclinação lateral, resistência e movimento dinâmico.",
    specificBenefit: "Fortalece os músculos laterais da coluna e melhora a coordenação de forma integrada.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as mãos na altura dos ombros.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Sequência Integrada",
        instruction: "Combine inclinação lateral da coluna com rotação e movimento dinâmico dos braços.",
        duration: "4 min",
        breathing: "Inspire ao preparar, expire ao inclinar"
      },
      {
        name: "Variação Dinâmica",
        instruction: "Adicione movimentos circulares e diagonais mantendo a tensão.",
        duration: "5 min",
        breathing: "Inspire ao preparar, expire ao inclinar"
      }
    ],
    adaptations: {
      back_pain: "Use uma faixa elástica mais leve e reduza a complexidade dos movimentos.",
      spinal_stiffness: "Adicione uma leve pressão com as mãos no quadril para aumentar o alongamento."
    },
    contraindications: ["herniated_disc", "spinal_instability"],
    imageUrl: "/images/exercises/spine-lateral-integrated.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  }
]; 