import { create } from "zustand";

export interface CartItem {
  id: string;
  name: string;
  config: Record<string, unknown>;
  unit_amount: number; // cents
  quantity: number;
}

interface CartState {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
}

const hydrate = (): CartItem[] =>
  JSON.parse(localStorage.getItem("castawayCart") || "[]");

export const useCart = create<CartState>((set, get) => ({
  items: [],
  add: (item) => {
    const items = [...get().items, item];
    localStorage.setItem("castawayCart", JSON.stringify(items));
    set({ items });
  },
  remove: (id) => {
    const items = get().items.filter((i) => i.id !== id);
    localStorage.setItem("castawayCart", JSON.stringify(items));
    set({ items });
  },
  updateQty: (id, qty) => {
    const items = get().items.map((i) =>
      i.id === id ? { ...i, quantity: qty } : i
    );
    localStorage.setItem("castawayCart", JSON.stringify(items));
    set({ items });
  },
  clear: () => {
    localStorage.removeItem("castawayCart");
    set({ items: [] });
  },
}));

// hydrate once client-side
if (typeof window !== "undefined") useCart.setState({ items: hydrate() });
