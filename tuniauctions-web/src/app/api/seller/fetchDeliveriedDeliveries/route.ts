import { connect } from "@/db/dbConfig";
import deliveryModel from "@/models/auctionListingModels/deliveryModel";
import { verifySellerToken } from "@/security/apiProtection/seller/routeProtection";
import refreshSellerToken from "@/security/apiProtection/seller/tokenHandelingFunctions/confirmAccess";
import {
  serverErrorHandler,
  unautherizedSellerError,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const res = await verifySellerToken(request);
    if (res.isValid) {
      const deliveries = await deliveryModel.find({
        _id: {
          $in: res.sellerAccount.deliveries.delivered,
        },
        status: "Delivered",
      });
      const response = NextResponse.json(deliveries);
      if (res.newAccessToken)
        return refreshSellerToken(response, res.newAccessToken);
      return response;
    } else {
      return unautherizedSellerError();
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
