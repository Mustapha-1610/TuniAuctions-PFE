import { connect } from "@/db/dbConfig";
import pricingModel from "@/models/auctionListingModels/pricingModel";
import { Pricing } from "@/models/types/pricing";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const pricings: Pricing[] = await pricingModel.find();
    if (pricings) {
      return NextResponse.json({ success: true, pricings });
    } else {
      return serverErrorHandler("No Pricings");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}

export interface PricingResponse {
  success: true;
  pricings: Pricing[];
}
