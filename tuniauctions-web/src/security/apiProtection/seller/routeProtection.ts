import { connect } from "@/db/dbConfig";
import sellerModel from "@/models/usersModels/sellerModel";
import { unautherizedError } from "@/serverHelpers/errorHandler";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest } from "next/server";

export async function verifySellerTokens(request: NextRequest) {
  try {
    await connect();
    const accessToken = request.cookies.get("accessSellerToken")?.value || "";
    if (accessToken) {
      const decodedAccessToken = jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET!
      ) as JwtPayload;
      const sellerAccount = await sellerModel.findById(
        decodedAccessToken.seller_id
      );
      const refreshToken =
        request.cookies.get("refreshSellerToken")?.value || "";
      if (sellerAccount && sellerAccount.refreshToken === refreshToken) {
        return { isValid: true, newAccessToken: null, sellerAccount };
      } else {
        return unautherizedError("error Stage 1");
      }
    } else {
      return unautherizedError("error Stage 2");
    }
  } catch (err) {
    try {
      const refreshToken =
        request.cookies.get("refreshSellerToken")?.value || "";
      if (refreshToken) {
        const decodedRefreshToken = jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET!
        ) as JwtPayload;
        const sellerAccount = await sellerModel.findById(
          decodedRefreshToken.seller_id
        );
        if (sellerAccount && sellerAccount.refreshToken === refreshToken) {
          const newAccessToken = jwt.sign(
            { seller_id: sellerAccount._id },
            process.env.ACCESS_TOKEN_SECRET!,
            { expiresIn: "10m" }
          );
          return { isValid: true, newAccessToken, sellerAccount };
        } else {
          return unautherizedError("error Stage 3");
        }
      } else {
        return unautherizedError("error Stage 4");
      }
    } catch (refreshErr) {
      return unautherizedError("error Stage 5", refreshErr);
    }
  }
}
