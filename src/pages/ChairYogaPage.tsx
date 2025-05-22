import { useState, useEffect } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { ChairYogaDashboard } from "@/components/ChairYogaDashboard";
import { ChairYogaProfile } from "@/types/chair-yoga";

const ChairYogaPage = () => {
  // Mock user profile for demonstration - in real app, this would come from a user service or context
  const [userProfile, setUserProfile] = useState<Partial<ChairYogaProfile> | null>(null);

  useEffect(() => {
    // Simulate loading a user profile - this would come from API in a real app
    const mockUser: Partial<ChairYogaProfile> = {
      primaryPain: "back",
      painLevel: "medium",
      mobilityLevel: "moderate",
      conditions: ["lower_back_pain", "hip_stiffness", "stress"],
      chairType: "standard",
      initialPain: 7,
      currentPain: 5,
      mobilityImprovement: 25,
      completedExercises: ["cervical_gentle_release", "spinal_twist_therapeutic"],
      preferredExerciseTime: "morning",
      lastExercise: new Date(Date.now() - 24 * 60 * 60 * 1000), // yesterday
      currentDay: 12,
    };
    
    setUserProfile(mockUser);
  }, []);

  return (
    <AppLayout>
      <ChairYogaDashboard userProfile={userProfile} />
    </AppLayout>
  );
};

export default ChairYogaPage; 