import { ObjectId } from "mongodb";
import mongoose, { Document } from "mongoose";

type BuyItNowSection = {
  promotionalPicture?: string;
  promotionalDescription?: string;
  storeLink?: string;
};

type SocialsSection = {
  facebook?: string;
  instagram?: string;
  youtube?: string;
  twitter?: string;
  tiktok?: string;
};
type LockedBalance = {
  lockedAmount: number;
};
export interface AuctionListingType extends Document {
  listingType: string;
  title: string;
  description: string;
  category: string;
  promotionalVideo: string;
  productPictures: string[];
  platformFees: number;
  originalPrice: number;
  startingDate: Date;
  endDate?: Date;
  openingBid: number;
  guarantee?: string;
  buyItNowSection?: BuyItNowSection;
  socialsSection?: SocialsSection;
  featured: boolean;
  minParticipatingBidders: number;
  totalViews: number;
  uniqueViews?: string[];
  genderViews: {
    Male: number;
    Female: number;
    [key: string]: number | undefined;
  };
  status: "Pending Start" | "Ongoing" | "Finished";
  biddingRoomId?: ObjectId;
  sellerId: ObjectId;
  _id: ObjectId;
  participatingBidders: {
    bidderId: mongoose.Types.ObjectId;
    lockedBalance: number;
  }[];
  winningBidder: {
    name: string;
    _id: ObjectId;
    winningPrice: number;
  };
}

export type sellerAuctionListingFrontData = {
  listingType: string;
  title: string;
  description: string;
  category: string;
  promotionalVideo: string;
  productPictures: string[];
  platformFees: number;
  originalPrice: number;
  startingDate: Date;
  endDate?: Date;
  openingBid: number;
  guarantee?: string;
  featured: boolean;
  minParticipatingBidders: number;
  totalViews: number;
  uniqueViews?: string[];
  genderViews: {
    Male: number;
    Female: number;
    [key: string]: number | undefined;
  };
  status: "Pending Start" | "Ongoing" | "Finished";
  biddingRoomId?: ObjectId;
  _id: ObjectId;
  participatingBidders: {
    bidderId: mongoose.Types.ObjectId;
    lockedBalance: number;
  }[];
  winningBidder: {
    name: string;
    _id: ObjectId;
    winningPrice: number;
  };
};
