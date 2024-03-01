"use client";
import Image from "next/image";
import HeroSection from "./pageComponents/heroSection";
import FeaturedAuctionsSections from "./pageComponents/featuredAuctionsSection";
import UpcomingAuctionsSection from "./pageComponents/upcomingAuctionsSection";
import CategorySection from "./pageComponents/categorySection";
import WinnersSections from "./pageComponents/WinnersSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center bg-white">
        <HeroSection />
        <FeaturedAuctionsSections />
        <UpcomingAuctionsSection />
        <CategorySection />
        <WinnersSections />
      </div>
    </>
  );
}
