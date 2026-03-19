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

const BEFORE_ITEMS = [
  "Periodic reconstruction at each audit cycle",
  "Snapshot inventories that expire on network change",
  "Fragmented logs assembled under investigation pressure",
  "Manual reconciliation across disconnected tools",
  "Evidence that resets between intervals",
  "Black-box automation making decisions you cannot audit",
  "Vendor or IT team holds the master keys to your own system",
];

const AFTER_ITEMS = [
  "Continuous evidentiary record, maintained automatically",
  "Immutable historical timeline, queryable at any point",
  "Ongoing approval workflow as devices are observed",
  "Instant historical query without reconstruction",
  "Compliance record that persists between audits",
  "Every decision logged as a human action, fully explainable",
  "The clinic holds the Authority. Access revoked in seconds.",
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
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/45 via-[#0a0f1a]/58 to-[#0a0f1a]/34" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_12%,rgba(49,87,152,0.08),transparent_56%)]" />
        <Navbar />

        {/* Section 1 — Category Definition */}
        <section className="relative overflow-hidden px-6 pb-24 pt-40">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_42%_at_50%_26%,rgba(49,87,152,0.22),transparent_70%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/32 via-transparent to-[#0a0f1a]/54" />
          <div className="pointer-events-none absolute left-1/2 top-[30%] h-[320px] w-[760px] -translate-x-1/2 rounded-[999px] border border-[#7D95E0]/10" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#0a0f1a] to-transparent" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#7D95E0]">
              What Avera Is
            </p>
            <h1 className="mb-6 text-4xl font-bold text-white">
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
          </div>
        </section>

        {/* Section 2 — Core System Guarantees */}
        <section className="relative mx-auto max-w-4xl px-6 py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_76%_46%_at_50%_54%,rgba(49,87,152,0.07),transparent_72%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/28 via-transparent to-[#0a0f1a]/46" />
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#7D95E0]">
            System Guarantees
          </p>
          <h2 className="mb-12 text-3xl font-bold text-white">
            Architectural primitives, not features.
          </h2>
          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[430px] w-[930px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[#315798]/10 lg:block" />
            {GUARANTEE_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-[rgba(212,167,145,0.35)] bg-[#0d0a0a] p-8"
              >
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — Where Avera Fits */}
        <section className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_46%_at_50%_52%,rgba(49,87,152,0.18),transparent_72%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/34 via-transparent to-[#0a0f1a]/50" />
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#7D95E0]">
            Architectural Position
          </p>
          <h2 className="mb-12 text-3xl font-bold text-white">
            Where Avera sits.
          </h2>
          <div className="relative mb-12 flex flex-col items-center">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[#315798]/15" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-[#315798]/10 blur-3xl" />
            <div className="mb-2 w-full rounded-xl border border-[rgba(212,167,145,0.35)] bg-[#0d0a0a] px-6 py-4 text-gray-400">
              Network Infrastructure
            </div>
            <span className="mb-2 text-xl text-[#7D95E0]">↓</span>
            <div className="mb-2 w-full rounded-xl border border-[#7D95E0]/40 bg-[#315798]/20 px-6 py-4 font-semibold text-white">
              Avera — Compliance System of Record
            </div>
            <span className="mb-2 text-xl text-[#7D95E0]">↓</span>
            <div className="mb-2 w-full rounded-xl border border-[rgba(212,167,145,0.35)] bg-[#0d0a0a] px-6 py-4 text-gray-400">
              Compliance Management Platform
            </div>
            <span className="mb-2 text-xl text-[#7D95E0]">↓</span>
            <div className="w-full rounded-xl border border-[rgba(212,167,145,0.35)] bg-[#0d0a0a] px-6 py-4 text-gray-400">
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
        <section className="relative mx-auto max-w-5xl px-6 py-24">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/24 via-transparent to-[#0a0f1a]/44" />
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#7D95E0]">
            Operational Shift
          </p>
          <h2 className="mb-12 text-3xl font-bold text-white">
            Before. With Avera.
          </h2>
          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[320px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[#315798]/10 md:block" />
            <div className="rounded-2xl border border-[#315798]/20 bg-[#0d0a0a] p-8">
              <h3 className="mb-6 text-lg font-semibold text-[#7D95E0]">
                Before
              </h3>
              <ul className="space-y-3">
                {BEFORE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="flex-shrink-0 text-[#7D95E0]">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[rgba(212,167,145,0.35)] bg-[#1a120e] p-8">
              <h3 className="mb-6 text-lg font-semibold text-[#D4A791]">
                With Avera
              </h3>
              <ul className="space-y-3">
                {AFTER_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="flex-shrink-0 text-[#D4A791]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 — Example Queries */}
        <section className="relative mx-auto max-w-3xl px-6 py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_44%_at_50%_48%,rgba(49,87,152,0.16),transparent_72%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/30 via-transparent to-[#0a0f1a]/48" />
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-[#7D95E0]">
            Example Queries
          </p>
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Questions the system can answer.
          </h2>
          <div className="relative flex flex-col gap-3">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[#315798]/10" />
            {EXAMPLE_QUERIES.map((q) => (
              <div
                key={q.query}
                className="rounded-xl border border-[rgba(212,167,145,0.35)] bg-[#0d0a0a] px-6 py-4 text-left"
              >
                <p className="font-mono text-sm text-[#D4A791]">{q.query}</p>
                <p className="mt-1 text-xs text-gray-400">{q.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 — Closing */}
        <section className="relative overflow-hidden py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_58%,rgba(49,87,152,0.22),transparent_72%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/16 via-transparent to-[#0a0f1a]/18" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[#315798]/15" />
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 px-6 text-center">
            <p className="text-xl font-light italic text-white">
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
