import { NextResponse } from "next/server";

export default function refreshSellerToken(
  newAccessToken: string,
  response: NextResponse
) {
  response.cookies.set("accessSellerToken", newAccessToken, {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
  return response;
}
