import { connect } from "@/db/dbConfig";
import auctionListingModel from "@/models/auctionListingModels/auctionListing";
import { AuctionListingType } from "@/models/types/auctionListing";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    await connect();
    const randomizedAuctionListings: AuctionListingType[] =
      await auctionListingModel.aggregate([
        { $match: { listingType: "Premium", status: "Pending Start" } },
        { $sample: { size: 5 } },
      ]);
    const closestStartingDateListings: AuctionListingType[] =
      await auctionListingModel
        .find({
          status: "Pending Start",
        })
        .sort({ startingDate: 1 })
        .limit(2);
    return NextResponse.json<HomePageFetchListingsResponse>({
      closestStartingDateListings,
      randomizedAuctionListings,
      success: true,
    });
  } catch (err) {
    return serverErrorHandler(err);
  }
}

export interface HomePageFetchListingsResponse {
  success: true;
  randomizedAuctionListings: AuctionListingType[];
  closestStartingDateListings: AuctionListingType[];
}
