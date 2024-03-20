import { connect } from "@/db/dbConfig";
import { returnBidderFrontData } from "@/frontHelpers/bidder/returnBidderFrontData";
import bidderModel from "@/models/usersModels/bidderModel";
import sellerModel from "@/models/usersModels/sellerModel";
import {
  IBidder,
  IBidderFrontData,
} from "@/models/usersModels/types/bidderTypes";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import {
  serverErrorHandler,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, newEmail, confirmNewEmail } = await request.json();
    await connect();
    const user: IBidder | null = await bidderModel.findOne({
      email: email.toUpperCase(),
    });
    if (user) {
      if (email === newEmail) {
        return userInputCausedErrors("sameMail");
      }
      if (newEmail === confirmNewEmail) {
        user.email = newEmail.toUpperCase();
        const bidderFrontData: IBidderFrontData = returnBidderFrontData(user);
        return NextResponse.json({ success: true, bidderFrontData });
      } else {
        return userInputCausedErrors("emailMismatch");
      }
    } else {
      const user: ISeller | null = await sellerModel.findOne({
        email: email.toUpperCase(),
      });
      if (user) {
        if (email === newEmail) {
          return userInputCausedErrors("sameMail");
        }
        if (newEmail === confirmNewEmail) {
          user.email = newEmail.toUpperCase();

          return NextResponse.json({ success: true, user });
        } else {
          return userInputCausedErrors("emailMismatch");
        }
      } else {
        return userInputCausedErrors("AccountNonExistant");
      }
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
