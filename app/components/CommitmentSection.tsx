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
      className="relative flex flex-col items-center justify-center px-6 py-24 bg-transparent overflow-hidden"
      style={{ minHeight: "60vh" }}
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-[600px] mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight transition-opacity duration-500"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          Run it on{" "}
          <span style={{ color: "#D4A791" }}>your network.</span>
        </h2>

        <p
          className="text-base mt-4 max-w-[440px] transition-opacity duration-500"
          style={{
            color: "rgba(255,255,255,0.5)",
            opacity: isVisible ? 1 : 0,
            transitionDelay: isVisible ? "100ms" : "0ms",
          }}
        >
          30-day free pilot. No cloud. No agents.{" "}
          <span style={{ color: "rgba(212,167,145,0.8)" }}>No reconstruction.</span>
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 transition-opacity duration-500"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: isVisible ? "200ms" : "0ms",
          }}
        >
          <Link
            href="/demo"
            className="bg-[#315798] hover:bg-[#7D95E0] text-white font-semibold rounded-full px-8 py-4 transition-colors duration-300"
          >
            Request a Demo
          </Link>
          <Link
            href="/timeline"
            className="hover:text-white transition-colors duration-300"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            See the roadmap
          </Link>
        </div>

        <p
          className="text-sm mt-10 transition-opacity duration-500"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: isVisible ? "300ms" : "0ms",
          }}
        >
          {TRUST_SIGNALS.map((signal, i) => (
            <span key={signal} style={{ color: "rgba(255,255,255,0.4)" }}>
              {signal}
              {i < TRUST_SIGNALS.length - 1 && (
                <span className="mx-2" style={{ color: "rgba(212,167,145,0.6)" }} aria-hidden>
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
