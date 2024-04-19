import { connect } from "@/db/dbConfig";
import deliveryModel from "@/models/auctionListingModels/deliveryModel";
import { DeliveryType } from "@/models/types/delivery";
import { verifyBidderTokens } from "@/security/apiProtection/bidder/routeProtection";
import {
  serverErrorHandler,
  unautherizedError,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const res = await verifyBidderTokens(request);
    if (res.isValid) {
      const { locationPreset, deliveryId } = await request.json();
      if (locationPreset) {
        const delivery: DeliveryType | null = await deliveryModel.findById(
          deliveryId
        );
        if (delivery) {
          delivery.status = "Pending delivery shipment";
          delivery.biddderDeliveryInformations = {
            sreet: locationPreset.street,
            phoneNumber: locationPreset.phoneNumber,
            name: res.bidderAccount.fullName,
          };
          await delivery.save();
          return NextResponse.json({ success: true, delivery });
        } else {
          return userInputCausedErrors("nonexistant");
        }
      } else {
        return userInputCausedErrors("missingData");
      }
    } else {
      return unautherizedError();
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
