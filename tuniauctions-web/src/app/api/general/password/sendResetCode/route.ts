import { connect } from "@/db/dbConfig";
import {
  sendBidderEmailChangeRequestCode,
  sendBidderPasswordChangeRequestCode,
} from "@/emails/bidder/bidderMailLogic";
import bidderModel from "@/models/usersModels/bidderModel";
import sellerModel from "@/models/usersModels/sellerModel";
import { IBidder } from "@/models/usersModels/types/bidderTypes";
import {
  serverErrorHandler,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";
import { ISeller } from "@/models/usersModels/types/sellerTypes";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    await connect();
    let user: IBidder | null = await bidderModel.findOne({
      email: email.toUpperCase(),
    });
    if (user) {
      if (user.gmailAccount) {
        return userInputCausedErrors("gmailAccount");
      } else {
        return await handleSendResetCode(user);
      }
    } else {
      let user: ISeller | null = await sellerModel.findOne({
        email: email.toUpperCase(),
      });
      if (user) {
        return await handleSendResetCode(user);
      }
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}

async function handleSendResetCode(user: IBidder | ISeller) {
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
  return NextResponse.json({ success: true });
}
