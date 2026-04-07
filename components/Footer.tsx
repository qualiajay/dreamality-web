export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div>
            <a
              href="/"
              className="font-heading text-xl font-medium text-cream tracking-tight"
            >
              Dreamality
            </a>
            <p className="text-xs text-muted mt-2">
              &copy; {new Date().getFullYear()} Dreamality. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <a
              href="/privacy"
              className="text-sm text-silver hover:text-cream transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="mailto:jaypeng.design@gmail.com"
              className="text-sm text-silver hover:text-cream transition-colors duration-300"
            >
              jaypeng.design@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
