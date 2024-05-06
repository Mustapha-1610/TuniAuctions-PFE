import { connect } from "@/db/dbConfig";
import { returnBidderFrontData } from "@/frontHelpers/bidder/returnBidderFrontData";
import bidderModel from "@/models/usersModels/bidderModel";
import { IBidderFrontData } from "@/models/usersModels/types/bidderTypes";
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
    const { newEmail } = await request.json();
    await connect();
    const res = await verifyBidderTokens(request);
    if (res.isValid) {
      const bidder = await bidderModel.findOne({ email: newEmail });
      if (bidder) return userInputCausedErrors("existsAlready");

      if (res.bidderAccount.email.toUpperCase() === newEmail.toUpperCase()) {
        return userInputCausedErrors("sameMail");
      }

      res.bidderAccount.email = newEmail.toUpperCase();
      await res.bidderAccount.save();
      const bidderFrontData: IBidderFrontData = returnBidderFrontData(
        res.bidderAccount
      );
      const response = NextResponse.json({ success: true, bidderFrontData });
      return refreshBidderAccessToken(response);
    } else {
      return unautherizedError();
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
