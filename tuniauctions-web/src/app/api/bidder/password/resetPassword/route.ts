import { connect } from "@/db/dbConfig";
import { returnBidderFrontData } from "@/frontHelpers/bidder/returnBidderFrontData";
import bidderModel from "@/models/usersModels/bidderModel";
import sellerModel from "@/models/usersModels/sellerModel";
import { IBidderFrontData } from "@/models/usersModels/types/bidderTypes";
import { verifyBidderTokens } from "@/security/apiProtection/bidder/routeProtection";
import refreshBidderAccessToken from "@/security/apiProtection/bidder/tokenHandelingFunctions/confirmAccess";
import {
  serverErrorHandler,
  unautherizedError,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function PUT(request: NextRequest) {
  try {
    const { newPassword, confirmNewPassword } = await request.json();
    await connect();
    const res = await verifyBidderTokens(request);
    if (res.isValid) {
      if (newPassword !== confirmNewPassword)
        return userInputCausedErrors("mismatch");
      if (bcrypt.compareSync(newPassword, res.bidderAccount.password))
        return userInputCausedErrors("oldPassword");

      res.bidderAccount.password = bcrypt.hashSync(newPassword);
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
