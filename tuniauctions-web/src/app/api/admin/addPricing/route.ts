import { connect } from "@/db/dbConfig";
import pricingModel from "@/models/auctionListingModels/pricingModel";
import {
  serverErrorHandler,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
const pricingSchema = z.object({
  name: z.string(),
  price: z.number(),
  listingsCount: z.number(),
  platformFees: z.number(),
  videoLength: z.number(),
  buyItNowSection: z.boolean(),
  genderViews: z.boolean(),
  socialsSection: z.boolean(),
  featured: z.boolean(),
});
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const isSchemValid = pricingSchema.safeParse(reqBody);
    if (isSchemValid.success) {
      await connect();
      const {
        name,
        price,
        listingsCount,
        platformFees,
        videoLength,
        buyItNowSection,
        genderViews,
        socialsSection,
        featured,
      } = reqBody;
      await pricingModel.create({
        name,
        price,
        listingsCount,
        platformFees,
        videoLength,
        buyItNowSection,
        genderViews,
        socialsSection,
        featured,
      });
      return NextResponse.json({ success: true });
    } else {
      return userInputCausedErrors("missingInputs");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
