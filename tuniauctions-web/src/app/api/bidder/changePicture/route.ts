import { connect } from "@/db/dbConfig";
import { returnBidderFrontData } from "@/frontHelpers/bidder/returnBidderFrontData";
import {
  VerifyBidderTokensResponse,
  verifyBidderTokens,
} from "@/security/apiProtection/bidder/routeProtection";
import refreshBidderAccessToken from "@/security/apiProtection/bidder/tokenHandelingFunctions/confirmAccess";
import {
  serverErrorHandler,
  unautherizedError,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const verRes: VerifyBidderTokensResponse = await verifyBidderTokens(
      request
    );
    if (verRes.isValid) {
      await connect();
      const { newPicture } = await request.json();
      verRes.bidderAccount.profilePicture = newPicture;
      await verRes.bidderAccount.save();
      const bidderFrontData = returnBidderFrontData(verRes.bidderAccount);

      const res = NextResponse.json({ success: true, bidderFrontData });
      if (verRes.newAccessToken)
        return refreshBidderAccessToken(verRes.newAccessToken, res);
      return res;
    } else {
      console.log(verRes.errorStage);
      return unautherizedError("err");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
