import create from 'zustand';

const useProductsStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));

export default useProductsStore;
