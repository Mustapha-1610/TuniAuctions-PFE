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
import {
  ISeller,
  ISellerFrontData,
} from "@/models/usersModels/types/sellerTypes";
import { returnSellerFrontData } from "@/frontHelpers/seller/returnSellerFrontData";
import { adminModelType } from "@/models/types/admin";
import adminModel from "@/models/usersModels/adminModel";

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
      return await handeLogin(email, password);
    } else {
      return userInputCausedErrors("missingInputs");
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
        return userInputCausedErrors("gmailAccount");
      } else {
        if (!bcrypt.compareSync(password, existingUser.password)) {
          return userInputCausedErrors("wrongInputs");
        } else {
          if (!existingUser.verified) {
            return userInputCausedErrors("unverifiedAccount");
          } else if (existingUser.disabled) {
            return userInputCausedErrors("disabledAccount");
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
              expires: new Date(Date.now() + 10 * 60 * 1000),
            });
            response.cookies.set("refreshBidderToken", refreshToken, {
              httpOnly: true,
              sameSite: "none",
              secure: true,
              expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
            });
            return response;
          }
        }
      }
    } else {
      let existingSeller: ISeller | null = await sellerModel.findOne({
        email: email.toUpperCase(),
      });
      if (existingSeller) {
        if (!bcrypt.compareSync(password, existingSeller.password)) {
          return userInputCausedErrors("wrongInputs");
        } else {
          if (!existingSeller.verified) {
            return userInputCausedErrors("unverifiedAccount");
          } else if (existingSeller.disabled) {
            return userInputCausedErrors("disabledAccount");
          } else {
            const sellerFrontData: ISellerFrontData =
              returnSellerFrontData(existingSeller);
            const response = NextResponse.json({
              success: true,
              sellerFrontData,
            });
            const accessToken = jwt.sign(
              { seller_id: existingSeller._id },
              process.env.ACCESS_TOKEN_SECRET!,
              {
                expiresIn: "10m",
              }
            );
            const refreshToken = jwt.sign(
              { seller_id: existingSeller._id },
              process.env.REFRESH_TOKEN_SECRET!,
              {
                expiresIn: "1y",
              }
            );
            existingSeller.refreshToken = refreshToken;
            await existingSeller.save();
            response.cookies.set("accessSellerToken", accessToken, {
              httpOnly: true,
              sameSite: "none",
              secure: true,
              expires: new Date(Date.now() + 10 * 60 * 1000),
            });
            response.cookies.set("refreshSellerToken", refreshToken, {
              httpOnly: true,
              sameSite: "none",
              secure: true,
              expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
            });
            return response;
          }
        }
      } else {
        let existingAdmin: adminModelType | null = await adminModel.findOne({
          email: email.toUpperCase(),
        });
        if (existingAdmin) {
          if (!bcrypt.compareSync(password, existingAdmin.password)) {
            return userInputCausedErrors("wrongInputs");
          } else {
            const response = NextResponse.json({
              success: true,
              adminAccount: existingAdmin,
            });
            const accessToken = jwt.sign(
              { admin_id: existingAdmin._id },
              process.env.ACCESS_TOKEN_SECRET!,
              {
                expiresIn: "10m",
              }
            );
            const refreshToken = jwt.sign(
              { admin_id: existingAdmin._id },
              process.env.REFRESH_TOKEN_SECRET!,
              {
                expiresIn: "1y",
              }
            );
            existingAdmin.refreshToken = refreshToken;
            await existingAdmin.save();
            response.cookies.set("accessAdminToken", accessToken, {
              httpOnly: true,
              sameSite: "none",
              secure: true,
              expires: new Date(Date.now() + 10 * 60 * 1000),
            });
            response.cookies.set("refreshAdminToken", refreshToken, {
              httpOnly: true,
              sameSite: "none",
              secure: true,
              expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
            });
            return response;
          }
        } else {
          return userInputCausedErrors("wrongInputs");
        }
      }
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
