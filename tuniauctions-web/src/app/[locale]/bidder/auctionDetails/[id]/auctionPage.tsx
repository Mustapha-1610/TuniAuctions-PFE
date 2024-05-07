"use client";
import * as React from "react";
import { BsChatSquareTextFill } from "react-icons/bs";
import { AuctionListingType } from "@/models/types/auctionListing";
import ProductInformations from "./components/productInformations";
import PromotionalVideoAndButItNowSection from "./components/promotionalVideoAndBuyItNowSection";
import { SellerSocialSectionDetailsType } from "@/app/api/general/fetchAuctionListing/route";
import SellerPromotionSection from "./components/sellerPromotionalSection";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import FinishedAuctionDisplay from "./components/finishedAuction";
import ChatBox from "./components/aiChat";
import AiChatSection from "./components/aiChatSection";

export interface AuctionListingDetails {
  auctionListing: AuctionListingType;
  sellerData: SellerSocialSectionDetailsType;
}
export default function AuctionPage({
  auctionListing,
  sellerData,
}: AuctionListingDetails) {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const [auctionListingItem, setAuctionListingItem] =
    React.useState<AuctionListingType>(auctionListing);
  const { bidderLocalStorageData } = useBidderProfileStore();

  React.useEffect(() => {
    async function registerView(auctionId: string) {
      await fetch("/api/bidder/registerView", {
        method: "POST",
        body: JSON.stringify({ auctionId }),
      });
    }
    if (
      bidderLocalStorageData &&
      auctionListing.listingType !== "Basic" &&
      !auctionListing.uniqueViews.bidders.includes(bidderLocalStorageData._id)
    ) {
      registerView(String(auctionListing._id));
    }
  }, [auctionListing && bidderLocalStorageData]);
  return (
    <>
      <div className="flex flex-col items-center px-20 mt-12 pt-7 pb-16 bg-white border border-black border-solid max-md:px-5">
        <div className="px-14 py-5 w-full bg-white border border-white border-solid max-w-[1540px] max-md:px-5 max-md:max-w-full">
          {auctionListing && auctionListing.status === "Finished" ? (
            <FinishedAuctionDisplay auctionListing={auctionListing} />
          ) : (
            <ProductInformations
              auctionListing={auctionListingItem}
              setAuctionListing={setAuctionListingItem}
            />
          )}
        </div>
        <PromotionalVideoAndButItNowSection auctionListing={auctionListing} />
        <SellerPromotionSection
          auctionListing={auctionListing}
          sellerData={sellerData}
        />
      </div>
      <AiChatSection auctionListingTitle={auctionListing.title} />
    </>
  );
}
