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
        <Navbar />

        {/* Section 1 — Headline */}
        <section className="pt-40 pb-24 px-6 max-w-2xl mx-auto text-center">
          <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4">
            Pricing
          </p>
          <h1 className="text-white text-5xl font-bold">Pricing</h1>
          <p className="text-gray-400 text-lg mt-4">
            Capacity-based pricing for regulated environments.
          </p>
        </section>

        {/* Section 1.5 — Pilot Process */}
        <section className="pb-24 px-6 max-w-5xl mx-auto">
          <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-12 text-center">
            The Pilot Process
          </p>
          <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-0">
            {/* Step 1 */}
            <div className="flex-1 bg-[#0d1520] border border-[#315798]/20 rounded-2xl p-8 flex flex-col">
              <p className="text-[#7D95E0] text-sm font-mono mb-4">01</p>
              <h3 className="text-white text-lg font-semibold mb-3">Free 30-Day Pilot</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Deploy Avera on your network at no cost under a written pilot agreement. No commitment required.
              </p>
            </div>

            {/* Connector */}
            <div className="hidden md:flex items-center justify-center shrink-0 w-12">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#315798]/40">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="flex-1 bg-[#0d1520] border border-[#315798]/20 rounded-2xl p-8 flex flex-col">
              <p className="text-[#7D95E0] text-sm font-mono mb-4">02</p>
              <h3 className="text-white text-lg font-semibold mb-3">Review & Feedback</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We work with you through your first compliance cycle. You validate the evidence, we refine the implementation.
              </p>
            </div>

            {/* Connector */}
            <div className="hidden md:flex items-center justify-center shrink-0 w-12">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#315798]/40">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="flex-1 bg-[#0d1520] border border-[#315798]/20 rounded-2xl p-8 flex flex-col">
              <p className="text-[#7D95E0] text-sm font-mono mb-4">03</p>
              <h3 className="text-white text-lg font-semibold mb-3">Annual Subscription</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                If it works for you, resubscribe annually at founding partner pricing based on your device count.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — Tier Structure */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className="bg-[#0d1520] border border-[#315798]/20 rounded-2xl p-10"
              >
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
        <section className="py-24 px-6 max-w-2xl mx-auto text-center">
          <div className="border-t border-white/5 mb-24" />
          <p className="text-[#7D95E0] uppercase tracking-widest text-sm">
            Early Access
          </p>
          <h2 className="text-white text-2xl font-bold mt-4">
            Founding Deployment Cohort
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mt-6">
            Avera is currently onboarding a limited number of regulated
            environments under an early deployment program.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mt-4">
            Participating organizations receive 50% annual pricing in exchange
            for structured implementation feedback and real-world validation
            across audit cycles.
          </p>
          <p className="text-gray-400 text-sm mt-4">
            To confirm eligibility and begin evaluation:
          </p>
          <a
            href="mailto:jmylsg@averasystems.com"
            className="text-[#7D95E0] text-base font-mono mt-2 inline-block hover:underline"
          >
            jmylsg@averasystems.com
          </a>
        </section>

        {/* Section 4 — Closing Line */}
        <section className="py-24 px-6 text-center max-w-xl mx-auto">
          <p className="text-gray-400 text-base italic">
            Compliance infrastructure should scale with the network it protects.
          </p>
        </section>

        <Footer />
      </div>
    </div>
  );
}
