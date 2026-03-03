"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import ConstellationBackground from "../components/ConstellationBackground";
import Footer from "../components/Footer";

const STAGGER_DELAY_MS = 150;

const inputClass =
  "bg-[#111827] border border-white/10 focus:border-[#7D95E0] focus:outline-none rounded-md px-4 py-2 text-white w-full transition-colors";

export default function ContactPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleBlocks, setVisibleBlocks] = useState<number[]>([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const section = contentRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            [0, 1].forEach((i) => {
              setTimeout(() => {
                setVisibleBlocks((prev) => [...prev, i]);
              }, i * STAGGER_DELAY_MS);
            });
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasAnimated]);

  function fadeStyle(blockIndex: number): React.CSSProperties {
    const visible = visibleBlocks.includes(blockIndex);
    return {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(16px)",
      transition: "opacity 550ms ease-out, transform 550ms ease-out",
    };
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, organization, message }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please email us directly.");
      }
    } catch {
      setError("Something went wrong. Please email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <ConstellationBackground />
      <div className="relative z-[1]">
        <Navbar />
        <main className="pt-24">
          <section className="py-20 px-6 text-center max-w-3xl mx-auto">
            <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-6">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Let&apos;s talk.
            </h1>
            <p className="text-gray-400 text-lg">
              Whether you&apos;re an MSP, a practice manager, or just curious — we&apos;re
              easy to reach.
            </p>
          </section>

          <div ref={contentRef}>
            <section className="py-20 px-6">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-4" style={fadeStyle(0)}>
                  <div className="bg-[#0d1520] border border-[#315798]/20 rounded-2xl p-6 flex flex-col gap-1">
                    <p className="text-[#7D95E0] text-xs font-semibold tracking-widest uppercase">
                      Email
                    </p>
                    <a
                      href="mailto:jmylsg@averasystems.com"
                      className="text-white text-sm hover:text-[#7D95E0] transition-colors"
                    >
                      jmylsg@averasystems.com
                    </a>
                  </div>

                  <div className="bg-[#0d1520] border border-[#315798]/20 rounded-2xl p-6 flex flex-col gap-1">
                    <p className="text-[#7D95E0] text-xs font-semibold tracking-widest uppercase">
                      Response Time
                    </p>
                    <p className="text-white text-sm">Within 24 hours</p>
                  </div>
                </div>

                <div style={fadeStyle(1)}>
                  {submitted ? (
                    <p className="text-white text-base">
                      Message sent. We&apos;ll be in touch within 24 hours.
                    </p>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-gray-400 text-sm">Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className={inputClass}
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-gray-400 text-sm">Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className={inputClass}
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-gray-400 text-sm">
                          Organization{" "}
                          <span className="text-gray-600">(optional)</span>
                        </label>
                        <input
                          type="text"
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          className={inputClass}
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-gray-400 text-sm">Message</label>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                          rows={4}
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      {error && (
                        <p className="text-red-400 text-sm">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="bg-[#315798] hover:bg-[#7D95E0] text-white font-medium rounded-full px-8 py-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed self-start"
                      >
                        {loading ? "Sending…" : "Send Message"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
