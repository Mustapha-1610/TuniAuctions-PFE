import { connect } from "@/db/dbConfig";
import { platformModelType } from "@/models/types/platform";
import bidderModel from "@/models/usersModels/bidderModel";
import platformModel from "@/models/usersModels/platformModel";
import sellerModel from "@/models/usersModels/sellerModel";
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

    const activeSellers = await sellerModel.find({ disabled: false });
    const platformStats: platformModelType | null = await platformModel.findOne(
      {}
    );
    return NextResponse.json<AdminDashboardResponseType>({
      activeSellersCount: activeSellers.length,

      platformStats,
      activeFemaleBidders: activeFemaleBidders.length,
      activeMaleBidders: activeMaleBidders.length,
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
}
