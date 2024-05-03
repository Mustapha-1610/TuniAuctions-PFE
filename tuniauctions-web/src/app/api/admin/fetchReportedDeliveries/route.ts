import { connect } from "@/db/dbConfig";
import deliveryModel from "@/models/auctionListingModels/deliveryModel";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const deliveries = await deliveryModel.find({ status: "Reported" });
    return NextResponse.json(deliveries);
  } catch (err) {
    return serverErrorHandler(err);
  }
}
