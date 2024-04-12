import { connect } from "@/db/dbConfig";
import { returnBidderFrontData } from "@/frontHelpers/bidder/returnBidderFrontData";
import auctionListingModel from "@/models/auctionListingModels/auctionListing";
import { AuctionListingType } from "@/models/types/auctionListing";
import { IBidderFrontData } from "@/models/usersModels/types/bidderTypes";
import { verifyBidderTokens } from "@/security/apiProtection/bidder/routeProtection";
import refreshBidderAccessToken from "@/security/apiProtection/bidder/tokenHandelingFunctions/confirmAccess";
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
      const { auctionListingId } = await request.json();
      const auctionListing: AuctionListingType | null =
        await auctionListingModel.findById(auctionListingId);
      if (auctionListing) {
        if (
          res.bidderAccount.balance.activeBalance > auctionListing.openingBid
        ) {
          auctionListing.participatingBidders.push({
            bidderId: res.bidderAccount._id,
            lockedBalance: auctionListing.openingBid,
          });

          res.bidderAccount.balance.activeBalance -= auctionListing.openingBid;
          res.bidderAccount.balance.lockedBalance += auctionListing.openingBid;
          res.bidderAccount.auctionReferences.upcoming.push(auctionListing._id);
          res.bidderAccount.notifications.push({
            context: {
              frontContext: "auctionParticipation",
              notificationIcon: auctionListing.productPictures[0],
              receptionDate: new Date(),
              contextId: auctionListing._id,
            },
            notificationMessage:
              "Confirmed participation for " +
              auctionListing.title +
              " auction",
            readStatus: false,
          });
          await auctionListing.save(), await res.bidderAccount.save();
          const bidderFrontData = returnBidderFrontData(res.bidderAccount);
          const response = NextResponse.json({
            success: true,
            bidderFrontData,
            auctionListing,
          });
          return refreshBidderAccessToken(response, res.newAccessToken);
        } else {
          return userInputCausedErrors("notEnoughBalance");
        }
      } else {
        return userInputCausedErrors("unexistant");
      }
    } else {
      return unautherizedError();
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
