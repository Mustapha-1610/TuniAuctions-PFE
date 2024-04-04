export interface SocialSelectionForm {
  facebook: string;
  instagram: string;
  youtube: string;
  twitter: string;
  tiktok: string;
  [key: string]: string;
}
export interface auctionListingFormType {
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
  guarentee: string;
  minParticipatingBidders: number;
}
export interface pictureFiles {
  promotionalPicture: File | undefined;
  productPictures: FileList | null;
}
