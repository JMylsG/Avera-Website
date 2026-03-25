import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LedgerScene3D from "../components/LedgerScene3D";

const GUARANTEE_CARDS = [
  {
    title: "Persistent Device Identity",
    body: "Device identity is maintained across attribute changes. When a device changes interfaces, is reimaged, or receives a new IP address, Avera correlates available signals to preserve continuity. The compliance record does not reset when device attributes change.",
  },
  {
    title: "Event-Sourced Timeline",
    body: "Every device observation, state change, and authorization decision is recorded as an immutable event. The timeline is append-only. Nothing is overwritten. Historical queries return the state of the network at any prior point in time.",
  },
  {
    title: "Continuous Monitoring",
    body: "Avera does not operate on a schedule. Device presence is observed continuously. New devices are detected at connection, not at the next scheduled scan. The evidentiary record reflects the network as it exists, not as it existed at the last interval.",
  },
  {
    title: "Explainable Classification",
    body: "Every device identification decision is documented in human-readable form. Confidence levels, signal sources, and alternative interpretations are preserved alongside the classification. Auditors can review the reasoning, not just the conclusion.",
  },
  {
    title: "Local-First Operation",
    body: "Avera operates entirely within the customer network. No compliance data is transmitted externally. No cloud storage exists for core functions. The system remains fully operational in air-gapped environments.",
  },
  {
    title: "Integrated Approval Workflow",
    body: "Device presence and device authorization are two different records. Every approval decision is logged as an immutable event, separate from technical observation. Auditors see not just what was on the network, but what was sanctioned to be there.",
  },
  {
    title: "Authority by Design",
    body: "The clinic holds the Authority role. Not the vendor. Not the IT team. Access for on-site staff and remote MSPs requires the clinic's authorization. Both can be revoked instantly from the Authority dashboard. No calls. No tickets.",
  },
  {
    title: "Human-Anchored Intelligence",
    body: "Avera observes, recognizes patterns, and surfaces suggestions. Every approval is logged as a human action. When the system is confident enough to suggest a standing rule, it asks. You decide. Your authority creates it.",
  },
];

