import { returnBidderFrontData } from "@/frontHelpers/bidder/returnBidderFrontData";
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
      const { fullName } = await request.json();
      if (fullName !== null || "") {
        res.bidderAccount.fullName = fullName;
        await res.bidderAccount.save();
        const bidderFrontData = returnBidderFrontData(res.bidderAccount);
        const response = NextResponse.json({ success: true, bidderFrontData });
        return refreshBidderAccessToken(response, res.newAccessToken);
      } else {
        return userInputCausedErrors("invalidName");
      }
    } else {
      return unautherizedError();
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
