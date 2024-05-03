import { connect } from "@/db/dbConfig";
import { returnSellerFrontData } from "@/frontHelpers/seller/returnSellerFrontData";
import auctionListingModel from "@/models/auctionListingModels/auctionListing";
import { verifySellerToken } from "@/security/apiProtection/seller/routeProtection";
import {
  serverErrorHandler,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const basicListingSchema = z.object({
  title: z.string(),
  guarentee: z.object({
    length: z.number().nonnegative(),
    period: z.string(),
  }),
  description: z.string(),
  openingBid: z.number(),
  originalPrice: z.number().nonnegative(),
  productCategory: z.string(),
  productPictures: z.array(z.string()).min(1).max(3),
  promotionalVideo: z.string(),
  startingDate: z.string(),
  minParticipatingBidders: z.number().nonnegative(),
});
type premiumListingType = z.infer<typeof basicListingSchema>;
export async function POST(request: NextRequest) {
  try {
    await connect();
    const reqBody = await request.json();
    const isSchemaValid = basicListingSchema.safeParse(reqBody);
    if (isSchemaValid.success) {
      const res = await verifySellerToken(request);
      if (res.isValid) {
        const seller = res.sellerAccount;
        const {
          title,
          guarentee,
          description,
          openingBid,
          originalPrice,
          productCategory,
          productPictures,
          promotionalVideo,
          startingDate,
          minParticipatingBidders,
        }: premiumListingType = reqBody;
        const newAuction = await auctionListingModel.create({
          listingType: "Basic",
          title,
          description,
          category: productCategory,
          promotionalVideo,
          productPictures: productPictures.reverse(),
          originalPrice,
          startingDate,
          platformFees: 8,
          openingBid,
          guarantee: guarentee.length + " " + guarentee.period,
          featured: true,
          minParticipatingBidders,
          sellerId: seller._id,
        });
        seller.createdAuctions.upcoming.push(newAuction._id);
        await seller.save();
        const sellerFrontData = returnSellerFrontData(seller);

        return NextResponse.json({ success: true, sellerFrontData });
      } else {
        return serverErrorHandler("");
      }
    } else {
      return userInputCausedErrors("missingInputs");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
