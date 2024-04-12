import { connect } from "@/db/dbConfig";
import { returnBidderFrontData } from "@/frontHelpers/bidder/returnBidderFrontData";
import auctionListingModel from "@/models/auctionListingModels/auctionListing";
import { AuctionListingType } from "@/models/types/auctionListing";
import bidderModel from "@/models/usersModels/bidderModel";
import { verifyBidderTokens } from "@/security/apiProtection/bidder/routeProtection";
import {
  serverErrorHandler,
  unautherizedError,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const res = await verifyBidderTokens(request);
    if (res.isValid) {
      const { auctionId } = await request.json();
      const auctionListing: AuctionListingType | null =
        await auctionListingModel.findById(auctionId);
      if (auctionListing) {
        let balance = auctionListing.participatingBidders.find((b) =>
          b.bidderId.equals(res.bidderAccount._id)
        );
        if (balance) {
          res.bidderAccount.balance.activeBalance += balance.lockedBalance;
          res.bidderAccount.balance.lockedBalance -= balance.lockedBalance;
          res.bidderAccount.auctionReferences.upcoming =
            res.bidderAccount.auctionReferences.upcoming.filter(
              (value) => value !== auctionListing._id
            );
          auctionListing.participatingBidders =
            auctionListing.participatingBidders.filter(
              (bidder) => !bidder.bidderId.equals(res.bidderAccount._id)
            );
          await auctionListing.save();
          await res.bidderAccount.save();
          const bidderFrontData = returnBidderFrontData(res.bidderAccount);
          return NextResponse.json({
            success: true,
            bidderFrontData,
            auctionListing,
          });
        } else {
          return userInputCausedErrors("NotParticiapted");
        }
      } else {
        return userInputCausedErrors("NonExistant");
      }
    } else {
      return unautherizedError();
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
