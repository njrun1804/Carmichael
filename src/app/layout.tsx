import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import TopNav from "@/components/TopNav";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

// export const metadata = {
//   title: "Castaway Covers",
//   description: "Premium custom-fit covers",
// };

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} text-charcoal`}>
      <body className="bg-sandshell antialiased min-h-screen w-full overflow-x-hidden">
        <TopNav />
        {/* top padding matches nav height exactly, no extra gap */}
        <div className="pt-20 min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
