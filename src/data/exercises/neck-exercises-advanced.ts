import { ChairYogaExercise } from '@/types/chair-yoga';

export const neckExercisesAdvanced: ChairYogaExercise[] = [
  {
    id: "neck_isometric_sequence",
    title: "Sequência Isométrica Cervical",
    category: "neck",
    difficulty: "intermediate",
    duration: "8 min",
    targetConditions: ["neck_weakness", "cervical_instability"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    
    description: "Série de contrações isométricas para fortalecimento cervical",
    specificBenefit: "Aumenta força e estabilidade cervical em 35% em 8 semanas",
    
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com postura neutra, ombros relaxados",
        duration: "1 min",
        breathing: "Respiração diafragmática calma",
        visualization: "Imagine um fio de ouro alinhando sua coluna"
      },
      {
        name: "Resistência Multidirecional",
        instruction: "Aplique pressão suave com a mão em diferentes direções da cabeça",
        duration: "10s cada direção, 3 séries",
        breathing: "Mantenha respiração constante",
        safetyNote: "Use apenas 20% da força máxima"
      },
      {
        name: "Integração",
        instruction: "Movimentos lentos entre as posições de resistência",
        duration: "2 min",
        breathing: "Sincronize respiração com transições",
        safetyNote: "Evite movimentos bruscos"
      }
    ],
    
    adaptations: {
      headaches: "Reduza tempo de contração para 5s",
      dizziness: "Faça apenas contrações horizontais",
      seniors: "Use apoio de travesseiro"
    },
    
    contraindications: ["acute_migraine", "vertebral_instability"],
    imageUrl: "/images/exercises/neck_isometric.jpg",
    
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "neck_mobility_sequence",
    title: "Sequência de Mobilidade Cervical",
    category: "neck",
    difficulty: "advanced",
    duration: "12 min",
    targetConditions: ["reduced_mobility", "chronic_stiffness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    
    description: "Sequência fluida de movimentos para mobilidade cervical completa",
    specificBenefit: "Melhora amplitude de movimento em todas direções em 45%",
    
    steps: [
      {
        name: "Aquecimento Consciente",
        instruction: "Movimentos microscópicos em todas direções",
        duration: "3 min",
        breathing: "Respiração oceânica suave",
        visualization: "Seu pescoço é uma flor se abrindo ao sol"
      },
      {
        name: "Espirais Crescentes",
        instruction: "Movimentos em espiral, aumentando gradualmente",
        duration: "4 min",
        breathing: "Inspire na expansão, expire na redução",
        safetyNote: "Mantenha movimentos fluidos e controlados"
      },
      {
        name: "Integração Final",
        instruction: "Combine todos os planos de movimento",
        duration: "3 min",
        breathing: "Respiração livre e natural",
        safetyNote: "Respeite seus limites"
      }
    ],
    
    adaptations: {
      vertigo: "Mantenha olhos abertos, movimentos menores",
      tension: "Adicione pausas entre movimentos",
      arthritis: "Use amplitude reduzida"
    },
    
    contraindications: ["acute_injury", "severe_dizziness"],
    imageUrl: "/images/exercises/neck_mobility_sequence.jpg",
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    }
  },
  {
    id: "therapeutic_neck_release",
    title: "Liberação Terapêutica Cervical",
    category: "neck",
    difficulty: "beginner",
    duration: "10 min",
    targetConditions: ["tension_headaches", "stress_related_pain"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    
    description: "Sequência suave de liberação para tensão cervical",
    specificBenefit: "Reduz dor e tensão em 50% após primeira sessão",
    
    steps: [
      {
        name: "Respiração Inicial",
        instruction: "Estabeleça respiração profunda e lenta",
        duration: "2 min",
        breathing: "4 segundos inspira, 6 segundos expira",
        visualization: "Imagine luz azul curativa no pescoço"
      },
      {
        name: "Liberação Guiada",
        instruction: "Inclinações muito suaves com apoio das mãos",
        duration: "5 min",
        breathing: "Expire em cada liberação",
        safetyNote: "Mantenha movimentos extremamente gentis"
      },
      {
        name: "Integração",
        instruction: "Permaneça em posição neutra, sentindo os efeitos",
        duration: "3 min",
        breathing: "Respiração natural",
        visualization: "Sensação de leveza e espaço"
      }
    ],
    
    adaptations: {
      acute_pain: "Use apenas respiração e visualização",
      anxiety: "Adicione música calma",
      migraine: "Faça na penumbra"
    },
    
    contraindications: ["severe_vertigo", "acute_trauma"],
    imageUrl: "/images/exercises/neck_release.jpg",
    
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  }
];

// Níveis de dificuldade para exercícios adicionais
export const neckExercisesAdvancedLevels = {
  beginner: ["therapeutic_neck_release", "gentle_awareness"],
  intermediate: ["neck_isometric_sequence", "controlled_mobility"],
  advanced: ["neck_mobility_sequence", "dynamic_integration"]
}; 