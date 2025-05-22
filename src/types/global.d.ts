
import { ComponentProps } from "react";
import { ExerciseCard as ExerciseCardComponent } from "@/components/ui/exercise-card";

declare module "@/components/ui/exercise-card" {
  interface ExerciseCardProps extends ComponentProps<typeof ExerciseCardComponent> {
    badge?: string;
    className?: string;
  }
}
