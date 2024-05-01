import { connect } from "@/db/dbConfig";
import bidderModel from "@/models/usersModels/bidderModel";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const bidders = await bidderModel.find();
    return NextResponse.json(bidders);
  } catch (err) {
    return serverErrorHandler(err);
  }
}
