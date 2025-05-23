import { ChairYogaExercise } from "@/types/chair-yoga";

export const neckExercises: ChairYogaExercise[] = [
  {
    id: "neck-rotation-beginner",
    title: "Rotação Suave do Pescoço",
    category: "neck",
    difficulty: "beginner",
    duration: "5",
    targetConditions: ["neck_pain", "cervical_arthritis"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento suave de rotação do pescoço para aliviar tensão e melhorar a mobilidade cervical.",
    specificBenefit: "Alivia tensão cervical e melhora a amplitude de movimento.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta, ombros relaxados e mãos apoiadas no colo.",
        duration: "1 min",
        breathing: "Respiração natural e suave"
      },
      {
        name: "Rotação Suave",
        instruction: "Gire a cabeça lentamente para a direita, mantendo o queixo paralelo ao chão. Pare quando sentir qualquer desconforto.",
        duration: "2 min",
        breathing: "Inspire ao girar, expire ao retornar"
      },
      {
        name: "Retorno",
        instruction: "Retorne lentamente ao centro e repita para o lado esquerdo.",
        duration: "2 min",
        breathing: "Inspire ao girar, expire ao retornar"
      }
    ],
    adaptations: {
      neck_pain: "Reduza a amplitude do movimento e faça pausas mais longas entre as repetições.",
      cervical_arthritis: "Use um travesseiro cervical para apoio adicional e reduza a amplitude do movimento."
    },
    contraindications: ["instabilidade_cervical", "hérnia_cervical_aguda"],
    imageUrl: "/images/exercises/neck-rotation.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "neck-tilt-beginner",
    title: "Inclinação Lateral do Pescoço",
    category: "neck",
    difficulty: "beginner",
    duration: "5",
    targetConditions: ["neck_pain", "tension_headaches"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento suave de inclinação lateral do pescoço para alongar os músculos cervicais.",
    specificBenefit: "Alonga os músculos laterais do pescoço e reduz tensão.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e ombros relaxados.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Inclinação Direita",
        instruction: "Incline suavemente a cabeça em direção ao ombro direito, mantendo os ombros relaxados.",
        duration: "2 min",
        breathing: "Inspire ao inclinar, expire ao retornar"
      },
      {
        name: "Inclinação Esquerda",
        instruction: "Retorne ao centro e repita para o lado esquerdo.",
        duration: "2 min",
        breathing: "Inspire ao inclinar, expire ao retornar"
      }
    ],
    adaptations: {
      neck_pain: "Use as mãos para suporte adicional e reduza a amplitude do movimento.",
      tension_headaches: "Adicione uma leve pressão com a mão no lado oposto para aumentar o alongamento."
    },
    contraindications: ["instabilidade_cervical", "vertigem"],
    imageUrl: "/images/exercises/neck-tilt.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "neck-extension-beginner",
    title: "Extensão Suave do Pescoço",
    category: "neck",
    difficulty: "beginner",
    duration: "5",
    targetConditions: ["neck_pain", "forward_head_posture"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento suave de extensão do pescoço para corrigir a postura da cabeça para frente.",
    specificBenefit: "Fortalece os músculos posteriores do pescoço e melhora a postura.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e ombros relaxados.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Extensão",
        instruction: "Mova suavemente a cabeça para trás, como se estivesse fazendo um duplo queixo.",
        duration: "2 min",
        breathing: "Inspire ao mover para trás, expire ao retornar"
      },
      {
        name: "Retorno",
        instruction: "Retorne suavemente à posição inicial.",
        duration: "2 min",
        breathing: "Inspire ao mover para trás, expire ao retornar"
      }
    ],
    adaptations: {
      neck_pain: "Reduza a amplitude do movimento e use as mãos para suporte.",
      forward_head_posture: "Mantenha a posição por alguns segundos antes de retornar."
    },
    contraindications: ["instabilidade_cervical", "hérnia_cervical"],
    imageUrl: "/images/exercises/neck-extension.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "neck-flexion-beginner",
    title: "Flexão Suave do Pescoço",
    category: "neck",
    difficulty: "beginner",
    duration: "5",
    targetConditions: ["neck_pain", "tension_headaches"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Movimento suave de flexão do pescoço para alongar os músculos posteriores.",
    specificBenefit: "Alonga os músculos posteriores do pescoço e reduz tensão.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e ombros relaxados.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Flexão",
        instruction: "Incline suavemente a cabeça para frente, levando o queixo em direção ao peito.",
        duration: "2 min",
        breathing: "Inspire ao inclinar, expire ao retornar"
      },
      {
        name: "Retorno",
        instruction: "Retorne suavemente à posição inicial.",
        duration: "2 min",
        breathing: "Inspire ao inclinar, expire ao retornar"
      }
    ],
    adaptations: {
      neck_pain: "Use as mãos para suporte e reduza a amplitude do movimento.",
      tension_headaches: "Adicione uma leve pressão com as mãos na parte posterior da cabeça."
    },
    contraindications: ["instabilidade_cervical", "vertigem"],
    imageUrl: "/images/exercises/neck-flexion.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "neck-rotation-intermediate",
    title: "Rotação Cervical com Resistência",
    category: "neck",
    difficulty: "intermediate",
    duration: "8",
    targetConditions: ["neck_pain", "cervical_arthritis"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Rotação do pescoço com resistência manual para fortalecimento e melhora da mobilidade.",
    specificBenefit: "Fortalece os músculos rotadores do pescoço e melhora a estabilidade cervical.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e coloque a mão direita na lateral da cabeça.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Rotação com Resistência",
        instruction: "Gire a cabeça para a direita enquanto aplica uma leve resistência com a mão. Mantenha por 5 segundos.",
        duration: "3 min",
        breathing: "Inspire ao girar, expire ao manter a posição"
      },
      {
        name: "Retorno Controlado",
        instruction: "Retorne ao centro com movimento controlado e repita para o lado esquerdo.",
        duration: "4 min",
        breathing: "Inspire ao girar, expire ao manter a posição"
      }
    ],
    adaptations: {
      neck_pain: "Reduza a intensidade da resistência e aumente o tempo de pausa entre as repetições.",
      cervical_arthritis: "Use uma toalha enrolada para apoio adicional e reduza a intensidade da resistência."
    },
    contraindications: ["instabilidade_cervical", "hérnia_cervical_aguda"],
    imageUrl: "/images/exercises/neck-rotation-resistance.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "neck-tilt-intermediate",
    title: "Inclinação Lateral com Alongamento",
    category: "neck",
    difficulty: "intermediate",
    duration: "8",
    targetConditions: ["neck_pain", "tension_headaches"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Inclinação lateral do pescoço com alongamento adicional para maior flexibilidade.",
    specificBenefit: "Aumenta a flexibilidade lateral do pescoço e reduz tensão muscular.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e coloque a mão direita sobre a cabeça.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Inclinação com Alongamento",
        instruction: "Incline a cabeça para a direita enquanto aplica uma leve pressão com a mão. Mantenha por 10 segundos.",
        duration: "3 min",
        breathing: "Inspire ao inclinar, expire ao manter a posição"
      },
      {
        name: "Retorno e Repetição",
        instruction: "Retorne ao centro e repita para o lado esquerdo.",
        duration: "4 min",
        breathing: "Inspire ao inclinar, expire ao manter a posição"
      }
    ],
    adaptations: {
      neck_pain: "Reduza a intensidade do alongamento e aumente o tempo de pausa entre as repetições.",
      tension_headaches: "Adicione uma leve pressão com a mão oposta para aumentar o alongamento gradualmente."
    },
    contraindications: ["instabilidade_cervical", "vertigem"],
    imageUrl: "/images/exercises/neck-tilt-stretch.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "neck-extension-intermediate",
    title: "Extensão Cervical com Controle",
    category: "neck",
    difficulty: "intermediate",
    duration: "8",
    targetConditions: ["neck_pain", "forward_head_posture"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Extensão do pescoço com controle muscular para fortalecimento e correção postural.",
    specificBenefit: "Fortalece os músculos extensores do pescoço e melhora o alinhamento postural.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e coloque as mãos atrás da cabeça.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Extensão Controlada",
        instruction: "Mova a cabeça para trás contra a resistência das mãos, mantendo o queixo paralelo ao chão.",
        duration: "3 min",
        breathing: "Inspire ao mover para trás, expire ao manter a posição"
      },
      {
        name: "Retorno Gradual",
        instruction: "Retorne à posição inicial com movimento controlado.",
        duration: "4 min",
        breathing: "Inspire ao mover para trás, expire ao retornar"
      }
    ],
    adaptations: {
      neck_pain: "Reduza a intensidade da resistência e aumente o tempo de pausa entre as repetições.",
      forward_head_posture: "Mantenha a posição por mais tempo para fortalecimento adicional."
    },
    contraindications: ["instabilidade_cervical", "hérnia_cervical"],
    imageUrl: "/images/exercises/neck-extension-control.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "neck-flexion-intermediate",
    title: "Flexão Cervical com Resistência",
    category: "neck",
    difficulty: "intermediate",
    duration: "8",
    targetConditions: ["neck_pain", "tension_headaches"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Flexão do pescoço com resistência manual para fortalecimento e alongamento.",
    specificBenefit: "Fortalece os músculos flexores do pescoço e melhora a flexibilidade.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e coloque as mãos na testa.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Flexão com Resistência",
        instruction: "Incline a cabeça para frente contra a leve resistência das mãos.",
        duration: "3 min",
        breathing: "Inspire ao inclinar, expire ao manter a posição"
      },
      {
        name: "Retorno Controlado",
        instruction: "Retorne à posição inicial com movimento controlado.",
        duration: "4 min",
        breathing: "Inspire ao inclinar, expire ao retornar"
      }
    ],
    adaptations: {
      neck_pain: "Reduza a intensidade da resistência e aumente o tempo de pausa entre as repetições.",
      tension_headaches: "Adicione uma leve pressão com as mãos para aumentar o alongamento gradualmente."
    },
    contraindications: ["instabilidade_cervical", "vertigem"],
    imageUrl: "/images/exercises/neck-flexion-resistance.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "neck-rotation-advanced",
    title: "Rotação Cervical Dinâmica",
    category: "neck",
    difficulty: "advanced",
    duration: "10",
    targetConditions: ["neck_pain", "cervical_arthritis"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Sequência dinâmica de rotação do pescoço com coordenação respiratória e controle muscular.",
    specificBenefit: "Melhora a coordenação, força e mobilidade cervical.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e coloque as mãos nos ombros.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Rotação Dinâmica",
        instruction: "Gire a cabeça para a direita enquanto eleva o ombro direito. Mantenha por 3 segundos.",
        duration: "4 min",
        breathing: "Inspire ao girar, expire ao manter a posição"
      },
      {
        name: "Retorno e Repetição",
        instruction: "Retorne ao centro e repita para o lado esquerdo com coordenação oposta.",
        duration: "5 min",
        breathing: "Inspire ao girar, expire ao manter a posição"
      }
    ],
    adaptations: {
      neck_pain: "Reduza a amplitude do movimento e aumente o tempo de pausa entre as repetições.",
      cervical_arthritis: "Use um travesseiro cervical para apoio e reduza a amplitude do movimento."
    },
    contraindications: ["instabilidade_cervical", "hérnia_cervical_aguda"],
    imageUrl: "/images/exercises/neck-rotation-dynamic.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "neck-tilt-advanced",
    title: "Inclinação Lateral Integrada",
    category: "neck",
    difficulty: "advanced",
    duration: "10",
    targetConditions: ["neck_pain", "tension_headaches"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Sequência integrada de inclinação lateral com coordenação de braços e respiração.",
    specificBenefit: "Melhora a coordenação e força lateral do pescoço.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e estenda os braços lateralmente.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Inclinação Integrada",
        instruction: "Incline a cabeça para a direita enquanto eleva o braço esquerdo. Mantenha por 5 segundos.",
        duration: "4 min",
        breathing: "Inspire ao inclinar, expire ao manter a posição"
      },
      {
        name: "Retorno e Repetição",
        instruction: "Retorne ao centro e repita para o lado esquerdo com coordenação oposta.",
        duration: "5 min",
        breathing: "Inspire ao inclinar, expire ao manter a posição"
      }
    ],
    adaptations: {
      neck_pain: "Reduza a amplitude do movimento e aumente o tempo de pausa entre as repetições.",
      tension_headaches: "Adicione uma leve pressão com a mão oposta para aumentar o alongamento gradualmente."
    },
    contraindications: ["instabilidade_cervical", "vertigem"],
    imageUrl: "/images/exercises/neck-tilt-integrated.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "neck-extension-advanced",
    title: "Extensão Cervical Integrada",
    category: "neck",
    difficulty: "advanced",
    duration: "10",
    targetConditions: ["neck_pain", "forward_head_posture"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Sequência integrada de extensão do pescoço com coordenação de braços e respiração.",
    specificBenefit: "Fortalece os músculos extensores e melhora a postura geral.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e coloque as mãos atrás da cabeça.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Extensão Integrada",
        instruction: "Mova a cabeça para trás enquanto eleva os cotovelos. Mantenha por 5 segundos.",
        duration: "4 min",
        breathing: "Inspire ao mover para trás, expire ao manter a posição"
      },
      {
        name: "Retorno Controlado",
        instruction: "Retorne à posição inicial com movimento controlado.",
        duration: "5 min",
        breathing: "Inspire ao mover para trás, expire ao retornar"
      }
    ],
    adaptations: {
      neck_pain: "Reduza a amplitude do movimento e aumente o tempo de pausa entre as repetições.",
      forward_head_posture: "Mantenha a posição por mais tempo para fortalecimento adicional."
    },
    contraindications: ["instabilidade_cervical", "hérnia_cervical"],
    imageUrl: "/images/exercises/neck-extension-integrated.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "neck-flexion-advanced",
    title: "Flexão Cervical Integrada",
    category: "neck",
    difficulty: "advanced",
    duration: "10",
    targetConditions: ["neck_pain", "tension_headaches"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    description: "Sequência integrada de flexão do pescoço com coordenação de braços e respiração.",
    specificBenefit: "Fortalece os músculos flexores e melhora a coordenação geral.",
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com a coluna ereta e coloque as mãos na testa.",
        duration: "1 min",
        breathing: "Respiração natural"
      },
      {
        name: "Flexão Integrada",
        instruction: "Incline a cabeça para frente enquanto pressiona suavemente com as mãos. Mantenha por 5 segundos.",
        duration: "4 min",
        breathing: "Inspire ao inclinar, expire ao manter a posição"
      },
      {
        name: "Retorno Controlado",
        instruction: "Retorne à posição inicial com movimento controlado.",
        duration: "5 min",
        breathing: "Inspire ao inclinar, expire ao retornar"
      }
    ],
    adaptations: {
      neck_pain: "Reduza a intensidade da pressão e aumente o tempo de pausa entre as repetições.",
      tension_headaches: "Adicione uma leve pressão com as mãos para aumentar o alongamento gradualmente."
    },
    contraindications: ["instabilidade_cervical", "vertigem"],
    imageUrl: "/images/exercises/neck-flexion-integrated.jpg",
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  }
]; 