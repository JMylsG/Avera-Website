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
    <section className="grid grid-cols-1 md:grid-cols-2" ref={ref} style={{ background: "#08090f", borderBottom: "0.5px solid rgba(255,255,255,0.06)", minHeight: "clamp(480px, 58vh, 780px)" }}>
      <div className="p-8 md:px-[72px] md:py-[80px]" style={{ display: "flex", flexDirection: "column", justifyContent: "center", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
        <p style={{ fontSize: 11, fontFamily: "monospace", letterSpacing: "0.12em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase", marginBottom: 28 }}>Rec. 3.1 — The query</p>
        <h2 style={{ fontSize: "clamp(30px, 3vw, 48px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.015em", color: "#fff", marginBottom: 14 }}>Any date.<br />Under 60 seconds.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", lineHeight: 1.7, maxWidth: 560 }}>
          Auditors ask for March through June.{" "}
          <span style={{ color: "#D4A791" }}>Avera returns it directly.</span>{" "}
          No reconstruction. No staff interviews. No spreadsheets. The record already exists.
        </p>
      </div>
      <div className="p-8 md:p-[64px] md:[border-left:0.5px_solid_rgba(255,255,255,0.05)]" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(8,9,15,0.6)", opacity: vis ? 1 : 0, transition: "opacity 0.6s ease 0.15s" }}>
        <div style={{ width: "100%", maxWidth: 560, aspectRatio: "300/140" }}>
        <svg width="100%" height="100%" viewBox="0 0 300 140" fill="none">
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
      </div>
    </section>
  );
}

function Section35() {
  const { ref, vis } = useVisible();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2" ref={ref} style={{ background: "#08090f", borderBottom: "0.5px solid rgba(255,255,255,0.06)", minHeight: "clamp(480px, 58vh, 780px)" }}>
      <div className="p-8 md:p-[64px] md:[border-right:0.5px_solid_rgba(255,255,255,0.05)]" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(8,9,15,0.6)", opacity: vis ? 1 : 0, transition: "opacity 0.6s ease 0.1s" }}>
        <div style={{ width: "100%", maxWidth: 560, aspectRatio: "300/180" }}>
        <svg width="100%" height="100%" viewBox="0 0 300 180" fill="none">
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
      </div>
      <div className="p-8 md:px-[72px] md:py-[80px] md:[border-left:0.5px_solid_rgba(255,255,255,0.05)]" style={{ display: "flex", flexDirection: "column", justifyContent: "center", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s" }}>
        <p style={{ fontSize: 11, fontFamily: "monospace", letterSpacing: "0.12em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase", marginBottom: 28 }}>Rec. 3.2 — The cost of waiting</p>
        <h2 style={{ fontSize: "clamp(30px, 3vw, 48px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.015em", color: "#fff", marginBottom: 14 }}>279 days.<br />Without a record.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", lineHeight: 1.7, maxWidth: 560 }}>
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
      <div className="p-6 md:px-[40px] md:py-[64px]" style={{ maxWidth: "min(1200px, 88vw)", margin: "0 auto" }}>
        <p style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.12em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase", marginBottom: 10 }}>Rec. 5.1 — The cost of reconstruction</p>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.015em", color: "#fff", marginBottom: 48 }}>
          What the wrong architecture costs.<br />Every quarter.
        </h2>

        <svg width="100%" viewBox="0 0 680 160" fill="none" style={{ overflow: "visible" }}>
          <defs>
            <marker id="arrow40" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>

          {/* Before bar */}
          <rect x="0" y="72" width="510" height="6" rx="3" fill="rgba(255,80,80,0.15)" stroke="rgba(255,80,80,0.28)" strokeWidth="0.5" />

          {/* Start cap */}
          <circle cx="0" cy="75" r="4" fill="rgba(255,255,255,0.18)" />

          {/* Stat 1 — $137M */}
          <line x1="80" y1="75" x2="80" y2="44" stroke="rgba(255,100,100,0.35)" strokeWidth="0.5" />
          <circle cx="80" cy="75" r="3" fill="rgba(255,100,100,0.55)" />
          <text x="80" y="38" textAnchor="middle" fontFamily="monospace" fontSize="14" fontWeight="600" fill="rgba(255,255,255,0.88)">$137M</text>
          <text x="80" y="24" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.32)">HIPAA penalties</text>

          {/* Stat 2 — 279 days */}
          <line x1="210" y1="75" x2="210" y2="44" stroke="rgba(255,150,80,0.35)" strokeWidth="0.5" />
          <circle cx="210" cy="75" r="3" fill="rgba(255,150,80,0.55)" />
          <text x="210" y="38" textAnchor="middle" fontFamily="monospace" fontSize="14" fontWeight="600" fill="rgba(255,255,255,0.88)">279 days</text>
          <text x="210" y="24" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.32)">breach lifecycle</text>

          {/* Stat 3 — 40+ hrs */}
          <line x1="340" y1="75" x2="340" y2="44" stroke="rgba(255,180,60,0.35)" strokeWidth="0.5" />
          <circle cx="340" cy="75" r="3" fill="rgba(255,180,60,0.55)" />
          <text x="340" y="38" textAnchor="middle" fontFamily="monospace" fontSize="14" fontWeight="600" fill="rgba(255,255,255,0.88)">40+ hrs</text>
          <text x="340" y="24" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.32)">per clinic / cycle</text>

          {/* Stat 4 — $408K */}
          <line x1="460" y1="75" x2="460" y2="44" stroke="rgba(125,149,224,0.35)" strokeWidth="0.5" />
          <circle cx="460" cy="75" r="3" fill="rgba(125,149,224,0.55)" />
          <text x="460" y="38" textAnchor="middle" fontFamily="monospace" fontSize="14" fontWeight="600" fill="rgba(255,255,255,0.88)">$408K</text>
          <text x="460" y="24" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.32)">annual MSP cost</text>

          {/* Below-bar label */}
          <text x="0" y="96" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,0.20)" letterSpacing="1.5">WITHOUT A RECORD</text>

          {/* Compression chevron */}
          <path d="M518 62 L542 75 L518 88" fill="none" stroke="rgba(212,167,145,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* After line — dashed */}
          <line x1="550" y1="75" x2="630" y2="75" stroke="rgba(212,167,145,0.30)" strokeWidth="1" strokeDasharray="3 2" />

          {/* Avera dot */}
          <circle cx="554" cy="75" r="6" fill="#D4A791" opacity="0.90" />

          {/* 60 sec label */}
          <text x="598" y="40" textAnchor="middle" fontFamily="monospace" fontSize="28" fontWeight="700" fill="#D4A791">60 sec</text>
          <text x="598" y="55" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(212,167,145,0.55)" letterSpacing="1.5">WITH AVERA</text>

          {/* Bottom rule */}
          <line x1="0" y1="130" x2="680" y2="130" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

          {/* Bottom caption */}
          <text x="0" y="148" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.28)">Every number above is the cost of reconstruction. The compression point is Avera.</text>
        </svg>
      </div>
    </section>
  );
}

