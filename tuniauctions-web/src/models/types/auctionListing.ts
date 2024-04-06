import { ObjectId } from "mongodb";

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

export type AuctionListingType = {
  listingType?: string;
  title: string;
  description: string;
  category: string;
  promotionalVideo: string;
  productPictures?: string[];
  platformFees: number;
  originalPrice: number;
  startingDate: Date;
  endDate?: Date;
  openingBid?: number;
  guarantee?: string;
  buyItNowSection?: BuyItNowSection;
  socialsSection?: SocialsSection;
  featured?: boolean;
  minParticipatingBidders: number;
  totalViews?: string[];
  uniqueViews?: string[];
  genderViews?: {
    male?: number;
    female?: number;
  };
  status: "awaiting" | "ongoing" | "finished";
  biddingRoomId?: ObjectId;
  sellerId: ObjectId;
  _id: ObjectId;
};

export type sellerAuctionListingFrontData = {
  listingType?: string;
  title: string;
  description: string;
  category: string;
  promotionalVideo: string;
  productPictures?: string[];
  platformFees: number;
  originalPrice: number;
  startingDate: Date;
  endDate?: Date;
  openingBid?: number;
  guarantee?: string;
  featured?: boolean;
  minParticipatingBidders: number;
  totalViews?: string[];
  uniqueViews?: string[];
  genderViews?: {
    male?: number;
    female?: number;
  };
  status: "awaiting" | "ongoing" | "finished";
  biddingRoomId?: ObjectId;
  _id: ObjectId;
};
