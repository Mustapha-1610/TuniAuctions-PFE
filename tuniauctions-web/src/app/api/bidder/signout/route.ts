import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ success: true });
  response.cookies.set("refreshBidderToken", "", {
    expires: new Date(0),
  });
  response.cookies.set("accessBidderToken", "", {
    expires: new Date(0),
  });
  return response;
}
