import Link from "next/link";

const categories = [
  { href: "/car",   label: "Car Covers",   img: "/placeholder-car.jpg" },
  { href: "/grill", label: "Grill Covers", img: "/placeholder-grill.jpg" },
  { href: "/patio", label: "Patio Covers", img: "/placeholder-patio.jpg" },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-3">
      {categories.map(({ href, label, img }) => (
        <Link
          key={label}
          href={href}
          className="group relative overflow-hidden rounded-xl shadow transition transform hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Image */}
          <img
            src={img}
            alt={label}
            className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay label */}
          <span className="absolute inset-0 flex items-end justify-center bg-black/50 p-4 text-xl font-semibold text-white">
            {label}
          </span>
        </Link>
      ))}
    </section>
  );
}
