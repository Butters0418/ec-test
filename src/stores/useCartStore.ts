import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ProductType, CartProductType } from "@/types/productType";
interface CartStore {
  cartItems: CartProductType[];
  addItem: (product: ProductType) => void;

  clearCart: () => void;
}

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      // 購物車列表
      cartItems: [],

      // 加入購物車
      addItem: (product: ProductType) => {
        set((state) => {
          // 是否已存在購物車
          const existingItem = state.cartItems.find((item) => item.title === product.title);
          if (existingItem) {
            return {
              cartItems: state.cartItems.map((item) => (item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item)),
            };
          } else {
            return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
          }
        });
      },

      // 清空購物車
      clearCart: () => set({ cartItems: [] }),
    }),
    { name: "cart-storage" },
  ),
);

export default useCartStore;
