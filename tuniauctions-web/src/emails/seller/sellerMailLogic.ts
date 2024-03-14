import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

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

export const renterConfirmationMail = async () => {
  await transporter
    .sendMail({
      from: "tuni-auctions@outlook.com",
      to: "mustapha.talbi2002@gmail.com",
      subject: "Dar-Seranity Account Activation",
      html: `<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="center">
      <table width="800" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td style="background-color: #e5e5e1; padding: 8px 2px;">
            
          </td>
        </tr>
        <tr>
  <td style="background-color: #e5e5e1; padding: 0 24px 20px; text-align: center;">
<img src="https://firebasestorage.googleapis.com/v0/b/tunisianauctionwebapp.appspot.com/o/TuniAuctionsReducedSizeLogoCropped.png?alt=media&token=b6ad1a8c-e634-452a-9509-178139cac428" alt="Hero image" style="width: 35%; max-height: 300px; object-fit: cover; object-position: center center; margin: 0 auto;" />

    <h1 style="text-align: center; margin-top: 32px; font: 42px Arial, sans-serif;">Account Verification</h1>
    <div style="background-color: #000; margin-top: 32px; height: 1px;"></div>
<p style="font-family: Inter, sans-serif; line-height: 26px; margin-top: 32px; font-size: 18px;">
Welcome to Tuni-Auctions! We're thrilled to have you on board, and we appreciate you choosing us. To ensure the security of your account, please take a moment to verify your email address by clicking the button below. Verifying your email helps us keep you informed about important updates, personalized recommendations, and exciting offers.    </p>
    <div style="background-color: #000; margin-top: 32px; height: 1px;"></div>
    <div style="text-align: center; margin-top: 32px;">
      <a href="#" style="display: inline-block; background-color: #000; color: #fff; text-decoration: none; padding: 12px 60px; font: 18px Inter, sans-serif; border-radius: 50px;">Verify My Email</a>
    </div>
    <p style="font-family: Inter, sans-serif; line-height: 26px;">
        Thank you for choosing our services!
    </p>
    <div style="background-color: #000; margin-top: 32px; height: 1px;"></div>
  </td>
</tr>

        <tr>
          <td style="background-color: #e5e5e1; padding: 16px 24px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td style="width: 50%; vertical-align: top;">
                    <p>Tuni-Auctions</p>
                  <address style="font-family: Inter, sans-serif;">
                    Rue de la Régence<br />
                    671000 Brussels<br />
                    Belgium
                  </address>
                </td>
                <td style="width: 50%; vertical-align: top; text-align: right;">
                  <table border="0" cellspacing="0" cellpadding="0" align="right">
                    <tr>
                      <td style="padding-left: 16px;">
                        <a href="#"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fba07635cb952d718b28dde1d8a0043d9105e96800e085e534e714f82bc740e?apiKey=667400e2ab464aafaf7f58f148eb5c4c&" alt="Facebook icon" style="width: 20px;" /></a>
                      </td>
                      <td style="padding-left: 16px;">
                        <a href="#"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8294908bc52f62a43e211486db134526a2cdad5f4578de83ffb03a32574af55a?apiKey=667400e2ab464aafaf7f58f148eb5c4c&" alt="Twitter icon" style="width: 20px;" /></a>
                      </td>
                      <td style="padding-left: 16px;">
                        <a href="#"><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/68a11e5a9dd68cd045719145d61eda5ee50adfdfeb80b55a0866ecfe04c00fd7?apiKey=667400e2ab464aafaf7f58f148eb5c4c&" alt="Instagram icon" style="width: 20px;" /></a>
                      </td>
                    </tr>
                    
                  </table>
                  <div style="background-color: rgba(255, 255, 255, 0); margin-top: 4px; height: 16px;"></div>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d28f0754da9b00c34f92ca08391c1546d094472f8e0e3be2406df9c88bbc53cd?apiKey=667400e2ab464aafaf7f58f148eb5c4c&" alt="Reviews logo" style="width: 124px; align-self: end; margin-top: 4px; max-width: 100%;" />
                  <div style="color: #000; text-align: right; margin-top: 4px; white-space: nowrap; font: 400 12px/150% Inter, sans-serif;">5000+ reviews</div>
                  <div style="background-color: rgba(255, 255, 255, 0); margin-top: 4px; height: 16px;"></div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`,
    })
    .catch((err) => console.log(err));
};
