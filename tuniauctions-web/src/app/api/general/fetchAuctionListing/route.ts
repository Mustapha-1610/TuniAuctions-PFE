import { connect } from "@/db/dbConfig";
import auctionListingModel from "@/models/auctionListingModels/auctionListing";
import { AuctionListingType } from "@/models/types/auctionListing";
import sellerModel from "@/models/usersModels/sellerModel";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import { verifyBidderTokens } from "@/security/apiProtection/bidder/routeProtection";
import {
  serverErrorHandler,
  unautherizedError,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const { auctionId } = await request.json();
    const auction: AuctionListingType | null =
      await auctionListingModel.findOne({ _id: auctionId });
    if (auction) {
      auction.totalViews += 1;
      const seller: ISeller | null = await sellerModel.findById({
        _id: auction.sellerId,
      });

      const sellerAuctionListingData = {
        name: seller?.name,
        description: seller?.description,
        coverPicture: seller?.coverPicture,
        businessPicture: seller?.businessPicture,
      };
      await auction.save();
      return NextResponse.json<FetchAuctionFrontResponse>({
        success: true,
        auction,
        sellerAuctionListingData,
      });
    } else {
      return userInputCausedErrors("unexistant");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}

export interface FetchAuctionFrontResponse {
  success: boolean;
  auction: AuctionListingType;
  sellerAuctionListingData: SellerSocialSectionDetailsType;
}

export interface SellerSocialSectionDetailsType {
  name?: string;
  description?: string;
  coverPicture?: string;
  businessPicture?: string;
}
