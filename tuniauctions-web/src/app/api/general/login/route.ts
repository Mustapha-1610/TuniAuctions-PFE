import { connect } from "@/db/dbConfig";
import bidderModel from "@/models/usersModels/bidderModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  serverErrorHandler,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import sellerModel from "@/models/usersModels/sellerModel";
import { IBidder } from "@/models/usersModels/types/bidderTypes";
import { returnBidderFrontData } from "@/frontHelpers/bidder/returnBidderFrontData";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const validateBody = loginSchema.safeParse(reqBody);
    if (validateBody.success) {
      const { email, password } = reqBody;
      console.log(email, password);
      return await handeLogin(email, password);
    } else {
      return userInputCausedErrors("Missing inputs or invalid schema");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}

async function handeLogin(email: string, password: string) {
  try {
    await connect();
    let existingUser: IBidder | null = await bidderModel.findOne({
      email: email.toUpperCase(),
    });
    if (existingUser) {
      if (existingUser.gmailAccount) {
        return userInputCausedErrors(
          "Account only accessible through gmail login!"
        );
      } else {
        if (!bcrypt.compareSync(password, existingUser.password)) {
          return userInputCausedErrors("Wrong mail or password!");
        } else {
          if (!existingUser.verified) {
            return userInputCausedErrors("Account pending verification!");
          } else if (existingUser.disabled) {
            return userInputCausedErrors("Account disabled by admins!");
          } else {
            const bidderFrontData = returnBidderFrontData(existingUser);

            const response = NextResponse.json({
              success: true,
              bidderFrontData,
            });
            const accessToken = jwt.sign(
              { bidder_id: existingUser._id },
              process.env.ACCESS_TOKEN_SECRET!,
              {
                expiresIn: "10m",
              }
            );
            const refreshToken = jwt.sign(
              { bidder_id: existingUser._id },
              process.env.REFRESH_TOKEN_SECRET!,
              {
                expiresIn: "1y",
              }
            );
            existingUser.refreshToken = refreshToken;
            await existingUser.save();
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
        }
      }
    } else {
      existingUser = await sellerModel.findOne({ email: email.toUpperCase() });
      if (existingUser) {
        if (!bcrypt.compareSync(password, existingUser.password)) {
          return userInputCausedErrors("Wrong mail or password!");
        } else {
          if (!existingUser.verified) {
            return userInputCausedErrors("Account pending verification!");
          } else if (existingUser.disabled) {
            return userInputCausedErrors("Account disabled by admins!");
          } else {
            const bidderFrontData = returnBidderFrontData(existingUser);
            const response = NextResponse.json({
              success: true,
              bidderFrontData,
            });
            const accessToken = jwt.sign(
              { bidder_id: existingUser._id },
              process.env.ACCESS_TOKEN_SECRET!,
              {
                expiresIn: "10m",
              }
            );
            const refreshToken = jwt.sign(
              { bidder_id: existingUser._id },
              process.env.REFRESH_TOKEN_SECRET!,
              {
                expiresIn: "1y",
              }
            );
            existingUser.refreshToken = refreshToken;
            await existingUser.save();
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
        }
      } else {
        return userInputCausedErrors("Wrong mail or password!");
      }
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
