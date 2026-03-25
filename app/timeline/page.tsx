"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type StageStatus = "completed" | "active" | "upcoming";

type Stage = {
  id: string;
  status: StageStatus;
  title: string;
  timing: string;
  badge: string;
  body: string;
  features: string[];
  cta: { label: string; href: string } | null;
};

const stages: Stage[] = [
  {
    id: "v1",
    status: "completed",
    title: "Avera v1.0",
    timing: "Released",
    badge: "Completed",
    body: "Production-ready desktop app. Supports macOS and Windows. Full compliance system of record including persistent device identity, continuous monitoring, immutable event timeline, and audit-ready evidence generation.",
    features: [
      "Persistent device identity across attribute changes",
      "Continuous ARP-based device monitoring",
      "SHA-256 hash-chained evidence ledger",
      "Explainable device classification",
      "HIPAA-aligned compliance reporting",
      "WebAuthn authentication, role-based access",
      "Zero cloud storage. Fully air-gap capable.",
    ],
    cta: null,
  },
  {
    id: "testing",
    status: "active",
    title: "Internal Testing",
    timing: "Closing mid-March 2026",
    badge: "Active",
    body: "Live validation across partner networks and real environments. Tested across hotels with 240+ devices, home clinic networks, and partner lab environments. Final verification of device fingerprinting accuracy, ledger integrity under extended operation, and compliance report quality.",
    features: [
      "Live validation across hotels with 240+ devices scanned",
      "Partner home network and lab environment testing",
      "Extended ledger integrity under real-world conditions",
      "Device fingerprinting accuracy benchmarking",
      "Compliance report quality review",
    ],
    cta: null,
  },
  {
    id: "cohort",
    status: "upcoming",
    title: "Early Deployment Cohort",
    timing: "Late April 2026",
    badge: "Upcoming",
    body: "30-day free pilot program. Limited seats. Early partners receive founding partner pricing based on device count, locked in for the life of the relationship. No commitment required to start.",
    features: [
      "30-day free pilot under written agreement",
      "Founding partner pricing locked for life",
      "Direct access to Avera during pilot",
      "Full compliance system of record from day one",
    ],
    cta: { label: "Apply for Early Access", href: "/apply" },
  },
  {
    id: "raise",
    status: "upcoming",
    title: "Pre-Seed Raise",
    timing: "Mid Q2 2026",
    badge: "Upcoming",
    body: "Raising to fund v1.5 and v2.0 development and expand deployment capacity. Target: 2 paying MSPs and 3 detailed LoIs as proof package.",
    features: [
      "Funding v1.5 relay and MSP dashboard development",
      "Expanding deployment capacity",
      "Building toward institutional-grade infrastructure",
    ],
    cta: null,
  },
  {
    id: "v1-5",
    status: "upcoming",
    title: "Avera v1.5 + Relay",
    timing: "Mid Q1 2027",
    badge: "Upcoming",
    body: "MSP Dashboard, remote relay, and firewall integration introduced. MSPs gain secure remote visibility into local compliance records. Firewall becomes a native source of truth within Avera. Clinic data remains on-premise.",
    features: [
      "MSP Dashboard for remote compliance visibility",
      "Encrypted relay server — no data at rest",
      "Firewall integration (UniFi, OPNsense, pfSense, MikroTik, Sophos, Fortinet)",
      "Firewall as native source of truth within Avera",
      "Clinic data remains on-premise at all times",
    ],
    cta: null,
  },
  {
    id: "v2",
    status: "upcoming",
    title: "Avera v2.0 + Node",
    timing: "Early Q4 2027",
    badge: "Upcoming",
    body: "Hardware node integration. Dedicated appliance improving device fingerprinting accuracy from 80–85% to 97%+. Enables deep packet inspection and solves MSP remote access at the infrastructure level.",
    features: [
      "Dedicated Avera Node hardware appliance",
      "Device fingerprinting accuracy: 80–85% → 97%+",
      "Deep packet inspection capability",
      "MSP remote access at infrastructure level",
    ],
    cta: null,
  },
];

function statusDotColor(status: StageStatus): string {
  if (status === "completed") return "#4caf79";
  if (status === "active") return "#7D95E0";
  return "rgba(255,255,255,0.2)";
}

function statusTextColor(status: StageStatus): string {
  if (status === "completed") return "rgba(76,175,121,0.7)";
  if (status === "active") return "rgba(125,149,224,0.7)";
  return "rgba(255,255,255,0.3)";
}

