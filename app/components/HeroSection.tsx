"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HeroSection({
  onBreakTrigger,
}: {
  onBreakTrigger: () => void;
}) {
  const [breakTriggered, setBreakTriggered] = useState(false);
  const [showPostBreak, setShowPostBreak] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered.current) {
            hasTriggered.current = true;
            onBreakTrigger();
            setBreakTriggered(true);
            // Post-break text fades in after delay accounts for subtext fade-out
            setTimeout(() => setShowPostBreak(true), 3200);
            // CTA appears 400ms after post-break text
            setTimeout(() => setShowCTA(true), 3600);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [onBreakTrigger]);

  return (
    <section className="relative z-[10] flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_44%_at_50%_34%,rgba(125,149,224,0.18),rgba(49,87,152,0.08)_44%,transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_62%_26%_at_50%_72%,rgba(49,87,152,0.1),transparent_72%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[36%] h-[420px] w-[820px] -translate-x-1/2 rounded-[999px] border border-[#7D95E0]/10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a0f1a] via-[#0a0f1a]/75 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="relative mx-auto max-w-4xl text-center">
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(125,149,224,0.55)",
              marginBottom: 14,
            }}
          >
            Compliance Infrastructure
          </p>

          <h1 className="mb-8 text-4xl font-medium leading-tight tracking-tight text-white md:text-6xl">
            Every device.
            <br />
            Verified. Always.
          </h1>

          <div className="relative min-h-[72px]">
            <p
              className={`absolute inset-x-0 text-center text-lg text-white/55 transition-opacity duration-700 ease-out ${
                breakTriggered ? "opacity-0 delay-[1800ms]" : "opacity-100"
              }`}
            >
              Your network has a record. Until it doesn&apos;t.
            </p>

            <div
              className={`absolute inset-x-0 text-center transition-all duration-[600ms] ${
                showPostBreak ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              <p className="text-lg font-bold text-[#D4A791]">The record broke.</p>
              <p className="mt-1 text-lg italic text-white/45">
                Every audit downstream just became reconstruction.
              </p>
            </div>
          </div>

          <div
            className={`mt-10 transition-all duration-[600ms] ${
              showCTA ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            <Link
              href="/demo"
              className="inline-block rounded-full bg-[#315798] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#7D95E0] hover:shadow-[0_12px_32px_rgba(49,87,152,0.35)]"
            >
              See how Avera holds the chain
            </Link>
          </div>
        </div>
      </div>

      <div ref={sentinelRef} className="absolute inset-x-0 top-[60vh] h-px" />

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
          breakTriggered ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
