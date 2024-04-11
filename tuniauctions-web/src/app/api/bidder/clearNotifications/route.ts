import { connect } from "@/db/dbConfig";
import { returnBidderFrontData } from "@/frontHelpers/bidder/returnBidderFrontData";
import bidderModel from "@/models/usersModels/bidderModel";
import { IBidder } from "@/models/usersModels/types/bidderTypes";
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
      const bidder: IBidder | null = await bidderModel.findOneAndUpdate(
        { _id: res.bidderAccount._id },
        { $set: { "notifications.$[].readStatus": true } }
      );
      if (bidder) {
        const bidderFrontData = returnBidderFrontData(bidder);
        const response = NextResponse.json({ success: true, bidderFrontData });
        return refreshBidderAccessToken(response, res.newAccessToken);
      } else {
        return unautherizedError();
      }
    } else {
      return unautherizedError();
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
