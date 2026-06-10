import { create } from "zustand";

export interface CartItem {
  id: string;
  productId: string;

  name: string;

  image: string;

  weight: string;

  price: number;

  quantity: number;

  total: number;
}

interface CartStore {
  cartItems: CartItem[];

  addToCart: (item: CartItem) => void;

  removeItem: (index: number) => void;

  clearCart: () => void;

  getTotal: () => number;
}

const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],

  addToCart: (item) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
    })),

  removeItem: (index) =>
    set((state) => ({
      cartItems: state.cartItems.filter((_, i) => i !== index),
    })),

  clearCart: () =>
    set({
      cartItems: [],
    }),

  getTotal: () => get().cartItems.reduce((sum, item) => sum + item.total, 0),
}));

export default useCartStore;
