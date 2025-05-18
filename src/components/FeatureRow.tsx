import { Sun, Droplet, Wind, Hand } from "lucide-react";

const FEATURES = [
  { icon: Sun,    title: "UV-Proof",      text: "Fade-blocking pigment." },
  { icon: Droplet, title: "Water-Tight",  text: "Seam-sealed & breathable." },
  { icon: Wind,    title: "Storm-Secure", text: "Snug fit resists gusts." },
  { icon: Hand,    title: "Easy On/Off",  text: "Slides off before guests arrive." },
];

export default function FeatureRow() {
  return (
    <section className="grid grid-cols-4 gap-6 py-16 text-center">
      {FEATURES.map(({ icon: Icon, title, text }) => (
        <div key={title}>
          <Icon className="mx-auto mb-2 h-6 w-6" strokeWidth={1.2} />
          <h3 className="mb-1 font-medium">{title}</h3>
          <p className="text-sm text-gray-600">{text}</p>
        </div>
      ))}
    </section>
  );
}
