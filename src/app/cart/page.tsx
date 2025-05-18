"use client";
import { useCart } from "@/store/useCart";
import Link from "next/link";

export default function CartPage() {
  const { items, remove, updateQty, clear } = useCart();

  const subtotal = items.reduce(
    (sum, i) => sum + i.unit_amount * i.quantity,
    0
  );

  if (!items.length)
    return (
      <main className="flex flex-col items-center justify-center py-32 text-center">
        <p className="mb-6 text-lg">Your cart is empty.</p>
        <Link href="/configure" className="text-terracotta underline">
          Design a cover →
        </Link>
      </main>
    );

  return (
    <main className="mx-auto max-w-3xl px-6 py-24 space-y-10">
      <h1 className="font-serif text-3xl mb-6">Your Cart</h1>

      {items.map((i) => (
        <div
          key={i.id}
          className="flex items-center justify-between border-b py-4"
        >
          <div>
            <p className="font-medium">{i.name}</p>
            <p className="text-sm text-taupe">
              ${(i.unit_amount / 100).toFixed(2)} each
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="number"
              min={1}
              value={i.quantity}
              onChange={(e) => updateQty(i.id, Number(e.target.value))}
              className="w-14 rounded-md border px-2 py-1 text-center"
            />
            <button
              onClick={() => remove(i.id)}
              className="text-xs text-terracotta underline"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* subtotal + fake checkout */}
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">Subtotal</p>
        <p className="text-xl font-semibold">
          ${(subtotal / 100).toFixed(2)}
        </p>
      </div>

      <button
        disabled
        className="w-full rounded-full bg-terracotta py-3 text-white opacity-60"
      >
        Checkout with Stripe (coming soon)
      </button>

      <button
        onClick={clear}
        className="mx-auto block text-sm text-taupe underline"
      >
        Clear Cart
      </button>
    </main>
  );
}
