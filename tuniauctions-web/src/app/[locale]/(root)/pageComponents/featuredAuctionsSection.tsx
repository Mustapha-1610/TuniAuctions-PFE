import FeaturedSectionAuctionListingsContainer from "./components/featuredSectionAuctionListingsContainer";
interface Porps {
  FeaturedAuctions: string;
  DealsOfThisWeel: string;
  OpeningBid: string;
}
export default function FeaturedAuctionsSections({
  FeaturedAuctions,
  DealsOfThisWeel,
  OpeningBid,
}: Porps) {
  return (
    <>
      <div className="flex flex-col items-center px-16 pb-6 mt-7 w-full text-center text-black whitespace-nowrap max-w-[1320px] md:px-5 md:mt-10 md:max-w-full">
        <div className="flex flex-col">
          <div className="self-center text-lg font-semibold leading-6 uppercase">
            {FeaturedAuctions}
          </div>
          <div className="text-4xl mt-4 font-bold">{DealsOfThisWeel}</div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full max-w-[1320px] md:max-w-full">
        <FeaturedSectionAuctionListingsContainer OpeningBid={OpeningBid} />
        <FeaturedSectionAuctionListingsContainer OpeningBid={OpeningBid} />
        <FeaturedSectionAuctionListingsContainer OpeningBid={OpeningBid} />
        <FeaturedSectionAuctionListingsContainer OpeningBid={OpeningBid} />
        <FeaturedSectionAuctionListingsContainer OpeningBid={OpeningBid} />
      </div>
    </>
  );
}
