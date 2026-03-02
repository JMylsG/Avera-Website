import Link from "next/link";
import Navbar from "../components/Navbar";
import ConstellationBackground from "../components/ConstellationBackground";
import Footer from "../components/Footer";

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
    body: "Every device identification decision is documented in human-readable form. Confidence levels, signal sources, and alternative interpretations are preserved alongside the classification. Auditors can review the reasoning — not just the conclusion.",
  },
  {
    title: "Local-First Operation",
    body: "Avera operates entirely within the customer network. No compliance data is transmitted externally. No cloud dependency exists for core functions. The system remains fully operational in air-gapped environments.",
  },
];

const BEFORE_ITEMS = [
  "Periodic reconstruction at each audit cycle",
  "Snapshot inventories that expire on network change",
  "Fragmented logs assembled under investigation pressure",
  "Manual reconciliation across disconnected tools",
  "Evidence that resets between intervals",
];

const AFTER_ITEMS = [
  "Continuous evidentiary record, maintained automatically",
  "Immutable historical timeline, queryable at any point",
  "Ongoing approval workflow as devices are observed",
  "Instant historical query without reconstruction",
  "Compliance record that persists between audits",
];

const EXAMPLE_QUERIES = [
  {
    query: "What devices had access to ePHI between March 1 and March 15?",
    answer:
      "Returns all observed devices on clinical subnets within the specified interval.",
  },
  {
    query: "When was this device first observed on the network?",
    answer:
      "Returns the first recorded observation event for the specified device identity.",
  },
  {
    query: "Was this device authorized at the time of the incident?",
    answer:
      "Returns the authorization state of the device at any specified point in time.",
  },
  {
    query: "What changed between the last two audit intervals?",
    answer:
      "Returns a delta of device observations, state changes, and authorization decisions.",
  },
  {
    query: "Which devices appeared after the last risk analysis was filed?",
    answer:
      "Returns all device observation events after the specified compliance document date.",
  },
  {
    query: "Has this device ever connected to a clinical subnet?",
    answer: "Returns the full subnet history for the specified device identity.",
  },
];

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <ConstellationBackground />
      <div className="relative z-[1]">
        <Navbar />

        {/* Section 1 — Category Definition */}
        <section className="pt-40 pb-24 px-6 text-center max-w-3xl mx-auto">
          <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4">
            What Avera Is
          </p>
          <h1 className="text-white text-4xl font-bold mb-6">
            The Compliance System of Record.
          </h1>
          <p className="text-gray-400">
            Avera is an infrastructure layer purpose-built for continuous
            evidentiary device tracking in regulated environments. It sits
            between network infrastructure and compliance management platforms,
            maintaining persistent device identity and an immutable historical
            record of device presence, state, and authorization, independent of
            audit cycles.
          </p>
        </section>

        {/* Section 2 — Core System Guarantees */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
          <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4">
            System Guarantees
          </p>
          <h2 className="text-white text-3xl font-bold mb-12">
            Architectural primitives, not features.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GUARANTEE_CARDS.map((card) => (
              <div
                key={card.title}
                className="border border-[#315798]/20 rounded-2xl p-8 bg-[#0d1520]"
              >
                <h3 className="text-white font-semibold text-lg mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — Where Avera Fits */}
        <section className="py-24 px-6 max-w-3xl mx-auto text-center">
          <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4">
            Architectural Position
          </p>
          <h2 className="text-white text-3xl font-bold mb-12">
            Where Avera sits.
          </h2>
          <div className="flex flex-col items-center mb-12">
            <div className="w-full bg-[#0d1520] border border-white/10 rounded-xl px-6 py-4 text-gray-400 mb-2">
              Network Infrastructure
            </div>
            <span className="text-[#7D95E0] text-xl mb-2">↓</span>
            <div className="w-full bg-[#315798]/20 border border-[#7D95E0]/40 rounded-xl px-6 py-4 text-white font-semibold mb-2">
              Avera — Compliance System of Record
            </div>
            <span className="text-[#7D95E0] text-xl mb-2">↓</span>
            <div className="w-full bg-[#0d1520] border border-white/10 rounded-xl px-6 py-4 text-gray-400 mb-2">
              Compliance Management Platform
            </div>
            <span className="text-[#7D95E0] text-xl mb-2">↓</span>
            <div className="w-full bg-[#0d1520] border border-white/10 rounded-xl px-6 py-4 text-gray-400">
              Auditor / Insurer
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            Avera augments existing RMM platforms, network scanners, and
            compliance management tools. It does not replace them. It provides
            the evidentiary layer those tools were not designed to maintain — a
            continuous, defensible record of device presence and authorization
            that persists between audit intervals.
          </p>
        </section>

        {/* Section 4 — Operational Shift */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
          <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4">
            Operational Shift
          </p>
          <h2 className="text-white text-3xl font-bold mb-12">
            Before. With Avera.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a0f0f] border border-red-900/30 rounded-2xl p-8">
              <h3 className="text-rose-400 font-semibold text-lg mb-6">
                Before
              </h3>
              <ul className="space-y-3">
                {BEFORE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-400 text-sm">
                    <span className="text-red-500 flex-shrink-0">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0f1a2a] border border-[#315798]/30 rounded-2xl p-8">
              <h3 className="text-[#7D95E0] font-semibold text-lg mb-6">
                With Avera
              </h3>
              <ul className="space-y-3">
                {AFTER_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-400 text-sm">
                    <span className="text-[#7D95E0] flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 — Example Queries */}
        <section className="py-24 px-6 max-w-3xl mx-auto">
          <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4 text-center">
            Example Queries
          </p>
          <h2 className="text-white text-3xl font-bold mb-12 text-center">
            Questions the system can answer.
          </h2>
          <div className="flex flex-col gap-3">
            {EXAMPLE_QUERIES.map((q) => (
              <div
                key={q.query}
                className="bg-[#0d1520] border border-[#315798]/20 rounded-xl px-6 py-4 text-left"
              >
                <p className="text-[#7D95E0] font-mono text-sm">{q.query}</p>
                <p className="text-gray-400 text-xs mt-1">{q.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 — Closing */}
        <section className="py-24">
          <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center gap-8">
            <p className="text-white text-2xl font-light italic">
              Compliance becomes continuous infrastructure. Not periodic
              reconstruction.
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
