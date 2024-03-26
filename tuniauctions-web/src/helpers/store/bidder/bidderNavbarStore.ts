import { create } from "zustand";

interface navbarState {
  isMobileMenuOpen: boolean;
  isProfileMenuOpen: boolean;
  isNotificationsMenuOpen: boolean;
  setMobileMenuState: () => void;
  setProfileMenuState: () => void;
  setNotificationsMenuState: () => void;
}
export const useBidderNavbarState = create<navbarState>((set) => ({
  isMobileMenuOpen: false,
  isProfileMenuOpen: false,
  isNotificationsMenuOpen: false,
  setMobileMenuState: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  setProfileMenuState: () =>
    set((state) => ({ isProfileMenuOpen: !state.isProfileMenuOpen })),
  setNotificationsMenuState: () =>
    set((state) => ({
      isNotificationsMenuOpen: !state.isNotificationsMenuOpen,
    })),
}));
