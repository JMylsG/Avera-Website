import Link from "next/link";
import Navbar from "../components/Navbar";
import ConstellationBackground from "../components/ConstellationBackground";
import Footer from "../components/Footer";

const STRUCTURAL_LIMITATIONS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    name: "RMM Platforms",
    does: "Patch status, agent health, remote access, and configuration data for managed endpoints over time.",
    cannot: "Agent-based endpoints get detailed, continuous records. Unmanaged and purely agentless devices typically have sparser, less reliable histories and limited visibility into local activity.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    name: "Network Scanners",
    does: "Point-in-time device inventory on demand.",
    cannot: "Internal asset IDs exist, but identity is brittle. When key attributes like IP, hostname, or MAC change and cannot be matched, scanners may treat the same device as a new asset and create a separate record and history.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 3h18v18H3z" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    name: "SIEM / Log Aggregation",
    does: "Event aggregation, anomaly detection, incident response.",
    cannot: "Not a primary source of device identity. In practice, SIEMs rely on external asset inventories and CMDBs for authoritative device data and require custom enrichment and correlation rules to reconstruct a continuous device timeline from events.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    name: "Compliance Platforms",
    does: "Policy structure, control mapping, audit workflow organization.",
    cannot: "Rely on MDM, RMM, cloud, and other integrations for device-level evidence and automated checks. They do not provide general-purpose network discovery or vulnerability scanning. Non-integrated assets must be added or monitored by other tools.",
  },
];

const PRINCIPLE_CARDS = [
  {
    title: "Identity Continuity Over Attribute Tracking",
    body: "Tracking IP addresses and MAC addresses produces snapshots. Maintaining device identity across attribute changes produces a compliance record. Avera is designed around the latter: not as a feature, but as a foundational architectural commitment.",
  },
  {
    title: "Permanence Over Snapshot Reporting",
    body: "Reports expire. Evidence does not. The evidentiary record Avera maintains is not a report generated at a point in time. It is an append-only timeline that reflects every observation, state change, and authorization decision from the moment of deployment.",
  },
  {
    title: "Explainability Over Black-Box Scoring",
    body: "Device identification that cannot be explained cannot be defended. Every classification decision Avera makes is documented in human-readable form: the signals observed, the confidence level, and the alternatives considered. Auditors review reasoning, not just conclusions.",
  },
  {
    title: "Infrastructure Over Workflow Optimization",
    body: "Optimizing a reconstruction workflow makes reconstruction faster. It does not eliminate it. Avera is not a faster way to do what existing tools do. It is a different architectural layer designed to make periodic reconstruction structurally unnecessary.",
  },
];

