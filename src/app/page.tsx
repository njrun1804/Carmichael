import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import Footer from "@/components/Footer";
import Image from "next/image";

const logos = [
  { src: "/logos/ford.svg", alt: "Ford" },
  { src: "/logos/bmw.svg", alt: "BMW" },
  { src: "/logos/honda.svg", alt: "Honda" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <CategoryGrid />
        <section className="overflow-hidden py-8">
          <div className="flex gap-12 animate-marquee" aria-label="Brand logos">
            {logos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
