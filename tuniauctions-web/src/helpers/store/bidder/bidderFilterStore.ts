import { create } from "zustand";

interface filterState {
  selectedType: string;
  selectedCategory: string;
  setSelectedType: (value: string) => void;
  setSelectedCategory: (value: string) => void;
}
export const useBidderFilterStore = create<filterState>((set) => ({
  selectedType: "Upcoming",
  selectedCategory: "",
  setSelectedType: (value: string) =>
    set((state) => ({ selectedType: (state.selectedType = value) })),
  setSelectedCategory: (value: string) =>
    set((state) => ({ selectedCategory: (state.selectedCategory = value) })),
}));
