import deliveryModel from "@/models/auctionListingModels/deliveryModel";
import { DeliveryType } from "@/models/types/delivery";
import bidderModel from "@/models/usersModels/bidderModel";
import { verifySellerTokens } from "@/security/apiProtection/seller/routeProtection";
import {
  serverErrorHandler,
  unautherizedError,
} from "@/serverHelpers/errorHandler";
import moment from "moment";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const res = await verifySellerTokens(request);
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
        const toDate = moment(delivery.expectedDeliveryDate.from).format(
          " dddd, MMMM D, YYYY"
        );
        await bidderModel.findByIdAndUpdate(delivery.bidderId, {
          $push: {
            notifications: {
              notificationMessage:
                delivery.productInformations.productName +
                " delivery will arrive between " +
                fromDate +
                " to " +
                toDate,
              context: {
                receptionDate: new Date(),
                frontContext: "deliveryShipment",
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
