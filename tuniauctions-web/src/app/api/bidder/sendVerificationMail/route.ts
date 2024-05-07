import {
  serverErrorHandler,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import bidderModel from "@/models/usersModels/bidderModel";
import { IBidder } from "@/models/usersModels/types/bidderTypes";
import { sendBidderAccountVerificationMail } from "@/emails/bidder/bidderMailLogic";
import { connect } from "@/db/dbConfig";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const reqbody = await request.json();
    const { email, language } = reqbody;

    const bidder: IBidder | null = await bidderModel.findOne({
      email,
    });
    if (bidder) {
      await sendBidderAccountVerificationMail(
        bidder.fullName,
        bidder.email,
        bidder.verificationCode,
        language
      );
      return NextResponse.json({
        success: true,
      });
    } else {
      return userInputCausedErrors("Account deleted or non existant");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
