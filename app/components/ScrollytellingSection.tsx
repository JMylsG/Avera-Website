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
      "Avera's initial device discovery time — replacing all of the above",
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

  const numberStyle = stat.highlight ? { color: "#D4A791" } : {};
  const labelStyle = stat.highlight
    ? { color: "rgba(212,167,145,0.7)" }
    : {};

  return (
    <div
      className={`flex flex-col items-center text-center transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        transitionDelay: isVisible ? `${index * STAGGER_DELAY_MS}ms` : "0ms",
      }}
    >
      <p
        className={`text-6xl md:text-7xl font-bold leading-none tracking-tight ${stat.highlight ? "" : "text-white"}`}
        style={numberStyle}
      >
        {formatNumber()}
      </p>
      <p
        className={`text-sm mt-2 max-w-xs ${stat.highlight ? "" : "text-gray-400"}`}
        style={labelStyle}
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
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            setSectionVisible(true);
            startTimeRef.current = performance.now();
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
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-48 pb-24 bg-transparent"
    >
      <p
        className={`text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4 transition-opacity duration-500 ease-out ${
          sectionVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        The Cost of Reconstruction
      </p>
      <p
        className={`text-xl text-gray-400 mb-12 transition-opacity duration-500 ease-out ${
          sectionVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        What the wrong architecture costs.{" "}
        <span style={{ color: "#D4A791" }}>Every quarter.</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 w-full max-w-5xl mx-auto">
        {/* Top row: 3 stats */}
        {STATS.slice(0, 3).map((stat, i) => (
          <StatCard
            key={i}
            stat={stat}
            index={i}
            isVisible={visibleIndices.has(i)}
            startTime={startTimeRef.current + i * STAGGER_DELAY_MS}
          />
        ))}
        {/* Bottom row: 2 stats centered */}
        <div className="md:col-span-3 flex flex-col md:flex-row md:justify-center md:gap-24 gap-12">
          {STATS.slice(3, 5).map((stat, i) => (
            <StatCard
              key={i + 3}
              stat={stat}
              index={i + 3}
              isVisible={visibleIndices.has(i + 3)}
              startTime={startTimeRef.current + (i + 3) * STAGGER_DELAY_MS}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
