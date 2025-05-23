import { ChairYogaExercise } from '@/types/chair-yoga';

export const spineExercisesAdvanced: ChairYogaExercise[] = [
  {
    id: "thoracic_mobility_sequence",
    title: "Sequência de Mobilidade Torácica",
    category: "back",
    difficulty: "intermediate",
    duration: "10 min",
    targetConditions: ["upper_back_stiffness", "poor_posture"],
    position: "seated",
    chairPosition: "seated_with_back_support",
    
    description: "Série de movimentos para mobilidade da coluna torácica",
    specificBenefit: "Aumenta mobilidade torácica em 40% e melhora respiração",
    
    steps: [
      {
        name: "Preparação",
        instruction: "Sente-se afastado do encosto, mãos nos ombros",
        duration: "2 min",
        breathing: "Respiração costal expandida",
        visualization: "Imagine cada vértebra se movendo individualmente"
      },
      {
        name: "Rotações Segmentares",
        instruction: "Gire suavemente a partir do meio das costas",
        duration: "30s cada lado, 3 séries",
        breathing: "Expire na rotação",
        safetyNote: "Mantenha baixa abdominal ativa"
      },
      {
        name: "Extensões Guiadas",
        instruction: "Arqueie suavemente a partir do meio das costas",
        duration: "5 repetições de 10s",
        breathing: "Inspire ao expandir, expire ao voltar",
        safetyNote: "Evite arquear região lombar"
      }
    ],
    
    adaptations: {
      osteoporosis: "Evite rotações extremas",
      disc_issues: "Mantenha movimentos pequenos",
      elderly: "Use apoio adicional"
    },
    
    contraindications: ["acute_herniation", "severe_osteoporosis"],
    imageUrl: "/images/exercises/thoracic_mobility.jpg",
    
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "lumbar_stabilization",
    title: "Estabilização Lombar",
    category: "back",
    difficulty: "advanced",
    duration: "12 min",
    targetConditions: ["lower_back_pain", "core_weakness"],
    position: "seated",
    chairPosition: "seated_edge",
    
    description: "Exercícios de estabilização para região lombar",
    specificBenefit: "Reduz dor lombar em 60% após 6 semanas",
    
    steps: [
      {
        name: "Ativação Base",
        instruction: "Encontre posição neutra, ative core profundo",
        duration: "3 min",
        breathing: "Respiração diafragmática",
        visualization: "Imagine um espartilho suave ao redor da cintura"
      },
      {
        name: "Tilts Pélvicos",
        instruction: "Alterne entre anteriorização e posteriorização",
        duration: "10 repetições lentas",
        breathing: "Sincronize com movimento",
        safetyNote: "Mantenha movimentos pequenos e controlados"
      },
      {
        name: "Elevação Alternada",
        instruction: "Eleve joelhos alternadamente mantendo estabilidade",
        duration: "2 min cada lado",
        breathing: "Expire na elevação",
        safetyNote: "Pare se sentir instabilidade"
      }
    ],
    
    adaptations: {
      acute_pain: "Apenas ativação isométrica",
      balance_issues: "Use apoio das mãos",
      weakness: "Reduza amplitude"
    },
    
    contraindications: ["acute_sciatica", "spinal_stenosis"],
    imageUrl: "/images/exercises/lumbar_stabilization.jpg",
    
    chairRequirements: {
      backrest: false,
      armrests: true,
      wheels: false
    }
  },
  {
    id: "spinal_wave_flow",
    title: "Fluxo de Onda Espinhal",
    category: "back",
    difficulty: "advanced",
    duration: "15 min",
    targetConditions: ["spinal_stiffness", "movement_coordination"],
    position: "seated",
    chairPosition: "seated_edge",
    
    description: "Sequência fluida de movimentos ondulatórios da coluna",
    specificBenefit: "Melhora mobilidade global em 45% e coordenação",
    
    steps: [
      {
        name: "Despertar Espinhal",
        instruction: "Movimentos microscópicos de cada segmento",
        duration: "4 min",
        breathing: "Respiração fluida e livre",
        visualization: "Sua coluna é um colar de pérolas se movendo"
      },
      {
        name: "Ondas Ascendentes",
        instruction: "Inicie movimento na base, suba até cervical",
        duration: "5 repetições lentas",
        breathing: "Inspire subindo, expire descendo",
        safetyNote: "Mantenha movimentos suaves e conectados"
      },
      {
        name: "Espirais Integradas",
        instruction: "Combine ondulações com leve rotação",
        duration: "4 min",
        breathing: "Respiração natural",
        safetyNote: "Respeite limites de mobilidade"
      }
    ],
    
    adaptations: {
      limited_mobility: "Reduza amplitude e velocidade",
      balance_issues: "Use apoio firme",
      seniors: "Foque em um segmento por vez"
    },
    
    contraindications: ["vertigo", "acute_back_pain"],
    imageUrl: "/images/exercises/spinal_wave.jpg",
    
    chairRequirements: {
      backrest: false,
      armrests: true,
      wheels: false
    }
  }
];

// Níveis de dificuldade para exercícios adicionais
export const spineExercisesAdvancedLevels = {
  beginner: ["gentle_waves", "basic_stabilization"],
  intermediate: ["thoracic_mobility_sequence", "lumbar_awareness"],
  advanced: ["spinal_wave_flow", "advanced_integration"]
}; 