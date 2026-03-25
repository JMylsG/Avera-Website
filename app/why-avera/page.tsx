"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FigPanel from "../components/FigPanel";

const STALE_AGES = ["47 days ago", "52 days ago", "61 days ago", "71 days ago"];
const UPLOAD_SIZES = ["2.4 MB", "3.1 MB", "4.0 MB", "2.8 MB"];
const STATUS_CYCLE = ["filling...", "Jan 4", "confirmed"];

const ENTRY_POOL = [
  { text: "imaging-unit-b2 · approved",  time: "just now", dot: "#4caf79" },
  { text: "nurse-station-3b · observed", time: "just now", dot: "#4caf79" },
  { text: "192.168.1.47 · flagged",      time: "just now", dot: "#e25555" },
  { text: "ehr-terminal-01 · approved",  time: "just now", dot: "#4caf79" },
  { text: "admin-laptop-07 · verified",  time: "just now", dot: "#4caf79" },
  { text: "00:1A:2B · approved",         time: "just now", dot: "#4caf79" },
];

const QUERIES = [
  { q: "What devices were on the network Jan 1–Mar 31?", t: "← 1.1s",  r: "28 devices · 26 approved · 2 pending · 0 gaps" },
  { q: "Was 00:1A:2B authorized on March 15?",           t: "← 0.4s",  r: "Not authorized · first seen Mar 12 · pending" },
  { q: "What changed between Q4 and Q1?",                t: "← 2.2s",  r: "6 new devices · 2 removed · 1 flag resolved" },
];

const sectionHeaderWrapFirst: React.CSSProperties = {
  padding: "96px 40px 32px",
  borderBottom: "0.5px solid rgba(255,255,255,0.06)",
};
const sectionHeaderWrap: React.CSSProperties = {
  padding: "48px 40px 32px",
  borderBottom: "0.5px solid rgba(255,255,255,0.06)",
};
const eyebrow: React.CSSProperties = {
  fontSize: "10px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(125,149,224,0.55)",
  marginBottom: "10px",
};
const sectionTitle: React.CSSProperties = {
  fontSize: "28px",
  fontWeight: 500,
  color: "#fff",
  marginBottom: "8px",
  lineHeight: 1.2,
};
const sectionSub: React.CSSProperties = {
  fontSize: "13px",
  color: "rgba(255,255,255,0.32)",
  maxWidth: "520px",
  lineHeight: 1.65,
};
const figRow: React.CSSProperties = {
  borderBottom: "0.5px solid rgba(255,255,255,0.07)",
};
const figRowClass = "grid grid-cols-1 md:grid-cols-2";

