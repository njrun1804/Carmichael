import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import Footer from "@/components/Footer";

const perks = [
  {
    title: "Free Shipping",
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12V6a2 2 0 012-2h9l3 4h5a2 2 0 012 2v6h-3" />
        <circle cx="7.5" cy="17.5" r="1.5" />
        <circle cx="17.5" cy="17.5" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Lifetime Warranty",
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l7 3v5c0 5-3.8 9.4-7 10-3.2-.6-7-5-7-10V5l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Tailored Fit",
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3l2.5 5 5.5.8-4 4 .9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-4 5.5-.8L12 3z" />
      </svg>
    ),
  },
  {
    title: "Weatherproof",
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 16a4 4 0 012.5-3.7 5 5 0 019.5-.3A3.5 3.5 0 1116.5 16H5z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <CategoryGrid />
        {/* Perks section - appears after the marquee */}
        <section className="bg-black py-12 text-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-4">
            {perks.map(({ title, icon }) => (
              <div key={title} className="flex flex-col items-center gap-3 text-center">
                {icon}
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
