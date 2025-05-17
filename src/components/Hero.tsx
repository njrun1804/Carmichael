import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-6 bg-gray-100 py-24 text-center">
      <h1 className="text-4xl font-extrabold md:text-6xl">
        Premium&nbsp;Custom-Fit&nbsp;Covers
      </h1>
      <p className="max-w-xl text-lg text-gray-600">
        Protect your car, grill, or patio set with precision-tailored covers that look great and last.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/car" className="rounded-full bg-black px-6 py-3 text-white hover:bg-gray-800">
          Shop Car Covers
        </Link>
        <Link href="/grill" className="rounded-full border border-black px-6 py-3 hover:bg-gray-200">
          Shop Grill Covers
        </Link>
      </div>
    </section>
  );
}
