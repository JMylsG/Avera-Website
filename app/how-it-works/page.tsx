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
        <Navbar />

        <main className="pt-24">
          <section className="py-20 px-6 text-center max-w-3xl mx-auto">
            <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-6">
              How It Works
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Compliance infrastructure that runs itself.
            </h1>
            <p className="text-gray-400 text-lg">
              From install to audit-ready in under an hour.
            </p>
          </section>

          <section ref={sectionRef} className="px-6 pb-24">
            <div className="relative max-w-4xl mx-auto pl-2 md:pl-6">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-700/50 overflow-hidden">
                <div
                  className="w-full bg-[#315798] transition-all duration-500 ease-out"
                  style={{
                    height: `${lineProgress}%`,
                    boxShadow: "0 0 12px 2px rgba(49, 87, 152, 0.6)",
                  }}
                />
              </div>

              <div className="relative space-y-10">
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
                        <div className="w-6 h-6 rounded-full bg-[#7D95E0] shadow-[0_0_10px_rgba(125,149,224,0.55)]" />
                        <div className="mt-3 w-10 h-10 rounded-lg border border-[#315798]/40 bg-[#0f1726] text-[#7D95E0] flex items-center justify-center">
                          {step.icon}
                        </div>
                      </div>

                      <div className="flex-1 pt-0.5">
                        <p className="text-[#7D95E0] text-xs font-semibold tracking-widest uppercase mb-1">
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

          <section className="py-24 px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
                Ready to see it live?
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
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
