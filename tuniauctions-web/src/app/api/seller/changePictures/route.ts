import { returnSellerFrontData } from "@/frontHelpers/seller/returnSellerFrontData";
import { verifySellerTokens } from "@/security/apiProtection/seller/routeProtection";
import {
  serverErrorHandler,
  unautherizedError,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const res = await verifySellerTokens(request);
    if (res.isValid) {
      const { picture, imageType } = await request.json();
      imageType === "cover"
        ? (res.sellerAccount.coverPicture = picture)
        : (res.sellerAccount.businessPicture = picture);
      await res.sellerAccount.save();
      const sellerFrontData = returnSellerFrontData(res.sellerAccount);
      return NextResponse.json({ success: true, sellerFrontData });
    } else {
      return unautherizedError("err");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
