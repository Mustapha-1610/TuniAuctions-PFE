import {
  serverErrorHandler,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import bidderModel from "@/models/usersModels/bidderModel";
import { IBidder } from "@/models/usersModels/types/bidderTypes";

export async function POST(request: NextRequest) {
  try {
    const reqbody = await request.json();
    const { mailToken } = reqbody;
    const decodedMailToken = jwt.verify(
      mailToken,
      process.env.NODEMAILER_TOKEN_SECRET!
    ) as JwtPayload;
    if (decodedMailToken) {
      const verrifiedBidder: IBidder | null = await bidderModel.findOne({
        email: decodedMailToken.email.toUpperCase(),
      });
      if (verrifiedBidder) {
        if (verrifiedBidder.verified) {
          return userInputCausedErrors(
            "Account already verified you can now login!"
          );
        } else {
          verrifiedBidder.verified = true;
          await verrifiedBidder.save();
          return NextResponse.json({
            success: true,
            successMessage: "Account verified! You can now login!",
          });
        }
      } else {
        return userInputCausedErrors("Account deleted or non existant");
      }
    } else {
      return userInputCausedErrors("expired");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
