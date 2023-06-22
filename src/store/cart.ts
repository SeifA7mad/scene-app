import { config } from "src/lib/config";
import { Product } from "src/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItemStore {
  id: string;
  quantity: number;
  size: Product["attributes"][number]["size"];
}

interface CartStore {
  items: CartItemStore[];
  addToCart: (item: CartItemStore) => void;
  removeFromCart: (itemId: string) => void;
  changeQuantity: (item: Omit<CartItemStore, "size">) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: item => {
        const existingItemIndex = get().items.findIndex(i => i.id === item.id && i.size === item.size);
        
        if (existingItemIndex > -1) {
          const items = [...get().items];
          items[existingItemIndex].quantity += item.quantity;

          set({ items });
        } else {
          set({ items: [...get().items, item] });
        }
      },
      removeFromCart: itemId =>
        set({ items: get().items.filter(i => i.id !== itemId) }),
      changeQuantity: item => {
        const items = get().items.map(i =>
          i.id === item.id ? { ...i, quantity: item.quantity } : i,
        );
        set({ items });
      },
    }),
    { name: `${config.app_name}_cart` },
  ),
);