export default function ProductPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#08090f" }}>
      <style>{`
        @keyframes product-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(230,162,60,0.5); }
          50%       { opacity: 0.7; box-shadow: 0 0 0 3px rgba(230,162,60,0); }
        }
        .product-pending-dot {
          animation: product-pulse 1.8s ease-in-out infinite;
        }
      `}</style>
      <Navbar />

      {/* Section 1 — Hero */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          minHeight: "88vh",
          background: "#08090f",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
        }}
      >
        <div className="absolute inset-0 hidden md:block">
          <LedgerScene3D />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,9,15,0.55) 0%, rgba(8,9,15,0.15) 35%, rgba(8,9,15,0.15) 60%, rgba(8,9,15,0.90) 100%), linear-gradient(to right, rgba(8,9,15,0.0) 0%, transparent 40%, transparent 75%, rgba(8,9,15,0.5) 100%)",
          }}
        />
        <div
          className="relative z-10 max-w-[640px] px-6 pb-14 md:px-[64px] md:pb-[72px]"
        >
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(125,149,224,0.65)",
              marginBottom: "16px",
            }}
          >
            Product
          </p>
          <h1
            style={{
              fontSize: "52px",
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              marginBottom: "20px",
            }}
          >
            The Compliance System of Record.
          </h1>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.42)",
              maxWidth: "480px",
            }}
          >
            Avera is a software product on the market today whose entire identity
            is a system of record; where history is the core product, not a
            byproduct of security, operations, or compliance workflow.
          </p>
        </div>
      </section>

      {/* Section 2 — Three primitives */}
      <section
        className="grid grid-cols-1 md:grid-cols-3 md:[&>div:not(:last-child)]:[border-right:0.5px_solid_rgba(255,255,255,0.07)]"
        style={{
          width: "100%",
          background: "#08090f",
          borderTop: "0.5px solid rgba(255,255,255,0.07)",
          borderBottom: "0.5px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Cell 1 */}
        <div className="p-6 md:px-[32px] md:py-[36px]">
          <div
            style={{
              height: "116px",
              background: "#0c0e16",
              border: "0.5px solid rgba(255,255,255,0.07)",
              borderRadius: "6px",
              marginBottom: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "8%",
                  right: "8%",
                  height: "1px",
                  background: "rgba(125,149,224,0.25)",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  width: "84%",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: i === 3 ? "#D4A791" : "#7D95E0",
                        boxShadow:
                          i === 3
                            ? undefined
                            : "0 0 8px rgba(125,149,224,0.45)",
                        flexShrink: 0,
                      }}
                    />
                    {i === 3 && (
                      <span
                        style={{
                          fontSize: "8px",
                          fontFamily: "ui-monospace, monospace",
                          color: "rgba(255,255,255,0.35)",
                          marginTop: "4px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        new device
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(125,149,224,0.55)",
              marginBottom: "8px",
            }}
          >
            Identity persistence
          </p>
          <h2
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: "#ffffff",
              marginBottom: "6px",
            }}
          >
            Device stays the same device.
          </h2>
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.32)",
              lineHeight: 1.7,
            }}
          >
            MAC changes. Hostname changes. Interface swaps. The record doesn&apos;t
            reset.
          </p>
        </div>

        {/* Cell 2 */}
        <div className="p-6 md:px-[32px] md:py-[36px]">
          <div
            style={{
              height: "116px",
              background: "#0c0e16",
              border: "0.5px solid rgba(255,255,255,0.07)",
              borderRadius: "6px",
              marginBottom: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  background: "#111520",
                  border: "0.5px solid rgba(125,149,224,0.22)",
                  borderRadius: "3px",
                  padding: "5px 9px",
                  fontSize: "8px",
                  fontFamily: "ui-monospace, monospace",
                  color: "rgba(125,149,224,0.75)",
                }}
              >
                a3f…091
              </span>
              <span
                style={{
                  color: "rgba(255,255,255,0.18)",
                  fontSize: "10px",
                  margin: "0 4px",
                }}
              >
                →
              </span>
              <span
                style={{
                  background: "#111520",
                  border: "0.5px solid rgba(125,149,224,0.22)",
                  borderRadius: "3px",
                  padding: "5px 9px",
                  fontSize: "8px",
                  fontFamily: "ui-monospace, monospace",
                  color: "rgba(125,149,224,0.75)",
                }}
              >
                7c2…44d
              </span>
              <span
                style={{
                  color: "rgba(255,255,255,0.18)",
                  fontSize: "10px",
                  margin: "0 4px",
                }}
              >
                →
              </span>
              <span
                style={{
                  background: "#111520",
                  border: "0.5px solid rgba(212,167,145,0.3)",
                  borderRadius: "3px",
                  padding: "5px 9px",
                  fontSize: "8px",
                  fontFamily: "ui-monospace, monospace",
                  color: "rgba(212,167,145,0.75)",
                }}
              >
                b9e…f12
              </span>
            </div>
          </div>
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(125,149,224,0.55)",
              marginBottom: "8px",
            }}
          >
            Append-only ledger
          </p>
          <h2
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: "#ffffff",
              marginBottom: "6px",
            }}
          >
            Nothing is overwritten.
          </h2>
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.32)",
              lineHeight: 1.7,
            }}
          >
            Every observation, state change, and approval is an immutable event in
            the chain.
          </p>
        </div>

        {/* Cell 3 */}
        <div className="p-6 md:px-[32px] md:py-[36px]">
          <div
            style={{
              height: "116px",
              background: "#0c0e16",
              border: "0.5px solid rgba(255,255,255,0.07)",
              borderRadius: "6px",
              marginBottom: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0 12px",
              }}
            >
              <div
                style={{
                  fontSize: "9px",
                  fontFamily: "ui-monospace, monospace",
                  padding: "4px 9px",
                  borderRadius: "3px",
                  background: "rgba(125,149,224,0.08)",
                  color: "rgba(125,149,224,0.85)",
                  borderLeft: "1.5px solid rgba(125,149,224,0.5)",
                  marginBottom: "4px",
                  width: "85%",
                }}
              >
                query: devices on Mar 15
              </div>
              <div
                style={{
                  fontSize: "8px",
                  fontFamily: "ui-monospace, monospace",
                  color: "rgba(255,255,255,0.18)",
                  padding: "0 9px",
                  marginBottom: "4px",
                }}
              >
                ← 847ms
              </div>
              <div
                style={{
                  fontSize: "9px",
                  fontFamily: "ui-monospace, monospace",
                  padding: "4px 9px",
                  borderRadius: "3px",
                  background: "rgba(212,167,145,0.07)",
                  color: "rgba(212,167,145,0.8)",
                  borderLeft: "1.5px solid rgba(212,167,145,0.4)",
                  width: "85%",
                }}
              >
                14 devices · 2 pending · 0 gaps
              </div>
            </div>
          </div>
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(125,149,224,0.55)",
              marginBottom: "8px",
            }}
          >
            Instant query
          </p>
          <h2
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: "#ffffff",
              marginBottom: "6px",
            }}
          >
            Any date. In seconds.
          </h2>
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.32)",
              lineHeight: 1.7,
            }}
          >
            Auditors ask. The record answers. No reconstruction. No spreadsheets.
          </p>
        </div>
      </section>

      {/* System guarantees */}
      <div
        style={{
          borderBottom: "0.5px solid rgba(255,255,255,0.07)",
          background: "#08090f",
        }}
      >
        <div style={{ padding: "32px 64px 20px" }}>
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(125,149,224,0.55)",
            }}
          >
            System guarantees
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-4"
          style={{
            borderTop: "0.5px solid rgba(255,255,255,0.06)",
          }}
        >
          {GUARANTEE_CARDS.map((card, index) => (
            <div
              className={`p-6 md:px-[28px] md:py-[24px] ${
                index % 4 !== 3
                  ? "md:[border-right:0.5px_solid_rgba(255,255,255,0.06)]"
                  : ""
              }`}
              key={card.title}
              style={{
                borderBottom:
                  index < 4
                    ? "0.5px solid rgba(255,255,255,0.06)"
                    : undefined,
              }}
            >
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.85)",
                  marginBottom: "8px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.28)",
                  lineHeight: 1.65,
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 — UI panels header */}
      <section
        style={{
          padding: "40px 64px 24px",
          borderBottom: "0.5px solid rgba(255,255,255,0.06)",
          background: "#08090f",
        }}
      >
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(125,149,224,0.55)",
            marginBottom: "10px",
          }}
        >
          The product
        </p>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: 500,
            color: "#ffffff",
            marginBottom: "6px",
          }}
        >
          Built on continuous history. Nothing less.
        </h2>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.28)" }}>
          Each screen is one chapter of the record.
        </p>
      </section>

      {/* Section 3 — 2x2 panel grid */}
      <section
        className="grid grid-cols-1 md:grid-cols-2"
        style={{
          background: "#08090f",
          borderBottom: "0.5px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Panel 1 — Devices */}
        <div
          className="p-6 md:px-[32px] md:py-[28px] md:[border-right:0.5px_solid_rgba(255,255,255,0.07)]"
          style={{
            borderBottom: "0.5px solid rgba(255,255,255,0.07)",
          }}
        >
          <div
            style={{
              background: "#0c0e16",
              border: "0.5px solid rgba(255,255,255,0.08)",
              borderRadius: "7px",
              overflow: "hidden",
              marginBottom: "18px",
            }}
          >
            <div
              style={{
                background: "#101320",
                padding: "7px 10px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                borderBottom: "0.5px solid rgba(255,255,255,0.05)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(255,95,87,0.45)",
                }}
              />
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(255,189,46,0.45)",
                }}
              />
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(40,201,64,0.45)",
                }}
              />
              <span
                style={{
                  fontSize: "9px",
                  color: "rgba(255,255,255,0.2)",
                  marginLeft: "6px",
                  fontFamily: "ui-monospace, monospace",
                }}
              >
                Avera · Devices
              </span>
            </div>
            <div style={{ padding: "12px" }}>
              {[
                {
                  dot: "approved",
                  name: "dr-smith-laptop",
                  tag: "Approved",
                  tagStyle: {
                    color: "rgba(76,175,121,0.9)",
                    background: "rgba(76,175,121,0.1)",
                  },
                },
                {
                  dot: "pending",
                  name: "00:1A:2B:3C:4D:5E",
                  tag: "Pending",
                  tagStyle: {
                    color: "rgba(230,162,60,0.9)",
                    background: "rgba(230,162,60,0.1)",
                  },
                },
                {
                  dot: "approved",
                  name: "reception-pc-01",
                  tag: "Approved",
                  tagStyle: {
                    color: "rgba(76,175,121,0.9)",
                    background: "rgba(76,175,121,0.1)",
                  },
                },
                {
                  dot: "unknown",
                  name: "192.168.1.47",
                  tag: "Unknown",
                  tagStyle: {
                    color: "rgba(255,255,255,0.22)",
                    background: "rgba(255,255,255,0.05)",
                  },
                },
              ].map((row, idx) => (
                <div
                  key={row.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "5px 0",
                    borderBottom:
                      idx < 3
                        ? "0.5px solid rgba(255,255,255,0.04)"
                        : "none",
                    fontSize: "9px",
                  }}
                >
                  <span
                    className={
                      row.dot === "pending" ? "product-pending-dot" : undefined
                    }
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      flexShrink: 0,
                      background:
                        row.dot === "approved"
                          ? "#4caf79"
                          : row.dot === "pending"
                            ? "#e6a23c"
                            : "rgba(255,255,255,0.2)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "ui-monospace, monospace",
                      color: "rgba(255,255,255,0.6)",
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    {row.name}
                  </span>
                  <span
                    style={{
                      fontSize: "7px",
                      padding: "1px 5px",
                      borderRadius: "2px",
                      ...row.tagStyle,
                    }}
                  >
                    {row.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.8)",
              marginBottom: "5px",
            }}
          >
            Every device. Continuous.
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.28)",
              lineHeight: 1.65,
            }}
          >
            New devices trigger approval workflows the moment they appear. Not at
            the next scan.
          </p>
        </div>

        {/* Panel 2 — Evidence */}
        <div
          className="p-6 md:px-[32px] md:py-[28px]"
          style={{
            borderBottom: "0.5px solid rgba(255,255,255,0.07)",
          }}
        >
          <div
            style={{
              background: "#0c0e16",
              border: "0.5px solid rgba(255,255,255,0.08)",
              borderRadius: "7px",
              overflow: "hidden",
              marginBottom: "18px",
            }}
          >
            <div
              style={{
                background: "#101320",
                padding: "7px 10px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                borderBottom: "0.5px solid rgba(255,255,255,0.05)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(255,95,87,0.45)",
                }}
              />
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(255,189,46,0.45)",
                }}
              />
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(40,201,64,0.45)",
                }}
              />
              <span
                style={{
                  fontSize: "9px",
                  color: "rgba(255,255,255,0.2)",
                  marginLeft: "6px",
                  fontFamily: "ui-monospace, monospace",
                }}
              >
                Avera · Evidence
              </span>
            </div>
            <div style={{ padding: "12px" }}>
              {[
                {
                  hash: "a3f…091",
                  hashBright: false,
                  text: "Device observed on clinical subnet",
                  seq: "#207",
                },
                {
                  hash: "7c2…44d",
                  hashBright: false,
                  text: "Authorization granted · admin@clinic",
                  seq: "#208",
                },
                {
                  hash: "b9e…f12",
                  hashBright: true,
                  text: "Identity correlated across interface change",
                  seq: "#209",
                },
                {
                  hash: "2d1…c88",
                  hashBright: false,
                  text: "Compliance record generated · HIPAA",
                  seq: "#210",
                },
              ].map((row, idx) => (
                <div
                  key={row.seq}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    padding: "4px 0",
                    borderBottom:
                      idx < 3
                        ? "0.5px solid rgba(255,255,255,0.04)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "8px",
                      fontFamily: "ui-monospace, monospace",
                      color: row.hashBright
                        ? "rgba(212,167,145,0.75)"
                        : "rgba(212,167,145,0.5)",
                      width: "48px",
                      flexShrink: 0,
                    }}
                  >
                    {row.hash}
                  </span>
                  <span
                    style={{
                      fontSize: "9px",
                      color: "rgba(255,255,255,0.55)",
                      flex: 1,
                    }}
                  >
                    {row.text}
                  </span>
                  <span
                    style={{
                      fontSize: "8px",
                      fontFamily: "ui-monospace, monospace",
                      color: "rgba(255,255,255,0.18)",
                    }}
                  >
                    {row.seq}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.8)",
              marginBottom: "5px",
            }}
          >
            The ledger. Immutable.
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.28)",
              lineHeight: 1.65,
            }}
          >
            Every event hash-chained. Nothing overwritten. The record exists before
            the auditor asks.
          </p>
        </div>

        {/* Panel 3 — Audit Query */}
        <div
          className="p-6 md:px-[32px] md:py-[28px] md:[border-right:0.5px_solid_rgba(255,255,255,0.07)]"
        >
          <div
            style={{
              background: "#0c0e16",
              border: "0.5px solid rgba(255,255,255,0.08)",
              borderRadius: "7px",
              overflow: "hidden",
              marginBottom: "18px",
            }}
          >
            <div
              style={{
                background: "#101320",
                padding: "7px 10px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                borderBottom: "0.5px solid rgba(255,255,255,0.05)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(255,95,87,0.45)",
                }}
              />
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(255,189,46,0.45)",
                }}
              />
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(40,201,64,0.45)",
                }}
              />
              <span
                style={{
                  fontSize: "9px",
                  color: "rgba(255,255,255,0.2)",
                  marginLeft: "6px",
                  fontFamily: "ui-monospace, monospace",
                }}
              >
                Avera · Audit Query
              </span>
            </div>
            <div style={{ padding: "14px 12px" }}>
              <div
                style={{
                  fontSize: "8px",
                  color: "rgba(255,255,255,0.2)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: "ui-monospace, monospace",
                  marginBottom: "8px",
                }}
              >
                Audit Query
              </div>
              <div
                style={{
                  fontSize: "10px",
                  fontFamily: "ui-monospace, monospace",
                  color: "rgba(125,149,224,0.85)",
                  background: "rgba(125,149,224,0.07)",
                  borderLeft: "1.5px solid rgba(125,149,224,0.5)",
                  padding: "5px 9px",
                  borderRadius: "3px",
                  marginBottom: "6px",
                }}
              >
                What devices were on the network March 15?
              </div>
              <div
                style={{
                  fontSize: "10px",
                  fontFamily: "ui-monospace, monospace",
                  color: "rgba(212,167,145,0.8)",
                  background: "rgba(212,167,145,0.07)",
                  borderLeft: "1.5px solid rgba(212,167,145,0.4)",
                  padding: "5px 9px",
                  borderRadius: "3px",
                  marginBottom: "6px",
                }}
              >
                14 devices · 12 approved · 2 pending · 0 gaps
              </div>
              <div
                style={{
                  fontSize: "8px",
                  color: "rgba(255,255,255,0.18)",
                  fontFamily: "ui-monospace, monospace",
                  marginTop: "5px",
                }}
              >
                returned in 847ms · no reconstruction required
              </div>
            </div>
          </div>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.8)",
              marginBottom: "5px",
            }}
          >
            Any date. Under 60 seconds.
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.28)",
              lineHeight: 1.65,
            }}
          >
            The auditor asks. The record answers directly. Days of reconstruction
            compressed to a query.
          </p>
        </div>

        {/* Panel 4 — Compliance */}
        <div className="p-6 md:px-[32px] md:py-[28px]">
          <div
            style={{
              background: "#0c0e16",
              border: "0.5px solid rgba(255,255,255,0.08)",
              borderRadius: "7px",
              overflow: "hidden",
              marginBottom: "18px",
            }}
          >
            <div
              style={{
                background: "#101320",
                padding: "7px 10px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                borderBottom: "0.5px solid rgba(255,255,255,0.05)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(255,95,87,0.45)",
                }}
              />
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(255,189,46,0.45)",
                }}
              />
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(40,201,64,0.45)",
                }}
              />
              <span
                style={{
                  fontSize: "9px",
                  color: "rgba(255,255,255,0.2)",
                  marginLeft: "6px",
                  fontFamily: "ui-monospace, monospace",
                }}
              >
                Avera · Compliance
              </span>
            </div>
            <div style={{ padding: "12px" }}>
              <div
                style={{
                  fontSize: "8px",
                  color: "rgba(255,255,255,0.2)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "6px",
                }}
              >
                Compliance Posture
              </div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#4caf79",
                }}
              >
                Level 5
              </div>
              <div
                style={{
                  fontSize: "8px",
                  color: "rgba(255,255,255,0.28)",
                  marginTop: "2px",
                  marginBottom: "8px",
                }}
              >
                Continuous & Verified
              </div>
              <div
                style={{
                  height: "3px",
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: "2px",
                  marginBottom: "10px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "92%",
                    height: "100%",
                    background: "#4caf79",
                    borderRadius: "2px",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "6px",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    background: "#111520",
                    borderRadius: "4px",
                    padding: "5px 8px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "8px",
                      color: "rgba(255,255,255,0.22)",
                    }}
                  >
                    Timeline Gap
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "#4caf79",
                    }}
                  >
                    No gaps
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    background: "#111520",
                    borderRadius: "4px",
                    padding: "5px 8px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "8px",
                      color: "rgba(255,255,255,0.22)",
                    }}
                  >
                    Ledger
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "#4caf79",
                    }}
                  >
                    Operational
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    background: "#111520",
                    borderRadius: "4px",
                    padding: "5px 8px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "8px",
                      color: "rgba(255,255,255,0.22)",
                    }}
                  >
                    Policy Pack
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "rgba(255,255,255,0.65)",
                    }}
                  >
                    HIPAA v2024.1
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.8)",
              marginBottom: "5px",
            }}
          >
            Continuous. Verified. Documented.
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.28)",
              lineHeight: 1.65,
            }}
          >
            Not reconstructed at audit time. Maintained in real time between audits.
          </p>
        </div>
      </section>

      {/* Section 4 — CTA */}
      <section
        className="flex flex-col items-center text-center"
        style={{
          background: "#08090f",
          padding: "72px 64px",
          gap: "14px",
          borderTop: "0.5px solid rgba(255,255,255,0.06)",
        }}
      >
        <h2
          style={{
            fontSize: "22px",
            fontWeight: 500,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Compliance becomes infrastructure.
        </h2>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.28)" }}>
          Not periodic reconstruction.
        </p>
        <Link
          href="/demo"
          className="inline-block transition-colors duration-300 hover:bg-[#7D95E0]"
          style={{
            marginTop: "10px",
            background: "#315798",
            color: "#fff",
            fontSize: "13px",
            fontWeight: 500,
            padding: "14px 36px",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Request a Demo
        </Link>
        <p
          style={{
            fontSize: "11px",
            color: "rgba(255,255,255,0.18)",
            marginTop: "6px",
          }}
        >
          Zero cloud storage · Local-first · Audit-ready in 60 seconds
        </p>
      </section>

      <Footer />
    </div>
  );
}
