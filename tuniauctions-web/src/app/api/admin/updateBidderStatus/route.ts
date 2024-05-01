import { connect } from "@/db/dbConfig";
import bidderModel from "@/models/usersModels/bidderModel";
import { IBidder } from "@/models/usersModels/types/bidderTypes";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    await connect();
    const { bidderId, refresh } = await request.json();
    const bidder: IBidder | null = await bidderModel.findById(bidderId);
    if (bidder) {
      bidder.disabled = !bidder.disabled;
      await bidder.save();
    }
    if (refresh) {
      const bidders = await bidderModel.find();
      return NextResponse.json({ success: true, bidder, bidders });
    }
    return NextResponse.json({ success: true, bidder });
  } catch (err) {
    return serverErrorHandler(err);
  }
}
