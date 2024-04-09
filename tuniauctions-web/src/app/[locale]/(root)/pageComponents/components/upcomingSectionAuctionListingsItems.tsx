import { AuctionListingType } from "@/models/types/auctionListing";
import Image from "next/image";
import moment from "moment";
import { RiAuctionFill } from "react-icons/ri";
import Link from "next/link";

interface Props {
  listing: AuctionListingType;
  locale: string;
}
export default function UpcomingSectionAuctionListingsItems({
  listing,
  locale,
}: Props) {
  return (
    <>
      <div className="px-7 mt-6 py-6 bg-white rounded-md max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src={listing.productPictures[0]}
              className="object-contain my-auto max-w-full aspect-[0.88] w-[184px] max-md:mt-10"
              alt="Listing Image"
              width={190}
              height={100}
            />
          </div>
          <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-1 pr-14 pl-6 max-md:px-5 max-md:mt-8">
              <div className="text-xl font-bold leading-7 capitalize text-slate-950">
                {listing.title}
              </div>
              <div className="mt-2.5 text-base font-semibold tracking-wider leading-6 text-zinc-600">
                {listing.category}
              </div>
              <div className="flex gap-0 justify-between px-5 py-3 mt-3.5 rounded-md border border-solid border-zinc-200 max-w-xs sm:max-w-sm ">
                <div className="flex gap-px justify-between whitespace-nowrap">
                  <RiAuctionFill
                    className="my-auto aspect-[0.96] w-[25px]"
                    size={36}
                  />

                  <div className="flex flex-col flex-1 py-px pl-3">
                    <div className="text-sm font-black tracking-wider leading-5 ">
                      Opening Bid :
                    </div>
                    <div className="text-base font-black tracking-wider leading-5 text-slate-950">
                      Starts on :
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 py-px ml-2">
                  <div className="text-base font-semibold tracking-wider leading-5 text-slate-950">
                    {listing.openingBid > 0 ? (
                      <> ${listing.openingBid}</>
                    ) : (
                      <> Free !</>
                    )}
                  </div>
                  <div className="text-sm font-semibold tracking-wider leading-5 whitespace-nowrap text-zinc-600">
                    {moment(listing.startingDate).format("ddd, MMM D, YYYY")}
                  </div>
                </div>
              </div>
              <div className="mt-7 text-base font-medium tracking-wider leading-6 text-center">
                <Link
                  className="px-6 py-3 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors duration-300"
                  href={`/${locale}/auctionListing/${listing._id}`}
                >
                  View Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
