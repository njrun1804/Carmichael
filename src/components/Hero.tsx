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
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <img
        src="/images/hero-placeholder.jpg"
        alt="Patio chair wrapped in a sleek custom cover"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="fade text-center px-6">
        <h1 className="font-serif text-4xl md:text-6xl mb-4">
          Apparel&nbsp;for&nbsp;Your Patio&nbsp;Furniture
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl">
          Tailored covers that slip on in seconds and shrug off every forecast.
        </p>
        <a
          href="#shop"
          className="inline-block mt-8 rounded-full bg-terracotta px-8 py-3 font-medium text-white"
        >
          Design&nbsp;My&nbsp;Cover
        </a>
      </div>
    </section>
  );
}
