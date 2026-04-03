import { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "Contact Us – AllYonoGamesh.Com",
  description: "Get in touch with the AllYonoGamesh.Com team for support, queries, or feedback.",
};

export default function ContactUs() {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <Header />

      <div style={{ background: "linear-gradient(135deg, #00632b, #012459)", padding: "32px 16px", textAlign: "center" }}>
        <h1 style={{ color: "#fff", fontSize: 28, fontWeight: 900, margin: "0 0 8px" }}>Contact Us</h1>
        <p style={{ color: "#ffffff99", fontSize: 14, margin: 0 }}>We are always here to help you</p>
      </div>

      <main style={{ maxWidth: 700, margin: "0 auto", padding: "24px 16px 60px" }}>
        <div style={{ background: "#fff", borderRadius: 16, padding: 24, marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
          
          <h2 style={{ color: "#00632b", fontSize: 20, marginTop: 0 }}>Get In Touch</h2>

          <p style={{ color: "#555", lineHeight: 1.8 }}>
            If you have any questions, suggestions, or feedback, feel free to contact us. 
            We are always happy to hear from our users and will try to respond as quickly as possible.
          </p>

          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Whether you need help, want to report an issue, or just want to share your thoughts, 
            you can reach out to us through the contact options below.
          </p>

          {[
            { icon: "📧", label: "Email", value: "support@AllYonoGamesh.Com", href: "mailto:support@AllYonoGamesh.com" },
            { icon: "✈️", label: "Telegram", value: "@AllYonoGameshCom", href: "https://t.me/allyonogameshcom" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 16px",
                background: "#f9f9f9",
                borderRadius: 12,
                marginBottom: 10,
                textDecoration: "none",
                color: "inherit",
                border: "1px solid #f0f0f0",
              }}
            >
              <span style={{ fontSize: 26 }}>{item.icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1a1a" }}>{item.label}</div>
                <div style={{ fontSize: 13, color: "#00632b" }}>{item.value}</div>
              </div>
            </a>
          ))}

          <div style={{ marginTop: 20 }}>
            <p style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>
              We usually respond within 24–48 hours. Please make sure to provide complete details 
              in your message so we can assist you better.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
