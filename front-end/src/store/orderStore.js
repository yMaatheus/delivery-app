import create from 'zustand';

const useOrderStore = create((set) => ({
  orders: [],
  setOrders: (orders) => set({ orders }),
}));

export default useOrderStore;
