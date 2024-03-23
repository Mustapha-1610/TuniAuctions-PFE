import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const [, locale, ...segments] = request.nextUrl.pathname.split("/");
  const path = segments.join("/");

  if (locale != null && path.startsWith("bidder")) {
    const bidderToken = request.cookies.get("refreshBidderToken")?.value || "";

    if (!bidderToken) {
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}`;
      return NextResponse.redirect(url);
    }
  }
  if (locale != null && path.startsWith("seller")) {
    const seller = request.cookies.get("refreshSellerToken")?.value || "";

    if (!seller) {
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}`;
      return NextResponse.redirect(url);
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
