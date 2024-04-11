import { connect } from "@/db/dbConfig";
import auctionListingModel from "@/models/auctionListingModels/auctionListing";
import { AuctionListingType } from "@/models/types/auctionListing";
import { verifyBidderTokens } from "@/security/apiProtection/bidder/routeProtection";
import refreshBidderAccessToken from "@/security/apiProtection/bidder/tokenHandelingFunctions/confirmAccess";
import {
  serverErrorHandler,
  unautherizedError,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const res = await verifyBidderTokens(request);
    if (res.isValid) {
      const { auctionId } = await request.json();
      const auction: AuctionListingType | null =
        await auctionListingModel.findById(auctionId);
      if (auction && auction.listingType !== "Basic") {
        auction.genderViews[res.bidderAccount.gender] += 1;
        await auction.save();
      }
      const response = NextResponse.json({ success: true });
      return refreshBidderAccessToken(response, res.newAccessToken);
    } else {
      return unautherizedError("err");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
