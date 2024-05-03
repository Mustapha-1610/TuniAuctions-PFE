import { connect } from "@/db/dbConfig";
import { adminModelType } from "@/models/types/admin";
import adminModel from "@/models/usersModels/adminModel";
import jwt, {
  JwtPayload,
  JsonWebTokenError,
  TokenExpiredError,
} from "jsonwebtoken";
import { NextRequest } from "next/server";
interface ValidResponse {
  isValid: true;
  newAccessToken?: string;
  adminAccount: adminModelType;
}

interface ErrorResponse {
  isValid: false;
  errorStage: string;
}

export type VerifyBidderTokensResponse = ValidResponse | ErrorResponse;
export async function verifyAdminToken(
  request: NextRequest
): Promise<VerifyBidderTokensResponse> {
  try {
    await connect();
    const accessToken = request.cookies.get("accessAdminToken")?.value || "";
    const refreshToken = request.cookies.get("refreshAdminToken")?.value || "";
    let adminAccount: adminModelType | null = null;
    try {
      if (accessToken) {
        const decodedAccessToken = jwt.verify(
          accessToken,
          process.env.ACCESS_TOKEN_SECRET!
        ) as JwtPayload;
        adminAccount = await adminModel.findById(decodedAccessToken.admin_id);
      } else {
        const decodedRefreshToken = jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET!
        ) as JwtPayload;
        adminAccount = await adminModel.findById(decodedRefreshToken.admin_id);
      }
    } catch (err) {
      if (err instanceof TokenExpiredError && refreshToken) {
        const decodedRefreshToken = jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET!
        ) as JwtPayload;
        adminAccount = await adminModel.findById(decodedRefreshToken.admin_id);
      } else {
        throw err;
      }
    }

    if (adminAccount && adminAccount.refreshToken === refreshToken) {
      const newAccessToken = jwt.sign(
        { admin_id: adminAccount._id },
        process.env.ACCESS_TOKEN_SECRET!,
        { expiresIn: "10m" }
      );
      return { isValid: true, newAccessToken, adminAccount };
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
