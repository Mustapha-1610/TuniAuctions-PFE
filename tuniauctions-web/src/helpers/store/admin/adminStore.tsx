import { create } from "zustand";
import { DeliveryType } from "@/models/types/delivery";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import { IBidder } from "@/models/usersModels/types/bidderTypes";
import { AuctionListingType } from "@/models/types/auctionListing";
import { adminModelType } from "@/models/types/admin";
interface adminStoreType {
  admin: adminModelType | null;
  setAdmin: (value: adminModelType | null) => void;
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
  seller: ISeller | null;
  setSeller: (value: ISeller | null) => void;
  isSellerModalOpen: boolean;
  setSellerModalState: (value: boolean) => void;
  bidder: IBidder | null;
  setBidder: (value: IBidder | null) => void;
  auction: AuctionListingType | null;
  setAuction: (value: AuctionListingType | null) => void;
  isSellerAccountApplicationModalOpen: boolean;
  setSellerAccountApplicationModalState: (value: boolean) => void;
  isBidderInformationModalOpen: boolean;
  setBidderInformationsModalState: (value: boolean) => void;
  isDeliveriesNavigationOpen: boolean;
  setDeliveriesNavigationState: (value: boolean) => void;
  isAuctionsNavigationOpen: boolean;
  setAuctionNavigationState: (value: boolean) => void;
}
export const useAdminStore = create<adminStoreType>((set) => ({
  admin: null,
  setAdmin: (value) => set(() => ({ admin: value })),
  isDeliveryModalOpen: false,
  setDeliveryModalState: (value) => set(() => ({ isDeliveryModalOpen: value })),

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
  bidder: null,
  setBidder: (value) =>
    set(() => ({
      bidder: value,
    })),
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
  setSellerAccountApplicationModalState: (value) =>
    set(() => ({
      isSellerAccountApplicationModalOpen: value,
    })),
  isBidderInformationModalOpen: false,
  setBidderInformationsModalState: (value) =>
    set(() => ({
      isBidderInformationModalOpen: value,
    })),
  isAuctionsNavigationOpen: false,
  isDeliveriesNavigationOpen: false,
  setAuctionNavigationState: (value) =>
    set(() => ({
      isAuctionsNavigationOpen: value,
    })),
  setDeliveriesNavigationState: (value) =>
    set(() => ({
      isDeliveriesNavigationOpen: value,
    })),
}));
