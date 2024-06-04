import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const [, locale, ...segments] = request.nextUrl.pathname.split("/");
  const path = segments.join("/");

  const publicRoutes = [
    `auctions`,
    "aboutus",
    "howitworks",
    "",
    "auctionListing",
    "",
  ];
  if (locale != "") {
    let token: string = "";
    if (publicRoutes.includes(path)) {
      token = request.cookies.get("refreshBidderToken")?.value || "";
      if (token)
        return handleRouteProtection(locale, request, "bidder/profile");
      token = request.cookies.get("refreshSellerToken")?.value || "";
      if (token) return handleRouteProtection(locale, request, "seller");
    }
    if (path.startsWith("bidder")) {
      token = request.cookies.get("refreshBidderToken")?.value || "";
      if (!token) return handleRouteProtection(locale, request);
    }
    if (path.startsWith("seller")) {
      token = request.cookies.get("refreshSellerToken")?.value || "";
      if (!token) return handleRouteProtection(locale, request);
    }
    if (path.startsWith("admin")) {
      token = request.cookies.get("refreshAdminToken")?.value || "";
      if (!token) return handleRouteProtection(locale, request);
    }
  }

  const handleI18nRouting = createIntlMiddleware({
    locales: ["en", "fr", "ar", "du", "lb", "nl"],
    defaultLocale: "en",
  });

  const response = handleI18nRouting(request);
  return response;
}

export const config = {
  matcher: ["/", "/(fr|ar|en|du|nl|lb)/:path*"],
};

function handleRouteProtection(
  locale: string,
  request: NextRequest,
  redirectUrl?: string
) {
  const url = request.nextUrl.clone();
  url.pathname = redirectUrl ? `/${locale}/${redirectUrl}` : `/${locale}`;
  return NextResponse.redirect(url);
}
