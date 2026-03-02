"use client";

import { useEffect, useRef, useState } from "react";

const STAGGER_DELAY_MS = 150;

const CARDS = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
    title: "OCR Audits",
    stat: "Days → 60 seconds",
    subtext:
      "Auditors ask for March through June. You produce it instantly. No reconstruction. No scrambling.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    ),
    title: "Breach Investigations",
    stat: "Full timeline. From day one.",
    subtext:
      "The average breach lifecycle. Avera gives investigators a complete device timeline from day one.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Cyber Insurance",
    stat: "No gaps.",
    subtext:
      "Underwriters want continuous monitoring. Avera gives you documented proof, not just a claim.",
  },
];

export default function WhenItMattersSection() {
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
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-transparent"
    >
      <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-6 text-center">
        When It Matters
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight text-center max-w-2xl mx-auto mb-12">
        Three moments that define your compliance posture.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        {CARDS.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl border border-[#315798]/30 bg-[#0d1520] p-8 text-left transition-all duration-500 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transitionDelay: isVisible
                ? `${index * STAGGER_DELAY_MS}ms`
                : "0ms",
            }}
          >
            <div className="text-[#7D95E0] mb-4">{card.icon}</div>
            <h3 className="text-white font-semibold text-lg mb-3">{card.title}</h3>
            <p className="text-[#7D95E0] text-3xl font-bold mb-4">{card.stat}</p>
            <p className="text-gray-400 text-sm">{card.subtext}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
