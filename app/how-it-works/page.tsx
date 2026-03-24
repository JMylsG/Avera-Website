import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const steps = [
  {
    num: "Step 01",
    title: "Install Avera",
    body: "Deploy the desktop app on your network in minutes. No agents required on individual devices. No cloud configuration. No dependencies outside your local network once deployed.",
    details: [
      "macOS and Windows supported",
      "No agents on individual devices",
      "No internet connection required to run. Fully air-gap capable after install.",
      "Initial discovery completes in approximately one minute",
    ],
  },
  {
    num: "Step 02",
    title: "Avera Discovers Your Network",
    body: "Avera immediately begins passive discovery. Every device is identified using multi-layered fingerprinting. MAC vendor analysis, hostname patterns, observed services, and behavioral signals are all correlated into stable device identities.",
    details: [
      "ARP, mDNS, SNMP, and HTTP probe. Standard protocols your network already speaks.",
      "Identity persists across IP changes, hostname changes, and interface swaps",
      "Every classification includes human-readable reasoning and confidence levels",
      "No modification to device state during discovery",
    ],
  },
  {
    num: "Step 03",
    title: "Review and Approve Devices",
    body: "New devices trigger an approval workflow you control. Every authorization decision is recorded as an immutable event in the compliance ledger, separate from the technical observation. Auditors see not just what was on the network but what was sanctioned to be there.",
    details: [
      "Approval workflow triggered on new device detection",
      "Every decision logged as a human action",
      "Technical observation and authorization are two separate records",
      "The clinic holds the Authority role. Not the vendor. Not the IT team.",
    ],
  },
  {
    num: "Step 04",
    title: "Evidence Builds Automatically",
    body: "Every device observation, state change, and approval decision is logged continuously as an immutable event in the SHA-256 hash-chained ledger. No scheduled scans. No manual exports. The record builds itself.",
    details: [
      "Append-only event ledger. Nothing is overwritten.",
      "SHA-256 hash-chained. Tamper-evident by design.",
      "Chain integrity verified at startup and on demand",
      "Full historical timeline queryable at any prior point in time",
    ],
  },
  {
    num: "Step 05",
    title: "Generate Audit-Ready Records",
    body: "When auditors ask, query any historical window and export certified records in seconds. Device inventory, approval timeline, compliance posture, continuous monitoring proof. The work is already done before the question is asked.",
    details: [
      "Any historical date range returned in under 60 seconds",
      "Device Inventory, Approval Timeline, Compliance Posture, Monitoring Proof",
      "No reconstruction. No spreadsheets. No staff interviews.",
      "HIPAA §164.308 and §164.312 aligned documentation",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div style={{ background: "#08090f", color: "#fff", minHeight: "100vh" }}>
      <Navbar />

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
          How it works
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
          From install to audit-ready. In under an hour.
        </h1>
        <p
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.32)",
            lineHeight: 1.7,
            maxWidth: 460,
          }}
        >
          No agents. No cloud setup. No scheduled scans. Avera starts building the
          compliance record the moment it is deployed.
        </p>
      </section>

      <section style={{ borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}>
        {steps.map((step, index) => (
          <div
            key={step.num}
            style={{
              display: "grid",
              gridTemplateColumns: "280px 1fr",
              borderBottom:
                index < steps.length - 1
                  ? "0.5px solid rgba(255,255,255,0.06)"
                  : "none",
            }}
          >
            <div
              style={{
                padding: "40px 32px 40px 40px",
                borderRight: "0.5px solid rgba(255,255,255,0.07)",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontFamily: "monospace",
                  color: "rgba(212,167,145,0.6)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {step.num}
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  color: "#fff",
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </div>
            </div>
            <div style={{ padding: "40px 48px" }}>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.38)",
                  lineHeight: 1.75,
                  maxWidth: 520,
                  marginBottom: 20,
                }}
              >
                {step.body}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 7,
                }}
              >
                {step.details.map((detail) => (
                  <div
                    key={detail}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontSize: 12,
                      color: "rgba(255,255,255,0.35)",
                    }}
                  >
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "rgba(125,149,224,0.5)",
                        flexShrink: 0,
                        marginTop: 5,
                      }}
                    />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

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
          Ready to see it running?
        </div>
        <div
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.28)",
            maxWidth: 400,
            lineHeight: 1.65,
            textAlign: "center",
          }}
        >
          Avera v1.0 is production-ready. 30-day free pilot. No commitment
          required.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginTop: 8,
          }}
        >
          <Link
            href="/demo"
            className="hover:bg-[#7D95E0] transition-colors duration-300"
            style={{
              display: "inline-block",
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
          <Link
            href="/apply"
            className="hover:text-white transition-colors duration-300"
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
              textDecoration: "none",
            }}
          >
            Apply for Early Access
          </Link>
        </div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.18)" }}>
          Zero cloud storage · Local-first · Audit-ready in 60 seconds
        </div>
      </section>

      <Footer />
    </div>
  );
}
