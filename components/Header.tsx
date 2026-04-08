"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { Globe } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-midnight/40 glass-panel border-b-0"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a
          href="/"
          className="font-medium text-xl text-white tracking-tight flex items-center gap-2.5"
        >
          <BrandLogo size={28} />
          Dreamality
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            {t("nav.features")}
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            {t("nav.howItWorks")}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="p-2 text-white/70 hover:text-white transition-colors flex items-center gap-1 rounded-full hover:bg-white/5"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs uppercase font-semibold">{language}</span>
          </button>
          
          <a
            href="#download"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white glass-button rounded-full"
          >
            {t("nav.download")}
          </a>
        </div>
      </div>
    </header>
  );
}
