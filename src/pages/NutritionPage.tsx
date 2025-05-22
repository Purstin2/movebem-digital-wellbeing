import { useState, useEffect } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { NutritionDashboard } from "@/components/NutritionDashboard";
import { UserProfile } from "@/types/onboarding";

const NutritionPage = () => {
  // Mock user profile for demonstration - in real app, this would come from a user service or context
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    // Simulate loading a user profile - this would come from API in a real app
    const mockUser: UserProfile = {
      firstName: "Maria",
      painLevel: "medium",
      primaryPain: "back",
      mobilityLevel: "moderate",
      goals: ["energy", "flexibility", "stress_reduction"],
      age: "46-55",
      conditions: ["menopause", "back_pain", "digestive_issues"],
      experience: "some",
      currentDay: 12,
    };
    
    setUserProfile(mockUser);
  }, []);

  return (
    <AppLayout>
      <NutritionDashboard userProfile={userProfile} />
    </AppLayout>
  );
};

export default NutritionPage;
