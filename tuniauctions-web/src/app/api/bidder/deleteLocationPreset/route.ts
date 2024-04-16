import { connect } from "@/db/dbConfig";
import { returnBidderFrontData } from "@/frontHelpers/bidder/returnBidderFrontData";
import { verifyBidderTokens } from "@/security/apiProtection/bidder/routeProtection";
import refreshBidderAccessToken from "@/security/apiProtection/bidder/tokenHandelingFunctions/confirmAccess";
import {
  serverErrorHandler,
  unautherizedError,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    await connect();
    const res = await verifyBidderTokens(request);
    if (res.isValid) {
      const { index } = await request.json();
      res.bidderAccount.adressPresets.splice(index, 1);
      await res.bidderAccount.save();
      const bidderFrontData = returnBidderFrontData(res.bidderAccount);
      const response = NextResponse.json({ success: true, bidderFrontData });
      return refreshBidderAccessToken(response, res.newAccessToken);
    } else return unautherizedError();
  } catch (err) {
    return serverErrorHandler(err);
  }
}
