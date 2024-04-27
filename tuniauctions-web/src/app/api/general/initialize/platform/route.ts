import { connect } from "@/db/dbConfig";
import adminModel from "@/models/usersModels/adminModel";
import platformModel from "@/models/usersModels/platformModel";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const platform = await platformModel.create({});
    return NextResponse.json({ platform, success: true });
  } catch (err) {
    return serverErrorHandler(err);
  }
}
