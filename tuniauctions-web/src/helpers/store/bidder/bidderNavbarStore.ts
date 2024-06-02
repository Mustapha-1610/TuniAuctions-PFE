import { create } from "zustand";

interface navbarState {
  isMobileMenuOpen: boolean;
  isProfileMenuOpen: boolean;
  isNotificationsMenuOpen: boolean;
  setMobileMenuState: () => void;
  setProfileMenuState: () => void;
  setNotificationsMenuState: () => void;
  isAnautherizedModalOpen: boolean;
  setAnautherizedModalState: (open: boolean) => void;
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
  setAnautherizedModalState: (open) =>
    set((state) => {
      // Only set the state if it is different from the current state
      if (state.isAnautherizedModalOpen !== open) {
        return { isAnautherizedModalOpen: open };
      }
      // Return an empty object if no state change is needed
      return {};
    }),
}));
