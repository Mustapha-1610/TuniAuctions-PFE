"use client";
import { AuctionListingType } from "@/models/types/auctionListing";
import UpcomingSectionAuctionListingsItems from "./components/upcomingSectionAuctionListingsItems";
import Link from "next/link";
import { useRootFilterStore } from "@/helpers/store/general/rootAuctionsNavigationStore";
import Image from "next/image";
interface Props {
  premiumListings: AuctionListingType[];
  locale: string;
}
export default function UpcomingAuctionsSection({
  premiumListings,
  locale,
}: Props) {
  const { setSelectedCategory } = useRootFilterStore();
  return (
    <>
      <div className="flex overflow-hidden relative flex-col items-center self-stretch px-20 py-12 mt-28 w-full min-h-[600px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <Image
          loading="lazy"
          src="https://firebasestorage.googleapis.com/v0/b/tunisianauctionwebapp.appspot.com/o/DisplayImages%2FRootPageUpcomingAuctions.webp?alt=media&token=a951930a-4ea4-4432-8ea8-8bee87a1b70a "
          className="object-cover absolute inset-0 size-full"
          alt="Upcoming Auction Image"
          width={1500}
          height={500}
          quality={100}
        />
        <div className="flex relative flex-col items-center px-16 pb-6  w-full text-center text-white whitespace-nowrap max-w-[1320px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col">
            <div className="text-4xl font-bold">Up Coming Auctions</div>
          </div>
        </div>
        <div className="relative w-full max-w-[1320px] max-md:max-w-full">
          <div className="flex flex-col max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
              {/* Adjusted flex properties for horizontal display */}
              <div className="flex justify-center md:flex-row md:gap-5 md:justify-start flex-col items-center">
                {premiumListings &&
                  premiumListings.map((value, index) => {
                    return (
                      <>
                        <UpcomingSectionAuctionListingsItems
                          listing={value}
                          key={index}
                          locale={locale}
                        />
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        <Link
          href={`/${locale}/auctions`}
          onClick={() => {
            setSelectedCategory("");
          }}
          className="relative justify-center px-10 py-3.5 mt-12 mb-10 text-base font-bold tracking-wide leading-6 text-center capitalize whitespace-nowrap bg-white rounded-md text-slate-950 max-md:px-5 max-md:mt-10"
        >
          View All
        </Link>
      </div>
    </>
  );
}
