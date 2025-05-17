const imgs = [
  "/images/look1.jpg", "/images/look2.jpg",
  "/images/look3.jpg", "/images/look4.jpg"
];

export default function Lookbook() {
  return (
    <section className="py-20 bg-white">
      <h2 className="font-serif text-center text-3xl md:text-4xl mb-12">
        Real Patios, Real Fits
      </h2>
      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-4 px-6 space-y-4">
        {imgs.map(src => (
          <img key={src} src={src} alt="Covered furniture" className="rounded-lg w-full fade" />
        ))}
      </div>
    </section>
  );
}
