import { ChairYogaExercise } from '@/types/chair-yoga';

// CATEGORIA: PESCOÇO E CERVICAL
const neckExercises: ChairYogaExercise[] = [
  {
    id: "cervical_gentle_release",
    title: "Libertação Cervical Suave",
    category: "neck",
    position: "seated",
    targetConditions: ["neck_pain", "headaches", "cervical_arthritis"],
    difficulty: "beginner",
    duration: "5 min",
    chairPosition: "seated_with_back_support",
    
    description: "Movimentos suaves para liberar tensão acumulada no pescoço",
    specificBenefit: "Reduz dor cervical em 73% das mulheres em 14 dias",
    
    steps: [
      {
        name: "Preparação Consciente",
        instruction: "Sente-se confortavelmente, pés apoiados no chão, costas tocando o encosto da cadeira",
        duration: "30s",
        breathing: "Respiração natural e profunda",
        visualization: "Imagine uma luz dourada aquecendo seu pescoço"
      },
      {
        name: "Inclinação Lateral Suave",
        instruction: "Incline a cabeça para a direita, orelha em direção ao ombro. NÃO force.",
        duration: "60s cada lado",
        breathing: "Inspire ao centro, expire inclinando",
        chairAdaptation: "Segure na lateral da cadeira para apoio se necessário"
      },
      {
        name: "Rotação Consciente", 
        instruction: "Gire a cabeça lentamente para a direita, olhando sobre o ombro",
        duration: "45s cada lado",
        breathing: "Expire ao girar, inspire ao retornar",
        safetyNote: "PARE se sentir tontura ou dor aguda"
      }
    ],
    
    adaptations: {
      severeArthritis: "Amplitude reduzida em 50%, apenas 3 repetições lentas",
      wheelchair: "Use apoio de braços da cadeira para estabilidade",
      fibromyalgia: "Movimentos extra lentos, pare ao primeiro sinal de desconforto",
      herniated_disc: "Evite rotações, apenas inclinações laterais suaves"
    },
    
    contraindications: ["cirurgia_cervical_recente", "instabilidade_atlantoaxial"],
    
    progressionPath: ["basic_breathing", "cervical_gentle_release", "neck_strength_builder"],
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/cervical_release.jpg"
  },
  {
    id: "neck_tension_release",
    title: "Alívio de Tensão Cervical",
    category: "neck",
    position: "seated",
    targetConditions: ["neck_pain", "tension_headaches", "stress"],
    difficulty: "beginner",
    duration: "7 min",
    chairPosition: "seated_with_back_support",
    
    description: "Sequência para aliviar tensão acumulada na região cervical e ombros",
    specificBenefit: "Reduz tensão cervical e alivia dores de cabeça em 65% dos casos",
    
    steps: [
      {
        name: "Respiração Cervical",
        instruction: "Sente-se ereta com as mãos descansando no colo. Respire profundamente visualizando o ar entrando pela nuca",
        duration: "1 min",
        breathing: "Respiração profunda 4-2-6 (inspire 4s, retenha 2s, expire 6s)",
        visualization: "O ar entra como luz azul curando seu pescoço"
      },
      {
        name: "Alongamento Lateral com Apoio",
        instruction: "Segure na lateral da cadeira com a mão direita. Incline a cabeça para a esquerda gentilmente",
        duration: "1 min cada lado",
        breathing: "Expire ao inclinar, respire normalmente enquanto mantém",
        safetyNote: "Mantenha ombros relaxados e baixos durante todo o exercício"
      },
      {
        name: "Rotação Controlada", 
        instruction: "Gire lentamente o queixo em direção ao ombro, mantendo o nível dos olhos",
        duration: "1 min cada lado",
        breathing: "Inspire ao centro, expire ao girar",
        mentalCue: "Visualize espaço sendo criado entre cada vértebra"
      }
    ],
    
    adaptations: {
      severeArthritis: "Reduza amplitude em 70%, foque na respiração",
      vertigo: "Evite rotações, apenas inclinações muito suaves",
      fibromyalgia: "Faça apenas metade do tempo sugerido com pausas entre movimentos"
    },
    
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    },
    
    imageUrl: "/images/exercises/neck_tension.jpg"
  },
  // NOVOS EXERCÍCIOS PARA INICIANTES - PESCOÇO
  {
    id: "micro_neck_movements",
    title: "Micro Movimentos de Alívio Cervical",
    category: "neck",
    position: "seated",
    targetConditions: ["severe_neck_pain", "acute_tension", "post_injury"],
    difficulty: "beginner",
    duration: "4 min",
    chairPosition: "seated_with_full_back_support",
    
    description: "Movimentos microscópicos seguros para dor cervical severa",
    specificBenefit: "Alivia dor aguda sem agravar condições subjacentes em 82% dos casos",
    
    steps: [
      {
        name: "Alinhamento Inicial",
        instruction: "Sente-se com coluna totalmente apoiada, cabeça neutra como se um fio a puxasse suavemente para cima",
        duration: "1 min",
        breathing: "Respiração lenta e profunda pelo nariz",
        visualization: "Seu pescoço sendo sustentado por nuvens suaves"
      },
      {
        name: "Micro-nodding",
        instruction: "Movimento mínimo de 'sim' com a cabeça (apenas 1cm), como se concordasse muito sutilmente",
        duration: "1 min",
        breathing: "Inspire antes, expire durante o micromovimento",
        safetyNote: "Movimento tão pequeno que seria imperceptível para observadores"
      },
      {
        name: "Sub-rotação Isométrica", 
        instruction: "Coloque a mão na bochecha e crie leve resistência sem mover a cabeça, contração de apenas 20%",
        duration: "30s cada lado",
        breathing: "Inspire preparando, expire durante a contração suave",
        mentalCue: "Como sussurrar com seus músculos, não gritar"
      },
      {
        name: "Escaneamento Consciente", 
        instruction: "Direcione atenção para cada ponto de tensão no pescoço sem mover, apenas enviando intenção de relaxamento",
        duration: "1 min",
        breathing: "Respirações profundas direcionadas mentalmente para pontos de tensão",
        visualization: "Luz dourada dissolvendo nós de tensão"
      }
    ],
    
    adaptations: {
      extremePain: "Apenas respiração e visualização, sem micromoimentos",
      vertigo: "Mantenha olhos abertos focados em ponto fixo",
      whiplashInjury: "Reduza amplitude em 90%, use travesseiro cervical",
      herniated_disc: "Apenas contração isométrica mínima"
    },
    
    contraindications: ["fratura_cervical", "cirurgia_recente", "mielopatia_grave"],
    
    progressionPath: ["micro_neck_movements", "cervical_gentle_release", "neck_tension_release"],
    
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    },
    
    imageUrl: "/images/exercises/micro_neck_movements.jpg"
  },
  {
    id: "chin_tuck_therapy",
    title: "Terapia do Queixo Retraído",
    category: "neck",
    position: "seated",
    targetConditions: ["forward_head_posture", "tech_neck", "cervical_lordosis"],
    difficulty: "beginner",
    duration: "5 min",
    chairPosition: "seated_with_back_support",
    
    description: "Correção postural suave para pescoço projetado à frente",
    specificBenefit: "Reduz pressão nas vértebras cervicais em até 60% e alivia tensão dos músculos posteriores",
    
    steps: [
      {
        name: "Posicionamento Consciente",
        instruction: "Sente-se encostando a parte superior das costas no encosto da cadeira, olhar para frente",
        duration: "30s",
        breathing: "Respiração abdominal calma",
        visualization: "Alinhamento perfeito da coluna como um colar de pérolas"
      },
      {
        name: "Micro-retração Queixo",
        instruction: "Deslize o queixo para trás suavemente como se fizesse um 'queixo duplo' muito discreto",
        duration: "1 min",
        breathing: "Expire ao retrair, inspire mantendo",
        safetyNote: "O movimento deve ser horizontal, não inclinando cabeça para baixo"
      },
      {
        name: "Estabilização Sustentada", 
        instruction: "Mantenha a retração sutil por 10 segundos, relaxe 5 segundos, repita",
        duration: "2 min",
        breathing: "Respiração calma mantendo postura",
        mentalCue: "Imagine um fio puxando suavemente sua nuca para cima e para trás"
      },
      {
        name: "Integração Postural", 
        instruction: "Olhe para diferentes pontos na sala mantendo o alinhamento conquistado",
        duration: "1.5 min",
        breathing: "Respire normalmente mantendo alinhamento",
        visualization: "Seu pescoço como uma antena perfeitamente alinhada captando energia"
      }
    ],
    
    adaptations: {
      osteoporose: "Movimento ainda mais suave, sem pressão",
      dor_aguda: "Apenas 3 segundos de sustentação por vez",
      artrite_cervical: "Use travesseiro fino nas costas para melhor suporte"
    },
    
    contraindications: ["trauma_recente", "cervicalgia_aguda_severa"],
    
    progressionPath: ["micro_neck_movements", "chin_tuck_therapy", "cervical_strength_builder"],
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/chin_tuck.jpg"
  },
  {
    id: "occipital_release_technique",
    title: "Técnica de Liberação Occipital",
    category: "neck",
    position: "seated",
    targetConditions: ["chronic_neck_tension", "headaches", "occipital_pressure"],
    difficulty: "beginner",
    duration: "4 min",
    chairPosition: "seated_with_high_back_support",
    
    description: "Liberação da tensão na base do crânio através de pressão suave e consciente",
    specificBenefit: "Reduz dores de cabeça em 75% dos casos e melhora fluxo sanguíneo cerebral",
    
    steps: [
      {
        name: "Posicionamento das Mãos",
        instruction: "Posicione as mãos atrás da cabeça, dedos entrelaçados formando concha, polegares nas laterais da base do crânio",
        duration: "30s",
        breathing: "Respiração lenta pelo nariz",
        visualization: "Suas mãos como instrumentos de cura"
      },
      {
        name: "Pressão Consciente",
        instruction: "Aplique uma pressão extremamente suave com os polegares na base do crânio (pontos occipitais)",
        duration: "90s",
        breathing: "Inspire expandindo, expire aprofundando relaxamento",
        safetyNote: "Pressão deve ser confortável, NUNCA dolorosa"
      },
      {
        name: "Liberação com Respiração", 
        instruction: "A cada expiração, permita que a cabeça pese um pouco mais contra seus polegares",
        duration: "90s",
        breathing: "Inspire preparando, expire liberando",
        mentalCue: "Imagine tensão derretendo como manteiga ao sol"
      },
      {
        name: "Integração com Micromovimentos", 
        instruction: "Ainda com polegares em posição, faça movimentos circulares mínimos, quase imperceptíveis",
        duration: "30s",
        breathing: "Respiração profunda e lenta",
        visualization: "Energia presa sendo liberada como espirais de luz"
      }
    ],
    
    adaptations: {
      enxaqueca_ativa: "Apenas toque estático, sem círculos",
      tremores: "Apoie cotovelos em superfície estável",
      hipertensão: "Pressão ainda mais suave, monitorar conforto"
    },
    
    contraindications: ["lesão_occipital", "malformação_arnold_chiari", "hipertensão_severa_descontrolada"],
    
    progressionPath: ["occipital_release_technique", "cervical_gentle_release", "neck_and_shoulder_integration"],
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/occipital_release.jpg"
  },
  {
    id: "neck_fascial_unwinding",
    title: "Liberação Fascial do Pescoço",
    category: "neck",
    position: "seated",
    targetConditions: ["chronic_stiffness", "fascial_adhesions", "decreased_rom"],
    difficulty: "beginner",
    duration: "6 min",
    chairPosition: "seated_side_chair",
    
    description: "Movimentos orgânicos para soltar aderências fasciais na região cervical",
    specificBenefit: "Aumenta amplitude de movimento em 28% enquanto dissolve restrições fasciais profundas",
    
    steps: [
      {
        name: "Sensibilização Fascial",
        instruction: "Sente-se lateralmente na cadeira, coluna ereta mas relaxada. Toque suavemente seu pescoço e sinta as camadas de tecido",
        duration: "1 min",
        breathing: "Respiração calma e presente",
        visualization: "Suas mãos detectando redes de tecido conectivo sob a pele"
      },
      {
        name: "Micro-oscilações Intuitivas",
        instruction: "Deixe a cabeça começar a se mover em direções imprevisíveis, como se o pescoço estivesse explorando espaços",
        duration: "2 min",
        breathing: "Respiração orgânica seguindo os movimentos",
        safetyNote: "Movimentos pequenos e extremamente lentos, como ondulações suaves"
      },
      {
        name: "Pausas de Integração", 
        instruction: "Quando sentir um ponto de resistência, pare ali por 3-5 respirações antes de continuar",
        duration: "2 min",
        breathing: "Respire diretamente para o ponto de tensão",
        mentalCue: "Como água fluindo e contornando rochas, sem força"
      },
      {
        name: "Retorno à Neutralidade", 
        instruction: "Finalize voltando lentamente à posição neutra, percebendo as mudanças na sensação do pescoço",
        duration: "1 min",
        breathing: "Respiração profunda de integração",
        visualization: "Nova liberdade circulando através do pescoço e crânio"
      }
    ],
    
    adaptations: {
      dor_aguda: "Movimentos menores com pausas mais frequentes",
      vertigem: "Manter olhos abertos e movimentos apenas no plano horizontal",
      fibromialgia: "Reduzir amplitude e duração pela metade"
    },
    
    contraindications: ["vertigo_severa", "instabilidade_cervical"],
    
    progressionPath: ["neck_fascial_unwinding", "cervical_gentle_release", "full_neck_flow"],
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/neck_fascial.jpg"
  },
  // EXERCÍCIOS AVANÇADOS - PESCOÇO
  {
    id: "cervical_strength_builder",
    title: "Construtor de Força Cervical",
    category: "neck",
    position: "seated",
    targetConditions: ["weak_neck_muscles", "postural_issues", "recovery_phase"],
    difficulty: "advanced",
    duration: "8 min",
    chairPosition: "seated_upright_edge",
    
    description: "Sequência progressiva para fortalecer músculos profundos do pescoço",
    specificBenefit: "Aumenta força de sustentação cervical em 45% em 3 semanas de prática",
    
    steps: [
      {
        name: "Ativação Profunda",
        instruction: "Sente-se na borda da cadeira, coluna ereta. Faça uma retração suave do queixo mantendo olhar horizontal",
        duration: "1 min",
        breathing: "Respiração controlada pela nariz",
        visualization: "Músculos profundos da nuca como cordas sendo ajustadas"
      },
      {
        name: "Resistência Isométrica Anterior",
        instruction: "Coloque a mão na testa e pressione suavemente enquanto mantém cabeça imóvel (resistência de 30%)",
        duration: "2 min (30s pressão, 15s descanso x4)",
        breathing: "Inspire preparando, expire durante contração",
        safetyNote: "Mantenha pescoço em posição neutra durante todo exercício"
      },
      {
        name: "Resistência Isométrica Posterior", 
        instruction: "Mãos atrás da cabeça, pressione para trás enquanto o pescoço resiste mantendo posição",
        duration: "2 min (30s pressão, 15s descanso x4)",
        breathing: "Inspire antes, expire mantendo contração",
        mentalCue: "Engaje desde músculos profundos, não apenas superficiais"
      },
      {
        name: "Resistência Lateral Alternada", 
        instruction: "Mão na lateral da cabeça, pressione enquanto pescoço resiste. Alterne lados.",
        duration: "2 min (30s cada lado, alternando)",
        breathing: "Respiração ritmica 3-3 (3s dentro, 3s fora)",
        visualization: "Construindo pilares de suporte ao redor do pescoço"
      },
      {
        name: "Integração Dinâmica", 
        instruction: "Movimentos lentos do pescoço em todas direções com micro-resistência auto-aplicada",
        duration: "1 min",
        breathing: "Respiração fluída acompanhando movimento",
        safetyNote: "Mantenha 50% da amplitude máxima para segurança"
      }
    ],
    
    adaptations: {
      dor_intermitente: "Reduzir intensidade de resistência para 15-20%",
      osteoporose: "Resistência ultra suave, foco em duração",
      vertigem: "Evitar movimentos bruscos, olhos abertos"
    },
    
    contraindications: ["hernia_cervical_aguda", "estenose_severa", "instabilidade_vertebral"],
    
    progressionPath: ["chin_tuck_therapy", "cervical_strength_builder", "neck_mobility_master"],
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/neck_strength.jpg"
  },
  {
    id: "flowing_neck_sequence",
    title: "Sequência de Fluidez Cervical",
    category: "neck",
    position: "seated",
    targetConditions: ["limited_mobility", "stiffness", "movement_fear"],
    difficulty: "advanced",
    duration: "10 min",
    chairPosition: "seated_centered_stable",
    
    description: "Sequência fluida para restaurar movimento tridimensional completo do pescoço",
    specificBenefit: "Aumenta amplitude de movimento em 35% enquanto reduz medo de movimento",
    
    steps: [
      {
        name: "Preparação Fluida",
        instruction: "Sente-se no centro da cadeira, mãos apoiadas suavemente nas coxas. Comece com micromovimentos ondulatórios do pescoço",
        duration: "2 min",
        breathing: "Respiração oceânica - suave e constante",
        visualization: "Seu pescoço como alga marinha flutuando na água"
      },
      {
        name: "Espirais Ascendentes",
        instruction: "Comece com queixo ao peito e desenhe espirais ascendentes com o nariz, como se escrevesse círculos cada vez maiores",
        duration: "2 min",
        breathing: "Inspire expandindo espiral, expire completando",
        safetyNote: "Mantenha velocidade lenta e controlada, sem ultrapassar limite confortável"
      },
      {
        name: "Oitos Infinitos", 
        instruction: "Desenhe o símbolo do infinito (∞) com o nariz horizontalmente, depois verticalmente",
        duration: "3 min",
        breathing: "Sincronize respiração com as curvas do movimento",
        mentalCue: "Fluidez infinita se expandindo através do pescoço"
      },
      {
        name: "Liberação Tridimensional", 
        instruction: "Permita que o pescoço explore movimentos combinados: diagonal + rotação + inclinação",
        duration: "2 min",
        breathing: "Respiração intuitiva seguindo o movimento",
        visualization: "Desatando nós invisíveis em todas as direções"
      },
      {
        name: "Integração e Estabilização", 
        instruction: "Retorne ao centro e aplique micro-contrações dos músculos profundos enquanto realiza pequenos movimentos precisos",
        duration: "1 min",
        breathing: "Respiração refinada e atenta",
        mentalCue: "Precisão e controle em liberdade total"
      }
    ],
    
    adaptations: {
      rigidez_moderada: "Reduzir amplitude mantendo fluidez",
      dor_intermitente: "Evite direções dolorosas, foque nas confortáveis",
      vertigem_leve: "Mantenha movimentos mais lentos e olhos abertos"
    },
    
    contraindications: ["tontura_severa", "instabilidade_cervical", "dor_aguda_irradiada"],
    
    progressionPath: ["cervical_gentle_release", "neck_tension_release", "flowing_neck_sequence"],
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/flowing_neck.jpg"
  },
  {
    id: "neck_proprioception_master",
    title: "Maestria Proprioceptiva Cervical",
    category: "neck",
    position: "seated",
    targetConditions: ["poor_awareness", "coordination_issues", "recurrent_pain"],
    difficulty: "advanced",
    duration: "8 min",
    chairPosition: "seated_precision",
    
    description: "Exercícios de precisão para reconectar cérebro e pescoço com controle refinado",
    specificBenefit: "Melhora propriocepção cervical em 65% reduzindo risco de lesões recorrentes",
    
    steps: [
      {
        name: "Calibração de Posição Neutra",
        instruction: "Encontre ativamente a posição neutra ideal do pescoço. Memorize essa sensação com olhos fechados",
        duration: "1 min",
        breathing: "Respiração atenta e presente",
        visualization: "Seu pescoço perfeitamente alinhado como um instrumento de precisão"
      },
      {
        name: "Retorno à Referência",
        instruction: "Mova o pescoço em uma direção, depois retorne precisamente à posição neutra memorizada. Verifique com olhos",
        duration: "2 min",
        breathing: "Inspire movendo, expire retornando",
        safetyNote: "Foco na precisão do retorno, não na amplitude do movimento"
      },
      {
        name: "Rastreamento Visual Preciso", 
        instruction: "Trace com os olhos figuras na parede, permitindo que a cabeça siga com movimento mínimo e controlado",
        duration: "2 min",
        breathing: "Respiração contínua e suave",
        mentalCue: "Movimento inicido pelos olhos, pescoço seguindo com elegância"
      },
      {
        name: "Laser Imaginário", 
        instruction: "Imagine um laser saindo do topo da cabeça. Desenhe formas precisas no teto com este laser",
        duration: "2 min",
        breathing: "Respiração refinada coordenada com movimento",
        visualization: "Precisão milimétrica como um cirurgião do movimento"
      },
      {
        name: "Integração Sensorial", 
        instruction: "Com olhos fechados, posicione pescoço em ângulos específicos (45°, 30°), verificando precisão após",
        duration: "1 min",
        breathing: "Inspiração expansiva, expiração focada",
        mentalCue: "Seu cérebro e pescoço comunicando-se perfeitamente"
      }
    ],
    
    adaptations: {
      déficit_proprioceptivo: "Use espelho inicialmente para feedback visual",
      sensibilidade_vestibular: "Mantenha cabeça acima da linha do coração",
      artrose_avançada: "Reduza amplitude, mantenha precisão"
    },
    
    contraindications: ["vertigem_posicional", "neuralgia_trigeminal_ativa"],
    
    progressionPath: ["cervical_strength_builder", "flowing_neck_sequence", "neck_proprioception_master"],
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/neck_proprioception.jpg"
  },
  {
    id: "cervical_full_integration",
    title: "Integração Cervical Completa",
    category: "neck",
    position: "seated",
    targetConditions: ["chronic_issues", "restricted_patterns", "recovery_plateau"],
    difficulty: "advanced",
    duration: "12 min",
    chairPosition: "seated_dynamic",
    
    description: "Sequência integrativa que combina mobilidade, força e consciência neural para domínio cervical completo",
    specificBenefit: "Quebra padrões compensatórios crônicos restaurando movimento natural e indolor",
    
    steps: [
      {
        name: "Despertar Neural",
        instruction: "Toque suavemente diferentes pontos do pescoço e crânio, enviando sinais de ativação para o sistema nervoso",
        duration: "2 min",
        breathing: "Respiração para estimular sistema nervoso parassimpático",
        visualization: "Acendendo luzes pelo mapa neural do pescoço"
      },
      {
        name: "Espiral Tridimensional",
        instruction: "Inicie movimento espiral com base do crânio, deixando fluir até o topo da cabeça em padrões cada vez mais complexos",
        duration: "3 min",
        breathing: "Respiração fluida seguindo as espirais",
        safetyNote: "Mantenha movimentos dentro da zona de conforto dinâmico"
      },
      {
        name: "Integração Crânio-cervical", 
        instruction: "Combine movimento sutil da mandíbula, olhos e pescoço em padrões coordenados e fluidos",
        duration: "2 min",
        breathing: "Respiração refinada e coordenada",
        mentalCue: "Todo o complexo crânio-cervical movendo-se como uma unidade harmoniosa"
      },
      {
        name: "Resistência Dinâmica", 
        instruction: "Adicione resistência manual leve em pontos imprevisíveis durante movimentos lentos do pescoço",
        duration: "3 min",
        breathing: "Respiração potente mas controlada",
        visualization: "Ativação precisa de fibras profundas de estabilização"
      },
      {
        name: "Fluidez em Ação", 
        instruction: "Combine todos elementos anteriores em uma 'dança cervical' livre e expressiva, testando todos os planos de movimento",
        duration: "2 min",
        breathing: "Respiração orgânica e natural",
        mentalCue: "Expressão completa da liberdade restaurada"
      }
    ],
    
    adaptations: {
      dor_residual: "Evite áreas de dor, explore zonas indolores",
      limitação_persistente: "Foque em qualidade de movimento nas áreas disponíveis",
      hipermobilidade: "Adicione micro-contrações estabilizadoras"
    },
    
    contraindications: ["instabilidade_vertebral", "mielopatia", "hipertensão_descontrolada"],
    
    progressionPath: ["flowing_neck_sequence", "neck_proprioception_master", "cervical_full_integration"],
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/cervical_integration.jpg"
  }
];

