import { IBidder } from "@/models/usersModels/types/bidderTypes";
import { verifyBidderTokens } from "@/security/apiProtection/bidder/routeProtection";
import refreshBidderAccessToken from "@/security/apiProtection/bidder/tokenHandelingFunctions/confirmAccess";
import {
  serverErrorHandler,
  unautherizedError,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { secretCode } = await request.json();
    const res = await verifyBidderTokens(request);
    if (res.isValid) {
      return await handleVerifyCode(
        res.bidderAccount,
        secretCode,
        res.newAccessToken
      );
    } else {
      return unautherizedError();
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}

async function handleVerifyCode(
  user: IBidder,
  secretCode: string,
  newAccessToken?: string
) {
  if (
    user.passResetCode.active &&
    user.passResetCode.secretCode === secretCode
  ) {
    user.passResetCode.active = false;
    await user.save();
    const response = NextResponse.json({ success: true });
    return refreshBidderAccessToken(response, newAccessToken);
  } else if (user.passResetCode.secretCode !== secretCode) {
    return userInputCausedErrors("mismatch");
  } else if (!user.passResetCode.active) {
    return userInputCausedErrors("unactive");
  }
}
