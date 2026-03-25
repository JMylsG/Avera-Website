"use client";

import { useEffect, useRef, useState } from "react";

function useVisible(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, vis };
}

function Section30() {
  const { ref, vis } = useVisible();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2" ref={ref} style={{ background: "#08090f", borderBottom: "0.5px solid rgba(255,255,255,0.06)", minHeight: 420 }}>
      <div className="p-6 md:px-[52px] md:py-[60px]" style={{ display: "flex", flexDirection: "column", justifyContent: "center", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
        <p style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.12em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase", marginBottom: 28 }}>Rec. 3.0 — The query</p>
        <h2 style={{ fontSize: 30, fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.015em", color: "#fff", marginBottom: 14 }}>Any date.<br />Under 60 seconds.</h2>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.7, maxWidth: 340 }}>
          Auditors ask for March through June.{" "}
          <span style={{ color: "#D4A791" }}>Avera returns it directly.</span>{" "}
          No reconstruction. No staff interviews. No spreadsheets. The record already exists.
        </p>
      </div>
      <div className="p-6 md:p-[44px] md:[border-left:0.5px_solid_rgba(255,255,255,0.05)]" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(8,9,15,0.6)", opacity: vis ? 1 : 0, transition: "opacity 0.6s ease 0.15s" }}>
        <svg width="300" height="140" viewBox="0 0 300 140" fill="none">
          <line x1="20" y1="70" x2="280" y2="70" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
          <line x1="20" y1="70" x2="280" y2="70" stroke="rgba(125,149,224,0.75)" strokeWidth="1.5" strokeDasharray="5 3"><animate attributeName="stroke-dashoffset" values="0;-32" dur="2s" repeatCount="indefinite"/></line>
          <rect x="90" y="55" width="120" height="30" rx="3" fill="rgba(125,149,224,0.16)" stroke="rgba(125,149,224,0.60)" strokeWidth="0.8"/>
          <text x="150" y="67" fill="rgba(125,149,224,1)" fontSize="7" fontFamily="monospace" textAnchor="middle">query: Mar 1 – Jun 30</text>
          <text x="150" y="79" fill="rgba(212,167,145,0.95)" fontSize="7" fontFamily="monospace" textAnchor="middle">← 847ms · 0 gaps</text>
          <circle cx="20" cy="70" r="4" fill="rgba(255,255,255,0.35)"/>
          <circle cx="280" cy="70" r="4" fill="rgba(255,255,255,0.35)"/>
          <text x="20" y="95" fill="rgba(255,255,255,0.50)" fontSize="7" fontFamily="monospace" textAnchor="middle">Jan</text>
          <text x="280" y="95" fill="rgba(255,255,255,0.50)" fontSize="7" fontFamily="monospace" textAnchor="middle">Dec</text>
          <text x="90" y="95" fill="rgba(125,149,224,0.80)" fontSize="7" fontFamily="monospace" textAnchor="middle">Mar</text>
          <text x="210" y="95" fill="rgba(125,149,224,0.80)" fontSize="7" fontFamily="monospace" textAnchor="middle">Jun</text>
          <text x="150" y="125" fill="rgba(255,255,255,0.30)" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="2">NO RECONSTRUCTION REQUIRED</text>
        </svg>
      </div>
    </section>
  );
}

function Section35() {
  const { ref, vis } = useVisible();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2" ref={ref} style={{ background: "#08090f", borderBottom: "0.5px solid rgba(255,255,255,0.06)", minHeight: 420 }}>
      <div className="p-6 md:p-[44px] md:[border-right:0.5px_solid_rgba(255,255,255,0.05)]" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(8,9,15,0.6)", opacity: vis ? 1 : 0, transition: "opacity 0.6s ease 0.1s" }}>
        <svg width="300" height="180" viewBox="0 0 300 180" fill="none">
          <text x="20" y="20" fill="rgba(255,255,255,0.55)" fontSize="8" fontFamily="monospace">breach identified · day 0</text>
          <line x1="20" y1="38" x2="280" y2="38" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5"/>
          <text x="20" y="54" fill="rgba(255,255,255,0.50)" fontSize="7" fontFamily="monospace">without avera</text>
          <rect x="20" y="60" width="240" height="18" rx="2" fill="rgba(255,80,80,0.12)" stroke="rgba(255,80,80,0.35)" strokeWidth="0.5"/>
          <text x="140" y="72" fill="rgba(255,100,100,0.85)" fontSize="7" fontFamily="monospace" textAnchor="middle">279 days reconstructing scope from fragments</text>
          <text x="20" y="100" fill="rgba(255,255,255,0.50)" fontSize="7" fontFamily="monospace">with avera</text>
          <rect x="20" y="106" width="60" height="18" rx="2" fill="rgba(76,175,121,0.16)" stroke="rgba(76,175,121,0.50)" strokeWidth="0.5"/>
          <text x="50" y="118" fill="rgba(76,175,121,0.95)" fontSize="7" fontFamily="monospace" textAnchor="middle">scope: 60s</text>
          <text x="90" y="118" fill="rgba(255,255,255,0.55)" fontSize="7" fontFamily="monospace">record already existed</text>
          <line x1="20" y1="142" x2="280" y2="142" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5"/>
          <text x="20" y="158" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="monospace">0</text>
          <text x="245" y="158" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="monospace">279 days</text>
          <text x="150" y="175" fill="rgba(255,255,255,0.28)" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="1">BREACH LIFECYCLE COMPRESSED</text>
        </svg>
      </div>
      <div className="p-6 md:px-[52px] md:py-[60px] md:[border-left:0.5px_solid_rgba(255,255,255,0.05)]" style={{ display: "flex", flexDirection: "column", justifyContent: "center", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s" }}>
        <p style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.12em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase", marginBottom: 28 }}>Rec. 3.5 — The cost of waiting</p>
        <h2 style={{ fontSize: 30, fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.015em", color: "#fff", marginBottom: 14 }}>279 days.<br />Without a record.</h2>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.7, maxWidth: 340 }}>
          The average breach lifecycle. Teams spend months reconstructing scope from fragmented logs.{" "}
          <span style={{ color: "#D4A791" }}>Avera closes the gap before it opens.</span>
        </p>
      </div>
    </section>
  );
}

function Section40() {
  const { ref, vis } = useVisible();
  return (
    <section ref={ref} style={{ background: "#08090f", borderBottom: "0.5px solid rgba(255,255,255,0.06)", opacity: vis ? 1 : 0, transition: "opacity 0.7s ease" }}>
      <div className="p-6 md:px-[40px] md:py-[64px]" style={{ maxWidth: 860, margin: "0 auto" }}>
        <p style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.12em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase", marginBottom: 10 }}>Rec. 4.0 — The cost of reconstruction</p>
        <h2 style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.015em", color: "#fff", marginBottom: 28 }}>What the wrong architecture costs.<br />Every quarter.</h2>
        <div className="grid grid-cols-1 gap-px md:grid-cols-3" style={{ background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.06)", borderRadius: "8px 8px 0 0", overflow: "hidden" }}>
          {[
            { num: "$137M", desc: "in cumulative HIPAA penalties since enforcement began" },
            { num: "279 days", desc: "average breach lifecycle from identification to containment" },
            { num: "40+ hrs", desc: "spent per clinic rebuilding compliance records every audit cycle" },
          ].map((s) => (
            <div key={s.num} className="p-6 md:px-[28px] md:py-[32px]" style={{ background: "#08090f" }}>
              <div style={{ fontSize: 34, fontWeight: 600, color: "#fff", lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.55 }}>{s.desc}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-px md:grid-cols-2" style={{ background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.06)", borderTop: "none", borderRadius: "0 0 8px 8px", overflow: "hidden" }}>
          <div className="p-6 md:px-[28px] md:py-[32px]" style={{ background: "#08090f" }}>
            <div style={{ fontSize: 34, fontWeight: 600, color: "#fff", lineHeight: 1, marginBottom: 8 }}>$408K</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.55 }}>annual compliance cost for an MSP managing 15 clients</div>
          </div>
          <div className="p-6 md:px-[28px] md:py-[32px]" style={{ background: "#08090f" }}>
            <div style={{ fontSize: 40, fontWeight: 600, color: "#D4A791", lineHeight: 1, marginBottom: 8 }}>60 sec</div>
            <div style={{ fontSize: 11, color: "rgba(212,167,145,0.7)", lineHeight: 1.55 }}>What took weeks to rebuild, Avera queries in seconds.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section45() {
  const { ref, vis } = useVisible();
  return (
    <section ref={ref} style={{ background: "#08090f", borderBottom: "0.5px solid rgba(255,255,255,0.06)", padding: "80px 40px", display: "flex", alignItems: "center", justifyContent: "center", opacity: vis ? 1 : 0, transition: "opacity 0.7s ease" }}>
      <div style={{ maxWidth: 680, borderLeft: "2px solid rgba(212,167,145,0.55)", paddingLeft: 32 }}>
        <p style={{ fontSize: 20, fontStyle: "italic", fontWeight: 400, color: "rgba(255,255,255,0.82)", lineHeight: 1.6, marginBottom: 16 }}>
          &ldquo;We spend two weeks every quarter doing something we&apos;ve already done three times before. Same clinics, same process, same spreadsheets. The only thing that changes is the date on the report.&rdquo;
        </p>
        <p style={{ fontSize: 12, color: "#D4A791", fontWeight: 500 }}>MSP owner, 12 healthcare practices</p>
      </div>
    </section>
  );
}

function Section50() {
  const { ref, vis } = useVisible();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2" ref={ref} style={{ background: "#08090f", borderBottom: "0.5px solid rgba(255,255,255,0.06)", minHeight: 460 }}>
      <div className="p-6 md:px-[52px] md:py-[60px]" style={{ display: "flex", flexDirection: "column", justifyContent: "center", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
        <p style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.12em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase", marginBottom: 28 }}>Rec. 5.0 — The gap</p>
        <h2 style={{ fontSize: 30, fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.015em", color: "#fff", marginBottom: 14 }}>The reason you rebuild<br />isn&apos;t effort.<br />It&apos;s architecture.</h2>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.7, maxWidth: 340 }}>
          RMMs, SIEMs, scanners. Every tool was built to answer: what&apos;s happening now. None were built to answer: what happened, and can you prove it.{" "}
          <span style={{ color: "#D4A791" }}>That&apos;s not a workflow gap. That&apos;s a structural one.</span>
        </p>
      </div>
      <div className="p-6 md:p-[44px] md:[border-left:0.5px_solid_rgba(255,255,255,0.05)]" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(8,9,15,0.6)", opacity: vis ? 1 : 0, transition: "opacity 0.6s ease 0.15s" }}>
        <svg width="300" height="200" viewBox="0 0 300 200" fill="none">
          <text x="75" y="18" fill="rgba(125,149,224,0.85)" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="1">OPERATIONAL</text>
          <text x="75" y="30" fill="rgba(255,255,255,0.50)" fontSize="7" fontFamily="monospace" textAnchor="middle">answers: now</text>
          {["RMM","Network Scanner","SIEM","Compliance Platform"].map((t, i) => (
            <g key={t}>
              <rect x="20" y={40 + i * 22} width="110" height="15" rx="2" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.20)" strokeWidth="0.5"/>
              <text x="75" y={51 + i * 22} fill="rgba(255,255,255,0.65)" fontSize="7" fontFamily="monospace" textAnchor="middle">{t}</text>
            </g>
          ))}
          <text x="75" y="140" fill="rgba(255,80,80,0.65)" fontSize="7" fontFamily="monospace" textAnchor="middle">expires on next change</text>
          <line x1="150" y1="10" x2="150" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" strokeDasharray="4 3"/>
          <text x="225" y="18" fill="rgba(212,167,145,0.95)" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="1">EVIDENTIARY</text>
          <text x="225" y="30" fill="rgba(255,255,255,0.50)" fontSize="7" fontFamily="monospace" textAnchor="middle">answers: what happened</text>
          {["Persistent Identity","Immutable Timeline","Continuous Observation","Approval Workflow"].map((t, i) => (
            <g key={t}>
              <rect x="170" y={40 + i * 22} width="110" height="15" rx="2" fill="rgba(212,167,145,0.10)" stroke="rgba(212,167,145,0.40)" strokeWidth="0.5"/>
              <text x="225" y={51 + i * 22} fill="rgba(212,167,145,0.90)" fontSize="7" fontFamily="monospace" textAnchor="middle">{t}</text>
            </g>
          ))}
          <text x="225" y="140" fill="rgba(76,175,121,0.80)" fontSize="7" fontFamily="monospace" textAnchor="middle">append-only · always current</text>
          <text x="150" y="178" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="1">AVERA IS THE EVIDENTIARY LAYER</text>
        </svg>
      </div>
    </section>
  );
}

function Section55() {
  const { ref, vis } = useVisible();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2" ref={ref} style={{ background: "#08090f", borderBottom: "0.5px solid rgba(255,255,255,0.06)", minHeight: 420 }}>
      <div className="p-6 md:p-[44px] md:[border-right:0.5px_solid_rgba(255,255,255,0.05)]" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(8,9,15,0.6)", opacity: vis ? 1 : 0, transition: "opacity 0.6s ease 0.1s" }}>
        <svg width="300" height="160" viewBox="0 0 300 160" fill="none">
          <text x="150" y="18" fill="rgba(255,255,255,0.45)" fontSize="8" fontFamily="monospace" textAnchor="middle">compliance cycle · quarterly reconstruction</text>
          <rect x="20" y="28" width="260" height="20" rx="2" fill="rgba(255,80,80,0.10)" stroke="rgba(255,80,80,0.30)" strokeWidth="0.5"/>
          <text x="35" y="41" fill="rgba(255,100,100,0.75)" fontSize="7" fontFamily="monospace">Q1: 40hrs</text>
          <text x="150" y="41" fill="rgba(255,100,100,0.75)" fontSize="7" fontFamily="monospace" textAnchor="middle">Q2: 40hrs</text>
          <text x="250" y="41" fill="rgba(255,100,100,0.75)" fontSize="7" fontFamily="monospace" textAnchor="end">Q3: 40hrs</text>
          <text x="150" y="68" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="monospace" textAnchor="middle">↓  Avera  ↓</text>
          <text x="150" y="88" fill="rgba(255,255,255,0.45)" fontSize="8" fontFamily="monospace" textAnchor="middle">compliance infrastructure · continuous</text>
          <rect x="20" y="96" width="260" height="20" rx="2" fill="rgba(76,175,121,0.10)" stroke="rgba(76,175,121,0.40)" strokeWidth="0.5"/>
          <line x1="20" y1="106" x2="280" y2="106" stroke="rgba(76,175,121,0.65)" strokeWidth="1" strokeDasharray="3 2"><animate attributeName="stroke-dashoffset" values="0;-20" dur="2s" repeatCount="indefinite"/></line>
          <text x="150" y="109" fill="rgba(76,175,121,0.85)" fontSize="7" fontFamily="monospace" textAnchor="middle">record runs continuously between audits</text>
          <text x="150" y="148" fill="rgba(255,255,255,0.28)" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="1">80–90% TIME REDUCTION · INDUSTRY BENCHMARK</text>
        </svg>
      </div>
      <div className="p-6 md:px-[52px] md:py-[60px] md:[border-left:0.5px_solid_rgba(255,255,255,0.05)]" style={{ display: "flex", flexDirection: "column", justifyContent: "center", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s" }}>
        <p style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.12em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase", marginBottom: 28 }}>Rec. 5.5 — Infrastructure</p>
        <h2 style={{ fontSize: 30, fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.015em", color: "#fff", marginBottom: 14 }}>Compliance that runs<br />between audits.<br />Not just during them.</h2>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.7, maxWidth: 340 }}>
          Process optimization makes reconstruction faster.{" "}
          <span style={{ color: "#D4A791" }}>Infrastructure makes it unnecessary.</span>{" "}
          The gap is architectural. The solution is infrastructure.
        </p>
      </div>
    </section>
  );
}

export default function ProofSection() {
  return (
    <>
      <Section30 />
      <Section35 />
      <Section40 />
      <Section45 />
      <Section50 />
      <Section55 />
    </>
  );
}
