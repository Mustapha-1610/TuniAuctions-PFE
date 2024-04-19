import { Request } from "express";
import jwt, {
  JwtPayload,
  JsonWebTokenError,
  TokenExpiredError,
} from "jsonwebtoken";
import { ISeller } from "../../types/sellerTypes";
import sellerModel from "../../models/sellerModel";
interface ValidResponse {
  isValid: true;
  newAccessToken?: string;
  sellerAccount: ISeller;
}

interface ErrorResponse {
  isValid: false;
  errorStage: string;
}

export type verifySellerTokensResponse = ValidResponse | ErrorResponse;
export async function verifySellerTokens(
  request: Request
): Promise<verifySellerTokensResponse> {
  try {
    const accessToken = request.cookies.accessSellerToken || "";
    const refreshToken = request.cookies.refreshSellerToken || "";
    console.log(accessToken, refreshToken);
    let sellerAccount: ISeller | null = null;
    try {
      if (accessToken) {
        const decodedAccessToken = jwt.verify(
          accessToken,
          process.env.ACCESS_TOKEN_SECRET!
        ) as JwtPayload;
        sellerAccount = await sellerModel.findById(
          decodedAccessToken.seller_id
        );
      }
    } catch (err) {
      if (err instanceof TokenExpiredError && refreshToken) {
        const decodedRefreshToken = jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET!
        ) as JwtPayload;
        sellerAccount = await sellerModel.findById(
          decodedRefreshToken.seller_id
        );
      } else {
        throw err;
      }
    }

    if (sellerAccount && sellerAccount.refreshToken === refreshToken) {
      const newAccessToken = jwt.sign(
        { seller_id: sellerAccount._id },
        process.env.ACCESS_TOKEN_SECRET!,
        { expiresIn: "10m" }
      );
      return { isValid: true, newAccessToken, sellerAccount };
    } else {
      console.log("error Stage 1");
      return { isValid: false, errorStage: "error Stage 1" };
    }
  } catch (err) {
    if (err instanceof JsonWebTokenError) {
      console.log("error Stage 2", err.message);
      console.log("JWT error:", err.message);
    } else {
      console.log(err);
    }
    return { isValid: false, errorStage: "error Stage 2" };
  }
}
