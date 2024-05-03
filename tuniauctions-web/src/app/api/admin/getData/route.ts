import { connect } from "@/db/dbConfig";
import { returnBidderFrontData } from "@/frontHelpers/bidder/returnBidderFrontData";
import { verifyAdminToken } from "@/security/apiProtection/admin/routeProtection";
import refreshAdminToken from "@/security/apiProtection/admin/tokenHandelingFunctions/confirmAccess";
import {
  VerifyBidderTokensResponse,
  verifyBidderTokens,
} from "@/security/apiProtection/bidder/routeProtection";
import refreshBidderAccessToken from "@/security/apiProtection/bidder/tokenHandelingFunctions/confirmAccess";
import {
  serverErrorHandler,
  unautherizedAdminError,
  unautherizedError,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const res = await verifyAdminToken(request);

    if (res.isValid) {
      const response = NextResponse.json({
        success: true,
        adminAccount: res.adminAccount,
      });
      if (res.newAccessToken)
        return refreshAdminToken(response, res.newAccessToken);
    } else return unautherizedAdminError();
  } catch (err) {
    console.log("unvalid 2", err);

    return serverErrorHandler(err);
  }
}