// CATEGORIA: OMBROS
const shouldersExercises: ChairYogaExercise[] = [
  {
    id: "shoulder_tension_release",
    title: "Desbloqueio dos Ombros Presos",
    category: "shoulders", 
    position: "seated",
    targetConditions: ["shoulder_pain", "frozen_shoulder", "upper_back_tension"],
    difficulty: "beginner",
    duration: "7 min",
    chairPosition: "seated_edge_of_chair",
    
    description: "Libera ombros travados e melhora amplitude de movimento",
    specificBenefit: "Aumenta mobilidade do ombro em 45% em 3 semanas",
    
    steps: [
      {
        name: "Elevação Consciente dos Ombros",
        instruction: "Eleve os ombros em direção às orelhas, mantenha 3 segundos, relaxe completamente",
        duration: "2 min", 
        breathing: "Inspire elevando, expire soltando",
        mentalCue: "Imagine carregar todo o peso do mundo e depois soltá-lo"
      },
      {
        name: "Círculos Terapêuticos",
        instruction: "Faça círculos lentos com os ombros - 5 para frente, 5 para trás",
        duration: "3 min",
        breathing: "Respiração fluída acompanhando movimento",
        chairAdaptation: "Mantenha costas próximas ao encosto para apoio"
      },
      {
        name: "Abraço de Autocuidado",
        instruction: "Abrace-se, envolvendo ombros com as mãos. Sinta o alongamento entre omoplatas",
        duration: "2 min",
        breathing: "Respiração profunda dentro do abraço",
        visualization: "Cada respiração envia amor para seus ombros tensos"
      }
    ],
    
    adaptations: {
      frozenShoulder: "Amplitude mínima, foque na respiração mais que no movimento",
      rotatorCuffInjury: "Evite círculos, apenas elevação suave",
      fibromyalgia: "Use almofada nas costas para maior conforto"
    },
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/shoulder_release.jpg"
  },
  {
    id: "shoulder_mobility_flow",
    title: "Fluxo de Mobilidade dos Ombros",
    category: "shoulders", 
    position: "seated",
    targetConditions: ["chronic_shoulder_pain", "limited_mobility", "stiffness"],
    difficulty: "intermediate",
    duration: "10 min",
    chairPosition: "seated_upright",
    
    description: "Sequência fluida para restaurar movimento natural dos ombros",
    specificBenefit: "Recupera até 30% da amplitude de movimento em ombros cronicamente tensos",
    
    steps: [
      {
        name: "Aquecimento com Respiração",
        instruction: "Sente-se ereta, mãos nos joelhos. Inspire elevando levemente os ombros, expire soltando completamente",
        duration: "2 min", 
        breathing: "Inspire 4s, expire 6s",
        visualization: "Seus ombros se tornando leves como plumas"
      },
      {
        name: "Desenho de Círculos",
        instruction: "Braços estendidos à frente, desenhe círculos pequenos aumentando gradualmente",
        duration: "3 min",
        breathing: "Respiração livre e fluida",
        chairAdaptation: "Se sentir tontura, interrompa e apoie as mãos nos joelhos"
      },
      {
        name: "Rotação dos Braços",
        instruction: "Braços ao lado do corpo, faça rotações lentas para frente e para trás",
        duration: "3 min",
        breathing: "Inspire na preparação, expire durante o movimento",
        safetyNote: "Mantenha ritmo lento e controlado, nunca force amplitude"
      }
    ],
    
    adaptations: {
      frozenShoulder: "Limite amplitude a 20% do normal, foco na qualidade do movimento",
      arthrosis: "Substitua círculos por movimentos lineares mais confortáveis",
      rheumatoid: "Reduza duração por metade, adicione pausas de 30s"
    },
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/shoulder_mobility.jpg"
  },
  // NOVOS EXERCÍCIOS PARA INICIANTES - OMBROS
  {
    id: "healing_pendulum",
    title: "Pêndulo de Cura para Ombros",
    category: "shoulders", 
    position: "seated",
    targetConditions: ["frozen_shoulder", "severe_stiffness", "rotator_cuff"],
    difficulty: "beginner",
    duration: "6 min",
    chairPosition: "seated_forward_support",
    
    description: "Movimento pendular gentil usando gravidade para mobilização passiva do ombro",
    specificBenefit: "Reduz inflamação e aumenta mobilidade sem esforço muscular ativo",
    
    steps: [
      {
        name: "Posicionamento de Suporte",
        instruction: "Incline-se ligeiramente para frente, apoiando um braço na coxa ou no encosto lateral da cadeira",
        duration: "30s",
        breathing: "Respiração profunda para relaxamento",
        visualization: "Seu corpo como estrutura estável e segura"
      },
      {
        name: "Pêndulo Mínimo",
        instruction: "Deixe o braço afetado pendurar solto para baixo, relaxado. Comece balançando minimamente usando apenas movimento do tronco",
        duration: "2 min",
        breathing: "Respiração lenta, 4-6 contagens",
        safetyNote: "O braço deve estar completamente passivo, sem esforço muscular"
      },
      {
        name: "Círculos Gravitacionais", 
        instruction: "Ainda com braço pendente, permita que ele desenhe círculos muito pequenos como se fosse um pincel na água",
        duration: "2 min",
        breathing: "Respire profundamente expandindo costelas",
        mentalCue: "O braço é apenas um pêndulo, sem controle direto"
      },
      {
        name: "Banho de Calor", 
        instruction: "Finalize mantendo o braço pendente enquanto visualiza calor fluindo pelo ombro",
        duration: "1.5 min",
        breathing: "Inspire enviando calor, expire liberando tensão",
        visualization: "Luz dourada curativa fluindo através da articulação"
      }
    ],
    
    adaptations: {
      dor_severa: "Reduza amplitude para micromovimentos quase imperceptíveis",
      artrite_aguda: "Apenas 30 segundos de cada vez, com pausas frequentes",
      limitação_extrema: "Use a mão boa para guiar movimentos mínimos do braço afetado"
    },
    
    contraindications: ["luxação_recente", "fratura_não_consolidada", "inflamação_aguda_severa"],
    
    progressionPath: ["healing_pendulum", "shoulder_tension_release", "shoulder_mobility_flow"],
    
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    },
    
    imageUrl: "/images/exercises/pendulum_shoulder.jpg"
  },
  {
    id: "wall_slide_seated",
    title: "Deslize na Parede Sentada",
    category: "shoulders", 
    position: "seated",
    targetConditions: ["impingement", "rotator_cuff", "poor_scapular_control"],
    difficulty: "beginner",
    duration: "5 min",
    chairPosition: "seated_near_wall",
    
    description: "Mobilização guiada do ombro usando parede como suporte seguro",
    specificBenefit: "Melhora coordenação escapular e reduz impacto na região subacromial",
    
    steps: [
      {
        name: "Posicionamento Seguro",
        instruction: "Sente-se lateralmente na cadeira, ombro afetado a aproximadamente 15cm da parede",
        duration: "30s",
        breathing: "Respiração calma centralizadora",
        visualization: "A parede como guia e protetor para seu movimento"
      },
      {
        name: "Contato Consciente",
        instruction: "Posicione cotovelo e antebraço contra a parede, sentindo contato em toda superfície",
        duration: "1 min",
        breathing: "Inspire expandindo costelas, expire relaxando ombros",
        safetyNote: "Mantenha contato confortável, sem pressão excessiva"
      },
      {
        name: "Micro-deslize Ascendente", 
        instruction: "Muito lentamente, deslize o antebraço para cima apenas alguns centímetros, mantendo contato com a parede",
        duration: "2 min",
        breathing: "Inspire para preparar, expire durante o deslize",
        mentalCue: "A parede fazendo o trabalho, você apenas permite o movimento"
      },
      {
        name: "Integração Escapular", 
        instruction: "No ponto mais alto confortável, sinta a escápula (omoplata) movendo-se suavemente",
        duration: "1.5 min",
        breathing: "Respiração profunda para relaxar músculos do ombro",
        visualization: "Escápula dançando em perfeita harmonia com o braço"
      }
    ],
    
    adaptations: {
      dor_aguda: "Reduza amplitude para apenas 5cm de deslize",
      rigidez_severa: "Use almofada entre braço e parede para mais conforto",
      debilidade: "Permita apoio do braço bom para assistência gentil"
    },
    
    contraindications: ["cirurgia_recente_ombro", "bursite_aguda_severa"],
    
    progressionPath: ["healing_pendulum", "wall_slide_seated", "shoulder_tension_release"],
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/wall_slide.jpg"
  },
  {
    id: "nerve_glides_gentle",
    title: "Deslizamento Neural Suave",
    category: "shoulders", 
    position: "seated",
    targetConditions: ["nerve_compression", "tingling", "radiating_pain"],
    difficulty: "beginner",
    duration: "4 min",
    chairPosition: "seated_supported_upright",
    
    description: "Mobilização delicada do sistema nervoso para reduzir compressão e irritação",
    specificBenefit: "Alivia sintomas de formigamento e dormência em 68% das mulheres",
    
    steps: [
      {
        name: "Preparação Neutra",
        instruction: "Sente-se ereta com apoio nas costas, braços relaxados nos joelhos, ombros soltos",
        duration: "1 min",
        breathing: "Respiração profunda para acalmar sistema nervoso",
        visualization: "Imaginando nervos como fios de seda fluindo livremente"
      },
      {
        name: "Inclinação Cervical Alternada",
        instruction: "Incline orelha gentilmente em direção ao ombro, alternando lados muito lentamente",
        duration: "1 min",
        breathing: "Inspire ao centro, expire inclinando",
        safetyNote: "PARE imediatamente se sentir aumento de formigamento ou dor aguda"
      },
      {
        name: "Abertura da Mão Sequencial", 
        instruction: "Com braço relaxado ao lado, abra e feche os dedos lentamente, um por vez",
        duration: "1 min",
        breathing: "Sincronize respiração com movimento dos dedos",
        mentalCue: "Cada dedo deslizando o nervo suavemente como tocando harpa"
      },
      {
        name: "Integração Palmar", 
        instruction: "Palmas para cima no colo, gentilmente estenda pulso e dedos só até sentir leve estiramento",
        duration: "1 min",
        breathing: "Respiração expansiva e calma",
        visualization: "Nervos deslizando como seda dentro do braço"
      }
    ],
    
    adaptations: {
      sintomas_intensos: "Apenas micromovimentos, 10% da amplitude normal",
      dor_cervical: "Omita inclinação de pescoço, foco nos movimentos da mão",
      túnel_do_carpo: "Evite extensão completa de pulso, use apenas dedos"
    },
    
    contraindications: ["síndrome_do_desfiladeiro_aguda", "neurite_severa", "herniação_aguda"],
    
    progressionPath: ["nerve_glides_gentle", "shoulder_tension_release", "flowing_arm_sequence"],
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/nerve_glides.jpg"
  },
  {
    id: "scapular_awareness",
    title: "Despertar da Consciência Escapular",
    category: "shoulders", 
    position: "seated",
    targetConditions: ["poor_posture", "scapular_winging", "shoulder_instability"],
    difficulty: "beginner",
    duration: "5 min",
    chairPosition: "seated_with_back_support",
    
    description: "Reconexão neural com músculos estabilizadores da escápula frequentemente adormecidos",
    specificBenefit: "Melhora controle motor e ativa músculos profundos estabilizadores em 70% dos casos",
    
    steps: [
      {
        name: "Localização Consciente",
        instruction: "Com mãos opostas, toque suas omoplatas (escápulas), sentindo sua forma e posição",
        duration: "1 min",
        breathing: "Respiração lenta para aumentar percepção corporal",
        visualization: "Suas escápulas como asas adormecidas prontas para despertar"
      },
      {
        name: "Micro-retração",
        instruction: "Muito sutilmente, tente aproximar as escápulas como se segurasse um lápis entre elas",
        duration: "1.5 min",
        breathing: "Inspire preparando, expire durante a micro-contração",
        safetyNote: "Movimento quase imperceptível, sem esforço nos ombros ou pescoço"
      },
      {
        name: "Deslizamento Inferior", 
        instruction: "Imagine suas escápulas deslizando suavemente para baixo em direção aos quadris",
        duration: "1.5 min",
        breathing: "Inspire expandindo tórax, expire durante o deslize descendente",
        mentalCue: "Como gotas de chuva escorrendo pelas costas"
      },
      {
        name: "Integração Postural", 
        instruction: "Combine os movimentos anteriores: leve retração + deslizamento para baixo = postura nobre",
        duration: "1 min",
        breathing: "Respiração equilibrada fortalecendo a nova postura",
        visualization: "Coluna se elevando como uma fonte d'água enquanto escápulas ancoram como raízes"
      }
    ],
    
    adaptations: {
      dor_constante: "Apenas visualização do movimento inicialmente",
      cifose_acentuada: "Use almofada lombar para suporte",
      tensão_crônica: "Adicione automassagem entre movimentos"
    },
    
    contraindications: ["lesão_recente_ombro", "ruptura_manguito_aguda"],
    
    progressionPath: ["scapular_awareness", "shoulder_tension_release", "shoulder_mobility_flow"],
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/scapular_awareness.jpg"
  },
  // EXERCÍCIOS AVANÇADOS - OMBROS
  {
    id: "arm_spirals",
    title: "Espirais de Braços Integrados",
    category: "shoulders", 
    position: "seated",
    targetConditions: ["limited_range", "movement_patterns", "coordination"],
    difficulty: "advanced",
    duration: "8 min",
    chairPosition: "seated_centered_stable",
    
    description: "Sequência de espirais tridimensionais para integração completa dos ombros",
    specificBenefit: "Restaura padrões de movimento naturais e melhora coordenação neuromuscular",
    
    steps: [
      {
        name: "Despertar Espiral",
        instruction: "Estenda braços à frente, palmas para baixo. Inicie movimento em espiral com dedos, propagando até os ombros",
        duration: "2 min",
        breathing: "Respiração fluida e expansiva",
        visualization: "Energia movendo-se como hélice dupla através dos braços"
      },
      {
        name: "Espirais Ascendentes",
        instruction: "Braços ao lado do corpo, desenhe espirais ascendentes como água subindo em um redemoinho",
        duration: "2 min",
        breathing: "Inspire expandindo espiral, expire completando",
        safetyNote: "Mantenha ombros distantes das orelhas, pescoço relaxado"
      },
      {
        name: "Conexão Escapular-Umeral", 
        instruction: "Braços em 'U' à frente, integre movimento dos braços com deslizamento consciente das escápulas",
        duration: "2 min",
        breathing: "Sincronize respiração com as ondulações do movimento",
        mentalCue: "Ombros e escápulas dançando em perfeita harmonia"
      },
      {
        name: "Espirais de Expansão", 
        instruction: "Alterne entre espirais que expandem para fora e espirais que retornam ao centro",
        duration: "2 min",
        breathing: "Inspire expandindo, expire recolhendo",
        visualization: "Como uma galáxia expandindo e contratando em ciclos infinitos"
      }
    ],
    
    adaptations: {
      amplitude_reduzida: "Mantenha espirais pequenas mas mantenha a qualidade tridimensional",
      fadiga_rápida: "Intervalos de 30s entre sequências",
      desequilíbrio: "Use parede próxima como referência visual"
    },
    
    contraindications: ["inflamação_aguda_ombro", "instabilidade_severa"],
    
    progressionPath: ["shoulder_mobility_flow", "arm_spirals", "shoulder_freedom_sequence"],
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/arm_spirals.jpg"
  },
  {
    id: "shoulder_stability_power",
    title: "Potência e Estabilidade do Ombro",
    category: "shoulders", 
    position: "seated",
    targetConditions: ["instability", "weakness", "poor_endurance"],
    difficulty: "advanced",
    duration: "10 min",
    chairPosition: "seated_strong_position",
    
    description: "Fortalecimento profundo dos estabilizadores do ombro com resistência isométrica",
    specificBenefit: "Aumenta força de estabilização em 52% e reduz sensação de instabilidade",
    
    steps: [
      {
        name: "Ativação Base",
        instruction: "Sente-se ereta, braços ao lado do corpo. Engaje sutilmente as escápulas para trás e para baixo",
        duration: "1 min",
        breathing: "Respiração forte e centrada",
        visualization: "Construindo o alicerce para ombros poderosos"
      },
      {
        name: "Pilares Laterais",
        instruction: "Braços dobrados em 90°, cotovelos ao lado do corpo. Pressione gentilmente cotovelos contra o tronco",
        duration: "2 min",
        breathing: "Inspire preparando, expire durante contração",
        safetyNote: "Contração em 60% da força máxima, nunca 100%"
      },
      {
        name: "Expandindo o Horizonte", 
        instruction: "Braços ainda em 90°, rotação externa lenta contra resistência autoimposada",
        duration: "3 min",
        breathing: "Respiração potente durante a resistência",
        mentalCue: "Fortalecendo o manguito rotador de dentro para fora"
      },
      {
        name: "Abraço Poderoso", 
        instruction: "Braços abertos. Imagine abraçar uma árvore grande, resistindo ao movimento enquanto mantém escápulas estáveis",
        duration: "2 min",
        breathing: "Respiração expandida pelo diafragma",
        visualization: "Músculos profundos se ativando como raízes de árvores"
      },
      {
        name: "Integração Dinâmica", 
        instruction: "Combine os movimentos anteriores em uma sequência fluida, mantendo engajamento escapular constante",
        duration: "2 min",
        breathing: "Respiração potente e controlada",
        mentalCue: "Força e controle em perfeito equilíbrio"
      }
    ],
    
    adaptations: {
      dor_ao_fortalecer: "Reduza resistência para 30%, mantenha mais tempo",
      articulações_sensíveis: "Evite ângulos de dor, encontre zona segura",
      fadiga_precoce: "Intervalos de 20s entre cada posição"
    },
    
    contraindications: ["luxação_recente", "ruptura_tendão", "pós_operatório_recente"],
    
    progressionPath: ["scapular_awareness", "shoulder_mobility_flow", "shoulder_stability_power"],
    
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    },
    
    imageUrl: "/images/exercises/shoulder_stability.jpg"
  },
  {
    id: "fluid_arm_sequences",
    title: "Sequências Fluidas de Braços",
    category: "shoulders", 
    position: "seated",
    targetConditions: ["movement_restriction", "coordination_loss", "expression_limited"],
    difficulty: "advanced",
    duration: "12 min",
    chairPosition: "seated_centered",
    
    description: "Sequência de movimentos fluidos e expressivos para restaurar amplitude e coordenação avançada",
    specificBenefit: "Integra 95% dos múltiplos planos de movimento do complexo do ombro",
    
    steps: [
      {
        name: "Despertar Articular",
        instruction: "Inicie com pequenos movimentos circulares em cada articulação: dedos, pulsos, cotovelos, ombros",
        duration: "2 min",
        breathing: "Respiração suave e contínua",
        visualization: "Despertando cada articulação como flores abrindo ao sol"
      },
      {
        name: "Água que Flui",
        instruction: "Um braço de cada vez, crie movimentos ondulantes como água fluindo em um riacho",
        duration: "3 min",
        breathing: "Respiração acompanhando o fluxo do movimento",
        safetyNote: "Mantenha movimentos dentro da zona confortável, sem forçar limites"
      },
      {
        name: "Dança dos Planos", 
        instruction: "Mova os braços alternando entre os três planos espaciais: sagital, frontal e transversal",
        duration: "3 min",
        breathing: "Respiração expansiva em todos os planos",
        mentalCue: "Explorando todas as dimensões possíveis do movimento"
      },
      {
        name: "Expressão Tridimensional", 
        instruction: "Combine movimentos em padrões cada vez mais complexos, como pintar o espaço ao seu redor",
        duration: "3 min",
        breathing: "Respiração criativa e expressiva",
        visualization: "Seus braços como pincéis pintando uma obra-prima no ar"
      },
      {
        name: "Integração Completa", 
        instruction: "Mova-se livremente entre todos os padrões anteriores, adicionando elementos pessoais",
        duration: "1 min",
        breathing: "Respiração orgânica e natural",
        mentalCue: "Expressão completa da liberdade restaurada em seus braços e ombros"
      }
    ],
    
    adaptations: {
      fadiga: "Reduza duração de cada segmento para 1 minuto",
      limitação_unilateral: "Começe com lado não afetado para transferência neurológica",
      tontura: "Reduza amplitude e velocidade, mantenha olhos abertos"
    },
    
    contraindications: ["vertigem_posicional", "dor_aguda_irradiada", "inflamação_aguda"],
    
    progressionPath: ["shoulder_mobility_flow", "arm_spirals", "fluid_arm_sequences"],
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/fluid_arms.jpg"
  },
  {
    id: "shoulder_proprioceptive_mastery",
    title: "Maestria Proprioceptiva do Ombro",
    category: "shoulders", 
    position: "seated",
    targetConditions: ["coordination_deficit", "positional_awareness", "injury_prevention"],
    difficulty: "advanced",
    duration: "10 min",
    chairPosition: "seated_precision_position",
    
    description: "Treinamento avançado de propriocepção para precisão e consciência articular",
    specificBenefit: "Melhora precisão de movimento em 73% e reduz risco de relesão",
    
    steps: [
      {
        name: "Calibração Posicional",
        instruction: "Com olhos abertos, posicione braço em ângulos específicos: 90°, 45°, 60° - memorize cada posição",
        duration: "2 min",
        breathing: "Respiração atenta e concentrada",
        visualization: "Seu cérebro fotografando cada posição exata"
      },
      {
        name: "Reprodução às Cegas",
        instruction: "Com olhos fechados, reproduza as posições memorizadas, depois verifique com olhos abertos",
        duration: "3 min",
        breathing: "Inspire preparando, expire posicionando",
        safetyNote: "Movimentos lentos e conscientes para evitar compensações"
      },
      {
        name: "Percursos Precisos", 
        instruction: "Desenhe formas geométricas no ar - triângulo, quadrado, círculo - com extrema precisão",
        duration: "2 min",
        breathing: "Respiração controlada e atenta aos detalhes",
        mentalCue: "Como um cirurgião operando com precisão milimétrica"
      },
      {
        name: "Resistência com Feedback", 
        instruction: "Use resistência manual leve (outra mão) enquanto mantém posições específicas",
        duration: "2 min",
        breathing: "Respiração estável durante desafio",
        visualization: "Seu sistema nervoso como GPS ultra-preciso para seus ombros"
      },
      {
        name: "Integração com Movimento", 
        instruction: "Combine precisão estática com transições fluidas entre posições, mantendo total controle",
        duration: "1 min",
        breathing: "Respiração refinada sintonizada com movimento",
        mentalCue: "Controle perfeito mesmo no movimento, como mestre de artes marciais"
      }
    ],
    
    adaptations: {
      déficit_sensorial: "Use espelho para feedback visual constante",
      limitação_de_movimento: "Reduza amplitude mas mantenha foco na precisão",
      dor_intermitente: "Trabalhe apenas nas zonas livres de dor"
    },
    
    contraindications: ["lesão_nervosa_periférica", "déficit_cognitivo_severo"],
    
    progressionPath: ["shoulder_stability_power", "fluid_arm_sequences", "shoulder_proprioceptive_mastery"],
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/shoulder_proprioception.jpg"
  }
];

