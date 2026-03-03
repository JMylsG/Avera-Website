"use client";

import { useState } from "react";
import ConstellationBackground from "../components/ConstellationBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inputClass =
  "bg-[#0d1520] border border-[#315798]/30 focus:border-[#7D95E0] focus:outline-none rounded-md px-4 py-2.5 text-white w-full transition-colors placeholder:text-gray-600";

export default function DemoPage() {
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [deviceCount, setDeviceCount] = useState("1–50");
  const [complianceProcess, setComplianceProcess] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, organization, email, deviceCount, complianceProcess }),
      });

      if (res.ok) {
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

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <ConstellationBackground />
      <div className="relative z-[1] flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-6 pt-32 pb-20">
          <div className="w-full max-w-xl">
            <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-4">
              Request Access
            </p>
            <h1 className="text-white text-4xl font-bold mb-3">Request a Demo</h1>
            <p className="text-gray-400 text-sm mb-10">
              Provide the information below. Requests are reviewed personally.
            </p>

            {submitted ? (
              <div className="rounded-2xl border border-[#315798]/30 bg-[#0d1520] p-8">
                <p className="text-white text-base">
                  Request received. We&apos;ll be in touch within 48 hours.
                </p>
              </div>
            ) : (
              <div className="rounded-2xl border border-[#315798]/30 bg-[#0d1520] p-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-sm">Full Name</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-sm">Organization Name</label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-sm">Work Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-sm">Estimated Device Count</label>
                    <select
                      value={deviceCount}
                      onChange={(e) => setDeviceCount(e.target.value)}
                      className={inputClass}
                    >
                      <option value="1–50">1–50</option>
                      <option value="51–150">51–150</option>
                      <option value="151–500">151–500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-sm">Current Compliance Process</label>
                    <textarea
                      value={complianceProcess}
                      onChange={(e) => setComplianceProcess(e.target.value)}
                      required
                      rows={4}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {error && <p className="text-red-400 text-sm">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#315798] hover:bg-[#7D95E0] hover:shadow-[0_0_20px_rgba(125,149,224,0.35)] text-white font-semibold rounded-full px-8 py-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed self-start mt-1"
                  >
                    {loading ? "Submitting…" : "Submit Request"}
                  </button>
                </form>
              </div>
            )}

            {!submitted && (
              <p className="text-gray-500 text-sm mt-6">
                Requests are reviewed personally. Expect a response within 48 hours.
              </p>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
