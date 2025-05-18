import Link from "next/link";
import Image from "next/image";

export default function ConfiguratorTeaser() {
  return (
    <section className="relative overflow-hidden bg-grid py-24 text-center">
      {/* optional décor image — delete this <Image> if you don’t have the file yet */}
      <Image
        src="/images/configurator-thumb.jpg"   // screenshot of the live builder
        alt=""
        width={900}
        height={560}
        className="pointer-events-none absolute left-1/2 top-1/2 w-[48rem]
                   -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-xl ring-1 ring-black/10
                   hidden md:block"
      />

      <div className="relative z-10 mx-auto max-w-xl px-6">
        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
          Build Your Custom Cover in 3-D
        </h2>

        <p className="mx-auto mb-8 max-w-md text-gray-700">
          Pick a shape, enter precise dimensions, preview fabrics live, and add
          the perfect fit to your cart in under a minute.
        </p>

        <Link
          href="/configure"
          className="inline-block rounded-full bg-terracotta px-9 py-3 font-medium
                     text-white shadow transition hover:bg-terracotta/90 focus-visible:outline-none
                     focus-visible:ring-4 focus-visible:ring-terracotta/50"
        >
          Launch Configurator
        </Link>
      </div>
    </section>
  );
}
