import { JwtPayload } from "jsonwebtoken";

export function accountVerificationTemplate(
  name: string,
  mailToken: string,
  language: "en" | "fr" | "ar" | "gr"
) {
  if (language === "en") {
    return `<table width="100%" border="0" cellspacing="0" cellpadding="0">
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
Hi ${name}, Welcome to Tuni-Auctions! We're thrilled to have you on board, and we appreciate you choosing us. To ensure the security of your account, please take a moment to verify your email address by clicking the button below. Verifying your email helps us keep you informed about important updates, personalized recommendations, and exciting offers.    </p>
    <div style="background-color: #000; margin-top: 32px; height: 1px;"></div>
    <div style="text-align: center; margin-top: 32px;">
      <a href="${process.env
        .NEXT_PUBLIC_API_BASE_URL!}/${language}/verify/${mailToken}"  style="display: inline-block; background-color: #000; color: #fff; text-decoration: none; padding: 12px 60px; font: 18px Inter, sans-serif; border-radius: 50px;">Verify My Email</a>
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
                        <a href="#"><img src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png" alt="Facebook icon" style="width: 20px;" /></a>
                      </td>
                      <td style="padding-left: 16px;">
                        <a href="#"><img src="https://www.shareicon.net/data/512x512/2015/08/10/82838_facebook_4096x4096.png" alt="Twitter icon" style="width: 32px;" /></a>
                      </td>
                      <td style="padding-left: 16px;">
                        <a href="#"><img src="https://i.pinimg.com/originals/8e/72/f7/8e72f7331b652b842b0c271ab144d332.png" alt="Instagram icon" style="width: 30px;" /></a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
  } else if (language === "fr") {
    return `<table width="100%" border="0" cellspacing="0" cellpadding="0">
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

    <h1 style="text-align: center; margin-top: 32px; font: 42px Arial, sans-serif;">Vérification du compte</h1>
    <div style="background-color: #000; margin-top: 32px; height: 1px;"></div>
<p style="font-family: Inter, sans-serif; line-height: 26px; margin-top: 32px; font-size: 18px;">
Salut ${name}, Bienvenue sur Tuni-Auctions ! Nous sommes ravis de vous accueillir et nous vous remercions de nous avoir choisis. Pour assurer la sécurité de votre compte, veuillez prendre un moment pour vérifier votre adresse e-mail en cliquant sur le bouton ci-dessous. La vérification de votre e-mail nous aide à vous tenir informé des mises à jour importantes, des recommandations personnalisées et des offres intéressantes.    </p>
    <div style="background-color: #000; margin-top: 32px; height: 1px;"></div>
    <div style="text-align: center; margin-top: 32px;">
      <a href="${process.env
        .NEXT_PUBLIC_API_BASE_URL!}/${language}/verify/${mailToken}"  style="display: inline-block; background-color: #000; color: #fff; text-decoration: none; padding: 12px 60px; font: 18px Inter, sans-serif; border-radius: 50px;">Vérifier mon e-mail</a>
    </div>
    <p style="font-family: Inter, sans-serif; line-height: 26px;">
        Merci d'avoir choisi nos services !
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
                    Belgique
                  </address>
                </td>
                <td style="width: 50%; vertical-align: top; text-align: right;">
                  <table border="0" cellspacing="0" cellpadding="0" align="right">
                    <tr>
                      <td style="padding-left: 16px;">
                        <a href="#"><img src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png" alt="Facebook icon" style="width: 20px;" /></a>
                      </td>
                      <td style="padding-left: 16px;">
                        <a href="#"><img src="https://www.shareicon.net/data/512x512/2015/08/10/82838_facebook_4096x4096.png" alt="Twitter icon" style="width: 32px;" /></a>
                      </td>
                      <td style="padding-left: 16px;">
                        <a href="#"><img src="https://i.pinimg.com/originals/8e/72/f7/8e72f7331b652b842b0c271ab144d332.png" alt="Instagram icon" style="width: 30px;" /></a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`;
  } else if (language === "ar") {
    `<table width="100%" border="0" cellspacing="0" cellpadding="0">
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

    <h1 style="text-align: center; margin-top: 32px; font: 42px Arial, sans-serif;">تأكيد الحساب</h1>
    <div style="background-color: #000; margin-top: 32px; height: 1px;"></div>
<p style="font-family: Inter, sans-serif; line-height: 26px; margin-top: 32px; font-size: 18px;">
مرحبًا ${name}، مرحبًا بك في Tuni-Auctions! نحن سعداء بانضمامك إلينا، ونقدر اختيارك لنا. لضمان أمان حسابك، يرجى قضاء لحظة للتحقق من عنوان بريدك الإلكتروني عن طريق النقر على الزر أدناه. يساعدنا التحقق من بريدك الإلكتروني في إبقائك على اطلاع دائم بالتحديثات الهامة، والتوصيات المخصصة، والعروض المثيرة.    </p>
    <div style="background-color: #000; margin-top: 32px; height: 1px;"></div>
    <div style="text-align: center; margin-top: 32px;">
      <a href="${process.env
        .NEXT_PUBLIC_API_BASE_URL!}/${language}/verify/${mailToken}"  style="display: inline-block; background-color: #000; color: #fff; text-decoration: none; padding: 12px 60px; font: 18px Inter, sans-serif; border-radius: 50px;">تحقق من بريدي الإلكتروني</a>
    </div>
    <p style="font-family: Inter, sans-serif; line-height: 26px;">
        شكرًا لاختيار خدماتنا!
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
                    بلجيكا
                  </address>
                </td>
                <td style="width: 50%; vertical-align: top; text-align: right;">
                  <table border="0" cellspacing="0" cellpadding="0" align="right">
                    <tr>
                      <td style="padding-left: 16px;">
                        <a href="#"><img src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png" alt="Facebook icon" style="width: 20px;" /></a>
                      </td>
                      <td style="padding-left: 16px;">
                        <a href="#"><img src="https://www.shareicon.net/data/512x512/2015/08/10/82838_facebook_4096x4096.png" alt="Twitter icon" style="width: 32px;" /></a>
                      </td>
                      <td style="padding-left: 16px;">
                        <a href="#"><img src="https://i.pinimg.com/originals/8e/72/f7/8e72f7331b652b842b0c271ab144d332.png" alt="Instagram icon" style="width: 30px;" /></a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`;
  } else if (language === "gr") {
    `<table width="100%" border="0" cellspacing="0" cellpadding="0">
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

    <h1 style="text-align: center; margin-top: 32px; font: 42px Arial, sans-serif;">Kontoüberprüfung</h1>
    <div style="background-color: #000; margin-top: 32px; height: 1px;"></div>
