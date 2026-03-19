"use client";

import { useEffect, useRef, useState } from "react";

const OPERATIONAL_TOOLS = [
  {
    name: "RMM",
    desc: "Device state, patch status, agent health. Current only.",
  },
  {
    name: "Network Scanner",
    desc: "Point-in-time inventory. Expires on next network change.",
  },
  {
    name: "SIEM",
    desc: "Event aggregation. What happened, reconstructed from fragments.",
  },
  {
    name: "Compliance Platform",
    desc: "Policy structure. Depends on you to supply the evidence.",
  },
];

const AVERA_CAPABILITIES = [
  {
    name: "Persistent Identity",
    desc: "Device identity maintained across attribute changes. The record doesn't reset.",
  },
  {
    name: "Continuous Observation",
    desc: "Every connection logged as it happens. Not reconstructed from the next scan.",
  },
  {
    name: "Immutable Timeline",
    desc: "SHA-256 hash-chained ledger. Append-only. Verifiable at any point in time.",
  },
  {
    name: "Approval Workflow",
    desc: "Authorization decisions recorded as evidence. Separate from technical observation.",
  },
];

export default function DifferentiationSection() {
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
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/30 via-[#0a0f1a]/45 to-[#0a0f1a]/55" />
      <div className="pointer-events-none absolute left-[-6%] top-[24%] h-[320px] w-[320px] rounded-full bg-[#315798]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[2%] top-[28%] h-[320px] w-[320px] rounded-full bg-[#D4A791]/12 blur-3xl" />
      <div className="relative mx-auto w-full max-w-[980px]">
        {/* Section pill */}
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[#7D95E0]">
          The Architectural Gap
        </p>

        {/* Headline */}
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Two categories. Only one was built for evidence.
        </h2>

        {/* Cards */}
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[420px] w-[930px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[#315798]/10 md:block" />
          <div className="pointer-events-none absolute left-[32%] top-1/2 hidden h-[320px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-[#315798]/10 blur-3xl md:block" />
          <div className="pointer-events-none absolute left-[68%] top-1/2 hidden h-[320px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-[#D4A791]/10 blur-3xl md:block" />
          {/* Operational Tools card */}
          <div
            className={`relative overflow-hidden rounded-2xl border border-[#315798]/15 bg-[#0d0a0a] p-6 text-left transition-all duration-[600ms] ease-out md:p-8 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(49,87,152,0.12),transparent_52%)]" />
            <div className="mb-6 border-b border-[#315798]/20 pb-4">
              <h3 className="mb-1 text-lg font-semibold text-[#7D95E0]">Operational</h3>
              <p className="text-sm text-white/45">
                Built to answer: what&apos;s happening now.
              </p>
            </div>
            <p className="mb-6 text-xs uppercase tracking-[0.18em] text-white/30">
              Snapshot systems
            </p>
            <ul className="space-y-5">
              {OPERATIONAL_TOOLS.map((tool, index) => (
                <li
                  key={tool.name}
                  className={index !== OPERATIONAL_TOOLS.length - 1 ? "border-b border-white/5 pb-5" : ""}
                >
                  <p className="text-sm font-semibold text-white/65">{tool.name}</p>
                  <p className="mt-0.5 text-sm text-white/35">{tool.desc}</p>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-[#315798]/15 pt-4 text-xs text-white/30">
              When auditors ask for March through June, these tools require
              reconstruction.
            </div>
          </div>

          {/* Avera card */}
          <div
            className={`relative overflow-hidden rounded-2xl border border-[rgba(212,167,145,0.22)] bg-[#1a120e] p-6 text-left transition-all duration-[600ms] ease-out md:p-8 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,167,145,0.18),transparent_54%)]" />
            <div className="mb-6 border-b border-[rgba(212,167,145,0.22)] pb-4">
              <h3 className="mb-1 text-lg font-semibold text-[#D4A791]">Evidentiary</h3>
              <p className="text-sm text-[rgba(212,167,145,0.72)]">
                Built to answer: what happened, and can you prove it.
              </p>
            </div>
            <p className="mb-6 text-xs uppercase tracking-[0.18em] text-[rgba(212,167,145,0.7)]">
              Continuity systems
            </p>
            <ul className="space-y-5">
              {AVERA_CAPABILITIES.map((cap, index) => (
                <li
                  key={cap.name}
                  className={index !== AVERA_CAPABILITIES.length - 1 ? "border-b border-[#D4A791]/15 pb-5" : ""}
                >
                  <p className="text-sm font-semibold text-[#D4A791]">{cap.name}</p>
                  <p className="mt-0.5 text-sm text-white/60">{cap.desc}</p>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-[rgba(212,167,145,0.25)] pt-4 text-xs text-[rgba(212,167,145,0.7)]">
              When auditors ask for March through June, Avera returns it in
              under 60 seconds.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
