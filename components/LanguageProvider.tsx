"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const dictionary = {
  en: {
    // Navigation
    "nav.features": "Features",
    "nav.howItWorks": "How it Works",
    "nav.download": "Get App",
    "nav.tryNow": "Try Now",
    // Hero
    "hero.title": "Your dreams, understood.",
    "hero.subtitle": "Record dreams, uncover their meanings with AI, and reflect on your inner world.",
    "hero.cta": "Download on the App Store",
    // Features
    "feature.record.title": "Transform memories into art",
    "feature.record.desc": "Transform your fragmented memories into beautiful visual artifacts with our advanced rendering engine.",
    "feature.card.title": "Record every dream, instantly",
    "feature.card.desc": "Capture fleeting dreams right after waking up through voice or text. Your personal dream journal, always ready.",
    "feature.ai.title": "AI-powered deep analysis",
    "feature.ai.desc": "Understand the metaphors and symbols in your dreams. Our AI reveals the emotional undercurrents beneath the surface.",
    "feature.guide.title": "Your personal dream guide",
    "feature.guide.desc": "Continue the conversation with a personalized guide to explore the deeper meanings of your subconscious.",
    "feature.archive.title": "Calendar archive & emotional tracking",
    "feature.archive.desc": "Track your dreams over time. Discover patterns in your emotional states and psychological well-being.",
    // How it works
    "how.title": "How it works",
    "how.step1.title": "Generate",
    "how.step1.desc": "Create a beautiful dream card",
    "how.step2.title": "Record",
    "how.step2.desc": "Speak or type your dream upon waking",
    "how.step3.title": "Analyze",
    "how.step3.desc": "Get AI insights on symbols",
    "how.step4.title": "Explore",
    "how.step4.desc": "Chat deeper with your guide",
    "how.step5.title": "Reflect",
    "how.step5.desc": "Track patterns in your calendar",
    // CTA
    "cta.title": "Begin your inner journey",
    "cta.subtitle": "Join thousands of users exploring their subconscious mind every night.",
    "cta.button": "Start Recording Dreams",
  },
  zh: {
    // Navigation
    "nav.features": "功能",
    "nav.howItWorks": "如何运作",
    "nav.download": "获取应用",
    "nav.tryNow": "立即体验",
    // Hero
    "hero.title": "读懂你的每一个梦。",
    "hero.subtitle": "记录梦境，透过 AI 深度解析，探索你内心深处的真实自我。",
    "hero.cta": "在 App Store 下载",
    // Features
    "feature.record.title": "记录每一个梦，生成专属梦境卡片",
    "feature.record.desc": "将你零碎的梦境记忆，转化为绝美的视觉卡片，永久保存。",
    "feature.card.title": "支持语音输入，记下转瞬即逝的梦",
    "feature.card.desc": "支持语音输入，记下转瞬即逝的梦。醒来的第一时间，轻松留住所有细节。",
    "feature.ai.title": "AI 深度解析，读懂梦的隐喻",
    "feature.ai.desc": "透过先进的 AI 分析，解开梦境中的象征与隐喻，洞悉潜意识的情感流动。",
    "feature.guide.title": "专属梦境向导，陪你探索更深的自我",
    "feature.guide.desc": "在特定的梦境里，与专属向导持续交流，进一步探讨内心深处的精神世界。",
    "feature.archive.title": "梦境日历归档，追踪你的情绪状态变化",
    "feature.archive.desc": "以时间轴记录你的梦，帮你追踪长期情绪状态变化，了解心理健康走向。",
    // How it works
    "how.title": "探索之旅",
    "how.step1.title": "生成卡片",
    "how.step1.desc": "绝美的视觉具象化",
    "how.step2.title": "记录梦境",
    "how.step2.desc": "醒来时快速记录",
    "how.step3.title": "AI 解析",
    "how.step3.desc": "深度解读梦中隐喻",
    "how.step4.title": "深度对话",
    "how.step4.desc": "专属向导持续交流",
    "how.step5.title": "长期归档",
    "how.step5.desc": "日历追踪情绪状态",
    // CTA
    "cta.title": "开启你的内在探索之旅",
    "cta.subtitle": "在这个喧嚣的世界，给自己留一片倾听潜意识的安静角落。",
    "cta.button": "开始记录梦境",
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("dreamality-lang") as Language;
    if (saved && (saved === "en" || saved === "zh")) {
      setLanguage(saved);
    } else {
      const browserLang = navigator.language.startsWith("zh") ? "zh" : "en";
      setLanguage(browserLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("dreamality-lang", lang);
  };

  const t = (key: string): string => {
    // @ts-ignore
    return dictionary[language]?.[key] || key;
  };

  if (!mounted) {
    // During SSR, return a basic provider with default language to avoid hydration mismatch
    // But we might still have a small mismatch if default is different from client. 
    // Usually it's better to render something neutral or hide language specific things until mounted if it's strict.
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
