"use client";

import { useState } from "react";
import Link from "next/link";

type Size  = { id:string; label:string; price:number };
type Fabric= { id:string; label:string; upcharge:number };

const sizes: Size[] = [
  { id:"sm",  label:"Small Lounge Chair",  price:89 },
  { id:"md",  label:"Medium Lounge Chair", price:99 },
  { id:"lg",  label:"Large Lounge Chair",  price:109 },
  { id:"xl",  label:"Adirondack",          price:119 },
];

const fabrics: Fabric[] = [
  { id:"poly",  label:"Performance Poly",     upcharge:0  },
  { id:"canvas",label:"All-Weather Canvas",   upcharge:20 },
  { id:"lux",   label:"Premium Lux Weave",    upcharge:40 },
];

export default function ConfiguratorWizard() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [size, setSize] = useState<Size|undefined>();
  const [fabric, setFabric] = useState<Fabric|undefined>();

  const subtotal = size && fabric ? size.price + fabric.upcharge : 0;

  function saveConfig() {
    console.log("[ConfiguratorWizard] saveConfig called", { size, fabric });
    if (!size || !fabric) return;
    const lineItem = {
      id: crypto.randomUUID(),
      name: `${size.label} – ${fabric.label}`,
      size: size.id,
      fabric: fabric.id,
      unit_amount: subtotal * 100, // cents for Stripe
      quantity: 1,
    };

    const cart: Array<Record<string, unknown>> = JSON.parse(localStorage.getItem("castawayCart") || "[]");
    cart.push(lineItem);
    localStorage.setItem("castawayCart", JSON.stringify(cart));
    setStep(3);
  }

  /* ---------- RENDER ---------- */
  console.log("[ConfiguratorWizard] render", { step, size, fabric });

  if (step === 3) {
    console.log("[ConfiguratorWizard] step 3 render", { size, fabric });
    return (
      <div className="text-center space-y-6 fade">
        <h2 className="font-serif text-3xl">Cover Added!</h2>
        <p className="text-lg">{size!.label} in {fabric!.label}</p>
        <p className="text-terracotta font-medium">${subtotal}</p>
        <Link href="/" className="underline">Back to Home</Link>{" · "}
        <a href="#" className="underline opacity-50 cursor-not-allowed">Checkout (coming soon)</a>
      </div>
    );
  }

  return (
    <div className="space-y-10 fade">
      {step === 1 && (
        <>
          <h2 className="font-serif text-2xl">1 Choose Size</h2>
          <ul className="space-y-3">
            {sizes.map(s => (
              <li key={s.id}>
                <button
                  onClick={() => {
                    console.log("[ConfiguratorWizard] setSize", s);
                    setSize(s);
                    setStep(2);
                  }}
                  className="w-full rounded-lg border px-4 py-3 hover:bg-sandshell flex justify-between"
                >
                  <span>{s.label}</span>
                  <span>${s.price}</span>
                </button>
              </li>
            ))}
          </ul>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="font-serif text-2xl">2 Choose Fabric</h2>
          <ul className="space-y-3">
            {fabrics.map(f => (
              <li key={f.id}>
                <button
                  onClick={() => {
                    console.log("[ConfiguratorWizard] setFabric", f);
                    setFabric(f);
                  }}
                  className={`w-full rounded-lg border px-4 py-3 flex justify-between 
                    ${fabric?.id===f.id ? "border-terracotta" : "hover:bg-sandshell"}`}
                >
                  <span>{f.label}</span>
                  <span>+${f.upcharge}</span>
                </button>
              </li>
            ))}
          </ul>
          <button
            className="mt-8 w-full rounded-full bg-terracotta px-6 py-3 text-white disabled:opacity-40"
            disabled={!fabric}
            onClick={() => {
              console.log("[ConfiguratorWizard] add to cart", { size, fabric, subtotal });
              saveConfig();
            }}
          >
            Add to Cart ${subtotal}
          </button>
        </>
      )}
    </div>
  );
}
