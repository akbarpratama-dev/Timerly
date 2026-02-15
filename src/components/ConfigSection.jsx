import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import NeoCard from "./ui/NeoCard";
import NeoButton from "./ui/NeoButton";
import NeoInput from "./ui/NeoInput";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function ConfigSection({ onConfigComplete, onBack }) {
  const [totalQuestions, setTotalQuestions] = useState("");
  const [minutesPerQuestion, setMinutesPerQuestion] = useState("");
  const [errors, setErrors] = useState({});

  const validate = useCallback(() => {
    const newErrors = {};
    const qCount = parseInt(totalQuestions, 10);
    const mPerQ = parseFloat(minutesPerQuestion);

    if (!totalQuestions || isNaN(qCount) || qCount <= 0) {
      newErrors.totalQuestions = "Masukkan jumlah soal (min. 1)";
    }
    if (!minutesPerQuestion || isNaN(mPerQ) || mPerQ <= 0) {
      newErrors.minutesPerQuestion = "Masukkan durasi per soal (min. 0.5)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [totalQuestions, minutesPerQuestion]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!validate()) return;

      onConfigComplete({
        totalQuestions: parseInt(totalQuestions, 10),
        minutesPerQuestion: parseFloat(minutesPerQuestion),
      });
    },
    [totalQuestions, minutesPerQuestion, validate, onConfigComplete],
  );

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-lg">
        {/* Back Button */}
        <motion.div variants={itemVariants} className="mb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 font-heading font-extrabold uppercase text-sm tracking-wider
                       border-3 border-black bg-card px-4 py-3 shadow-neo
                       hover:-translate-x-[2px] hover:-translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
                       transition-all duration-100"
          >
            <ArrowLeft size={18} strokeWidth={3} />
            KEMBALI
          </button>
        </motion.div>

        {/* Config Card */}
        <NeoCard fullWidth>
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-heading font-black uppercase mb-2">
              KONFIGURASI
            </motion.h2>
            <motion.p variants={itemVariants} className="font-mono text-base mb-8 opacity-70">
              Atur sesi latihanmu sebelum mulai.
            </motion.p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <NeoInput id="totalQuestions" label="Jumlah Soal" type="number" min="1" max="100" placeholder="Contoh: 10" value={totalQuestions} onChange={(e) => setTotalQuestions(e.target.value)} />
                {errors.totalQuestions && <p className="mt-2 font-mono text-sm text-accent font-bold">{errors.totalQuestions}</p>}
              </motion.div>

              <motion.div variants={itemVariants}>
                <NeoInput id="minutesPerQuestion" label="Durasi per Soal (menit)" type="number" min="0.5" step="0.5" max="60" placeholder="Contoh: 2" value={minutesPerQuestion} onChange={(e) => setMinutesPerQuestion(e.target.value)} />
                {errors.minutesPerQuestion && <p className="mt-2 font-mono text-sm text-accent font-bold">{errors.minutesPerQuestion}</p>}
              </motion.div>

              {/* Preview */}
              {totalQuestions && minutesPerQuestion && (
                <motion.div variants={itemVariants} initial="hidden" animate="visible" className="bg-main border-3 border-black p-4">
                  <span className="block font-heading text-xs uppercase tracking-widest font-extrabold mb-2">PREVIEW SESI</span>
                  <div className="font-mono text-sm space-y-1">
                    <p>
                      <span className="font-bold">{totalQuestions}</span> soal × <span className="font-bold">{minutesPerQuestion}</span> menit
                    </p>
                    <p className="text-black/60">
                      Total waktu maksimal: <span className="font-bold text-black">{(parseInt(totalQuestions) * parseFloat(minutesPerQuestion) || 0).toFixed(1)} menit</span>
                    </p>
                  </div>
                </motion.div>
              )}

              <motion.div variants={itemVariants}>
                <NeoButton type="submit" className="w-full py-5 text-xl flex items-center justify-center gap-3">
                  <Play size={22} strokeWidth={3} fill="currentColor" />
                  MULAI SESI
                </NeoButton>
              </motion.div>
            </form>
          </motion.div>
        </NeoCard>

        {/* Tips */}
        <motion.div variants={itemVariants} className="mt-6 bg-card border-3 border-black shadow-neo p-5">
          <h3 className="font-heading font-extrabold text-sm uppercase tracking-wider mb-3">💡 Tips</h3>
          <ul className="font-mono text-sm space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              Mulai dengan durasi yang lebih longgar, lalu perketat.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              Timer akan berubah <span className="font-bold text-accent">MERAH</span> saat overtime.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-bold">•</span>
              Hasil lengkap akan ditampilkan di akhir sesi.
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}
