"use client";

import { useEffect, useRef, useState } from "react";

function useVisible(threshold = 0.15) {
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

function Section15() {
  const { ref, vis } = useVisible();
  const QUERIES = [
    "What devices were on the network Mar 15?",
    "What devices were on the network Apr 27?",
    "What devices were on the network May 11?",
    "What devices were on the network Jun 3?",
    "What devices were on the network Jan 9?",
  ];
  const [queryIdx, setQueryIdx] = useState(0);
  const [queryVisible, setQueryVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setQueryVisible(false);
      setTimeout(() => {
        setQueryIdx((i) => (i + 1) % QUERIES.length);
        setQueryVisible(true);
      }, 350);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2"
      ref={ref}
      style={{
        background: "#08090f",
        borderBottom: "0.5px solid rgba(255,255,255,0.06)",
        minHeight: "clamp(520px, 60vh, 820px)",
      }}
    >
      <div className="p-6 md:p-[44px] md:[border-right:0.5px_solid_rgba(255,255,255,0.05)]" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(8,9,15,0.6)", opacity: vis ? 1 : 0, transition: "opacity 0.6s ease 0.1s" }}>
        <svg width="100%" height="100%" viewBox="0 0 300 190" fill="none" style={{ width: "100%", maxWidth: 540, aspectRatio: "300/190" }}>
          <rect x="20" y="15" width="260" height="24" rx="3" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.20)" strokeWidth="0.5"/>
          <text x="38" y="31" fill="rgba(255,255,255,0.50)" fontSize="7" fontFamily="monospace">JAN</text>
          <text x="72" y="31" fill="rgba(255,255,255,0.50)" fontSize="7" fontFamily="monospace">FEB</text>
          <rect x="100" y="15" width="100" height="24" rx="3" fill="rgba(125,149,224,0.15)" stroke="rgba(125,149,224,0.55)" strokeWidth="0.5"/>
          <text x="108" y="31" fill="rgba(125,149,224,1)" fontSize="7" fontFamily="monospace">MAR</text>
          <text x="144" y="31" fill="rgba(125,149,224,1)" fontSize="7" fontFamily="monospace">APR</text>
          <text x="178" y="31" fill="rgba(125,149,224,1)" fontSize="7" fontFamily="monospace">MAY</text>
          <text x="210" y="31" fill="rgba(255,255,255,0.50)" fontSize="7" fontFamily="monospace">JUN</text>
          <text x="246" y="31" fill="rgba(255,255,255,0.50)" fontSize="7" fontFamily="monospace">JUL</text>
          <rect x="20" y="52" width="260" height="26" rx="3" fill="rgba(125,149,224,0.12)" stroke="rgba(125,149,224,0.55)" strokeWidth="0.8"/>
          <foreignObject x="20" y="52" width="260" height="26">
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                paddingLeft: "12px",
                opacity: queryVisible ? 1 : 0,
                transition: "opacity 0.35s ease",
                fontSize: "8px",
                fontFamily: "monospace",
                color: "rgba(125,149,224,1)",
                boxSizing: "border-box",
              }}
            >
              {QUERIES[queryIdx]}
            </div>
          </foreignObject>
          <text x="20" y="93" fill="rgba(255,255,255,0.45)" fontSize="7" fontFamily="monospace">← 847ms · no reconstruction required</text>
          <rect x="20" y="100" width="260" height="19" rx="2" fill="rgba(212,167,145,0.12)" stroke="rgba(212,167,145,0.40)" strokeWidth="0.5"/>
          <circle cx="33" cy="110" r="3.5" fill="#4caf79"/>
          <text x="44" y="113" fill="rgba(255,255,255,0.80)" fontSize="8" fontFamily="monospace">dr-smith-laptop</text>
          <text x="228" y="113" fill="rgba(212,167,145,0.85)" fontSize="7" fontFamily="monospace">approved</text>
          <rect x="20" y="123" width="260" height="19" rx="2" fill="rgba(125,149,224,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
          <circle cx="33" cy="133" r="3.5" fill="#4caf79"/>
          <text x="44" y="136" fill="rgba(255,255,255,0.80)" fontSize="8" fontFamily="monospace">reception-pc-01</text>
          <text x="228" y="136" fill="rgba(212,167,145,0.85)" fontSize="7" fontFamily="monospace">approved</text>
          <rect x="20" y="146" width="260" height="19" rx="2" fill="rgba(125,149,224,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
          <circle cx="33" cy="156" r="3.5" fill="rgba(230,162,60,0.85)"/>
          <text x="44" y="159" fill="rgba(255,255,255,0.80)" fontSize="8" fontFamily="monospace">00:1A:2B:3C:4D:5E</text>
          <text x="235" y="159" fill="rgba(230,162,60,0.90)" fontSize="7" fontFamily="monospace">pending</text>
          <text x="20" y="180" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="monospace">14 devices · 12 approved · 2 pending · 0 gaps</text>
        </svg>
      </div>
      <div className="p-6 md:px-[52px] md:py-[60px] md:[border-left:0.5px_solid_rgba(255,255,255,0.05)]" style={{ display: "flex", flexDirection: "column", justifyContent: "center", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s" }}>
        <p style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.12em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase", marginBottom: 28 }}>Rec. 1.2 — The query</p>
        <h2 style={{ fontSize: "clamp(30px, 3vw, 48px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.015em", color: "#fff", marginBottom: 14 }}>
          When the auditor asks,<br />you don&apos;t call your team.<br />You query it.
        </h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", lineHeight: 1.7, maxWidth: 480 }}>
          March 15th. Any date. Any range.{" "}
          <span style={{ color: "#D4A791" }}>Avera returns it directly from the record.</span>{" "}
          No reconstruction. No staff interviews.
        </p>
      </div>
    </section>
  );
}

