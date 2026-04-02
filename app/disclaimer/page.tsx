import { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "Disclaimer – AllYonoGamesh.Com",
  description: "Read the complete disclaimer of AllYonoGamesh.Com including financial risk, third-party apps, and user responsibility.",
};

export default function Disclaimer() {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <Header />

      <div style={{ background: "linear-gradient(135deg, #00632b, #012459)", padding: "32px 16px", textAlign: "center" }}>
        <h1 style={{ color: "#fff", fontSize: 28, fontWeight: 900, margin: "0 0 8px" }}>Disclaimer</h1>
        <p style={{ color: "#ffffff99", fontSize: 14, margin: 0 }}>Important information before using AllYonoGamesh.Com</p>
      </div>

      <main style={{ maxWidth: 700, margin: "0 auto", padding: "24px 16px 60px" }}>
        <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.08)", lineHeight: 1.8, color: "#444", fontSize: 15 }}>

          <p style={{ color: "#666", fontSize: 13 }}>Last updated: April 2026</p>

          <h2>Welcome to AllYonoGamesh.Com</h2>
          <p>
            This disclaimer applies to all users of the AllYonoGamesh.Com website. By accessing or using our platform,
            you agree to all the terms mentioned on this page.
          </p>

          <h2>Platform Purpose</h2>
          <p>
            AllYonoGamesh.Com is an informational website that provides details and access links to various third-party applications.
            We do not create, own, or operate any of these apps. Our purpose is only to share information in a simple and helpful way.
          </p>

          <h2>Third-Party Apps</h2>
          <p>
            All applications listed on our website belong to their respective owners. AllYonoGamesh.Com has no control over how these apps work,
            their content, or their services.
          </p>

          <p>
            When you click on any link and use an app, you are leaving our website and using a third-party service at your own risk.
          </p>

          <h2>User Responsibility</h2>
          <p>
            You are fully responsible for your actions while using any app listed on AllYonoGamesh.Com.
            It is your duty to check all details before using any application.
          </p>

          <h2>Financial Risk Disclaimer</h2>
          <p>
            Some apps may involve financial transactions. These activities carry risks, including loss of money.
            AllYonoGamesh.Com does not guarantee any profit, reward, or earning.
          </p>

          <p>
            You should only spend money that you can afford to lose. Always make careful and informed decisions.
          </p>

          <h2>No Professional Advice</h2>
          <p>
            The content on AllYonoGamesh.Com is for general information only. We do not provide financial, legal, or professional advice.
            Any decision you make is your own responsibility.
          </p>

          <h2>No Guarantee of Accuracy</h2>
          <p>
            We try to keep all information correct and updated, but we do not guarantee that everything is always accurate,
            complete, or up to date.
          </p>

          <h2>Age Restriction</h2>
          <p>
            Some applications may be suitable only for users aged 18 or above.
            By using this website, you confirm that you meet the required age conditions.
          </p>

          <h2>Legal Compliance</h2>
          <p>
            It is your responsibility to ensure that using any app is allowed in your area.
            Laws may vary depending on your location.
          </p>

          <h2>App Terms & Policies</h2>
          <p>
            Each app has its own Terms & Conditions and Privacy Policy.
            You must read and understand them before using the app.
          </p>

          <h2>No Liability</h2>
          <p>
            AllYonoGamesh.Com will not be responsible for any loss, damage, or issue caused by the use of third-party apps.
            This includes financial loss, data loss, or any other problems.
          </p>

          <h2>Risk of Addiction</h2>
          <p>
            Some apps may be addictive. Users should use them responsibly and avoid excessive usage.
            If you face any negative impact, please seek help.
          </p>

          <h2>No Endorsement</h2>
          <p>
            Listing an app on our website does not mean we recommend or promote it.
            We simply provide access and information.
          </p>

          <h2>App Availability</h2>
          <p>
            Apps may change, update, or become unavailable at any time.
            We are not responsible for any changes made by app providers.
          </p>

          <h2>External Links</h2>
          <p>
            Our website may contain links to external websites.
            We are not responsible for the content or policies of those websites.
          </p>

          <h2>Security Disclaimer</h2>
          <p>
            We do not guarantee that third-party apps are completely safe or secure.
            Users should take proper precautions while downloading or using any app.
          </p>

          <h2>Data & Privacy</h2>
          <p>
            Any data you share with third-party apps is handled by them, not by AllYonoGamesh.Com.
            We are not responsible for how your data is used.
          </p>

          <h2>Regional Restrictions</h2>
          <p>
            Some apps may be restricted in certain regions.
            It is your responsibility to check local laws before using any app.
          </p>

          <h2>Changes to Disclaimer</h2>
          <p>
            We may update this disclaimer at any time without notice.
            Continued use of the website means you accept the updated terms.
          </p>

          <h2>Final Statement</h2>
          <p>
            By using AllYonoGamesh.Com, you agree that we only provide information and links.
            All decisions, risks, and actions are taken by you at your own responsibility.
          </p>

          <div style={{ background: "#fff3cd", borderRadius: 12, padding: 16, marginTop: 24 }}>
            <p style={{ margin: 0, fontWeight: 600, color: "#856404" }}>
              ⚠️ Important: AllYonoGamesh.Com is not responsible for any financial loss, damage, or issues caused by third-party applications.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}