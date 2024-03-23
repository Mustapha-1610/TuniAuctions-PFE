import { connect } from "@/db/dbConfig";
import {
  userInputCausedErrors,
  serverErrorHandler,
  successHandler,
} from "@/serverHelpers/errorHandler";
import { NextRequest } from "next/server";
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
      return userInputCausedErrors("missingInputs");
    }
    const { fullName, gender, email, password } = reqBody;
    await connect();
    let exsistingUser = await sellerModel.findOne({
      email: email.toUpperCase(),
    });
    if (exsistingUser) {
      return userInputCausedErrors("accountExists");
    } else {
      exsistingUser = await bidderModel.findOne({ email: email.toUpperCase() });
      if (exsistingUser) {
        return userInputCausedErrors("accountExists");
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
