"use client";

import { useEffect, useRef, useState } from "react";

export default function RecognitionSection() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2"
      ref={ref}
      style={{
        background: "#08090f",
        borderBottom: "0.5px solid rgba(255,255,255,0.06)",
        minHeight: 460,
      }}
    >
      <div
        className="p-6 md:px-[52px] md:py-[60px]"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <p style={{ fontSize: 9, fontFamily: "monospace", letterSpacing: "0.12em", color: "rgba(255,255,255,0.18)", textTransform: "uppercase", marginBottom: 28 }}>
          Rec. 1.0 — The record
        </p>
        <h2 style={{ fontSize: 30, fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.015em", color: "#fff", marginBottom: 14 }}>
          History that<br />never resets.
        </h2>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.7, maxWidth: 340 }}>
          Every device observation is recorded the moment it happens. Not at
          the next scan. Not at the next audit.{" "}
          <span style={{ color: "#D4A791" }}>
            The record exists before anyone asks for it.
          </span>
        </p>
      </div>
      <div
        className="p-6 md:p-[44px] md:[border-left:0.5px_solid_rgba(255,255,255,0.05)]"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(8,9,15,0.6)",
          opacity: vis ? 1 : 0,
          transition: "opacity 0.6s ease 0.15s",
        }}
      >
        <svg width="320" height="190" viewBox="0 0 320 190" fill="none">
          <line x1="30" y1="80" x2="290" y2="80" stroke="rgba(125,149,224,0.35)" strokeWidth="1"/>
          <line x1="30" y1="80" x2="240" y2="80" stroke="rgba(125,149,224,0.85)" strokeWidth="1.5" strokeDasharray="4 3">
            <animate attributeName="stroke-dashoffset" values="0;-28" dur="1.8s" repeatCount="indefinite"/>
          </line>
          <circle cx="70" cy="80" r="5" fill="#7D95E0" opacity="0.9"/>
          <circle cx="120" cy="80" r="5" fill="#7D95E0" opacity="0.9"/>
          <circle cx="170" cy="80" r="7" fill="#D4A791"/>
          <circle cx="220" cy="80" r="5" fill="#7D95E0" opacity="0.9"/>
          <circle cx="270" cy="80" r="5" fill="#7D95E0" opacity="0.35"/>
          <text x="70" y="63" fill="rgba(255,255,255,0.65)" fontSize="8" fontFamily="monospace" textAnchor="middle">device on</text>
          <text x="120" y="63" fill="rgba(255,255,255,0.65)" fontSize="8" fontFamily="monospace" textAnchor="middle">approved</text>
          <text x="170" y="58" fill="rgba(212,167,145,1)" fontSize="8" fontFamily="monospace" textAnchor="middle">new device</text>
          <text x="220" y="63" fill="rgba(255,255,255,0.65)" fontSize="8" fontFamily="monospace" textAnchor="middle">verified</text>
          <rect x="48" y="98" width="48" height="16" rx="2" fill="rgba(125,149,224,0.14)" stroke="rgba(125,149,224,0.45)" strokeWidth="0.5"/>
          <text x="72" y="110" fill="rgba(125,149,224,0.85)" fontSize="7" fontFamily="monospace" textAnchor="middle">a3f…091</text>
          <text x="100" y="110" fill="rgba(255,255,255,0.45)" fontSize="8" textAnchor="middle">→</text>
          <rect x="108" y="98" width="48" height="16" rx="2" fill="rgba(125,149,224,0.14)" stroke="rgba(125,149,224,0.45)" strokeWidth="0.5"/>
          <text x="132" y="110" fill="rgba(125,149,224,0.85)" fontSize="7" fontFamily="monospace" textAnchor="middle">7c2…44d</text>
          <text x="160" y="110" fill="rgba(255,255,255,0.45)" fontSize="8" textAnchor="middle">→</text>
          <rect x="168" y="98" width="48" height="16" rx="2" fill="rgba(212,167,145,0.14)" stroke="rgba(212,167,145,0.55)" strokeWidth="0.5"/>
          <text x="192" y="110" fill="rgba(212,167,145,0.95)" fontSize="7" fontFamily="monospace" textAnchor="middle">b9e…f12</text>
          <text x="220" y="110" fill="rgba(255,255,255,0.45)" fontSize="8" textAnchor="middle">→</text>
          <rect x="228" y="98" width="48" height="16" rx="2" fill="rgba(125,149,224,0.10)" stroke="rgba(125,149,224,0.30)" strokeWidth="0.5"/>
          <text x="252" y="110" fill="rgba(125,149,224,0.65)" fontSize="7" fontFamily="monospace" textAnchor="middle">2d1…c88</text>
          <line x1="70" y1="85" x2="70" y2="98" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5"/>
          <line x1="120" y1="85" x2="132" y2="98" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5"/>
          <line x1="170" y1="87" x2="192" y2="98" stroke="rgba(212,167,145,0.40)" strokeWidth="0.5"/>
          <line x1="220" y1="85" x2="252" y2="98" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5"/>
          <text x="160" y="152" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="2">APPEND · ONLY · IMMUTABLE</text>
        </svg>
      </div>
    </section>
  );
}
