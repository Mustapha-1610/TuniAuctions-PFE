import { connect } from "@/db/dbConfig";
import deliveryModel from "@/models/auctionListingModels/deliveryModel";
import { DeliveryType } from "@/models/types/delivery";
import bidderModel from "@/models/usersModels/bidderModel";
import { verifySellerToken } from "@/security/apiProtection/seller/routeProtection";
import refreshSellerToken from "@/security/apiProtection/seller/tokenHandelingFunctions/confirmAccess";
import {
  serverErrorHandler,
  unautherizedError,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    await connect();
    const res = await verifySellerToken(request);
    if (res.isValid) {
      const { deliveryId } = await request.json();
      const delivery: DeliveryType | null =
        await deliveryModel.findByIdAndUpdate(deliveryId, {
          $set: {
            status: "Delivered",
            deliveryDate: new Date(),
          },
        });
      if (delivery) {
        await bidderModel.findByIdAndUpdate(delivery.bidderId, {
          $push: {
            notifications: {
              notificationMessage: "deliverySuccessfull",
              context: {
                receptionDate: new Date(),
                frontContext: "deliverySuccessfull",
                contextId: delivery._id,
                notificationIcon: delivery.productInformations.productPicture,
                displayName: delivery.productInformations.productName,
              },
            },
            "deliveries.delivered": delivery._id,
          },
          $pull: {
            "deliveries.pending": delivery._id,
          },
        });
        res.sellerAccount.deliveries.pending =
          res.sellerAccount.deliveries.pending.filter(
            (value) => value !== delivery._id
          );
        res.sellerAccount.deliveries.delivered.push(delivery._id);
        await res.sellerAccount.save();
        const deliveries = await deliveryModel.find({
          _id: {
            $in: res.sellerAccount.deliveries.pending,
          },
        });
        const response = NextResponse.json({ success: true, deliveries });
        if (res.newAccessToken)
          return refreshSellerToken(response, res.newAccessToken);
        return response;
      }
      return NextResponse.json({ success: false });
    } else {
      return unautherizedError();
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
