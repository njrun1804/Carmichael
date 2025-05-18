const gallery = [
  "/images/look1.png",
  "/images/look2.png",
  "/images/look3.png",
  "/images/look4.png",
];

export default function HomeGallery() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="h-64 w-64 rounded-lg object-cover shadow"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
