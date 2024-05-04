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
      const { deliveryId, subject, description, attachments } =
        await request.json();
      const delivery: DeliveryType | null =
        await deliveryModel.findByIdAndUpdate(
          deliveryId,
          {
            report: {
              subject,
              description,
              attachments,
            },
            status: "Reported",
          },
          { new: true } // This option makes sure the updated document is returned
        );
      if (delivery) {
        await sellerModel.findByIdAndUpdate(delivery.sellerId, {
          $push: {
            notificationMessage: "deliveryReport",
            context: {
              receptionDate: new Date(),
              frontContext: "deliveryReport",
              notificationIcon: delivery.productInformations.productPicture,
              displayName: delivery.productInformations.productName,
            },
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
