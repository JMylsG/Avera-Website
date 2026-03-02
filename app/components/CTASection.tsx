"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const TRUST_SIGNALS = [
  "Zero cloud dependency",
  "Local-first architecture",
  "Audit-ready in 60 seconds",
];

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-transparent overflow-hidden"
    >
      {/* Subtle radial gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(49, 87, 152, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        <p
          className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-6 transition-opacity duration-500 ease-out"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          Get Started
        </p>
        <h2
          className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-8 transition-opacity duration-500 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: isVisible ? "100ms" : "0ms",
          }}
        >
          Stop rebuilding.
          <br />
          Start recording.
        </h2>
        <p
          className="text-lg text-gray-400 mb-10 transition-opacity duration-500 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: isVisible ? "200ms" : "0ms",
          }}
        >
          Build compliance infrastructure that runs between audits.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-opacity duration-500 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: isVisible ? "300ms" : "0ms",
          }}
        >
          <Link href="/demo" className="bg-[#315798] hover:bg-[#7D95E0] text-white font-semibold rounded-full px-8 py-4 transition-colors duration-300">
            Request a Demo
          </Link>
          <a
            href="/learn"
            className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            Learn More <span aria-hidden>→</span>
          </a>
        </div>

        <p
          className="text-sm text-gray-500 transition-opacity duration-500 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: isVisible ? "400ms" : "0ms",
          }}
        >
          {TRUST_SIGNALS.map((signal, i) => (
            <span key={signal}>
              {signal}
              {i < TRUST_SIGNALS.length - 1 && (
                <span className="mx-2" aria-hidden>
                  {" · "}
                </span>
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
