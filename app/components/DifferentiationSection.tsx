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
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
    >
      <div className="max-w-[900px] mx-auto w-full">
        {/* Section pill */}
        <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4 text-center">
          The Architectural Gap
        </p>

        {/* Headline */}
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Two categories. Only one was built for evidence.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Operational Tools card */}
          <div
            className="rounded-2xl border border-[rgba(239,68,68,0.15)] bg-[#0d0a0a] p-6 md:p-8 text-left transition-[opacity,transform] duration-[600ms] ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-40px)",
            }}
          >
            <h3 className="text-rose-400 text-lg font-semibold mb-1">
              Operational
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Built to answer: what&apos;s happening now.
            </p>

            <ul className="space-y-5">
              {OPERATIONAL_TOOLS.map((tool) => (
                <li key={tool.name}>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {tool.name}
                  </p>
                  <p
                    className="text-sm mt-0.5"
                    style={{ color: "rgba(255,255,255,0.25)" }}
                  >
                    {tool.desc}
                  </p>
                </li>
              ))}
            </ul>

            <div
              className="mt-6 border-t border-[rgba(239,68,68,0.1)] pt-4 text-xs"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              When auditors ask for March through June, these tools require
              reconstruction.
            </div>
          </div>

          {/* Avera card */}
          <div
            className="rounded-2xl p-6 md:p-8 text-left transition-[opacity,transform] duration-[600ms] ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(40px)",
              border: "1px solid rgba(184, 135, 111, 0.35)",
              backgroundColor: "#1a120e",
            }}
          >
            <h3 className="text-lg font-semibold mb-1" style={{ color: "#D4A791" }}>
              Evidentiary
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: "rgba(212,167,145,0.6)" }}
            >
              Built to answer: what happened, and can you prove it.
            </p>

            <ul className="space-y-5">
              {AVERA_CAPABILITIES.map((cap, index) => (
                <li
                  key={cap.name}
                  className={
                    index !== AVERA_CAPABILITIES.length - 1
                      ? "border-b border-[#D4A791]/10 pb-5"
                      : ""
                  }
                >
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "rgba(212,167,145,0.9)" }}
                  >
                    {cap.name}
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {cap.desc}
                  </p>
                </li>
              ))}
            </ul>

            <div
              className="mt-6 pt-4 text-xs"
              style={{
                color: "rgba(212, 167, 145, 0.55)",
                borderTop: "1px solid rgba(212, 167, 145, 0.2)",
              }}
            >
              When auditors ask for March through June, Avera returns it in
              under 60 seconds.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