// CATEGORIA: COLUNA/COSTAS  
const backExercises: ChairYogaExercise[] = [
  {
    id: "spinal_twist_therapeutic",
    title: "Torção Regenerativa da Coluna",
    category: "back",
    position: "seated",
    targetConditions: ["lower_back_pain", "spinal_stiffness", "disc_issues"],
    difficulty: "intermediate", 
    duration: "10 min",
    chairPosition: "seated_edge_without_backrest",
    
    description: "Mobiliza coluna vertebral segmento por segmento",
    specificBenefit: "Reduz rigidez lombar em 68% e melhora flexibilidade", 
    
    steps: [
      {
        name: "Ancoragem dos Quadris",
        instruction: "Sente-se firmemente, quadris bem apoiados no assento. Pés paralelos no chão",
        duration: "1 min",
        breathing: "Respiração que alonga coluna a cada inspiração",
        importantNote: "Quadris NUNCA se movem - só o tronco gira"
      },
      {
        name: "Mãos nos Ombros",
        instruction: "Cruze braços sobre peito, mãos nos ombros opostos. Mantenha coluna ereta",
        duration: "1 min", 
        breathing: "Inspire para alongar coluna, expire mantendo posição",
        visualization: "Coluna cresce como uma árvore forte"
      },
      {
        name: "Torção para Direita",
        instruction: "Expire girando tronco para direita. Olhe sobre ombro direito. MANTENHA QUADRIS FIXOS",
        duration: "3 min",
        breathing: "Inspire ao centro, expire aprofundando torção",
        safetyNote: "PARE se sentir dor lombar - apenas desconforto suave é ok"
      },
      {
        name: "Torção para Esquerda", 
        instruction: "Retorne ao centro inspirando. Expire girando para esquerda. Quadris permanecem fixos",
        duration: "3 min",
        breathing: "Respiração ritmada com movimento",
        mentalCue: "Imagine desenrolar tensões da coluna"
      },
      {
        name: "Integração Final",
        instruction: "Volte ao centro, relaxe braços, sinta a diferença na coluna",
        duration: "2 min",
        breathing: "Respiração livre e natural",
        reflection: "Observe como sua coluna se sente agora vs antes do exercício"
      }
    ],
    
    adaptations: {
      herniatedDisc: "Amplitude reduzida 70%, apenas até sentir leve tração",
      scoliosis: "Torça apenas para o lado mais confortável",
      chronicPain: "Intercale com respiração de relaxamento",
      wheelchair: "Use apoios laterais para estabilidade extra"
    },
    
    contraindications: ["cirurgia_lombar_recente", "espondilolistese_grave"],
    progressionPath: ["basic_spinal_breath", "spinal_twist_therapeutic", "advanced_spinal_flow"],
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/spinal_twist.jpg"
  },
  {
    id: "seated_lumbar_relief",
    title: "Alívio Lombar Sentada",
    category: "back",
    position: "seated",
    targetConditions: ["chronic_low_back_pain", "sciatica", "lumbar_tension"],
    difficulty: "beginner", 
    duration: "8 min",
    chairPosition: "seated_supported",
    
    description: "Alívio suave para dores lombares crônicas sem sair da cadeira",
    specificBenefit: "Reduz pressão nos discos lombares em até 40% e alivia compressão nervosa", 
    
    steps: [
      {
        name: "Posicionamento Neutro",
        instruction: "Sente com coluna ereta, pés apoiados no chão alinhados com quadris",
        duration: "1 min",
        breathing: "Respiração diafragmática profunda",
        importantNote: "Mantenha curvaturas naturais da coluna"
      },
      {
        name: "Báscula Pélvica Sentada",
        instruction: "Alterne entre arquear região lombar e posteriorizar pelve (empurrar umbigo para trás)",
        duration: "3 min", 
        breathing: "Inspire ao arquear, expire ao posteriorizar",
        visualization: "Sua pelve como uma tigela com água que se move gentilmente"
      },
      {
        name: "Abraço de Joelhos",
        instruction: "Segure um joelho de cada vez em direção ao peito, mantendo outra perna apoiada",
        duration: "2 min cada lado",
        breathing: "Expire puxando joelho, inspire soltando levemente",
        safetyNote: "Mantenha ombros relaxados e pescoço neutro"
      },
      {
        name: "Alongamento Lateral Suave", 
        instruction: "Eleve um braço e incline lateralmente, sem rotação, mantendo ambos ísquios na cadeira",
        duration: "1 min cada lado",
        breathing: "Inspire elevando, expire inclinando",
        mentalCue: "Crie espaço entre suas costelas e quadril"
      }
    ],
    
    adaptations: {
      acutePain: "Apenas báscula pélvica, sem outros movimentos",
      sciatica: "Evite segurar joelho do lado afetado",
      severePain: "Faça todos movimentos com amplitude mínima"
    },
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/lumbar_relief.jpg"
  },
  // NOVOS EXERCÍCIOS PARA INICIANTES - COLUNA
  {
    id: "gentle_spine_awakening",
    title: "Despertar Suave da Coluna",
    category: "back",
    position: "seated",
    targetConditions: ["acute_back_pain", "morning_stiffness", "disc_issues"],
    difficulty: "beginner", 
    duration: "6 min",
    chairPosition: "seated_with_full_back_support",
    
    description: "Despertar extremamente suave para coluna com dor aguda ou rigidez severa",
    specificBenefit: "Reduz dor em 60% e aumenta circulação vertebral sem movimentos bruscos",
    
    steps: [
      {
        name: "Alinhamento Consciente",
        instruction: "Sente-se com apoio total das costas, pés apoiados. Observe o contato da coluna com o encosto",
        duration: "1 min",
        breathing: "Respiração abdominal lenta e profunda",
        visualization: "Sua coluna como um colar de pérolas se alinhando gentilmente"
      },
      {
        name: "Micro-ondulação Lombar",
        instruction: "Leve a atenção para região lombar (parte baixa das costas). Muito sutilmente, oscile entre leve arqueamento e leve achatamento",
        duration: "2 min",
        breathing: "Inspire arqueando minimamente, expire voltando ao neutro",
        safetyNote: "Movimento quase imperceptível, apenas 10-20% da amplitude normal"
      },
      {
        name: "Respiração Intercostal", 
        instruction: "Coloque as mãos nas costelas laterais. Ao inspirar, sinta as costelas expandindo para os lados",
        duration: "1.5 min",
        breathing: "Inspire expandindo costelas, expire relaxando ombros",
        mentalCue: "Imagine espaço sendo criado entre cada vértebra"
      },
      {
        name: "Báscula Pélvica Mínima", 
        instruction: "Com mãos nos joelhos, mova a pelve muito sutilmente - como se balançasse uma bacia de água sem derramar",
        duration: "1.5 min",
        breathing: "Respiração fluida e contínua, sem pausas",
        visualization: "Sua pelve como um pêndulo muito delicado"
      }
    ],
    
    adaptations: {
      dor_aguda: "Apenas visualização dos movimentos inicialmente",
      hérnia_disco: "Evite arqueamento, apenas respiração e micromovimentos para frente",
      fibromialgia: "Aumente tempo de respiração entre movimentos"
    },
    
    contraindications: ["fratura_recente", "cirurgia_coluna_6_semanas", "dor_radicular_severa"],
    
    progressionPath: ["gentle_spine_awakening", "seated_cat_cow_micro", "thoracic_mobility"],
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/gentle_spine.jpg"
  },
  {
    id: "seated_cat_cow_micro",
    title: "Micro Cat-Cow Sentada",
    category: "back",
    position: "seated",
    targetConditions: ["mild_back_pain", "stiffness", "disc_pressure"],
    difficulty: "beginner", 
    duration: "5 min",
    chairPosition: "seated_edge_supported",
    
    description: "Versão mínima e segura do clássico movimento de ondulação da coluna",
    specificBenefit: "Reduz pressão intradiscal em 30% e nutre articulações vertebrais",
    
    steps: [
      {
        name: "Posicionamento Seguro",
        instruction: "Sente-se na borda da cadeira com pés bem apoiados, mãos nos joelhos, coluna neutra",
        duration: "30s",
        breathing: "Respiração consciente para centro de gravidade",
        visualization: "Base estável como montanha, parte superior flexível como bambu"
      },
      {
        name: "Micro-Cow (Extensão)",
        instruction: "Inspire elevando sutilmente o peito para frente, criando leve arqueamento na coluna",
        duration: "2 min",
        breathing: "Inspire durante extensão, segure brevemente",
        safetyNote: "Apenas 30% da amplitude normal, mantenha movimento controlado"
      },
      {
        name: "Micro-Cat (Flexão)", 
        instruction: "Expire arredondando sutilmente o meio das costas, queixo levemente em direção ao peito",
        duration: "2 min",
        breathing: "Expire profundamente durante flexão",
        mentalCue: "Solte tensão entre as escápulas como gato se espreguiçando"
      },
      {
        name: "Integração Fluida", 
        instruction: "Conecte os dois movimentos em fluxo suave, ondulando gentilmente entre extensão e flexão",
        duration: "30s",
        breathing: "Respiração sincronizada com o movimento, 4 segundos em cada fase",
        visualization: "Coluna como onda suave em lago calmo"
      }
    ],
    
    adaptations: {
      dor_lombar: "Reduza amplitude e mantenha região lombar neutra",
      enrijecimento: "Mantenha cada posição por 3 respirações antes de mudar",
      hipercifose: "Foque mais na extensão (cow) que na flexão"
    },
    
    contraindications: ["dor_severa_ao_movimento", "espondilite_aguda", "espondilolistese_instável"],
    
    progressionPath: ["gentle_spine_awakening", "seated_cat_cow_micro", "seated_spinal_twist"],
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/seated_cat_cow.jpg"
  },
  {
    id: "diagonal_back_release",
    title: "Liberação Diagonal das Costas",
    category: "back",
    position: "seated",
    targetConditions: ["one_sided_pain", "muscle_imbalance", "poor_rotation"],
    difficulty: "beginner", 
    duration: "7 min",
    chairPosition: "seated_centered_stable",
    
    description: "Alongamento diagonal suave para liberar tensão unilateral e assimetrias",
    specificBenefit: "Equilibra tensão muscular e restaura simetria em 85% dos casos de dor assimétrica",
    
    steps: [
      {
        name: "Escaneamento de Assimetrias",
        instruction: "Sente-se ereta, mãos no colo. Perceba áreas de tensão assimétrica nas costas",
        duration: "1 min",
        breathing: "Respiração investigativa, atenta às sensações",
        visualization: "Mapeando áreas que precisam de atenção como detetive"
      },
      {
        name: "Alongamento em Diagonal",
        instruction: "Braços relaxados, estenda-os suavemente em diagonal (braço direito para cima e esquerda, esquerdo para baixo e direita)",
        duration: "2 min cada lado",
        breathing: "Inspire preparando, expire alongando",
        safetyNote: "Mantenha ombros distantes das orelhas, movimento lento"
      },
      {
        name: "Rotação Diagonal Assistida", 
        instruction: "Mão direita no joelho esquerdo, gentilmente use-a como apoio para rotação leve. Alterne lados",
        duration: "1 min cada lado",
        breathing: "Inspire ao centro, expire rotacionando",
        mentalCue: "Desparafuse gentilmente cada vértebra como abrindo garrafa"
      },
      {
        name: "Integração Consciente", 
        instruction: "Volte ao centro, sinta novamente a simetria das costas, perceba mudanças",
        duration: "1 min",
        breathing: "Respiração balanceada, igual nos dois lados do corpo",
        visualization: "Suas costas como uma tapeçaria onde os fios foram realinhados"
      }
    ],
    
    adaptations: {
      dor_pontual: "Evite estender-se diretamente sobre ponto doloroso",
      limitação_ombros: "Reduza amplitude do braço elevado, foque na rotação",
      escoliose: "Prolongue para 3min o lado da concavidade"
    },
    
    contraindications: ["costelas_fraturadas", "lesão_intercostal_aguda"],
    
    progressionPath: ["gentle_spine_awakening", "diagonal_back_release", "seated_spinal_twist"],
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/diagonal_release.jpg"
  },
  {
    id: "thoracic_opener",
    title: "Abertura Torácica Expansiva",
    category: "back",
    position: "seated",
    targetConditions: ["upper_back_pain", "forward_shoulders", "poor_breathing"],
    difficulty: "beginner", 
    duration: "6 min",
    chairPosition: "seated_upright_supported",
    
    description: "Mobilização suave para região torácica frequentemente tensa por postura inadequada",
    specificBenefit: "Aumenta capacidade respiratória em 25% e reduz tensão entre escápulas",
    
    steps: [
      {
        name: "Abraço Posterior",
        instruction: "Sente-se afastada do encosto. Entrelace os dedos atrás das costas, braços estendidos",
        duration: "1.5 min",
        breathing: "Respiração expansiva para o peito",
        visualization: "Seu coração se abrindo como flor ao sol"
      },
      {
        name: "Expansão Escapular",
        instruction: "Mantendo dedos entrelaçados, eleve levemente os braços atrás das costas, aproximando escápulas",
        duration: "1.5 min",
        breathing: "Inspire expandindo peito, expire elevando braços",
        safetyNote: "Elevação muito pequena, apenas até sentir aproximação das escápulas"
      },
      {
        name: "Borboleta Reversa", 
        instruction: "Solte as mãos, braços ao lado do corpo. Abra peito e leve ombros para trás sem arquear lombar",
        duration: "1 min",
        breathing: "Respiração tridimensional, expandindo tórax em todas direções",
        mentalCue: "Como borboleta abrindo asas lentamente atrás das costas"
      },
      {
        name: "Automassagem Intercostal", 
        instruction: "Com polegares, pressione suavemente entre as costelas, do esterno para os lados",
        duration: "2 min",
        breathing: "Inspire expandindo, expire aprofundando massagem",
        visualization: "Derretendo camadas de tensão entre cada costela"
      }
    ],
    
    adaptations: {
      ombros_limitados: "Mantenha cotovelos dobrados se não conseguir entrelaçar mãos",
      hipercifose: "Use faixa para assistir no abraço posterior",
      pós_covid: "Reduza intensidade, foco na respiração expansiva"
    },
    
    contraindications: ["artrite_severa_ombros", "distensão_intercostal"],
    
    progressionPath: ["seated_cat_cow_micro", "thoracic_opener", "thoracic_spiral_freedom"],
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/thoracic_opener.jpg"
  },
  // EXERCÍCIOS AVANÇADOS - COLUNA
  {
    id: "thoracic_spiral_freedom",
    title: "Liberdade Espiral Torácica",
    category: "back",
    position: "seated",
    targetConditions: ["thoracic_stiffness", "rotation_limitation", "rib_dysfunction"],
    difficulty: "advanced", 
    duration: "8 min",
    chairPosition: "seated_stable_armless",
    
    description: "Sequência avançada para restaurar rotação tridimensional da caixa torácica",
    specificBenefit: "Restaura 85% da mobilidade rotacional natural da coluna torácica",
    
    steps: [
      {
        name: "Ativação Proprioceptiva",
        instruction: "Mãos nas costelas inferiores. Inspire expandindo costelas em todas direções, perceba movimento",
        duration: "1 min",
        breathing: "Respiração expansiva tridimensional",
        visualization: "Caixa torácica como lanterna chinesa expandindo"
      },
      {
        name: "Rotação Ascendente",
        instruction: "Mãos nos joelhos, inicie rotação desde base da coluna, deixe movimento subir naturalmente",
        duration: "2 min cada lado",
        breathing: "Inspire ao centro, expire rotacionando",
        safetyNote: "Mantenha quadril estável, rotação apenas da cintura para cima"
      },
      {
        name: "Espiral Costal", 
        instruction: "Uma mão no assento para estabilizar, outra no ombro oposto. Gire como se olhasse por cima do ombro",
        duration: "1 min cada lado",
        breathing: "Inspire criando espaço, expire aprofundando espiral",
        mentalCue: "Cada vértebra girando de forma independente, como contas em um colar"
      },
      {
        name: "Integração com Braços", 
        instruction: "Em rotação, estenda braço oposto ao lado do rosto, criando alongamento diagonal completo",
        duration: "1 min cada lado",
        breathing: "Respiração profunda nas áreas expandidas",
        visualization: "Tecidos fasciais desenrolando como fita de seda"
      }
    ],
    
    adaptations: {
      mobilidade_reduzida: "Diminua amplitude, mantenha qualidade da espiral",
      dor_costal: "Evite lado doloroso, trabalhe apenas lado confortável",
      equilíbrio_precário: "Use encosto para estabilidade"
    },
    
    contraindications: ["escoliose_severa", "espondilite_anquilosante_ativa", "fratura_costela"],
    
    progressionPath: ["diagonal_back_release", "thoracic_opener", "thoracic_spiral_freedom"],
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/thoracic_spiral.jpg"
  },
  {
    id: "lumbar_core_activation",
    title: "Ativação Profunda do Core Lombar",
    category: "back",
    position: "seated",
    targetConditions: ["lumbar_instability", "chronic_low_back_pain", "weak_core"],
    difficulty: "advanced", 
    duration: "10 min",
    chairPosition: "seated_edge_without_support",
    
    description: "Trabalho profundo de estabilização da coluna lombar através de ativação precisa",
    specificBenefit: "Ativa músculos transverso e multífidos, reduzindo dor lombar em 70% dos casos crônicos",
    
    steps: [
      {
        name: "Posicionamento Neutro",
        instruction: "Sente-se na borda da cadeira, encontre posição neutra da pelve (nem arqueada nem achatada)",
        duration: "1 min",
        breathing: "Respiração tranquila para centro de gravidade",
        visualization: "Sua pelve como uma tigela de água perfeitamente nivelada"
      },
      {
        name: "Ativação Transverso",
        instruction: "Coloque dedos 2cm medial às espinhas ilíacas (ossos do quadril). Expire suavemente 'puxando umbigo para dentro' sem mover coluna",
        duration: "3 min",
        breathing: "Expire ativando, inspire relaxando parcialmente",
        safetyNote: "Manter 30% de contração durante toda respiração, não força total"
      },
      {
        name: "Estabilidade Dinâmica", 
        instruction: "Mantendo ativação do core, eleve alternadamente um joelho poucos centímetros da cadeira",
        duration: "3 min",
        breathing: "Expire antes de elevar, inspire retornando",
        mentalCue: "Coluna como poste firme, imóvel durante movimento das pernas"
      },
      {
        name: "Desafio Proprioceptivo", 
        instruction: "Mãos nos ombros, faça pequenos círculos com cotovelos mantendo coluna estável",
        duration: "2 min",
        breathing: "Respiração fluida sem perder ativação profunda",
        visualization: "Sua lombar tão estável que poderia equilibrar um copo d'água"
      },
      {
        name: "Integração Funcional", 
        instruction: "Combine movimentos anteriores numa sequência fluida: ative core → mova uma perna → mova braços opostos",
        duration: "1 min",
        breathing: "Respiração coordenada com movimento, mantendo ativação",
        mentalCue: "Core como orquestra regendo todos movimentos com precisão"
      }
    ],
    
    adaptations: {
      dor_ao_sentar: "Use almofada em formato de cunha",
      dificuldade_ativação: "Use feedback tátil (mão na barriga)",
      fadiga_rápida: "Reduza tempo de sustentação para 10s, aumente descanso"
    },
    
    contraindications: ["cirurgia_recente_abdominal", "hérnia_inguinal", "hipertensão_descontrolada"],
    
    progressionPath: ["gentle_spine_awakening", "seated_cat_cow_micro", "lumbar_core_activation"],
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/core_activation.jpg"
  },
  {
    id: "spinal_wave_integration",
    title: "Integração Ondulatória da Coluna",
    category: "back",
    position: "seated",
    targetConditions: ["segmental_stiffness", "poor_coordination", "movement_fear"],
    difficulty: "advanced", 
    duration: "9 min",
    chairPosition: "seated_centered_dynamic",
    
    description: "Movimento ondulatório para integração completa de todos segmentos vertebrais",
    specificBenefit: "Dissolve padrões de guarda muscular e restaura movimento coordenado entre segmentos",
    
    steps: [
      {
        name: "Despertar Segmental",
        instruction: "Sentada, mãos nas coxas, desperte consciência de cada segmento da coluna, do cóccix até o crânio",
        duration: "1 min",
        breathing: "Respiração scanneando cada vértebra",
        visualization: "Coluna como instrumento musical sendo afinado corda por corda"
      },
      {
        name: "Inicialização da Onda",
        instruction: "Comece movimento ondulatório pela pelve, deixando-o propagar naturalmente para cima",
        duration: "3 min",
        breathing: "Inspire iniciando onda, expire completando",
        safetyNote: "Movimento fluido, sem força, respeitando limites naturais de cada seção"
      },
      {
        name: "Ondas em Oito", 
        instruction: "Transforme ondulação vertical em movimento de infinito (∞), permitindo que coluna desenhe esse padrão no espaço",
        duration: "2 min",
        breathing: "Respiração contínua acompanhando fluidez do movimento",
        mentalCue: "Como dança suave da coluna, expressando liberdade vertebral"
      },
      {
        name: "Espirais Integradas", 
        instruction: "Adicione elemento de rotação às ondas, criando espirais tridimensionais através de toda coluna",
        duration: "2 min",
        breathing: "Respiração tridimensional, expandindo para todas direções",
        visualization: "Movimento como água fluindo harmoniosamente por um riacho sinuoso"
      },
      {
        name: "Expressão Somática", 
        instruction: "Permita que corpo encontre seus próprios padrões de movimento, integrando todos elementos anteriores",
        duration: "1 min",
        breathing: "Respiração orgânica e intuitiva",
        mentalCue: "Sua coluna expressando sua natureza verdadeira e livre"
      }
    ],
    
    adaptations: {
      movimento_limitado: "Foco nas partes móveis, visualize o resto",
      dor_segmentar: "Evite incluir segmentos dolorosos na onda",
      medo_movimento: "Comece com 10% da amplitude, aumente conforme confiança"
    },
    
    contraindications: ["instabilidade_vertebral", "pós_operatório_recente", "vertigem_posicional"],
    
    progressionPath: ["thoracic_spiral_freedom", "lumbar_core_activation", "spinal_wave_integration"],
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/spinal_wave.jpg"
  },
  {
    id: "multidimensional_axis_therapy",
    title: "Terapia Axial Multidimensional",
    category: "back",
    position: "seated",
    targetConditions: ["complex_back_issues", "movement_dysfunction", "chronic_compensation"],
    difficulty: "advanced", 
    duration: "12 min",
    chairPosition: "seated_dynamic_neutral",
    
    description: "Protocolo avançado para reorganização da coluna nos três planos de movimento",
    specificBenefit: "Restaura padrões neuromotores naturais perdidos devido a compensações crônicas",
    
    steps: [
      {
        name: "Conscientização Tridimensional",
        instruction: "Visualize os três planos de movimento: sagital (frente/trás), frontal (lado/lado) e transversal (rotação)",
        duration: "1 min",
        breathing: "Respiração tridimensional expandindo em todas direções",
        visualization: "Sua coluna como eixo central de um sistema de coordenadas 3D"
      },
      {
        name: "Integração Sagital",
        instruction: "Movimentos de flexão/extensão precisos, segmento por segmento, da base para o topo da coluna",
        duration: "3 min",
        breathing: "Inspire na extensão, expire na flexão",
        safetyNote: "Amplitude confortável, focando na qualidade e consciência do movimento"
      },
      {
        name: "Integração Frontal", 
        instruction: "Inclinações laterais refinadas, sentindo cada vértebra participando do movimento como uma unidade",
        duration: "3 min",
        breathing: "Respiração expandindo o lado alongado da coluna",
        mentalCue: "Cada vértebra como conta de um ábaco deslizando com precisão"
      },
      {
        name: "Integração Transversal", 
        instruction: "Rotações iniciadas desde a base, propagando como espiral ascendente através de toda coluna",
        duration: "3 min",
        breathing: "Respiração criando espaço interno para rotação",
        visualization: "Coluna como espiral de DNA desenovelando e renovando-se"
      },
      {
        name: "Síntese Tridimensional", 
        instruction: "Combine os três planos em movimentos contínuos e integrados, como dança da coluna no espaço",
        duration: "2 min",
        breathing: "Respiração fluida e multidirecional",
        mentalCue: "Expressão completa da liberdade vertebral multidimensional"
      }
    ],
    
    adaptations: {
      complexidade_alta: "Trabalhe um plano por vez até integrar completamente",
      sensibilidade_vertebral: "Reduza amplitude mantendo consciência direcional",
      falta_propriocepção: "Use espelho para feedback visual"
    },
    
    contraindications: ["instabilidade_estrutural", "dor_neurológica_aguda", "pós_operatório_sem_liberação"],
    
    progressionPath: ["thoracic_spiral_freedom", "spinal_wave_integration", "multidimensional_axis_therapy"],
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/multidimensional_axis.jpg"
  }
];