export default function WhyAveraPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <ConstellationBackground />
      <div className="relative z-[1]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/46 via-[#0a0f1a]/6 to-[#0a0f1a]/34" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_72%_at_50%_8%,rgba(49,87,152,0.08),transparent_58%)]" />
        <Navbar />

        {/* Section 1: The Architectural Gap */}
        <section className="relative overflow-hidden px-6 pb-24 pt-40">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_44%_at_50%_24%,rgba(49,87,152,0.2),transparent_72%)]" />
          <div className="pointer-events-none absolute left-1/2 top-[46%] h-[420px] w-[min(90vw,860px)] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[#7D95E0]/10" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/26 via-transparent to-[#0a0f1a]/56" />
          <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4">
            The Problem
          </p>
          <h1 className="text-white text-4xl font-bold mb-6">
            The gap is architectural.
          </h1>
          <p className="text-gray-400 text-base leading-relaxed">
            Compliance tools are built around periodic workflows. Audit
            frameworks are structured around quarterly or annual milestones.
            Scanners are optimized for on-demand execution. RMM platforms are
            aligned with patch cycles. The entire stack assumes compliance is an
            activity performed at intervals.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mt-4">
            HIPAA and regulated environments do not create operational
            obligations. They create evidentiary ones. The requirement is not to
            assess risk periodically; it is to demonstrate, at any point in
            time, what devices were present, what changed, and how risk was
            evaluated.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mt-4">
            Reconstruction is not a workflow problem. It is a structural side
            effect of tools that were never designed to maintain a continuous
            evidentiary record. When the architecture is periodic, reconstruction
            is inevitable.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mt-4">
            The solution is not better checklists, faster scanning, or improved
            reporting templates. The solution is infrastructure designed from
            the ground up for evidentiary continuity.
          </p>
          </div>
        </section>

        {/* Section 2: Why Existing Tools Fall Short */}
        <section className="relative mx-auto max-w-4xl overflow-hidden px-6 py-24">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/30 via-transparent to-[#0a0f1a]/48" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_84%_54%_at_50%_56%,rgba(49,87,152,0.1),transparent_72%)]" />
          <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4">
            Structural Limitations
          </p>
          <h2 className="text-white text-3xl font-bold mb-4">
            Why existing tools cannot close this gap.
          </h2>
          <p className="text-gray-400 text-sm mb-12 max-w-xl">
            Every tool in your current stack was built to answer: what is happening now. None were built to answer: what happened, and can you prove it.
          </p>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[#315798]/10 md:block" />
            {STRUCTURAL_LIMITATIONS.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ backgroundColor: "#0d0a0a", border: "1px solid rgba(212,167,145,0.35)" }}
              >
                <div className="text-[#7D95E0]">{item.icon}</div>
                <p className="text-white font-semibold text-base">{item.name}</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[#7D95E0] text-xs mt-0.5 flex-shrink-0">DOES</span>
                    <p className="text-gray-400 text-sm">{item.does}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-rose-400 text-xs mt-0.5 flex-shrink-0">LIMIT</span>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>{item.cannot}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="mt-8 rounded-xl px-6 py-4 text-sm text-center"
            style={{ backgroundColor: "rgba(212,167,145,0.06)", border: "1px solid rgba(212,167,145,0.2)", color: "rgba(212,167,145,0.8)" }}
          >
            When auditors ask for March through June, every tool above requires reconstruction. Avera returns it in under 60 seconds.
          </div>
        </section>

        {/* Section 3: Why Local-First Matters */}
        <section className="relative mx-auto max-w-4xl overflow-hidden px-6 py-24">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/26 via-transparent to-[#0a0f1a]/46" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_74%_48%_at_50%_54%,rgba(212,167,145,0.08),transparent_74%)]" />
          <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4 text-center">
            Architectural Choice
          </p>
          <h2 className="text-white text-3xl font-bold mb-4 text-center">
            Why local-first is not optional.
          </h2>
          <p className="text-gray-400 text-sm mb-12 text-center max-w-xl mx-auto">
            Compliance data is not operational telemetry. It is evidence. The entity responsible for that evidence must control where it resides.
          </p>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 flex flex-col gap-3" style={{ backgroundColor: "#1a120e", border: "1px solid rgba(212,167,145,0.35)" }}>
              <div style={{ color: "#D4A791" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <p className="text-white font-semibold">Your data. Your network.</p>
              <p className="text-gray-400 text-sm">No outbound telemetry. No cloud storage. Compliance records stay on-premise under your control. Zero cloud dependency for core functions.</p>
            </div>
            <div className="rounded-2xl p-6 flex flex-col gap-3" style={{ backgroundColor: "#1a120e", border: "1px solid rgba(212,167,145,0.35)" }}>
              <div style={{ color: "#D4A791" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <p className="text-white font-semibold">Chain of custody intact.</p>
              <p className="text-gray-400 text-sm">When compliance data transits outside the regulated network, the chain of custody becomes difficult to establish and harder to defend in front of auditors.</p>
            </div>
            <div className="rounded-2xl p-6 flex flex-col gap-3" style={{ backgroundColor: "#1a120e", border: "1px solid rgba(212,167,145,0.35)" }}>
              <div style={{ color: "#D4A791" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M18.36 6.64A9 9 0 1 1 5.64 17.36" />
                  <line x1="12" y1="12" x2="12" y2="3" />
                  <line x1="12" y1="3" x2="16" y2="7" />
                </svg>
              </div>
              <p className="text-white font-semibold">Works when nothing else does.</p>
              <p className="text-gray-400 text-sm">Fully air-gap capable. During connectivity failures and network incidents, precisely when evidentiary continuity matters most, Avera keeps running.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Chronic vs Acute Pain */}
        <section className="relative mx-auto max-w-3xl overflow-hidden px-6 py-24 text-center">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/34 via-transparent to-[#0a0f1a]/52" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_46%_at_50%_58%,rgba(49,87,152,0.12),transparent_74%)]" />
          <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4">
            Why It Persists
          </p>
          <h2 className="text-white text-3xl font-bold mb-4">
            Reconstruction works. That is the problem.
          </h2>
          <p className="text-gray-400 text-sm mb-16 max-w-lg mx-auto">
            Because it works at significant cost, there is no forcing function to replace it. The pain is attributed to staff, not to the architecture requiring it.
          </p>

          {/* Reconstruction cycle */}
          <div className="relative mb-6">
            <p className="text-rose-400 text-xs font-semibold tracking-widest uppercase mb-6">The Reconstruction Cycle</p>
            <div className="pointer-events-none absolute left-1/2 top-[56%] h-[270px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[#315798]/10" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {[
                { step: "01", label: "Run Scans", detail: "2-4 hrs per clinic" },
                { step: "02", label: "Classify Devices", detail: "6-12 hrs per clinic" },
                { step: "03", label: "Reconcile", detail: "4-8 hrs per clinic" },
                { step: "04", label: "File Report", detail: "2-4 hrs per clinic" },
              ].map((item, i, arr) => (
                <div key={item.step} className="relative flex flex-col items-center gap-2">
                  <div
                    className="w-full rounded-xl p-4 flex flex-col items-center gap-1"
                    style={{ backgroundColor: "#0d0a0a", border: "1px solid rgba(239,68,68,0.2)" }}
                  >
                    <p className="text-rose-400 text-xs font-mono">{item.step}</p>
                    <p className="text-white text-sm font-semibold">{item.label}</p>
                    <p className="text-gray-500 text-xs">{item.detail}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-rose-400/40 text-lg z-10">→</div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-rose-400/60 text-xs italic">Then repeat next quarter. Same clinics. Same process. Same spreadsheets.</p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(212,167,145,0.15)" }} />
            <p className="text-sm font-semibold" style={{ color: "#D4A791" }}>With Avera</p>
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(212,167,145,0.15)" }} />
          </div>

          {/* Avera model */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-[#315798]/12 blur-3xl" />
            {[
              { label: "Observe Continuously", detail: "Every device, every connection, as it happens." },
              { label: "Record Automatically", detail: "Immutable evidence, no scheduled scans required." },
              { label: "Query Instantly", detail: "Any historical window. Under 60 seconds." },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-4 flex flex-col gap-1"
                style={{ backgroundColor: "#1a120e", border: "1px solid rgba(212,167,145,0.35)" }}
              >
                <p className="text-sm font-semibold" style={{ color: "#D4A791" }}>{item.label}</p>
                <p className="text-gray-400 text-xs">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: What Makes Avera Different */}
        <section className="relative mx-auto max-w-4xl overflow-hidden px-6 py-24">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/28 via-transparent to-[#0a0f1a]/44" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_82%_50%_at_50%_50%,rgba(49,87,152,0.08),transparent_76%)]" />
          <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4">
            Design Principles
          </p>
          <h2 className="text-white text-3xl font-bold mb-12">
            Principles, not features.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINCIPLE_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-[#0d0a0a] rounded-2xl p-8"
                style={{ border: "1px solid rgba(212, 167, 145, 0.35)" }}
              >
                <h3 className="text-[#D4A791] font-semibold text-lg mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Closing Statement */}
        <section className="relative overflow-hidden py-24">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/16 via-transparent to-[#0a0f1a]/18" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_56%,rgba(49,87,152,0.22),transparent_74%)]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[#315798]/15" />
          <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center gap-8 relative">
            <p className="text-white text-xl font-light italic">
              Compliance should not require rebuilding. It should be continuously
              preserved.
            </p>
            <Link href="/demo" className="bg-[#315798] hover:bg-[#7D95E0] text-white font-semibold rounded-full px-8 py-4 transition-colors duration-300">
              Request a Demo
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
