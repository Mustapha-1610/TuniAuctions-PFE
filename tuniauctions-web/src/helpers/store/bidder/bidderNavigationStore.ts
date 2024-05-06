import { create } from "zustand";

interface navigationState {
  selectedProfileComponent: "statsAndAdresses" | "notifications";

  selectedBalanceComponent: "balance" | "transactions";
  isAddLocationPresetModalOpen: boolean;
  selectedDashboardComponent: "Auctions" | "Deliveries";

  setIsAddLocationPresetModalState: () => void;
  setSelectedBalanceComponent: (value: "balance" | "transactions") => void;
  setSelectedProfileComponent: (
    value: "statsAndAdresses" | "notifications"
  ) => void;
  setSelectedDashboardComponent: (value: "Auctions" | "Deliveries") => void;
  isEditInformationsModalOpen: boolean;
  setEditInformationsModalState: (value: boolean) => void;
  isEditEmailModalOpen: boolean;
  setEditEmailModalState: (value: boolean) => void;
}
export const useBidderNavigationStore = create<navigationState>((set) => ({
  selectedProfileComponent: "statsAndAdresses",
  selectedBalanceComponent: "balance",
  isAddLocationPresetModalOpen: false,
  selectedDashboardComponent: "Auctions",
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
  setSelectedDashboardComponent: (value: "Auctions" | "Deliveries") =>
    set(() => ({
      selectedDashboardComponent: value,
    })),
  isEditEmailModalOpen: false,
  isEditInformationsModalOpen: false,
  setEditInformationsModalState: (value) =>
    set(() => ({
      isEditInformationsModalOpen: value,
    })),
  setEditEmailModalState: (value) =>
    set(() => ({
      isEditEmailModalOpen: value,
    })),
}));
