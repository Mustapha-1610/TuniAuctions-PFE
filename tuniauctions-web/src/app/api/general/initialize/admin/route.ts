import { connect } from "@/db/dbConfig";
import adminModel from "@/models/usersModels/adminModel";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const admin = await adminModel.create({
      email: "admin@admin.com",
      password: bcrypt.hashSync("123456"),
      name: "Admin",
    });
    return NextResponse.json({ admin, success: true });
  } catch (err) {
    return serverErrorHandler(err);
  }
}
