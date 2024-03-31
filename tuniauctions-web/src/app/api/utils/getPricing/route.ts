import { connect } from "@/db/dbConfig";
import pricingModel from "@/models/auctionListingModels/pricingModel";
import { Pricing } from "@/models/types/pricing";
import {
  serverErrorHandler,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { id } = await request.json();
    await connect();
    const pricing: Pricing | null = await pricingModel.findById(id);
    if (pricing) {
      return NextResponse.json<getPricingResponse>({ success: true, pricing });
    } else {
      return userInputCausedErrors("noId");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}

export interface getPricingResponse {
  success: true;
  pricing: Pricing;
}
