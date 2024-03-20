import { connect } from "@/db/dbConfig";
import bidderModel from "@/models/usersModels/bidderModel";
import sellerModel from "@/models/usersModels/sellerModel";
import { IBidder } from "@/models/usersModels/types/bidderTypes";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import {
  serverErrorHandler,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, secretCode } = await request.json();
    await connect();
    const user: IBidder | null = await bidderModel.findOne({
      email: email.toUpperCase(),
    });
    if (user) {
      return await handleVerifyCode(user, secretCode);
    } else {
      const user: ISeller | null = await sellerModel.findOne({
        email: email.toUpperCase(),
      });
      if (user) {
        return await handleVerifyCode(user, secretCode);
      }
    }
    return userInputCausedErrors("Account non existant or deleted!");
  } catch (err) {
    return serverErrorHandler(err);
  }
}

async function handleVerifyCode(user: IBidder | ISeller, secretCode: string) {
  if (
    user.passResetCode.active &&
    user.passResetCode.secretCode === secretCode
  ) {
    user.passResetCode.active = false;
    await user.save();
    return NextResponse.json({ success: true });
  } else if (user.passResetCode.secretCode !== secretCode) {
    return userInputCausedErrors("Mismatch");
  } else if (!user.passResetCode.active) {
    return userInputCausedErrors("Unactive");
  } else {
    return userInputCausedErrors("Wrong code!");
  }
}
