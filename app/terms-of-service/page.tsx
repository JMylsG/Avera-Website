import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const h2Style: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 500,
  color: "rgba(255,255,255,0.85)",
  marginBottom: 12,
  marginTop: 32,
};

const bodyStyle: React.CSSProperties = {
  fontSize: 13,
  color: "rgba(255,255,255,0.4)",
  lineHeight: 1.75,
  marginBottom: 12,
};

const hrStyle: React.CSSProperties = {
  border: "none",
  borderTop: "0.5px solid rgba(255,255,255,0.07)",
  margin: "28px 0",
};

const listStyle: React.CSSProperties = {
  paddingLeft: 20,
  color: "rgba(255,255,255,0.4)",
  fontSize: 13,
  lineHeight: 1.75,
};

const linkStyle: React.CSSProperties = {
  color: "rgba(125,149,224,0.8)",
  textDecoration: "none",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen" style={{ background: "#08090f" }}>
      <div className="relative z-[1]">
        <Navbar />
        <main className="pt-24">
          <section
            style={{
              padding: "96px 40px 48px",
              borderBottom: "0.5px solid rgba(255,255,255,0.06)",
              textAlign: "center",
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
              Legal
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
              Terms of Service
            </h1>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.28)" }}>
              Effective Date: March 3, 2026
            </p>
          </section>

          <div
            style={{
              maxWidth: 800,
              margin: "0 auto",
              padding: "48px 40px 80px",
            }}
          >
            <p style={bodyStyle}>
              These Terms of Service (&ldquo;Terms&rdquo;) govern access to and use of the
              website located at averasystems.com (the &ldquo;Site&rdquo;) and related services
              provided under the trade name Avera Systems, a trade name of Guanso
              Systems LLC, an Arizona limited liability company (&ldquo;Avera,&rdquo;
              &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
            </p>
            <p style={bodyStyle}>
              By accessing or using the Site, you agree to these Terms.
            </p>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>1. Scope of Services</h2>
              <p style={bodyStyle}>
                The Site provides information regarding Avera&apos;s locally deployed
                compliance infrastructure software and related evaluation opportunities.
              </p>
              <p style={bodyStyle}>
                Access to pilot programs, evaluation deployments, or paid subscriptions
                requires a separate written agreement. In the event of any conflict
                between these Terms and a signed written agreement between Avera and a
                customer, the signed written agreement controls.
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                2. No Regulatory or Legal Advice
              </h2>
              <p style={bodyStyle}>
                Avera provides technical software infrastructure designed to support
                evidentiary documentation and device record continuity within regulated
                environments.
              </p>
              <p style={bodyStyle}>
                Avera does not provide legal advice, regulatory certification, audit
                guarantees, or representations of compliance with HIPAA or any other law
                or regulation. Users and customers remain solely responsible for their
                regulatory compliance obligations and operational decisions.
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                3. Acceptable Use
              </h2>
              <p style={bodyStyle}>You agree not to:</p>
              <ul className="list-inside list-disc space-y-1" style={listStyle}>
                <li>Misrepresent your identity or affiliation</li>
                <li>
                  Attempt unauthorized access to the Site or related systems
                </li>
                <li>Interfere with Site security or functionality</li>
                <li>
                  Submit unlawful, sensitive, or Protected Health Information (PHI)
                  through Site forms
                </li>
                <li>Use the Site in violation of applicable laws</li>
              </ul>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                4. Intellectual Property
              </h2>
              <p style={bodyStyle}>
                All content, branding, materials, software descriptions, and related
                intellectual property displayed on the Site are owned by Guanso Systems
                LLC and presented under the trade name Avera Systems.
              </p>
              <p style={bodyStyle}>
                No rights or licenses are granted except as expressly stated.
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                5. Early Access and Pilot Programs
              </h2>
              <p style={bodyStyle}>
                Submission of an Early Access request does not create a contractual
                relationship.
              </p>
              <p style={bodyStyle}>
                Any evaluation access or pilot deployment, if granted, will be governed
                exclusively by a separate written Pilot Evaluation Agreement executed
                between Avera and the applicable organization.
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                6. Disclaimer of Warranties
              </h2>
              <p style={bodyStyle}>
                THE SITE AND ALL CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo;
              </p>
              <p style={bodyStyle}>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, AVERA DISCLAIMS ALL WARRANTIES,
                EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR
                A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                7. Limitation of Liability
              </h2>
              <p style={bodyStyle}>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, AVERA&apos;S TOTAL LIABILITY ARISING
                OUT OF OR RELATING TO USE OF THE SITE SHALL NOT EXCEED ONE HUNDRED U.S.
                DOLLARS ($100).
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                8. Exclusion of Certain Damages
              </h2>
              <p style={bodyStyle}>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, AVERA SHALL NOT BE LIABLE FOR
                ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE
                DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION, OR
                REGULATORY EXPOSURE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                9. Third-Party Services
              </h2>
              <p style={bodyStyle}>
                The Site may rely on third-party infrastructure, hosting, and
                authentication providers. Avera is not responsible for the independent
                actions or policies of such third parties.
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                10. Eligibility
              </h2>
              <p style={bodyStyle}>
                The Site is intended for use by individuals who are at least eighteen
                (18) years of age and capable of entering into legally binding
                agreements.
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                11. Governing Law and Venue
              </h2>
              <p style={bodyStyle}>
                These Terms are governed by the laws of the State of Arizona, without
                regard to conflict-of-law principles.
              </p>
              <p style={bodyStyle}>
                Any dispute arising out of or relating to these Terms shall be resolved
                exclusively in the state or federal courts located in Maricopa County,
                Arizona.
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                12. Severability
              </h2>
              <p style={bodyStyle}>
                If any provision of these Terms is found to be unenforceable, the
                remaining provisions shall remain in full force and effect.
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                13. Force Majeure
              </h2>
              <p style={bodyStyle}>
                Avera shall not be liable for any failure or delay in performance
                resulting from causes beyond its reasonable control, including natural
                disasters, acts of government, internet service disruptions, or other
                force majeure events.
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                14. Changes to Terms
              </h2>
              <p style={bodyStyle}>
                Avera may update these Terms from time to time. The updated version will
                be posted with a revised Effective Date. Continued use of the Site after
                changes are posted constitutes acceptance of the revised Terms.
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                15. Contact
              </h2>
              <p style={bodyStyle}>
                Questions regarding these Terms may be directed to:{" "}
                <a
                  href="mailto:jmylsg@averasystems.com"
                  style={linkStyle}
                  className="transition-colors hover:text-white"
                >
                  jmylsg@averasystems.com
                </a>
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
