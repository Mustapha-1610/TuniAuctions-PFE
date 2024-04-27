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
    const activeBidders = await bidderModel.find({ disabled: false });
    const activeSellers = await sellerModel.find({ disabled: false });
    const platformStats: platformModelType | null = await platformModel.findOne(
      {}
    );
    return NextResponse.json<AdminDashboardResponseType>({
      activeBiddersCount: activeBidders.length,
      activeSellersCount: activeSellers.length,

      platformStats,
    });
  } catch (err) {
    return serverErrorHandler(err);
  }
}

export interface AdminDashboardResponseType {
  activeBiddersCount: number;
  activeSellersCount: number;
  platformStats: platformModelType | null;
}
