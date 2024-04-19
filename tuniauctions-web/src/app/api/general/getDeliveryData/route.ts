import { connect } from "@/db/dbConfig";
import deliveryModel from "@/models/auctionListingModels/deliveryModel";
import { DeliveryType } from "@/models/types/delivery";
import {
  serverErrorHandler,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const { deliveryId } = await request.json();
    const delivery: DeliveryType | null = await deliveryModel.findById(
      deliveryId
    );
    if (delivery) {
      return NextResponse.json({ delivery });
    } else {
      return userInputCausedErrors("nonExistant");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