export default function WhyAveraPage() {
  /* ── Section 1 state ── */
  const staleIdxRef = useRef(0);
  const [staleAge, setStaleAge] = useState(STALE_AGES[0]);
  const [daysToScan, setDaysToScan] = useState(13);

  const [ledgerEntries, setLedgerEntries] = useState([
    { text: "dr-smith-laptop · approved",   time: "0s ago",  dot: "#4caf79", key: 0 },
    { text: "reception-pc-01 · observed",   time: "14s ago", dot: "#4caf79", key: 1 },
    { text: "lab-workstation-a · verified", time: "31s ago", dot: "#4caf79", key: 2 },
    { text: "00:1A:2B · pending review",    time: "58s ago", dot: "#e6a23c", key: 3 },
  ]);
  const entryIdxRef = useRef(0);
  const entryKeyRef = useRef(10);

  /* ── Section 2 state ── */
  const uploadIdxRef = useRef(0);
  const [uploadSize, setUploadSize] = useState(UPLOAD_SIZES[0]);

  /* ── Section 3 state ── */
  const statusIdxRef = useRef(0);
  const [statusCell, setStatusCell] = useState(STATUS_CYCLE[0]);
  const [queryIdx, setQueryIdx] = useState(0);
  const [queryVisible, setQueryVisible] = useState(true);

  useEffect(() => {
    const staleTimer = setInterval(() => {
      staleIdxRef.current = (staleIdxRef.current + 1) % STALE_AGES.length;
      setStaleAge(STALE_AGES[staleIdxRef.current]);
      setDaysToScan((d) => (d <= 1 ? 13 : d - 1));
    }, 3000);
    return () => clearInterval(staleTimer);
  }, []);

  useEffect(() => {
    const ledgerTimer = setInterval(() => {
      const entry = ENTRY_POOL[entryIdxRef.current % ENTRY_POOL.length];
      entryIdxRef.current += 1;
      const key = entryKeyRef.current++;
      setLedgerEntries((prev) =>
        [{ ...entry, key }, ...prev].slice(0, 4)
      );
    }, 2400);
    return () => clearInterval(ledgerTimer);
  }, []);

  useEffect(() => {
    const uploadTimer = setInterval(() => {
      uploadIdxRef.current = (uploadIdxRef.current + 1) % UPLOAD_SIZES.length;
      setUploadSize(UPLOAD_SIZES[uploadIdxRef.current]);
    }, 2500);
    return () => clearInterval(uploadTimer);
  }, []);

  useEffect(() => {
    const statusTimer = setInterval(() => {
      statusIdxRef.current = (statusIdxRef.current + 1) % STATUS_CYCLE.length;
      setStatusCell(STATUS_CYCLE[statusIdxRef.current]);
    }, 2000);
    return () => clearInterval(statusTimer);
  }, []);

  useEffect(() => {
    const queryTimer = setInterval(() => {
      setQueryVisible(false);
      setTimeout(() => {
        setQueryIdx((i) => (i + 1) % QUERIES.length);
        setQueryVisible(true);
      }, 300);
    }, 4000);
    return () => clearInterval(queryTimer);
  }, []);

  const darkBox: React.CSSProperties = {
    background: "#0d1018",
    border: "0.5px solid rgba(255,255,255,0.08)",
    borderRadius: "7px",
    padding: "14px 16px",
  };
  const monoLabel: React.CSSProperties = {
    fontSize: "8px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "rgba(255,255,255,0.2)",
    marginBottom: "10px",
    fontFamily: "monospace",
  };

  return (
    <div style={{ background: "#08090f", color: "#fff", fontFamily: "sans-serif", minHeight: "100vh" }}>
      <Navbar />

      {/* ────────────── SECTION 1 ────────────── */}
      <div style={sectionHeaderWrapFirst}>
        <div style={eyebrow}>The problem</div>
        <div style={sectionTitle}>The gap is architectural.</div>
        <div style={sectionSub}>
          Every tool you&apos;re running was built to answer: what&apos;s happening now. None were built to answer: what happened, and can you prove it.
        </div>
      </div>
      <div className={figRowClass} style={figRow}>
        <div className="md:[border-right:0.5px_solid_rgba(255,255,255,0.07)]">
        <FigPanel
          figLabel="REC. 1.1 — SCANNER OUTPUT"
          copyTitle="Snapshots expire the moment they're taken."
          copyBody="Scanners tell you what existed at the last scan. Networks change constantly. By the time an auditor asks, the record is already stale."
          noBorderRight
        >
          <div style={{ ...darkBox, width: "260px" }}>
            <div style={monoLabel}>Last scan results</div>
            {[
              { name: "dr-smith-laptop",   age: staleAge,    color: "#e25555" },
              { name: "reception-pc-01",   age: "12 days ago", color: "#e6a23c" },
              { name: "lab-workstation-a", age: "61 days ago", color: "#e25555" },
              { name: "192.168.1.47",      age: "unknown",    color: "rgba(255,255,255,0.2)" },
            ].map((row, i) => (
              <div
                key={row.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px 0",
                  borderBottom: i < 3 ? "0.5px solid rgba(255,255,255,0.04)" : "none",
                  fontSize: "10px",
                }}
              >
                <span style={{ fontFamily: "monospace", color: "rgba(255,255,255,0.5)" }}>{row.name}</span>
                <span style={{ fontFamily: "monospace", color: row.color, fontSize: "9px" }}>{row.age}</span>
              </div>
            ))}
            <div style={{ marginTop: "8px", fontSize: "8px", color: "rgba(255,255,255,0.18)", fontFamily: "monospace" }}>
              Next scan scheduled: {daysToScan} days
            </div>
          </div>
        </FigPanel>
        </div>

        <FigPanel
          figLabel="REC. 1.2 — AVERA LEDGER"
          copyTitle="Every event. As it happens."
          copyBody="Avera doesn't wait for a scan. Every device observation is recorded the moment it occurs. The record is always current."
          noBorderRight
        >
          <div style={{ ...darkBox, border: "0.5px solid rgba(125,149,224,0.2)", width: "260px" }}>
            <div style={{ ...monoLabel, color: "rgba(125,149,224,0.5)" }}>Evidence · Live</div>
            {ledgerEntries.map((entry) => (
              <div
                key={entry.key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "4px 0",
                  borderBottom: "0.5px solid rgba(255,255,255,0.04)",
                  fontSize: "9px",
                  animation: "fadeIn 0.4s ease",
                }}
              >
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: entry.dot, flexShrink: 0 }} />
                <span style={{ fontFamily: "monospace", color: "rgba(255,255,255,0.55)", flex: 1 }}>{entry.text}</span>
                <span style={{ fontFamily: "monospace", fontSize: "8px", color: "rgba(255,255,255,0.2)" }}>{entry.time}</span>
              </div>
            ))}
          </div>
        </FigPanel>
      </div>

      {/* ────────────── SECTION 2 ────────────── */}
      <div style={sectionHeaderWrap}>
        <div style={eyebrow}>Why local-first is not optional</div>
        <div style={sectionTitle}>Your data stays on your network.</div>
        <div style={sectionSub}>
          Compliance data is not operational telemetry. It is evidence. The entity responsible for that evidence must control where it resides.
        </div>
      </div>
      <div className={figRowClass} style={figRow}>
        <div className="md:[border-right:0.5px_solid_rgba(255,255,255,0.07)]">
        <FigPanel
          figLabel="REC. 2.1 — CLOUD-DEPENDENT TOOL"
          copyTitle="Someone else holds your evidence."
          copyBody="When compliance data transits outside your network, chain of custody becomes difficult to establish and harder to defend in front of auditors."
          noBorderRight
        >
          <div style={{ ...darkBox, width: "270px" }}>
            <div style={monoLabel}>Outbound connections</div>
            {[
              { dest: "compliance-cloud.vendor.io",   size: uploadSize },
              { dest: "telemetry.saas-platform.com",  size: "880 KB" },
              { dest: "logs.external-siem.net",        size: "1.1 MB" },
              { dest: "audit.cloud-backup.io",         size: "640 KB" },
            ].map((row, i) => (
              <div
                key={row.dest}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "4px 0",
                  borderBottom: i < 3 ? "0.5px solid rgba(255,255,255,0.04)" : "none",
                  fontSize: "9px",
                }}
              >
                <span style={{ color: "#e25555", fontSize: "10px" }}>↑</span>
                <span style={{ fontFamily: "monospace", color: "rgba(255,255,255,0.4)", flex: 1 }}>{row.dest}</span>
                <span style={{ fontFamily: "monospace", color: "rgba(255,255,255,0.2)" }}>{row.size}</span>
              </div>
            ))}
          </div>
        </FigPanel>
        </div>

        <FigPanel
          figLabel="REC. 2.2 — AVERA"
          copyTitle="Zero outbound. Full custody."
          copyBody="Avera performs no outbound telemetry. Your compliance record never leaves your network. Fully air-gap capable."
          noBorderRight
        >
          <div style={{
            background: "#0d1018",
            border: "0.5px solid rgba(76,175,121,0.25)",
            borderRadius: "7px",
            padding: "18px 16px",
            width: "220px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "36px", fontWeight: 500, color: "#4caf79", lineHeight: 1, marginBottom: "6px" }}>0</div>
            <div style={{
              fontSize: "9px",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "12px",
              fontFamily: "monospace",
            }}>
              Outbound connections
            </div>
            <div style={{ height: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "1px", overflow: "hidden", marginBottom: "10px" }}>
              <div style={{ width: "0%", height: "100%", background: "#4caf79", borderRadius: "1px" }} />
            </div>
            <div style={{ fontSize: "8px", color: "rgba(255,255,255,0.2)", fontFamily: "monospace" }}>
              All compliance data stays on-premise
            </div>
          </div>
        </FigPanel>
      </div>

      {/* ────────────── SECTION 3 ────────────── */}
      <div style={sectionHeaderWrap}>
        <div style={eyebrow}>Why reconstruction persists</div>
        <div style={sectionTitle}>Reconstruction works. That is the problem.</div>
        <div style={sectionSub}>
          Because it works at significant cost, there is no forcing function to replace it. The pain is attributed to staff, not to the architecture requiring it.
        </div>
      </div>
      <div className={figRowClass} style={figRow}>
        <div className="md:[border-right:0.5px_solid_rgba(255,255,255,0.07)]">
        <FigPanel
          figLabel="REC. 3.1 — QUARTERLY RECONSTRUCTION"
          copyTitle="40+ hours. Every quarter. Same spreadsheet."
          copyBody="Manual reconstruction from DHCP logs, RMM exports, and staff interviews. Then repeat next quarter."
          noBorderRight
        >
          <div style={{ background: "#0d1018", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: "7px", overflow: "hidden", width: "280px" }}>
            {/* Chrome bar */}
            <div style={{
              background: "#101320",
              padding: "7px 10px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              borderBottom: "0.5px solid rgba(255,255,255,0.05)",
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(255,95,87,0.45)" }} />
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(255,189,46,0.45)" }} />
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(40,201,64,0.45)" }} />
              <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.2)", marginLeft: "6px", fontFamily: "monospace" }}>
                Q1 Device Inventory.xlsx
              </span>
            </div>
            {/* Column headers */}
            <div className="grid grid-cols-1 md:grid-cols-3" style={{
              padding: "6px 10px",
              borderBottom: "0.5px solid rgba(255,255,255,0.06)",
              fontSize: "8px",
              fontFamily: "monospace",
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}>
              <span>Device</span><span>First seen</span><span>Status</span>
            </div>
            {/* Rows */}
            {[
              { device: "dr-smith-laptop",   seen: "—",      status: statusCell, highlight: true },
              { device: "reception-pc-01",   seen: "Jan 12", status: "—",        highlight: false },
              { device: "lab-workstation-a", seen: "unknown", status: "?",       highlight: false },
              { device: "192.168.1.47",      seen: "—",      status: "—",        highlight: false },
            ].map((row, i) => (
              <div
                className="grid grid-cols-1 md:grid-cols-3"
                key={row.device}
                style={{
                  padding: "5px 10px",
                  borderBottom: i < 3 ? "0.5px solid rgba(255,255,255,0.04)" : "none",
                  fontSize: "9px",
                  fontFamily: "monospace",
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.45)" }}>{row.device}</span>
                <span style={{ color: "rgba(255,255,255,0.25)" }}>{row.seen}</span>
                <span style={{ color: row.highlight ? "rgba(125,149,224,0.75)" : "rgba(255,255,255,0.2)" }}>{row.status}</span>
              </div>
            ))}
          </div>
        </FigPanel>
        </div>

        <FigPanel
          figLabel="REC. 3.2 — AVERA AUDIT QUERY"
          copyTitle="Same question. Answered in seconds."
          copyBody="The record already exists. Avera queries it directly. What took weeks returns in under 60 seconds."
          noBorderRight
        >
          <div
            style={{
              ...darkBox,
              border: "0.5px solid rgba(125,149,224,0.2)",
              width: "260px",
              opacity: queryVisible ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          >
            <div style={{ ...monoLabel, color: "rgba(125,149,224,0.5)", marginBottom: "10px" }}>Audit Query</div>
            <div style={{
              fontSize: "9px",
              fontFamily: "monospace",
              padding: "3px 7px",
              borderRadius: "2px",
              background: "rgba(125,149,224,0.08)",
              color: "rgba(125,149,224,0.85)",
              borderLeft: "1.5px solid rgba(125,149,224,0.45)",
              marginBottom: "4px",
            }}>
              {QUERIES[queryIdx].q}
            </div>
            <div style={{
              fontSize: "7px",
              color: "rgba(255,255,255,0.18)",
              padding: "1px 7px",
              fontFamily: "monospace",
              marginBottom: "3px",
            }}>
              {QUERIES[queryIdx].t}
            </div>
            <div style={{
              fontSize: "9px",
              fontFamily: "monospace",
              padding: "3px 7px",
              borderRadius: "2px",
              background: "rgba(212,167,145,0.07)",
              color: "rgba(212,167,145,0.8)",
              borderLeft: "1.5px solid rgba(212,167,145,0.4)",
              marginBottom: "6px",
            }}>
              {QUERIES[queryIdx].r}
            </div>
            <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.18)", fontFamily: "monospace", paddingLeft: "7px" }}>
              no reconstruction required
            </div>
          </div>
        </FigPanel>
      </div>

      {/* ────────────── SECTION 4 ────────────── */}
      <div style={sectionHeaderWrap}>
        <div style={eyebrow}>Design principles</div>
        <div style={sectionTitle}>Principles, not features.</div>
        <div style={sectionSub}>
          Avera is not a faster way to do what existing tools do. It is a different architectural layer.
        </div>
      </div>
      <div className={figRowClass} style={figRow}>
        <div className="md:[border-right:0.5px_solid_rgba(255,255,255,0.07)]">
        <FigPanel
          figLabel="REC. 4.1 — IDENTITY CONTINUITY"
          copyTitle="The device stays the same device."
          copyBody="MAC changes. Hostname changes. Interface swaps. Avera correlates available signals to preserve continuity. The record does not reset."
          noBorderRight
        >
          <div style={{ position: "relative", width: "100%", maxWidth: "300px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", left: "5%", right: "5%", height: "1px", background: "rgba(125,149,224,0.25)", top: "50%", transform: "translateY(-50%)" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "90%", position: "relative", zIndex: 1 }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: i === 3 ? "#D4A791" : "#7D95E0",
                    boxShadow: i !== 3 ? "0 0 8px rgba(125,149,224,0.45)" : undefined,
                    flexShrink: 0,
                  }} />
                  {i === 3 && (
                    <span style={{ fontSize: "7px", fontFamily: "monospace", color: "rgba(255,255,255,0.35)", marginTop: "5px", whiteSpace: "nowrap" }}>
                      attr. change
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FigPanel>
        </div>

        <FigPanel
          figLabel="REC. 4.2 — PERMANENCE"
          copyTitle="Evidence doesn't expire."
          copyBody="Reports expire. Evidence does not. The record Avera maintains is an append-only timeline from the moment of deployment."
          noBorderRight
        >
          <div style={{ width: "100%", maxWidth: "300px" }}>
            <div style={{
              background: "rgba(229,57,53,0.06)",
              border: "0.5px solid rgba(229,57,53,0.2)",
              borderRadius: "4px",
              padding: "8px 12px",
              marginBottom: "6px",
              fontSize: "10px",
              fontFamily: "monospace",
              color: "rgba(255,100,100,0.7)",
            }}>
              Report generated Mar 15 · expires at next audit
            </div>
            <div style={{
              background: "rgba(76,175,121,0.06)",
              border: "0.5px solid rgba(76,175,121,0.2)",
              borderRadius: "4px",
              padding: "8px 12px",
              fontSize: "10px",
              fontFamily: "monospace",
              color: "rgba(76,175,121,0.8)",
            }}>
              Evidence chain #001–#217 · append-only · no expiry
            </div>
          </div>
        </FigPanel>
      </div>

      {/* ────────────── CTA ────────────── */}
      <div style={{
        padding: "64px 40px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "14px",
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ fontSize: "20px", fontWeight: 500, color: "rgba(255,255,255,0.9)" }}>
          The gap is architectural. The solution is infrastructure.
        </div>
        <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.28)" }}>
          Avera is the evidentiary layer your stack was never built to maintain.
        </div>
        <Link
          href="/demo"
          className="hover:bg-[#7D95E0] transition-colors duration-300"
          style={{
            background: "#315798",
            color: "#fff",
            fontSize: "13px",
            fontWeight: 500,
            padding: "13px 32px",
            borderRadius: "8px",
            textDecoration: "none",
            marginTop: "8px",
            display: "inline-block",
          }}
        >
          Request a Demo
        </Link>
        <a
          href="/avera-white-paper.pdf"
          download
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.38)",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          className="hover:text-white"
        >
          Read the White Paper →
        </a>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      <Footer />
    </div>
  );
}
