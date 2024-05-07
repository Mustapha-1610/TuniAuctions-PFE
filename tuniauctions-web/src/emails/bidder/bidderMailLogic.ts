import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import { accountVerificationTemplate } from "./htmlTemplates/accountVerificationTemplate";
import { emailChangeRequestTemplate } from "./htmlTemplates/emailChangeRequestCode";
import { passwordChangeRequestTemplate } from "./htmlTemplates/passwordChangeRequestCodeTemplate";
const user = "mustapha.talbi2002@gmail.com";
const pass = "lhxa ryjh kszp sejk";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

export async function sendBidderAccountVerificationMail(
  name: string,
  email: string,
  activationCode: string,
  language: "en" | "fr" | "ar" | "gr"
) {
  const tokenPayload = {
    email: email,
    aCode: activationCode,
  };
  const mailToken = jwt.sign(
    tokenPayload,
    process.env.NODEMAILER_TOKEN_SECRET!,
    {
      expiresIn: "10m",
    }
  );
  await transporter
    .sendMail({
      from: "tuni-auctions@outlook.com",
      to: email,
      subject: "Tuni-Auctions Account Activation",
      html: accountVerificationTemplate(name, mailToken, language),
    })
    .catch((err) => console.log(err));
}

export const sendBidderEmailChangeRequestCode = async (
  email: string,
  secretCode: string
) => {
  await transporter
    .sendMail({
      from: "tuni-auctions@outlook.com",
      to: email,
      subject: "Tuni-Auctions Account Activation",
      html: emailChangeRequestTemplate(secretCode),
    })
    .catch((err) => console.log(err));
};

export const sendBidderPasswordChangeRequestCode = async (
  email: string,
  secretCode: string
) => {
  await transporter
    .sendMail({
      from: "tuni-auctions@outlook.com",
      to: email,
      subject: "Tuni-Auctions Account Activation",
      html: passwordChangeRequestTemplate(secretCode),
    })
    .catch((err) => console.log(err));
};
