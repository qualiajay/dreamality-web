import FadeIn from "./FadeIn";

const features = [
  {
    num: "01",
    title: "Voice Capture",
    desc: "Speak your dream the moment you wake. Voice-first recording preserves the vivid details that fade fastest.",
  },
  {
    num: "02",
    title: "AI Interpretation",
    desc: "Receive thoughtful analysis that surfaces themes, emotions, and symbolism — a mirror for your subconscious mind.",
  },
  {
    num: "03",
    title: "Dream Guide",
    desc: "Continue the conversation. An AI-powered guide helps you explore the deeper meaning behind each dream.",
  },
  {
    num: "04",
    title: "Pattern Discovery",
    desc: "Over time, Dreamality reveals recurring themes and emotional patterns you'd never notice on your own.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4">
            Capabilities
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-cream tracking-tight leading-tight mb-16 md:mb-20">
            What Dreamality does
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-16">
          {features.map((f, i) => (
            <FadeIn key={f.num} delay={i * 100}>
              <div className="group">
                <span className="text-xs font-medium text-gold/60 tracking-wider">
                  {f.num}
                </span>
                <h3 className="text-lg font-medium text-cream mt-2 mb-3">
                  {f.title}
                </h3>
                <p className="text-sm text-silver leading-relaxed font-light">
                  {f.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
