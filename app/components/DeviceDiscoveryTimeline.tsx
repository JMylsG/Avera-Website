"use client";

import { useEffect, useRef, useState } from "react";

const STAGGER_DELAY_MS = 600;

const STEPS = [
  {
    side: "left" as const,
    label: "Persistent Identity",
    subtext:
      "Device identity is maintained across attribute changes. When network properties shift, Avera correlates available signals to preserve continuity.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
  },
  {
    side: "right" as const,
    label: "Explainable Classification",
    subtext:
      "Every identification decision is documented in human-readable form. Confidence levels and signal sources are preserved alongside each classification.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 10v2" />
        <path d="M12 6V4" />
        <path d="M12 14v2" />
        <path d="M12 18v2" />
        <path d="M8 10V8" />
        <path d="M8 14v2" />
        <path d="M16 10V8" />
        <path d="M16 14v2" />
        <path d="M6 12a2 2 0 0 1 2-2v4a2 2 0 0 1-2 2" />
        <path d="M18 12a2 2 0 0 0-2-2v4a2 2 0 0 0 2 2" />
        <path d="M4 8V6a4 4 0 0 1 8 0v2" />
        <path d="M12 22v-2" />
      </svg>
    ),
  },
  {
    side: "left" as const,
    label: "Immutable Timeline",
    subtext:
      "Every observation and state change is recorded as an append-only event. Nothing is overwritten. The record reflects the network at any prior point in time.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    side: "right" as const,
    label: "Continuous Monitoring",
    subtext:
      "Device presence is observed continuously, not on a schedule. New devices are recorded at connection, not at the next scan interval.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function DeviceDiscoveryTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            STEPS.forEach((_, i) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, i]);
                setLineProgress(((i + 1) / STEPS.length) * 100);
              }, i * STAGGER_DELAY_MS);
            });
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
        How It Works
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight text-center max-w-2xl mx-auto mb-16">
        From unknown to verified. In seconds.
      </h2>

      <div className="relative w-full max-w-3xl mx-auto">
        {/* Center timeline line - animates downward */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gray-700/50 overflow-hidden">
          <div
            className="w-full bg-[#315798] transition-all duration-500 ease-out"
            style={{
              height: `${lineProgress}%`,
              boxShadow: "0 0 12px 2px rgba(49, 87, 152, 0.6)",
            }}
          />
        </div>

        <div className="relative space-y-0">
          {STEPS.map((step, index) => {
            const isVisible = visibleSteps.includes(index);
            return (
              <div
                key={index}
                className={`flex items-center gap-8 py-8 ${
                  step.side === "left" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    step.side === "left" ? "text-right" : "text-left"
                  } transition-all duration-500 ease-out`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateX(0)"
                      : step.side === "left"
                        ? "translateX(-20px)"
                        : "translateX(20px)",
                  }}
                >
                  <p className="text-[#7D95E0] text-sm font-semibold mb-2">
                    {step.label}
                  </p>
                  <p className="text-gray-400 text-base">{step.subtext}</p>
                </div>

                {/* Center: dot + icon */}
                <div className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center z-10">
                  <div
                    className={`absolute w-4 h-4 rounded-full transition-all duration-500 ${
                      isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                    style={{
                      backgroundColor: "#315798",
                      boxShadow: "0 0 16px 4px rgba(49, 87, 152, 0.7)",
                    }}
                  />
                  <div
                    className={`relative text-[#7D95E0] transition-all duration-500 ${
                      isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Spacer for balance */}
                <div className="flex-1" aria-hidden />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
