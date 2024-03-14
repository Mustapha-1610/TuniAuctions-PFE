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
export const bidderSignupSchema = z.object({
  fullname: z.string().min(6).max(40),
  email: z.string().email("Invalid Email"),
  password: z.string().min(3).max(40),
  gender: z.enum(["Male", "Female"]),
  gmailAccount: z.boolean(),
});

export async function POST(request: NextRequest) {
  try {
    await connect();
    const reqBody = await request.json();
    const validatedForm = bidderSignupSchema.safeParse(reqBody);
    if (!validatedForm.success) {
      return NextResponse.json({ error: "Missing inputs!" });
    }
    const { fullname, gender, gmailAccount, email, password } = reqBody;
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
    if (!gmailAccount) {
      return await bidderSignup(
        fullname,
        gender,
        email,
        password,
        verificationCode,
        socketId
      );
    } else {
    }
  } catch (err) {
    console.log(err);
    return serverErrorHandler(err);
  }
}

async function bidderSignup(
  fullName: string,
  gender: string,
  email: string,
  password: string,
  verificationCode: string,
  socketId: string
) {
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
}
async function bidderGoogleSignup(authToken: string) {
  await bidderModel.create({});
}
