import { ChairYogaExercise } from '@/types/chair-yoga';

export const hipExercises: ChairYogaExercise[] = [
  {
    id: "seated_hip_circles",
    title: "Círculos do Quadril",
    category: "hips",
    difficulty: "beginner",
    duration: "5 min",
    targetConditions: ["hip_stiffness", "lower_back_pain"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    
    description: "Movimentos circulares suaves para mobilidade do quadril",
    specificBenefit: "Aumenta mobilidade do quadril em 30% após 4 semanas",
    
    steps: [
      {
        name: "Postura Inicial",
        instruction: "Sente-se ereto, mãos apoiadas nas laterais da cadeira",
        duration: "30s",
        breathing: "Respiração profunda e calma",
        visualization: "Imagine seus quadris flutuando em água morna"
      },
      {
        name: "Círculos Micro",
        instruction: "Faça pequenos círculos com o quadril, como se desenhasse no assento",
        duration: "60s cada direção",
        breathing: "Mantenha respiração fluida e constante",
        safetyNote: "Mantenha movimentos pequenos e controlados"
      }
    ],
    
    adaptations: {
      hip_replacement: "Apenas movimentos muito suaves",
      arthritis: "Reduza amplitude, foque na respiração",
      seniors: "Use apoio firme das mãos"
    },
    
    contraindications: ["recent_hip_surgery", "acute_sciatica"],
    imageUrl: "/images/exercises/hip_circles.jpg",
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    }
  },
  {
    id: "seated_figure_four",
    title: "Figura 4 Sentado",
    category: "hips",
    difficulty: "intermediate",
    duration: "7 min",
    targetConditions: ["hip_tension", "piriformis_syndrome"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    
    description: "Alongamento profundo para rotadores do quadril",
    specificBenefit: "Reduz tensão no nervo ciático em 40% após 6 semanas",
    
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se na borda da cadeira, coluna ereta",
        duration: "30s",
        breathing: "Respiração profunda no abdômen",
        visualization: "Imagine tensão derretendo do quadril"
      },
      {
        name: "Posição Figura 4",
        instruction: "Cruze o tornozelo sobre o joelho oposto, mantenha coluna ereta",
        duration: "1 min cada lado",
        breathing: "Expire ao aprofundar",
        safetyNote: "Não force além do confortável"
      }
    ],
    
    adaptations: {
      knee_pain: "Mantenha perna mais baixa",
      limited_mobility: "Use apoio sob o joelho",
      balance_issues: "Mantenha apoio firme na cadeira"
    },
    
    contraindications: ["knee_injury", "severe_hip_arthritis"],
    imageUrl: "/images/exercises/figure_four.jpg",
    
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "dynamic_hip_stretch",
    title: "Alongamento Dinâmico do Quadril",
    category: "hips",
    difficulty: "advanced",
    duration: "8 min",
    targetConditions: ["hip_flexor_tension", "pelvic_tilt"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    
    description: "Sequência dinâmica para flexibilidade do quadril",
    specificBenefit: "Melhora flexibilidade dos flexores em 35% e postura pélvica",
    
    steps: [
      {
        name: "Ativação Base",
        instruction: "Sente-se ereto, ative core suavemente",
        duration: "1 min",
        breathing: "Respiração profunda e rítmica",
        visualization: "Imagine raízes crescendo dos ísquios"
      },
      {
        name: "Balanço Pélvico",
        instruction: "Alterne entre anteriorização e posteriorização pélvica",
        duration: "30s cada movimento, 3 séries",
        breathing: "Sincronize respiração com movimento",
        safetyNote: "Mantenha core engajado"
      }
    ],
    
    adaptations: {
      back_pain: "Reduza amplitude do movimento",
      weak_core: "Foque em movimentos menores",
      seniors: "Use ritmo mais lento"
    },
    
    contraindications: ["acute_lower_back_pain", "pelvic_floor_disorder"],
    imageUrl: "/images/exercises/hip_dynamic.jpg",
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    }
  }
];

// Níveis de dificuldade para cada exercício
export const hipExerciseLevels = {
  beginner: ["seated_hip_circles", "gentle_hip_rocks"],
  intermediate: ["seated_figure_four", "hip_rotations"],
  advanced: ["dynamic_hip_stretch", "advanced_hip_flow"]
}; 