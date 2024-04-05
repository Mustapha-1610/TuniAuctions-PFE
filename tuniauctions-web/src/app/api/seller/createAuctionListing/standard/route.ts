import { connect } from "@/db/dbConfig";
import { returnSellerFrontData } from "@/frontHelpers/seller/returnSellerFrontData";
import auctionListingModel from "@/models/auctionListingModels/auctionListing";
import { verifySellerTokens } from "@/security/apiProtection/seller/routeProtection";
import {
  serverErrorHandler,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const standardSchemaListing = z.object({
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
  startingDate: z.string(),
  minParticipatingBidders: z.number().nonnegative(),
});
type premiumListingType = z.infer<typeof standardSchemaListing>;
export async function POST(request: NextRequest) {
  try {
    await connect();

    const reqBody = await request.json();
    const isSchemaValid = standardSchemaListing.safeParse(reqBody);
    if (isSchemaValid.success) {
      const res = await verifySellerTokens(request);
      if (res.isValid) {
        const seller = res.sellerAccount;
        console.log(seller.packageCount.Standard < 0);
        if (seller.packageCount.Standard > 0) {
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
            startingDate,
            minParticipatingBidders,
          }: premiumListingType = reqBody;
          const newAuction = await auctionListingModel.create({
            listingType: "Standard",
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
            featured: true,
            minParticipatingBidders,
            sellerId: seller._id,
          });
          seller.createdAuctions.upcoming.push(newAuction._id);
          seller.packageCount.Standard -= 1;
          await seller.save();
          const sellerFrontData = returnSellerFrontData(seller);
          return NextResponse.json({ success: true, sellerFrontData });
        } else {
          return userInputCausedErrors("emptyPackage");
        }
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
