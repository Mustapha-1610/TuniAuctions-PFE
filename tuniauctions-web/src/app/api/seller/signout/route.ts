import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set("accessSellerToken", "", {
    expires: new Date(0),
    sameSite: "none",
    secure: true,
    httpOnly: true,
  });
  response.cookies.set("refreshSellerToken", "", {
    expires: new Date(0),
    sameSite: "none",
    secure: true,
    httpOnly: true,
  });
  return response;
}
