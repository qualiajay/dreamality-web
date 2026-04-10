import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Support — Dreamality",
  description:
    "Get help with Dreamality. Reach our team for app support, privacy questions, and product feedback.",
};

export default function SupportPage() {
  return (
    <>
      <div className="bg-deep-space" aria-hidden />
      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="border-b border-white/[0.06] backdrop-blur-md bg-black/25">
          <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
            <Link
              href="/"
              className="font-heading text-xl font-medium text-cream tracking-tight hover:text-gold transition-colors duration-300"
            >
              Dreamality
            </Link>
            <Link
              href="/#download"
              className="text-sm text-muted hover:text-cream transition-colors shrink-0"
            >
              Get the app
            </Link>
          </div>
        </header>

        <main className="flex-1 relative px-6 py-16 md:py-24 overflow-hidden">
          <div
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[min(92vw,720px)] h-[280px] rounded-full bg-indigo-600/12 blur-[110px] pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute top-40 right-[8%] w-[340px] h-[340px] rounded-full bg-purple-500/8 blur-[100px] pointer-events-none hidden md:block"
            aria-hidden
          />

          <div className="max-w-3xl mx-auto relative">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4">
              Help
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-light text-cream tracking-tight leading-tight mb-5">
              We&apos;re here for you
            </h1>
            <p className="text-sm text-silver leading-relaxed font-light mb-12 max-w-xl">
              Whether you hit a bug, have a privacy question, or want to share
              feedback — send us an email. We read every message and aim to
              reply within a couple of business days.
            </p>

            <div className="glass-panel rounded-2xl p-8 md:p-10 border border-white/[0.08] shadow-[0_28px_90px_-28px_rgba(0,0,0,0.55)]">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/15 to-purple-500/10 border border-indigo-400/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-indigo-200/90" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-2">
                    Email support
                  </p>
                  <a
                    href="mailto:jaypeng.design@gmail.com?subject=Dreamality%20support"
                    className="font-heading text-xl md:text-2xl text-cream hover:text-gold transition-colors duration-300 break-all inline-block"
                  >
                    jaypeng.design@gmail.com
                  </a>
                  <p className="mt-5 text-sm text-silver font-light leading-relaxed border-t border-white/[0.06] pt-5">
                    <span className="text-cream/90">Tip:</span> if you&apos;re
                    reporting an issue, mention your iPhone model and iOS version
                    — it helps us reproduce and fix things faster.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 grid sm:grid-cols-2 gap-5 md:gap-6">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-7 transition-colors duration-300 hover:border-gold/20 hover:bg-white/[0.03]">
                <MessageCircle
                  className="w-5 h-5 text-gold/85 mb-4"
                  strokeWidth={1.5}
                />
                <h2 className="font-heading text-lg text-cream mb-2 tracking-tight">
                  Common questions
                </h2>
                <p className="text-sm text-silver font-light leading-relaxed mb-5">
                  Privacy, voice capture, and how interpretations work — many
                  answers are on the homepage.
                </p>
                <Link
                  href="/#faq"
                  className="text-sm text-gold hover:text-gold-light transition-colors duration-300 underline underline-offset-4 decoration-gold/30"
                >
                  View FAQ →
                </Link>
              </div>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-7 transition-colors duration-300 hover:border-gold/20 hover:bg-white/[0.03]">
                <Sparkles
                  className="w-5 h-5 text-gold/85 mb-4"
                  strokeWidth={1.5}
                />
                <h2 className="font-heading text-lg text-cream mb-2 tracking-tight">
                  Ideas & feedback
                </h2>
                <p className="text-sm text-silver font-light leading-relaxed">
                  Suggestions for features, copy, or the dream journey — we
                  genuinely appreciate thoughtful input from people who use the
                  app.
                </p>
              </div>
            </div>

            <p className="mt-14 text-center text-xs text-muted font-light">
              <Link
                href="/"
                className="text-silver hover:text-cream transition-colors underline underline-offset-4 decoration-white/15"
              >
                ← Back to Dreamality
              </Link>
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
