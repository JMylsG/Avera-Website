"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FAQ_ITEMS_LEFT = [
  {
    question: "Where is all the data stored?",
    answer:
      "Everything Avera collects stays on the machine running Avera: inside a local SQLite database on your network. No data is transmitted to Avera Systems, no cloud storage exists for compliance records, and the system is fully capable of operating air-gapped. Your evidence never leaves your premises.",
  },
  {
    question: "Is Avera farming our data?",
    answer:
      "No. Avera performs no outbound telemetry, sends no compliance data externally, and has no backend service capable of accessing your records. The passive discovery it performs is entirely contained within your local network. Avera sees your devices. Avera Systems does not.",
  },
  {
    question:
      "How does passive discovery work: what is actually happening on the network?",
    answer:
      "Avera uses four standard protocols your network already speaks: ARP (how devices identify themselves at the hardware level), mDNS (how printers and Apple devices advertise services), SSDP (how smart devices announce themselves), and NetBIOS (how Windows machines share names). It does not use nmap or any external scanning tool. The primary method, ARP, is identical to what your router does continuously. Once a device is found, Avera checks 20 common ports to understand the device type. No application-layer probes are sent. Printers won't print. No device takes action as a result of discovery.",
  },
  {
    question: "Can someone tamper with the compliance records?",
    answer:
      "Avera's evidence ledger is append-only and SHA-256 hash-chained. Every event is cryptographically linked to the one before it. Database-level triggers reject any attempt to update or delete a ledger record. Chain integrity is verified at startup and on demand. If the chain is broken, Avera reports it.",
  },
  {
    question: "Does Avera do vulnerability scanning or penetration testing?",
    answer:
      "No. Avera is an inventory and compliance evidence tool, not a security scanner. It identifies what devices are on the network and maintains a defensible record of their presence and authorization. It does not probe for vulnerabilities, test credentials, or perform any action that modifies device state.",
  },
  {
    question: "Who can access the compliance records?",
    answer:
      "Access is controlled by role-based authentication local to the Avera installation. WebAuthn is used for authentication. No external party, including Avera Systems, has access to your compliance records. The system supports Admin, Technician, Viewer, and Security roles with differentiated permissions.",
  },
  {
    question: "What happens if the machine running Avera goes offline?",
    answer:
      "Avera is designed for this. Because it operates entirely on-premise, it continues functioning without any internet connection. Discovery, evidence logging, and record generation all operate locally. The compliance record does not depend on external connectivity.",
  },
  {
    question: "Does Avera replace our RMM or existing security tools?",
    answer:
      "No. Avera is a compliance system of record: it sits alongside your existing tools, not in place of them. RMMs handle patch management and remote access. Security tools handle threat detection. Avera handles the evidentiary layer: continuous device identity, approval workflows, and defensible historical records that neither category of tool was built to maintain.",
  },
];

const FAQ_ITEMS_RIGHT = [
  {
    question: "Does this software access our patient records?",
    answer:
      "No. Avera does not access, read, or transmit any patient or clinical data. It observes devices on the network at the network level: which devices are present, when they connected, and whether they were authorized. Your EHR, practice management system, and patient records remain completely separate.",
  },
  {
    question: "Who can see what is on our network?",
    answer:
      "Access is controlled by roles you configure locally. Admin, Technician, Viewer, and Security roles have different permissions. No external party, including Avera Systems, has access. You decide who sees what.",
  },
  {
    question: "What happens if our IT company stops working with us?",
    answer:
      "Your data stays on your network. Avera runs on-premise. If you change IT providers, your compliance records remain with you. There is no cloud lock-in. As the practice owner, you hold the Authority role. You can revoke your IT team's access instantly from your own dashboard: no calls, no waiting, no dependency on them to do it for you. The new IT team can take over management of the same installation.",
  },
  {
    question: "Does this overlap with what our IT team already does?",
    answer:
      "Most IT tools track devices for maintenance: patching, remote access, uptime. Avera tracks them for compliance. It creates a defensible record of what was on your network, when it was authorized, and who approved it. That record is what HIPAA auditors and cyber insurers ask for. The two serve different purposes.",
  },
  {
    question: "Is this going to slow down our network?",
    answer:
      "No. Avera uses passive discovery: it listens to the same traffic your router already processes. It does not perform active scans that could impact network performance. The protocols it uses (ARP, mDNS, SSDP, NetBIOS) are standard and lightweight.",
  },
];

const columnHeaderStyle: React.CSSProperties = {
  fontSize: 10,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(125,149,224,0.55)",
  marginBottom: 20,
};

function FAQColumn({
  items,
  openIndex,
  onToggle,
  columnId,
}: {
  items: { question: string; answer: string }[];
  openIndex: number | null;
  onToggle: (index: number) => void;
  columnId: string;
}) {
  return (
    <div className="border-b border-[rgba(255,255,255,0.07)]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-t border-[rgba(255,255,255,0.07)] first:border-t-0"
          >
            <button
              type="button"
              onClick={() => onToggle(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:bg-white/[0.02]"
              aria-expanded={isOpen}
              aria-controls={`faq-${columnId}-answer-${index}`}
              id={`faq-${columnId}-question-${index}`}
            >
              <span
                className="pr-4 font-medium"
                style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}
              >
                {item.question}
              </span>
              <span
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center text-lg font-light text-[#D4A791] transition-transform duration-200"
                aria-hidden
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={`faq-${columnId}-answer-${index}`}
              role="region"
              aria-labelledby={`faq-${columnId}-question-${index}`}
              className="overflow-hidden transition-all duration-300 ease-out"
              style={{
                maxHeight: isOpen ? "1200px" : "0",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <p
                className="pb-5 pl-0 pr-12"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: 13,
                  lineHeight: 1.7,
                }}
              >
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function FAQPage() {
  const [openIndexLeft, setOpenIndexLeft] = useState<number | null>(null);
  const [openIndexRight, setOpenIndexRight] = useState<number | null>(null);

  const handleToggleLeft = (index: number) => {
    setOpenIndexLeft(index === -1 ? null : index);
  };

  const handleToggleRight = (index: number) => {
    setOpenIndexRight(index === -1 ? null : index);
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
              FAQ
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
              Questions we actually get asked.
            </h1>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.32)",
                lineHeight: 1.7,
                maxWidth: 460,
              }}
            >
              For the teams that deploy it and the practices that run on it.
            </p>
          </section>

          <section
            style={{
              padding: "48px 40px 80px",
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 style={columnHeaderStyle}>For IT Teams & MSPs</h2>
                <FAQColumn
                  items={FAQ_ITEMS_LEFT}
                  openIndex={openIndexLeft}
                  onToggle={handleToggleLeft}
                  columnId="left"
                />
              </div>

              <div>
                <h2 style={columnHeaderStyle}>For Practice Managers</h2>
                <FAQColumn
                  items={FAQ_ITEMS_RIGHT}
                  openIndex={openIndexRight}
                  onToggle={handleToggleRight}
                  columnId="right"
                />
              </div>
            </div>

            <div
              style={{
                marginTop: 56,
                textAlign: "center",
                borderTop: "0.5px solid rgba(255,255,255,0.06)",
                paddingTop: 40,
              }}
            >
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: 12,
                }}
              >
                Still have questions?
              </p>
              <Link
                href="/contact"
                style={{
                  fontSize: 13,
                  color: "rgba(125,149,224,0.8)",
                  textDecoration: "none",
                }}
                className="transition-colors hover:text-white"
              >
                Contact us
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
