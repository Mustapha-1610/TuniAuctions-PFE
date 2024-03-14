import { NextResponse } from "next/server";

export default function refreshBidderAccessToken(
  newAccessToken: string,
  response: NextResponse
) {
  response.cookies.set("accessBidderToken", newAccessToken, {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
  return response;
}
