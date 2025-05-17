import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 p-6 text-sm text-gray-500 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} CoverCo. All rights reserved.</p>
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
