import { create } from "zustand";
import { ObjectId } from "mongoose";
import { DeliveryType } from "@/models/types/delivery";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import { IBidder } from "@/models/usersModels/types/bidderTypes";
import { AuctionListingType } from "@/models/types/auctionListing";
interface adminStoreType {
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
  upcomingAuctionListingId: ObjectId | null;
  setUpcomingAuctionListingId: (value: ObjectId | null) => void;
  ongoingAuctionListingId: ObjectId | null;
  setOngoingAuctionListingId: (value: ObjectId | null) => void;
  finishedAuctionListingId: ObjectId | null;
  setFinishedAuctionListingId: (value: ObjectId | null) => void;
  seller: ISeller | null;
  setSeller: (value: ISeller | null) => void;
  isSellerModalOpen: boolean;
  setSellerModalState: (value: boolean) => void;
  bidder: IBidder | null;
  setBidder: (value: IBidder | null) => void;
  auction: AuctionListingType | null;
  setAuction: (value: AuctionListingType | null) => void;
}
export const useAdminStore = create<adminStoreType>((set) => ({
  isDeliveryModalOpen: false,
  setDeliveryModalState: (value: boolean) =>
    set(() => ({ isDeliveryModalOpen: value })),

  isUpcomingAuctionModalOpen: false,
  setUpcomingAucitonModalState: (value: boolean) =>
    set(() => ({ isUpcomingAuctionModalOpen: value })),
  isOngoingAuctionModalOpen: false,
  setOngoingAuctionModalState: (value: boolean) =>
    set(() => ({ isOngoingAuctionModalOpen: value })),
  isFinishedAuctionModalOpen: false,
  setFinishedAuctionModalState: (value: boolean) =>
    set(() => ({ isFinishedAuctionModalOpen: value })),

  delivery: null,
  setDelivery: (value: DeliveryType | null) => set(() => ({ delivery: value })),

  upcomingAuctionListingId: null,
  setUpcomingAuctionListingId: (value: ObjectId | null) =>
    set(() => ({ upcomingAuctionListingId: value })),

  ongoingAuctionListingId: null,
  setOngoingAuctionListingId: (value: ObjectId | null) =>
    set(() => ({ ongoingAuctionListingId: value })),

  finishedAuctionListingId: null,
  setFinishedAuctionListingId: (value: ObjectId | null) =>
    set(() => ({ finishedAuctionListingId: value })),
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
}));
