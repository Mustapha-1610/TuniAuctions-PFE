import { connect } from "@/db/dbConfig";
import sellerModel from "@/models/usersModels/sellerModel";
import {
  ISeller,
  ISellerFrontData,
} from "@/models/usersModels/types/sellerTypes";
import {
  serverErrorHandler,
  userInputCausedErrors,
} from "@/serverHelpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { sendSellerAccountReviewMail } from "@/emails/seller/sellerMailLogic";
import { returnSellerFrontData } from "@/frontHelpers/seller/returnSellerFrontData";
const sellerSignupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(3),
  description: z.string().min(30),
  registrationLicense: z.string(),
  city: z.string(),
  municipality: z.string(),
  street: z.string(),
});
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
        return userInputCausedErrors("userExists");
      } else {
        const newSeller: ISeller = await sellerModel.create({
          name,
          email,
          password: bcrypt.hashSync(password),
          description,
          registrationLicense,
          city,
          municipality,
          street,
        });
        await sendSellerAccountReviewMail(name)!;
        const sellerFrontData: ISellerFrontData =
          returnSellerFrontData(newSeller);
        return NextResponse.json({ success: true, sellerFrontData });
      }
    } else {
      return userInputCausedErrors("invalidSchema");
    }
  } catch (err) {
    return serverErrorHandler(err);
  }
}
