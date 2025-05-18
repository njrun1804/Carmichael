export default function SiteFooter() {
  return (
    <footer className="bg-charcoal text-sandshell py-16">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-6">
        <div>
          <h3 className="font-serif text-lg mb-2">Castaway Covers</h3>
          <p className="text-sm">Tailored protection, made in the USA.</p>
        </div>
        <div>
          <h4 className="mb-1 font-medium">Support</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Sizing Guide</a></li>
            <li><a href="#" className="hover:underline">Care Instructions</a></li>
            <li><a href="#" className="hover:underline">Warranty</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-1 font-medium">Stay in Touch</h4>
          <form className="flex">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-3 py-2 rounded-l-md text-charcoal"
            />
            <button className="bg-terracotta px-4 rounded-r-md">→</button>
          </form>
        </div>
      </div>
      <p className="text-xs text-center mt-10">© {new Date().getFullYear()} Castaway Covers</p>
    </footer>
  );
}
