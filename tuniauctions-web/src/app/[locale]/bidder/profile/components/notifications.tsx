"use client";

import { IBidderFrontData } from "@/models/usersModels/types/bidderTypes";
import Image from "next/image";
import React, { useState } from "react";
import moment from "moment";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { useBidderNavigationStore } from "@/helpers/store/bidder/bidderNavigationStore";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function Notifications() {
  const { bidderLocalStorageData } = useBidderProfileStore();
  const locale = useLocale();
  const router = useRouter();
  const { setSelectedProfileComponent, setSelectedBalanceComponent } =
    useBidderNavigationStore();
  const itemsPerPage = 5;
  const totalPages = Math.ceil(
    bidderLocalStorageData!.notifications!.length / itemsPerPage
  );
  const [currentPage, setCurrentPage] = useState(1);
  const handleClickNext = () => {
    setCurrentPage((prev: any) => Math.min(prev + 1, totalPages));
  };

  const handleClickPrev = () => {
    setCurrentPage((prev: any) => Math.max(prev - 1, 1));
  };

  let currentItems = bidderLocalStorageData!.notifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  function handleNotificationRouting(context: string, contextId?: string) {
    if (context === "Transaction") {
      setSelectedBalanceComponent("transactions");
      router.push(`/${locale}/bidder/balance`);
    } else if (context === "auctionRoomStart" && contextId) {
      router.push(`/${locale}/bidder/auctionRoom/${contextId}`);
    }
  }
  const notificationTranslations = useTranslations("bidder.notifications");
  const getDateFormat = (locale: string) => {
    switch (locale) {
      case "en":
        return "ddd, MMM D, YYYY [at] h:mm A";
      case "fr":
        return "ddd D MMM YYYY [à] HH:mm";
      case "ar":
        return "ddd، D MMM، YYYY [في] HH:mm";
      default:
        return "ddd, MMM D, YYYY [at] h:mm A"; // Default to English format
    }
  };
  return (
    <>
      <div className=" mr-12 pt-12 max-w-full w-[960px] max-md:mr-2.5">
        <div className="flex flex-row flex-1 mt-6 mb-2  max-md:mt-10 max-md:max-w-full">
          <div className="text-2xl max-md:max-w-full font-bold text-black">
            Notifications
          </div>
        </div>
        <div className="flex flex-col justify-center py-6 pr-16 pl-4 mt-2  leading-[120%] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          {currentItems &&
            currentItems.map((value, index) => {
              return (
                <React.Fragment key={index}>
                  <div
                    className="flex gap-4 pr-20 max-md:flex-wrap max-md:pr-5 max-md:mr-2.5 mb-2 cursor-pointer"
                    onClick={() => {
                      handleNotificationRouting(
                        value.context.frontContext,
                        String(value.context.contextId)
                      );
                    }}
                  >
                    <Image
                      className="shrink-0 h-16 rounded-lg bg-slate-200 w-[66px]"
                      alt="Notification Image"
                      src={value.context.notificationIcon}
                      width={100}
                      height={100}
                    />
                    <div className="flex flex-col justify-center my-auto">
                      <div className="text-base font-medium text-neutral-900">
                        {notificationTranslations(value.notificationMessage) +
                          value.context.displayName}
                      </div>
                      <div className="text-sm text-slate-600">
                        <span className="mr-2">
                          {notificationTranslations("sentAt")}
                        </span>
                        {moment(value.context.receptionDate)
                          .locale(locale)
                          .format(getDateFormat(locale))}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
        </div>
        <div className="flex justify-center items-center mt-8">
          <div className="flex items-center">
            <FaArrowLeft
              className="mr-2 cursor-pointer"
              size={17}
              onClick={handleClickPrev}
            />

            <div className="bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center">
              {currentPage}
            </div>
            <FaArrowRight
              className="ml-2 cursor-pointer"
              size={17}
              onClick={handleClickNext}
            />
          </div>
        </div>
      </div>
    </>
  );
}
