import { connect } from "@/db/dbConfig";
import sellerModel from "@/models/usersModels/sellerModel";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import {
  serverErrorHandler,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendSellerAccountReviewMail } from "@/emails/seller/sellerMailLogic";
import { IBidder } from "@/models/usersModels/types/bidderTypes";
import bidderModel from "@/models/usersModels/bidderModel";
import { sellerSignupSchema } from "@/zodTypes/seller/signup";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const isSchemaValid = sellerSignupSchema.safeParse(reqBody);
    if (isSchemaValid.success) {
      const {
        name,
        email,
        password,
        description,
        registrationLicense,
        city,
        municipality,
        street,
      } = reqBody;
      await connect();
      const seller: ISeller | null = await sellerModel.findOne({
        email: email.toUpperCase(),
      });
      if (seller) {
        return userInputCausedErrors("accountExists");
      } else {
        const bidder: IBidder | null = await bidderModel.findOne({
          email: email.toUpperCase(),
        });
        if (bidder) {
          return userInputCausedErrors("accountExists");
        }
        const socketId = crypto.randomUUID();
        await sellerModel.create({
          name,
          email: email.toUpperCase(),
          password: bcrypt.hashSync(password),
          description,
          registrationLicense,
          location: {
            city,
            municipality,
            street,
          },
          socketId,
        });
        await sendSellerAccountReviewMail(name);
        return NextResponse.json({ success: true });
      }
    } else {
      return userInputCausedErrors("missingInputs");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
