import { connect } from "@/db/dbConfig";
import { returnBidderFrontData } from "@/frontHelpers/bidder/returnBidderFrontData";
import { verifyBidderTokens } from "@/security/apiProtection/bidder/routeProtection";
import {
  serverErrorHandler,
  unautherizedError,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const res = await verifyBidderTokens(request);
    if (res.isValid) {
      const { amount } = await request.json();
      if (amount > 0) {
        res.bidderAccount.balance.activeBalance += amount;
        res.bidderAccount.transactions.push({
          amount,
          date: new Date(),
          context: "Balance Increase",
          reciever: "Tuni-Auctions",
        });
        await res.bidderAccount.save();
        const bidderFrontData = returnBidderFrontData(res.bidderAccount);
        return NextResponse.json({ bidderFrontData });
      } else {
        return userInputCausedErrors("noAmount");
      }
    } else {
      return unautherizedError(res.errorStage);
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
