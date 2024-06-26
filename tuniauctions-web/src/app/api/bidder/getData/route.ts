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
    await connect();
    const res: VerifyBidderTokensResponse = await verifyBidderTokens(request);

    if (res.isValid) {
      const bidderFrontData = returnBidderFrontData(res.bidderAccount);
      console.log("valid");
      const response = NextResponse.json({ success: true, bidderFrontData });
      if (res.newAccessToken)
        return refreshBidderAccessToken(response, res.newAccessToken);
    } else console.log("unvalid 1", res);

    return unautherizedError();
  } catch (err) {
    console.log("unvalid 2", err);

    return serverErrorHandler(err);
  }
}
