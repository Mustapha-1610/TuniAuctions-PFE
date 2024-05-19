import deliveryModel from "@/models/auctionListingModels/deliveryModel";
import { DeliveryType } from "@/models/types/delivery";
import bidderModel from "@/models/usersModels/bidderModel";
import { verifySellerToken } from "@/security/apiProtection/seller/routeProtection";
import {
  serverErrorHandler,
  unautherizedError,
} from "@/serverHelpers/errorHandler";
import moment from "moment";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const res = await verifySellerToken(request);
    if (res.isValid) {
      const seller = res.sellerAccount;
      const { deliveryId, to, from } = await request.json();
      const delivery: DeliveryType | null =
        await deliveryModel.findByIdAndUpdate(deliveryId, {
          $set: {
            expectedDeliveryDate: {
              from,
              to,
            },
            status: "Pending delivery",
          },
        });
      const deliveries = await deliveryModel.find({
        _id: {
          $in: seller.deliveries.pending,
        },
      });
      if (delivery && delivery.expectedDeliveryDate) {
        const fromDate = moment(delivery.expectedDeliveryDate.from).format(
          " dddd, MMMM D, YYYY"
        );
        const toDate = moment(delivery.expectedDeliveryDate.to).format(
          " dddd, MMMM D, YYYY"
        );
        await bidderModel.findByIdAndUpdate(delivery.bidderId, {
          $push: {
            notifications: {
              notificationMessage: "deliveryShipmentSuccessfull",
              context: {
                receptionDate: new Date(),
                frontContext: "deliveryShipmentSuccessfull",
                notificationIcon: delivery.productInformations.productPicture,
              },
            },
          },
        });
      }
      return NextResponse.json({ success: true, deliveries });
    } else {
      return unautherizedError();
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
