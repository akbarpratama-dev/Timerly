import { motion } from "framer-motion";
import { Settings, Clock, BarChart2 } from "lucide-react";
import heroImage from "../assets/Group 13.png";

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
    <div className="flex flex-col min-h-screen bg-main text-black font-mono overflow-auto selection:bg-primary selection:text-black">
      {/* Header */}
      <header className="w-full px-6 md:px-12 py-6 border-b-3 border-black flex flex-row justify-between items-center bg-main sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tight">TIMERLY</h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center w-full max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-20 gap-16 md:gap-24">
        {/* Hero Section */}
        <motion.div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center" initial="hidden" animate="visible" variants={staggerContainer}>
          {/* Left Content */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <motion.h1 variants={fadeIn} className="text-6xl md:text-7xl lg:text-[6.5rem] font-heading font-black uppercase leading-[0.9] tracking-tighter break-words">
                TIMERLY
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg md:text-xl font-medium leading-relaxed max-w-lg border-l-4 border-black pl-5 py-2">
                Latih kecepatanmu dengan durasi yang terukur. Pantau polanya dan tingkatkan fokus di setiap sesi.
              </motion.p>
            </div>

            <motion.div variants={fadeIn} className="pt-2">
              <button
                onClick={onStart}
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-primary text-black text-xl font-heading font-bold border-3 border-black shadow-neo hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:translate-x-0 active:shadow-neo transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-black/20"
              >
                MULAI LATIHAN
              </button>
            </motion.div>
          </div>

          {/* Right Illustration Card */}
          <motion.div
            variants={fadeIn}
            className="hidden lg:flex order-1 lg:order-2 w-full aspect-[4/3] bg-white border-3 border-black shadow-neo p-8 items-center justify-center relative overflow-hidden group hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
          >
            {/* Hero Image */}
            <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none">
              <img src={heroImage} alt="Timerly Hero Illustration" className="w-full h-full object-contain" />
            </div>
          </motion.div>
        </motion.div>

        {/* How-To Section */}
        <motion.div className="w-full flex flex-col gap-10 pt-4" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-heading font-black uppercase">
            CARA MENGGUNAKAN
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard icon={<Settings size={32} strokeWidth={2.5} />} title="ATUR SESI" desc="Tentukan jumlah soal dan durasi." variants={fadeIn} />
            <StepCard icon={<Clock size={32} strokeWidth={2.5} />} title="KERJAKAN DENGAN TIMER" desc="Fokus penuh selama waktu berjalan." variants={fadeIn} />
            <StepCard icon={<BarChart2 size={32} strokeWidth={2.5} />} title="EVALUASI HASIL" desc="Analisis performa dan tingkatkan." variants={fadeIn} />
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t-3 border-black py-8 bg-main mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex justify-center text-center">
          <p className="text-sm md:text-base font-bold uppercase tracking-wide opacity-80">&copy; 2026 Timerly | Built for focus training.</p>
        </div>
      </footer>
    </div>
  );
}

function StepCard({ icon, title, desc, variants }) {
  return (
    <motion.div
      variants={variants}
      className="bg-white border-3 border-black shadow-neo p-6 md:p-8 flex flex-row md:flex-col gap-6 items-center md:items-start hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 h-full"
    >
      <div className="shrink-0 w-14 h-14 flex items-center justify-center border-3 border-black bg-transparent rounded-none">{icon}</div>
      <div className="flex flex-col gap-2 text-left">
        <h3 className="font-heading font-black text-lg md:text-xl uppercase leading-tight">{title}</h3>
        <p className="text-sm md:text-base font-medium leading-normal opacity-90">{desc}</p>
      </div>
    </motion.div>
  );
}
