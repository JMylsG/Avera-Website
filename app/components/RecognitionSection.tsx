"use client";

import { useEffect, useRef, useState } from "react";

export default function RecognitionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/10 via-[#0a0f1a]/45 to-[#0a0f1a]/25" />
      <div
        className={`relative w-full max-w-3xl rounded-[1.75rem] border border-[#7D95E0]/15 bg-[#0a0f1a]/55 px-6 py-10 text-center transition-all duration-[600ms] ease-out md:px-10 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#7D95E0]/35 to-transparent" />
        <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
          The reason you rebuild every quarter isn&apos;t effort. It&apos;s{" "}
          <span className="text-[#D4A791]">architecture</span>.
        </h2>

        <p className="mx-auto mt-6 max-w-[560px] text-base leading-relaxed text-white/60">
          RMMs, SIEMs, scanners. Every tool you&apos;re running was built to
          answer: what&apos;s happening now. None of them were built to answer:
          what happened, and can you prove it. That&apos;s not a workflow gap.
          That&apos;s a structural one.
        </p>

        <blockquote className="mx-auto mt-12 max-w-[500px] rounded-xl border border-[rgba(212,167,145,0.35)] bg-[#1a120e]/45 px-5 py-4 text-left">
          <p className="text-base italic leading-relaxed text-white/80">
            &quot;We spend two weeks every quarter doing something we&apos;ve
            already done three times before. Same clinics, same process, same
            spreadsheets. The only thing that changes is the date on the
            report.&quot;
          </p>
          <p className="mt-2 text-sm font-medium text-[#D4A791]">
            MSP owner, 12 healthcare practices
          </p>
        </blockquote>
      </div>
    </section>
  );
}
