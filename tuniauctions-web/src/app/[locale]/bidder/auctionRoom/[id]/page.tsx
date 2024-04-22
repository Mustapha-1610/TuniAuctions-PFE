import { FetchAuctionFrontResponse } from "@/app/api/general/fetchAuctionListing/route";
import BiddingRoomPage from "./biddingRoom";
import { FaCircleExclamation, FaRegFaceSmileBeam } from "react-icons/fa6";

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
              Auction Havent Started Yet!
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
  } else return <p>Non Existent anymore</p>;
}
