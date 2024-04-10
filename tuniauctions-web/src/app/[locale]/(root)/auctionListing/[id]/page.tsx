"use server";
import { FetchAuctionFrontResponse } from "@/app/api/general/fetchAuctionListing/route";
import AuctionPage from "@/app/[locale]/bidder/auctionDetails/[id]/auctionPage";

export default async function ServerAuctionPage({
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

  if (resData.auction)
    return (
      <AuctionPage
        auctionListing={resData.auction}
        sellerData={resData.sellerAuctionListingData}
      />
    );
  else return <p>Non Existant anymore</p>;
}
