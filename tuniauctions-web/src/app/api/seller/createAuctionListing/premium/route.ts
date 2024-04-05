import { returnSellerFrontData } from "@/frontHelpers/seller/returnSellerFrontData";
import auctionListingModel from "@/models/auctionListingModels/auctionListing";
import { verifySellerTokens } from "@/security/apiProtection/seller/routeProtection";
import {
  serverErrorHandler,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const premiumListingSchema = z.object({
  title: z.string(),
  buyItNowSection: z.object({
    promotionalDescription: z.string(),
    promotionalPicture: z.string(),
    storeLink: z.string(),
  }),
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
  socialsSection: z.object({
    facebook: z.string().optional(),
    instagram: z.string().optional(),
    youtube: z.string().optional(),
    twitter: z.string().optional(),
    tiktok: z.string().optional(),
  }),
  startingDate: z.string(),
  minParticipatingBidders: z.number().nonnegative(),
});
type premiumListingType = z.infer<typeof premiumListingSchema>;
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const isSchemaValid = premiumListingSchema.safeParse(reqBody);
    if (isSchemaValid.success) {
      const res = await verifySellerTokens(request);
      if (res.isValid) {
        const seller = res.sellerAccount;
        const {
          title,
          buyItNowSection,
          guarentee,
          description,
          openingBid,
          originalPrice,
          productCategory,
          productPictures,
          promotionalVideo,
          socialsSection,
          startingDate,
          minParticipatingBidders,
        }: premiumListingType = reqBody;
        const newAuction = await auctionListingModel.create({
          listingType: "Premium",
          title,
          description,
          category: productCategory,
          promotionalVideo,
          productPictures,
          originalPrice,
          startingDate,
          platformFees: 4,
          openingBid,
          guarantee: guarentee.length + " " + guarentee.period,
          buyItNowSection,
          socialsSection,
          featured: true,
          minParticipatingBidders,
          sellerId: seller._id,
        });
        seller.createdAuctions.upcoming.push(newAuction._id);
        seller.packageCount.Premium -= 1;
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
