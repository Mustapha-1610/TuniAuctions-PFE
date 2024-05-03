import { connect } from "@/db/dbConfig";
import platformModel from "@/models/usersModels/platformModel";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const assets = await platformModel.find({});
    if (assets.length > 0) {
      return NextResponse.json({ success: true });
    }
    const platform = await platformModel.create({});
    return NextResponse.json({ platform, success: true });
  } catch (err) {
    return serverErrorHandler(err);
  }
}
