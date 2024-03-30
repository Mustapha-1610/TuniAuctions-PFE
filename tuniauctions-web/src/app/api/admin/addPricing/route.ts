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
  positives: z.array(z.string()),
  listingsCount: z.number(),
  platformFees: z.number(),
});
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const isSchemValid = pricingSchema.safeParse(reqBody);
    if (isSchemValid.success) {
      await connect();
      const { name, price, positives, listingsCount, platformFees } = reqBody;
      await pricingModel.create({
        name,
        price,
        positives,
        listingsCount,
        platformFees,
      });
      return NextResponse.json({ success: true });
    } else {
      return userInputCausedErrors("missingInputs");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
