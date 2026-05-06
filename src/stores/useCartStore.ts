import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ProductType, CartItemType } from "@/types/productType";
interface CartStore {
  cartItems: CartItemType[];
  addItem: (product: ProductType) => void;
  decreaseQuantity: (title: string) => void;
  deleteItem: (title: string) => void;
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

      // 減少商品數量
      decreaseQuantity: (title: string) => {
        set((state) => ({
          cartItems: state.cartItems
            .map((item) => {
              return item.title === title ? { ...item, quantity: item.quantity - 1 } : item;
            })
            .filter((item) => item.quantity > 0), // 移除數量為 0 的項目
        }));
      },

      // 刪除單一 item
      deleteItem: (title: string) => {
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.title !== title),
        }));
      },

      // 清空購物車
      clearCart: () => set({ cartItems: [] }),
    }),
    { name: "cart-storage" },
  ),
);

export default useCartStore;
