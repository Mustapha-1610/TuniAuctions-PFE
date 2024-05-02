import { connect } from "@/db/dbConfig";
import auctionListingModel from "@/models/auctionListingModels/auctionListing";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const upcomingAuctions = await auctionListingModel.find({
      status: "Finished",
    });
    return NextResponse.json(upcomingAuctions);
  } catch (err) {
    return serverErrorHandler(err);
  }
}
