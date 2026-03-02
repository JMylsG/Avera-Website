import Link from "next/link";
import Navbar from "../components/Navbar";
import ConstellationBackground from "../components/ConstellationBackground";
import Footer from "../components/Footer";

const STRUCTURAL_LIMITATIONS = [
  {
    title: "RMM Platforms",
    body: "Remote monitoring and management platforms are optimized for operational visibility and device management. They provide current state: patch status, agent health, active connections. Historical continuity for unmanaged or agentless devices is incidental, not architectural. The evidentiary record was never their design objective.",
  },
  {
    title: "Network Scanners",
    body: "Scanners produce point-in-time inventories. Each scan is independent. Without a persistent identity model, the same device appears differently across scans as its attributes change: different IP, different hostname, different MAC. Correlating these observations into a continuous identity timeline requires logic that most scanners do not maintain.",
  },
  {
    title: "SIEM and Log Aggregation",
    body: "SIEM platforms are designed to answer the question: what happened? They aggregate events and surface anomalies. They are not designed to maintain authoritative device identity over time. Reconstructing a device timeline from SIEM data requires significant custom correlation logic and assumes log retention that is not always guaranteed.",
  },
  {
    title: "Compliance Management Platforms",
    body: "Compliance management platforms structure policies, map controls, and organize audit workflows. They depend on external technical systems to supply device-level evidence. They do not perform discovery. They do not maintain device identity. They receive evidence; they do not generate it.",
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
        <Navbar />

        {/* Section 1: The Architectural Gap */}
        <section className="pt-40 pb-24 px-6 max-w-3xl mx-auto text-center">
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
        </section>

        {/* Section 2: Why Existing Tools Fall Short */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
          <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4">
            Structural Limitations
          </p>
          <h2 className="text-white text-3xl font-bold mb-12">
            Why existing tools cannot close this gap.
          </h2>
          {STRUCTURAL_LIMITATIONS.map((item) => (
            <div
              key={item.title}
              className="border-l-2 border-[#315798] pl-6 mb-12"
            >
              <h3 className="text-white font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.body}</p>
            </div>
          ))}
        </section>

        {/* Section 3: Why Local-First Matters */}
        <section className="py-24 px-6 max-w-3xl mx-auto text-center">
          <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4">
            Architectural Choice
          </p>
          <h2 className="text-white text-3xl font-bold mb-6">
            Why local-first is not optional.
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mt-4">
            Regulated environments require evidentiary control. Compliance data, including device identities, authorization records, and historical timelines, is
            not operational telemetry. It is evidence. The entity responsible for
            that evidence must control where it resides.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mt-4">
            Cloud dependency introduces exposure and trust boundaries that
            conflict with the evidentiary requirements of regulated environments.
            When compliance data transits or resides outside the regulated
            network, the chain of custody becomes difficult to establish and
            harder to defend.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mt-4">
            Zero outbound telemetry is not a marketing claim. It is an
            architectural constraint that follows directly from the evidentiary
            requirements of the environments Avera is designed to serve.
            Compliance data does not leave the network because it cannot.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mt-4">
            Local-first operation also ensures that the compliance record
            remains available during connectivity failures, network changes, and
            operational incidents. Precisely the conditions under which
            evidentiary continuity matters most.
          </p>
        </section>

        {/* Section 4: Chronic vs Acute Pain */}
        <section className="py-24 px-6 max-w-3xl mx-auto text-center">
          <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4">
            Why It Persists
          </p>
          <h2 className="text-white text-3xl font-bold mb-6">
            Reconstruction works. That is the problem.
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mt-4">
            Reconstruction is painful but survivable. Organizations complete
            their compliance cycles. Audits pass. The process repeats. Because it
            works, at significant cost, there is no forcing function to replace
            it.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mt-4">
            When compliance preparation consumes forty hours per clinic per
            cycle, the diagnosis is usually a staffing problem. The infrastructure
            is not questioned because the infrastructure is invisible. The pain
            is attributed to the people doing the work, not the architecture
            requiring it.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mt-4">
            Episodic tools persist because they are familiar, integrated into
            existing workflows, and sufficient for the minimum required output.
            The cost of reconstruction is distributed across staff time, absorbed
            as overhead, and never attributed to its architectural source.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mt-4">
            Continuous infrastructure removes the reconstruction cycle entirely.
            The evidentiary record exists before the audit begins. Preparation
            time collapses because there is nothing to reconstruct.
          </p>
        </section>

        {/* Section 5: What Makes Avera Different */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
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
                className="bg-[#0d1520] border border-[#315798]/20 rounded-2xl p-8"
              >
                <h3 className="text-white font-semibold text-lg mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Closing Statement */}
        <section className="py-24">
          <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center gap-8">
            <p className="text-white text-2xl font-light italic">
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
