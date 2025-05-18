import Link from "next/link";
import Image from "next/image";

const categories = [
  { href: "/car",   label: "Car Covers",   img: "/images/placeholder-car.png" },
  { href: "/grill", label: "Grill Covers", img: "/images/placeholder-grill.png" },
  { href: "/patio", label: "Patio Covers", img: "/images/placeholder-patio.png" },
];

export default function CategoryGrid() {
  return (
    <section className="fade-in mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-3">
      {categories.map(({ href, label, img }) => (
        <Link
          key={label}
          href={href}
          className="group relative overflow-hidden rounded-xl shadow transition transform hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Image */}
          <div className="relative h-56 w-full">
            <Image
              src={img}
              alt={label}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Overlay label */}
          <span className="absolute inset-0 flex items-end justify-center bg-black/50 p-4 text-xl font-semibold text-white">
            {label}
          </span>
        </Link>
      ))}
    </section>
  );
}
