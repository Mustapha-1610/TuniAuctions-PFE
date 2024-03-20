import { connect } from "@/db/dbConfig";
import { returnBidderFrontData } from "@/frontHelpers/bidder/returnBidderFrontData";
import bidderModel from "@/models/usersModels/bidderModel";
import {
  IBidder,
  IBidderFrontData,
} from "@/models/usersModels/types/bidderTypes";
import {
  serverErrorHandler,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import sellerModel from "@/models/usersModels/sellerModel";
export async function POST(request: NextRequest) {
  try {
    const { email, newPassword, confirmNewPassword } = await request.json();
    await connect();
    const user: IBidder | null = await bidderModel.findOne({
      email: email.toUpperCase(),
    });
    if (user) {
      if (bcrypt.compareSync(newPassword, user.password)) {
        return userInputCausedErrors("oldPasswordMatch");
      } else {
        if (newPassword !== confirmNewPassword) {
          return userInputCausedErrors("passwordMismatch");
        } else {
          user.password = bcrypt.hashSync(newPassword);

          await user.save();
          const bidderFrontData: IBidderFrontData = returnBidderFrontData(user);
          return NextResponse.json({ success: true, bidderFrontData });
        }
      }
    } else {
      let user: ISeller | null = await sellerModel.findOne({
        email: email.toUpperCase(),
      });
      if (user) {
        if (bcrypt.compareSync(newPassword, user.password)) {
          return userInputCausedErrors("oldPasswordMatch");
        } else {
          if (newPassword !== confirmNewPassword) {
            return userInputCausedErrors("passwordMismatch");
          } else {
            user.password = bcrypt.hashSync(newPassword);

            await user.save();
            return NextResponse.json({ success: true, user });
          }
        }
      } else {
        return userInputCausedErrors("AccountNonExistant");
      }
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
