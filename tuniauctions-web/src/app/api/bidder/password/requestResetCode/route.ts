import { connect } from "@/db/dbConfig";
import {
  sendBidderEmailChangeRequestCode,
  sendBidderPasswordChangeRequestCode,
} from "@/emails/bidder/bidderMailLogic";
import { IBidder } from "@/models/usersModels/types/bidderTypes";
import {
  serverErrorHandler,
  unautherizedError,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import { verifyBidderTokens } from "@/security/apiProtection/bidder/routeProtection";
import refreshBidderAccessToken from "@/security/apiProtection/bidder/tokenHandelingFunctions/confirmAccess";

export async function PUT(request: NextRequest) {
  try {
    await connect();
    const res = await verifyBidderTokens(request);
    if (res.isValid) {
      if (res.bidderAccount.gmailAccount) {
        return userInputCausedErrors("gmailAccount");
      }
      return await handleSendResetCode(res.bidderAccount, res.newAccessToken);
    } else {
      return unautherizedError();
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}

async function handleSendResetCode(
  user: IBidder | ISeller,
  newAccessToken?: string
) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 6;
  let secretCode = "";
  for (let i = 0; i < length; i++) {
    secretCode += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  console.log(secretCode);
  user.passResetCode.secretCode = secretCode;
  user.passResetCode.active = true;
  await user.save();
  await sendBidderPasswordChangeRequestCode(user.email, secretCode);
  const response = NextResponse.json({ success: true });
  return refreshBidderAccessToken(response, newAccessToken);
}
