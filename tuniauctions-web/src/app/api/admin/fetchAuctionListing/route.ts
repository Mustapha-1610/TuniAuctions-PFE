import { connect } from "@/db/dbConfig";
import auctionListingModel from "@/models/auctionListingModels/auctionListing";
import { AuctionListingType } from "@/models/types/auctionListing";
import sellerModel from "@/models/usersModels/sellerModel";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const { auctionId } = await request.json();
    const auction: AuctionListingType | null =
      await auctionListingModel.findById(auctionId);
    if (auction) {
      const seller = await sellerModel.findById(auction.sellerId);
      if (seller) {
        return NextResponse.json({ success: true, auction, seller });
      } else {
        return NextResponse.json({ success: false });
      }
    }
    return NextResponse.json({ success: false });
  } catch (err) {
    return serverErrorHandler(err);
  }
}
