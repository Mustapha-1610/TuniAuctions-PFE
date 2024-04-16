import { create } from "zustand";

interface navigationState {
  selectedProfileComponent: "statsAndAdresses" | "notifications";

  selectedBalanceComponent: "balance" | "transactions";
  isAddLocationPresetModalOpen: boolean;
  setIsAddLocationPresetModalState: () => void;
  setSelectedBalanceComponent: (value: "balance" | "transactions") => void;
  setSelectedProfileComponent: (
    value: "statsAndAdresses" | "notifications"
  ) => void;
}
export const useBidderNavigationStore = create<navigationState>((set) => ({
  selectedProfileComponent: "statsAndAdresses",
  selectedBalanceComponent: "balance",
  isAddLocationPresetModalOpen: false,
  setSelectedProfileComponent: (value: "statsAndAdresses" | "notifications") =>
    set(() => ({
      selectedProfileComponent: value,
    })),

  setSelectedBalanceComponent: (value: "balance" | "transactions") =>
    set(() => ({
      selectedBalanceComponent: value,
    })),
  setIsAddLocationPresetModalState: () =>
    set((state) => ({
      isAddLocationPresetModalOpen: !state.isAddLocationPresetModalOpen,
    })),
}));
