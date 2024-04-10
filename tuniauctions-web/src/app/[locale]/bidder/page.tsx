import { getLocale, getTranslations } from "next-intl/server";
import Home from "../(root)/page";
import { HomePageFetchListingsResponse } from "@/app/api/general/fetchHomePageListings/route";
import HeroSection from "../(root)/pageComponents/heroSection";
import FeaturedAuctionsSections from "../(root)/pageComponents/featuredAuctionsSection";
import UpcomingAuctionsSection from "../(root)/pageComponents/upcomingAuctionsSection";
import CategorySection from "../(root)/pageComponents/categorySection";
import WinnersSections from "../(root)/pageComponents/WinnersSection";

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/general/fetchHomePageListings`,
    {
      method: "POST",
      cache: "no-cache",
    }
  );
  const resData: HomePageFetchListingsResponse = await res.json();
  const locale = await getLocale();
  return (
    <>
      <div className="flex flex-col items-center bg-white">
        <HeroSection
          Title={t("HeroTitle")}
          BrowseButtonText={t("BrowseButton")}
          specificRoute="/bidder"
        />
        <FeaturedAuctionsSections
          FeaturedAuctions={t("FeaturedAuctions")}
          DealsOfThisWeel={t("DealsOfThisWeek")}
          OpeningBid={t("OpeningBid")}
          premiumListings={resData.randomizedAuctionListings}
          specificRoute="/bidder"
        />
        <UpcomingAuctionsSection
          premiumListings={resData.closestStartingDateListings}
          locale={locale}
          specificRoute="/bidder"
        />
        <CategorySection locale={locale} specificRoute="/bidder" />
        <WinnersSections />
      </div>
    </>
  );
}