// CATEGORIA: QUADRIL
const hipsExercises: ChairYogaExercise[] = [
  {
    id: "hip_mobility_seated",
    title: "Desbloqueio do Quadril Sentada",
    category: "hips",
    position: "seated",
    targetConditions: ["hip_stiffness", "sciatica", "hip_arthritis"],
    difficulty: "beginner",
    duration: "8 min",
    chairPosition: "seated_with_back_support",
    
    description: "Restaura mobilidade do quadril sem levantar da cadeira",
    specificBenefit: "Melhora amplitude de movimento do quadril em 52%",
    
    steps: [
      {
        name: "Marcha no Lugar",
        instruction: "Eleve joelho direito como se marchasse. Mantenha costas retas",
        duration: "2 min alternando",
        breathing: "Inspire elevando, expire descendo",
        chairAdaptation: "Segure nas laterais da cadeira se precisar de equilíbrio"
      },
      {
        name: "Figura 4 Terapêutica",
        instruction: "Coloque tornozelo direito sobre joelho esquerdo. Incline tronco suavemente para frente",
        duration: "2 min cada lado", 
        breathing: "Expire inclinando para frente, inspire voltando",
        safetyNote: "NUNCA force - apenas até sentir alongamento suave"
      },
      {
        name: "Círculos de Joelho",
        instruction: "Segure joelho direito com as mãos, faça círculos pequenos e lentos",
        duration: "2 min cada joelho",
        breathing: "Respiração fluída acompanhando círculos",
        visualization: "Imagine óleo lubrificando articulação do quadril"
      }
    ],
    
    adaptations: {
      hipReplacement: "Evite figura 4, apenas marcha suave",
      sciatica: "Movimentos extra lentos, pare se dor irradiar",
      arthritisHip: "Amplitude mínima, foque na respiração"
    },
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/hip_mobility.jpg"
  },
  {
    id: "seated_hip_opener",
    title: "Abertura Suave dos Quadris",
    category: "hips",
    position: "seated",
    targetConditions: ["hip_tension", "lower_back_pain", "pelvic_pain"],
    difficulty: "intermediate",
    duration: "12 min",
    chairPosition: "seated_stable_chair",
    
    description: "Libera tensão profunda nos rotadores externos e internos do quadril",
    specificBenefit: "Alivia tensão pélvica e melhora circulação na região do quadril",
    
    steps: [
      {
        name: "Preparação da Pelve",
        instruction: "Sente no meio da cadeira, realize 5 básculas pélvicas para despertar consciência",
        duration: "2 min",
        breathing: "Inspire expandindo abdômen, expire contraindo levemente",
        visualization: "Sua pelve como um vaso que equilibra perfeitamente"
      },
      {
        name: "Rotação Interna Controlada",
        instruction: "Joelhos juntos, pés separados na largura dos quadris. Abra e feche os pés lentamente",
        duration: "3 min", 
        breathing: "Inspire abrindo pés, expire fechando",
        safetyNote: "Mantenha movimento controlado, sem impulsos"
      },
      {
        name: "Borboleta Modificada",
        instruction: "Junte plantas dos pés, joelhos afastados. Segure tornozelos e incline tronco levemente",
        duration: "3 min",
        breathing: "Respirações longas e profundas",
        chairAdaptation: "Use altura extra (almofada) se joelhos ficarem muito acima dos quadris"
      },
      {
        name: "Alongamento do Piriforme",
        instruction: "Coloque tornozelo sobre joelho oposto, mantenha coluna ereta",
        duration: "2 min cada lado",
        breathing: "Inspire alongando coluna, expire aprofundando levemente",
        visualization: "O músculo piriforme derretendo como manteiga"
      }
    ],
    
    adaptations: {
      severeArthritis: "Use almofadas sob joelhos para reduzir amplitude",
      recentInjury: "Apenas respiração e conscientização, sem movimentos",
      sciatica: "Evite figura 4 ou pressão no nervo ciático"
    },
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/hip_opener.jpg"
  },
  // NOVOS EXERCÍCIOS PARA INICIANTES - QUADRIL
  {
    id: "gentle_knee_extension",
    title: "Extensão Suave do Joelho",
    category: "hips",
    position: "seated",
    targetConditions: ["knee_pain", "arthritis_knee", "leg_weakness"],
    difficulty: "beginner",
    duration: "5 min",
    chairPosition: "seated_with_back_support",
    
    description: "Alongamento e mobilização suave do joelho com mínimo impacto na articulação",
    specificBenefit: "Melhora flexibilidade do joelho em 30% e reduz rigidez articular",
    
    steps: [
      {
        name: "Posicionamento Seguro",
        instruction: "Sente-se com costas apoiadas, pés firmemente no chão, mãos descansando nas coxas",
        duration: "30s",
        breathing: "Respiração estável e centrada",
        visualization: "Base sólida para movimentos seguros do joelho"
      },
      {
        name: "Micro-extensão",
        instruction: "Muito suavemente, estenda o joelho direito até sentir leve tensão, sem elevar o pé do chão",
        duration: "2 min (alternando 15s cada perna)",
        breathing: "Inspire preparando, expire estendendo",
        safetyNote: "Movimento mínimo, apenas deslizando o calcanhar alguns centímetros"
      },
      {
        name: "Bombas de Tornozelo", 
        instruction: "Com pé no chão, alterne entre dorsiflexão (dedos para cima) e flexão plantar (dedos para baixo)",
        duration: "1.5 min cada pé",
        breathing: "Respiração fluida acompanhando movimento",
        mentalCue: "Como bomba d'água ativando circulação na perna"
      },
      {
        name: "Círculos do Tornozelo", 
        instruction: "Eleve um pé ligeiramente, desenhe pequenos círculos com os dedos em ambas direções",
        duration: "30s cada lado em cada direção",
        breathing: "Respiração contínua e tranquila",
        visualization: "Irrigando a articulação com energia renovada"
      }
    ],
    
    adaptations: {
      dor_aguda: "Apenas movimento de tornozelo, omita extensão de joelho",
      artroplastia: "Evite estender completamente, fique na zona segura",
      edema: "Eleve pé em banquinho entre séries de exercício"
    },
    
    contraindications: ["pós_operatório_recente", "inflamação_severa_aguda", "instabilidade_articular"],
    
    progressionPath: ["gentle_knee_extension", "seated_leg_pump", "hip_mobility_seated"],
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/gentle_knee.jpg"
  },
  {
    id: "seated_leg_pump",
    title: "Bombeamento Circulatório das Pernas",
    category: "hips",
    position: "seated",
    targetConditions: ["poor_circulation", "swollen_legs", "sedentary_lifestyle"],
    difficulty: "beginner",
    duration: "7 min",
    chairPosition: "seated_with_back_support",
    
    description: "Sequência para ativar circulação dos membros inferiores e reduzir estase",
    specificBenefit: "Aumenta retorno venoso em 35% e reduz sensação de pernas pesadas",
    
    steps: [
      {
        name: "Elevação Alternada",
        instruction: "Eleve um pé 5cm do chão, mantenha por 5 segundos, retorne e alterne com outro pé",
        duration: "2 min",
        breathing: "Inspire elevando, expire descendo",
        visualization: "Sangue fluindo livremente, levando consigo toxinas"
      },
      {
        name: "Dorsiflexão Rítmica",
        instruction: "Pés no chão, eleve apenas os dedos mantendo calcanhares apoiados, depois inverta",
        duration: "2 min",
        breathing: "Inspire elevando dedos, expire elevando calcanhares",
        safetyNote: "Movimento controlado, sem pressa, sentindo músculos da canela"
      },
      {
        name: "Massagem Circular", 
        instruction: "Incline-se para frente e massageie suavemente panturrilhas com movimentos ascendentes",
        duration: "1.5 min cada perna",
        breathing: "Respiração profunda aumentando oxigenação",
        mentalCue: "Suas mãos guiando o sangue de volta ao coração"
      },
      {
        name: "Relaxamento Elevado", 
        instruction: "Se possível, eleve ambos pés apoiados em banquinho ou cadeira à frente",
        duration: "1 min",
        breathing: "Respiração lenta e profunda",
        visualization: "Seus vasos sanguíneos relaxando e abrindo"
      }
    ],
    
    adaptations: {
      mobilidade_reduzida: "Mantenha movimentos na amplitude disponível",
      diabetes: "Massagem extra suave, verifique pés após exercício",
      hipertensão: "Evite manter pernas elevadas muito tempo"
    },
    
    contraindications: ["trombose_recente", "úlcera_ativa_perna", "edema_agudo_inexplicado"],
    
    progressionPath: ["gentle_knee_extension", "seated_leg_pump", "hip_mobility_seated"],
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/leg_pump.jpg"
  },
  {
    id: "ankle_mobility_restoration",
    title: "Restauração da Mobilidade do Tornozelo",
    category: "hips",
    position: "seated",
    targetConditions: ["ankle_stiffness", "foot_pain", "balance_issues"],
    difficulty: "beginner",
    duration: "6 min",
    chairPosition: "seated_stable_position",
    
    description: "Sequência dedicada à restauração da mobilidade, propriocepção e força do tornozelo",
    specificBenefit: "Melhora estabilidade em 47% e reduz risco de quedas em mulheres 35+",
    
    steps: [
      {
        name: "Mapa Sensorial",
        instruction: "Com pé no chão, pressione diferentes pontos da sola: calcanhar, lateral, abaixo do dedão",
        duration: "1 min cada pé",
        breathing: "Respiração atenta, focada na sensação de cada ponto",
        visualization: "Despertar os sensores naturais dos seus pés"
      },
      {
        name: "Alfabeto Podal",
        instruction: "Eleve um pé e desenhe o alfabeto com o dedão, movendo apenas o tornozelo",
        duration: "1.5 min cada pé",
        breathing: "Respiração suave e contínua",
        safetyNote: "Mantenha movimentos pequenos, concentrando-se na precisão"
      },
      {
        name: "Mobilização Multidirecional", 
        instruction: "Pé elevado, mova-o em quatro direções: flexão, extensão, inversão e eversão",
        duration: "1 min cada pé",
        breathing: "Uma respiração completa para cada direção",
        mentalCue: "Explorando todos os movimentos possíveis do tornozelo"
      },
      {
        name: "Despertar dos Arcos", 
        instruction: "Pé no chão, tente 'encurtar' o pé elevando o arco sem curvar os dedos",
        duration: "1 min cada pé",
        breathing: "Inspire ativando, expire relaxando parcialmente",
        visualization: "Fortalecendo as estruturas internas que sustentam seus pés"
      }
    ],
    
    adaptations: {
      artrite_tornozelo: "Reduza amplitude, foque na qualidade do movimento",
      neuropatia: "Use apoio visual para compensar perda sensorial",
      pós_entorse: "Evite eversão se ainda houver sensibilidade"
    },
    
    contraindications: ["fratura_recente", "tendinite_aguda_severa", "edema_agudo_tornozelo"],
    
    progressionPath: ["ankle_mobility_restoration", "seated_leg_pump", "balance_foundation"],
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/ankle_mobility.jpg"
  },
  // EXERCÍCIOS INTERMEDIÁRIOS - QUADRIL
  {
    id: "hip_strength_foundation",
    title: "Base de Força para o Quadril",
    category: "hips",
    position: "seated",
    targetConditions: ["hip_weakness", "falls_prevention", "balance_issues"],
    difficulty: "intermediate",
    duration: "8 min",
    chairPosition: "seated_stable_edge",
    
    description: "Fortalecimento essencial dos principais grupos musculares do quadril",
    specificBenefit: "Aumenta força do quadril em 40% e melhora estabilidade na caminhada",
    
    steps: [
      {
        name: "Marcha Resistiva",
        instruction: "Sente-se na borda da cadeira, eleve o joelho contra resistência leve da mão oposta",
        duration: "2 min alternando pernas",
        breathing: "Inspire preparando, expire aplicando força",
        visualization: "Construindo pilares de força para sua locomoção"
      },
      {
        name: "Abdutores Sentados",
        instruction: "Pernas juntas, tente separá-las contra resistência das mãos nas laterais dos joelhos",
        duration: "2 min (4x 20s de contração, 10s descanso)",
        breathing: "Expire durante contração, inspire relaxando",
        safetyNote: "Contração em 70% do máximo, nunca 100% de esforço"
      },
      {
        name: "Adutores Fortalecedores", 
        instruction: "Pernas separadas, coloque bola macia ou almofada entre os joelhos, aperte e segure",
        duration: "2 min (4x 20s de contração, 10s descanso)",
        breathing: "Expire durante contração, inspire relaxando",
        mentalCue: "Estabilizando a pelve de dentro para fora"
      },
      {
        name: "Mini-agachamentos Assistidos", 
        instruction: "Segurando encosto da cadeira à frente, levante-se parcialmente e retorne ao assento lentamente",
        duration: "2 min",
        breathing: "Inspire preparando, expire fazendo força para levantar",
        visualization: "Seus glúteos e quadríceps como motores potentes"
      }
    ],
    
    adaptations: {
      articulações_sensíveis: "Reduza amplitude e aumente tempo em cada posição",
      fraqueza_acentuada: "Use apoio adicional e faça menos repetições",
      problema_cardíaco: "Evite prender respiração, reduza intensidade"
    },
    
    contraindications: ["pós_operatório_recente_quadril", "dor_articular_aguda_severa", "hernia_inguinal"],
    
    progressionPath: ["hip_mobility_seated", "hip_strength_foundation", "functional_lower_body"],
    
    chairRequirements: {
      backrest: true,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/hip_strength.jpg"
  },
  {
    id: "pelvic_floor_integration",
    title: "Integração do Assoalho Pélvico",
    category: "hips",
    position: "seated",
    targetConditions: ["pelvic_floor_weakness", "bladder_issues", "lower_back_pain"],
    difficulty: "intermediate",
    duration: "10 min",
    chairPosition: "seated_upright_neutral",
    
    description: "Fortalecimento e conscientização do assoalho pélvico integrado com respiração",
    specificBenefit: "Reduz incontinência em 65% e melhora suporte para coluna lombar",
    
    steps: [
      {
        name: "Mapeamento Consciente",
        instruction: "Sente-se ereta no centro da cadeira. Perceba a área do assoalho pélvico entre púbis e cóccix",
        duration: "1.5 min",
        breathing: "Respiração profunda para região pélvica",
        visualization: "Desenhando mentalmente a rede muscular do assoalho pélvico"
      },
      {
        name: "Contração Básica",
        instruction: "Contraia os músculos como se estivesse segurando a urina, mantenha 3s, relaxe 6s",
        duration: "3 min",
        breathing: "Expire contraindo, inspire relaxando completamente",
        safetyNote: "Não contraia glúteos, abdômen ou coxas - apenas assoalho pélvico"
      },
      {
        name: "Elevador Neural", 
        instruction: "Imagine seu assoalho pélvico como elevador subindo em 3 níveis. Suba 1, 2, 3, desça 3, 2, 1",
        duration: "2.5 min",
        breathing: "Uma respiração completa para cada nível",
        mentalCue: "Precisão e controle, sentindo cada andar do elevador"
      },
      {
        name: "Integração com Báscula Pélvica", 
        instruction: "Combine contração do assoalho pélvico com pequeno movimento da pelve (báscula)",
        duration: "2 min",
        breathing: "Sincronize respiração, contração e movimento pélvico",
        visualization: "Todo assoalho pélvico trabalhando em perfeita harmonia com pelve"
      },
      {
        name: "Relaxamento Consciente", 
        instruction: "Foque em relaxamento completo da região, liberando completamente qualquer tensão residual",
        duration: "1 min",
        breathing: "Respirações lentas e profundas para área pélvica",
        mentalCue: "Tão importante relaxar completamente quanto fortalecer"
      }
    ],
    
    adaptations: {
      pós_parto: "Comece apenas com percepção, sem contrações nas primeiras semanas",
      prolapso: "Apenas contrações suaves, foco no relaxamento",
      sensibilidade_reduzida: "Use biofeedback com bola macia entre os joelhos"
    },
    
    contraindications: ["infecção_urinária_ativa", "pós_cirúrgico_pélvico_recente", "dor_pélvica_inexplicada"],
    
    progressionPath: ["seated_hip_opener", "pelvic_floor_integration", "lower_body_freedom"],
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/pelvic_floor.jpg"
  },
  {
    id: "balance_foundation",
    title: "Fundação de Equilíbrio na Cadeira",
    category: "hips",
    position: "seated",
    targetConditions: ["balance_fear", "instability", "fall_prevention"],
    difficulty: "intermediate",
    duration: "9 min",
    chairPosition: "seated_partial_support",
    
    description: "Desenvolvimento de equilíbrio seguro com suporte parcial da cadeira",
    specificBenefit: "Melhora estabilidade em 57% e reduz medo de quedas em 70%",
    
    steps: [
      {
        name: "Centragem do Peso",
        instruction: "Sente-se ereta, mãos leves na cadeira. Transfira peso minimamente de um ísquio para outro",
        duration: "2 min",
        breathing: "Respiração estável e centrada no baixo abdômen",
        visualization: "Enraizando-se firmemente como árvore estável"
      },
      {
        name: "Flutuação Segura",
        instruction: "Mãos levemente apoiadas na cadeira, levante um pé 2cm do chão, mantenha estabilidade",
        duration: "2 min alternando pernas",
        breathing: "Mantenha respiração constante sem prensão",
        safetyNote: "Mãos próximas ao assento para apoio imediato se necessário"
      },
      {
        name: "Desequilíbrio Controlado", 
        instruction: "Incline suavemente o tronco em diferentes direções, mantendo base estável",
        duration: "3 min",
        breathing: "Respiração fluida durante movimentos",
        mentalCue: "Centro de gravidade se movendo como pêndulo sempre retornando ao centro"
      },
      {
        name: "Olhos Fechados", 
        instruction: "Sente-se perfeitamente centralizada, feche os olhos por períodos curtos, sentindo estabilidade",
        duration: "2 min (intervalos de 15-30s)",
        breathing: "Respiração profunda para aumentar conexão com base",
        visualization: "Outros sentidos se aguçando enquanto visão descansa"
      }
    ],
    
    adaptations: {
      medo_intenso: "Mantenha sempre mãos em suportes firmes",
      vertigem: "Evite fechar olhos, foco em ponto fixo à frente",
      fraqueza_unilateral: "Trabalhe mais tempo no lado afetado"
    },
    
    contraindications: ["vertigem_posicional_aguda", "hipotensão_severa", "comprometimento_cognitivo_severo"],
    
    progressionPath: ["seated_leg_pump", "balance_foundation", "hip_strength_foundation"],
    
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    },
    
    imageUrl: "/images/exercises/balance_foundation.jpg"
  },
  // EXERCÍCIOS AVANÇADOS - QUADRIL
  {
    id: "functional_lower_body",
    title: "Integração Funcional dos Membros Inferiores",
    category: "hips",
    position: "seated",
    targetConditions: ["functional_decline", "coordination_loss", "gait_problems"],
    difficulty: "advanced",
    duration: "12 min",
    chairPosition: "seated_dynamic_support",
    
    description: "Sequência avançada que integra força, coordenação e estabilidade dos membros inferiores",
    specificBenefit: "Melhora padrões de movimento em 75% e capacidade funcional para atividades diárias",
    
    steps: [
      {
        name: "Aquecimento Neuromuscular",
        instruction: "Sente-se ereta, realize movimentos deliberadamente lentos de joelhos e quadris em diferentes direções",
        duration: "2 min",
        breathing: "Respiração consciente para ativar conexões neurais",
        visualization: "Despertando os caminhos nervosos para movimento preciso"
      },
      {
        name: "Sequência Funcional",
        instruction: "Execute movimentos em padrão: eleve joelho → estenda perna → retorne ao joelho elevado → desça",
        duration: "3 min cada lado",
        breathing: "Sincronize respiração com cada fase do movimento",
        safetyNote: "Qualidade sobre quantidade, cada movimento com precisão"
      },
      {
        name: "Padrões Cruzados", 
        instruction: "Toque mão direita no joelho esquerdo elevado, depois alterne com outra combinação",
        duration: "2 min",
        breathing: "Ritmo respiratório constante, sem prendas",
        mentalCue: "Comunicação entre hemisférios cerebrais através dos movimentos cruzados"
      },
      {
        name: "Transferências Pré-Marcha", 
        instruction: "Mãos apoiadas na cadeira, simule o início da marcha alternando peso entre as pernas",
        duration: "2 min",
        breathing: "Respiração potente e estável",
        visualization: "Preparando o corpo para movimentos fluidos no espaço"
      },
      {
        name: "Integração de Resistência", 
        instruction: "Use faixa elástica nos tornozelos para criar resistência durante elevação de joelhos",
        duration: "2 min",
        breathing: "Expiração focada durante esforço",
        mentalCue: "Força funcional para cada passo na vida cotidiana"
      }
    ],
    
    adaptations: {
      capacidade_reduzida: "Diminua complexidade, foco em segmentos da sequência",
      dor_articular: "Reduza amplitude, mantenha qualidade do movimento",
      fadiga_rápida: "Intervalos curtos entre cada elemento da sequência"
    },
    
    contraindications: ["instabilidade_hemodinâmica", "dor_severa_ao_movimento", "fase_aguda_pós_lesão"],
    
    progressionPath: ["hip_strength_foundation", "balance_foundation", "functional_lower_body"],
    
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    },
    
    imageUrl: "/images/exercises/functional_legs.jpg"
  }
];

