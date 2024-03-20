import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import { sellerAccountReviewMail } from "./htmlTemplates/sellerAccountReviewMail";

let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "tuni-auctions@outlook.com", // your Outlook email
    pass: "FinalYearInternshipProjectEmailPassword", // your email password
  },
  tls: {
    ciphers: "SSLv3",
  },
});

export const sendSellerAccountReviewMail = async (seller_name: string) => {
  await transporter
    .sendMail({
      from: "tuni-auctions@outlook.com",
      to: "mustapha.talbi2002@gmail.com",
      subject: "Tuni-Auctions ",
      html: sellerAccountReviewMail(seller_name),
    })
    .catch((err) => console.log(err));
};
