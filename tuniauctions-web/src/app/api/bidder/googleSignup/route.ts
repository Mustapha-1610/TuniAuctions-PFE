import { connect } from "@/db/dbConfig";
import {
  serverErrorHandler,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import jwt, { JwtPayload } from "jsonwebtoken";
import { returnBidderFrontData } from "@/frontHelpers/bidder/returnBidderFrontData";
import bidderModel from "@/models/usersModels/bidderModel";
import {
  IBidder,
  IBidderFrontData,
} from "@/models/usersModels/types/bidderTypes";
import sellerModel from "@/models/usersModels/sellerModel";

const bidderGoogleSignupSchema = z.object({
  credentialsGoogleToken: z.string().optional(),
  gender: z.enum(["Male", "Female"]),
});
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const isSchemaValid = bidderGoogleSignupSchema.safeParse(reqBody);
    if (isSchemaValid.success) {
      const { credentialsGoogleToken, gender } = reqBody;
      await connect();
      const bidderCredentials = jwt.decode(
        credentialsGoogleToken
      ) as JwtPayload;
      let exsistingUser = await sellerModel.findOne({
        email: bidderCredentials.email.toUpperCase(),
      });
      if (exsistingUser) {
        return userInputCausedErrors("Account exists already!");
      } else {
        exsistingUser = await bidderModel.findOne({
          email: bidderCredentials.email.toUpperCase(),
        });
        if (exsistingUser) {
          return userInputCausedErrors("Account exists already!");
        }
      }
      const socketId = crypto.randomUUID();
      const newBidder: IBidder = await bidderModel.create({
        fullName: bidderCredentials.name,
        gender,
        email: bidderCredentials.email.toUpperCase(),
        socketId,
        verified: true,
        gmailAccount: true,
      });
      const bidderFrontData: IBidderFrontData =
        returnBidderFrontData(newBidder);
      const response = NextResponse.json({
        success: true,
        bidderFrontData,
      });
      const accessToken = jwt.sign(
        { bidder_id: newBidder._id },
        process.env.ACCESS_TOKEN_SECRET!,
        {
          expiresIn: "10m",
        }
      );
      const refreshToken = jwt.sign(
        { bidder_id: newBidder._id },
        process.env.REFRESH_TOKEN_SECRET!,
        {
          expiresIn: "1y",
        }
      );
      newBidder.refreshToken = refreshToken;
      await newBidder.save();
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
    } else {
      return userInputCausedErrors("Missing inputs or invalid schema");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
