"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
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

const avatarStyle: React.CSSProperties = {
  width: 72,
  height: 72,
  borderRadius: "50%",
  background: "rgba(125,149,224,0.12)",
  border: "0.5px solid rgba(125,149,224,0.25)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 22,
  fontWeight: 500,
  color: "#7D95E0",
  margin: "0 auto 16px",
};

const principleCardStyle: React.CSSProperties = {
  background: "#0d1018",
  border: "0.5px solid rgba(255,255,255,0.07)",
  borderRadius: 8,
  padding: "28px 32px",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: "#08090f" }}>
      <div className="relative z-[1]">
        <Navbar />

        <main className="pt-24">
          <section
            style={{
              padding: "96px 40px 64px",
              borderBottom: "0.5px solid rgba(255,255,255,0.06)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(125,149,224,0.55)",
                marginBottom: 14,
              }}
            >
              About Avera
            </p>
            <h1
              style={{
                fontSize: 44,
                fontWeight: 500,
                color: "#fff",
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                marginBottom: 10,
              }}
            >
              Built by someone who saw the gap.
            </h1>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.32)",
                lineHeight: 1.7,
                maxWidth: 460,
                margin: "0 auto",
              }}
            >
              Avera exists because healthcare compliance was being rebuilt from
              scratch every quarter by teams that deserved better infrastructure.
            </p>
          </section>

          <section className="px-6 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <div style={avatarStyle}>M</div>
              <p className="mb-1 text-xl font-semibold text-white">Myls</p>
              <p className="mb-6 text-sm text-[#D4A791]">Founder &amp; CEO</p>
              <p className="leading-relaxed text-gray-400">
                Avera started from a simple observation: MSPs managing
                healthcare networks were spending weeks every quarter
                reconstructing compliance records that should have existed all
                along. The tools existed for operations. Nothing existed for
                evidence. Avera is the infrastructure that closes that gap.
                Continuous. Local-first. Defensible by design.
              </p>
            </div>
          </section>

          <section className="px-6 py-20">
            <div className="mx-auto max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#7D95E0]">
                The Mission
              </p>
              <h2 className="mb-6 text-2xl font-bold text-white">
                The gap is <span className="text-[#D4A791]">architectural.</span>
              </h2>
              <p className="leading-relaxed text-gray-400">
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

          <section className="px-6 py-20">
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {PRINCIPLES.map((card) => (
                  <div key={card.title} style={principleCardStyle}>
                    <h3
                      className="mb-3 text-lg font-semibold"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "rgba(255,255,255,0.38)" }}
                    >
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 py-20">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
              <p className="text-2xl font-light italic text-[#D4A791]">
                &ldquo;The gap is architectural. The solution is
                infrastructure. On-Premise. No Compromise.&rdquo;
              </p>
              <div className="flex justify-center">
                <Link
                  href="/timeline"
                  className="text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  See the Roadmap →
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
