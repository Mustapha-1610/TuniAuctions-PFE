"use client";
import * as React from "react";
import { FaTimes } from "react-icons/fa";

import { BsChatSquareTextFill } from "react-icons/bs";

import { useLocale } from "next-intl";
import { AuctionListingType } from "@/models/types/auctionListing";
import { SellerSocialSectionDetailsType } from "@/app/api/general/fetchAuctionListing/route";
import BiddingAndInformationsSection from "./components/biddingAndInformationsSection";
import PromotionalSection from "./components/promotionalSection";
import SellerSection from "./components/sellerSection";
import auctionRoomSocket from "@/frontHelpers/auctionRoom/auctionRoomLogic";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaCircleExclamation, FaRegFaceSmileBeam } from "react-icons/fa6";
export interface AuctionListingDetails {
  auctionListing: AuctionListingType;
  sellerData: SellerSocialSectionDetailsType;
}

export default function BiddingRoomPage({
  auctionListing,
  sellerData,
}: AuctionListingDetails) {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const { bidderLocalStorageData } = useBidderProfileStore();
  const [auctionItem, setAuctionItem] =
    React.useState<AuctionListingType>(auctionListing);
  const handleChatClose = () => {
    setIsChatOpen(false);
  };
  React.useEffect(() => {
    if (
      bidderLocalStorageData &&
      auctionItem.status === "Ongoing" &&
      auctionItem.participatingBidders.find(
        (b) => b.bidderId === bidderLocalStorageData?._id
      )
    ) {
      auctionRoomSocket.emit("bidderJoinedRoom", {
        auctionId: auctionListing._id.toString(),
        bidderSocketId: bidderLocalStorageData!._id,
      });
    }
  }, [bidderLocalStorageData && auctionItem]);
  if (auctionItem.status === "Ongoing") {
    return (
      <>
        {auctionItem.participatingBidders.find(
          (b) => b.bidderId === bidderLocalStorageData?._id
        ) ? (
          <>
            <div className="flex flex-col items-center px-20 mt-12 pt-7 pb-16 bg-white border border-black border-solid max-md:px-5">
              <div className="px-14 py-5 w-full bg-white border border-white border-solid max-w-[1540px] max-md:px-5 max-md:max-w-full">
                {bidderLocalStorageData && (
                  <BiddingAndInformationsSection
                    bidderLocalStorageData={bidderLocalStorageData}
                    auctionListing={auctionListing}
                    setAuctionListing={setAuctionItem}
                  />
                )}
              </div>
              <PromotionalSection auctionListing={auctionListing} />
              <SellerSection
                auctionListing={auctionListing}
                sellerData={sellerData}
              />
            </div>
          </>
        ) : (
          <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
            <div className="max-w-xl px-5 text-center">
              <h2 className="mb-2 text-[42px] font-bold text-zinc-800">
                Access Denied!
              </h2>
              <div className="flex flex-col items-center justify-center mt-6">
                <FaCircleExclamation
                  color="red"
                  className="font-bold "
                  size={100}
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  } else if (auctionItem.status === "Finished") {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
        <div className="max-w-xl px-5 text-center">
          <h2 className="mb-2 text-[42px] font-bold text-zinc-800">
            Auction Room Finished!
          </h2>
          <div className="flex flex-col items-center justify-center mt-6">
            <FaRegFaceSmileBeam
              color="black"
              className="font-bold"
              size={100}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
        <div className="max-w-xl px-5 text-center">
          <h2 className="mb-2 text-[42px] font-bold text-zinc-800">
            Auction Hasent Started Yet!
          </h2>
          <div className="flex flex-col items-center justify-center mt-6">
            <FaCircleExclamation
              color="red"
              className="font-bold "
              size={100}
            />
          </div>
        </div>
      </div>
    );
  }
}
