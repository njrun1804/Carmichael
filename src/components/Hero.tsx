import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="/hero-lifestyle.jpg"
        alt="Covered car and patio set, showcasing product use in lifestyle setting"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      {/* Content overlay */}
      <div className="flex flex-col items-center gap-6 text-center bg-black/40 p-6 rounded-xl">
        <h1 className="text-4xl font-extrabold text-white md:text-6xl">
          Premium&nbsp;Custom‑Fit&nbsp;Covers
        </h1>
        <p className="max-w-xl text-lg text-white/90">
          Protect your car, grill, or patio set with precision‑tailored covers that look great and last.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/car"
            className="rounded-full bg-black/80 px-6 py-3 text-white transition-colors hover:bg-black"
          >
            Shop Car Covers
          </Link>
          <Link
            href="/grill"
            className="rounded-full border border-white px-6 py-3 text-white transition-colors hover:bg-white/20"
          >
            Shop Grill Covers
          </Link>
        </div>
      </div>
    </section>
  );
}
