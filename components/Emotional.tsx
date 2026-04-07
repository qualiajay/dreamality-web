import FadeIn from "./FadeIn";

export default function Emotional() {
  return (
    <section className="relative px-6 py-28 md:py-36 overflow-hidden">
      {/* Subtle background shift */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#1a1640]/40 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <FadeIn>
          <blockquote className="font-heading text-3xl md:text-5xl font-light text-cream tracking-tight leading-[1.2] mb-10">
            &ldquo;Dreams are the most honest part of you.&rdquo;
          </blockquote>
        </FadeIn>

        <FadeIn delay={120}>
          <p className="text-base md:text-lg text-silver leading-relaxed font-light mb-6">
            Every night, your mind processes emotions, solves problems, and
            surfaces truths you may not see while awake. Most of this is lost by
            morning.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-base md:text-lg text-cream/90 leading-relaxed font-light">
            Dreamality helps you listen — preserving your inner world and turning
            fleeting moments into lasting personal understanding.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
