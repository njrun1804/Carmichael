import Image from "next/image";
import Link from "next/link";

/**
 * NOTE: Make sure you have the `fade-in` keyframes and utility class in your global styles (e.g., `globals.css`):
 *
 * @keyframes fade-in {
 *   from { opacity: 0; transform: translateY(20px); }
 *   to   { opacity: 1; transform: translateY(0); }
 * }
 *
 * .fade-in { animation: fade-in 0.8s ease-out both; }
 */

export default function Hero() {
  return (
    <section className="relative flex h-[65vh] items-center justify-center overflow-hidden text-center">
      {/* background photo */}
      <Image
        src="/images/hero-placeholder.jpg"
        alt="Outdoor set wrapped in custom covers at sunset"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* darker gradient for legible text */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/20" />

      {/* content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <h1 className="mb-4 font-serif text-4xl font-semibold text-white drop-shadow-sm md:text-5xl lg:text-6xl">
          Apparel&nbsp;for&nbsp;Your&nbsp;Patio&nbsp;Furniture
        </h1>

        <p className="mx-auto max-w-xl text-lg md:text-xl text-white/90 drop-shadow">
          Tailored covers that slip on in seconds and shrug off every forecast.
        </p>

        <Link
          href="/configure"
          className="mt-8 inline-block rounded-full border border-terracotta/70 bg-terracotta px-10 py-3
                     font-medium text-white shadow-sm ring-terracotta/40 transition
                     hover:bg-terracotta/90 hover:shadow-md focus-visible:outline-none
                     focus-visible:ring-4"
        >
          Design My Cover
        </Link>
      </div>

      {/* watermark logo for ≥lg screens */}
      <div className="hidden lg:block">
        <Image
          src="/logo.png"
          alt="Carmichael Covers watermark"
          width={160}
          height={48}
          className="absolute right-6 bottom-6 w-40 opacity-10 pointer-events-none select-none"
        />
      </div>
    </section>
  );
}
