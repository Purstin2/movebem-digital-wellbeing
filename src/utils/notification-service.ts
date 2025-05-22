import { v4 as uuidv4 } from 'uuid';
import { 
  ContextualNotification,
  CurrentUserState, 
  UserBehavior,
  UserJourney,
  NotificationStory,
  OptimalTimingPatterns
} from '@/types/notification';

// Análise de padrões para timing perfeito
export const analyzeOptimalTiming = (userBehavior: UserBehavior): OptimalTimingPatterns => {
  // Em um caso real, esse seria um algoritmo complexo de análise de dados
  // Aqui simplificamos para valores fixos
  
  // Encontra o horário em que o usuário mais se exercita (mockado)
  const findMostActiveTime = (logs: UserBehavior['exerciseLogs']) => {
    const timeStats: Record<string, number> = {};
    logs.forEach(log => {
      timeStats[log.timeOfDay] = (timeStats[log.timeOfDay] || 0) + 1;
    });

    // Encontra o horário mais frequente
    let mostActive = '';
    let maxCount = 0;
    Object.entries(timeStats).forEach(([time, count]) => {
      if (count > maxCount) {
        mostActive = time;
        maxCount = count;
      }
    });

    return {
      most: mostActive || '08:00',
      after: mostActive ? addMinutes(mostActive, 30) : '18:30'
    };
  };

  // Analisa tendências de humor (mockado)
  const analyzeMoodTrends = (logs: UserBehavior['moodLogs']) => {
    // Simplificação: usamos horário fixo quando o humor tende a cair
    return {
      needsSupport: '16:00', // Final da tarde quando a energia pode cair
      bestMood: '10:00'      // Manhã quando energia tende a estar alta
    };
  };

  // Encontra os picos de energia (mockado)
  const findEnergyPeaks = (logs: UserBehavior['energyLogs']) => {
    return ['09:00', '17:00']; // Horários típicos de energia alta
  };

  // Encontra os horários de maior responsividade (mockado)
  const findMostResponsiveTime = (logs: UserBehavior['interactionLogs']) => {
    return '20:00'; // Noite, quando há mais tempo livre
  };

  const patterns = {
    exerciseTime: findMostActiveTime(userBehavior.exerciseLogs),
    moodPatterns: analyzeMoodTrends(userBehavior.moodLogs),
    energyPeaks: findEnergyPeaks(userBehavior.energyLogs),
    responsiveTime: findMostResponsiveTime(userBehavior.interactionLogs)
  };
  
  return {
    dailyReminder: patterns.energyPeaks[0], // Quando tem mais energia
    motivational: patterns.moodPatterns.needsSupport, // Quando precisa de apoio
    celebration: patterns.exerciseTime.after, // Logo após exercitar
    educational: patterns.responsiveTime // Quando mais engajada
  };
};

// Gera notificações contextuais baseadas no estado do usuário
export const generateContextualNotification = (userState: CurrentUserState): ContextualNotification => {
  const notifications: Record<string, Omit<ContextualNotification, 'id' | 'createdAt'>> = {
    struggling: {
      title: "💜 Ei, guerreira...",
      body: "Dias difíceis fazem parte da jornada. Que tal 5 minutos de respiração suave?",
      action: "Praticar Respiração Calmante",
      actionUrl: "/exercises/breathing",
      tone: "supportive",
      urgency: "gentle",
      icon: "💜"
    },
    motivated: {
      title: "🔥 Essa energia está incrível!",
      body: "Aproveite esse momento para um exercício mais desafiador. Você consegue!",
      action: "Ver Exercícios Energizantes",
      actionUrl: "/momentos-de-liberdade?filter=energizing",
      tone: "encouraging",
      urgency: "excited",
      icon: "🔥"
    },
    consistent: {
      title: "👑 Olha só quem está arrasando!",
      body: "7 dias seguidos! Você está provando que transformação é possível.",
      action: "Ver Minhas Conquistas",
      actionUrl: "/conquistas",
      tone: "celebratory",
      urgency: "proud",
      icon: "👑",
      special: "confetti"
    },
    missed: {
      title: "🌸 Sentimos sua falta",
      body: "Seu corpo está esperando por aquele carinho especial. Volta pra gente?",
      action: "Fazer um Mini-Exercício",
      actionUrl: "/exercises/quick",
      tone: "welcoming",
      urgency: "gentle",
      icon: "🌸"
    }
  };
  
  const notificationBase = notifications[userState.emotionalState];
  
  return {
    id: uuidv4(),
    createdAt: new Date(),
    read: false,
    ...notificationBase
  };
};

// Sistema de notificações em sequência (storytelling)
export const createNotificationStory = (userJourney: UserJourney): NotificationStory[] => {
  return [
    {
      day: 1,
      timing: "morning",
      notification: {
        title: "🌅 Sua jornada começa hoje",
        body: "Você acabou de plantar a semente da sua transformação. Que orgulho!",
        image: "journey_begins.jpg",
        action: "Começar Primeiro Exercício"
      }
    },
    {
      day: 3,
      timing: "evening",
      notification: {
        title: "🌱 Sua semente está brotando",
        body: "3 dias cuidando de você! Sente como seu corpo já está agradecendo?",
        image: "growth.jpg",
        action: "Ver Meu Progresso"
      }
    },
    {
      day: 7,
      timing: "celebration",
      notification: {
        title: "🌸 Uma semana de amor próprio!",
        body: "7 dias escolhendo se cuidar. Você é uma inspiração!",
        image: "week_celebration.jpg",
        action: "Celebrar Conquista",
        special: "confetti"
      }
    },
    {
      day: 14,
      timing: "milestone",
      notification: {
        title: "💪 Duas semanas de pura força!",
        body: "Você está na metade do caminho. Sente como sua vida já mudou?",
        image: "halfway_hero.jpg",
        action: "Comparar Antes e Depois",
        special: "progress_animation"
      }
    },
    {
      day: 21,
      timing: "completion",
      notification: {
        title: "👑 Você se tornou a heroína da sua história!",
        body: "21 dias de transformação! Você provou que pode tudo!",
        image: "queen_crown.jpg",
        action: "Ver Minha Transformação Completa",
        special: "legendary_celebration"
      }
    }
  ];
};

// Helper para adicionar minutos a uma string de horário
function addMinutes(timeString: string, minutes: number): string {
  const [hours, mins] = timeString.split(':').map(Number);
  const totalMinutes = hours * 60 + mins + minutes;
  const newHours = Math.floor(totalMinutes / 60) % 24;
  const newMinutes = totalMinutes % 60;
  return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;
} 