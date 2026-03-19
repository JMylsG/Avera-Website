"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const TRUST_SIGNALS = [
  "Zero cloud storage",
  "Local-first architecture",
  "Audit-ready in 60 seconds",
];

export default function CommitmentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-transparent px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/25 via-[#0a0f1a]/62 to-[#0a0f1a]/82" />
      <div className="pointer-events-none absolute left-1/2 top-[54%] h-[220px] w-[480px] -translate-x-1/2 rounded-full bg-[#315798]/12 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-[54%] h-[290px] w-[660px] -translate-x-1/2 rounded-[999px] border border-[#315798]/10" />
      <div
        className={`relative z-10 mx-auto w-full max-w-3xl rounded-[2rem] border border-[#7D95E0]/[0.08] bg-[#0a0f1a]/38 px-6 py-10 text-center transition-all duration-500 md:px-10 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_64%_30%_at_50%_74%,rgba(49,87,152,0.13),transparent_66%)]" />
        <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
          Run it on{" "}
          <span className="text-[#D4A791]">your network.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-[440px] text-base text-white/55">
          30-day free pilot. No cloud. No agents.{" "}
          <span className="text-[rgba(212,167,145,0.82)] [text-shadow:0_0_18px_rgba(212,167,145,0.18)]">No reconstruction.</span>
        </p>

        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 transition-all duration-500 sm:flex-row ${
            isVisible ? "translate-y-0 opacity-100 delay-100" : "translate-y-3 opacity-0"
          }`}
        >
          <Link
            href="/demo"
            className="rounded-full bg-[#315798] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#7D95E0] hover:shadow-[0_10px_28px_rgba(49,87,152,0.35)]"
          >
            Request a Demo
          </Link>
          <Link
            href="/timeline"
            className="text-white/50 transition-colors duration-300 hover:text-white"
          >
            See the roadmap
          </Link>
        </div>

        <p
          className={`mt-10 border-t border-[#315798]/20 pt-5 text-sm transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100 delay-200" : "translate-y-3 opacity-0"
          }`}
        >
          {TRUST_SIGNALS.map((signal, i) => (
            <span key={signal} className="text-white/45">
              {signal}
              {i < TRUST_SIGNALS.length - 1 && (
                <span className="mx-2 text-[rgba(212,167,145,0.65)]" aria-hidden>
                  ·
                </span>
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
