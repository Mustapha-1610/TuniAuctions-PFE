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
  uniqueViews: {
    gender: {
      Male: number;

      Female: number;

      [key: string]: number | undefined;
    };
    bidders: [string];
  };
  status: "Pending Start" | "Ongoing" | "Finished";
  biddingRoomId?: string;
  sellerId: string;
  _id: string;
  participatingBidders: {
    bidderId: string;
    lockedBalance: number;
  }[];
  winningBidder: {
    name: string;
    _id: string;
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
  uniqueViews: {
    gender: {
      Male: number;

      Female: number;

      [key: string]: number | undefined;
    };
    bidders: [string];
  };
  status: "Pending Start" | "Ongoing" | "Finished";
  biddingRoomId?: string;
  _id: string;
  participatingBidders: {
    bidderId: string;
    lockedBalance: number;
  }[];
  winningBidder: {
    name: string;
    _id: string;
    winningPrice: number;
  };
};
