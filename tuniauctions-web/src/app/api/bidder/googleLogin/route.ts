import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bidderModel from "@/models/usersModels/bidderModel";
import jwt, { JwtPayload } from "jsonwebtoken";
import { userInputCausedErrors } from "@/serverHelpers/errorHandler";
import { connect } from "@/db/dbConfig";
import { returnBidderFrontData } from "@/frontHelpers/bidder/returnBidderFrontData";
import { IBidder } from "@/models/usersModels/types/bidderTypes";
import sellerModel from "@/models/usersModels/sellerModel";

const googleLoginSchema = z.object({
  credentialsGoogleToken: z.string(),
});
export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const isSchemaValid = googleLoginSchema.safeParse(reqBody);
  if (isSchemaValid.success) {
    const { credentialsGoogleToken } = reqBody;
    const bidderCredentials = jwt.decode(credentialsGoogleToken) as JwtPayload;
    await connect();

    let existingBidder: IBidder | null = await bidderModel.findOne({
      email: bidderCredentials.email.toUpperCase(),
    });
    if (existingBidder) {
      if (existingBidder.disabled) {
        return userInputCausedErrors("accountExists");
      } else {
        const bidderFrontData = returnBidderFrontData(existingBidder);

        const response = NextResponse.json({
          success: true,
          bidderFrontData,
        });
        const accessToken = jwt.sign(
          { bidder_id: existingBidder._id },
          process.env.ACCESS_TOKEN_SECRET!,
          {
            expiresIn: "10m",
          }
        );
        const refreshToken = jwt.sign(
          { bidder_id: existingBidder._id },
          process.env.REFRESH_TOKEN_SECRET!,
          {
            expiresIn: "1y",
          }
        );
        existingBidder.refreshToken = refreshToken;
        await existingBidder.save();
        response.cookies.set("accessBidderToken", accessToken, {
          httpOnly: true,
          sameSite: "none",
          secure: true,
        });
        response.cookies.set("refreshBidderToken", refreshToken, {
          httpOnly: true,
          sameSite: "none",
          secure: true,
        });
        return response;
      }
    } else {
      existingBidder = await sellerModel.findOne({
        email: bidderCredentials.email.toUpperCase(),
      });
      if (existingBidder) {
        return userInputCausedErrors("sellerGmailLogin");
      } else {
        return userInputCausedErrors("redirectSignup");
      }
    }
  } else {
    return userInputCausedErrors("missingInputs");
  }
}
