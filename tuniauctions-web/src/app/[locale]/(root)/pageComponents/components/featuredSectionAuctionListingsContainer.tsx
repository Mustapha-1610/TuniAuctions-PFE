"use client";
import { AuctionListingType } from "@/models/types/auctionListing";
import moment from "moment";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface Props {
  OpeningBid: string;
  listing: AuctionListingType;
  specificRoute?: string;
}
export default function FeaturedSectionAuctionListingsContainer({
  OpeningBid,
  listing,
  specificRoute,
}: Props) {
  const locale = useLocale();
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-center md:flex-col md:gap-0 md:px-3">
        {/* updated width to fit 4 items per row */}
        <Link
          href={
            specificRoute
              ? "/" + locale + specificRoute + "/auctionDetails/" + listing._id
              : "/" + locale + "/auctionListing/" + listing._id
          }
          className="flex flex-col w-1/4 w-full  p-4 bg-white rounded-md border border-solid border-zinc-300 md:w-full md:mb-2"
        >
          {/* Item content */}
          <div className="flex justify-center">
            <Image
              loading="lazy"
              src={listing.productPictures[0]}
              className="mt-5 max-w-full aspect-square w-[158px] object-contain rounded-md"
              alt="Listing Image"
              width={140}
              height={80}
            />
          </div>
          <div className="mt-7 text-center capitalize text-slate-950">
            <span className="text-2xl font-bold leading-7">
              {listing.title}
            </span>
            <br />
            <span className="text-lg ">{listing.category}</span>
          </div>

          <div className="self-center mt-3 text-base font-bold leading-5 text-center capitalize whitespace-nowrap text-zinc-600">
            {OpeningBid} :
            {listing.openingBid > 0 ? " $" + listing.openingBid : <> Free !</>}
          </div>
          <div className="flex gap-5 justify-center px-8 py-1 mt-4 text-center whitespace-nowrap md:px-5">
            <div className="mt-3 p-2 bg-purple-200 text-purple-800 rounded-lg shadow-md">
              <div className="text-xs leading-3 font-medium">Starts on:</div>
              <div className="text-gl font-bold">
                {moment(listing.startingDate).format(
                  "ddd, MMM D, YYYY [at] h:mm A"
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
