import { AuctionListingType } from "@/models/types/auctionListing";
import FeaturedSectionAuctionListingsContainer from "./components/featuredSectionAuctionListingsContainer";
import React from "react";
interface Porps {
  FeaturedAuctions: string;
  DealsOfThisWeel: string;
  OpeningBid: string;
  premiumListings: AuctionListingType[];
  specificRoute?: string;
}
export default async function FeaturedAuctionsSections({
  FeaturedAuctions,
  DealsOfThisWeel,
  OpeningBid,
  premiumListings,
  specificRoute,
}: Porps) {
  return (
    <>
      <div className="flex flex-col items-center px-16 pb-6 mt-7 w-full text-center text-black whitespace-nowrap max-w-[1320px] md:px-5 md:mt-10 md:max-w-full">
        <div className="flex flex-col">
          <div className="self-center text-lg font-semibold leading-6 uppercase">
            {FeaturedAuctions}
          </div>
          <div className="text-4xl mt-4 font-bold">{DealsOfThisWeel}</div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full max-w-[1320px] md:max-w-full">
        {premiumListings &&
          premiumListings.map((value, index) => {
            return (
              <React.Fragment key={index}>
                <FeaturedSectionAuctionListingsContainer
                  listing={value}
                  OpeningBid={OpeningBid}
                  key={index}
                  specificRoute={specificRoute}
                />
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
}
