import { Sun, Droplet, Wind, Hand } from "lucide-react";

const items = [
  { icon: Sun,   title: "UV-Proof",          text: "Fade-blocking pigment." },
  { icon: Droplet, title: "Water-Tight",      text: "Seam-sealed & breathable." },
  { icon: Wind, title: "Storm-Secure",      text: "Snug fit resists gusts." },
  { icon: Hand, title: "Easy On/Off",       text: "Slides off before guests arrive." },
];

export default function Pillars() {
  return (
    <section className="py-16 bg-sandshell" id="why">
      <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4 px-6">
        {items.map(({ icon:Icon, title, text }) => (
          <div key={title} className="text-center fade">
            <Icon className="mx-auto h-10 w-10 mb-4 stroke-terracotta" />
            <h3 className="font-medium mb-1">{title}</h3>
            <p className="text-sm text-taupe">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
