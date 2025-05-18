import Link from "next/link";

export default function ConfiguratorTeaser() {
  return (
    <section className="bg-grid bg-sandshell py-24 text-center">
      <h2 className="font-serif text-3xl md:text-4xl mb-4">
        Meet the Size + Fabric Configurator
      </h2>
      <p className="mx-auto mb-10 max-w-2xl">
        Answer two quick questions and preview your cover in 3-D (coming soon).
      </p>
      <Link
        href="/configure"
        className="rounded-full bg-terracotta px-8 py-3 font-medium text-white hover:bg-terracotta/90"
      >
        Launch&nbsp;Preview&nbsp;→
      </Link>
    </section>
  );
}
