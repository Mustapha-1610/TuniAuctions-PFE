import { create } from "zustand";

interface navigationState {
  selectedProfileComponent: "statsAndAdresses" | "notifications";
  setSelectedProfileComponent: (
    value: "statsAndAdresses" | "notifications"
  ) => void;
  selectedBalanceComponent: "balance" | "transactions";
  setSelectedBalanceComponent: (value: "balance" | "transactions") => void;
}
export const useBidderNavigationStore = create<navigationState>((set) => ({
  selectedProfileComponent: "statsAndAdresses",
  setSelectedProfileComponent: (value: "statsAndAdresses" | "notifications") =>
    set(() => ({
      selectedProfileComponent: value,
    })),
  selectedBalanceComponent: "balance",
  setSelectedBalanceComponent: (value: "balance" | "transactions") =>
    set(() => ({
      selectedBalanceComponent: value,
    })),
}));
