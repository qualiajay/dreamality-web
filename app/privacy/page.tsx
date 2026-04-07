import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Dreamality",
  description: "How Dreamality protects your data and respects your privacy.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <a
            href="/"
            className="font-heading text-xl font-medium text-cream tracking-tight"
          >
            Dreamality
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4">
          Legal
        </p>
        <h1 className="font-heading text-3xl md:text-5xl font-light text-cream tracking-tight leading-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted mb-16">
          Last updated: April 2026
        </p>

        <div className="space-y-12">
          <Section title="Overview">
            <p>
              Dreamality is a personal dream journal. Your dreams are deeply
              private, and we build every part of this product with that
              principle at the center. This policy explains what data we
              collect, how we use it, and your rights.
            </p>
          </Section>

          <Section title="What We Collect">
            <p>When you use Dreamality, we may collect the following:</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>
                <strong className="text-cream font-medium">Dream entries</strong> — text and voice
                recordings you create within the app.
              </li>
              <li>
                <strong className="text-cream font-medium">Account information</strong> — your email
                address, used to create and manage your account.
              </li>
              <li>
                <strong className="text-cream font-medium">Usage data</strong> — anonymous analytics
                to help us improve the app experience, such as feature usage
                frequency and app stability metrics.
              </li>
            </ul>
          </Section>

          <Section title="How We Use Your Data">
            <p>
              Your dream content is used solely to provide you with
              interpretations, conversations, and personal insights within the
              app. We do not sell your data. We do not use your dreams to train
              AI models. Your content is yours.
            </p>
          </Section>

          <Section title="Data Storage & Security">
            <p>
              All dream entries are encrypted in transit and at rest. We use
              industry-standard security practices to protect your data. Voice
              recordings are processed for transcription and are not stored
              beyond what is necessary to provide the service.
            </p>
          </Section>

          <Section title="Third-Party Services">
            <p>
              We may use third-party services for AI processing (such as
              generating interpretations) and infrastructure. These services
              process data on our behalf under strict data processing
              agreements and do not retain your personal content.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Access all data associated with your account.</li>
              <li>Request deletion of your account and all associated data.</li>
              <li>Export your dream journal entries at any time.</li>
              <li>Opt out of anonymous analytics collection.</li>
            </ul>
          </Section>

          <Section title="Children's Privacy">
            <p>
              Dreamality is not intended for children under the age of 13. We
              do not knowingly collect personal data from children.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this privacy policy from time to time. When we do,
              we will notify you through the app or via email. Continued use of
              Dreamality after changes constitutes acceptance of the updated
              policy.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              If you have any questions about this privacy policy or your data,
              please reach out to us at{" "}
              <a
                href="mailto:jaypeng.design@gmail.com"
                className="text-gold hover:text-gold-light transition-colors duration-300 underline underline-offset-4 decoration-gold/30"
              >
                jaypeng.design@gmail.com
              </a>
              .
            </p>
          </Section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-8">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Dreamality
          </p>
          <a
            href="/"
            className="text-sm text-silver hover:text-cream transition-colors duration-300"
          >
            Back to home
          </a>
        </div>
      </footer>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-xl md:text-2xl font-light text-cream tracking-tight mb-4">
        {title}
      </h2>
      <div className="text-sm text-silver leading-relaxed font-light space-y-3">
        {children}
      </div>
    </section>
  );
}
