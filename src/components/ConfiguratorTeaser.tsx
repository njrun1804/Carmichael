import Link from "next/link";
import Image from "next/image";

export default function ConfiguratorTeaser() {
  return (
    <section className="bg-grid py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        {/* screenshot */}
        <Image
          src="/images/configurator-thumb.jpg"
          alt="Castaway Covers 3-D configurator"
          width={900}
          height={600}
          className="rounded-xl shadow-xl ring-1 ring-black/10"
          priority
        />

        {/* copy */}
        <div className="text-center md:text-left">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Build Your Custom Cover&nbsp;in&nbsp;3-D
          </h2>

          <p className="mx-auto mb-8 max-w-md text-gray-700 md:m-0">
            Enter dimensions, preview every fabric live, and make sure{" "}
            <span className="whitespace-nowrap">it fits—before you order.</span>
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
      </div>
    </section>
  );
}
