"use client";
import { AuctionListingType } from "@/models/types/auctionListing";
import UpcomingSectionAuctionListingsItems from "./components/upcomingSectionAuctionListingsItems";
import Link from "next/link";
import { useRootFilterStore } from "@/helpers/store/general/rootAuctionsNavigationStore";
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
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bab5a580e3acd56a8f602750964d910aca7c8519cdf181dd19639ed8356e5661?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bab5a580e3acd56a8f602750964d910aca7c8519cdf181dd19639ed8356e5661?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bab5a580e3acd56a8f602750964d910aca7c8519cdf181dd19639ed8356e5661?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bab5a580e3acd56a8f602750964d910aca7c8519cdf181dd19639ed8356e5661?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bab5a580e3acd56a8f602750964d910aca7c8519cdf181dd19639ed8356e5661?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bab5a580e3acd56a8f602750964d910aca7c8519cdf181dd19639ed8356e5661?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bab5a580e3acd56a8f602750964d910aca7c8519cdf181dd19639ed8356e5661?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bab5a580e3acd56a8f602750964d910aca7c8519cdf181dd19639ed8356e5661?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
          className="object-cover absolute inset-0 size-full"
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
