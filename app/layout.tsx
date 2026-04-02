import type { Metadata } from "next";
import { Suspense } from "react";
import ProgressBar from "./ProgressBar";

export const metadata: Metadata = {
  title: "All Yono Games – Download Best Yono Apps and Get Upto ₹100 to ₹500 Bonus",
  description: "Get the best Yono apps with ₹100–₹500 bonus. Download now and start earning real cash with top Yono games.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <Suspense fallback={null}>
          <ProgressBar />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
