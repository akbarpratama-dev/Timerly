import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import HeroSection from "./components/HeroSection";
import ConfigSection from "./components/ConfigSection";
import PracticeScreen from "./components/PracticeScreen";
import SummaryScreen from "./components/SummaryScreen";

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function App() {
  const [screen, setScreen] = useState("hero"); // 'hero' | 'config' | 'practice' | 'summary'
  const [config, setConfig] = useState(null);
  const [results, setResults] = useState([]);

  // Transition from Hero to Config
  const handleStartHero = useCallback(() => {
    setScreen("config");
  }, []);

  // Back from Config to Hero
  const handleBackToHero = useCallback(() => {
    setScreen("hero");
  }, []);

  // Start Practice from Config
  const handleStartPractice = useCallback((sessionConfig) => {
    setConfig(sessionConfig);
    setResults([]);
    setScreen("practice");
  }, []);

  const handleComplete = useCallback((questionResults) => {
    setResults(questionResults);
    setScreen("summary");
  }, []);

  const handleNewSession = useCallback(() => {
    setConfig(null);
    setResults([]);
    setScreen("hero");
  }, []);

  return (
    <div className="min-h-screen bg-main font-sans text-black overflow-hidden relative">
      {/* Background Line Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, #000 39px, #000 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #000 39px, #000 40px)",
        }}
      />

      <AnimatePresence mode="wait">
        {screen === "hero" && (
          <motion.div key="hero" {...pageTransition} className="w-full h-full">
            <HeroSection onStart={handleStartHero} />
          </motion.div>
        )}

        {screen === "config" && (
          <motion.div key="config" {...pageTransition} className="w-full h-full">
            <ConfigSection onConfigComplete={handleStartPractice} onBack={handleBackToHero} />
          </motion.div>
        )}

        {screen === "practice" && config && (
          <motion.div key="practice" {...pageTransition} className="w-full h-full">
            <PracticeScreen config={config} onComplete={handleComplete} onCancel={handleNewSession} />
          </motion.div>
        )}

        {screen === "summary" && (
          <motion.div key="summary" {...pageTransition} className="w-full h-full">
            <SummaryScreen config={config} results={results} onNewSession={handleNewSession} />
          </motion.div>
        )}
      </AnimatePresence>
      <Analytics />
    </div>
  );
}
