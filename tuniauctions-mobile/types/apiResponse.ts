import { AuctionListingType } from "./auctionListing";

export interface HomePageFetchListingsResponse {
  success: true;
  randomizedAuctionListings: AuctionListingType[];
  closestStartingDateListings: AuctionListingType[];
}
