import { motion } from "framer-motion";
import { Settings, Clock, BarChart2 } from "lucide-react";

export default function HeroSection({ onStart }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-main text-black font-mono selection:bg-primary selection:text-black px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12">
      {/* Centered Wrapper - Both sections vertically centered together */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto gap-8 sm:gap-12 md:gap-16">
        
        {/* Hero Section */}
        <motion.div className="w-full flex flex-col items-center text-center" initial="hidden" animate="visible" variants={staggerContainer}>
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <motion.h1 variants={fadeIn} className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-heading font-black uppercase leading-[0.9] tracking-tighter">
                TIMERLY
              </motion.h1>
              <motion.p variants={fadeIn} className="text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-lg border-l-4 text-center">
                Latih kecepatanmu dengan durasi yang terukur. Pantau polanya dan tingkatkan fokus di setiap sesi.
              </motion.p>
            </div>

            <motion.div variants={fadeIn} className="pt-1 sm:pt-2">
              <button
                onClick={onStart}
                className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-10 sm:py-5 bg-primary text-black text-lg sm:text-xl font-heading font-bold border-3 border-black shadow-neo hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:translate-x-0 active:shadow-neo transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-black/20"
              >
                MULAI LATIHAN
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* How-To Section */}
        <motion.div className="w-full flex flex-col gap-4 sm:gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeIn} className="text-2xl sm:text-3xl md:text-4xl font-heading font-black uppercase">
            CARA MENGGUNAKAN
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
            <StepCard icon={<Settings size={32} strokeWidth={2.5} />} title="ATUR SESI" desc="Tentukan jumlah soal dan durasi." variants={fadeIn} />
            <StepCard icon={<Clock size={32} strokeWidth={2.5} />} title="KERJAKAN DENGAN TIMER" desc="Fokus penuh selama waktu berjalan." variants={fadeIn} />
            <StepCard icon={<BarChart2 size={32} strokeWidth={2.5} />} title="EVALUASI HASIL" desc="Analisis performa dan tingkatkan." variants={fadeIn} />
          </div>
        </motion.div>

      </div>
    </div>
  );
}

function StepCard({ icon, title, desc, variants }) {
  return (
    <motion.div
      variants={variants}
      className="bg-white border-3 border-black shadow-neo p-3 sm:p-4 md:p-6 flex flex-row sm:flex-col gap-3 sm:gap-4 items-center sm:items-center hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 h-full"
    >
      <div className="shrink-0 w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center border-2 sm:border-3 border-black bg-transparent rounded-none">{icon}</div>
      <div className="flex flex-col gap-1 sm:gap-2 text-left sm:text-center">
        <h3 className="font-heading font-black text-base sm:text-lg md:text-xl uppercase leading-tight">{title}</h3>
        <p className="text-xs sm:text-sm md:text-base font-medium leading-normal opacity-90">{desc}</p>
      </div>
    </motion.div>
  );
}
