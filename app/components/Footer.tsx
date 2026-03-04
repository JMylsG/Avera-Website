import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#080d14] border-t border-white/5 py-16">
      <div className="max-w-6xl mx-auto px-8">
        {/* Top row - three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 w-fit hover:opacity-90 transition-opacity">
              <img
                src="/avera-logo.png"
                alt="Avera"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="font-logo text-white font-bold text-lg tracking-[0.15em] uppercase">
                AVERA
              </span>
            </a>
            <p className="text-gray-400 text-sm mt-2 max-w-xs">
              The compliance system of record for regulated networks.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="X / Twitter"
              >
                <XIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Product */}
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
              Product
            </p>
            <nav className="flex flex-col gap-3">
              <Link href="/how-it-works" className="text-gray-400 hover:text-white text-sm transition-colors">
                How It Works
              </Link>
              <Link href="/why-avera" className="text-gray-400 hover:text-white text-sm transition-colors">
                Why Avera
              </Link>
              <Link href="/pricing" className="text-gray-400 hover:text-white text-sm transition-colors">
                Pricing
              </Link>
              <Link href="/demo" className="text-gray-400 hover:text-white text-sm transition-colors">
                Request a Demo
              </Link>
              <Link href="/faq" className="text-gray-400 hover:text-white text-sm transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Column 3 - Company */}
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
              Company
            </p>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/5 mt-12 mb-8" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Avera Systems. All rights reserved.
          </p>
          <p className="text-[#7D95E0] text-sm italic">
            Zero cloud storage. Zero exposure. On-premise. No compromise.
          </p>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
