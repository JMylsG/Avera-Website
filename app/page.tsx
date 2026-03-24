"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import RecognitionSection from "./components/RecognitionSection";
import DifferentiationSection from "./components/DifferentiationSection";
import ProofSection from "./components/ProofSection";
import CommitmentSection from "./components/CommitmentSection";
import Footer from "./components/Footer";

const MIN_OPACITY = 0.45;
const FADE_DOWN_START_SEC = 7.5;
const FADE_DOWN_DURATION_SEC = 1.5;
const SEEK_AT_SEC = 9.0;
const FADE_UP_DURATION_SEC = 1.5;
const RESET_IS_FADING_AT_SEC = 1.0;
const POLL_MS = 100;

function computeOpacity(t: number, justSeeked: boolean): number {
  if (justSeeked && t < FADE_UP_DURATION_SEC) {
    return (
      MIN_OPACITY + (1 - MIN_OPACITY) * (t / FADE_UP_DURATION_SEC)
    );
  }
  if (t < FADE_DOWN_START_SEC) return 1;
  if (t < SEEK_AT_SEC) {
    return (
      1 -
      (1 - MIN_OPACITY) *
        ((t - FADE_DOWN_START_SEC) / FADE_DOWN_DURATION_SEC)
    );
  }
  return MIN_OPACITY;
}

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isFadingRef = useRef(false);
  const justSeekedRef = useRef(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    void videoRef.current?.play();
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      const el = videoRef.current;
      if (!el) return;
      let t = el.currentTime;

      if (t >= SEEK_AT_SEC) {
        el.currentTime = 0;
        justSeekedRef.current = true;
        void el.play();
        t = el.currentTime;
      }

      if (justSeekedRef.current && t >= RESET_IS_FADING_AT_SEC) {
        isFadingRef.current = false;
      }

      if (!isFadingRef.current && t >= FADE_DOWN_START_SEC) {
        isFadingRef.current = true;
      }

      if (justSeekedRef.current && t >= FADE_UP_DURATION_SEC) {
        justSeekedRef.current = false;
      }

      setOpacity(computeOpacity(t, justSeekedRef.current));
    }, POLL_MS);
    return () => {
      window.clearInterval(id);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <video
        ref={videoRef}
        aria-hidden
        autoPlay
        className="pointer-events-none fixed inset-0 z-0 h-full w-full min-h-full min-w-full object-cover transition-opacity duration-300 ease-in-out"
        loop={false}
        muted
        playsInline
        src="/Avera-cloud-video.mp4"
        style={{ opacity }}
      />
      <Navbar />
      <main className="relative z-[1]">
        <section className="relative isolate">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_42%_at_50%_34%,rgba(49,87,152,0.14),transparent_64%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/0 via-[#0a0f1a]/26 to-[#0a0f1a]/56" />
          <HeroSection onBreakTrigger={() => {}} />
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
