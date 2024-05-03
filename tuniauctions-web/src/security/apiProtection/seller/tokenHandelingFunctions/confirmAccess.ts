import { NextResponse } from "next/server";

export default function refreshSellerToken(
  response: NextResponse,
  newAccessToken?: string
) {
  newAccessToken &&
    response.cookies.set("accessSellerToken", newAccessToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

  return response;
}
