"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/lib/supabase";
import Navbar from "../components/Navbar";
import ConstellationBackground from "../components/ConstellationBackground";
import Footer from "../components/Footer";

type NodeStatus = "completed" | "active" | "upcoming";

interface Stage {
  status: NodeStatus;
  side: "left" | "right";
  label: string;
  timing: string | null;
  subtext: string;
  cta?: boolean;
}

const STAGES: Stage[] = [
  {
    status: "completed",
    side: "left",
    label: "Avera v1.0",
    timing: null,
    subtext: "Production-ready desktop app. Supports macOS and Windows.",
  },
  {
    status: "active",
    side: "right",
    label: "Internal Testing",
    timing: null,
    subtext: "Live validation across real networks. Closing mid-March 2026.",
  },
  {
    status: "upcoming",
    side: "left",
    label: "Early Deployment Cohort",
    timing: "Early April 2026",
    subtext:
      "30-day free pilot program. Limited seats. Early partners receive founding partner pricing based on device count.",
    cta: true,
  },
  {
    status: "upcoming",
    side: "right",
    label: "Pre-Seed Raise",
    timing: "Mid Q2 2026",
    subtext:
      "Raising to fund v2.0 development and expand deployment capacity.",
  },
  {
    status: "upcoming",
    side: "left",
    label: "Avera v1.5.0 + Relay",
    timing: "Mid Q1 2027",
    subtext:
      "MSP Dashboard and remote relay introduced. MSPs gain secure remote visibility into local compliance records. Clinic data remains on-premise.",
  },
  {
    status: "upcoming",
    side: "right",
    label: "Avera v2.0.0 + Node",
    timing: "Early Q4 2027",
    subtext:
      "Hardware node integration. Device fingerprinting accuracy increases from 80–85% to 97%+.",
  },
];

const STAGGER_DELAY_MS = 500;

function nodeDotStyle(status: NodeStatus, isVisible: boolean): React.CSSProperties {
  const base: React.CSSProperties = {
    transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
    transform: isVisible ? "scale(1)" : "scale(0)",
    opacity: isVisible ? 1 : 0,
  };

  if (status === "completed") {
    return {
      ...base,
      backgroundColor: "#7D95E0",
      boxShadow: "0 0 12px 3px rgba(125,149,224,0.5)",
    };
  }
  if (status === "active") {
    return {
      ...base,
      backgroundColor: "#7D95E0",
      animation: isVisible ? "pulseGlow 2s ease-in-out infinite" : undefined,
    };
  }
  return {
    ...base,
    backgroundColor: "rgb(75 85 99)",
  };
}

