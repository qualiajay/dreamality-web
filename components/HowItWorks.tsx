"use client";

import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";
import { Mic, Sparkles, MessageCircle, CalendarDays, Palette } from "lucide-react";

/** Icons match the five feature blocks in Features.tsx order: record → card → ai → guide → archive */
const stepIcons = [
  {
    icon: <Palette className="w-6 h-6" />,
    borderColor: "border-blue-500/10",
    shadowColor: "shadow-blue-500/10",
  },
  {
    icon: <Mic className="w-6 h-6" />,
    borderColor: "border-purple-500/10",
    shadowColor: "shadow-purple-500/10",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    borderColor: "border-indigo-500/10",
    shadowColor: "shadow-indigo-500/10",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    borderColor: "border-emerald-500/10",
    shadowColor: "shadow-emerald-500/10",
  },
  {
    icon: <CalendarDays className="w-6 h-6" />,
    borderColor: "border-amber-500/10",
    shadowColor: "shadow-amber-500/10",
  },
] as const;

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { num: 1, title: "how.step1.title", desc: "how.step1.desc" },
    { num: 2, title: "how.step2.title", desc: "how.step2.desc" },
    { num: 3, title: "how.step3.title", desc: "how.step3.desc" },
    { num: 4, title: "how.step4.title", desc: "how.step4.desc" },
    { num: 5, title: "how.step5.title", desc: "how.step5.desc" },
  ];

  return (
    <section id="how-it-works" className="w-full py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-medium text-white mb-20 tracking-tight"
        >
          {t("how.title")}
        </motion.h2>

        <div className="relative w-full">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center text-center max-w-[160px] mx-auto group"
              >
                <div
                  className={`w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white/90 border ${stepIcons[i].borderColor} ${stepIcons[i].shadowColor} shadow-[0_0_20px_var(--tw-shadow-color)] mb-6 group-hover:scale-110 transition-transform bg-[#0f0f1a]`}
                >
                  {stepIcons[i].icon}
                </div>
                <h4 className="text-white/90 font-medium text-lg mb-2">
                  {t(step.title)}
                </h4>
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  {t(step.desc)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
