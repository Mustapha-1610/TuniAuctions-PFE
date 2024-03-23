import { IBidderFrontData } from "@/models/usersModels/types/bidderTypes";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
interface BidderProfileStoreType {
  bidderLocalStorageData: IBidderFrontData | null;
  setBidderLocalStorageData: (data: IBidderFrontData) => void;
}

export const useBidderProfileStore = create<BidderProfileStoreType>()(
  persist(
    (set) => ({
      bidderLocalStorageData: null,
      setBidderLocalStorageData: (data) =>
        set({ bidderLocalStorageData: data }),
    }),
    { name: "bidder" }
  )
);
