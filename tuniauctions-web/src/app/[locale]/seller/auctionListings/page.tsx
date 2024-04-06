"use client";
import React, { useEffect, useState } from "react";
import StatisticsSection from "./components/statisticsSection";
import StatisticsTable from "./components/table";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";
import { sellerAuctionListingFrontData } from "@/models/types/auctionListing";
import { sellerCreatedAuctionsResponse } from "@/app/api/seller/getCreatedListings/route";

export interface auctionListingsChildrenProps {
  auctionListings: sellerAuctionListingFrontData[];
}
export default function AuctionListingsPage() {
  const [listings, setListings] = useState<sellerAuctionListingFrontData[]>([]);
  useEffect(() => {
    async function handleListingsFetch() {
      const res = await fetch("/api/seller/getCreatedListings", {
        method: "POST",
      });
      const resData: sellerCreatedAuctionsResponse = await res.json();
      console.log(resData);
      if (resData.success) {
        setListings(resData.sellerFrontListings);
      }
    }
    handleListingsFetch();
  }, []);
  return (
    <>
      <div className="flex ml-2 overflow-hidden pt-16">
        <div
          id="main-content"
          className="h-full w-11/12  relative overflow-y-auto lg:ml-64"
        >
          <div className="flex items-center mb-2">
            <h1 className="text-2xl font-bold mb-2 mr-2">Auction Listings</h1>
          </div>

          <StatisticsSection />
          <StatisticsTable auctionListings={listings} />
        </div>
      </div>
    </>
  );
}
