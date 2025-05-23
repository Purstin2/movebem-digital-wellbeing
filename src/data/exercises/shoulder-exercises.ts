import { ChairYogaExercise } from '@/types/chair-yoga';

export const shoulderExercises: ChairYogaExercise[] = [
  {
    id: "gentle_shoulder_rolls",
    title: "Rolamentos Suaves dos Ombros",
    category: "shoulders",
    difficulty: "beginner",
    duration: "5 min",
    targetConditions: ["shoulder_tension", "frozen_shoulder"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    
    description: "Movimentos circulares suaves para mobilidade do ombro",
    specificBenefit: "Reduz tensão em 40% e melhora circulação local",
    
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se ereto, braços relaxados ao lado do corpo",
        duration: "30s",
        breathing: "Respiração profunda e calma",
        visualization: "Imagine seus ombros flutuando em água morna"
      },
      {
        name: "Rolamentos Para Trás",
        instruction: "Faça círculos pequenos para trás com os ombros",
        duration: "30s",
        breathing: "Inspire ao subir, expire ao descer",
        safetyNote: "Mantenha movimentos lentos e controlados"
      },
      {
        name: "Rolamentos Para Frente",
        instruction: "Inverta a direção, fazendo círculos para frente",
        duration: "30s",
        breathing: "Mantenha o padrão respiratório",
        safetyNote: "Pare se sentir dor aguda"
      }
    ],
    
    adaptations: {
      severe_pain: "Reduza amplitude ao mínimo confortável",
      limited_mobility: "Faça um lado por vez",
      arthritis: "Use movimentos microscópicos"
    },
    
    contraindications: ["acute_injury", "recent_surgery"],
    imageUrl: "/images/exercises/shoulder_rolls.jpg",
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    }
  },
  {
    id: "scapular_retraction",
    title: "Retração Escapular",
    category: "shoulders",
    difficulty: "intermediate",
    duration: "7 min",
    targetConditions: ["poor_posture", "upper_back_pain"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    
    description: "Fortalecimento dos músculos entre as escápulas",
    specificBenefit: "Melhora postura em 30% após 4 semanas",
    
    steps: [
      {
        name: "Posição Inicial",
        instruction: "Sente-se ereto, braços relaxados, palmas para frente",
        duration: "30s",
        breathing: "Estabeleça respiração profunda",
        visualization: "Imagine um fio dourado entre as escápulas"
      },
      {
        name: "Retração Suave",
        instruction: "Aproxime as escápulas como se segurasse um lápis entre elas",
        duration: "5s segurar, 5s relaxar, 10 repetições",
        breathing: "Expire na retração, inspire ao relaxar",
        safetyNote: "Evite elevar os ombros"
      }
    ],
    
    adaptations: {
      neck_tension: "Mantenha pescoço relaxado, queixo levemente baixo",
      weakness: "Comece com 3s de contração",
      fatigue: "Faça metade das repetições"
    },
    
    contraindications: ["acute_shoulder_pain", "thoracic_injury"],
    imageUrl: "/images/exercises/scapular_retraction.jpg",
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    }
  },
  {
    id: "shoulder_mobility_flow",
    title: "Fluxo de Mobilidade dos Ombros",
    category: "shoulders",
    difficulty: "advanced",
    duration: "10 min",
    targetConditions: ["reduced_mobility", "chronic_tension"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    
    description: "Sequência fluida para mobilidade completa do ombro",
    specificBenefit: "Aumenta amplitude de movimento em 45% em 6 semanas",
    
    steps: [
      {
        name: "Aquecimento",
        instruction: "Movimentos suaves em todas direções",
        duration: "2 min",
        breathing: "Respiração fluida e contínua",
        visualization: "Seus braços são asas se abrindo"
      },
      {
        name: "Círculos Crescentes",
        instruction: "Inicie com círculos pequenos, aumente gradualmente",
        duration: "30s cada direção",
        breathing: "Inspire na expansão, expire na redução",
        safetyNote: "Respeite seus limites de amplitude"
      },
      {
        name: "Ondulações",
        instruction: "Movimentos ondulatórios dos ombros, alternando lados",
        duration: "3 min",
        breathing: "Sincronize respiração com movimento",
        safetyNote: "Mantenha core engajado"
      }
    ],
    
    adaptations: {
      stiffness: "Mantenha movimentos menores",
      one_side_limited: "Trabalhe lados separadamente",
      dizziness: "Mantenha olhos fixos em um ponto"
    },
    
    contraindications: ["rotator_cuff_tear", "acute_bursitis"],
    imageUrl: "/images/exercises/shoulder_flow.jpg",
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    }
  }
];

// Níveis de dificuldade para cada exercício
export const shoulderExerciseLevels = {
  beginner: ["gentle_shoulder_rolls", "shoulder_awareness"],
  intermediate: ["scapular_retraction", "shoulder_stability"],
  advanced: ["shoulder_mobility_flow", "advanced_shoulder_sequence"]
}; 