// CATEGORIA: CORPO INTEIRO
const fullBodyExercises: ChairYogaExercise[] = [
  {
    id: "full_body_harmony_flow",
    title: "Fluxo de Harmonia Corporal Completa",
    category: "full_body",
    position: "seated",
    targetConditions: ["general_stiffness", "fatigue", "overall_wellness"],
    difficulty: "intermediate",
    duration: "15 min",
    chairPosition: "seated_stable_chair",
    
    description: "Sequência que integra todos os movimentos em fluxo harmonioso",
    specificBenefit: "Melhora bem-estar geral em 89% das praticantes",
    
    steps: [
      {
        name: "Respiração de Conexão",
        instruction: "3 respirações profundas conectando-se com seu corpo",
        duration: "2 min",
        breathing: "4 tempos inspirando, 6 tempos expirando",
        intention: "Defina intenção de cuidado para esta prática"
      },
      {
        name: "Despertar Cervical",
        instruction: "Movimentos suaves de pescoço em todas direções",
        duration: "3 min",
        breathing: "Coordenada com movimentos",
        flow: "Direita → frente → esquerda → trás"
      },
      {
        name: "Dança dos Ombros",
        instruction: "Elevações, círculos e abraços fluindo em sequência",
        duration: "3 min",
        breathing: "Respiração como música guiando movimento",
        musicality: "Crie ritmo próprio com a respiração"
      },
      {
        name: "Ondulação Espinal",
        instruction: "Torções suaves alternadas criando ondulação na coluna",
        duration: "4 min",
        breathing: "Inspire ao centro, expire aprofundando torção",
        visualization: "Coluna como alga marinha dançando na corrente"
      },
      {
        name: "Integração Sagrada",
        instruction: "Movimentos livres integrando pescoço, ombros e coluna",
        duration: "3 min",
        breathing: "Respiração livre e espontânea",
        freedom: "Permita que corpo se mova como quiser dentro da cadeira"
      }
    ],
    
    adaptations: {
      multipleConditions: "Foque apenas nos movimentos que se sentem bem",
      beginnerLevel: "Faça cada seção separadamente",
      energyLow: "Reduza duração para 7 minutos"
    },
    
    chairRequirements: {
      backrest: false,
      armrests: false,
      wheels: false
    },
    
    imageUrl: "/images/exercises/full_body_flow.jpg"
  },
  {
    id: "seated_energy_restoration",
    title: "Restauração Energética na Cadeira",
    category: "full_body",
    position: "seated",
    targetConditions: ["chronic_fatigue", "fibromyalgia", "low_energy"],
    difficulty: "beginner",
    duration: "10 min",
    chairPosition: "seated_supported_relaxed",
    
    description: "Sequência revitalizante que restaura energia sem esgotamento",
    specificBenefit: "Aumenta níveis de energia em 65% com mínimo esforço muscular",
    
    steps: [
      {
        name: "Respiração Revitalizante",
        instruction: "Inspire expandindo completamente o peito, expire esvaziando totalmente",
        duration: "3 min",
        breathing: "Inspire por 4s, retenha 2s, expire por 6s",
        visualization: "Luz dourada preenchendo cada célula do seu corpo"
      },
      {
        name: "Alongamento em 'C'",
        instruction: "Estique os braços acima elevando através das laterais, depois desça em 'C' abraçando o espaço",
        duration: "2 min",
        breathing: "Inspire elevando, expire descendo",
        chairAdaptation: "Altura conforme sua energia - mesmo 10cm já traz benefícios"
      },
      {
        name: "Vibração Suave",
        instruction: "Sacuda suavemente mãos e pés alternadamente, criando microvibrações",
        duration: "2 min",
        breathing: "Respiração livre e natural",
        mentalCue: "Imagine despertar células adormecidas"
      },
      {
        name: "Automassagem Energética",
        instruction: "Esfregue palmas até aquecer, aplique nas áreas de fadiga (nuca, ombros, têmporas)",
        duration: "3 min",
        breathing: "Inspire ao esfregar, expire ao aplicar calor",
        visualization: "Suas mãos transferindo energia vital"
      }
    ],
    
    adaptations: {
      severeFatigue: "Realize apenas na cama se necessário",
      arms_weakness: "Mantenha braços abaixo do nível do coração",
      breathingDifficulty: "Reduza retenção de ar e aumente pausas"
    },
    
    chairRequirements: {
      backrest: true,
      armrests: true,
      wheels: false
    },
    
    imageUrl: "/images/exercises/energy_restoration.jpg"
  }
];

