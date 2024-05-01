import { connect } from "@/db/dbConfig";
import sellerModel from "@/models/usersModels/sellerModel";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    await connect();
    const { sellerId, refresh } = await request.json();
    const seller: ISeller | null = await sellerModel.findById(sellerId);
    if (seller) {
      seller.disabled = !seller.disabled;
      await seller.save();
    }
    if (refresh) {
      const sellers = await sellerModel.find({ verified: true });
      return NextResponse.json({ success: true, seller, sellers });
    }
    return NextResponse.json({ success: true, seller });
  } catch (err) {
    return serverErrorHandler(err);
  }
}
