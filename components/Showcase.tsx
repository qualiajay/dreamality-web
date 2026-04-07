import FadeIn from "./FadeIn";
import DeviceMockup from "./DeviceMockup";

export default function Showcase() {
  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16 md:mb-20">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4">
              The App
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-cream tracking-tight leading-tight">
              Designed for the moments
              <br className="hidden md:block" /> between sleep and waking
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex justify-center items-end gap-4 md:gap-8">
            <DeviceMockup
              screen="interpret"
              className="hidden md:block opacity-70 -translate-y-4 scale-90"
            />
            <DeviceMockup screen="capture" className="relative z-10" />
            <DeviceMockup
              screen="guide"
              className="hidden md:block opacity-70 -translate-y-4 scale-90"
            />
          </div>
        </FadeIn>

        {/* Mobile: horizontal scroll hint */}
        <FadeIn>
          <div className="flex md:hidden justify-center gap-4 mt-8 overflow-x-auto pb-4">
            <DeviceMockup screen="interpret" className="shrink-0 scale-90" />
            <DeviceMockup screen="guide" className="shrink-0 scale-90" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
