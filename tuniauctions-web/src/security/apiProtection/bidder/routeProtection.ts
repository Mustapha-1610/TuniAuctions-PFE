import { connect } from "@/db/dbConfig";
import bidderModel from "@/models/usersModels/bidderModel";
import { IBidder } from "@/models/usersModels/types/bidderTypes";
import jwt, {
  JwtPayload,
  JsonWebTokenError,
  TokenExpiredError,
} from "jsonwebtoken";
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
    const refreshToken = request.cookies.get("refreshBidderToken")?.value || "";
    let bidderAccount: IBidder | null = null;

    try {
      if (accessToken) {
        const decodedAccessToken = jwt.verify(
          accessToken,
          process.env.ACCESS_TOKEN_SECRET!
        ) as JwtPayload;
        bidderAccount = await bidderModel.findById(
          decodedAccessToken.bidder_id
        );
      }
    } catch (err) {
      if (err instanceof TokenExpiredError && refreshToken) {
        const decodedRefreshToken = jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET!
        ) as JwtPayload;
        bidderAccount = await bidderModel.findById(
          decodedRefreshToken.bidder_id
        );
      } else {
        throw err;
      }
    }

    if (bidderAccount && bidderAccount.refreshToken === refreshToken) {
      const newAccessToken = jwt.sign(
        { bidder_id: bidderAccount._id },
        process.env.ACCESS_TOKEN_SECRET!,
        { expiresIn: "10m" }
      );
      return { isValid: true, newAccessToken, bidderAccount };
    } else {
      console.log(
        bidderAccount +
          "Bidder Account " +
          refreshToken +
          "Refresh " +
          accessToken +
          " Access"
      );
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
