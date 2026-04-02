import { Metadata } from "next";
import TabSection from "./TabSection";
import Header from "./Header";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "All Yono Games – Download Best Yono Apps and Get Upto ₹100 to ₹500 Bonus",
  description: "Get the best Yono apps with ₹100–₹500 bonus. Download now and start earning real cash with top Yono games.",
  openGraph: {
    title: "All Yono Games – Download Best Yono Apps and Get Upto ₹100 to ₹500 Bonus",
    description: "Get the best Yono apps with ₹100–₹500 bonus. Download now and start earning real cash with top Yono games.",
    type: "website",
  },
};

const PROJECT_ID = "r0d9oz57";
const DATASET = "production";

export interface App {
  _id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  category: string;
  bonus: number;
  minWithdraw: number;
  version?: string;
  rating: number;
  reviewCount: number;
  isFeatured?: boolean;
}

async function getApps(): Promise<App[]> {
  try {
    const query = encodeURIComponent(
      `*[_type == "app"] | order(_createdAt desc) {
        _id, name, "slug": slug.current, category,
        bonus, minWithdraw, version, rating, reviewCount, isFeatured,
        "logoUrl": logo.asset->url
      }`
    );
    const res = await fetch(
      `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${query}`,
      { next: { revalidate: 30 } }
    );
    const data = await res.json();
    if (data.result?.length > 0) return data.result;
  } catch (e) {}
  return demoApps;
}

export default async function Home() {
  const apps = await getApps();
  const topRated = apps.filter((a) => a.category === "top-rated");
  const newGames = apps.filter((a) => a.category === "new-games");
  const otherGames = apps.filter((a) => a.category === "other-games");

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <Header />

      <div style={{ background: "linear-gradient(135deg, #00632b, #012459)", padding: "32px 16px", textAlign: "center" }}>
        <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 36px)", fontWeight: 900, margin: "0 0 10px" }}>
          Download All Yono Games 🎮
        </h1>
        <p style={{ color: "#ffffff99", fontSize: 14, margin: 0 }}>
          Sign-up bonus • Refer & Earn • Daily Rewards
        </p>
      </div>

      <main style={{ maxWidth: 700, margin: "0 auto", padding: "12px 8px 60px" }}>
        <TabSection topRated={topRated} newGames={newGames} otherGames={otherGames} />
      </main>

      <Footer />
    </div>
  );
}

const demoApps: App[] = [
  { _id: "1", name: "Nova Rummy", slug: "Nova-rummy", category: "top-rated", bonus: 500, minWithdraw: 100, version: "2.1", rating: 4.5, reviewCount: 1200 },
  ];
