import { connect } from "@/db/dbConfig";
import { adminModelType } from "@/models/types/admin";
import adminModel from "@/models/usersModels/adminModel";
import sellerModel from "@/models/usersModels/sellerModel";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import jwt, {
  JwtPayload,
  JsonWebTokenError,
  TokenExpiredError,
} from "jsonwebtoken";
import { NextRequest } from "next/server";
interface ValidResponse {
  isValid: true;
  newAccessToken?: string;
  sellerAccount: ISeller;
}

interface ErrorResponse {
  isValid: false;
  errorStage: string;
}

export type VerifyBidderTokensResponse = ValidResponse | ErrorResponse;
export async function verifySellerToken(
  request: NextRequest
): Promise<VerifyBidderTokensResponse> {
  try {
    await connect();
    const accessToken = request.cookies.get("accessSellerToken")?.value || "";
    const refreshToken = request.cookies.get("refreshSellerToken")?.value || "";
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
      } else {
        const decodedRefreshToken = jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET!
        ) as JwtPayload;
        sellerAccount = await sellerModel.findById(
          decodedRefreshToken.seller_id
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
      return { isValid: false, errorStage: "error Stage 1" };
    }
  } catch (err) {
    if (err instanceof JsonWebTokenError) {
      console.log("JWT error:", err.message);
    } else {
      console.log(err);
    }
    return { isValid: false, errorStage: "error Stage 2" };
  }
}
