"use client";

import { AuctionListingType } from "@/models/types/auctionListing";
import { DeliveryType } from "@/models/types/delivery";
import { Image } from "antd";
import moment from "moment";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ResponseType {
  pendingDeliveries: DeliveryType[] | null;
  pendingAuctions: AuctionListingType[] | null;
}
interface Props {
  resData: ResponseType;
}
export default function BottomSection() {
  const [resData, setData] = useState<ResponseType>();

  useEffect(() => {
    async function handleFetch() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/seller/fetchDashboardData`,
        {
          method: "POST",
          cache: "no-cache",
        }
      );
      const resData = await res.json();
      if (resData) {
        setData(resData);
      }
    }
    handleFetch();
  }, []);
  const locale = useLocale();
  return (
    <>
      <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
        <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold leading-none text-gray-900">
              Upcoming Auctions
            </h3>
            <Link
              href={`/${locale}/seller/auctionListings`}
              className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
            >
              View all
            </Link>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200">
              {resData &&
                resData.pendingAuctions &&
                resData.pendingAuctions
                  .reverse()
                  .slice(0, 4)
                  .map((value, index) => {
                    return (
                      <li className="py-3 sm:py-4" key={index}>
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <Image
                              className="h-20 w-22 rounded-lg"
                              src={value.productPictures[0]}
                              alt="ProductImage"
                              height={100}
                              width={100}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xl font-medium text-gray-900 truncate">
                              {value.title}
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900">
                            {moment(value.startingDate)
                              .locale(locale)
                              .format("ddd, MMM D, YYYY [at] h:mm A")}
                          </div>
                        </div>
                      </li>
                    );
                  })}
            </ul>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold leading-none text-gray-900">
              Pending Deliveries
            </h3>
            <Link
              href={`/${locale}/seller/pendingDeliveries`}
              className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
            >
              View all
            </Link>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200">
              {resData &&
                resData.pendingDeliveries &&
                resData.pendingDeliveries
                  .reverse()
                  .slice(0, 4)
                  .map((value, index) => {
                    return (
                      <li className="py-3 sm:py-4" key={index}>
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <Image
                              className="h-20 w-22 rounded-lg"
                              src={value.productInformations.productPicture}
                              alt="ProductImage"
                              height={100}
                              width={100}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xl font-medium text-gray-900 truncate">
                              Iphone 13
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900">
                            Pending Shipment
                          </div>
                        </div>
                      </li>
                    );
                  })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
