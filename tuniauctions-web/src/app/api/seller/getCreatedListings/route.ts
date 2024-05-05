import { connect } from "@/db/dbConfig";
import { returnSellerCreatedListingsFrontData } from "@/frontHelpers/seller/returnAuctionListingFrontData";
import auctionListingModel from "@/models/auctionListingModels/auctionListing";
import {
  AuctionListingType,
  sellerAuctionListingFrontData,
} from "@/models/types/auctionListing";
import { verifySellerToken } from "@/security/apiProtection/seller/routeProtection";
import refreshSellerToken from "@/security/apiProtection/seller/tokenHandelingFunctions/confirmAccess";
import {
  serverErrorHandler,
  unautherizedSellerError,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";
export interface sellerCreatedAuctionsResponse {
  sellerFrontListings: AuctionListingType[];
  success: boolean;
}
export async function POST(request: NextRequest) {
  try {
    await connect();
    const res = await verifySellerToken(request);
    if (res.isValid) {
      const auctionListings: AuctionListingType[] | null =
        await auctionListingModel.find({
          sellerId: res.sellerAccount._id,
        });
      if (auctionListings) {
        const response = NextResponse.json<sellerCreatedAuctionsResponse>({
          sellerFrontListings: auctionListings,
          success: true,
        });
        if (res.newAccessToken)
          return refreshSellerToken(response, res.newAccessToken);
        return response;
      } else {
        return NextResponse.json({ success: false });
      }
    } else {
      return unautherizedSellerError();
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
