import Link from "next/link";

export default function ConfiguratorHero() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center">
        {/* marketing copy */}
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Build Your Custom Cover in 3-D
        </h2>
        <p className="max-w-xl text-gray-600">
          Enter dimensions, preview every fabric live, and make sure it fits—
          before you order.
        </p>

        {/* CTA */}
        <Link href="/configure" legacyBehavior>
          <a className="rounded-full bg-gray-900 px-6 py-3 font-medium text-white shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900">
            Launch Configurator
          </a>
        </Link>

        {/* little “select your size/fabric” mock-up card */}
        <img
          src="/images/size-fab-picker.png"
          alt="Select size and fabric"
          className="w-full max-w-sm rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
