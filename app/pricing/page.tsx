import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const eyebrow: React.CSSProperties = {
  fontSize: "10px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(125,149,224,0.55)",
  marginBottom: 10,
};

const sectionTitle: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: 500,
  color: "#fff",
  marginBottom: 6,
};

const sectionBorder: React.CSSProperties = {
  borderBottom: "0.5px solid rgba(255,255,255,0.06)",
};

const tierFeatures = [
  "Persistent device identity",
  "Continuous monitoring",
  "Immutable event timeline",
  "Explainable classification",
  "Local-first operation",
  "Approval workflows",
];

export default function PricingPage() {
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
        <div style={eyebrow}>Pricing</div>
        <h1
          style={{
            fontSize: "44px",
            fontWeight: 500,
            color: "#fff",
            lineHeight: 1.15,
            letterSpacing: "-0.015em",
            marginBottom: "10px",
          }}
        >
          Capacity-based. No limitations.
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.32)",
            lineHeight: 1.7,
            maxWidth: "460px",
          }}
        >
          Every tier includes the full Avera compliance system of record. Pricing
          scales with the network you&apos;re protecting, not the features you can
          access.
        </p>
      </section>

      {/* Section 2 — Pilot Process */}
      <section style={sectionBorder}>
        <div
          style={{
            padding: "40px 40px 28px",
            borderBottom: "0.5px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={eyebrow}>How it works</div>
          <div style={sectionTitle}>The pilot process.</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {[
            {
              num: "01",
              title: "Free 30-Day Pilot",
              body: "Deploy Avera on your network at no cost under a written pilot agreement. No commitment required.",
            },
            {
              num: "02",
              title: "Review & Feedback",
              body: "We work with you through your first compliance cycle. You validate the evidence, we refine the implementation.",
            },
            {
              num: "03",
              title: "Annual Subscription",
              body: "If it works for you, resubscribe annually at founding partner pricing based on your device count.",
            },
          ].map((step, i) => (
            <div
              key={step.num}
              style={{
                padding: "32px 36px",
                borderRight:
                  i < 2 ? "0.5px solid rgba(255,255,255,0.06)" : "none",
                position: "relative",
              }}
            >
              {i < 2 && (
                <span
                  style={{
                    position: "absolute",
                    right: -8,
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "12px",
                    color: "rgba(125,149,224,0.3)",
                    zIndex: 2,
                  }}
                >
                  →
                </span>
              )}
              <div
                style={{
                  fontSize: "10px",
                  fontFamily: "monospace",
                  color: "rgba(212,167,145,0.6)",
                  marginBottom: "14px",
                  letterSpacing: "0.06em",
                }}
              >
                {step.num}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#fff",
                  marginBottom: "8px",
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.3)",
                  lineHeight: 1.65,
                }}
              >
                {step.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 — Tiers */}
      <section style={sectionBorder}>
        <div
          style={{
            padding: "40px 40px 28px",
            borderBottom: "0.5px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={eyebrow}>Tier structure</div>
          <div style={sectionTitle}>Choose your capacity.</div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.28)" }}>
            All tiers include identical capabilities. No feature gating. No
            comparison chart.
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {[
            {
              label: "Tier I",
              name: "Avera One",
              range: "1 – 150 devices",
            },
            {
              label: "Tier II",
              name: "Avera Plus",
              range: "151 – 500 devices",
            },
            {
              label: "Tier III",
              name: "Avera Pro",
              range: "501 – 1,000 devices",
            },
          ].map((tier, i) => (
            <div
              key={tier.label}
              style={{
                padding: "32px 36px 36px",
                borderRight:
                  i < 2 ? "0.5px solid rgba(255,255,255,0.06)" : "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={eyebrow}>{tier.label}</div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 500,
                  color: "#fff",
                  marginBottom: "6px",
                }}
              >
                {tier.name}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: "24px",
                }}
              >
                {tier.range}
              </div>
              <div
                style={{
                  height: "0.5px",
                  background: "rgba(255,255,255,0.06)",
                  marginBottom: "20px",
                }}
              />
              <Link
                href="/apply"
                className="hover:bg-[rgba(125,149,224,0.08)] transition-colors duration-200"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "11px",
                  border: "0.5px solid rgba(125,149,224,0.3)",
                  borderRadius: 7,
                  background: "transparent",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "12px",
                  textAlign: "center",
                  textDecoration: "none",
                  marginTop: "auto",
                }}
              >
                Request Access
              </Link>
            </div>
          ))}
        </div>
        <div
          style={{
            padding: "28px 40px 32px",
            borderTop: "0.5px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            style={{
              ...eyebrow,
              textAlign: "center",
              marginBottom: 18,
            }}
          >
            Every tier includes
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
              gap: "12px 16px",
              alignItems: "start",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            {tierFeatures.map((f) => (
              <div
                key={f}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  gap: 6,
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.42)",
                  lineHeight: 1.45,
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    color: "#4caf79",
                    fontSize: "10px",
                    flexShrink: 0,
                    marginTop: "1px",
                  }}
                >
                  ✓
                </span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            padding: "24px 40px",
            borderTop: "0.5px solid rgba(255,255,255,0.05)",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.25)",
              lineHeight: 1.7,
              textAlign: "center",
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            All tiers include the full Avera compliance system of record,
            including persistent device identity, continuous monitoring, immutable
            event timelines, explainable classification, and local-first operation.
            No feature gating. No comparison chart.
          </p>
        </div>
      </section>

      {/* Section 4 — Founding Cohort */}
      <section
        style={{
          padding: "64px 40px",
          borderBottom: "0.5px solid rgba(255,255,255,0.06)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "#0d1018",
            border: "0.5px solid rgba(212,167,145,0.25)",
            borderRadius: 12,
            padding: "40px 48px",
            maxWidth: 600,
            width: "100%",
            textAlign: "center",
          }}
        >
          <div style={eyebrow}>Early access</div>
          <div
            style={{
              fontSize: "22px",
              fontWeight: 500,
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            <span style={{ color: "#D4A791" }}>Founding</span> Deployment Cohort
          </div>
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.7,
              marginBottom: "20px",
            }}
          >
            Pilot deployments are free for 30 days under a written agreement.
            Organizations that continue are offered founding partner pricing,
            determined by device count and locked in for the life of the
            relationship.
          </p>
          <div
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.28)",
              marginBottom: "8px",
            }}
          >
            To confirm eligibility and begin evaluation:
          </div>
          <a
            href="mailto:jmylsg@averasystems.com"
            style={{
              fontSize: "13px",
              fontFamily: "monospace",
              color: "rgba(125,149,224,0.8)",
              textDecoration: "none",
            }}
          >
            jmylsg@averasystems.com
          </a>
        </div>
      </section>

      {/* Section 5 — Closing Line */}
      <section style={{ padding: "48px 40px", textAlign: "center" }}>
        <p
          style={{
            fontSize: "13px",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          Compliance infrastructure should scale with the network it protects.
        </p>
      </section>

      <Footer />
    </div>
  );
}
