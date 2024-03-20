import { create } from "zustand";

export const useBidderNavbarState = create((set) => ({
  isLoginModalOpen: false,
  isSignupModalOpen: false,
  isGenderSignupFormModalOpen: false,
  setLoginModalState: () =>
    set((state: any) => ({ isLoginModalOpen: !state.isLoginModalOpen })),
  setSignupModalState: () =>
    set((state: any) => ({ isSignupModalOpen: !state.isSignupModalOpen })),
  setGenderSignupFormModalState: () =>
    set((state: any) => ({
      isGenderSignupFormModalOpen: !state.isGenderSignupFormModalOpen,
    })),
  isSideBarOpen: false,
  increasePopulation: () => set((state: any) => ({ bears: state.bears! })),
  removeAllBears: () => set({ bears: 0 }),
  changeSideBarState: () =>
    set((state: any) => ({ isSideBarOpen: !state.isSideBarOpen })),
}));
