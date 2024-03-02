import Image from "next/image";
import HeroSection from "./pageComponents/heroSection";
import FeaturedAuctionsSections from "./pageComponents/featuredAuctionsSection";
import UpcomingAuctionsSection from "./pageComponents/upcomingAuctionsSection";
import CategorySection from "./pageComponents/categorySection";
import WinnersSections from "./pageComponents/WinnersSection";
import { NextIntlClientProvider, useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

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
        />
        <UpcomingAuctionsSection />
        <CategorySection />
        <WinnersSections />
      </div>
    </>
  );
}
