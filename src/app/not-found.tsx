import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">404 – Page Not Found</h1>
      <Link href="/" className="text-blue-600 underline">
        Go back home
      </Link>
    </div>
  );
}
