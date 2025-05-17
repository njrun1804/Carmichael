import "./globals.css";
import type { ReactNode } from "react";
import { Playfair_Display, Inter } from "next/font/google";

const display = Playfair_Display({ subsets: ["latin"], weight: ["600"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "CoverCo",
  description: "Premium custom-fit covers",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} text-charcoal`}>
      <body className="bg-sandshell antialiased">
        {children}
      </body>
    </html>
  );
}
