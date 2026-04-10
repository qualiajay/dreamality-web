"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "Is my dream data private?",
    a: "Completely. Your dreams are personal, and we treat them that way. All data is encrypted and never shared with third parties or used to train AI models.",
  },
  {
    q: "Can I record dreams by voice?",
    a: "Yes. Voice capture is designed for that half-awake moment when typing feels impossible. Just speak, and Dreamality transcribes and preserves every detail.",
  },
  {
    q: "Do I need to believe in dream symbolism?",
    a: "Not at all. Dreamality uses AI to surface patterns, emotions, and themes — think of it as a thoughtful mirror, not a fortune teller. It meets you where you are.",
  },
  {
    q: "Is this only for serious dreamers?",
    a: "Dreamality works beautifully for casual journaling too. Even recording one dream a week can reveal surprising patterns and emotional insights over time.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative px-6 py-24 md:py-32">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4">
            Questions
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-cream tracking-tight leading-tight mb-12 md:mb-16">
            Frequently asked
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="border-t border-white/[0.06]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
                >
                  <span className="text-[15px] font-medium text-cream pr-8 group-hover:text-gold transition-colors duration-300">
                    {faq.q}
                  </span>
                  <span
                    className={`text-xl text-muted shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`faq-grid ${openIndex === i ? "open" : ""}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-silver leading-relaxed font-light pb-5">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>
      </div>
    </section>
  );
}
