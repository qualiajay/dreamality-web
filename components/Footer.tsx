"use client";

import { useLanguage } from "./LanguageProvider";
import { BrandLogo } from "./BrandLogo";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full py-12 px-6 lg:px-12 border-t border-white/5 relative z-10 bg-black/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <BrandLogo size={24} />
          <span className="text-white/80 font-medium tracking-tight text-lg">
            Dreamality
          </span>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="/privacy" className="text-sm text-white/50 hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="text-sm text-white/50 hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="mailto:hello@dreamality.app" className="text-sm text-white/50 hover:text-white transition-colors">
            Contact
          </a>
        </div>
        
        <div className="text-sm text-white/30">
          © {new Date().getFullYear()} Dreamality. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
