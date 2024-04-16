import { connect } from "@/db/dbConfig";
import { returnBidderFrontData } from "@/frontHelpers/bidder/returnBidderFrontData";
import { verifyBidderTokens } from "@/security/apiProtection/bidder/routeProtection";
import refreshBidderAccessToken from "@/security/apiProtection/bidder/tokenHandelingFunctions/confirmAccess";
import {
  serverErrorHandler,
  unautherizedError,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { addLocationSchema } from "@/zodTypes/bidder/signup";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const res = await verifyBidderTokens(request);
    if (res.isValid) {
      const isSchemValid = addLocationSchema.safeParse(request);
      if (isSchemValid) {
        const { presetName, street, phoneNumber, index } = await request.json();

        if (index === null) {
          res.bidderAccount.adressPresets.push({
            phoneNumber,
            presetName,
            street,
          });
        } else if (index >= 0) {
          res.bidderAccount.adressPresets[index] = {
            phoneNumber,
            presetName,
            street,
          };
        }
        await res.bidderAccount.save();
        const bidderFrontData = returnBidderFrontData(res.bidderAccount);
        const response = NextResponse.json({ success: true, bidderFrontData });
        return refreshBidderAccessToken(response, res.newAccessToken);
      } else return userInputCausedErrors("invalidSchema");
    } else return unautherizedError();
  } catch (err) {
    console.log(err);
    return serverErrorHandler(err);
  }
}
