import { ChairYogaExercise } from '@/types/chair-yoga';

export const neckExercises: ChairYogaExercise[] = [
  {
    id: "neck_circles_gentle",
    title: "Círculos Suaves do Pescoço",
    category: "neck",
    difficulty: "beginner",
    duration: "5 min",
    targetConditions: ["neck_stiffness", "tension_headaches"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    
    description: "Movimentos circulares suaves para mobilidade cervical",
    specificBenefit: "Aumenta mobilidade cervical em 35% após 3 semanas de prática",
    
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se com coluna ereta, ombros relaxados, pés apoiados",
        duration: "30s",
        breathing: "Respiração profunda e calma",
        visualization: "Imagine um anel de luz dourada ao redor do pescoço"
      },
      {
        name: "Círculos Micro",
        instruction: "Faça círculos muito pequenos com o nariz, como se desenhasse uma moeda no ar",
        duration: "60s cada direção",
        breathing: "Inspire ao subir, expire ao descer",
        safetyNote: "Mantenha movimentos extremamente pequenos"
      }
    ],
    
    adaptations: {
      severe_arthritis: "Apenas metade da amplitude, foco na respiração",
      vertigo: "Evite círculos, faça apenas inclinações suaves",
      herniated_disc: "Movimentos microscópicos, pare se houver dor"
    },
    
    contraindications: ["acute_whiplash", "cervical_instability"],
    imageUrl: "/images/exercises/neck_circles.jpg",
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    }
  },
  {
    id: "isometric_neck_strength",
    title: "Fortalecimento Isométrico Cervical",
    category: "neck",
    difficulty: "intermediate",
    duration: "7 min",
    targetConditions: ["neck_weakness", "poor_posture"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    
    description: "Exercícios de fortalecimento sem movimento para músculos cervicais",
    specificBenefit: "Aumenta força cervical em 25% em 6 semanas",
    
    steps: [
      {
        name: "Resistência Frontal",
        instruction: "Coloque a mão na testa e pressione gentilmente, resistindo com o pescoço",
        duration: "15s pressão, 15s descanso, 3 repetições",
        breathing: "Respire normalmente durante a contração",
        safetyNote: "Use apenas 20% da força máxima"
      },
      {
        name: "Resistência Lateral",
        instruction: "Mão na lateral da cabeça, pressione suavemente, resista com pescoço",
        duration: "15s cada lado, 15s descanso entre lados",
        breathing: "Mantenha respiração constante",
        visualization: "Imagine raízes fortes crescendo do pescoço"
      }
    ],
    
    adaptations: {
      beginners: "Reduza tempo para 10s, aumente gradualmente",
      neck_pain: "Use apenas 10% da força máxima",
      seniors: "Faça sentado com apoio completo das costas"
    },
    
    contraindications: ["acute_injury", "severe_osteoporosis"],
    imageUrl: "/images/exercises/neck_strength.jpg",
    
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "cervical_mobility_flow",
    title: "Fluxo de Mobilidade Cervical",
    category: "neck",
    difficulty: "advanced",
    duration: "10 min",
    targetConditions: ["reduced_mobility", "tech_neck"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    
    description: "Sequência fluida de movimentos para mobilidade completa",
    specificBenefit: "Melhora amplitude de movimento em todas direções em 40%",
    
    steps: [
      {
        name: "Aquecimento Consciente",
        instruction: "Movimentos microscópicos em todas direções",
        duration: "2 min",
        breathing: "Sincronize respiração com movimento",
        visualization: "Seu pescoço é uma flor se abrindo"
      },
      {
        name: "Fluxo Diagonal",
        instruction: "Trace diagonais suaves com o nariz, como desenhando um X no ar",
        duration: "30s cada diagonal",
        breathing: "Inspire na diagonal ascendente, expire na descendente",
        safetyNote: "Mantenha movimentos lentos e controlados"
      }
    ],
    
    adaptations: {
      intermediate: "Reduza amplitude e velocidade em 50%",
      morning_stiffness: "Adicione 2min de aquecimento extra",
      arthritis: "Foque em uma direção por vez"
    },
    
    contraindications: ["vertigo", "acute_pain"],
    imageUrl: "/images/exercises/neck_flow.jpg",
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    }
  }
];

// Níveis de dificuldade para cada exercício
export const neckExerciseLevels = {
  beginner: ["neck_circles_gentle", "cervical_gentle_release"],
  intermediate: ["isometric_neck_strength", "neck_tension_release"],
  advanced: ["cervical_mobility_flow", "neck_strength_builder"]
}; 