import AuctionListingItems from "./components/auctionListingItems";
import AuctionListingsTopSection from "./components/auctionListingsTopSection";
import SidebarSection from "./components/sidebarSection";
import { useTranslations } from "next-intl";

export default async function Auctions() {
  const res = await fetch(`https://dummyjson.com/products/1`);
  const data = await res.json();
  return (
    <div className="w-full mb-16 min-h-screen bg-white flex flex-col justify-start items-start">
      <div className="relative w-full">
        <div className="h-[20%] md:h-[30%] lg:h-[40%] xl:h-[50%] px-[5%] md:px-[10%] lg:px-[15%] pt-[10%] md:pt-[5%] pb-2 left-0 top-0 absolute flex flex-col justify-start items-center">
          <div className="text-slate-900  text-5xl md:text-7xl font-bold font-['Work_Sans'] leading-[6vw] md:leading-[7vw]">
            {data.id}
          </div>
          <div className="flex gap-5 justify-between mt-14 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex-wrap justify-center max-w-[1408px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <SidebarSection />
                <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow self-stretch px-4 pb-12 max-w-[1056px] max-md:mt-4 max-md:max-w-full">
                    <AuctionListingsTopSection />
                    <AuctionListingItems />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
