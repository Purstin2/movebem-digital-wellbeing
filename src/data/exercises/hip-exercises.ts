import { ChairYogaExercise } from "@/types/chair-yoga";

export const hipExercises: ChairYogaExercise[] = [
  {
    id: "hip-flexion-beginner",
    title: "Flexão Suave do Quadril",
    category: "hips",
    difficulty: "beginner",
    duration: "5",
    targetConditions: ["hip_pain", "hip_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento suave de flexão do quadril para melhorar a mobilidade e aliviar tensão.",
    specificBenefit: "Melhora a mobilidade do quadril e reduz tensão muscular.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e mãos apoiadas no colo.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Flexão Suave",
        instruction: "Eleve suavemente um joelho em direção ao peito, mantendo a coluna ereta.",
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
      hip_pain: "Reduza a amplitude do movimento e use o encosto da cadeira para apoio.",
      hip_stiffness: "Adicione uma leve pressão com as mãos no joelho para aumentar o alongamento."
    },
    contraindications: ["hip_replacement", "acute_hip_injury"],
    imageUrl: "/images/exercises/hip-flexion.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "hip-extension-beginner",
    title: "Extensão Suave do Quadril",
    category: "hips",
    difficulty: "beginner",
    duration: "5",
    targetConditions: ["hip_pain", "hip_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento suave de extensão do quadril para alongar e relaxar.",
    specificBenefit: "Alonga os músculos do quadril e melhora a flexibilidade.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e mãos apoiadas no colo.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Extensão Suave",
        instruction: "Estenda suavemente uma perna para trás, mantendo a coluna ereta.",
        duration: "2 min",
        breathing: "Inspire ao preparar, expire ao estender"
      },
      {
        name: "Retorno",
        instruction: "Retorne suavemente à posição inicial.",
        duration: "2 min",
        breathing: "Inspire ao preparar, expire ao estender"
      }
    ],
    adaptations: {
      hip_pain: "Reduza a amplitude do movimento e use o encosto da cadeira para apoio.",
      hip_stiffness: "Adicione uma leve pressão com as mãos na coxa para aumentar o alongamento."
    },
    contraindications: ["hip_replacement", "acute_hip_injury"],
    imageUrl: "/images/exercises/hip-extension.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "hip-abduction-beginner",
    title: "Abdução Suave do Quadril",
    category: "hips",
    difficulty: "beginner",
    duration: "5",
    targetConditions: ["hip_pain", "hip_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento suave de abdução do quadril para fortalecer e alongar.",
    specificBenefit: "Fortalece os músculos abductores do quadril e melhora a estabilidade.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e mãos apoiadas no colo.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Abdução Suave",
        instruction: "Abra suavemente uma perna para o lado, mantendo a coluna ereta.",
        duration: "2 min",
        breathing: "Inspire ao preparar, expire ao abrir"
      },
      {
        name: "Retorno",
        instruction: "Retorne suavemente à posição inicial.",
        duration: "2 min",
        breathing: "Inspire ao preparar, expire ao abrir"
      }
    ],
    adaptations: {
      hip_pain: "Reduza a amplitude do movimento e use o encosto da cadeira para apoio.",
      hip_stiffness: "Adicione uma leve pressão com as mãos na coxa para aumentar o alongamento."
    },
    contraindications: ["hip_replacement", "acute_hip_injury"],
    imageUrl: "/images/exercises/hip-abduction.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "hip-rotation-beginner",
    title: "Rotação Suave do Quadril",
    category: "hips",
    difficulty: "beginner",
    duration: "5",
    targetConditions: ["hip_pain", "hip_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento suave de rotação do quadril para alongar e relaxar.",
    specificBenefit: "Alonga os músculos rotadores do quadril e melhora a mobilidade.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e mãos apoiadas no colo.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Rotação Suave",
        instruction: "Gire suavemente uma perna para dentro e para fora, mantendo a coluna ereta.",
        duration: "2 min",
        breathing: "Inspire ao preparar, expire ao girar"
      },
      {
        name: "Retorno",
        instruction: "Retorne suavemente à posição inicial.",
        duration: "2 min",
        breathing: "Inspire ao preparar, expire ao girar"
      }
    ],
    adaptations: {
      hip_pain: "Reduza a amplitude do movimento e use o encosto da cadeira para apoio.",
      hip_stiffness: "Adicione uma leve pressão com as mãos no joelho para aumentar o alongamento."
    },
    contraindications: ["hip_replacement", "acute_hip_injury"],
    imageUrl: "/images/exercises/hip-rotation.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "hip-flexion-intermediate",
    title: "Flexão do Quadril com Resistência",
    category: "hips",
    difficulty: "intermediate",
    duration: "8",
    targetConditions: ["hip_pain", "hip_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento de flexão do quadril com resistência suave para fortalecer e melhorar a mobilidade.",
    specificBenefit: "Fortalece os músculos flexores do quadril e melhora a amplitude de movimento.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as mãos na frente do joelho.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Flexão com Resistência",
        instruction: "Eleve o joelho em direção ao peito, mantendo a tensão na faixa elástica.",
        duration: "3 min",
        breathing: "Inspire ao elevar, expire ao descer"
      },
      {
        name: "Variação com Rotação",
        instruction: "Adicione uma leve rotação do quadril durante a flexão.",
        duration: "4 min",
        breathing: "Inspire ao elevar, expire ao descer"
      }
    ],
    adaptations: {
      hip_pain: "Use uma faixa elástica mais leve e reduza a amplitude do movimento.",
      hip_stiffness: "Adicione uma leve pressão com as mãos no joelho para aumentar o alongamento."
    },
    contraindications: ["hip_replacement", "acute_hip_injury"],
    imageUrl: "/images/exercises/hip-flexion-resistance.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "hip-extension-intermediate",
    title: "Extensão do Quadril com Resistência",
    category: "hips",
    difficulty: "intermediate",
    duration: "8",
    targetConditions: ["hip_pain", "hip_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento de extensão do quadril com resistência suave para fortalecer e alongar.",
    specificBenefit: "Fortalece os músculos extensores do quadril e melhora a flexibilidade.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as mãos atrás do joelho.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Extensão com Resistência",
        instruction: "Estenda a perna para trás, mantendo a tensão na faixa elástica.",
        duration: "3 min",
        breathing: "Inspire ao preparar, expire ao estender"
      },
      {
        name: "Variação com Rotação",
        instruction: "Adicione uma leve rotação do quadril durante a extensão.",
        duration: "4 min",
        breathing: "Inspire ao preparar, expire ao estender"
      }
    ],
    adaptations: {
      hip_pain: "Use uma faixa elástica mais leve e reduza a amplitude do movimento.",
      hip_stiffness: "Adicione uma leve pressão com as mãos na coxa para aumentar o alongamento."
    },
    contraindications: ["hip_replacement", "acute_hip_injury"],
    imageUrl: "/images/exercises/hip-extension-resistance.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "hip-abduction-intermediate",
    title: "Abdução do Quadril com Resistência",
    category: "hips",
    difficulty: "intermediate",
    duration: "8",
    targetConditions: ["hip_pain", "hip_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento de abdução do quadril com resistência suave para fortalecer e alongar.",
    specificBenefit: "Fortalece os músculos abductores do quadril e melhora a estabilidade.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as mãos na lateral do joelho.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Abdução com Resistência",
        instruction: "Abra a perna para o lado, mantendo a tensão na faixa elástica.",
        duration: "3 min",
        breathing: "Inspire ao preparar, expire ao abrir"
      },
      {
        name: "Variação com Rotação",
        instruction: "Adicione uma leve rotação do quadril durante a abdução.",
        duration: "4 min",
        breathing: "Inspire ao preparar, expire ao abrir"
      }
    ],
    adaptations: {
      hip_pain: "Use uma faixa elástica mais leve e reduza a amplitude do movimento.",
      hip_stiffness: "Adicione uma leve pressão com as mãos na coxa para aumentar o alongamento."
    },
    contraindications: ["hip_replacement", "acute_hip_injury"],
    imageUrl: "/images/exercises/hip-abduction-resistance.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "hip-rotation-intermediate",
    title: "Rotação do Quadril com Resistência",
    category: "hips",
    difficulty: "intermediate",
    duration: "8",
    targetConditions: ["hip_pain", "hip_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento de rotação do quadril com resistência suave para fortalecer e alongar.",
    specificBenefit: "Fortalece os músculos rotadores do quadril e melhora a mobilidade.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as mãos no joelho.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Rotação com Resistência",
        instruction: "Gire a perna para dentro e para fora, mantendo a tensão na faixa elástica.",
        duration: "3 min",
        breathing: "Inspire ao preparar, expire ao girar"
      },
      {
        name: "Variação com Elevação",
        instruction: "Adicione uma leve elevação do joelho durante a rotação.",
        duration: "4 min",
        breathing: "Inspire ao preparar, expire ao girar"
      }
    ],
    adaptations: {
      hip_pain: "Use uma faixa elástica mais leve e reduza a amplitude do movimento.",
      hip_stiffness: "Adicione uma leve pressão com as mãos no joelho para aumentar o alongamento."
    },
    contraindications: ["hip_replacement", "acute_hip_injury"],
    imageUrl: "/images/exercises/hip-rotation-resistance.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "hip-flexion-advanced",
    title: "Flexão Integrada do Quadril",
    category: "hips",
    difficulty: "advanced",
    duration: "10",
    targetConditions: ["hip_pain", "hip_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Sequência integrada de movimentos para fortalecer e melhorar a mobilidade do quadril.",
    specificBenefit: "Fortalece os músculos do quadril e melhora a coordenação e equilíbrio.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as mãos na frente do joelho.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Flexão com Rotação",
        instruction: "Eleve o joelho em direção ao peito enquanto gira o quadril.",
        duration: "3 min",
        breathing: "Inspire ao elevar, expire ao descer"
      },
      {
        name: "Sequência Integrada",
        instruction: "Combine flexão, rotação e extensão em um movimento fluido.",
        duration: "6 min",
        breathing: "Inspire ao elevar, expire ao descer"
      }
    ],
    adaptations: {
      hip_pain: "Reduza a amplitude do movimento e use uma faixa elástica mais leve.",
      hip_stiffness: "Adicione pausas entre os movimentos para alongamento."
    },
    contraindications: ["hip_replacement", "acute_hip_injury"],
    imageUrl: "/images/exercises/hip-flexion-integrated.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "hip-extension-advanced",
    title: "Extensão Integrada do Quadril",
    category: "hips",
    difficulty: "advanced",
    duration: "10",
    targetConditions: ["hip_pain", "hip_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Sequência integrada de movimentos para fortalecer e alongar os músculos do quadril.",
    specificBenefit: "Fortalece os músculos extensores e melhora a coordenação e equilíbrio.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as mãos atrás do joelho.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Extensão com Rotação",
        instruction: "Estenda a perna para trás enquanto gira o quadril.",
        duration: "3 min",
        breathing: "Inspire ao preparar, expire ao estender"
      },
      {
        name: "Sequência Integrada",
        instruction: "Combine extensão, rotação e flexão em um movimento fluido.",
        duration: "6 min",
        breathing: "Inspire ao preparar, expire ao estender"
      }
    ],
    adaptations: {
      hip_pain: "Reduza a amplitude do movimento e use uma faixa elástica mais leve.",
      hip_stiffness: "Adicione pausas entre os movimentos para alongamento."
    },
    contraindications: ["hip_replacement", "acute_hip_injury"],
    imageUrl: "/images/exercises/hip-extension-integrated.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "hip-abduction-advanced",
    title: "Abdução Integrada do Quadril",
    category: "hips",
    difficulty: "advanced",
    duration: "10",
    targetConditions: ["hip_pain", "hip_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Sequência integrada de movimentos para fortalecer e alongar os músculos abductores.",
    specificBenefit: "Fortalece os músculos abductores e melhora a coordenação e equilíbrio.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as mãos na lateral do joelho.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Abdução com Rotação",
        instruction: "Abra a perna para o lado enquanto gira o quadril.",
        duration: "3 min",
        breathing: "Inspire ao preparar, expire ao abrir"
      },
      {
        name: "Sequência Integrada",
        instruction: "Combine abdução, rotação e adução em um movimento fluido.",
        duration: "6 min",
        breathing: "Inspire ao preparar, expire ao abrir"
      }
    ],
    adaptations: {
      hip_pain: "Reduza a amplitude do movimento e use uma faixa elástica mais leve.",
      hip_stiffness: "Adicione pausas entre os movimentos para alongamento."
    },
    contraindications: ["hip_replacement", "acute_hip_injury"],
    imageUrl: "/images/exercises/hip-abduction-integrated.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "hip-rotation-advanced",
    title: "Rotação Integrada do Quadril",
    category: "hips",
    difficulty: "advanced",
    duration: "10",
    targetConditions: ["hip_pain", "hip_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Sequência integrada de movimentos para fortalecer e alongar os músculos rotadores.",
    specificBenefit: "Fortalece os músculos rotadores e melhora a coordenação e equilíbrio.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e segure uma faixa elástica com as mãos no joelho.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Rotação com Elevação",
        instruction: "Gire a perna para dentro e para fora enquanto eleva o joelho.",
        duration: "3 min",
        breathing: "Inspire ao preparar, expire ao girar"
      },
      {
        name: "Sequência Integrada",
        instruction: "Combine rotação, elevação e extensão em um movimento fluido.",
        duration: "6 min",
        breathing: "Inspire ao preparar, expire ao girar"
      }
    ],
    adaptations: {
      hip_pain: "Reduza a amplitude do movimento e use uma faixa elástica mais leve.",
      hip_stiffness: "Adicione pausas entre os movimentos para alongamento."
    },
    contraindications: ["hip_replacement", "acute_hip_injury"],
    imageUrl: "/images/exercises/hip-rotation-integrated.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  }
]; 