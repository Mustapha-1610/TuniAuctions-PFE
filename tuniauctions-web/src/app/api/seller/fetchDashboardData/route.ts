import { connect } from "@/db/dbConfig";
import auctionListingModel from "@/models/auctionListingModels/auctionListing";
import deliveryModel from "@/models/auctionListingModels/deliveryModel";
import sellerModel from "@/models/usersModels/sellerModel";
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
      const pendingAuctions = await auctionListingModel.find({
        _id: {
          $in: res.sellerAccount.createdAuctions.upcoming,
        },
      });
      const pendingDeliveries = await deliveryModel.find({
        _id: {
          $in: res.sellerAccount.deliveries.pending,
        },
      });
      const response = NextResponse.json({
        pendingAuctions,
        pendingDeliveries,
      });
      if (res.newAccessToken) {
        return refreshSellerToken(response, res.newAccessToken);
      }
      return response;
    } else {
      return unautherizedSellerError();
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