<p style="font-family: Inter, sans-serif; line-height: 26px; margin-top: 32px; font-size: 18px;">
Hallo ${name}, Willkommen bei Tuni-Auctions! Wir freuen uns, dass Sie an Bord sind, und wir schätzen Ihre Wahl. Um die Sicherheit Ihres Kontos zu gewährleisten, nehmen Sie sich bitte einen Moment Zeit, um Ihre E-Mail-Adresse zu überprüfen, indem Sie auf die Schaltfläche unten klicken. Die Überprüfung Ihrer E-Mail hilft uns, Sie über wichtige Updates, personalisierte Empfehlungen und spannende Angebote auf dem Laufenden zu halten.    </p>
    <div style="background-color: #000; margin-top: 32px; height: 1px;"></div>
    <div style="text-align: center; margin-top: 32px;">
      <a href="${process.env
        .NEXT_PUBLIC_API_BASE_URL!}/${language}/verify/${mailToken}" style="display: inline-block; background-color: #000; color: #fff; text-decoration: none; padding: 12px 60px; font: 18px Inter, sans-serif; border-radius: 50px;">Meine E-Mail überprüfen</a>
    </div>
    <p style="font-family: Inter, sans-serif; line-height: 26px;">
        Vielen Dank, dass Sie unsere Dienste gewählt haben!
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
                    Belgien
                  </address>
                </td>
                <td style="width: 50%; vertical-align: top; text-align: right;">
                  <table border="0" cellspacing="0" cellpadding="0" align="right">
                    <tr>
                      <td style="padding-left: 16px;">
                        <a href="#"><img src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png" alt="Facebook icon" style="width: 20px;" /></a>
                      </td>
                      <td style="padding-left: 16px;">
                        <a href="#"><img src="https://www.shareicon.net/data/512x512/2015/08/10/82838_facebook_4096x4096.png" alt="Twitter icon" style="width: 32px;" /></a>
                      </td>
                      <td style="padding-left: 16px;">
                        <a href="#"><img src="https://i.pinimg.com/originals/8e/72/f7/8e72f7331b652b842b0c271ab144d332.png" alt="Instagram icon" style="width: 30px;" /></a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`;
  }
}
