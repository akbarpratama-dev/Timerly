import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTimer, formatTime } from "../utils/timer";

const questionVariants = {
  enter: { x: 1000, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -1000, opacity: 0 },
};

const questionTransition = {
  duration: 0.5,
  ease: [0.25, 1, 0.5, 1], // Cubic bezier for "hard" but smooth movement
};

export default function PracticeScreen({ config, onComplete }) {
  const { totalQuestions, minutesPerQuestion } = config;
  // Convert minutes to seconds
  const durationSeconds = minutesPerQuestion * 60;

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [results, setResults] = useState([]);

  // We need to force re-render/reset timer when question changes
  // The useTimer hook instance needs to be reset.
  const timer = useTimer(durationSeconds);

  // Start timer on mount and when question changes
  useEffect(() => {
    timer.reset();
    const id = setTimeout(() => timer.start(), 100);
    return () => clearTimeout(id);
  }, [currentQuestion]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDone = useCallback(() => {
    // Correctly calculate time spent:
    // If NOT exceeded: duration - remaining
    // If exceeded: duration + extraTime
    let timeSpent;
    if (timer.isExceeded) {
      timeSpent = durationSeconds + timer.extraTime;
    } else {
      timeSpent = durationSeconds - timer.timeRemaining;
    }

    const questionResult = {
      question: currentQuestion,
      timeSpent: timeSpent,
      exceeded: timer.isExceeded,
      durationAllowed: durationSeconds,
    };

    const newResults = [...results, questionResult];

    if (currentQuestion >= totalQuestions) {
      onComplete(newResults);
    } else {
      setResults(newResults);
      setCurrentQuestion((prev) => prev + 1);
    }
  }, [currentQuestion, totalQuestions, results, timer, durationSeconds, onComplete]);

  // Handle spacebar for next question
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === " " || e.code === "Space") {
        e.preventDefault();
        handleDone();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleDone]);

  // Determine text color
  let timerColorClass = "text-black";
  if (timer.isExceeded) {
    timerColorClass = "text-accent"; // Red
  } else if (timer.timeRemaining <= 10) {
    timerColorClass = "text-accent"; // Red
  }

  // Display time: If exceeded, show extra time. If not, show remaining.
  // User wants "negative time" implication when exceeded.
  // We can show "- 00:05" or just "00:05" in red.
  // The requirements said: "State 0s: Timer starts counting UP (negative time/overtime) and turns fully Red."
  // I will show it as negative for clarity e.g. "-00:05"
  const displayTimeValue = timer.isExceeded ? timer.extraTime : timer.timeRemaining;
  const prefix = timer.isExceeded ? "+" : "";

  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6 relative z-10">
      {/* Header: SOAL X DARI Y */}
      <div className="w-full flex justify-end">
        <div className="bg-card border-3 border-black p-3 shadow-neo">
          <span className="font-mono font-bold text-xl uppercase">
            SOAL {currentQuestion} / {totalQuestions}
          </span>
        </div>
      </div>

      {/* Center: Timer & Question Container */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl relative">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div key={currentQuestion} variants={questionVariants} initial="enter" animate="center" exit="exit" transition={questionTransition} className="flex flex-col items-center justify-center w-full">
            {/* HUGE TIMER */}
            <div className={`font-mono text-8xl md:text-[10rem] leading-none tabular-nums font-bold ${timerColorClass} transition-colors duration-200`}>
              {prefix}
              {formatTime(displayTimeValue)}
            </div>

            {/* Optional Subtext relative to state */}
            {timer.isExceeded && <div className="mt-4 font-heading text-accent text-2xl uppercase blink">OVERTIME</div>}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls: DONE Button */}
      <div className="w-full max-w-md pb-12">
        <button
          onClick={handleDone}
          className="w-full py-6 text-2xl bg-white border-3 border-black shadow-neo 
                     font-heading font-extrabold uppercase tracking-widest
                     hover:bg-primary transition-all 
                     active:shadow-none active:translate-x-[6px] active:translate-y-[6px] hover:-translate-y-1 hover:-translate-x-1"
        >
          SELESAI
        </button>
        <p className="mt-4 text-center font-mono text-sm uppercase tracking-widest text-black/60">
          TEKAN <span className="font-bold underline text-black">[SPACE]</span> UNTUK LANJUT
        </p>
      </div>
    </div>
  );
}
