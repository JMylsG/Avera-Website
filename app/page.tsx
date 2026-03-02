import Link from "next/link";
import Navbar from "./components/Navbar";
import ConstellationBackground from "./components/ConstellationBackground";
import ScrollytellingSection from "./components/ScrollytellingSection";
import BeforeAfterSection from "./components/BeforeAfterSection";
import DeviceDiscoveryTimeline from "./components/DeviceDiscoveryTimeline";
import WhenItMattersSection from "./components/WhenItMattersSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <ConstellationBackground />
      <main className="relative z-[1] min-h-screen bg-transparent flex flex-col items-center justify-center text-center px-6">
      <Navbar />

      {/* Hero Section */}
      <div className="relative flex-1 w-full flex items-center justify-center pt-40">
        <section className="relative z-10 max-w-4xl mx-auto">
        <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-6">
          Compliance Infrastructure
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-8">
          Every device. Verified. Always.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Continuous, defensible device history. Without reconstruction.
        </p>
        <Link href="/demo" className="bg-[#315798] text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-[#7D95E0] transition-colors duration-300">
          Request a Demo
        </Link>
      </section>
      </div>

      <ScrollytellingSection />
      <BeforeAfterSection />
      <DeviceDiscoveryTimeline />
      <WhenItMattersSection />
      <CTASection />
      </main>
      <div className="relative z-[1]">
        <Footer />
      </div>
    </div>
  );
}