export default function Hero() {
  return (
    <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden">
      <img
        src="/hero-lifestyle.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 bg-black/40 p-6 rounded-xl">
        <h1 className="text-4xl font-extrabold md:text-6xl">
          Premium&nbsp;Custom-Fit&nbsp;Covers
        </h1>
        <p className="max-w-xl text-lg text-gray-600">
          Protect your car, grill, or patio set with precision-tailored covers that look great and last.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/car"   className="rounded-full bg-black px-6 py-3 text-white hover:bg-gray-800">Shop Car Covers</a>
          <a href="/grill" className="rounded-full border border-black px-6 py-3 hover:bg-gray-200">Shop Grill Covers</a>
        </div>
      </div>
    </section>
  );
}
