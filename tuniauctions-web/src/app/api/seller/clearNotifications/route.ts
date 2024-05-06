import { connect } from "@/db/dbConfig";
import { returnSellerFrontData } from "@/frontHelpers/seller/returnSellerFrontData";
import bidderModel from "@/models/usersModels/bidderModel";
import sellerModel from "@/models/usersModels/sellerModel";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import { verifySellerToken } from "@/security/apiProtection/seller/routeProtection";
import refreshSellerToken from "@/security/apiProtection/seller/tokenHandelingFunctions/confirmAccess";
import {
  serverErrorHandler,
  unautherizedError,
  unautherizedSellerError,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const res = await verifySellerToken(request);
    if (res.isValid) {
      const seller: ISeller | null = await sellerModel.findOneAndUpdate(
        { _id: res.sellerAccount._id },
        { $set: { "notifications.$[].readStatus": true } }
      );
      if (seller) {
        const sellerFrontData = returnSellerFrontData(seller);
        const response = NextResponse.json({ success: true, sellerFrontData });
        return refreshSellerToken(response, res.newAccessToken);
      } else {
        return unautherizedSellerError();
      }
    } else {
      return unautherizedError();
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
