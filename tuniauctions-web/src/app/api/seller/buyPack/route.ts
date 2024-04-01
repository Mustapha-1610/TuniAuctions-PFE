import { connect } from "@/db/dbConfig";
import { returnSellerFrontData } from "@/frontHelpers/seller/returnSellerFrontData";
import pricingModel from "@/models/auctionListingModels/pricingModel";
import { Pricing } from "@/models/types/pricing";
import { ISellerFrontData } from "@/models/usersModels/types/sellerTypes";
import { verifySellerTokens } from "@/security/apiProtection/seller/routeProtection";
import {
  serverErrorHandler,
  unautherizedError,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const res = await verifySellerTokens(request);
    if (res.isValid) {
      await connect();
      const { pricingId } = await request.json();
      const pricing: Pricing | null = await pricingModel.findById(pricingId);
      if (pricing) {
        res.sellerAccount.packageCount[pricing.name] += pricing.listingsCount;
        await res.sellerAccount.save();
        const sellerFrontData: ISellerFrontData = returnSellerFrontData(
          res.sellerAccount
        );
        return NextResponse.json({ success: true, sellerFrontData });
      }
    } else {
      return unautherizedError("err");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
