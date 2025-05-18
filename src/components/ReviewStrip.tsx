export default function ReviewStrip() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="mx-auto max-w-2xl">
        <blockquote className="italic text-lg mb-4">“The fit is perfect and the fabric is so much nicer than anything at the big box stores.”</blockquote>
        <div className="flex justify-center gap-4">
          <button className="rounded-full border px-3 py-1">←</button>
          <button className="rounded-full border px-3 py-1">→</button>
        </div>
      </div>
    </section>
  );
}
