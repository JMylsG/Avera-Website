"use client";

import { useEffect, useRef, useState } from "react";

const STAGGER_DELAY_MS = 200;
const COUNT_DURATION_MS = 2500;

const STATS = [
  {
    target: 137,
    prefix: "$",
    suffix: "M",
    label: "in cumulative HIPAA penalties since enforcement began",
    highlight: false,
  },
  {
    target: 279,
    prefix: "",
    suffix: " days",
    label: "average breach lifecycle from identification to containment",
    highlight: false,
  },
  {
    target: 40,
    prefix: "",
    suffix: "+",
    suffix2: " hrs",
    label: "spent per clinic rebuilding compliance records every audit cycle",
    highlight: false,
  },
  {
    target: 408,
    prefix: "$",
    suffix: "K",
    label: "annual compliance cost for an MSP managing 15 clients",
    highlight: false,
  },
  {
    target: 60,
    prefix: "",
    suffix: " seconds",
    label:
      "What took weeks to rebuild, Avera queries in seconds.",
    highlight: true,
  },
];

function useCountUp(target: number, isActive: boolean, startTime: number) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!isActive) return;

    const startAnim = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / COUNT_DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      setValue(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(startAnim);
      } else {
        setValue(target);
      }
    };

    rafRef.current = requestAnimationFrame(startAnim);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, isActive, startTime]);

  return value;
}

function StatCard({
  stat,
  index,
  isVisible,
  startTime,
}: {
  stat: (typeof STATS)[0];
  index: number;
  isVisible: boolean;
  startTime: number;
}) {
  const value = useCountUp(stat.target, isVisible, startTime);

  const formatNumber = () => {
    const formatted = value.toLocaleString();
    if (stat.suffix2) {
      return `${formatted}${stat.suffix}${stat.suffix2}`;
    }
    return `${stat.prefix}${formatted}${stat.suffix}`;
  };

  return (
    <div
      className={`relative flex flex-col items-center rounded-2xl border p-6 text-center transition-all duration-500 ease-out md:p-8 ${
        stat.highlight
          ? "border-[rgba(212,167,145,0.35)] bg-[#1a120e]/90"
          : "border-[#315798]/20 bg-[#0d0a0a]/85"
      } ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        transitionDelay: isVisible ? `${index * STAGGER_DELAY_MS}ms` : "0ms",
      }}
    >
      <div
        className={`pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent to-transparent ${
          stat.highlight ? "via-[#D4A791]/40" : "via-[#315798]/40"
        }`}
      />
      <p
        className={`text-5xl font-bold leading-none tracking-tight md:text-6xl ${
          stat.highlight ? "text-[#D4A791]" : "text-white"
        }`}
      >
        {formatNumber()}
      </p>
      <p
        className={`mt-2 max-w-xs text-sm ${
          stat.highlight ? "text-[rgba(212,167,145,0.75)]" : "text-white/55"
        }`}
      >
        {stat.label}
      </p>
    </div>
  );
}

export default function ScrollytellingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [animationStartTime, setAnimationStartTime] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            setSectionVisible(true);
            setAnimationStartTime(performance.now());
            STATS.forEach((_, i) => {
              setTimeout(() => {
                setVisibleIndices((prev) => new Set([...prev, i]));
              }, i * STAGGER_DELAY_MS);
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center bg-transparent px-6 pb-24 pt-48"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/25 via-[#0a0f1a]/10 to-[#0a0f1a]/45" />
      <p
        className={`relative mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#7D95E0] transition-opacity duration-500 ease-out ${
          sectionVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        The Cost of Reconstruction
      </p>
      <p
        className={`relative mb-12 text-center text-xl text-white/60 transition-opacity duration-500 ease-out ${
          sectionVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        What the wrong architecture costs.{" "}
        <span className="text-[#D4A791]">Every quarter.</span>
      </p>

      <div className="relative w-full max-w-6xl rounded-[1.9rem] border border-[#7D95E0]/15 bg-[#0a0f1a]/45 p-6 md:p-10">
        <div className="mb-8 border-b border-[#315798]/20 pb-4 text-left">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">
            Evidence presentation
          </p>
          <p className="mt-2 text-sm text-white/60">
            Baseline costs vs Avera record continuity outcome
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {/* Top row: 3 stats */}
          {STATS.slice(0, 3).map((stat, i) => (
            <StatCard
              key={i}
              stat={stat}
              index={i}
              isVisible={visibleIndices.has(i)}
              startTime={animationStartTime + i * STAGGER_DELAY_MS}
            />
          ))}
          {/* Bottom row: 2 stats centered */}
          <div className="flex flex-col gap-6 md:col-span-3 md:flex-row md:justify-center md:gap-10">
            {STATS.slice(3, 5).map((stat, i) => (
              <div key={i + 3} className="w-full md:max-w-[320px]">
                <StatCard
                  stat={stat}
                  index={i + 3}
                  isVisible={visibleIndices.has(i + 3)}
                  startTime={animationStartTime + (i + 3) * STAGGER_DELAY_MS}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
