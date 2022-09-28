import create from 'zustand';

const useProductsStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  cart: [],
  setCart: (cart) => set({ cart }),
}));

export default useProductsStore;
