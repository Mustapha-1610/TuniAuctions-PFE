import { connect } from "@/db/dbConfig";
import { returnSellerCreatedListingsFrontData } from "@/frontHelpers/seller/returnAuctionListingFrontData";
import auctionListingModel from "@/models/auctionListingModels/auctionListing";
import {
  AuctionListingType,
  sellerAuctionListingFrontData,
} from "@/models/types/auctionListing";
import { verifySellerToken } from "@/security/apiProtection/seller/routeProtection";
import {
  serverErrorHandler,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";
export interface sellerCreatedAuctionsResponse {
  sellerFrontListings: sellerAuctionListingFrontData[];
  success: boolean;
}
export async function POST(request: NextRequest) {
  try {
    await connect();
    const res = await verifySellerToken(request);
    if (res.isValid) {
      const auctionListings: AuctionListingType[] | null =
        await auctionListingModel.find({
          _id: {
            $in:
              res.sellerAccount.createdAuctions.upcoming ||
              res.sellerAccount.createdAuctions.finished,
          },
        });
      if (auctionListings) {
        const auctionListingSellerFrontData =
          returnSellerCreatedListingsFrontData(auctionListings);
        return NextResponse.json<sellerCreatedAuctionsResponse>({
          sellerFrontListings: auctionListingSellerFrontData,
          success: true,
        });
      } else {
        return NextResponse.json({ success: false });
      }
    } else {
      return userInputCausedErrors("");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
