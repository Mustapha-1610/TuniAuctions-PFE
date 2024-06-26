import { NextResponse } from "next/server";

export default function refreshBidderAccessToken(
  response: NextResponse,
  newAccessToken?: string
) {
  newAccessToken &&
    response.cookies.set("accessBidderToken", newAccessToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

  return response;
}
