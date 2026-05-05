import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, qty: number) => void;
  clearCart: () => void;
  totalItems: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const existing = get().items.find((i) => i.id === product.id);
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.id === product.id
                ? { ...i, quantity: i.quantity + product.quantity }
                : i
            ),
          });
        } else {
          set({ items: [...get().items, product] });
        }
      },
      removeItem: (id) =>
        set({ items: get().items.filter((i) => i.id !== id) }),
      updateQuantity: (id, qty) =>
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, quantity: qty } : i
          ),
        }),
      clearCart: () => set({ items: [] }),
      totalItems: () => get().items.reduce((acc, i) => acc + i.quantity, 0),
    }),
    { name: "cart-storage" }
  )
);
