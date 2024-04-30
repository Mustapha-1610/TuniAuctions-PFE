import { connect } from "@/db/dbConfig";
import {
  sendSellerAcceptanceMail,
  sendSellerDeclineMail,
} from "@/emails/seller/sellerMailLogic";
import sellerModel from "@/models/usersModels/sellerModel";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import { serverErrorHandler } from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const { sellerId, approve } = await request.json();
    console.log(approve);
    if (approve) {
      const seller: ISeller | null = await sellerModel.findByIdAndUpdate(
        sellerId,
        {
          $set: {
            verified: true,
          },
        }
      );
      await sendSellerAcceptanceMail(seller!.name);
    } else {
      const seller: ISeller | null = await sellerModel.findByIdAndDelete(
        sellerId
      );
      await sendSellerDeclineMail(seller!.name);
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    return serverErrorHandler(err);
  }
}
