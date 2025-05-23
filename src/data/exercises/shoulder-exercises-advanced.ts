import { ChairYogaExercise } from '@/types/chair-yoga';

export const shoulderExercisesAdvanced: ChairYogaExercise[] = [
  {
    id: "shoulder_stability_sequence",
    title: "Sequência de Estabilidade dos Ombros",
    category: "shoulders",
    difficulty: "intermediate",
    duration: "10 min",
    targetConditions: ["shoulder_instability", "rotator_cuff_weakness"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    
    description: "Série de exercícios para estabilidade do complexo do ombro",
    specificBenefit: "Fortalece manguito rotador em 40% em 6 semanas",
    
    steps: [
      {
        name: "Ativação Base",
        instruction: "Braços ao lado do corpo, ative escápulas suavemente",
        duration: "2 min",
        breathing: "Respiração profunda e controlada",
        visualization: "Imagine suas escápulas como asas fortes"
      },
      {
        name: "Rotações Isométricas",
        instruction: "Pressione suavemente braço contra o corpo em diferentes ângulos",
        duration: "30s cada posição",
        breathing: "Expire na contração",
        safetyNote: "Mantenha pressão suave e controlada"
      },
      {
        name: "Elevações Controladas",
        instruction: "Eleve braços lentamente até altura dos ombros",
        duration: "10 repetições lentas",
        breathing: "Inspire subindo, expire descendo",
        safetyNote: "Mantenha escápulas estáveis"
      }
    ],
    
    adaptations: {
      pain: "Reduza amplitude de movimento",
      weakness: "Use apoio de almofada",
      arthritis: "Evite posições que causem desconforto"
    },
    
    contraindications: ["acute_shoulder_injury", "frozen_shoulder"],
    imageUrl: "/images/exercises/shoulder_stability.jpg",
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    }
  },
  {
    id: "shoulder_release_flow",
    title: "Fluxo de Liberação dos Ombros",
    category: "shoulders",
    difficulty: "intermediate",
    duration: "12 min",
    targetConditions: ["shoulder_tension", "stress_related_pain"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    
    description: "Sequência fluida para liberar tensão nos ombros",
    specificBenefit: "Reduz tensão muscular em 50% após sessão",
    
    steps: [
      {
        name: "Respiração Expansiva",
        instruction: "Respire expandindo área dos ombros",
        duration: "3 min",
        breathing: "Respiração profunda direcionada",
        visualization: "Imagine luz dourada dissolvendo tensão"
      },
      {
        name: "Ondulações Suaves",
        instruction: "Movimentos ondulatórios dos ombros",
        duration: "4 min",
        breathing: "Sincronize com movimento",
        safetyNote: "Mantenha movimentos fluidos"
      },
      {
        name: "Liberação Guiada",
        instruction: "Solte cada área de tensão conscientemente",
        duration: "3 min",
        breathing: "Expire liberando tensão",
        safetyNote: "Respeite limites de conforto"
      }
    ],
    
    adaptations: {
      high_tension: "Adicione pausas entre movimentos",
      neck_pain: "Mantenha pescoço neutro",
      anxiety: "Use respiração mais lenta"
    },
    
    contraindications: ["acute_inflammation", "severe_pain"],
    imageUrl: "/images/exercises/shoulder_release.jpg",
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    }
  },
  {
    id: "shoulder_strength_flow",
    title: "Fluxo de Fortalecimento dos Ombros",
    category: "shoulders",
    difficulty: "advanced",
    duration: "15 min",
    targetConditions: ["shoulder_weakness", "poor_posture"],
    position: "seated",
    chairPosition: "seated_edge",
    
    description: "Sequência dinâmica para força e controle dos ombros",
    specificBenefit: "Aumenta força e resistência em 45% em 8 semanas",
    
    steps: [
      {
        name: "Ativação Integrada",
        instruction: "Combine movimentos de força e controle",
        duration: "5 min",
        breathing: "Respiração potente e rítmica",
        visualization: "Seus ombros são pilares fortes"
      },
      {
        name: "Sequência de Força",
        instruction: "Movimentos controlados com micro-resistência",
        duration: "5 min",
        breathing: "Expire no esforço",
        safetyNote: "Mantenha alinhamento escapular"
      },
      {
        name: "Integração Dinâmica",
        instruction: "Combine padrões de movimento complexos",
        duration: "3 min",
        breathing: "Respiração fluida e forte",
        safetyNote: "Pare se sentir fadiga excessiva"
      }
    ],
    
    adaptations: {
      beginner: "Reduza tempo de cada série",
      fatigue: "Inclua mais pausas",
      joint_issues: "Evite carga no final da amplitude"
    },
    
    contraindications: ["shoulder_impingement", "recent_injury"],
    imageUrl: "/images/exercises/shoulder_strength.jpg",
    
    chairRequirements: {
      backrest: false,
      armrests: true,
      wheels: false
    }
  }
];

// Níveis de dificuldade para exercícios adicionais
export const shoulderExercisesAdvancedLevels = {
  beginner: ["gentle_awareness", "basic_stability"],
  intermediate: ["shoulder_stability_sequence", "shoulder_release_flow"],
  advanced: ["shoulder_strength_flow", "dynamic_integration"]
}; 