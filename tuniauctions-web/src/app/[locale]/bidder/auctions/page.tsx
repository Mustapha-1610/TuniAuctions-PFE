import { getTranslations } from "next-intl/server";
import AuctionListingItems from "./components/auctionListingItems";
import AuctionListingsTopSection from "./components/auctionListingsTopSection";
import SidebarSection from "./components/sidebarSection";
import { FetchAuctionListingsResponseType } from "@/app/api/general/fetchAuctionListings/route";
import { json } from "stream/consumers";
import AuctionsDisplayPage from "./auctionsDisplayPage";

export default async function Auctions() {
  const t = await getTranslations("AuctionPage");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/general/fetchAuctionListings`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  const resData: FetchAuctionListingsResponseType = await res.json();

  return (
    <AuctionsDisplayPage
      finishedAuctions={resData.finishedAuctions}
      upcomingAuctions={resData.upcomingAuctions}
    />
  );
}
