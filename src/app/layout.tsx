import "./globals.css";

export const metadata = {
  title: "CoverCo",
  description: "Premium custom-fit covers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
