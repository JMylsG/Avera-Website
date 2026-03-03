import Navbar from "../components/Navbar";
import ConstellationBackground from "../components/ConstellationBackground";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <ConstellationBackground />
      <div className="relative z-[1]">
        <Navbar />
        <main className="pt-24 pb-24 px-6">
          <div className="max-w-[800px] mx-auto">
            {/* Hero */}
            <section className="py-20 text-center">
              <p className="text-[#7D95E0] text-sm font-semibold tracking-widest uppercase mb-6">
                Legal
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-400">Effective Date: March 3, 2026</p>
            </section>

            {/* Legal content */}
            <div className="leading-relaxed space-y-10">
              {/* Intro */}
              <p className="text-gray-300">
                This Privacy Policy describes how information is collected, used, and
                disclosed by Avera Systems, operated by Myls Guanso, an Arizona sole
                proprietor (&ldquo;Avera,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), in connection with the
                website located at averasystems.com (the &ldquo;Site&rdquo;).
              </p>

              <hr className="border-white/10" />

              {/* 1 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">1. Scope</h2>
                <p className="text-gray-300">
                  This Privacy Policy applies solely to information collected through
                  the Site and related authentication services. It does not apply to
                  data generated within customer-controlled installations of the Avera
                  software application, which operates independently within customer
                  environments.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 2 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  2. Information Collected
                </h2>

                <p className="text-white font-medium mb-2 mt-6">
                  2.1 Authentication Information
                </p>
                <p className="text-gray-300 mb-3">
                  When a user signs in using Google authentication through Supabase,
                  the following information may be collected and processed:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4">
                  <li>Email address</li>
                  <li>Display name</li>
                  <li>Google account identifier</li>
                  <li>Authentication-related metadata</li>
                  <li>IP address and associated technical log data</li>
                </ul>
                <p className="text-gray-300">
                  Authentication services are provided by Supabase. Supabase may
                  process authentication data in accordance with its own privacy
                  practices and infrastructure policies.
                </p>

                <p className="text-white font-medium mb-2 mt-6">
                  2.2 Early Access Submissions
                </p>
                <p className="text-gray-300 mb-3">
                  When a user submits an Early Access request, we collect:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4">
                  <li>Email address</li>
                  <li>Device count information</li>
                  <li>Free-text message content</li>
                </ul>
                <p className="text-gray-300 mb-3">
                  Early Access submissions are transmitted via email to Avera
                  (including through Google Workspace email services).
                </p>
                <p className="text-gray-300">
                  Users are instructed not to submit sensitive personal information or
                  Protected Health Information (&ldquo;PHI&rdquo;) through Early Access forms or
                  website communications.
                </p>

                <p className="text-white font-medium mb-2 mt-6">
                  2.3 Automatically Collected Technical Information
                </p>
                <p className="text-gray-300 mb-3">
                  Our hosting providers (including infrastructure providers such as
                  Cloudflare) may automatically collect limited technical information,
                  including:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Access timestamps</li>
                  <li>Basic server log data</li>
                </ul>
                <p className="text-gray-300">
                  This information is used for operational integrity, security
                  monitoring, and service reliability.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 3 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  3. Information Not Collected
                </h2>
                <p className="text-gray-300 mb-3">Avera does not:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
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

              <hr className="border-white/10" />

              {/* 4 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  4. Use of Information
                </h2>
                <p className="text-gray-300 mb-3">
                  Information collected through the Site is used to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Authenticate users</li>
                  <li>Evaluate Early Access requests</li>
                  <li>Communicate with prospective customers</li>
                  <li>Maintain website security</li>
                  <li>Improve service functionality</li>
                </ul>
              </div>

              <hr className="border-white/10" />

              {/* 5 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  5. Local-First Software Architecture
                </h2>
                <p className="text-gray-300">
                  The Avera software application is designed to operate within
                  customer-controlled network environments. Device discovery data,
                  compliance records, and audit information generated within customer
                  installations remain under customer control and are not automatically
                  transmitted to Avera.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 6 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  6. Data Retention
                </h2>
                <p className="text-gray-300 mb-4">
                  Authentication information is retained while an account remains
                  active.
                </p>
                <p className="text-gray-300 mb-4">
                  Early Access communications are retained as part of business
                  correspondence unless deletion is requested.
                </p>
                <p className="text-gray-300">
                  Users may request deletion of their account information by contacting
                  Avera at the email address below.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 7 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  7. Third-Party Service Providers
                </h2>
                <p className="text-gray-300 mb-3">
                  Avera utilizes third-party service providers for infrastructure and
                  authentication, including:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4">
                  <li>Supabase (authentication services)</li>
                  <li>Google (OAuth authentication and email infrastructure)</li>
                  <li>Hosting and infrastructure providers</li>
                </ul>
                <p className="text-gray-300">
                  These third parties may process information in accordance with their
                  own privacy policies.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 8 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  8. Data Security
                </h2>
                <p className="text-gray-300">
                  Avera implements reasonable administrative and technical safeguards
                  appropriate to the limited personal information collected through the
                  Site. However, no method of internet transmission or electronic
                  storage can be guaranteed to be fully secure.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 9 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  9. Requests and Contact Information
                </h2>
                <p className="text-gray-300">
                  Requests regarding account information, data access, or deletion may
                  be directed to:{" "}
                  <a
                    href="mailto:jmylsg@averasystems.com"
                    className="text-[#7D95E0] hover:text-white transition-colors"
                  >
                    jmylsg@averasystems.com
                  </a>
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 10 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  10. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-300">
                  Avera may update this Privacy Policy from time to time. Updates will
                  be reflected by a revised Effective Date posted on this page.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 11 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  11. Governing Law
                </h2>
                <p className="text-gray-300">
                  This Privacy Policy is governed by the laws of the State of Arizona,
                  United States.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
