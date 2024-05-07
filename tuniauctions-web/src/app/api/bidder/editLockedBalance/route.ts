import { returnBidderFrontData } from "@/frontHelpers/bidder/returnBidderFrontData";
import auctionListingModel from "@/models/auctionListingModels/auctionListing";
import { verifyBidderTokens } from "@/security/apiProtection/bidder/routeProtection";
import refreshBidderAccessToken from "@/security/apiProtection/bidder/tokenHandelingFunctions/confirmAccess";
import {
  serverErrorHandler,
  unautherizedError,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const res = await verifyBidderTokens(request);
    if (res.isValid) {
      const { previousLockedBalance, newLockedBalance, minPartFee, auctionId } =
        await request.json();
      if (previousLockedBalance === newLockedBalance)
        return userInputCausedErrors("sameLockedBalance");
      if (newLockedBalance < minPartFee)
        return userInputCausedErrors("lessThenMinFee");
      if (
        res.bidderAccount.balance.activeBalance + previousLockedBalance <
        newLockedBalance
      )
        return userInputCausedErrors("notEnoughBalance");
      await auctionListingModel.findOneAndUpdate(
        { _id: auctionId },
        {
          $set: {
            "participatingBidders.$[elem].lockedBalance": newLockedBalance,
          },
        },
        {
          arrayFilters: [{ "elem.bidderId": res.bidderAccount._id }],
          new: true,
        }
      );
      if (previousLockedBalance < newLockedBalance) {
        const balanceDifference = newLockedBalance - previousLockedBalance;
        res.bidderAccount.balance.activeBalance -= balanceDifference;
        res.bidderAccount.balance.lockedBalance += balanceDifference;
      } else {
        const balanceDifference = previousLockedBalance - newLockedBalance;
        res.bidderAccount.balance.activeBalance += balanceDifference;
        res.bidderAccount.balance.lockedBalance -= balanceDifference;
      }
      await res.bidderAccount.save();
      const bidderFrontData = returnBidderFrontData(res.bidderAccount);
      const auctions = await auctionListingModel.find({
        _id: {
          $in: res.bidderAccount.auctionReferences.upcoming,
        },
      });
      const response = NextResponse.json({
        success: true,
        bidderFrontData,
        auctions,
      });
      return refreshBidderAccessToken(response, res.newAccessToken);
    } else {
      return unautherizedError();
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