function spineTitleColor(stage: Stage, active: boolean): string {
  if (active) return "#fff";
  if (stage.status === "completed") return "rgba(255,255,255,0.8)";
  return "rgba(255,255,255,0.4)";
}

function badgeStyles(status: StageStatus): React.CSSProperties {
  if (status === "completed") {
    return {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 10,
      padding: "4px 10px",
      borderRadius: 4,
      marginBottom: 20,
      background: "rgba(76,175,121,0.1)",
      color: "#4caf79",
      border: "0.5px solid rgba(76,175,121,0.3)",
    };
  }
  if (status === "active") {
    return {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 10,
      padding: "4px 10px",
      borderRadius: 4,
      marginBottom: 20,
      background: "rgba(125,149,224,0.1)",
      color: "#7D95E0",
      border: "0.5px solid rgba(125,149,224,0.3)",
    };
  }
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: 10,
    padding: "4px 10px",
    borderRadius: 4,
    marginBottom: 20,
    background: "rgba(255,255,255,0.04)",
    color: "rgba(255,255,255,0.4)",
    border: "0.5px solid rgba(255,255,255,0.1)",
  };
}

export default function TimelinePage() {
  const [activeId, setActiveId] = useState("v1");
  const activeStage = stages.find((s) => s.id === activeId) ?? stages[0];

  return (
    <div style={{ background: "#08090f", color: "#fff", minHeight: "100vh" }}>
      <Navbar />

      {/* Section 1 — Hero */}
      <section
        style={{
          padding: "96px 40px 64px",
          borderBottom: "0.5px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(125,149,224,0.55)",
            marginBottom: 14,
          }}
        >
          Roadmap
        </div>
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
          Where we are. Where we&apos;re going.
        </h1>
        <p
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.32)",
            lineHeight: 1.7,
            maxWidth: 460,
          }}
        >
          A transparent view of Avera&apos;s progress and what&apos;s coming next.
        </p>
      </section>

      {/* Section 2 — Roadmap */}
      <section
        className="grid grid-cols-1 md:grid-cols-[280px_1fr]"
        style={{
          borderBottom: "0.5px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          className="md:[border-right:0.5px_solid_rgba(255,255,255,0.07)]"
          style={{
          }}
        >
          {stages.map((stage, index) => {
            const active = stage.id === activeId;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveId(stage.id)}
                style={{
                  width: "100%",
                  padding: "24px 24px 24px 32px",
                  borderBottom:
                    index < stages.length - 1
                      ? "0.5px solid rgba(255,255,255,0.05)"
                      : "none",
                  background: active
                    ? "rgba(125,149,224,0.06)"
                    : "transparent",
                  textAlign: "left",
                  cursor: "pointer",
                  position: "relative",
                  transition: "background 0.15s",
                  color: "inherit",
                  borderLeft: "none",
                  borderTop: "none",
                  borderRight: "none",
                }}
              >
                {active && (
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      top: 0,
                      bottom: 0,
                      width: "1.5px",
                      background: "#7D95E0",
                    }}
                  />
                )}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginBottom: 6,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: statusDotColor(stage.status),
                      flexShrink: 0,
                      boxShadow:
                        stage.status === "active"
                          ? "0 0 6px rgba(125,149,224,0.7)"
                          : undefined,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 9,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: statusTextColor(stage.status),
                    }}
                  >
                    {stage.status.charAt(0).toUpperCase() + stage.status.slice(1)}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: spineTitleColor(stage, active),
                  }}
                >
                  {stage.title}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    fontFamily: "monospace",
                    color: "rgba(212,167,145,0.6)",
                    marginTop: 3,
                  }}
                >
                  {stage.timing}
                </div>
              </button>
            );
          })}
        </div>

        <div className="p-6 md:px-[48px] md:py-[40px]">
          <div
            style={{
              fontSize: 10,
              fontFamily: "monospace",
              color: "rgba(212,167,145,0.6)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            {activeStage.timing}
          </div>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "#fff",
              marginBottom: 14,
              lineHeight: 1.2,
            }}
          >
            {activeStage.title}
          </h2>
          <div style={badgeStyles(activeStage.status)}>
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: statusDotColor(activeStage.status),
                flexShrink: 0,
              }}
            />
            {activeStage.badge}
          </div>
          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.38)",
              lineHeight: 1.75,
              maxWidth: 500,
              marginBottom: 24,
            }}
          >
            {activeStage.body}
          </p>
          {activeStage.features.map((feature) => (
            <div
              key={feature}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                fontSize: 12,
                color: "rgba(255,255,255,0.4)",
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  color:
                    activeStage.status === "upcoming"
                      ? "rgba(255,255,255,0.2)"
                      : "#4caf79",
                  fontSize: 10,
                  flexShrink: 0,
                  marginTop: 1,
                }}
              >
                ✓
              </span>
              <span>{feature}</span>
            </div>
          ))}
          {activeStage.cta && (
            <Link
              href={activeStage.cta.href}
              className="hover:bg-[#7D95E0] transition-colors duration-300"
              style={{
                display: "inline-block",
                marginTop: 24,
                background: "#315798",
                color: "#fff",
                fontSize: 12,
                fontWeight: 500,
                padding: "11px 24px",
                borderRadius: 7,
                textDecoration: "none",
              }}
            >
              {activeStage.cta.label}
            </Link>
          )}
        </div>
      </section>

      {/* Section 3 — Screenshots */}
      <section style={{ borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}>
        <div
          style={{
            padding: "40px 40px 28px",
            borderBottom: "0.5px solid rgba(255,255,255,0.05)",
          }}
        >
          <div
            style={{
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(125,149,224,0.55)",
              marginBottom: 10,
            }}
          >
            The product
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 500,
              color: "#fff",
              marginBottom: 6,
            }}
          >
            Built for continuous history. Nothing less.
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.28)" }}>
            A look inside Avera v1.0 running on a live network.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {[
            {
              src: "/app-home.png",
              alt: "Avera Home — System of Record",
              caption: "System of Record. Always current.",
              sub: "Continuous record coverage, ledger integrity verified, policy authority active.",
              borderRight: "0.5px solid rgba(255,255,255,0.06)" as const,
              borderBottom: "0.5px solid rgba(255,255,255,0.06)" as const,
            },
            {
              src: "/app-audit-query.png",
              alt: "Avera Audit Query — Investigations",
              caption: "Audit queries. Structured and forensic.",
              sub: "Every investigation is a structured case file derived from the canonical evidence ledger.",
              borderRight: "none" as const,
              borderBottom: "0.5px solid rgba(255,255,255,0.06)" as const,
            },
            {
              src: "/app-evidence.png",
              alt: "Avera Evidence — Generate Certified Record",
              caption: "Certified records. In seconds.",
              sub: "Generate audit-ready evidence for any historical date. Device inventory, approval timeline, compliance posture.",
              borderRight: "0.5px solid rgba(255,255,255,0.06)" as const,
              borderBottom: "none" as const,
            },
            {
              src: "/app-activity.png",
              alt: "Avera Activity — Security Activity and Environment State",
              caption: "Live activity. Full environment state.",
              sub: "240 security events. 30 visible devices across 6 rooms. Ledger and projections verified.",
              borderRight: "none" as const,
              borderBottom: "none" as const,
            },
          ].map((cell, index) => (
            <div
              className={`p-6 md:px-[32px] md:py-[28px] ${
                index % 2 === 0
                  ? "md:[border-right:0.5px_solid_rgba(255,255,255,0.06)]"
                  : ""
              }`}
              key={cell.src}
              style={{
                borderBottom: cell.borderBottom,
              }}
            >
              <Image
                src={cell.src}
                alt={cell.alt}
                width={900}
                height={562}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 6,
                  border: "0.5px solid rgba(255,255,255,0.08)",
                  marginBottom: 14,
                }}
              />
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.75)",
                  marginBottom: 5,
                }}
              >
                {cell.caption}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.28)",
                  lineHeight: 1.55,
                }}
              >
                {cell.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 — CTA */}
      <section
        style={{
          padding: "72px 40px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 14,
          borderTop: "0.5px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          See it running on your network.
        </div>
        <div
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.28)",
            maxWidth: 400,
            textAlign: "center",
            lineHeight: 1.65,
          }}
        >
          Avera v1.0 is production-ready. 30-day free pilot. No commitment
          required.
        </div>
        <Link
          href="/demo"
          className="hover:bg-[#7D95E0] transition-colors duration-300"
          style={{
            display: "inline-block",
            marginTop: 8,
            background: "#315798",
            color: "#fff",
            fontSize: 13,
            fontWeight: 500,
            padding: "13px 36px",
            borderRadius: 8,
            textDecoration: "none",
          }}
        >
          Request a Demo
        </Link>
        <div
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.18)",
            marginTop: 4,
          }}
        >
          Zero cloud storage · Local-first · Audit-ready in 60 seconds
        </div>
      </section>

      <Footer />
    </div>
  );
}
