import Link from "next/link";
import Image from "next/image";

export default function ConfiguratorTeaser() {
  return (
    <section
      className="bg-grid py-16 md:py-20"
      style={{
        opacity: 1,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
        backgroundColor: "#fff",
      }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        {/* screenshot */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/configurator-thumb.png"
            alt="Castaway Covers 3-D configurator"
            width={420}
            height={280}
            className="rounded-xl shadow-xl ring-1 ring-black/10 bg-white"
            priority
          />
        </div>

        {/* copy */}
        <div className="text-center md:text-left">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Build Your Custom Cover in{" "}
            <span className="whitespace-nowrap">3-D</span>
          </h2>

          <p className="mx-auto mb-8 max-w-md text-gray-700 md:m-0">
            Enter dimensions, preview every fabric live, and make sure
            <span className="whitespace-nowrap"> it fits—before you order.</span>
          </p>

          <Link
            href="/configure"
            className="inline-block rounded-full bg-terracotta px-9 py-3 font-medium text-white shadow-lg border border-terracotta/80 hover:bg-terracotta/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-terracotta/50 transition"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.18)" }}
          >
            Launch Configurator
          </Link>
        </div>
      </div>
    </section>
  );
}