function Section20() {
  const { ref, vis } = useVisible();
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2"
      ref={ref}
      style={{
        background: "#08090f",
        borderBottom: "0.5px solid rgba(255,255,255,0.06)",
        minHeight: "clamp(520px, 60vh, 820px)",
      }}
    >
      <div className="p-6 md:px-[52px] md:py-[60px]" style={{ display: "flex", flexDirection: "column", justifyContent: "center", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s" }}>
        <p style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.12em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase", marginBottom: 28 }}>Rec. 2.1 — Identity</p>
        <h2 style={{ fontSize: "clamp(30px, 3vw, 48px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.015em", color: "#fff", marginBottom: 14 }}>
          The device stays<br />the same device.
        </h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", lineHeight: 1.7, maxWidth: 480 }}>
          MAC changes. IP changes. Hostname changes. Interface swaps.{" "}
          <span style={{ color: "#D4A791" }}>Avera correlates every signal to maintain a single continuous identity.</span>{" "}
          The record does not reset when attributes do.
        </p>
      </div>
      <div className="p-6 md:p-[44px] md:[border-left:0.5px_solid_rgba(255,255,255,0.05)]" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(8,9,15,0.6)", opacity: vis ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }}>
        <style>{`
          @keyframes s20-pulse-ring {
            0%, 100% { opacity: 0.22; r: 28; }
            50% { opacity: 0.38; r: 32; }
          }
          @keyframes s20-pulse-inner {
            0%, 100% { opacity: 0.30; }
            50% { opacity: 0.45; }
          }
          @keyframes s20-pulse-core {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.85; }
          }
          @keyframes s20-signal {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -24; }
          }
          .s20-ring { animation: s20-pulse-ring 2.8s ease-in-out infinite; }
          .s20-inner { animation: s20-pulse-inner 2.8s ease-in-out infinite; }
          .s20-core { animation: s20-pulse-core 2.8s ease-in-out infinite; }
          .s20-signal { stroke-dasharray: 4 3; animation: s20-signal 1.4s linear infinite; }
          .s20-signal-slow { stroke-dasharray: 4 3; animation: s20-signal 1.9s linear infinite; }
        `}</style>
        <svg width="100%" height="100%" viewBox="0 0 280 220" fill="none" style={{ width: "100%", maxWidth: 480, aspectRatio: "280/220" }}>
          {/* Center pulse ring — outermost glow */}
          <circle className="s20-ring" cx="140" cy="105" r="28" fill="rgba(49,87,152,0.22)" stroke="rgba(125,149,224,0.60)" strokeWidth="0.8"/>
          {/* Center inner fill */}
          <circle className="s20-inner" cx="140" cy="105" r="18" fill="rgba(49,87,152,0.30)" stroke="rgba(125,149,224,0.65)" strokeWidth="0.5"/>
          {/* Monitor icon — pulsing core group */}
          <g className="s20-core">
            <rect x="129" y="94" width="22" height="15" rx="1.5" fill="none" stroke="rgba(255,255,255,0.90)" strokeWidth="1.5"/>
            <rect x="131" y="96" width="18" height="11" rx="0.5" fill="rgba(125,149,224,0.35)"/>
            <line x1="140" y1="109" x2="140" y2="113" stroke="rgba(255,255,255,0.80)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="135" y1="113" x2="145" y2="113" stroke="rgba(255,255,255,0.80)" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
          {/* Label below */}
          <text x="140" y="145" fill="rgba(255,255,255,0.50)" fontSize="7" fontFamily="monospace" textAnchor="middle">dr-smith-laptop</text>

          {/* Signal lines — animated dashes traveling outward */}
          {/* Top-left to MAC */}
          <line className="s20-signal" x1="72" y1="70" x2="116" y2="90" stroke="rgba(125,149,224,0.45)" strokeWidth="0.5"/>
          {/* Top-right to HOST */}
          <line className="s20-signal-slow" x1="208" y1="70" x2="164" y2="90" stroke="rgba(125,149,224,0.45)" strokeWidth="0.5"/>
          {/* Bottom-left to IP */}
          <line className="s20-signal-slow" x1="72" y1="143" x2="116" y2="120" stroke="rgba(125,149,224,0.45)" strokeWidth="0.5"/>
          {/* Bottom-right to IFACE */}
          <line className="s20-signal" x1="208" y1="143" x2="164" y2="120" stroke="rgba(125,149,224,0.45)" strokeWidth="0.5"/>

          {/* MAC circle */}
          <circle cx="55" cy="55" r="20" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" strokeDasharray="3 2"/>
          <text x="55" y="51" fill="rgba(255,255,255,0.60)" fontSize="6" fontFamily="monospace" textAnchor="middle">MAC</text>
          <text x="55" y="62" fill="rgba(255,255,255,0.80)" fontSize="6" fontFamily="monospace" textAnchor="middle">00:1A:2B</text>
          <text x="72" y="43" fill="rgba(212,167,145,0.95)" fontSize="9">↻</text>

          {/* HOST circle */}
          <circle cx="225" cy="55" r="20" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" strokeDasharray="3 2"/>
          <text x="225" y="51" fill="rgba(255,255,255,0.60)" fontSize="6" fontFamily="monospace" textAnchor="middle">HOST</text>
          <text x="225" y="62" fill="rgba(255,255,255,0.80)" fontSize="6" fontFamily="monospace" textAnchor="middle">dr-smith-pc</text>
          <text x="238" y="43" fill="rgba(212,167,145,0.95)" fontSize="9">↻</text>

          {/* IP circle */}
          <circle cx="55" cy="158" r="20" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" strokeDasharray="3 2"/>
          <text x="55" y="154" fill="rgba(255,255,255,0.60)" fontSize="6" fontFamily="monospace" textAnchor="middle">IP</text>
          <text x="55" y="165" fill="rgba(255,255,255,0.80)" fontSize="6" fontFamily="monospace" textAnchor="middle">192.168.1.4</text>
          <text x="72" y="150" fill="rgba(212,167,145,0.95)" fontSize="9">↻</text>

          {/* IFACE circle */}
          <circle cx="225" cy="158" r="20" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" strokeDasharray="3 2"/>
          <text x="225" y="154" fill="rgba(255,255,255,0.60)" fontSize="6" fontFamily="monospace" textAnchor="middle">IFACE</text>
          <text x="225" y="165" fill="rgba(255,255,255,0.80)" fontSize="6" fontFamily="monospace" textAnchor="middle">eth0→wlan0</text>
          <text x="238" y="150" fill="rgba(212,167,145,0.95)" fontSize="9">↻</text>

          <text x="140" y="202" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="2">IDENTITY · PERSISTS</text>
        </svg>
      </div>
    </section>
  );
}

function Section25() {
  const { ref, vis } = useVisible();
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2"
      ref={ref}
      style={{
        background: "#08090f",
        borderBottom: "0.5px solid rgba(255,255,255,0.06)",
        minHeight: "clamp(520px, 60vh, 820px)",
      }}
    >
      <div className="p-8 md:p-[64px] md:[border-right:0.5px_solid_rgba(255,255,255,0.05)]" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(8,9,15,0.6)", opacity: vis ? 1 : 0, transition: "opacity 0.6s ease 0.1s" }}>
        <div style={{ width: "100%", maxWidth: 540, aspectRatio: "300/200" }}>
        <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none">
          <text x="75" y="18" fill="rgba(255,255,255,0.55)" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="1">BEFORE</text>
          <rect x="20" y="26" width="110" height="16" rx="2" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5"/>
          <text x="75" y="37" fill="rgba(255,100,100,0.80)" fontSize="7" fontFamily="monospace" textAnchor="middle">MAC: AA:BB:CC:11:22:33</text>
          <rect x="20" y="47" width="110" height="16" rx="2" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5"/>
          <text x="75" y="58" fill="rgba(255,100,100,0.80)" fontSize="7" fontFamily="monospace" textAnchor="middle">HOST: dr-smith-old</text>
          <rect x="20" y="68" width="110" height="16" rx="2" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5"/>
          <text x="75" y="79" fill="rgba(255,100,100,0.80)" fontSize="7" fontFamily="monospace" textAnchor="middle">IFACE: eth0</text>
          <rect x="20" y="89" width="110" height="16" rx="2" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5"/>
          <text x="75" y="100" fill="rgba(255,100,100,0.80)" fontSize="7" fontFamily="monospace" textAnchor="middle">OS: reimaged</text>
          <text x="150" y="72" fill="rgba(125,149,224,0.75)" fontSize="18" textAnchor="middle">→</text>
          <text x="150" y="88" fill="rgba(255,255,255,0.40)" fontSize="7" fontFamily="monospace" textAnchor="middle">Avera</text>
          <text x="225" y="18" fill="rgba(255,255,255,0.55)" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="1">AFTER</text>
          <rect x="170" y="26" width="110" height="16" rx="2" fill="rgba(125,149,224,0.14)" stroke="rgba(125,149,224,0.45)" strokeWidth="0.5"/>
          <text x="225" y="37" fill="rgba(125,149,224,0.95)" fontSize="7" fontFamily="monospace" textAnchor="middle">MAC: DD:EE:FF:44:55:66</text>
          <rect x="170" y="47" width="110" height="16" rx="2" fill="rgba(125,149,224,0.14)" stroke="rgba(125,149,224,0.45)" strokeWidth="0.5"/>
          <text x="225" y="58" fill="rgba(125,149,224,0.95)" fontSize="7" fontFamily="monospace" textAnchor="middle">HOST: dr-smith-new</text>
          <rect x="170" y="68" width="110" height="16" rx="2" fill="rgba(125,149,224,0.14)" stroke="rgba(125,149,224,0.45)" strokeWidth="0.5"/>
          <text x="225" y="79" fill="rgba(125,149,224,0.95)" fontSize="7" fontFamily="monospace" textAnchor="middle">IFACE: wlan0</text>
          <rect x="170" y="89" width="110" height="16" rx="2" fill="rgba(125,149,224,0.14)" stroke="rgba(125,149,224,0.45)" strokeWidth="0.5"/>
          <text x="225" y="100" fill="rgba(125,149,224,0.95)" fontSize="7" fontFamily="monospace" textAnchor="middle">OS: clean install</text>
          <rect x="20" y="124" width="260" height="22" rx="3" fill="rgba(212,167,145,0.14)" stroke="rgba(212,167,145,0.55)" strokeWidth="0.5"/>
          <text x="150" y="139" fill="rgba(212,167,145,1)" fontSize="7" fontFamily="monospace" textAnchor="middle">dr-smith-laptop · identity continuous · #a3f091 → #dd1c88</text>
          <text x="150" y="170" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="1">SAME DEVICE · UNINTERRUPTED RECORD</text>
        </svg>
        </div>
      </div>
      <div className="p-8 md:px-[72px] md:py-[80px] md:[border-left:0.5px_solid_rgba(255,255,255,0.05)]" style={{ display: "flex", flexDirection: "column", justifyContent: "center", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s" }}>
        <p style={{ fontSize: 11, fontFamily: "monospace", letterSpacing: "0.12em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase", marginBottom: 28 }}>Rec. 2.2 — Continuity</p>
        <h2 style={{ fontSize: "clamp(30px, 3vw, 48px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.015em", color: "#fff", marginBottom: 14 }}>
          Reimaged. Reconnected.<br />Still the same record.
        </h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", lineHeight: 1.7, maxWidth: 560 }}>
          A laptop reimaged, MAC changed, WiFi swapped.{" "}
          <span style={{ color: "#D4A791" }}>Avera knew it was the same device the entire time.</span>{" "}
          The chain never broke.
        </p>
      </div>
    </section>
  );
}

export default function DifferentiationSection() {
  return (
    <>
      <Section15 />
      <Section20 />
      <Section25 />
    </>
  );
}
