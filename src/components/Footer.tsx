import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 p-6 text-sm text-gray-500 md:flex-row md:justify-between">
        <div className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="Castaway Covers"
            width={32}
            height={32}
            className="h-8 w-auto inline-block mr-2"
          />
          <p className="text-xs text-center">
            © 2025 Castaway Covers. All rights reserved.
          </p>
        </div>
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
