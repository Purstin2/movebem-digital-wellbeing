import { ChairYogaExercise } from '@/types/chair-yoga';

export const hipExercisesAdvanced: ChairYogaExercise[] = [
  {
    id: "hip_flexor_release",
    title: "Liberação dos Flexores do Quadril",
    category: "hips",
    difficulty: "intermediate",
    duration: "10 min",
    targetConditions: ["hip_flexor_tension", "lower_back_pain"],
    position: "seated",
    chairPosition: "seated_edge",
    
    description: "Sequência de liberação para flexores do quadril encurtados",
    specificBenefit: "Reduz tensão em 45% e melhora postura em 4 semanas",
    
    steps: [
      {
        name: "Preparação",
        instruction: "Sente na borda, uma perna estendida para trás",
        duration: "2 min",
        breathing: "Respiração profunda no abdômen",
        visualization: "Imagine os músculos derretendo como manteiga"
      },
      {
        name: "Báscula Pélvica",
        instruction: "Alterne entre anteriorização e posteriorização do quadril",
        duration: "1 min cada lado",
        breathing: "Expire na posteriorização",
        safetyNote: "Mantenha coluna neutra"
      },
      {
        name: "Alongamento Dinâmico",
        instruction: "Movimentos suaves de vai-e-vem na posição",
        duration: "2 min cada lado",
        breathing: "Sincronize respiração com movimento",
        safetyNote: "Evite compensar com lombar"
      }
    ],
    
    adaptations: {
      balance_issues: "Use apoio firme das mãos",
      knee_pain: "Mantenha joelho mais flexionado",
      seniors: "Reduza amplitude do movimento"
    },
    
    contraindications: ["hip_replacement", "acute_sciatica"],
    imageUrl: "/images/exercises/hip_flexor.jpg",
    
    chairRequirements: {
      backrest: false,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "hip_stability_sequence",
    title: "Sequência de Estabilidade do Quadril",
    category: "hips",
    difficulty: "advanced",
    duration: "15 min",
    targetConditions: ["hip_instability", "balance_issues"],
    position: "seated",
    chairPosition: "seated_edge",
    
    description: "Exercícios para força e controle do quadril",
    specificBenefit: "Aumenta estabilidade em 50% e reduz risco de queda",
    
    steps: [
      {
        name: "Ativação Glútea",
        instruction: "Contrações isométricas dos glúteos",
        duration: "3 min",
        breathing: "Expire na contração",
        visualization: "Imagine raízes fortes crescendo dos ísquios"
      },
      {
        name: "Elevação Unilateral",
        instruction: "Eleve um quadril de cada vez",
        duration: "2 min cada lado",
        breathing: "Mantenha respiração estável",
        safetyNote: "Mantenha core engajado"
      },
      {
        name: "Círculos Controlados",
        instruction: "Pequenos círculos com controle",
        duration: "1 min cada direção",
        breathing: "Respiração fluida",
        safetyNote: "Pare se sentir fadiga"
      }
    ],
    
    adaptations: {
      weakness: "Comece com movimentos menores",
      arthritis: "Evite carga total",
      dizziness: "Mantenha olhos fixos"
    },
    
    contraindications: ["recent_surgery", "severe_arthritis"],
    imageUrl: "/images/exercises/hip_stability.jpg",
    
    chairRequirements: {
      backrest: false,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "hip_mobility_flow",
    title: "Fluxo de Mobilidade do Quadril",
    category: "hips",
    difficulty: "advanced",
    duration: "12 min",
    targetConditions: ["reduced_mobility", "stiffness"],
    position: "seated",
    chairPosition: "seated_edge",
    
    description: "Sequência fluida para mobilidade completa do quadril",
    specificBenefit: "Melhora amplitude de movimento em todas direções em 40%",
    
    steps: [
      {
        name: "Aquecimento Articular",
        instruction: "Movimentos suaves em todas direções",
        duration: "3 min",
        breathing: "Respiração natural e fluida",
        visualization: "Seus quadris são pincéis pintando círculos"
      },
      {
        name: "Espirais Crescentes",
        instruction: "Círculos aumentando gradualmente",
        duration: "2 min cada direção",
        breathing: "Inspire expandindo, expire reduzindo",
        safetyNote: "Mantenha movimentos controlados"
      },
      {
        name: "Integração 3D",
        instruction: "Combine diferentes planos de movimento",
        duration: "3 min",
        breathing: "Sincronize com o fluxo",
        safetyNote: "Respeite seus limites"
      }
    ],
    
    adaptations: {
      limited_range: "Reduza amplitude",
      pain: "Foque em uma direção",
      seniors: "Use movimentos mais lentos"
    },
    
    contraindications: ["acute_injury", "severe_osteoarthritis"],
    imageUrl: "/images/exercises/hip_mobility.jpg",
    
    chairRequirements: {
      backrest: false,
      armrests: true,
      wheels: false
    }
  }
];

// Níveis de dificuldade para exercícios adicionais
export const hipExercisesAdvancedLevels = {
  beginner: ["gentle_release", "basic_awareness"],
  intermediate: ["hip_flexor_release", "stability_basics"],
  advanced: ["hip_stability_sequence", "hip_mobility_flow"]
}; 