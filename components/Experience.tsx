import FadeIn from "./FadeIn";

const steps = [
  {
    num: "1",
    title: "Capture",
    desc: "Record your dream by voice or text, right when you wake up. Details are preserved before they slip away.",
  },
  {
    num: "2",
    title: "Understand",
    desc: "AI reveals the themes, emotions, and connections within your dream — things you might not see on your own.",
  },
  {
    num: "3",
    title: "Reflect",
    desc: "Explore deeper meaning through a guided conversation. Build lasting self-awareness, one dream at a time.",
  },
];

export default function Experience() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4">
            Experience
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-cream tracking-tight leading-tight mb-16 md:mb-20">
            From dream to insight
            <br className="hidden md:block" /> in moments
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((s, i) => (
            <FadeIn key={s.num} delay={i * 120}>
              <div className="relative">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10 h-10 rounded-full border border-gold/25 flex items-center justify-center">
                    <span className="text-sm font-medium text-gold">
                      {s.num}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent" />
                  )}
                </div>
                <h3 className="text-lg font-medium text-cream mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-silver leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
