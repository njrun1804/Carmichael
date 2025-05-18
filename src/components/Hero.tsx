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
    <section className="relative flex h-[60vh] md:h-[70vh] items-center justify-center overflow-hidden px-6 text-center">
      {/* background photo */}
      <img
        src="/images/hero-placeholder.jpg"
        alt="Patio chair wrapped in a sleek custom cover"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      {/* gradient overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/10 via-black/10 to-black/30" />

      <div className="fade mx-auto max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">
          Apparel&nbsp;for&nbsp;Your Patio&nbsp;Furniture
        </h1>
        <p className="mx-auto max-w-xl text-lg md:text-xl">
          Tailored covers that slip on in seconds and shrug off every forecast.
        </p>
        <Link
          href="/configure"
          className="inline-block mt-8 rounded-full bg-terracotta px-8 py-3 font-medium text-white hover:bg-terracotta/90"
        >
          Design&nbsp;My&nbsp;Cover
        </Link>
      </div>
    </section>
  );
}
