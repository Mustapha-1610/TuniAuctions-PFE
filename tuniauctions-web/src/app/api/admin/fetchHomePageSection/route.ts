import { connect } from "@/db/dbConfig";
import auctionListingModel from "@/models/auctionListingModels/auctionListing";
import deliveryModel from "@/models/auctionListingModels/deliveryModel";
import { AuctionListingType } from "@/models/types/auctionListing";
import { DeliveryType } from "@/models/types/delivery";
import { platformModelType } from "@/models/types/platform";
import bidderModel from "@/models/usersModels/bidderModel";
import platformModel from "@/models/usersModels/platformModel";
import sellerModel from "@/models/usersModels/sellerModel";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const activeFemaleBidders = await bidderModel.find({
      disabled: false,
      gender: "Female",
    });
    const activeMaleBidders = await bidderModel.find({
      disabled: false,
      gender: "Male",
    });

    const activeSellers = await sellerModel.find({
      disabled: false,
      verified: true,
    });
    // Retrieve latest 4 pending sellers
    const pendingSellers: ISeller[] | null = await sellerModel
      .find({ disabled: false, verified: false })
      .sort({ createdAt: -1 }) // Sorting in descending order based on createdAt
      .limit(4);

    // Retrieve latest 4 pending deliveries
    const pendingDeliveries: DeliveryType[] | null = await deliveryModel
      .find({ status: "Reported" })
      .sort({ createdAt: -1 }) // Sorting in descending order based on createdAt
      .limit(4);

    // Retrieve latest 4 upcoming auctions with status "Pending Start" or "Ongoing"
    const upcomingAuctions: AuctionListingType[] | null =
      await auctionListingModel
        .find({ status: { $in: ["Pending Start", "Ongoing"] } })
        .sort({ startTime: -1 })
        .limit(4);
    const platformStats: platformModelType | null = await platformModel.findOne(
      {}
    );
    return NextResponse.json<AdminDashboardResponseType>({
      activeSellersCount: activeSellers.length,
      pendingDeliveries,
      pendingSellers,
      platformStats,
      activeFemaleBidders: activeFemaleBidders.length,
      activeMaleBidders: activeMaleBidders.length,
      upcomingAuctions: upcomingAuctions.reverse(),
    });
  } catch (err) {
    return serverErrorHandler(err);
  }
}

export interface AdminDashboardResponseType {
  activeSellersCount: number;
  platformStats: platformModelType | null;
  activeFemaleBidders: number;
  activeMaleBidders: number;
  pendingDeliveries: DeliveryType[] | null;
  pendingSellers: ISeller[] | null;
  upcomingAuctions: AuctionListingType[] | null;
}
