import {
  serverErrorHandler,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import bidderModel from "@/models/usersModels/bidderModel";
import { IBidder } from "@/models/usersModels/types/bidderTypes";
import { connect } from "@/db/dbConfig";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const reqbody = await request.json();
    const { mailToken } = reqbody;
    try {
      let decodedMailToken = jwt.verify(
        mailToken,
        process.env.NODEMAILER_TOKEN_SECRET!
      ) as JwtPayload;
      if (decodedMailToken) {
        const verrifiedBidder: IBidder | null = await bidderModel.findOne({
          email: decodedMailToken.email.toUpperCase(),
        });
        if (verrifiedBidder) {
          if (verrifiedBidder.verified) {
            return NextResponse.json<verifyMailResponse>({
              expired: false,
              preverified: true,
              verified: false,
            });
          } else {
            verrifiedBidder.verified = true;
            await verrifiedBidder.save();
            return NextResponse.json<verifyMailResponse>({
              expired: false,
              preverified: false,
              verified: true,
            });
          }
        } else {
          return userInputCausedErrors("Account deleted or non existant");
        }
      } else {
        return NextResponse.json<verifyMailResponse>({
          expired: true,
          preverified: false,
          verified: false,
        });
      }
    } catch (err) {
      const base64Payload = mailToken.split(".")[1];
      const payload = Buffer.from(base64Payload, "base64").toString();
      const decodedMailToken = JSON.parse(payload);
      return NextResponse.json<verifyMailResponse>({
        expired: true,
        preverified: false,
        verified: false,
        bidderEmail: decodedMailToken.email.toUpperCase(),
      });
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}

export interface verifyMailResponse {
  verified: boolean;
  preverified: boolean;
  expired: boolean;
  bidderEmail?: string;
}
