export interface SocialSelectionForm {
  facebook: string;
  instagram: string;
  youtube: string;
  twitter: string;
  tiktok: string;
  [key: string]: string;
}
export interface premiumAuctionListingPreviewType {
  title: string;
  description: string;
  openingBid: number;
  participatingBidders: number;
  socialsSection: SocialSelectionForm;
  buyItNowSection: {
    promotionalPicture: string;
    promotionalDescription: string;
  };
  promotionalVideo: string;
  productPictures: string[];
  productCategory: string;
  originalPrice: number;
  startingDate: Date;
  guarentee: {
    length: number;
    period: string;
  };
  minParticipatingBidders: number;
}
export interface pictureFiles {
  promotionalPicture: File | undefined;
  productPictures: FileList | null;
}

export interface basicAuctionListingPreviewType {
  title: string;
  description: string;
  openingBid: number;
  participatingBidders: number;
  promotionalVideo: string;
  productPictures: string[];
  productCategory: string;
  originalPrice: number;
  startingDate: Date;
  guarentee: {
    length: number;
    period: string;
  };
  minParticipatingBidders: number;
}
export interface previewDisplayImages {
  promotionalImage: string;
  productImages: string[];
}

export interface standardAuctionListingPreviewType {
  title: string;
  description: string;
  openingBid: number;
  participatingBidders: number;
  buyItNowSection: {
    promotionalPicture: string;
    promotionalDescription: string;
  };
  promotionalVideo: string;
  productPictures: string[];
  productCategory: string;
  originalPrice: number;
  startingDate: Date;
  guarentee: {
    length: number;
    period: string;
  };
  minParticipatingBidders: number;
}
