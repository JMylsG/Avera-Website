import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const h2Style: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 500,
  color: "rgba(255,255,255,0.85)",
  marginBottom: 12,
  marginTop: 32,
};

const subStyle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 500,
  color: "rgba(255,255,255,0.7)",
  marginBottom: 8,
  marginTop: 20,
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

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
              This Privacy Policy describes how information is collected, used, and
              disclosed by Avera Systems, a trade name of Guanso Systems LLC, an
              Arizona limited liability company (&ldquo;Avera,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;), in connection with the website located at averasystems.com
              (the &ldquo;Site&rdquo;).
            </p>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>1. Scope</h2>
              <p style={bodyStyle}>
                This Privacy Policy applies solely to information collected through
                the Site and related authentication services. It does not apply to
                data generated within customer-controlled installations of the Avera
                software application, which operates independently within customer
                environments.
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                2. Information Collected
              </h2>

              <p style={subStyle}>
                2.1 Authentication Information
              </p>
              <p style={bodyStyle}>
                When a user signs in using Google authentication through Supabase,
                the following information may be collected and processed:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-1" style={listStyle}>
                <li>Email address</li>
                <li>Display name</li>
                <li>Google account identifier</li>
                <li>Authentication-related metadata</li>
                <li>IP address and associated technical log data</li>
              </ul>
              <p style={bodyStyle}>
                Authentication services are provided by Supabase. Supabase may
                process authentication data in accordance with its own privacy
                practices and infrastructure policies.
              </p>

              <p style={subStyle}>
                2.2 Early Access Submissions
              </p>
              <p style={bodyStyle}>
                When a user submits an Early Access request, we collect:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-1" style={listStyle}>
                <li>Email address</li>
                <li>Device count information</li>
                <li>Free-text message content</li>
              </ul>
              <p style={bodyStyle}>
                Early Access submissions are transmitted via email to Avera
                (including through Google Workspace email services).
              </p>
              <p style={bodyStyle}>
                Users are instructed not to submit sensitive personal information or
                Protected Health Information (&ldquo;PHI&rdquo;) through Early Access forms or
                website communications.
              </p>

              <p style={subStyle}>
                2.3 Automatically Collected Technical Information
              </p>
              <p style={bodyStyle}>
                Our hosting providers (including infrastructure providers such as
                Cloudflare) may automatically collect limited technical information,
                including:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-1" style={listStyle}>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Access timestamps</li>
                <li>Basic server log data</li>
              </ul>
              <p style={bodyStyle}>
                This information is used for operational integrity, security
                monitoring, and service reliability.
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                3. Information Not Collected
              </h2>
              <p style={bodyStyle}>Avera does not:</p>
              <ul className="list-inside list-disc space-y-1" style={listStyle}>
                <li>
                  Collect or process Protected Health Information through the Site
                </li>
                <li>
                  Collect device inventory data from customer networks through the
                  Site
                </li>
                <li>Sell personal information</li>
                <li>Engage in advertising-based behavioral tracking</li>
              </ul>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                4. Use of Information
              </h2>
              <p style={bodyStyle}>
                Information collected through the Site is used to:
              </p>
              <ul className="list-inside list-disc space-y-1" style={listStyle}>
                <li>Authenticate users</li>
                <li>Evaluate Early Access requests</li>
                <li>Communicate with prospective customers</li>
                <li>Maintain website security</li>
                <li>Improve service functionality</li>
              </ul>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                5. Local-First Software Architecture
              </h2>
              <p style={bodyStyle}>
                The Avera software application is designed to operate within
                customer-controlled network environments. Device discovery data,
                compliance records, and audit information generated within customer
                installations remain under customer control and are not automatically
                transmitted to Avera.
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                6. Data Retention
              </h2>
              <p style={bodyStyle}>
                Authentication information is retained while an account remains
                active.
              </p>
              <p style={bodyStyle}>
                Early Access communications are retained as part of business
                correspondence unless deletion is requested.
              </p>
              <p style={bodyStyle}>
                Users may request deletion of their account information by contacting
                Avera at the email address below.
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                7. Third-Party Service Providers
              </h2>
              <p style={bodyStyle}>
                Avera utilizes third-party service providers for infrastructure and
                authentication, including:
              </p>
              <ul className="mb-4 list-inside list-disc space-y-1" style={listStyle}>
                <li>Supabase (authentication services)</li>
                <li>Google (OAuth authentication and email infrastructure)</li>
                <li>Hosting and infrastructure providers</li>
              </ul>
              <p style={bodyStyle}>
                These third parties may process information in accordance with their
                own privacy policies.
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                8. Data Security
              </h2>
              <p style={bodyStyle}>
                Avera implements reasonable administrative and technical safeguards
                appropriate to the limited personal information collected through the
                Site. However, no method of internet transmission or electronic
                storage can be guaranteed to be fully secure.
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                9. Requests and Contact Information
              </h2>
              <p style={bodyStyle}>
                Requests regarding account information, data access, or deletion may
                be directed to:{" "}
                <a
                  href="mailto:jmylsg@averasystems.com"
                  style={linkStyle}
                  className="transition-colors hover:text-white"
                >
                  jmylsg@averasystems.com
                </a>
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                10. Changes to This Privacy Policy
              </h2>
              <p style={bodyStyle}>
                Avera may update this Privacy Policy from time to time. Updates will
                be reflected by a revised Effective Date posted on this page.
              </p>
            </div>

            <hr style={hrStyle} />

            <div>
              <h2 style={h2Style}>
                11. Governing Law
              </h2>
              <p style={bodyStyle}>
                This Privacy Policy is governed by the laws of the State of Arizona,
                United States.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
