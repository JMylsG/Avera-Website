"use client";

import { useEffect, useRef, useState } from "react";

const BEFORE_ITEMS = [
  "40+ hours rebuilding device inventories",
  "Snapshots that expire the moment networks change",
  "Auditors asking for history you don't have",
  "Breach investigations from fragmented logs",
  "Compliance that resets every audit cycle",
];

const AFTER_ITEMS = [
  "Continuous device records, always current",
  "Audit-ready in under 60 seconds",
  "Every device identified and explained",
  "Immutable evidence trail, always intact",
  "Compliance that runs between audits, not just during",
];

export default function BeforeAfterSection() {
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
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center"
    >
      <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-6">
        The Difference
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight max-w-3xl mx-auto mb-12">
        Compliance used to mean reconstruction. Not anymore.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
        {/* Before Card */}
        <div
          className="rounded-2xl border border-[rgba(239,68,68,0.15)] bg-[#0d0a0a] p-6 md:p-8 text-left transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-80px)",
          }}
        >
          <h3 className="text-rose-400 text-lg font-semibold mb-6">Before</h3>
          <ul className="space-y-5 md:space-y-4">
            {BEFORE_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm md:text-base"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                <span className="text-rose-500 mt-0.5 flex-shrink-0" aria-hidden>
                  ✕
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* After Card */}
        <div
          className="rounded-2xl border border-[rgba(184,135,111,0.35)] bg-[#1a120e] p-6 md:p-8 text-left transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(80px)",
          }}
        >
          <h3 className="text-lg font-semibold mb-6" style={{ color: "#D4A791" }}>
            After
          </h3>
          <ul className="space-y-5 md:space-y-4">
            {AFTER_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm md:text-base"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                <span
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "#D4A791" }}
                  aria-hidden
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
