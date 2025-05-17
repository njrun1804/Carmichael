"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full bg-white transition-shadow ${shadow ? "shadow" : "border-b"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">CoverCo</Link>

        <nav className="hidden gap-6 md:flex">
          <Link href="/car"   className="hover:text-blue-600">Car Covers</Link>
          <Link href="/grill" className="hover:text-blue-600">Grill Covers</Link>
          <Link href="/patio" className="hover:text-blue-600">Patio Covers</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        <button className="md:hidden">☰</button>
      </div>
    </header>
  );
}
