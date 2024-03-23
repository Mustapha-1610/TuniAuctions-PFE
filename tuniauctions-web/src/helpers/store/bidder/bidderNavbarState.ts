import { create } from "zustand";

interface BidderNavbarState {
  isLoginModalOpen: boolean;
  isSignupModalOpen: boolean;
  isGenderSignupFormModalOpen: boolean;
  setLoginModalState: () => void;
  setSignupModalState: () => void;
  setGenderSignupFormModalState: () => void;
}
export const useBidderNavbarState = create<BidderNavbarState>((set) => ({
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
}));
