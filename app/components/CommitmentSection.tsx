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
      className="relative flex min-h-[60vh] flex-col items-center justify-center px-6 py-24"
      style={{ background: "#08090f", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}
    >
      <div
        className={`relative z-10 mx-auto w-full max-w-3xl text-center transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <h2
          style={{
            fontSize: 36,
            fontWeight: 500,
            color: "#fff",
            letterSpacing: "-0.015em",
            marginBottom: 12,
            lineHeight: 1.15,
          }}
        >
          Run it on{" "}
          <span style={{ color: "#D4A791" }}>your network.</span>
        </h2>

        <p
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.4)",
            marginBottom: 32,
            lineHeight: 1.6,
          }}
        >
          30-day free pilot. No cloud. No agents.{" "}
          <span style={{ color: "rgba(212,167,145,0.82)" }}>No reconstruction.</span>
        </p>

        <div
          className={`flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100 delay-100" : "translate-y-3 opacity-0"
          }`}
          style={{ marginBottom: 32 }}
        >
          <Link
            href="/demo"
            style={{
              background: "#315798",
              color: "#fff",
              fontSize: 13,
              fontWeight: 500,
              padding: "13px 32px",
              borderRadius: 8,
              textDecoration: "none",
              transition: "background 0.3s",
            }}
            className="hover:bg-[#7D95E0]"
          >
            Request a Demo
          </Link>
          <Link
            href="/timeline"
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.38)",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            className="hover:text-white"
          >
            See the roadmap
          </Link>
        </div>

        <p
          className={`text-sm transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100 delay-200" : "translate-y-3 opacity-0"
          }`}
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          {TRUST_SIGNALS.map((signal, i) => (
            <span key={signal}>
              {signal}
              {i < TRUST_SIGNALS.length - 1 && (
                <span className="mx-2" style={{ color: "rgba(212,167,145,0.4)" }} aria-hidden>
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
