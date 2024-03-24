import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const [, locale, ...segments] = request.nextUrl.pathname.split("/");
  const path = segments.join("/");
  let token: string = "";
  if (locale != null && path.startsWith("bidder")) {
    token = request.cookies.get("refreshBidderToken")?.value || "";
    if (!token) {
      return handleRouteProtection(locale, request);
    }
  }
  if (locale != null && path.startsWith("seller")) {
    token = request.cookies.get("refreshSellerToken")?.value || "";
    if (!token) {
      return handleRouteProtection(locale, request);
    }
  }
  const handleI18nRouting = createIntlMiddleware({
    locales: ["en", "fr", "ar"],
    defaultLocale: "en",
  });
  const response = handleI18nRouting(request);
  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(fr|ar|en)/:path*"],
};

function handleRouteProtection(locale: string, request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}`;
  return NextResponse.redirect(url);
}
