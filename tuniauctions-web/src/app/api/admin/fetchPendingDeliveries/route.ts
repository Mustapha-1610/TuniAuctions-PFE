import { connect } from "@/db/dbConfig";
import platformModel from "@/models/usersModels/platformModel";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();

    return NextResponse;
  } catch (err) {
    return serverErrorHandler(err);
  }
}
