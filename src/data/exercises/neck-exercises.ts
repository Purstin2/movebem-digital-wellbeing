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
  }
]; 