import { connect } from "@/db/dbConfig";
import sellerModel from "@/models/usersModels/sellerModel";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const { sellerId } = await request.json();

    const seller = await sellerModel.findById(sellerId);

    return NextResponse.json(seller);
  } catch (err) {
    return serverErrorHandler(err);
  }
}
