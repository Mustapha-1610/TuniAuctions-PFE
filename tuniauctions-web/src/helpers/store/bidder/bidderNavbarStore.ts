import { create } from "zustand";

interface navbarState {
  isMobileMenuOpen: boolean;
  isProfileMenuOpen: boolean;
  isNotificationsMenuOpen: boolean;
  setMobileMenuState: () => void;
  setProfileMenuState: () => void;
  setNotificationsMenuState: () => void;
  isAnautherizedModalOpen: boolean;
  setAnautherizedModalState: () => void;
}
export const useBidderNavbarState = create<navbarState>((set) => ({
  isMobileMenuOpen: false,
  isProfileMenuOpen: false,
  isNotificationsMenuOpen: false,
  isAnautherizedModalOpen: false,
  setMobileMenuState: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  setProfileMenuState: () =>
    set((state) => ({ isProfileMenuOpen: !state.isProfileMenuOpen })),
  setNotificationsMenuState: () =>
    set((state) => ({
      isNotificationsMenuOpen: !state.isNotificationsMenuOpen,
    })),
  setAnautherizedModalState: () =>
    set((state) => ({
      isAnautherizedModalOpen: !state.isAnautherizedModalOpen,
    })),
}));
