import { adminModelType } from "@/models/types/admin";
import { ISellerFrontData } from "@/models/usersModels/types/sellerTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware";
interface adminProfileStoreType {
  adminLocalStorageData: adminModelType | null;
  setAdminLocalStorageData: (data: adminModelType | null) => void;
}

export const useAdminProfileStore = create<adminProfileStoreType>()(
  persist(
    (set) => ({
      adminLocalStorageData: null,
      setAdminLocalStorageData: (data) => set({ adminLocalStorageData: data }),
    }),
    { name: "Seller" }
  )
);
