"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  color: "rgba(255,255,255,0.45)",
  marginBottom: 6,
  display: "block",
};

const fieldStyle: React.CSSProperties = {
  background: "#111520",
  border: "0.5px solid rgba(255,255,255,0.1)",
  borderRadius: 6,
  padding: "10px 12px",
  color: "#fff",
  width: "100%",
  fontSize: 13,
  outline: "none",
  marginBottom: 16,
};

const cardStyle: React.CSSProperties = {
  background: "#0d1018",
  border: "0.5px solid rgba(212,167,145,0.2)",
  borderRadius: 8,
  padding: "20px 24px",
  marginBottom: 12,
};

const cardLabelStyle: React.CSSProperties = {
  fontSize: 9,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: "rgba(125,149,224,0.55)",
  marginBottom: 8,
};

const cardValueStyle: React.CSSProperties = {
  fontSize: 13,
  color: "rgba(255,255,255,0.7)",
};

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, organization, message, website: honeypot }),
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
    <div className="min-h-screen" style={{ background: "#08090f" }}>
      <div className="relative z-[1]">
        <Navbar />
        <main className="pt-24">
          <section
            style={{
              padding: "96px 40px 64px",
              borderBottom: "0.5px solid rgba(255,255,255,0.06)",
            }}
          >
            <p
              style={{
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(125,149,224,0.55)",
                marginBottom: 14,
              }}
            >
              Contact
            </p>
            <h1
              style={{
                fontSize: 44,
                fontWeight: 500,
                color: "#fff",
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                marginBottom: 10,
              }}
            >
              Let&apos;s talk.
            </h1>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.32)",
                lineHeight: 1.7,
                maxWidth: 460,
              }}
            >
              Whether you&apos;re an MSP, a practice manager, or just curious. We&apos;re easy
              to reach.
            </p>
          </section>

          <section
            className="mx-auto grid w-full max-w-[1100px] grid-cols-1 md:grid-cols-2"
            style={{
              padding: "64px 40px",
              gap: 64,
              maxWidth: 1100,
              margin: "0 auto",
            }}
          >
            <div>
              <div style={cardStyle}>
                <p style={cardLabelStyle}>Email</p>
                <a
                  href="mailto:jmylsg@averasystems.com"
                  style={cardValueStyle}
                  className="block transition-colors hover:text-[#7D95E0]"
                >
                  jmylsg@averasystems.com
                </a>
              </div>

              <div style={cardStyle}>
                <p style={cardLabelStyle}>Response Time</p>
                <p style={cardValueStyle}>Within 24 hours</p>
              </div>
            </div>

            <div>
              {submitted ? (
                <p style={{ fontSize: 16, color: "#fff" }}>
                  Message sent. We&apos;ll be in touch within 24 hours.
                </p>
              ) : (
                <form onSubmit={handleSubmit}>
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
                    <label style={labelStyle}>Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      style={fieldStyle}
                      className="focus:border-[rgba(125,149,224,0.5)] transition-colors"
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Email</label>
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
                    <label style={labelStyle}>
                      Organization{" "}
                      <span className="text-gray-600">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      style={fieldStyle}
                      className="focus:border-[rgba(125,149,224,0.5)] transition-colors"
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
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
                    className="cursor-pointer transition-colors duration-300 hover:bg-[#7D95E0] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {loading ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
