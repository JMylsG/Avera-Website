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
        <HeroSection onBreakTrigger={() => setBreakTriggered(true)} />
        <RecognitionSection />
        <DifferentiationSection />
        <ProofSection />
        <CommitmentSection />
      </main>
      <div className="relative z-[1]">
        <Footer />
      </div>
    </div>
  );
}