export default function TimelinePage() {
  const router = useRouter();
  const supabase = createClient();
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [lineProgress, setLineProgress] = useState(0);

  const handleEarlyAccessClick = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      sessionStorage.setItem("redirectAfterLogin", "/apply");
      router.push("/signin");
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            STAGES.forEach((_, i) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, i]);
                setLineProgress(((i + 1) / STAGES.length) * 100);
              }, i * STAGGER_DELAY_MS);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <>
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 8px 2px rgba(125, 149, 224, 0.4); }
          50%       { box-shadow: 0 0 20px 6px rgba(125, 149, 224, 0.8); }
        }
      `}</style>

      <div className="min-h-screen bg-[#0a0f1a]">
        <ConstellationBackground />
        <div className="relative z-[1]">
          <Navbar />
          <main className="pt-24">

            {/* Page header */}
            <section className="py-20 px-6 text-center max-w-3xl mx-auto">
              <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-6">
                Roadmap
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Where we are. Where we&apos;re going.
              </h1>
              <p className="text-gray-400 text-lg">
                A transparent view of Avera&apos;s progress and what&apos;s coming next.
              </p>
            </section>

            {/* Timeline */}
            <section
              ref={sectionRef}
              className="px-6 pb-24"
            >
              <div className="relative w-full max-w-3xl mx-auto">

                {/* Center spine */}
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
                  {STAGES.map((stage, index) => {
                    const isVisible = visibleSteps.includes(index);
                    const isUpcoming = stage.status === "upcoming";

                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-8 py-10 ${
                          stage.side === "left" ? "flex-row" : "flex-row-reverse"
                        }`}
                      >
                        {/* Content */}
                        <div
                          className={`flex-1 ${
                            stage.side === "left" ? "text-right" : "text-left"
                          } transition-all duration-500 ease-out ${
                            isUpcoming ? "opacity-50" : ""
                          }`}
                          style={{
                            opacity: isVisible ? (isUpcoming ? 0.5 : 1) : 0,
                            transform: isVisible
                              ? "translateX(0)"
                              : stage.side === "left"
                                ? "translateX(-20px)"
                                : "translateX(20px)",
                          }}
                        >
                          {stage.timing && (
                            <p className="text-[#7D95E0] text-xs font-medium mb-1 tracking-wide uppercase">
                              {stage.timing}
                            </p>
                          )}

                          <p
                            className={`font-semibold text-base mb-2 ${
                              isUpcoming ? "text-gray-400" : "text-white"
                            }`}
                          >
                            {stage.label}
                            {stage.status === "active" && (
                              <span className="ml-2 text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full align-middle">
                                Active
                              </span>
                            )}
                          </p>

                          <p
                            className={`text-sm leading-relaxed ${
                              stage.status === "active"
                                ? "text-gray-300"
                                : isUpcoming
                                  ? "text-gray-500"
                                  : "text-gray-400"
                            }`}
                          >
                            {stage.subtext}
                          </p>

                          {stage.cta && (
                            <div
                              className={
                                stage.side === "left" ? "flex justify-end" : "flex justify-start"
                              }
                            >
                              <button
                                type="button"
                                onClick={handleEarlyAccessClick}
                                className="inline-block mt-4 bg-[#315798] hover:bg-[#7D95E0] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors duration-300"
                              >
                                Apply for Early Access
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Center dot */}
                        <div className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center z-10">
                          <div
                            className="absolute w-4 h-4 rounded-full"
                            style={nodeDotStyle(stage.status, isVisible)}
                          />
                        </div>

                        {/* Spacer */}
                        <div className="flex-1" aria-hidden />
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

          </main>

          {/* Screenshot showcase section */}
          <section className="py-24 px-6">
            <div className="text-center mb-12">
              <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4">
                The Product
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Built for the work. Not the audit.
              </h2>
              <p className="text-gray-400">A look inside Avera v1.0.</p>
            </div>
            <div className="mx-auto max-w-[900px] grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { src: "/Home-Screen.png", caption: "The compliance record that never resets." },
                { src: "/Compliance.png", caption: "Continuous & Verified. Not reconstructed." },
                { src: "/Policy-Pack.png", caption: "Every major framework. Verified out of the box." },
                { src: "/Evidence.png", caption: "Audit-ready evidence. Generated in seconds." },
              ].map(({ src, caption }) => (
                <div key={src}>
                  <Image
                    src={src}
                    alt={caption}
                    width={900}
                    height={562}
                    className="w-full h-auto rounded-2xl border border-[#315798]/30 shadow-[0_0_30px_rgba(49,87,152,0.15)]"
                  />
                  <p className="text-gray-400 text-sm text-center mt-3">{caption}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Video section */}
          <section className="py-24 px-6 text-center">
            <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4">
              See It In Action
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Avera. Live.
            </h2>
            <p className="text-gray-400 mb-10">
              A full walkthrough of Avera v1.0 running on a live network.
            </p>
            <div className="mx-auto max-w-[800px]">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-2xl border border-[#315798]/30 shadow-[0_0_40px_rgba(49,87,152,0.2)]"
                  src="https://www.youtube.com/embed/80QctqL4yxo"
                  title="Avera v1.0 Walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
