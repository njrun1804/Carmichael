import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 p-6 text-sm text-gray-500 md:flex-row md:justify-between">
        <div className="flex justify-center items-center mt-10">
          <Image
            src="/logo.png"
            alt="Carmichael Covers"
            width={32}
            height={32}
            className="h-8 w-auto hidden md:inline-block mr-2"
          />
          <p className="text-xs text-center">
            © {new Date().getFullYear()} Carmichael Covers
          </p>
        </div>
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
