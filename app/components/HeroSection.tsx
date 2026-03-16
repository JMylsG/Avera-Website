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
            // Post-break text fades in after 1200ms
            setTimeout(() => setShowPostBreak(true), 1200);
            // CTA appears 400ms after post-break text
            setTimeout(() => setShowCTA(true), 1600);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [onBreakTrigger]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 z-[10]">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Pill badge */}
        <div
          className="inline-flex items-center px-4 py-1.5 rounded-full border text-sm font-semibold tracking-widest uppercase mb-8"
          style={{
            borderColor: "rgba(212, 167, 145, 0.5)",
            backgroundColor: "rgba(212, 167, 145, 0.15)",
            color: "#D4A791",
          }}
        >
          Compliance Infrastructure
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-8">
          Every device.
          <br />
          Verified. Always.
        </h1>

        {/* Subtext container — fixed height prevents layout shift */}
        <div className="relative min-h-[72px]">
          {/* Before-break subtext */}
          <p
            className="absolute inset-x-0 text-center text-lg transition-opacity duration-[600ms]"
            style={{
              color: "rgba(255,255,255,0.5)",
              opacity: breakTriggered ? 0 : 1,
            }}
          >
            Your network has a record. Until it doesn&apos;t.
          </p>

          {/* Post-break subtext */}
          <div
            className="absolute inset-x-0 text-center transition-[opacity,transform] duration-[600ms]"
            style={{
              opacity: showPostBreak ? 1 : 0,
              transform: showPostBreak ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <p className="text-lg" style={{ color: "#D4A791", fontWeight: 700 }}>The record broke.</p>
            <p className="text-lg mt-1" style={{ color: "rgba(212,167,145,0.8)" }}>
              Every audit downstream just became reconstruction.
            </p>
          </div>
        </div>

        {/* CTA button — appears after break */}
        <div
          className="mt-10 transition-[opacity,transform] duration-[600ms]"
          style={{
            opacity: showCTA ? 1 : 0,
            transform: showCTA ? "translateY(0)" : "translateY(8px)",
          }}
        >
          <Link
            href="/demo"
            className="inline-block bg-[#315798] hover:bg-[#7D95E0] text-white font-semibold px-8 py-4 rounded-full text-base transition-colors duration-300 hover:shadow-[0_0_24px_rgba(212,167,145,0.2)]"
          >
            See how Avera holds the chain
          </Link>
        </div>
      </div>

      {/* Sentinel div at 60% viewport height triggers the break */}
      <div
        ref={sentinelRef}
        className="absolute left-0 right-0"
        style={{ top: "60vh", height: "1px" }}
      />

      {/* Scroll indicator chevron */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500"
        style={{ opacity: breakTriggered ? 0 : 1 }}
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
