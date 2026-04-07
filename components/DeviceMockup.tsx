export type ScreenVariant = "capture" | "interpret" | "guide";

export default function DeviceMockup({
  screen,
  className = "",
}: {
  screen: ScreenVariant;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="w-[240px] h-[490px] md:w-[260px] md:h-[530px] rounded-[36px] border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-[3px] shadow-2xl shadow-black/50">
        <div className="w-full h-full rounded-[33px] bg-surface overflow-hidden relative">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-midnight rounded-full z-10" />
          <div className="p-5 pt-14 h-full flex flex-col">
            {screen === "capture" && <CaptureScreen />}
            {screen === "interpret" && <InterpretScreen />}
            {screen === "guide" && <GuideScreen />}
          </div>
        </div>
      </div>
    </div>
  );
}

function CaptureScreen() {
  return (
    <>
      <p className="text-[10px] text-muted mb-1">Monday, Mar 15</p>
      <p className="text-sm font-heading font-medium text-cream mb-8">
        New Dream
      </p>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex items-end gap-[3px] h-14 mb-5">
          {[22, 38, 55, 32, 48, 65, 42, 58, 28, 50, 38, 55, 35, 22, 45, 60, 48, 35, 55, 40, 28, 42].map(
            (h, i) => (
              <div
                key={i}
                className="w-[3px] rounded-full bg-gradient-to-t from-gold/30 to-gold/70"
                style={{ height: `${h}%` }}
              />
            ),
          )}
        </div>
        <p className="text-[11px] text-silver/60">Recording...</p>
        <p className="text-[10px] text-muted mt-1">0:34</p>
      </div>
      <div className="flex justify-center pb-4">
        <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-gold" />
        </div>
      </div>
    </>
  );
}

function InterpretScreen() {
  return (
    <>
      <p className="text-[10px] text-muted mb-1">AI Interpretation</p>
      <p className="text-sm font-heading font-medium text-cream mb-4">
        The Endless Library
      </p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {["Knowledge", "Discovery", "Overwhelm"].map((tag) => (
          <span
            key={tag}
            className="text-[9px] px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/15"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="space-y-2.5 flex-1">
        <div className="h-[6px] bg-white/5 rounded-full w-full" />
        <div className="h-[6px] bg-white/5 rounded-full w-[85%]" />
        <div className="h-[6px] bg-white/5 rounded-full w-[92%]" />
        <div className="h-[6px] bg-white/5 rounded-full w-[70%]" />
        <div className="h-[6px] bg-white/5 rounded-full w-[88%]" />
        <div className="mt-5 p-3 rounded-xl bg-gold/[0.04] border border-gold/10">
          <p className="text-[10px] text-gold/80 leading-relaxed">
            This dream suggests a deep desire for understanding, paired with the
            anxiety of feeling there&apos;s always more to learn...
          </p>
        </div>
      </div>
    </>
  );
}

function GuideScreen() {
  return (
    <>
      <p className="text-[10px] text-muted mb-1">Dream Guide</p>
      <p className="text-sm font-heading font-medium text-cream mb-5">
        Conversation
      </p>
      <div className="flex-1 space-y-3 overflow-hidden">
        <div className="flex justify-end">
          <div className="max-w-[82%] p-2.5 rounded-2xl rounded-br-sm bg-gold/10 border border-gold/10">
            <p className="text-[10px] text-cream/80 leading-relaxed">
              I keep dreaming about water. What does that mean?
            </p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[82%] p-2.5 rounded-2xl rounded-bl-sm bg-white/[0.04] border border-white/5">
            <p className="text-[10px] text-silver leading-relaxed">
              Water often reflects your emotional state. Was it calm, turbulent,
              clear, or dark?
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[82%] p-2.5 rounded-2xl rounded-br-sm bg-gold/10 border border-gold/10">
            <p className="text-[10px] text-cream/80 leading-relaxed">
              Deep and still. I was floating.
            </p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[82%] p-2.5 rounded-2xl rounded-bl-sm bg-white/[0.04] border border-white/5">
            <p className="text-[10px] text-silver leading-relaxed">
              Floating in still water often suggests surrender — letting go and
              trusting the process...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
