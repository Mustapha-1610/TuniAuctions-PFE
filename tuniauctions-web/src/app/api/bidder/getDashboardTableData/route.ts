import auctionListingModel from "@/models/auctionListingModels/auctionListing";
import deliveryModel from "@/models/auctionListingModels/deliveryModel";
import { AuctionListingType } from "@/models/types/auctionListing";
import { DeliveryType } from "@/models/types/delivery";
import { verifyBidderTokens } from "@/security/apiProtection/bidder/routeProtection";
import refreshBidderAccessToken from "@/security/apiProtection/bidder/tokenHandelingFunctions/confirmAccess";
import {
  serverErrorHandler,
  unautherizedError,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const res = await verifyBidderTokens(request);
    if (res.isValid) {
      const upcomingAuctions: AuctionListingType[] | undefined =
        await auctionListingModel.find({
          _id: {
            $in: res.bidderAccount.auctionReferences.upcoming,
          },
        });
      const participatedAuctions: AuctionListingType[] | undefined =
        await auctionListingModel.find({
          _id: {
            $in: res.bidderAccount.auctionReferences.participated,
          },
        });
      const pendingDeliveries: DeliveryType[] | undefined =
        await deliveryModel.find({
          _id: {
            $in: res.bidderAccount.deliveries.pending,
          },
        });
      const deliveredDeliveries: DeliveryType[] | undefined =
        await deliveryModel.find({
          _id: {
            $in: res.bidderAccount.deliveries.delivered,
          },
        });
      const response = NextResponse.json<getDashboardTableDataResponse>({
        deliveredDeliveries,
        pendingDeliveries,
        participatedAuctions,
        upcomingAuctions,
      });
      return refreshBidderAccessToken(response, res.newAccessToken);
    } else {
      return unautherizedError();
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}

export interface getDashboardTableDataResponse {
  upcomingAuctions: AuctionListingType[] | undefined;
  participatedAuctions: AuctionListingType[] | undefined;
  pendingDeliveries: DeliveryType[] | undefined;
  deliveredDeliveries: DeliveryType[] | undefined;
}
