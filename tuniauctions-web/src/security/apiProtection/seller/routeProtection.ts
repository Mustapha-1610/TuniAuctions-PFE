import { connect } from "@/db/dbConfig";
import sellerModel from "@/models/usersModels/sellerModel";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import jwt, { JwtPayload } from "jsonwebtoken";
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

export type verifySellerTokensResponse = ValidResponse | ErrorResponse;

export async function verifySellerTokens(
  request: NextRequest
): Promise<verifySellerTokensResponse> {
  try {
    await connect();
    const accessToken = request.cookies.get("accessSellerToken")?.value || "";
    if (accessToken) {
      const decodedAccessToken = jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET!
      ) as JwtPayload;
      const sellerAccount: ISeller | null = await sellerModel.findById(
        decodedAccessToken.seller_id
      );
      const refreshToken =
        request.cookies.get("refreshSellerToken")?.value || "";
      if (sellerAccount && sellerAccount.refreshToken === refreshToken)
        return { isValid: true, sellerAccount };
      else return { isValid: false, errorStage: "error Stage 1" };
    } else return { isValid: false, errorStage: "error Stage 77" };
  } catch (err) {
    try {
      const refreshToken =
        request.cookies.get("refreshSellerToken")?.value || "";
      if (refreshToken) {
        const decodedRefreshToken = jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET!
        ) as JwtPayload;
        const sellerAccount: ISeller | null = await sellerModel.findById(
          decodedRefreshToken.seller_id
        );
        if (sellerAccount && sellerAccount.refreshToken === refreshToken) {
          const newAccessToken = jwt.sign(
            { seller_id: sellerAccount._id },
            process.env.ACCESS_TOKEN_SECRET!,
            { expiresIn: "10m" }
          );
          return { isValid: true, newAccessToken, sellerAccount };
        } else return { isValid: false, errorStage: "error Stage 3" };
      } else return { isValid: false, errorStage: "error Stage 4" };
    } catch (refreshErr) {
      return { isValid: false, errorStage: "error Stage 5" };
    }
  }
}
