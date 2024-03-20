import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import { accountVerificationTemplate } from "./htmlTemplates/accountVerificationTemplate";
import { emailChangeRequestTemplate } from "./htmlTemplates/emailChangeRequestCode";
import { passwordChangeRequestTemplate } from "./htmlTemplates/passwordChangeRequestCodeTemplate";
let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: "tuni-auctions@outlook.com",
    pass: "FinalYearInternshipProjectEmailPassword",
  },
  tls: {
    ciphers: "SSLv3",
  },
});

export const sendBidderAccountVerificationMail = async (
  name: string,
  email: string,
  activationCode: string
) => {
  const tokenPayload = {
    email: email,
    aCode: activationCode,
  };
  const mailToken = jwt.sign(
    tokenPayload,
    process.env.NODEMAILER_TOKEN_SECRET!,
    {
      expiresIn: "2h",
    }
  );
  await transporter
    .sendMail({
      from: "tuni-auctions@outlook.com",
      to: email,
      subject: "Tuni-Auctions Account Activation",
      html: accountVerificationTemplate(name, mailToken),
    })
    .catch((err) => console.log(err));
};

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
