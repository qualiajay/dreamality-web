import DeviceMockup from "./DeviceMockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Atmospheric glow orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-15%] left-[25%] w-[500px] h-[500px] rounded-full bg-[#2a2060]/20 blur-[120px] animate-glow-pulse" />
        <div
          className="absolute bottom-[5%] right-[15%] w-[350px] h-[350px] rounded-full bg-gold/[0.06] blur-[100px] animate-glow-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p
          className="text-xs font-medium uppercase tracking-[0.25em] text-gold mb-8 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          AI-Powered Dream Journal for iPhone
        </p>

        <h1
          className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-light text-cream tracking-tight leading-[1.08] mb-8 animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          Your dreams,
          <br />
          understood.
        </h1>

        <p
          className="text-base md:text-lg font-light text-silver leading-relaxed max-w-lg mx-auto mb-12 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          Capture dreams by voice, receive AI-powered interpretations, and
          discover the patterns hidden in your inner world.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.65s" }}
        >
          <a
            href="#waitlist"
            className="px-8 py-3.5 bg-gold text-midnight font-medium text-sm rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            Join the Waitlist
          </a>
          <a
            href="#features"
            className="px-8 py-3.5 border border-white/10 text-cream font-medium text-sm rounded-full hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
          >
            See How It Works
          </a>
        </div>
      </div>

      {/* Hero device mockup */}
      <div
        className="relative z-10 mt-16 md:mt-20 animate-fade-up"
        style={{ animationDelay: "0.85s" }}
      >
        <DeviceMockup screen="capture" />
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-midnight to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
