"use server";
import { FetchAuctionFrontResponse } from "@/app/api/general/fetchAuctionListing/route";
import BiddingRoomPage from "./biddingRoom";

export default async function ServerBiddingRoomPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL!}/api/general/fetchAuctionListing`,
    {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({ auctionId: params.id }),
    }
  );
  const resData: FetchAuctionFrontResponse = await res.json();

  if (resData.auction) {
    if (resData.auction.status === "Ongoing") {
      return (
        <BiddingRoomPage
          auctionListing={resData.auction}
          sellerData={resData.sellerAuctionListingData}
        />
      );
    } else if (resData.auction.status === "Finished") {
      return <p>Auction Finished</p>;
    } else {
      return <p>Auction Pending Start</p>;
    }
  } else return <p>Non Existant anymore</p>;
}
