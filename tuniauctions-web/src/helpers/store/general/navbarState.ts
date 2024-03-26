import { create } from "zustand";

interface navbarState {
  isLoginModalOpen: boolean;
  isSignupModalOpen: boolean;
  isForgotPasswordModalOpen: boolean;
  isGenderSignupFormModalOpen: boolean;
  isMobileMenuOpen: boolean;
  setLoginModalState: () => void;
  setSignupModalState: () => void;
  setGenderSignupFormModalState: () => void;
  setIsForgotPasswordModalState: () => void;
  setMobileMenuState: () => void;
}
export const useNavbarState = create<navbarState>((set) => ({
  isLoginModalOpen: false,
  isSignupModalOpen: false,
  isGenderSignupFormModalOpen: false,
  isForgotPasswordModalOpen: false,
  isMobileMenuOpen: false,
  setLoginModalState: () =>
    set((state) => ({ isLoginModalOpen: !state.isLoginModalOpen })),
  setSignupModalState: () =>
    set((state) => ({ isSignupModalOpen: !state.isSignupModalOpen })),
  setGenderSignupFormModalState: () =>
    set((state) => ({
      isGenderSignupFormModalOpen: !state.isGenderSignupFormModalOpen,
    })),
  setIsForgotPasswordModalState: () =>
    set((state) => ({
      isForgotPasswordModalOpen: !state.isForgotPasswordModalOpen,
    })),
  setMobileMenuState: () =>
    set((state) => ({
      isMobileMenuOpen: !state.isMobileMenuOpen,
    })),
}));

export const useMobileNavbarStore = create;
