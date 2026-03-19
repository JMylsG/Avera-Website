"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import ConstellationBackground from "../components/ConstellationBackground";
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
    <div className="border-b border-white/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-t border-white/10 first:border-t-0"
          >
            <button
              type="button"
              onClick={() => onToggle(isOpen ? -1 : index)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left hover:bg-white/[0.02] transition-colors"
              aria-expanded={isOpen}
              aria-controls={`faq-${columnId}-answer-${index}`}
              id={`faq-${columnId}-question-${index}`}
            >
              <span className="text-white font-medium pr-4">{item.question}</span>
              <span
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-[#D4A791] text-lg font-light transition-transform duration-200"
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
              <p className="text-gray-300 text-sm leading-relaxed pb-5 pl-0 pr-12">
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
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndexLeft, setOpenIndexLeft] = useState<number | null>(null);
  const [openIndexRight, setOpenIndexRight] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const handleToggleLeft = (index: number) => {
    setOpenIndexLeft(index === -1 ? null : index);
  };

  const handleToggleRight = (index: number) => {
    setOpenIndexRight(index === -1 ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <ConstellationBackground />
      <div className="relative z-[1]">
        <Navbar />

        <main className="pt-24">
          {/* Hero */}
          <section className="py-20 px-6 text-center max-w-3xl mx-auto">
            <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-6">
              FAQ
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Questions we actually get asked.
            </h1>
            <p className="text-gray-400 text-lg">
              For the teams that deploy it and the practices that run on it.
            </p>
          </section>

          {/* Two-column Accordion FAQ */}
          <section
            ref={sectionRef}
            className="px-6 pb-24"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 550ms ease-out, transform 550ms ease-out",
            }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Left column */}
                <div>
                  <h2 className="text-[#7D95E0] text-xs font-semibold tracking-widest uppercase mb-6">
                    For IT Teams & MSPs
                  </h2>
                  <FAQColumn
                    items={FAQ_ITEMS_LEFT}
                    openIndex={openIndexLeft}
                    onToggle={handleToggleLeft}
                    columnId="left"
                  />
                </div>

                {/* Right column */}
                <div>
                  <h2 className="text-[#7D95E0] text-xs font-semibold tracking-widest uppercase mb-6">
                    For Practice Managers
                  </h2>
                  <FAQColumn
                    items={FAQ_ITEMS_RIGHT}
                    openIndex={openIndexRight}
                    onToggle={handleToggleRight}
                    columnId="right"
                  />
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center w-full">
              <p className="text-gray-400 text-lg mb-4">Still have questions?</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#7D95E0] hover:text-[#315798] font-semibold transition-colors"
              >
                Contact Us
                <span aria-hidden>→</span>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
