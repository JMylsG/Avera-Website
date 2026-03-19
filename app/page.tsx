"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import LedgerNetworkBackground from "./components/ConstellationBackground";
import HeroSection from "./components/HeroSection";
import RecognitionSection from "./components/RecognitionSection";
import DifferentiationSection from "./components/DifferentiationSection";
import ProofSection from "./components/ProofSection";
import CommitmentSection from "./components/CommitmentSection";
import Footer from "./components/Footer";

export default function Home() {
  const [breakTriggered, setBreakTriggered] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <LedgerNetworkBackground triggerBreak={breakTriggered} autoRestore={false} />
      <Navbar />
      <main className="relative z-[1]">
        <section className="relative isolate">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_42%_at_50%_34%,rgba(49,87,152,0.14),transparent_64%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/0 via-[#0a0f1a]/26 to-[#0a0f1a]/56" />
          <HeroSection onBreakTrigger={() => setBreakTriggered(true)} />
        </section>

        <section className="relative isolate">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_68%_34%_at_50%_50%,rgba(49,87,152,0.05),transparent_70%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[#0a0f1a]/58" />
          <RecognitionSection />
        </section>

        <section className="relative isolate">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_66%_34%_at_50%_54%,rgba(49,87,152,0.07),transparent_72%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/60 via-[#0a0f1a]/38 to-[#0a0f1a]/48" />
          <DifferentiationSection />
        </section>

        <section className="relative isolate">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_62%_30%_at_50%_56%,rgba(49,87,152,0.08),transparent_68%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/40 via-[#0a0f1a]/20 to-[#0a0f1a]/44" />
          <ProofSection />
        </section>

        <section className="relative isolate">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_74%_34%_at_50%_58%,rgba(49,87,152,0.09),transparent_72%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/40 via-[#0a0f1a]/60 to-[#0a0f1a]/82" />
          <CommitmentSection />
        </section>
      </main>
      <div className="relative z-[1]">
        <Footer />
      </div>
    </div>
  );
}
