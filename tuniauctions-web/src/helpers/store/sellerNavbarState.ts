import { create } from "zustand";

export const useSellerNavbarStore = create((set) => ({
  isSideBarOpen: false,
  increasePopulation: () => set((state: any) => ({ bears: state.bears! })),
  removeAllBears: () => set({ bears: 0 }),
  changeSideBarState: () =>
    set((state: any) => ({ isSideBarOpen: !state.isSideBarOpen })),
}));
