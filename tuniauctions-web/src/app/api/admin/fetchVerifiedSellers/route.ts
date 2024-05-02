import { connect } from "@/db/dbConfig";
import bidderModel from "@/models/usersModels/bidderModel";
import sellerModel from "@/models/usersModels/sellerModel";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const sellers = await sellerModel.find({ verified: true });
    return NextResponse.json(sellers);
  } catch (err) {
    return serverErrorHandler(err);
  }
}
