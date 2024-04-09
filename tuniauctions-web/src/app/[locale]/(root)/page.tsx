import HeroSection from "./pageComponents/heroSection";
import FeaturedAuctionsSections from "./pageComponents/featuredAuctionsSection";
import UpcomingAuctionsSection from "./pageComponents/upcomingAuctionsSection";
import CategorySection from "./pageComponents/categorySection";
import WinnersSections from "./pageComponents/WinnersSection";
import { getTranslations } from "next-intl/server";
import { HomePageFetchListingsResponse } from "@/app/api/general/fetchHomePageListings/route";

export default async function Home() {
  const t = await getTranslations("HomePage");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/general/fetchHomePageListings`,
    {
      method: "POST",
      cache: "no-cache",
    }
  );
  const resData: HomePageFetchListingsResponse = await res.json();

  return (
    <>
      <div className="flex flex-col items-center bg-white">
        <HeroSection
          Title={t("HeroTitle")}
          BrowseButtonText={t("BrowseButton")}
        />
        <FeaturedAuctionsSections
          FeaturedAuctions={t("FeaturedAuctions")}
          DealsOfThisWeel={t("DealsOfThisWeek")}
          OpeningBid={t("OpeningBid")}
          premiumListings={resData.randomizedAuctionListings}
        />
        <UpcomingAuctionsSection
          premiumListings={resData.randomizedAuctionListings}
        />
        <CategorySection />
        <WinnersSections />
      </div>
    </>
  );
}
