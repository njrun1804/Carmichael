"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/store/useCart";
import { useEffect, useState } from "react";

export default function TopNav() {
  const count = useCart((s) =>
    s.items.reduce((sum, i) => sum + i.quantity, 0)
  );
  // hydrate once (needed for SSR→CSR mismatch)
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur-md border-b border-gray-200">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* logo – 160 px wide on desktop, scales down on mobile */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Carmichael Covers"
            width={160}
            height={40}
            className="h-8 w-auto sm:h-10"
            priority
          />
        </Link>

        <div className="flex items-center gap-4">
          {/* CTA */}
          <Link
            href="/configure"
            className="hidden rounded-full border border-terracotta px-5 py-2 text-sm font-medium
                       text-terracotta transition hover:bg-terracotta hover:text-white sm:inline-block"
          >
            Design My Cover
          </Link>

          {/* cart */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="h-6 w-6" />
            {ready && count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-terracotta text-xs text-white">
                {count}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
