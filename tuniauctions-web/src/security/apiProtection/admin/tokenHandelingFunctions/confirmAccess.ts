import { NextResponse } from "next/server";

export default function refreshAdminToken(
  response: NextResponse,
  newAccessToken?: string
) {
  newAccessToken &&
    response.cookies.set("accessAdminToken", newAccessToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

  return response;
}
