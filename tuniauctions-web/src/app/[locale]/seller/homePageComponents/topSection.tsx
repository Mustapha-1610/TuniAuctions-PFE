"use client";
import { GoEye } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";

export default function TopStatisticsSection() {
  const { sellerLocaleStorageData } = useSellerProfileStore();

  return (
    <>
      {sellerLocaleStorageData && (
        <div className="mb-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="bg-gray-500 shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-white">
                  {sellerLocaleStorageData.earnnings}
                </span>
                <h3 className="text-base text-white font-normal ">Earnings</h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 ">
                <FaEye size={50} color="white" />
              </div>
            </div>
          </div>
          <div className="bg-gray-500 shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-white">
                  {sellerLocaleStorageData.createdAuctions.upcoming.length}
                </span>
                <h3 className="text-base text-white font-normal ">
                  Upcoming Auctions
                </h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 ">
                <GoEye size={50} color="white" />
              </div>
            </div>
          </div>
          <div className="bg-gray-500 shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-white">
                  {sellerLocaleStorageData.reviews.rating}
                </span>
                <h3 className="text-base text-white font-normal ">
                  Profile Rating
                </h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1">
                <MdStarRate size={55} color="white" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
