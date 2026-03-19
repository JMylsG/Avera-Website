"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import ConstellationBackground from "../components/ConstellationBackground";
import Footer from "../components/Footer";

const PRINCIPLES = [
  {
    title: "Local-First",
    body: "Your compliance data never leaves your network. No cloud storage. No outbound telemetry. Fully air-gapped capable.",
  },
  {
    title: "Evidentiary by Design",
    body: "Every device observation, approval decision, and state change is stored as an immutable event. Built for auditors, not just operators.",
  },
  {
    title: "Explainable Always",
    body: "Every identification decision includes human-readable reasoning. No black boxes. No opaque scoring.",
  },
];

const STAGGER_DELAY_MS = 150;

export default function AboutPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleBlocks, setVisibleBlocks] = useState<number[]>([]);

  useEffect(() => {
    const section = contentRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const totalBlocks = 2 + PRINCIPLES.length + 1;
            Array.from({ length: totalBlocks }).forEach((_, i) => {
              setTimeout(() => {
                setVisibleBlocks((prev) => [...prev, i]);
              }, i * STAGGER_DELAY_MS);
            });
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasAnimated]);

  function fadeStyle(blockIndex: number): React.CSSProperties {
    const visible = visibleBlocks.includes(blockIndex);
    return {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(16px)",
      transition: "opacity 550ms ease-out, transform 550ms ease-out",
    };
  }

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <ConstellationBackground />
      <div className="relative z-[1]">
        <Navbar />

        <main className="pt-24">
          {/* Hero */}
          <section className="py-20 px-6 text-center max-w-3xl mx-auto">
            <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-6">
              About Avera
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Built by someone who saw the gap.
            </h1>
            <p className="text-gray-400 text-lg">
              Avera exists because healthcare compliance was being rebuilt from
              scratch every quarter by teams that deserved better infrastructure.
            </p>
          </section>

          {/* Animated sections */}
          <div ref={contentRef}>
            {/* Founder */}
            <section className="py-20 px-6">
              <div
                className="max-w-2xl mx-auto text-center"
                style={fadeStyle(0)}
              >
                <div
                  className="w-20 h-20 rounded-full bg-[#315798]/30 flex items-center justify-center text-[#7D95E0] text-2xl font-bold mx-auto mb-6"
                  style={{ border: "1px solid rgba(212, 167, 145, 0.6)" }}
                >
                  M
                </div>
                <p className="text-white text-xl font-semibold mb-1">Myls</p>
                <p className="text-[#D4A791] text-sm mb-6">Founder &amp; CEO</p>
                <p className="text-gray-400 leading-relaxed">
                  Avera started from a simple observation: MSPs managing
                  healthcare networks were spending weeks every quarter
                  reconstructing compliance records that should have existed all
                  along. The tools existed for operations. Nothing existed for
                  evidence. Avera is the infrastructure that closes that gap.
                  Continuous. Local-first. Defensible by design.
                </p>
              </div>
            </section>

            {/* Mission */}
            <section className="py-20 px-6">
              <div className="max-w-3xl mx-auto" style={fadeStyle(1)}>
                <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4">
                  The Mission
                </p>
                <h2 className="text-white text-2xl font-bold mb-6">
                  The gap is <span className="text-[#D4A791]">architectural.</span>
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Healthcare organizations face real regulatory consequences when
                  their compliance documentation fails. Not because they
                  weren&apos;t doing the work. Their infrastructure
                  wasn&apos;t built to preserve it. Avera is built on the belief
                  that compliance evidence should exist as a continuous system of
                  record, not be reconstructed under pressure. The gap is
                  architectural. The solution is infrastructure.
                </p>
              </div>
            </section>

            {/* Principles */}
            <section className="py-20 px-6">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {PRINCIPLES.map((card, i) => (
                    <div
                      key={card.title}
                      className="bg-[#0d1520] rounded-2xl p-8"
                      style={{
                        ...fadeStyle(2 + i),
                        border: "1px solid rgba(212, 167, 145, 0.35)",
                      }}
                    >
                      <h3 className="text-[#D4A791] font-semibold text-lg mb-3">
                        {card.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{card.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Closing */}
            <section className="py-20 px-6">
              <div
                className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8"
                style={fadeStyle(2 + PRINCIPLES.length)}
              >
                <p className="text-[#D4A791] text-2xl font-light italic">
                  &ldquo;The gap is architectural. The solution is
                  infrastructure. On-Premise. No Compromise.&rdquo;
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/timeline"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    See the Roadmap →
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
