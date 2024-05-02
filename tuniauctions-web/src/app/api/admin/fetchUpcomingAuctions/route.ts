import { connect } from "@/db/dbConfig";
import auctionListingModel from "@/models/auctionListingModels/auctionListing";
import platformModel from "@/models/usersModels/platformModel";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const upcomingAuctions = await auctionListingModel.find({
      status: "Pending Start",
    });
    return NextResponse.json(upcomingAuctions);
  } catch (err) {
    return serverErrorHandler(err);
  }
}
