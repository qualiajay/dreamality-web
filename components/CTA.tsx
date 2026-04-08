"use client";

import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section id="download" className="w-full py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 glass-panel rounded-3xl p-12 md:p-24 border border-white/10 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 mb-8 flex items-center justify-center backdrop-blur-md shadow-lg">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-400 opacity-80 blur-[2px]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            {t("cta.title")}
          </h2>
          
          <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-2xl mb-10">
            {t("cta.subtitle")}
          </p>

          <a
            href="#download"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 rounded-full transition-all overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.2)] hover:shadow-[0_0_60px_rgba(99,102,241,0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              {t("cta.button")}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
