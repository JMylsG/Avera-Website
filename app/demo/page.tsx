"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fieldStyle: React.CSSProperties = {
  background: "#111520",
  border: "0.5px solid rgba(255,255,255,0.1)",
  borderRadius: 6,
  padding: "10px 12px",
  color: "#fff",
  width: "100%",
  fontSize: 13,
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  color: "rgba(255,255,255,0.45)",
  marginBottom: 6,
  display: "block",
};

const cardStyle: React.CSSProperties = {
  background: "#0d1018",
  border: "0.5px solid rgba(212,167,145,0.2)",
  borderRadius: 10,
  padding: "32px 36px",
};

export default function DemoPage() {
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [deviceCount, setDeviceCount] = useState("1–50");
  const [complianceProcess, setComplianceProcess] = useState("");
  const [honeypot, setHoneypot] = useState("");
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
        body: JSON.stringify({
          fullName,
          organization,
          email,
          deviceCount,
          complianceProcess,
          website: honeypot,
        }),
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
    <div
      className="flex flex-col"
      style={{ background: "#08090f", color: "#fff", minHeight: "100vh" }}
    >
      <Navbar />
      <main
        className="flex-1 w-full"
        style={{ display: "flex", justifyContent: "center", padding: "96px 40px 80px" }}
      >
        <div style={{ width: "100%", maxWidth: 560 }}>
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(125,149,224,0.55)",
              marginBottom: 14,
            }}
          >
            Request access
          </p>
          <h1
            style={{
              fontSize: 36,
              fontWeight: 500,
              color: "#fff",
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              marginBottom: 8,
            }}
          >
            Request a Demo
          </h1>
          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.32)",
              lineHeight: 1.7,
              marginBottom: 36,
            }}
          >
            Provide the information below. Requests are reviewed personally.
          </p>

          {submitted ? (
            <div style={cardStyle}>
              <p style={{ fontSize: 16, color: "#fff", lineHeight: 1.5 }}>
                Request received. We&apos;ll be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <div style={cardStyle}>
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
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    style={fieldStyle}
                    className="focus:border-[rgba(125,149,224,0.5)] transition-colors"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Organization Name</label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    required
                    style={fieldStyle}
                    className="focus:border-[rgba(125,149,224,0.5)] transition-colors"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Work Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={fieldStyle}
                    className="focus:border-[rgba(125,149,224,0.5)] transition-colors"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Estimated Device Count</label>
                  <select
                    value={deviceCount}
                    onChange={(e) => setDeviceCount(e.target.value)}
                    style={fieldStyle}
                    className="focus:border-[rgba(125,149,224,0.5)] transition-colors"
                  >
                    <option value="1–50">1–50</option>
                    <option value="51–150">51–150</option>
                    <option value="151–500">151–500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Current Compliance Process</label>
                  <textarea
                    value={complianceProcess}
                    onChange={(e) => setComplianceProcess(e.target.value)}
                    required
                    rows={4}
                    style={fieldStyle}
                    className="resize-none focus:border-[rgba(125,149,224,0.5)] transition-colors"
                  />
                </div>

                {error && <p className="text-sm text-red-400">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: "#315798",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 500,
                    padding: "12px 28px",
                    borderRadius: 7,
                    border: "none",
                    marginTop: 4,
                  }}
                  className="cursor-pointer hover:bg-[#7D95E0] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? "Submitting…" : "Submit Request"}
                </button>
              </form>
            </div>
          )}

          {!submitted && (
            <p
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.2)",
                marginTop: 16,
                textAlign: "center",
              }}
            >
              Requests are reviewed personally. Expect a response within 48 hours.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
