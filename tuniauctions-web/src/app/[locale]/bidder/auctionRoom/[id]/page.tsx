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
      return (
        <>
          <div className="flex flex-col items-center px-20 mt-12 pt-7 pb-16 bg-white border border-black border-solid max-md:px-5">
            <div className="px-14 py-5 w-full bg-white border border-white border-solid max-w-[1540px] max-md:px-5 max-md:max-w-full">
              <p>Auction Finished</p>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="flex flex-col items-center px-20 mt-12 pt-7 pb-16 bg-white border border-black border-solid max-md:px-5">
            <div className="px-14 py-5 w-full bg-white border border-white border-solid max-w-[1540px] max-md:px-5 max-md:max-w-full">
              <p>Pending Start</p>
            </div>
          </div>
        </>
      );
    }
  } else return <p>Non Existant anymore</p>;
}
