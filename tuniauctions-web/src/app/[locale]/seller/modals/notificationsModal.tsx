"use client";
import { Modal } from "antd";
import { useSellerStore } from "@/helpers/store/seller/sellerStore";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";
import React, { useState } from "react";
import Image from "next/image";
import moment from "moment";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "moment/locale/fr";
import "moment/locale/ar";

export default function NotificationsModal() {
  const {
    isUpcomingAuctionModalOpen,
    setUpcomingAucitonModalState,
    setAuction,
    auction,
    isNotificationsModalOpen,
    setNotificationsModalState,
    setOngoingAuctionModalState,
  } = useSellerStore();
  const { sellerLocaleStorageData } = useSellerProfileStore();
  const itemsPerPage = 6;
  const totalPages = Math.ceil(
    sellerLocaleStorageData!.notifications!.length / itemsPerPage
  );
  const [currentPage, setCurrentPage] = useState(1);
  const handleClickNext = () => {
    setCurrentPage((prev: any) => Math.min(prev + 1, totalPages));
  };

  const handleClickPrev = () => {
    setCurrentPage((prev: any) => Math.max(prev - 1, 1));
  };

  let currentItems = sellerLocaleStorageData!.notifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const locale = useLocale();

  async function handleNotificationRouting(
    context: string,
    contextId?: string
  ) {
    if (context === "auctionStart") {
      setLoading(true);
      const res = await fetch("/api/seller/fetchListing", {
        method: "POST",
        body: JSON.stringify({ auctionId: contextId }),
      });
      const resData = await res.json();
      console.log(resData);
      if (resData.success) {
        if (resData.auction.status !== "Ongoing") {
          router.push(`/${locale}/seller/auctionListings`);
          setNotificationsModalState(false);
        } else {
          setAuction(resData.auction);
          setOngoingAuctionModalState(true);
          setNotificationsModalState(false);
        }
      }
      setLoading(false);
    } else if (context === "auctionEnded" && contextId) {
      router.push(`/${locale}/seller/auctionListings`);
    }
    setNotificationsModalState(false);
  }
  const getDateFormat = (locale: string) => {
    switch (locale) {
      case "en":
        return "ddd, MMM D, YYYY [at] h:mm A";
      case "fr":
        return "ddd D MMM YYYY [à] HH:mm";
      case "ar":
        return "ddd، D MMM، YYYY [في] HH:mm";
      default:
        return "ddd, MMM D, YYYY [at] h:mm A";
    }
  };
  const notificationTranslations = useTranslations("seller.notifications");

  return (
    <>
      <Modal
        title="Notifications"
        centered
        open={isNotificationsModalOpen}
        className="mt-2"
        width={700}
        footer={null}
        onCancel={() => setNotificationsModalState(false)}
      >
        <Spin
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
          spinning={loading}
        >
          <div className=" mr-12  max-w-full w-[960px] max-md:mr-2.5">
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
                          <p className="text-sm font-semibold">
                            {notificationTranslations(
                              value.notificationMessage
                            ) + value.context.displayName}
                          </p>
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
        </Spin>
      </Modal>
    </>
  );
}
