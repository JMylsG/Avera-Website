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
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/35 via-[#0a0f1a]/20 to-[#0a0f1a]/45" />
      <p className="relative mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#7D95E0]">
        The Difference
      </p>
      <h2 className="relative mx-auto mb-12 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
        Compliance used to mean reconstruction. Not anymore.
      </h2>

      <div className="relative mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {/* Before Card */}
        <div
          className={`rounded-2xl border border-[#315798]/25 bg-[#0d0a0a] p-6 text-left transition-all duration-700 ease-out md:p-8 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
          }`}
        >
          <h3 className="mb-6 text-lg font-semibold text-[#7D95E0]">Before</h3>
          <ul className="space-y-5 md:space-y-4">
            {BEFORE_ITEMS.map((item, index) => (
              <li
                key={item}
                className={`flex items-start gap-3 pb-4 text-sm text-white/55 md:text-base ${
                  index !== BEFORE_ITEMS.length - 1 ? "border-b border-white/5" : "pb-0"
                }`}
              >
                <span className="mt-0.5 flex-shrink-0 text-[#315798]" aria-hidden>
                  ✕
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* After Card */}
        <div
          className={`rounded-2xl border border-[rgba(212,167,145,0.35)] bg-[#1a120e] p-6 text-left transition-all duration-700 ease-out md:p-8 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          <h3 className="mb-6 text-lg font-semibold text-[#D4A791]">After</h3>
          <ul className="space-y-5 md:space-y-4">
            {AFTER_ITEMS.map((item, index) => (
              <li
                key={item}
                className={`flex items-start gap-3 pb-4 text-sm text-white/60 md:text-base ${
                  index !== AFTER_ITEMS.length - 1 ? "border-b border-[#D4A791]/15" : "pb-0"
                }`}
              >
                <span className="mt-0.5 flex-shrink-0 text-[#D4A791]" aria-hidden>
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
