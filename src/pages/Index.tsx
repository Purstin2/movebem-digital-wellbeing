import { AppLayout } from "@/components/layout/AppLayout";
import { useState } from "react";
import { Dashboard } from "@/components/Dashboard";

// Dados de exemplo para exercícios
const mockExercises = [
  {
    id: "ex1",
    title: "Libertação Cervical Suave",
    description: "Um exercício suave para aliviar tensões no pescoço e ombros.",
    duration: "5 min",
    difficulty: "beginner",
    category: "Pescoço",
    targetAreas: ["Pescoço", "Ombros"],
    steps: [],
    adaptations: [],
    benefits: ["Alívio de tensão", "Melhor circulação"],
    safetyTips: []
  },
  {
    id: "ex2",
    title: "Desbloqueio dos Ombros",
    description: "Sequência para liberar tensão e melhorar amplitude de movimentos.",
    duration: "7 min",
    difficulty: "intermediate",
    category: "Ombros",
    targetAreas: ["Ombros", "Braços"],
    steps: [],
    adaptations: [],
    benefits: ["Mobilidade", "Relaxamento"],
    safetyTips: []
  }
];

const IndexPage = () => {
  const [userProfile] = useState({
    firstName: "Marina",
    painLevel: "medium" as const,
    primaryPain: "back" as const,
    mobilityLevel: "moderate" as const,
    goals: ["Reduzir dor", "Melhorar flexibilidade"],
    age: "35-45",
    conditions: ["Dor lombar"],
    experience: "some" as const,
    trackAssigned: "therapeutic" as const,
    currentDay: 7
  });

  return (
    <AppLayout>
      <Dashboard
        userProfile={userProfile}
        featuredExercises={mockExercises}
        recommendedExercises={mockExercises}
      />
    </AppLayout>
  );
};

export default IndexPage;
