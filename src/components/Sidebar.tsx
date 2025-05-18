"use client";
import StepShape from "@/components/StepShape";
import StepSize from "@/components/StepSize";
import StepFabric from "@/components/StepFabric";
import StepOptions from "@/components/StepOptions";
import { useConfig } from "@/store/useConfig";
import { useCart } from "@/store/useCart";
import { fabricMeta } from "@/components/StepFabric";
import { optCosts } from "@/components/StepOptions";

export default function Sidebar() {
  const cfg = useConfig();
  const add = useCart((s) => s.add);

  // ---- price calc ----
  const surface = cfg.width * cfg.depth; // simple area
  const base = 99 + surface * 0.5; // base + area factor
  const fabric = fabricMeta[cfg.fabric].up; // fabric up-charge
  const extras = Object.entries(cfg.options)
    .filter(([, v]) => v)
    .reduce((sum, [k]) => sum + optCosts[k], 0);
  const total = (base + fabric + extras).toFixed(0);

  // ---- add-to-cart ----
  function addToCart() {
    add({
      id: crypto.randomUUID(),
      name: `${cfg.shape} chair – ${cfg.fabric} fabric`,
      config: cfg as unknown as Record<string, unknown>,
      unit_amount: Number(total) * 100,
      quantity: 1,
    });
    alert("Added to cart!");
  }

  return (
    <aside className="w-full max-w-xs shrink-0 border-l bg-white px-6 py-8">
      <h2 className="mb-6 font-serif text-2xl">Configure Cover</h2>

      <StepShape />
      <StepSize />
      <StepFabric />
      <StepOptions />

      {/* price + CTA */}
      <div className="mt-4 rounded-lg bg-sandshell p-4 text-center">
        <p className="text-sm text-taupe">Total</p>
        <p className="text-3xl font-semibold">${total}</p>
        <button
          onClick={addToCart}
          className="mt-4 w-full rounded-full bg-terracotta py-2 text-white hover:bg-terracotta/90"
        >
          Add&nbsp;to&nbsp;Cart
        </button>
      </div>
    </aside>
  );
}
