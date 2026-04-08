"use client";

import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      id: "record",
      titleKey: "feature.record.title",
      descKey: "feature.record.desc",
      align: "left",
      color: "from-blue-500/20 to-cyan-400/20",
      image: "/screenshots/feature-1.png",
      borderColor: "border-blue-500/10",
      shadowColor: "shadow-blue-500/10"
    },
    {
      id: "card",
      titleKey: "feature.card.title",
      descKey: "feature.card.desc",
      align: "right",
      color: "from-purple-500/20 to-pink-400/20",
      image: "/screenshots/feature-2.png",
      borderColor: "border-purple-500/10",
      shadowColor: "shadow-purple-500/10"
    },
    {
      id: "ai",
      titleKey: "feature.ai.title",
      descKey: "feature.ai.desc",
      align: "left",
      color: "from-indigo-500/20 to-violet-400/20",
      image: "/screenshots/feature-3.png",
      borderColor: "border-indigo-500/10",
      shadowColor: "shadow-indigo-500/10"
    },
    {
      id: "guide",
      titleKey: "feature.guide.title",
      descKey: "feature.guide.desc",
      align: "right",
      color: "from-emerald-500/20 to-teal-400/20",
      image: "/screenshots/feature-4.png",
      borderColor: "border-emerald-500/10",
      shadowColor: "shadow-emerald-500/10"
    },
    {
      id: "archive",
      titleKey: "feature.archive.title",
      descKey: "feature.archive.desc",
      align: "left",
      color: "from-amber-500/20 to-orange-400/20",
      image: "/screenshots/feature-5.png",
      borderColor: "border-amber-500/10",
      shadowColor: "shadow-amber-500/10"
    },
  ];

  return (
    <section id="features" className="w-full py-32 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-32 md:gap-48">
        {features.map((feature, i) => (
          <div
            key={feature.id}
            className={`flex flex-col ${
              feature.align === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-16 lg:gap-24`}
          >
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: feature.align === "left" ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 space-y-6"
            >
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight">
                {t(feature.titleKey)}
              </h3>
              <p className="text-lg text-white/50 leading-relaxed font-light max-w-lg">
                {t(feature.descKey)}
              </p>
            </motion.div>

            {/* Mockup / Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex-1 w-full relative flex justify-center"
            >
              {/* Background Glow */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr ${feature.color} blur-[100px] -z-10 rounded-full`} />
              
              <div className="relative w-full max-w-[340px] rounded-[2.5rem] p-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-2xl border border-white/10">
                <div className="relative rounded-[2rem] overflow-hidden bg-black w-full" style={{ aspectRatio: "1170/2532" }}>
                  <Image 
                    src={feature.image} 
                    alt={t(feature.titleKey)} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
