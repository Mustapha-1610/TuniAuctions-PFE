import { connect } from "@/db/dbConfig";
import deliveryModel from "@/models/auctionListingModels/deliveryModel";
import { DeliveryType } from "@/models/types/delivery";
import sellerModel from "@/models/usersModels/sellerModel";
import { verifyBidderTokens } from "@/security/apiProtection/bidder/routeProtection";
import {
  serverErrorHandler,
  unautherizedError,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    await connect();
    const res = await verifyBidderTokens(request);
    if (res.isValid) {
      const { deliveryId, rating } = await request.json();
      const delivery: DeliveryType | null = await deliveryModel.findById(
        deliveryId
      );
      if (delivery) {
        delivery.sellerReview = true;
        await delivery.save();
        await sellerModel.findByIdAndUpdate(delivery?.sellerId, {
          $inc: {
            "reviews.total": 1,
            "reviews.rating": rating,
          },
        });
        return NextResponse.json({ success: true, delivery });
      } else {
        return NextResponse.json({ success: false });
      }
    } else {
      return unautherizedError();
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
