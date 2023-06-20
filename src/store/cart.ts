import { config } from "src/lib/config";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartStore {
  items: string[];
  addToCart: (item: string) => void;
  removeFromCart: (item: string) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: item => set({ items: [...get().items, item] }),
      removeFromCart: item =>
        set({ items: get().items.filter(i => i !== item) }),
    }),
    { name: `${config.app_name}_cart` },
  ),
);
