import { create } from "zustand";

const useCartStore = create((set, get) => ({
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
