import { connect } from "@/db/dbConfig";
import sellerModel from "@/models/usersModels/sellerModel";
import {
  serverErrorHandler,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const { sellerId } = await request.json();
    const seller = await sellerModel.findByIdAndUpdate(
      sellerId,
      {
        $set: {
          verified: true,
        },
      },
      {
        new: true,
      }
    );
    if (!seller) {
      return userInputCausedErrors("accountNonexsistant");
    } else {
      return NextResponse.json({ success: true });
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
