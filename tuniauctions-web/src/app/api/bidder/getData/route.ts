import { connect } from "@/db/dbConfig";
import { returnBidderFrontData } from "@/frontHelpers/bidder/returnBidderFrontData";
import {
  VerifyBidderTokensResponse,
  verifyBidderTokens,
} from "@/security/apiProtection/bidder/routeProtection";
import {
  serverErrorHandler,
  unautherizedError,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    console.log("recieved");
    await connect();
    const res: VerifyBidderTokensResponse = await verifyBidderTokens(request);
    console.log(res);
    if (res.isValid) {
      const bidderFrontData = returnBidderFrontData(res.bidderAccount);
      return NextResponse.json({ success: true, bidderFrontData });
    } else {
      console.log(res.errorStage);
      return unautherizedError("err");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
