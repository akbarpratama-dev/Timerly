import { useMemo } from "react";
import { motion } from "framer-motion";
import { formatTime } from "../utils/timer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function SummaryScreen({ config, results, onNewSession }) {
  const { totalQuestions } = config;

  const stats = useMemo(() => {
    const totalTime = results.reduce((sum, r) => sum + r.timeSpent, 0);
    const avgTime = results.length ? totalTime / results.length : 0;
    const exceededCount = results.filter((r) => r.exceeded).length;
    return { totalTime, avgTime, exceededCount };
  }, [results]);

  return (
    <div className="min-h-screen bg-main p-6 flex items-center justify-center">
      <motion.div className="w-full max-w-2xl" variants={containerVariants} initial="hidden" animate="visible">
        <div className="bg-card border-3 border-black shadow-neo p-8 md:p-12 mb-8">
          <motion.h1 className="text-3xl md:text-4xl font-heading font-black uppercase text-center mb-8" variants={itemVariants}>
            HASIL LATIHAN
          </motion.h1>

          {/* Stats Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" variants={itemVariants}>
            <div className="border-3 border-black p-4 bg-main">
              <span className="block text-sm font-bold uppercase mb-2">Total Durasi</span>
              <span className="block text-2xl font-mono font-bold tabular-nums">{formatTime(stats.totalTime)}</span>
            </div>
            <div className="border-3 border-black p-4 bg-main">
              <span className="block text-sm font-bold uppercase mb-2">Rata-rata / Soal</span>
              <span className="block text-2xl font-mono font-bold tabular-nums">{formatTime(stats.avgTime)}</span>
            </div>
          </motion.div>

          {/* Question List Table */}
          <motion.div className="mb-8" variants={itemVariants}>
            <h3 className="font-heading font-bold uppercase mb-4 border-b-3 border-black pb-2">Rincian Waktu</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {results.map((r, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center p-3 border-2 border-black font-mono
                    ${r.exceeded ? "bg-accent text-white border-accent" : "bg-white"}`}
                >
                  <span className="font-bold">Soal {r.question}</span>
                  <span className="tabular-nums font-bold">
                    {r.exceeded && "+"} {formatTime(r.timeSpent)}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Action Button */}
          <motion.button
            onClick={onNewSession}
            variants={itemVariants}
            className="w-full py-4 text-xl bg-primary text-black font-heading font-extrabold border-3 border-black shadow-neo 
                       transition-all active:shadow-none active:translate-x-[6px] active:translate-y-[6px] hover:-translate-y-1 hover:-translate-x-1"
          >
            MULAI SESI BARU
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
