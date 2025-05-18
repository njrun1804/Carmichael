"use client";
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
    <header className="fixed inset-x-0 top-0 z-50 bg-sandshell/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* logo */}
        <Link href="/" className="font-serif text-xl font-semibold">
          Carmichael <span className="text-terracotta">Covers</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* CTA */}
          <Link
            href="/configure"
            className="hidden rounded-full bg-terracotta px-5 py-2 text-sm font-medium text-white hover:bg-terracotta/90 sm:inline-block"
          >
            Design&nbsp;My&nbsp;Cover
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
