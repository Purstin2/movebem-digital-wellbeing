
import { useState, useEffect, useRef, useCallback } from 'react';

interface UseExerciseTimerProps {
  duration: number;  // Duration in seconds
  onComplete?: () => void;
  autoStart?: boolean;
}

export function useExerciseTimer({
  duration,
  onComplete,
  autoStart = false
}: UseExerciseTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const [isActive, setIsActive] = useState(autoStart);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const start = useCallback(() => {
    setIsActive(true);
    setIsCompleted(false);
  }, []);

  const pause = useCallback(() => {
    setIsActive(false);
  }, []);

  const reset = useCallback(() => {
    setTimeRemaining(duration);
    setIsActive(false);
    setIsCompleted(false);
  }, [duration]);

  const setNewDuration = useCallback((newDuration: number) => {
    setTimeRemaining(newDuration);
    setIsCompleted(false);
  }, []);

  useEffect(() => {
    if (isActive && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsActive(false);
            setIsCompleted(true);
            onComplete?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (!isActive && timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, timeRemaining, onComplete]);

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const percentComplete = Math.max(0, Math.min(100, ((duration - timeRemaining) / duration) * 100));

  return {
    timeRemaining,
    isActive,
    isCompleted,
    percentComplete,
    formattedTime: formatTime(timeRemaining),
    start,
    pause,
    reset,
    setNewDuration
  };
}
