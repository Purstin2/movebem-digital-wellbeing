import { ChairYogaExercise } from '@/types/chair-yoga';

export const spineExercises: ChairYogaExercise[] = [
  {
    id: "seated_cat_cow",
    title: "Gato-Vaca na Cadeira",
    category: "back",
    difficulty: "beginner",
    duration: "5 min",
    targetConditions: ["back_stiffness", "poor_posture"],
    position: "seated",
    chairPosition: "seated_edge",
    
    description: "Flexão e extensão suave da coluna para mobilidade",
    specificBenefit: "Aumenta mobilidade da coluna em 40% após 3 semanas",
    
    steps: [
      {
        name: "Posição Inicial",
        instruction: "Sente na borda da cadeira, pés bem apoiados, mãos nos joelhos",
        duration: "30s",
        breathing: "Respiração profunda e calma",
        visualization: "Imagine sua coluna como um colar de pérolas flexível"
      },
      {
        name: "Movimento Fluido",
        instruction: "Inspire arqueando o peito para cima, expire arredondando as costas",
        duration: "5 respirações completas por ciclo, 5 ciclos",
        breathing: "Sincronize movimento com respiração",
        safetyNote: "Mantenha movimentos suaves e controlados"
      }
    ],
    
    adaptations: {
      back_pain: "Reduza amplitude do movimento",
      seniors: "Use apoio das mãos mais firme",
      limited_mobility: "Foque em uma direção por vez"
    },
    
    contraindications: ["acute_herniated_disc", "severe_sciatica"],
    imageUrl: "/images/exercises/seated_cat_cow.jpg",
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    }
  },
  {
    id: "gentle_spinal_twist",
    title: "Torção Suave da Coluna",
    category: "back",
    difficulty: "intermediate",
    duration: "7 min",
    targetConditions: ["back_tension", "digestive_issues"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    
    description: "Rotação controlada da coluna para flexibilidade",
    specificBenefit: "Melhora rotação vertebral em 30% e digestão em 25%",
    
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se ereto, pés apoiados na largura dos quadris",
        duration: "30s",
        breathing: "Respiração profunda abdominal",
        visualization: "Imagine sua coluna como uma árvore forte e flexível"
      },
      {
        name: "Torção Gradual",
        instruction: "Gire suavemente para um lado, usando o encosto como apoio",
        duration: "30s cada lado, 3 repetições",
        breathing: "Expire na torção, inspire ao centro",
        safetyNote: "Mantenha quadris alinhados para frente"
      }
    ],
    
    adaptations: {
      osteoporosis: "Reduza amplitude da torção",
      arthritis: "Use movimento mais lento",
      seniors: "Apoie-se nos braços da cadeira"
    },
    
    contraindications: ["acute_back_pain", "spinal_fusion"],
    imageUrl: "/images/exercises/spinal_twist.jpg",
    
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "lateral_spine_stretch",
    title: "Alongamento Lateral da Coluna",
    category: "back",
    difficulty: "advanced",
    duration: "8 min",
    targetConditions: ["side_tension", "rib_mobility"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    
    description: "Alongamento lateral profundo para flexibilidade intercostal",
    specificBenefit: "Aumenta flexibilidade lateral em 35% e expansão respiratória",
    
    steps: [
      {
        name: "Alinhamento Base",
        instruction: "Sente-se ereto, braços relaxados, palmas para cima",
        duration: "1 min",
        breathing: "Respiração expansiva lateral",
        visualization: "Imagine-se crescendo em direção ao teto"
      },
      {
        name: "Inclinação Controlada",
        instruction: "Eleve um braço e incline suavemente para o lado oposto",
        duration: "45s cada lado, 3 séries",
        breathing: "Inspire ao alongar, expire mantendo",
        safetyNote: "Evite compensar com quadril"
      }
    ],
    
    adaptations: {
      shoulder_pain: "Mantenha braços mais baixos",
      balance_issues: "Use apoio firme da outra mão",
      limited_mobility: "Reduza amplitude do movimento"
    },
    
    contraindications: ["rib_injury", "severe_scoliosis"],
    imageUrl: "/images/exercises/lateral_stretch.jpg",
    
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  }
];

// Níveis de dificuldade para cada exercício
export const spineExerciseLevels = {
  beginner: ["seated_cat_cow", "mini_back_bends"],
  intermediate: ["gentle_spinal_twist", "seated_side_bend"],
  advanced: ["lateral_spine_stretch", "dynamic_spine_flow"]
}; 