"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import ConstellationBackground from "../components/ConstellationBackground";
import Footer from "../components/Footer";

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const STEPS: Step[] = [
  {
    title: "Install Avera",
    description:
      "Deploy the desktop app on your network in minutes. No agents, no cloud setup, no configuration required.",
    icon: <InstallIcon />,
  },
  {
    title: "Avera Discovers Your Network",
    description:
      "Avera immediately begins passive discovery, identifying every device using multi-layered fingerprinting. MAC vendor, hostname patterns, and behavioral signals are all correlated into stable device identities.",
    icon: <DiscoveryIcon />,
  },
  {
    title: "Review & Approve Devices",
    description:
      "New devices trigger an approval workflow you control. Every decision is recorded as an immutable event in the compliance ledger.",
    icon: <ApproveIcon />,
  },
  {
    title: "Evidence Builds Automatically",
    description:
      "Every device observation, state change, and approval decision is logged continuously. No scheduled scans. No manual exports.",
    icon: <EvidenceIcon />,
  },
  {
    title: "Generate Audit-Ready Records",
    description:
      "When auditors ask, query any historical window and export certified records in seconds. The work is already done.",
    icon: <RecordsIcon />,
  },
];

const STAGGER_DELAY_MS = 350;

export default function HowItWorksPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
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
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <ConstellationBackground />
      <div className="relative z-[1]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/34 via-[#0a0f1a]/20 to-[#0a0f1a]/18" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_116%_74%_at_50%_10%,rgba(49,87,152,0.1),transparent_58%)]" />
        <Navbar />

        <main className="pt-24">
          <section className="relative overflow-hidden py-20 px-6 text-center">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_74%_42%_at_50%_30%,rgba(49,87,152,0.2),transparent_72%)]" />
            <div className="pointer-events-none absolute left-1/2 top-[50%] h-[280px] w-[min(88vw,880px)] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[#7D95E0]/12" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/14 via-transparent to-[#0a0f1a]/34" />
            <div className="relative max-w-3xl mx-auto">
              <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-6">
                How It Works
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Compliance infrastructure that <span className="text-[#D4A791]">runs itself.</span>
              </h1>
              <p className="text-gray-400 text-lg">
                From install to audit-ready in under an hour.
              </p>
            </div>
          </section>

          <section ref={sectionRef} className="relative overflow-hidden px-6 pb-24">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_84%_56%_at_50%_50%,rgba(49,87,152,0.1),transparent_76%)]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/14 via-transparent to-[#0a0f1a]/28" />
            <div className="relative max-w-4xl mx-auto rounded-[28px] border border-[#315798]/16 bg-[#0a111a]/34 px-4 py-6 md:px-8 md:py-10">
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[74%] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[#315798]/10 md:block" />
              <div className="absolute left-8 top-0 bottom-0 w-px overflow-hidden" style={{ backgroundColor: "rgba(125,149,224,0.2)" }}>
                <div
                  className="w-full transition-all duration-500 ease-out"
                  style={{
                    height: `${lineProgress}%`,
                    backgroundColor: "#315798",
                    boxShadow: "0 0 12px 2px rgba(49,87,152,0.55)",
                  }}
                />
              </div>

              <div className="relative space-y-12">
                {STEPS.map((step, index) => {
                  const isVisible = visibleSteps.includes(index);

                  return (
                    <div
                      key={step.title}
                      className="flex items-start gap-6"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0)" : "translateY(18px)",
                        transition: "opacity 500ms ease-out, transform 500ms ease-out",
                      }}
                    >
                      <div className="relative w-16 shrink-0 flex flex-col items-center pt-1">
                        {(() => {
                          const total = STEPS.length;
                          const progress = isVisible ? (index + 1) / total : 0;
                          const radius = 10;
                          const circumference = 2 * Math.PI * radius;
                          const strokeDashoffset = circumference * (1 - progress);
                          return (
                            <div
                              className="transition-all duration-700 ease-out"
                              style={{ opacity: isVisible ? 1 : 0 }}
                            >
                              <svg width="24" height="24" viewBox="0 0 24 24" style={{ transform: "rotate(-90deg)" }}>
                                {/* Track */}
                                <circle
                                  cx="12"
                                  cy="12"
                                  r={radius}
                                  fill="none"
                                  stroke="rgba(125,149,224,0.2)"
                                  strokeWidth="2"
                                />
                                {/* Fill */}
                                <circle
                                  cx="12"
                                  cy="12"
                                  r={radius}
                                  fill="none"
                                  stroke="#7D95E0"
                                  strokeWidth="2"
                                  strokeDasharray={circumference}
                                  strokeDashoffset={strokeDashoffset}
                                  strokeLinecap="round"
                                  style={{ transition: "stroke-dashoffset 600ms ease-out" }}
                                />
                              </svg>
                            </div>
                          );
                        })()}
                        <div
                          className="mt-3 w-10 h-10 rounded-lg bg-[#101a2a] flex items-center justify-center"
                          style={{
                            border: "1px solid rgba(125,149,224,0.3)",
                            color: "#7D95E0",
                            opacity: isVisible ? 1 : 0,
                            transition: "opacity 500ms ease-out",
                          }}
                        >
                          {step.icon}
                        </div>
                      </div>

                      <div className="flex-1 pt-0.5 max-w-2xl">
                        <p className="text-[#D4A791] text-xs font-semibold tracking-widest uppercase mb-1">
                          Step {index + 1}
                        </p>
                        <h2 className="text-white text-xl md:text-2xl font-semibold mb-3">
                          {step.title}
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden py-24 px-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_40%_at_50%_54%,rgba(49,87,152,0.12),transparent_76%)]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/10 via-transparent to-[#0a0f1a]/14" />
            <div className="relative max-w-3xl mx-auto px-6 py-12 text-center md:px-10">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[230px] w-[min(88vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[#315798]/12" />
              <h2 className="relative text-white text-3xl md:text-4xl font-bold mb-8">
                Ready to see it live?
              </h2>
              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link
                  href="/timeline"
                  className="bg-[#315798] hover:bg-[#7D95E0] text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
                >
                  Watch the Demo
                </Link>
                <Link
                  href="/apply"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Apply for Early Access
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

function InstallIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-5 h-5"
      aria-hidden
    >
      <rect x="4" y="4" width="16" height="12" rx="2" />
      <path d="M9 20h6M12 16v4" />
    </svg>
  );
}

function DiscoveryIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-5 h-5"
      aria-hidden
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M3 12h3m12 0h3M12 3v3m0 12v3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1" />
    </svg>
  );
}

function ApproveIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-5 h-5"
      aria-hidden
    >
      <path d="M5 12l4 4L19 6" />
      <rect x="3" y="3" width="18" height="18" rx="3" />
    </svg>
  );
}

function EvidenceIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-5 h-5"
      aria-hidden
    >
      <path d="M8 6h8M8 10h8M8 14h5" />
      <rect x="4" y="3" width="16" height="18" rx="2" />
    </svg>
  );
}

function RecordsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-5 h-5"
      aria-hidden
    >
      <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
