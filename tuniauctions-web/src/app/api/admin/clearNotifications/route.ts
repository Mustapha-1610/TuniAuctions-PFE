import { connect } from "@/db/dbConfig";
import { returnSellerFrontData } from "@/frontHelpers/seller/returnSellerFrontData";
import adminModel from "@/models/usersModels/adminModel";
import bidderModel from "@/models/usersModels/bidderModel";
import sellerModel from "@/models/usersModels/sellerModel";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import { verifyAdminToken } from "@/security/apiProtection/admin/routeProtection";
import refreshAdminToken from "@/security/apiProtection/admin/tokenHandelingFunctions/confirmAccess";
import { verifySellerToken } from "@/security/apiProtection/seller/routeProtection";
import refreshSellerToken from "@/security/apiProtection/seller/tokenHandelingFunctions/confirmAccess";
import {
  serverErrorHandler,
  unautherizedAdminError,
  unautherizedError,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const res = await verifyAdminToken(request);
    if (res.isValid) {
      const adminAccount: ISeller | null = await adminModel.findOneAndUpdate(
        { _id: res.adminAccount._id },
        { $set: { "notifications.$[].readStatus": true } }
      );
      if (adminAccount) {
        const response = NextResponse.json({ success: true, adminAccount });
        return refreshAdminToken(response, res.newAccessToken);
      } else {
        return unautherizedAdminError();
      }
    } else {
      return unautherizedError();
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
