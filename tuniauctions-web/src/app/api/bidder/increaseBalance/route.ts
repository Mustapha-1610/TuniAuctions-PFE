import { connect } from "@/db/dbConfig";
import { returnBidderFrontData } from "@/frontHelpers/bidder/returnBidderFrontData";
import { verifyBidderTokens } from "@/security/apiProtection/bidder/routeProtection";
import refreshBidderAccessToken from "@/security/apiProtection/bidder/tokenHandelingFunctions/confirmAccess";
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
          context: "balanceIncrease",
          reciever: "Tuni-Auctions",
        });
        res.bidderAccount.notifications.push({
          notificationMessage: "transactionSuccessfull",
          context: {
            frontContext: "transactionSuccessfull",
            receptionDate: new Date(),
            notificationIcon:
              "https://firebasestorage.googleapis.com/v0/b/tunisianauctionwebapp.appspot.com/o/CircularReducedSizeTuniAuctionsLogo.png?alt=media&token=e5c93487-fd34-4e62-9602-964b3d0392fe",
            displayName: amount,
          },
        });
        await res.bidderAccount.save();
        const bidderFrontData = returnBidderFrontData(res.bidderAccount);
        const response = NextResponse.json({ bidderFrontData, success: true });

        return refreshBidderAccessToken(response, res.newAccessToken);
      } else {
        console.log("idk");
        return userInputCausedErrors("noAmount");
      }
    } else {
      console.log("not valid balance 1", res);
      return unautherizedError(res.errorStage);
    }
  } catch (err) {
    console.log("not valid balance 2", err);

    return serverErrorHandler(err);
  }
}
