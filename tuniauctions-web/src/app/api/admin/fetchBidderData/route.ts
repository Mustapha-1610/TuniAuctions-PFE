import { connect } from "@/db/dbConfig";
import bidderModel from "@/models/usersModels/bidderModel";
import sellerModel from "@/models/usersModels/sellerModel";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const { bidderId } = await request.json();

    const bidder = await bidderModel.findById(bidderId);

    return NextResponse.json(bidder);
  } catch (err) {
    return serverErrorHandler(err);
  }
}
