import { create } from "zustand";
import { DeliveryType } from "@/models/types/delivery";
import { ISellerFrontData } from "@/models/usersModels/types/sellerTypes";
import { AuctionListingType } from "@/models/types/auctionListing";
interface sellerStoreTypes {
  isDeliveryModalOpen: boolean;
  setDeliveryModalState: (value: boolean) => void;
  isUpcomingAuctionModalOpen: boolean;
  setUpcomingAucitonModalState: (value: boolean) => void;
  isOngoingAuctionModalOpen: boolean;
  setOngoingAuctionModalState: (value: boolean) => void;
  isFinishedAuctionModalOpen: boolean;
  setFinishedAuctionModalState: (value: boolean) => void;
  delivery: DeliveryType | null;
  setDelivery: (value: DeliveryType | null) => void;
  seller: ISellerFrontData | null;
  setSeller: (value: ISellerFrontData | null) => void;
  isSellerModalOpen: boolean;
  setSellerModalState: (value: boolean) => void;
  auction: AuctionListingType | null;
  setAuction: (value: AuctionListingType | null) => void;
  isAuctionStatisticsModalOpen: boolean;
  setAuctionStatisticsModalState: (value: boolean) => void;
}
export const useSellerStore = create<sellerStoreTypes>((set) => ({
  isDeliveryModalOpen: false,

  setDeliveryModalState: (value) => set(() => ({ isDeliveryModalOpen: value })),
  isAuctionStatisticsModalOpen: false,
  setAuctionStatisticsModalState: (value) =>
    set(() => ({ isAuctionStatisticsModalOpen: value })),
  isUpcomingAuctionModalOpen: false,
  setUpcomingAucitonModalState: (value) =>
    set(() => ({ isUpcomingAuctionModalOpen: value })),
  isOngoingAuctionModalOpen: false,
  setOngoingAuctionModalState: (value) =>
    set(() => ({ isOngoingAuctionModalOpen: value })),
  isFinishedAuctionModalOpen: false,
  setFinishedAuctionModalState: (value) =>
    set(() => ({ isFinishedAuctionModalOpen: value })),

  delivery: null,
  setDelivery: (value) => set(() => ({ delivery: value })),
  seller: null,
  setSeller: (value) => set(() => ({ seller: value })),
  auction: null,
  setAuction: (value) =>
    set(() => ({
      auction: value,
    })),
  isSellerModalOpen: false,
  setSellerModalState: (value) =>
    set(() => ({
      isSellerModalOpen: value,
    })),
  isSellerAccountApplicationModalOpen: false,
}));
