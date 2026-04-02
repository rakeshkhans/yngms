import { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "Privacy Policy – AllYonoGamesh.Com",
  description: "Read the AllYonoGamesh.Com Privacy Policy to understand how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <Header />

      <div style={{ background: "linear-gradient(135deg, #00632b, #012459)", padding: "32px 16px", textAlign: "center" }}>
        <h1 style={{ color: "#fff", fontSize: 28, fontWeight: 900, margin: "0 0 8px" }}>Privacy Policy</h1>
        <p style={{ color: "#ffffff99", fontSize: 14, margin: 0 }}>Your privacy is important to us</p>
      </div>

      <main style={{ maxWidth: 700, margin: "0 auto", padding: "24px 16px 60px" }}>
        <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.08)", lineHeight: 1.8, color: "#444", fontSize: 15 }}>

          <p style={{ color: "#666", fontSize: 13 }}>Last updated: March 2026</p>

          <h2>Introduction</h2>
          <p>
            This Privacy Policy explains how AllYonoGamesh.Com collects, uses, and protects your information when you visit our website.
            By using our website, you agree to the terms of this policy.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect basic information such as your IP address, browser type, device type, and the pages you visit.
            This information helps us understand how users interact with our website.
          </p>

          <p>
            We do not collect personal information like your name, phone number, or financial details unless you contact us directly.
          </p>

          <h2>How We Use Information</h2>
          <p>
            The information we collect is used to improve our website, enhance user experience, and make our content more useful.
          </p>

          <p>
            We do not sell, rent, or share your personal data with third parties for marketing purposes.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website may use cookies to improve your browsing experience. Cookies are small files stored on your device
            that help websites remember your preferences.
          </p>

          <p>
            You can disable cookies through your browser settings, but some features of the website may not function properly.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services such as analytics tools or advertising networks. These services may collect
            information according to their own privacy policies.
          </p>

          <p>
            We do not control how these third parties use your data.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            AllYonoGamesh.Com may contain links to external websites or applications. When you click on these links,
            you will be redirected to another site.
          </p>

          <p>
            We are not responsible for the privacy practices of those external websites. Please review their policies separately.
          </p>

          <h2>Data Security</h2>
          <p>
            We take reasonable steps to protect your information. However, no internet method is completely secure,
            and we cannot guarantee absolute security.
          </p>

          <h2>Children’s Information</h2>
          <p>
            Our website is not intended for children under 13 years of age. We do not knowingly collect personal data from children.
          </p>

          <p>
            If you believe a child has provided information on our website, please contact us and we will remove it.
          </p>

          <h2>User Consent</h2>
          <p>
            By using our website, you agree to this Privacy Policy and give your consent to our practices.
          </p>

          <h2>Policy Updates</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, you can contact us through our Contact Us page.
          </p>

          <div style={{ background: "#e8f5e9", borderRadius: 12, padding: 16, marginTop: 24 }}>
            <p style={{ margin: 0, fontWeight: 600, color: "#2e7d32" }}>
              🔒 We are committed to keeping your data safe and providing a secure experience.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}