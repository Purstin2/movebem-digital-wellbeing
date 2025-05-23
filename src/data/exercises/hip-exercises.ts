import { Exercise } from '../types';

export const hipExercises: Exercise[] = [
  {
    id: 'hip-1',
    name: 'Alongamento Suave do Quadril',
    description: 'Um alongamento gentil para aliviar a tensão no quadril.',
    difficulty: 'beginner',
    duration: 5,
    category: 'hip',
    steps: [
      'Sente-se em uma cadeira com os pés apoiados no chão',
      'Coloque o tornozelo direito sobre o joelho esquerdo',
      'Mantenha a coluna ereta e relaxe os ombros',
      'Permaneça nesta posição por 30 segundos',
      'Repita do outro lado'
    ],
    benefits: [
      'Alivia a tensão no quadril',
      'Melhora a flexibilidade',
      'Reduz dores na região lombar'
    ],
    precautions: [
      'Não force o alongamento',
      'Pare se sentir dor',
      'Mantenha a respiração constante'
    ],
    imageUrl: '/exercises/hip-stretch.jpg',
    videoUrl: '/videos/hip-stretch.mp4',
    equipment: ['chair'],
    targetMuscles: ['gluteus', 'hip flexors'],
    modifications: [
      'Use uma almofada sob o quadril se necessário',
      'Reduza o tempo de alongamento para 15 segundos',
      'Mantenha os pés no chão se o alongamento for muito intenso'
    ]
  },
  {
    id: 'hip-2',
    name: 'Movimento Circular do Quadril',
    description: 'Exercício suave para melhorar a mobilidade do quadril.',
    difficulty: 'beginner',
    duration: 5,
    category: 'hip',
    steps: [
      'Sente-se em uma cadeira com os pés apoiados no chão',
      'Coloque as mãos nos quadris',
      'Faça movimentos circulares suaves com o quadril',
      '5 círculos para cada lado',
      'Mantenha a coluna ereta durante o movimento'
    ],
    benefits: [
      'Aumenta a mobilidade do quadril',
      'Reduz a rigidez articular',
      'Melhora a circulação na região'
    ],
    precautions: [
      'Faça movimentos pequenos e controlados',
      'Não force a amplitude do movimento',
      'Pare se sentir desconforto'
    ],
    imageUrl: '/exercises/hip-circles.jpg',
    videoUrl: '/videos/hip-circles.mp4',
    equipment: ['chair'],
    targetMuscles: ['hip flexors', 'gluteus'],
    modifications: [
      'Reduza a amplitude do movimento',
      'Faça menos repetições',
      'Use o encosto da cadeira para apoio se necessário'
    ]
  },
  {
    id: 'hip-3',
    name: 'Elevação Suave do Joelho',
    description: 'Exercício para fortalecer os músculos do quadril de forma segura.',
    difficulty: 'beginner',
    duration: 5,
    category: 'hip',
    steps: [
      'Sente-se em uma cadeira com os pés apoiados no chão',
      'Mantenha a coluna ereta',
      'Eleve suavemente o joelho direito',
      'Mantenha por 3 segundos',
      'Volte à posição inicial',
      'Repita 5 vezes de cada lado'
    ],
    benefits: [
      'Fortalece os músculos do quadril',
      'Melhora a estabilidade',
      'Aumenta a circulação nas pernas'
    ],
    precautions: [
      'Não eleve o joelho acima do quadril',
      'Mantenha o movimento controlado',
      'Pare se sentir dor'
    ],
    imageUrl: '/exercises/knee-lift.jpg',
    videoUrl: '/videos/knee-lift.mp4',
    equipment: ['chair'],
    targetMuscles: ['hip flexors', 'quadriceps'],
    modifications: [
      'Reduza o número de repetições',
      'Diminua o tempo de sustentação',
      'Use as mãos para apoio se necessário'
    ]
  },
  {
    id: 'hip-4',
    name: 'Alongamento do Quadril em Pé',
    description: 'Alongamento suave para o quadril que pode ser feito em pé.',
    difficulty: 'beginner',
    duration: 5,
    category: 'hip',
    steps: [
      'Fique em pé com os pés afastados na largura dos ombros',
      'Segure em uma cadeira ou parede para apoio',
      'Cruze a perna direita sobre a esquerda',
      'Dobre levemente os joelhos',
      'Mantenha por 20 segundos',
      'Repita do outro lado'
    ],
    benefits: [
      'Melhora a flexibilidade do quadril',
      'Alivia a tensão muscular',
      'Aumenta a amplitude de movimento'
    ],
    precautions: [
      'Use apoio adequado',
      'Não force o alongamento',
      'Mantenha a coluna ereta'
    ],
    imageUrl: '/exercises/standing-hip-stretch.jpg',
    videoUrl: '/videos/standing-hip-stretch.mp4',
    equipment: ['chair'],
    targetMuscles: ['gluteus', 'hip flexors'],
    modifications: [
      'Reduza o tempo de alongamento',
      'Faça o exercício sentado se necessário',
      'Use uma almofada sob o pé de apoio'
    ]
  },
  {
    id: 'hip-5',
    name: 'Movimento de Pêndulo do Quadril',
    description: 'Exercício suave para melhorar a mobilidade do quadril.',
    difficulty: 'beginner',
    duration: 5,
    category: 'hip',
    steps: [
      'Sente-se em uma cadeira com os pés apoiados no chão',
      'Mantenha a coluna ereta',
      'Mova o quadril suavemente de um lado para o outro',
      'Como um pêndulo',
      '10 movimentos para cada lado'
    ],
    benefits: [
      'Aumenta a mobilidade do quadril',
      'Reduz a rigidez',
      'Melhora a circulação'
    ],
    precautions: [
      'Faça movimentos pequenos e controlados',
      'Mantenha a coluna estável',
      'Pare se sentir desconforto'
    ],
    imageUrl: '/exercises/hip-pendulum.jpg',
    videoUrl: '/videos/hip-pendulum.mp4',
    equipment: ['chair'],
    targetMuscles: ['hip flexors', 'gluteus'],
    modifications: [
      'Reduza a amplitude do movimento',
      'Faça menos repetições',
      'Use o encosto da cadeira para apoio'
    ]
  },
  {
    id: 'hip-6',
    name: 'Estabilização do Core com Quadril',
    description: 'Exercício para fortalecer o core e melhorar a estabilidade do quadril.',
    difficulty: 'beginner',
    duration: 5,
    category: 'hip',
    steps: [
      'Sente-se em uma cadeira com os pés apoiados no chão',
      'Mantenha a coluna ereta e o core contraído',
      'Eleve levemente um pé do chão',
      'Mantenha o equilíbrio por 5 segundos',
      'Volte à posição inicial',
      'Repita 5 vezes de cada lado'
    ],
    benefits: [
      'Fortalece os músculos do core',
      'Melhora a estabilidade do quadril',
      'Auxilia no equilíbrio'
    ],
    precautions: [
      'Mantenha a respiração constante',
      'Não force o movimento',
      'Use o encosto da cadeira se necessário'
    ],
    imageUrl: '/exercises/core-stability.jpg',
    videoUrl: '/videos/core-stability.mp4',
    equipment: ['chair'],
    targetMuscles: ['core', 'hip stabilizers'],
    modifications: [
      'Reduza o tempo de sustentação',
      'Mantenha as mãos no encosto da cadeira',
      'Faça menos repetições'
    ]
  },
  {
    id: 'hip-7',
    name: 'Exercício de Propriocepção',
    description: 'Exercício para melhorar a consciência corporal e equilíbrio.',
    difficulty: 'beginner',
    duration: 5,
    category: 'hip',
    steps: [
      'Fique em pé com os pés afastados na largura dos ombros',
      'Segure em uma cadeira ou parede para apoio',
      'Feche os olhos suavemente',
      'Mantenha o equilíbrio por 10 segundos',
      'Abra os olhos e descanse',
      'Repita 3 vezes'
    ],
    benefits: [
      'Melhora a consciência corporal',
      'Aumenta o equilíbrio',
      'Fortalece a conexão mente-corpo'
    ],
    precautions: [
      'Use apoio adequado',
      'Não feche completamente os olhos se sentir inseguro',
      'Pare se sentir tontura'
    ],
    imageUrl: '/exercises/proprioception.jpg',
    videoUrl: '/videos/proprioception.mp4',
    equipment: ['chair'],
    targetMuscles: ['balance system', 'hip stabilizers'],
    modifications: [
      'Mantenha os olhos abertos inicialmente',
      'Reduza o tempo de sustentação',
      'Use dois pontos de apoio'
    ]
  },
  {
    id: 'hip-8',
    name: 'Mobilização Articular do Quadril',
    description: 'Exercício suave para melhorar a mobilidade articular do quadril.',
    difficulty: 'beginner',
    duration: 5,
    category: 'hip',
    steps: [
      'Sente-se em uma cadeira com os pés apoiados no chão',
      'Mantenha a coluna ereta',
      'Faça movimentos suaves de rotação interna e externa do quadril',
      '5 repetições em cada direção',
      'Mantenha a respiração constante'
    ],
    benefits: [
      'Melhora a mobilidade articular',
      'Reduz a rigidez',
      'Aumenta a amplitude de movimento'
    ],
    precautions: [
      'Faça movimentos pequenos e controlados',
      'Não force a amplitude',
      'Pare se sentir dor'
    ],
    imageUrl: '/exercises/hip-mobilization.jpg',
    videoUrl: '/videos/hip-mobilization.mp4',
    equipment: ['chair'],
    targetMuscles: ['hip rotators', 'hip flexors'],
    modifications: [
      'Reduza a amplitude do movimento',
      'Faça menos repetições',
      'Use o encosto da cadeira para apoio'
    ]
  }
]; 