import Navbar from "../components/Navbar";
import ConstellationBackground from "../components/ConstellationBackground";
import Footer from "../components/Footer";

export default function TermsOfServicePage() {
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
                Terms of Service
              </h1>
              <p className="text-gray-400">Effective Date: March 3, 2026</p>
            </section>

            {/* Legal content */}
            <div className="leading-relaxed space-y-10">
              {/* Intro */}
              <p className="text-gray-300">
                These Terms of Service (&ldquo;Terms&rdquo;) govern access to and use of the
                website located at averasystems.com (the &ldquo;Site&rdquo;) and related services
                provided under the trade name Avera Systems, a trade name of Guanso
                Systems LLC, an Arizona limited liability company (&ldquo;Avera,&rdquo;
                &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
              </p>
              <p className="text-gray-300">
                By accessing or using the Site, you agree to these Terms.
              </p>

              <hr className="border-white/10" />

              {/* 1 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  1. Scope of Services
                </h2>
                <p className="text-gray-300 mb-4">
                  The Site provides information regarding Avera&apos;s locally deployed
                  compliance infrastructure software and related evaluation opportunities.
                </p>
                <p className="text-gray-300">
                  Access to pilot programs, evaluation deployments, or paid subscriptions
                  requires a separate written agreement. In the event of any conflict
                  between these Terms and a signed written agreement between Avera and a
                  customer, the signed written agreement controls.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 2 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  2. No Regulatory or Legal Advice
                </h2>
                <p className="text-gray-300 mb-4">
                  Avera provides technical software infrastructure designed to support
                  evidentiary documentation and device record continuity within regulated
                  environments.
                </p>
                <p className="text-gray-300">
                  Avera does not provide legal advice, regulatory certification, audit
                  guarantees, or representations of compliance with HIPAA or any other law
                  or regulation. Users and customers remain solely responsible for their
                  regulatory compliance obligations and operational decisions.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 3 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  3. Acceptable Use
                </h2>
                <p className="text-gray-300 mb-3">You agree not to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
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

              <hr className="border-white/10" />

              {/* 4 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  4. Intellectual Property
                </h2>
                <p className="text-gray-300 mb-4">
                  All content, branding, materials, software descriptions, and related
                  intellectual property displayed on the Site are owned by Guanso Systems
                  LLC and presented under the trade name Avera Systems.
                </p>
                <p className="text-gray-300">
                  No rights or licenses are granted except as expressly stated.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 5 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  5. Early Access and Pilot Programs
                </h2>
                <p className="text-gray-300 mb-4">
                  Submission of an Early Access request does not create a contractual
                  relationship.
                </p>
                <p className="text-gray-300">
                  Any evaluation access or pilot deployment, if granted, will be governed
                  exclusively by a separate written Pilot Evaluation Agreement executed
                  between Avera and the applicable organization.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 6 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  6. Disclaimer of Warranties
                </h2>
                <p className="text-gray-300 mb-4">
                  THE SITE AND ALL CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo;
                </p>
                <p className="text-gray-300">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, AVERA DISCLAIMS ALL WARRANTIES,
                  EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR
                  A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 7 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  7. Limitation of Liability
                </h2>
                <p className="text-gray-300">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, AVERA&apos;S TOTAL LIABILITY ARISING
                  OUT OF OR RELATING TO USE OF THE SITE SHALL NOT EXCEED ONE HUNDRED U.S.
                  DOLLARS ($100).
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 8 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  8. Exclusion of Certain Damages
                </h2>
                <p className="text-gray-300">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, AVERA SHALL NOT BE LIABLE FOR
                  ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE
                  DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION, OR
                  REGULATORY EXPOSURE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 9 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  9. Third-Party Services
                </h2>
                <p className="text-gray-300">
                  The Site may rely on third-party infrastructure, hosting, and
                  authentication providers. Avera is not responsible for the independent
                  actions or policies of such third parties.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 10 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  10. Eligibility
                </h2>
                <p className="text-gray-300">
                  The Site is intended for use by individuals who are at least eighteen
                  (18) years of age and capable of entering into legally binding
                  agreements.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 11 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  11. Governing Law and Venue
                </h2>
                <p className="text-gray-300 mb-4">
                  These Terms are governed by the laws of the State of Arizona, without
                  regard to conflict-of-law principles.
                </p>
                <p className="text-gray-300">
                  Any dispute arising out of or relating to these Terms shall be resolved
                  exclusively in the state or federal courts located in Maricopa County,
                  Arizona.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 12 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  12. Severability
                </h2>
                <p className="text-gray-300">
                  If any provision of these Terms is found to be unenforceable, the
                  remaining provisions shall remain in full force and effect.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 13 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  13. Force Majeure
                </h2>
                <p className="text-gray-300">
                  Avera shall not be liable for any failure or delay in performance
                  resulting from causes beyond its reasonable control, including natural
                  disasters, acts of government, internet service disruptions, or other
                  force majeure events.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 14 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  14. Changes to Terms
                </h2>
                <p className="text-gray-300">
                  Avera may update these Terms from time to time. The updated version will
                  be posted with a revised Effective Date. Continued use of the Site after
                  changes are posted constitutes acceptance of the revised Terms.
                </p>
              </div>

              <hr className="border-white/10" />

              {/* 15 */}
              <div>
                <h2 className="text-white text-lg font-semibold mb-3">
                  15. Contact
                </h2>
                <p className="text-gray-300">
                  Questions regarding these Terms may be directed to:{" "}
                  <a
                    href="mailto:jmylsg@averasystems.com"
                    className="text-[#7D95E0] hover:text-white transition-colors"
                  >
                    jmylsg@averasystems.com
                  </a>
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
