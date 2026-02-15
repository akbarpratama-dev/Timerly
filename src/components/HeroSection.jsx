import { motion } from "framer-motion";
import heroIllustration from "../assets/Group 2.svg";
import subtractIcon from "../assets/Subtract.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* Sparkle / starburst SVG — purple accent icon near the title */
function SparkleIcon({ className = "" }) {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M28 0 L32 20 L44 4 L34 22 L56 20 L36 28 L56 36 L34 34 L44 52 L32 36 L28 56 L24 36 L12 52 L22 34 L0 36 L20 28 L0 20 L22 22 L12 4 L24 20 Z" fill="#9747FF" />
    </svg>
  );
}

/* Yellow triangle decoration — top-left corner */
function YellowTriangle() {
  return (
    <svg className="absolute -top-4 -left-4 w-32 h-32 md:w-44 md:h-44" viewBox="0 0 180 180" fill="none">
      <polygon points="0,0 180,0 0,180" fill="#FFD600" stroke="black" strokeWidth="3" />
    </svg>
  );
}

/* Green star decoration — bottom-left corner */
function GreenStar() {
  return (
    <svg className="absolute -bottom-6 -left-6 w-28 h-28 md:w-36 md:h-36" viewBox="0 0 120 120" fill="none">
      <path d="M60 0 L72 42 L120 42 L82 68 L94 108 L60 84 L26 108 L38 68 L0 42 L48 42 Z" fill="#88F9A5" stroke="black" strokeWidth="3" />
    </svg>
  );
}

export default function HeroSection({ onStart }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-12 md:px-20 lg:px-28 py-24 md:py-32 lg:py-12 relative overflow-hidden">
      {/* === Dreamy Gradient Blur Background === */}
      <div className="dreamy-bg absolute inset-0 pointer-events-none" />

      {/* === Line Grid Pattern === */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, #000 39px, #000 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #000 39px, #000 40px)",
        }}
      />

      {/* === Corner Decorations === */}
      <YellowTriangle />
      <GreenStar />
      <img src={subtractIcon} alt="" className="absolute -top-4 -right-4 w-32 h-auto md:w-48 lg:w-60 pointer-events-none z-0" />

      {/* === Main Content === */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left – Text Content */}
        <div className="flex flex-col gap-6">
          {/* Title with sparkle */}
          <motion.div variants={itemVariants} className="relative">
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-heading font-black uppercase leading-[0.95] tracking-tight">TIMERLY</h1>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="font-mono text-base md:text-lg max-w-lg leading-relaxed">
            Latih kecepatan mengerjakan soal dengan durasi terukur.
            <br />
            Lihat pola waktumu dan tingkatkan fokus setiap sesi latihan.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <button
              onClick={onStart}
              className="inline-block bg-[#4D4DFF] text-white font-mono font-bold text-lg md:text-xl
                         px-10 py-5 border-3 border-black shadow-neo uppercase
                         transition-all duration-100 ease-in-out
                         hover:-translate-x-[2px] hover:-translate-y-[2px]
                         active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              Mulai Latihan &gt;&gt;
            </button>
          </motion.div>
        </div>

        {/* Right – Illustration */}
        <motion.div variants={itemVariants} className="hidden lg:flex relative items-center justify-center">
          <img src={heroIllustration} alt="Timerly illustration" className="w-full max-w-[500px] h-auto" />
        </motion.div>
      </motion.div>
    </div>
  );
}
