import Link from "next/link";
import Navbar from "../components/Navbar";
import ConstellationBackground from "../components/ConstellationBackground";
import Footer from "../components/Footer";

const PRICING_TIERS = [
  {
    tier: "Tier I",
    name: "Avera One",
    deviceRange: "1 – 150 devices",
  },
  {
    tier: "Tier II",
    name: "Avera Plus",
    deviceRange: "151 – 500 devices",
  },
  {
    tier: "Tier III",
    name: "Avera Pro",
    deviceRange: "501 – 1,000 devices",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <ConstellationBackground />
      <div className="relative z-[1]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/36 via-[#0a0f1a]/24 to-[#0a0f1a]/22" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_118%_74%_at_50%_10%,rgba(49,87,152,0.1),transparent_58%)]" />
        <Navbar />

        {/* Section 1 — Headline */}
        <section className="relative overflow-hidden px-6 pb-24 pt-40">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_74%_44%_at_50%_26%,rgba(49,87,152,0.2),transparent_72%)]" />
          <div className="pointer-events-none absolute left-1/2 top-[58%] h-[300px] w-[min(88vw,840px)] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[#7D95E0]/12" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/20 via-transparent to-[#0a0f1a]/42" />
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4">
              Pricing
            </p>
            <h1 className="text-white text-5xl font-bold">Pricing</h1>
            <p className="text-gray-400 text-lg mt-4">
              Capacity-based pricing for regulated environments.
            </p>
          </div>
        </section>

        {/* Section 1.5 — Pilot Process */}
        <section className="relative overflow-hidden pb-24 px-6 max-w-5xl mx-auto">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_82%_52%_at_50%_54%,rgba(49,87,152,0.12),transparent_74%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/18 via-transparent to-[#0a0f1a]/34" />
          <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-12 text-center">
            The Pilot Process
          </p>
          <div className="relative rounded-[28px] border border-[#315798]/20 bg-[#0a111a]/45 p-6 md:p-8">
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[320px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[#315798]/10 md:block" />
            <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-0">
            {/* Step 1 */}
            <div
              className="relative flex-1 bg-[#0d1520] rounded-2xl p-8 flex flex-col"
              style={{ border: "1px solid rgba(212, 167, 145, 0.35)" }}
            >
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#315798]/35 to-transparent" />
              <p className="text-[#D4A791] text-sm font-mono mb-4">01</p>
              <h3 className="text-white text-lg font-semibold mb-3">Free 30-Day Pilot</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Deploy Avera on your network at no cost under a written pilot agreement. No commitment required.
              </p>
            </div>

            {/* Connector */}
            <div className="hidden md:flex items-center justify-center shrink-0 w-12">
              <div className="h-px w-8 bg-[#315798]/30" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#315798]/40">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 2 */}
            <div
              className="relative flex-1 bg-[#0d1520] rounded-2xl p-8 flex flex-col"
              style={{ border: "1px solid rgba(212, 167, 145, 0.35)" }}
            >
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#315798]/35 to-transparent" />
              <p className="text-[#D4A791] text-sm font-mono mb-4">02</p>
              <h3 className="text-white text-lg font-semibold mb-3">Review & Feedback</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We work with you through your first compliance cycle. You validate the evidence, we refine the implementation.
              </p>
            </div>

            {/* Connector */}
            <div className="hidden md:flex items-center justify-center shrink-0 w-12">
              <div className="h-px w-8 bg-[#315798]/30" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#315798]/40">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 3 */}
            <div
              className="relative flex-1 bg-[#0d1520] rounded-2xl p-8 flex flex-col"
              style={{ border: "1px solid rgba(212, 167, 145, 0.35)" }}
            >
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#315798]/35 to-transparent" />
              <p className="text-[#D4A791] text-sm font-mono mb-4">03</p>
              <h3 className="text-white text-lg font-semibold mb-3">Annual Subscription</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                If it works for you, resubscribe annually at founding partner pricing based on your device count.
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* Section 2 — Tier Structure */}
        <section className="relative overflow-hidden py-24 px-6 max-w-4xl mx-auto">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_76%_46%_at_50%_50%,rgba(49,87,152,0.12),transparent_74%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/16 via-transparent to-[#0a0f1a]/30" />
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[320px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[#315798]/10 md:block" />
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className="relative bg-[#0d1520] rounded-2xl p-10 shadow-[0_12px_36px_rgba(0,0,0,0.22)]"
                style={{ border: "1px solid rgba(212, 167, 145, 0.35)" }}
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#315798]/38 to-transparent" />
                <p className="text-[#7D95E0] text-sm uppercase tracking-widest mb-4">
                  {tier.tier}
                </p>
                <h2 className="text-white text-2xl font-bold">{tier.name}</h2>
                <p className="text-gray-400 text-sm mt-2">{tier.deviceRange}</p>
                <div className="border-t border-white/5 my-6" />
                <p className="text-[#7D95E0] text-sm mb-8">Pilot pricing available</p>
                <Link href="/apply" className="block w-full mt-6">
                  <button className="w-full border border-[#315798] bg-transparent text-white hover:bg-[#315798] rounded-full px-6 py-3 text-sm transition-colors text-center cursor-pointer">
                    Request Access
                  </button>
                </Link>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm text-center max-w-2xl mx-auto mt-12 leading-relaxed">
            All tiers include the full Avera compliance system of record,
            including persistent device identity, continuous monitoring,
            immutable event timelines, explainable classification, and
            local-first operation. No feature gating. No comparison chart.
          </p>
        </section>

        {/* Section 3 — Founding Deployment Cohort */}
        <section className="relative overflow-hidden py-24 px-6 max-w-2xl mx-auto text-center">
          <div className="border-t border-white/5 mb-24" />
          <div className="relative rounded-[28px] border border-[rgba(212,167,145,0.28)] bg-[#110f12]/70 px-8 py-12">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[min(88vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[#315798]/12" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_52%,rgba(49,87,152,0.12),transparent_74%)]" />
            <p className="relative text-[#7D95E0] uppercase tracking-widest text-sm">
              Early Access
            </p>
            <h2 className="relative text-white text-2xl font-bold mt-4">
              <span className="text-[#D4A791]">Founding</span> Deployment Cohort
            </h2>
            <p className="relative text-gray-400 text-base leading-relaxed mt-6">
              Pilot deployments are free for 30 days under a written agreement.
              Organizations that continue are offered founding partner pricing,
              determined by device count and locked in for the life of the
              relationship.
            </p>
            <p className="relative text-gray-400 text-sm mt-4">
              To confirm eligibility and begin evaluation:
            </p>
            <a
              href="mailto:jmylsg@averasystems.com"
              className="relative text-[#7D95E0] text-base font-mono mt-2 inline-block hover:underline"
            >
              jmylsg@averasystems.com
            </a>
          </div>
        </section>

        {/* Section 4 — Closing Line */}
        <section className="relative overflow-hidden py-24 px-6 text-center max-w-xl mx-auto">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_36%_at_50%_56%,rgba(49,87,152,0.1),transparent_74%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/0 via-[#0a0f1a]/8 to-[#0a0f1a]/14" />
          <p className="relative text-[rgba(212,167,145,0.7)] text-base italic">
            Compliance infrastructure should scale with the network it protects.
          </p>
        </section>

        <Footer />
      </div>
    </div>
  );
}
