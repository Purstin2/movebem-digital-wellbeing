import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext";
import Index from "./pages/Index";
import ExercisesPage from "./pages/ExercisesPage";
import ExerciseDetailPage from "./pages/ExerciseDetailPage";
import ProgressPage from "./pages/ProgressPage";
import NutritionPage from "./pages/NutritionPage";
import BonusPage from "./pages/BonusPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
import OnboardingPage from "./pages/OnboardingPage";
import HomePage from "./pages/HomePage";
import ChairYogaPage from "./pages/ChairYogaPage";
import ChairYogaExercisePage from "./pages/ChairYogaExercisePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SidebarProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/momentos-de-liberdade" element={<ExercisesPage />} />
            <Route path="/exercises/:id" element={<ExerciseDetailPage />} />
            <Route path="/conquistas" element={<ProgressPage />} />
            <Route path="/alimentos-que-curam" element={<NutritionPage />} />
            <Route path="/tesouros-exclusivos" element={<BonusPage />} />
            <Route path="/evolucao-pessoal" element={<ProfilePage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/nutrition" element={<NutritionPage />} />
            <Route path="/chair-yoga" element={<ChairYogaPage />} />
            <Route path="/exercicio/:id" element={<ChairYogaExercisePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
