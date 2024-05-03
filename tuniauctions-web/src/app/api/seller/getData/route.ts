import { connect } from "@/db/dbConfig";
import { returnSellerFrontData } from "@/frontHelpers/seller/returnSellerFrontData";
import { verifySellerToken } from "@/security/apiProtection/seller/routeProtection";
import refreshSellerToken from "@/security/apiProtection/seller/tokenHandelingFunctions/confirmAccess";
import {
  serverErrorHandler,
  unautherizedSellerError,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const res = await verifySellerToken(request);

    if (res.isValid) {
      const sellerFrontData = returnSellerFrontData(res.sellerAccount);
      const response = NextResponse.json({ success: true, sellerFrontData });
      if (res.newAccessToken)
        return refreshSellerToken(response, res.newAccessToken);
    } else console.log("unvalid 1", res);

    return unautherizedSellerError();
  } catch (err) {
    console.log("unvalid 2", err);

    return serverErrorHandler(err);
  }
}
