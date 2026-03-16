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
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
    >
      <div
        className="max-w-[680px] mx-auto text-center transition-[opacity,transform] duration-[600ms] ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          The reason you rebuild every quarter isn&apos;t effort. It&apos;s{" "}
          <span style={{ color: "#D4A791" }}>architecture</span>.
        </h2>

        <p
          className="text-base mt-6 max-w-[520px] mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          RMMs, SIEMs, scanners. Every tool you&apos;re running was built to
          answer: what&apos;s happening now. None of them were built to answer:
          what happened, and can you prove it. That&apos;s not a workflow gap.
          That&apos;s a structural one.
        </p>

        <blockquote
          className="mt-12 pl-6 text-left max-w-[480px] mx-auto"
          style={{ borderLeft: "3px solid #D4A791" }}
        >
          <p
            className="text-base italic leading-relaxed"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            &quot;We spend two weeks every quarter doing something we&apos;ve
            already done three times before. Same clinics, same process, same
            spreadsheets. The only thing that changes is the date on the
            report.&quot;
          </p>
          <p className="text-sm mt-2" style={{ color: "#D4A791", fontWeight: 500 }}>
            MSP owner, 12 healthcare practices
          </p>
        </blockquote>
      </div>
    </section>
  );
}