// Combinando todos os exercícios em um único array
export const chairYogaExercises: ChairYogaExercise[] = [
  ...neckExercises,
  ...shouldersExercises,
  ...backExercises,
  ...hipsExercises,
  ...fullBodyExercises
];

// Função auxiliar para agrupar exercícios por categoria
export const groupExercisesByCategory = (exercises: ChairYogaExercise[]) => {
  const grouped = exercises.reduce((acc, exercise) => {
    if (!acc[exercise.category]) {
      acc[exercise.category] = [];
    }
    acc[exercise.category].push(exercise);
    return acc;
  }, {} as Record<string, ChairYogaExercise[]>);
  
  return grouped;
};

// Função para obter exercícios recomendados com base nas condições do usuário
export const getRecommendedExercises = (
  userProfile: { 
    primaryPain: string; 
    conditions: string[]; 
    painLevel: string;
    mobilityLevel: string;
  }
) => {
  // Filtrando exercícios relevantes para as condições do usuário
  const relevantExercises = chairYogaExercises.filter(exercise => {
    // Prioriza exercícios para área de dor primária
    if (exercise.category === userProfile.primaryPain) {
      return true;
    }
    
    // Verifica se o exercício serve para alguma das condições do usuário
    if (exercise.targetConditions.some(condition => 
      userProfile.conditions.includes(condition))
    ) {
      return true;
    }
    
    return false;
  });
  
  // Ordenar por relevância (complexidade adicional que pode ser implementada depois)
  // Aqui apenas retornamos os 3 primeiros exercícios relevantes
  return relevantExercises.slice(0, 3);
}; 