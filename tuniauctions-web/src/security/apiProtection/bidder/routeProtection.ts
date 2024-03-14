import { connect } from "@/db/dbConfig";
import bidderModel from "@/models/usersModels/bidderModel";
import { unautherizedError } from "@/serverHelpers/errorHandler";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest } from "next/server";

export async function verifyBidderTokens(request: NextRequest) {
  try {
    await connect();
    const accessToken = request.cookies.get("accessBidderToken")?.value || "";
    if (accessToken) {
      const decodedAccessToken = jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET!
      ) as JwtPayload;
      const bidderAccount = await bidderModel.findById(
        decodedAccessToken.bidder_id
      );
      const refreshToken =
        request.cookies.get("refreshBidderToken")?.value || "";
      if (bidderAccount && bidderAccount.refreshToken === refreshToken) {
        return { isValid: true, newAccessToken: null, bidderAccount };
      } else {
        return unautherizedError("error Stage 1");
      }
    } else {
      return unautherizedError("error Stage 2");
    }
  } catch (err) {
    try {
      const refreshToken =
        request.cookies.get("refreshBidderToken")?.value || "";
      if (refreshToken) {
        const decodedRefreshToken = jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET!
        ) as JwtPayload;
        const bidderAccount = await bidderModel.findById(
          decodedRefreshToken.bidder_id
        );
        if (bidderAccount && bidderAccount.refreshToken === refreshToken) {
          const newAccessToken = jwt.sign(
            { bidder_id: bidderAccount._id },
            process.env.ACCESS_TOKEN_SECRET!,
            { expiresIn: "10m" }
          );
          return { isValid: true, newAccessToken, bidderAccount };
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
