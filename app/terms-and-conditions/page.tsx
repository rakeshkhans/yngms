import { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions – AllYonoGamesh.Com",
  description: "Read the Terms and Conditions of AllYonoGamesh.Com before using our website.",
};

export default function TermsAndConditions() {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <Header />

      <div style={{ background: "linear-gradient(135deg, #00632b, #012459)", padding: "32px 16px", textAlign: "center" }}>
        <h1 style={{ color: "#fff", fontSize: 28, fontWeight: 900, margin: "0 0 8px" }}>Terms & Conditions</h1>
        <p style={{ color: "#ffffff99", fontSize: 14, margin: 0 }}>Please read these terms carefully</p>
      </div>

      <main style={{ maxWidth: 700, margin: "0 auto", padding: "24px 16px 60px" }}>
        <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.08)", lineHeight: 1.8, color: "#444", fontSize: 15 }}>

          <p style={{ color: "#666", fontSize: 13 }}>Last updated: March 2026</p>

          <h2>Introduction</h2>
          <p>
            These Terms and Conditions govern your use of the AllYonoGamesh.Com website.
            By accessing or using our website, you agree to follow these terms.
          </p>

          <h2>Use of Website</h2>
          <p>
            You agree to use this website only for lawful purposes.
            You must not misuse the website or attempt to harm its functionality.
          </p>

          <h2>Platform Nature</h2>
          <p>
            AllYonoGamesh.Com is an informational platform that provides details and links to third-party applications.
            We do not own, operate, or control any of the apps listed on our website.
          </p>

          <h2>User Responsibility</h2>
          <p>
            You are responsible for your actions while using our website and any third-party apps.
            You should verify all information before making any decisions.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to external websites or apps.
            We are not responsible for the content, policies, or services of those third parties.
          </p>

          <h2>No Guarantee</h2>
          <p>
            We do not guarantee the accuracy, completeness, or reliability of the information on our website.
            Content may change at any time without notice.
          </p>

          <h2>Financial Risk</h2>
          <p>
            Some applications may involve financial activities.
            There is always a risk of loss, and AllYonoGamesh.Com does not guarantee any earnings or profits.
          </p>

          <h2>Age Requirement</h2>
          <p>
            You must be at least 18 years old to use this website or access certain applications.
          </p>

          <h2>Legal Compliance</h2>
          <p>
            You are responsible for ensuring that your use of any app complies with local laws and regulations.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text and design, belongs to AllYonoGamesh.Com unless stated otherwise.
            You may not copy or reuse content without permission.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            AllYonoGamesh.Com will not be liable for any direct or indirect damages resulting from the use of our website
            or any third-party applications.
          </p>

          <h2>Security</h2>
          <p>
            We do not guarantee that our website or third-party apps are free from viruses or harmful elements.
            Users should take proper precautions.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We may update these Terms and Conditions at any time.
            Continued use of the website means you accept the updated terms.
          </p>

          <h2>Termination</h2>
          <p>
            We reserve the right to restrict or terminate access to our website if users violate these terms.
          </p>

          <h2>Contact</h2>
          <p>
            If you have any questions about these Terms, you can contact us through our Contact Us page.
          </p>

          <div style={{ background: "#e8f5e9", borderRadius: 12, padding: 16, marginTop: 24 }}>
            <p style={{ margin: 0, fontWeight: 600, color: "#2e7d32" }}>
              ✅ By using AllYonoGamesh.Com, you agree to follow all Terms and Conditions listed above.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}