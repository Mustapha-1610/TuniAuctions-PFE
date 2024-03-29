import { connect } from "@/db/dbConfig";
import bidderModel from "@/models/usersModels/bidderModel";
import { IBidder } from "@/models/usersModels/types/bidderTypes";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest } from "next/server";
interface ValidResponse {
  isValid: true;
  newAccessToken?: string;
  bidderAccount: IBidder;
}

interface ErrorResponse {
  isValid: false;
  errorStage: string;
}

export type VerifyBidderTokensResponse = ValidResponse | ErrorResponse;

export async function verifyBidderTokens(
  request: NextRequest
): Promise<VerifyBidderTokensResponse> {
  try {
    await connect();
    const accessToken = request.cookies.get("accessBidderToken")?.value || "";
    console.log(request);
    if (accessToken) {
      const decodedAccessToken = jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET!
      ) as JwtPayload;
      const bidderAccount: IBidder | null = await bidderModel.findById(
        decodedAccessToken.bidder_id
      );
      const refreshToken =
        request.cookies.get("refreshBidderToken")?.value || "";
      if (bidderAccount && bidderAccount.refreshToken === refreshToken)
        return { isValid: true, bidderAccount };
      else return { isValid: false, errorStage: "error Stage 1" };
    } else return { isValid: false, errorStage: "error Stage 77" };
  } catch (err) {
    try {
      const refreshToken =
        request.cookies.get("refreshBidderToken")?.value || "";
      if (refreshToken) {
        const decodedRefreshToken = jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET!
        ) as JwtPayload;
        const bidderAccount: IBidder | null = await bidderModel.findById(
          decodedRefreshToken.bidder_id
        );
        if (bidderAccount && bidderAccount.refreshToken === refreshToken) {
          const newAccessToken = jwt.sign(
            { bidder_id: bidderAccount._id },
            process.env.ACCESS_TOKEN_SECRET!,
            { expiresIn: "10m" }
          );
          return { isValid: true, newAccessToken, bidderAccount };
        } else return { isValid: false, errorStage: "error Stage 3" };
      } else return { isValid: false, errorStage: "error Stage 4" };
    } catch (refreshErr) {
      return { isValid: false, errorStage: "error Stage 5" };
    }
  }
}
