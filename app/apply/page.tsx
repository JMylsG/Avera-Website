"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import Navbar from "../components/Navbar";
import ConstellationBackground from "../components/ConstellationBackground";
import Footer from "../components/Footer";

const inputClass =
  "bg-[#111827] border border-white/10 focus:border-[#7D95E0] focus:outline-none rounded-md px-4 py-2 text-white w-full transition-colors";

export default function ApplyPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [sessionLoading, setSessionLoading] = useState(true);
  const [deviceAnswer, setDeviceAnswer] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [alreadyApplied, setAlreadyApplied] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("avera_applied") === "true") {
      setAlreadyApplied(true);
    }

    const supabase = createClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUserEmail(session.user.email ?? "");
        setSessionLoading(false);
      } else {
        router.push("/signin");
      }
    });
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, deviceAnswer, website: honeypot }),
      });

      if (res.ok) {
        localStorage.setItem("avera_applied", "true");
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (sessionLoading) return null;

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <ConstellationBackground />
      <div className="relative z-[1] flex flex-col min-h-screen">
        <Navbar />
        <main className="pt-24 pb-16 px-6 flex-1 flex flex-col">
          {alreadyApplied ? (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-[#7D95E0] text-base text-center">
                You&apos;ve already applied. We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
          <div className="mx-auto max-w-xl w-full">
            <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4">
              Early Deployment Cohort
            </p>
            <h1 className="text-white text-4xl font-bold mb-3">
              You&apos;re almost in.
            </h1>
            <p className="text-gray-400 text-sm mb-10">
              Limited seats. 30-day free pilot program. Early partners receive founding partner pricing based on device count.
            </p>

            {submitted ? (
              <p className="text-white text-base">
                You&apos;re on the list. We&apos;ll reach out within 48 hours.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-400 text-sm">Email</label>
                  <input
                    type="email"
                    value={userEmail}
                    readOnly
                    className={`${inputClass} opacity-60 cursor-default`}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-400 text-sm">
                    How many devices are you currently managing?
                  </label>
                  <textarea
                    value={deviceAnswer}
                    onChange={(e) => setDeviceAnswer(e.target.value)}
                    required
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#315798] hover:bg-[#7D95E0] text-white font-medium rounded-full px-8 py-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed self-start"
                >
                  {loading ? "Submitting…" : "Submit Application"}
                </button>
              </form>
            )}
          </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
