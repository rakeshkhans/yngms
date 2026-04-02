import { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "About Us – AllYonoGamesh.Com",
  description: "Learn about AllYonoGamesh.Com – your trusted source for discovering the best online gaming apps.",
};

export default function AboutUs() {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <Header />

      <div style={{ background: "linear-gradient(135deg, #00632b, #012459)", padding: "32px 16px", textAlign: "center" }}>
        <h1 style={{ color: "#fff", fontSize: 28, fontWeight: 900, margin: "0 0 8px" }}>About Us</h1>
        <p style={{ color: "#ffffff99", fontSize: 14, margin: 0 }}>Get to know AllYonoGamesh.Com better</p>
      </div>

      <main style={{ maxWidth: 700, margin: "0 auto", padding: "24px 16px 60px" }}>
        <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.08)", lineHeight: 1.8, color: "#444", fontSize: 15 }}>

          <h2 style={{ color: "#00632b", fontSize: 20, marginTop: 0 }}>Welcome to AllYonoGamesh.Com</h2>
          <p>
            AllYonoGamesh.Com is a platform created to help users easily discover and explore online gaming applications.
            We focus on providing clear, simple, and useful information so that you can choose the right apps
            without confusion.
          </p>

          <p>
            Our goal is to make your experience smooth and hassle-free. Instead of searching multiple places,
            you can find everything you need in one place. We keep things simple, honest, and easy to understand.
          </p>

          <h2 style={{ color: "#00632b", fontSize: 18 }}>Our Mission</h2>
          <p>
            Our mission is to provide users with a reliable platform where they can explore gaming apps
            with confidence. We aim to share accurate details, helpful insights, and updated information
            so that users can make better decisions.
          </p>

          <p>
            We believe that everyone should have access to clear and trustworthy information. That’s why
            we focus on quality over quantity and only share content that is useful and relevant.
          </p>

          <h2 style={{ color: "#00632b", fontSize: 18 }}>What We Offer</h2>
          <ul style={{ paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>Simple and easy-to-understand information</li>
            <li style={{ marginBottom: 8 }}>Regular updates to keep content fresh</li>
            <li style={{ marginBottom: 8 }}>User-friendly design for better experience</li>
            <li style={{ marginBottom: 8 }}>No unnecessary clutter or confusing details</li>
          </ul>

          <h2 style={{ color: "#00632b", fontSize: 18 }}>Our Approach</h2>
          <p>
            We focus on keeping everything transparent and straightforward. Our platform is designed
            for users who want quick and clear information without spending too much time searching.
          </p>

          <p>
            We continuously improve our platform based on user needs so that your experience keeps
            getting better over time.
          </p>

          <div style={{ background: "#e8f5e9", borderRadius: 12, padding: 16, marginTop: 24, textAlign: "center" }}>
            <p style={{ margin: 0, fontWeight: 700, color: "#2e7d32", fontSize: 16 }}>
              AllYonoGamesh.Com — Simple, Reliable, and Easy to Use
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}