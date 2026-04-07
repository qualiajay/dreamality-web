"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-midnight/80 backdrop-blur-xl border-b border-white/5"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className="font-heading text-2xl font-medium text-cream tracking-tight"
        >
          Dreamality
        </a>
        <a
          href="#waitlist"
          className="text-sm font-medium text-gold hover:text-gold-light transition-colors duration-300"
        >
          Join Waitlist
        </a>
      </div>
    </header>
  );
}
