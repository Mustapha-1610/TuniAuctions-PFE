import { connect } from "@/db/dbConfig";
import adminModel from "@/models/usersModels/adminModel";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("starting admin");
    await connect();
    const assets = await adminModel.find({});
    if (assets.length > 0) {
      return NextResponse.json({ success: true });
    }
    const admin = await adminModel.create({
      email: "ADMIN@ADMIN.COM",
      password: bcrypt.hashSync("123456"),
      name: "Admin",
    });
    return NextResponse.json({ admin, success: true });
  } catch (err) {
    return serverErrorHandler(err);
  }
}
