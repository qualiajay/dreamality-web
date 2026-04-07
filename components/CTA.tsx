"use client";

import { useState, type FormEvent } from "react";
import FadeIn from "./FadeIn";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="waitlist"
      className="relative px-6 py-28 md:py-36 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-cream tracking-tight leading-tight mb-6">
            Begin understanding
            <br />
            your dreams.
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="text-base text-silver leading-relaxed font-light mb-10">
            Join the waitlist and be among the first to experience Dreamality
            when it launches on iPhone.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          {submitted ? (
            <div className="py-4">
              <p className="text-gold font-medium mb-2">
                You&apos;re on the list.
              </p>
              <p className="text-sm text-silver font-light">
                We&apos;ll be in touch when Dreamality is ready.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-5 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-full text-sm text-cream placeholder:text-muted focus:outline-none focus:border-gold/30 transition-colors duration-300"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-gold text-midnight font-medium text-sm rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 cursor-pointer"
              >
                Join Waitlist
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
