import { connect } from "@/db/dbConfig";
import auctionListingModel from "@/models/auctionListingModels/auctionListing";
import { AuctionListingType } from "@/models/types/auctionListing";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    await connect();
    const upcomingAuctions: AuctionListingType[] | null =
      await auctionListingModel.find({ status: "Pending Start" });
    const finishedAuctions: AuctionListingType[] | null =
      await auctionListingModel.find({ status: "Finished" });
    return NextResponse.json<FetchAuctionListingsResponseType>({
      success: true,
      finishedAuctions,
      upcomingAuctions,
    });
  } catch (err) {
    return serverErrorHandler(err);
  }
}

export interface FetchAuctionListingsResponseType {
  success: boolean;
  upcomingAuctions: AuctionListingType[] | null;
  finishedAuctions: AuctionListingType[] | null;
}
