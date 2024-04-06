import { FaEye } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoMdCreate } from "react-icons/io";
import { auctionListingsChildrenProps } from "../page";
import { useEffect, useState } from "react";

export default function StatisticsSection({
  auctionListings,
}: auctionListingsChildrenProps) {
  const [totalViews, setTotalViews] = useState<number>(0);
  const [totalParticipatingBidders, setTotalParticipatingBidders] =
    useState<number>(0);
  useEffect(() => {
    function calculateTotal() {
      let views = 0;
      let bidders = 0;
      auctionListings &&
        auctionListings.map((value, index) => {
          views += value.totalViews;
          bidders = +value.participatingBidders;
        });
      setTotalViews(views);
      setTotalParticipatingBidders(bidders);
    }
    calculateTotal();
  }, [auctionListings]);
  return (
    <>
      <div className="mb-4 px-2 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="bg-gray-600 shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl leading-none font-bold text-white">
                {String(auctionListings?.length)}
              </span>
              <h3 className="text-base text-white font-normal ">
                Total Created Auctions
              </h3>
            </div>
            <div className="ml-5 w-0 flex items-center justify-end flex-1 ">
              <IoMdCreate size={50} color="white" />
            </div>
          </div>
        </div>
        <div className="bg-gray-600 shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl leading-none font-bold text-white">
                {totalViews}
              </span>
              <h3 className="text-base text-white font-normal ">Total Views</h3>
            </div>
            <div className="ml-5 w-0 flex items-center justify-end flex-1 ">
              <FaEye size={50} color="white" />
            </div>
          </div>
        </div>
        <div className="bg-gray-600   shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl leading-none font-bold text-white">
                {totalParticipatingBidders}
              </span>
              <h3 className="text-base text-white font-normal ">
                Total Participating Bidders
              </h3>
            </div>
            <div className="ml-5 w-0 flex items-center justify-end flex-1">
              <GiTakeMyMoney size={55} color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