function Section45() {
  const { ref, vis } = useVisible();
  return (
    <section ref={ref} style={{ background: "#08090f", borderBottom: "0.5px solid rgba(255,255,255,0.06)", padding: "100px clamp(40px, 6vw, 120px)", display: "flex", alignItems: "center", justifyContent: "center", opacity: vis ? 1 : 0, transition: "opacity 0.7s ease" }}>
      <div style={{ maxWidth: "min(960px, 80vw)", borderLeft: "2px solid rgba(212,167,145,0.55)", paddingLeft: 32 }}>
        <p style={{ fontSize: "clamp(20px, 2vw, 32px)", fontStyle: "italic", fontWeight: 400, color: "rgba(255,255,255,0.82)", lineHeight: 1.6, marginBottom: 16 }}>
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
    <section className="grid grid-cols-1 md:grid-cols-2" ref={ref} style={{ background: "#08090f", borderBottom: "0.5px solid rgba(255,255,255,0.06)", minHeight: "clamp(480px, 58vh, 780px)" }}>
      <div className="p-8 md:px-[72px] md:py-[80px]" style={{ display: "flex", flexDirection: "column", justifyContent: "center", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
        <p style={{ fontSize: 11, fontFamily: "monospace", letterSpacing: "0.12em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase", marginBottom: 28 }}>Rec. 4.1 — The gap</p>
        <h2 style={{ fontSize: "clamp(30px, 3vw, 48px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.015em", color: "#fff", marginBottom: 14 }}>The reason you rebuild<br />isn&apos;t effort.<br />It&apos;s architecture.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", lineHeight: 1.7, maxWidth: 560 }}>
          RMMs, SIEMs, scanners. Every tool was built to answer: what&apos;s happening now. None were built to answer: what happened, and can you prove it.{" "}
          <span style={{ color: "#D4A791" }}>That&apos;s not a workflow gap. That&apos;s a structural one.</span>
        </p>
      </div>
      <div className="p-8 md:p-[64px] md:[border-left:0.5px_solid_rgba(255,255,255,0.05)]" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(8,9,15,0.6)", opacity: vis ? 1 : 0, transition: "opacity 0.6s ease 0.15s" }}>
        <div style={{ width: "100%", maxWidth: 560, aspectRatio: "300/200" }}>
        <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none">
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
      </div>
    </section>
  );
}

function Section55() {
  const { ref, vis } = useVisible();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2" ref={ref} style={{ background: "#08090f", borderBottom: "0.5px solid rgba(255,255,255,0.06)", minHeight: "clamp(480px, 58vh, 780px)" }}>
      <div className="p-8 md:p-[64px] md:[border-right:0.5px_solid_rgba(255,255,255,0.05)]" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(8,9,15,0.6)", opacity: vis ? 1 : 0, transition: "opacity 0.6s ease 0.1s" }}>
        <div style={{ width: "100%", maxWidth: 560, aspectRatio: "300/160" }}>
        <svg width="100%" height="100%" viewBox="0 0 300 160" fill="none">
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
      </div>
      <div className="p-8 md:px-[72px] md:py-[80px] md:[border-left:0.5px_solid_rgba(255,255,255,0.05)]" style={{ display: "flex", flexDirection: "column", justifyContent: "center", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s" }}>
        <p style={{ fontSize: 11, fontFamily: "monospace", letterSpacing: "0.12em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase", marginBottom: 28 }}>Rec. 4.2 — Infrastructure</p>
        <h2 style={{ fontSize: "clamp(30px, 3vw, 48px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.015em", color: "#fff", marginBottom: 14 }}>Compliance that runs<br />between audits.<br />Not just during them.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", lineHeight: 1.7, maxWidth: 560 }}>
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
      <Section50 />
      <Section55 />
      <Section45 />
      <Section40 />
    </>
  );
}
