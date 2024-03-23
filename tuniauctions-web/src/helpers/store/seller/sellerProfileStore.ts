import { ISellerFrontData } from "@/models/usersModels/types/sellerTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware";
interface sellerProfileStoreType {
  sellerLocaleStorageData: ISellerFrontData | null;
  setSellerLocalStorageData: (data: ISellerFrontData) => void;
}

export const useSellerProfileStore = create<sellerProfileStoreType>()(
  persist(
    (set) => ({
      sellerLocaleStorageData: null,
      setSellerLocalStorageData: (data) =>
        set({ sellerLocaleStorageData: data }),
    }),
    { name: "Seller" }
  )
);
