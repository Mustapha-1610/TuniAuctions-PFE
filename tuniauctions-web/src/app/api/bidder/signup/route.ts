import { connect } from "@/db/dbConfig";
import {
  userInputCausedErrors,
  serverErrorHandler,
  successHandler,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import bidderModel from "@/models/usersModels/bidderModel";
import sellerModel from "@/models/usersModels/sellerModel";
import { sendBidderAccountVerificationMail } from "@/emails/bidder/bidderMailLogic";
import { bidderSignupSchema } from "@/zodTypes/bidder/signup";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const validatedForm = bidderSignupSchema.safeParse(reqBody);
    if (!validatedForm.success) {
      return NextResponse.json({ error: "Missing inputs!" });
    }
    const { fullName, gender, email, password } = reqBody;
    await connect();
    let exsistingUser = await sellerModel.findOne({
      email: email.toUpperCase(),
    });
    if (exsistingUser) {
      return userInputCausedErrors("Account exists already!");
    } else {
      exsistingUser = await bidderModel.findOne({ email: email.toUpperCase() });
      if (exsistingUser) {
        return userInputCausedErrors("Account exists already!");
      }
    }
    const verificationCode = crypto.randomUUID();
    const socketId = crypto.randomUUID();
    await bidderModel.create({
      fullName,
      gender,
      email: email.toUpperCase(),
      password: bcrypt.hashSync(password),
      verificationCode,
      socketId,
    });
    await sendBidderAccountVerificationMail(fullName, email, verificationCode);
    return successHandler();
  } catch (err) {
    console.log(err);
    return serverErrorHandler(err);
  }
}
