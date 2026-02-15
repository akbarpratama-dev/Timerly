import { useState, useRef, useCallback, useEffect } from "react";

/**
 * Format seconds into MM:SS string with tabular-nums friendly output
 */
export function formatTime(totalSeconds) {
  const absSeconds = Math.abs(Math.floor(totalSeconds));
  const minutes = Math.floor(absSeconds / 60);
  const seconds = absSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

/**
 * Custom hook for countdown timer with exceeded state tracking
 * @param {number} durationSeconds - Duration in seconds for each question
 * @returns Timer state and control functions
 */
export function useTimer(durationSeconds) {
  const [timeRemaining, setTimeRemaining] = useState(durationSeconds);
  const [extraTime, setExtraTime] = useState(0);
  const [isExceeded, setIsExceeded] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);
  const elapsedBeforePauseRef = useRef(0);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const tick = useCallback(() => {
    const now = Date.now();
    const totalElapsed = elapsedBeforePauseRef.current + (now - startTimeRef.current) / 1000;
    const remaining = durationSeconds - totalElapsed;

    if (remaining <= 0) {
      setTimeRemaining(0);
      setIsExceeded(true);
      setExtraTime(Math.abs(remaining));
    } else {
      setTimeRemaining(remaining);
    }
  }, [durationSeconds]);

  const start = useCallback(() => {
    setIsRunning(true);
    startTimeRef.current = Date.now();
    clearTimer();
    intervalRef.current = setInterval(tick, 100);
  }, [tick, clearTimer]);

  const reset = useCallback(() => {
    clearTimer();
    setTimeRemaining(durationSeconds);
    setExtraTime(0);
    setIsExceeded(false);
    setIsRunning(false);
    startTimeRef.current = null;
    elapsedBeforePauseRef.current = 0;
  }, [durationSeconds, clearTimer]);

  const getTotalTimeSpent = useCallback(() => {
    if (!startTimeRef.current) return 0;
    return elapsedBeforePauseRef.current + (Date.now() - startTimeRef.current) / 1000;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  return {
    timeRemaining: Math.max(0, timeRemaining),
    extraTime,
    isExceeded,
    isRunning,
    displayTime: isExceeded ? extraTime : Math.max(0, timeRemaining),
    start,
    reset,
    getTotalTimeSpent,
  };
}
