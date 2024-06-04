"use client";
import React, { useEffect, useRef, useState } from "react";
import NavigationItems from "./components/navigationItems";
import MobileNavbar from "./components/mobileNavbar";

import { MdNotifications } from "react-icons/md";
import Link from "next/link";
import { LuUser2 } from "react-icons/lu";
import { useLocale } from "next-intl";
import { GiWallet } from "react-icons/gi";
import LanguageChanger from "../../(root)/navbar/components/languageChanger";
import { useBidderNavbarState } from "@/helpers/store/bidder/bidderNavbarStore";
import Notifications from "./components/components/notifications";
import PorfileDropdownMenu from "./components/components/profileDropdownMenu";
import { resDataType } from "@/serverHelpers/types";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { useRouter } from "next/navigation";
import bidderSocket from "@/frontHelpers/bidder/bidderSocketLogic";
import UnautherizedModal from "./components/components/unautherizedModal";
import AuctionCongratsModal from "./components/components/congratsModal";

export default function BidderNavbar() {
  const {
    isMobileMenuOpen,
    isProfileMenuOpen,
    isNotificationsMenuOpen,
    setMobileMenuState,
    setProfileMenuState,
    setNotificationsMenuState,
    setAnautherizedModalState,
    isAnautherizedModalOpen,
  } = useBidderNavbarState();
  const { bidderLocalStorageData, setBidderLocalStorageData, signoutBidder } =
    useBidderProfileStore();
  const locale = useLocale();
  const router = useRouter();
  const [isCongratsModalOpen, setCongratsModal] = useState<boolean>(false);
  const [congratsAuctionTitle, setCongratsAuctionTitle] = useState<string>("");

  const notificationsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function getData() {
      const res = await fetch("/api/bidder/getData", {
        method: "POST",
      });
      const resData: resDataType = await res.json();
      if (resData.bidderFrontData) {
        setBidderLocalStorageData(resData.bidderFrontData);
        bidderSocket.emit("bidderConnection", resData.bidderFrontData.socketId);
      } else if (resData.authError) {
        console.log("logging out");
        signoutBidder();
        setAnautherizedModalState(true);
        router.push(`/${locale}`);
      }
    }
    getData();
    bidderSocket.on("confirmAuth", async () => {
      getData();
    });
    bidderSocket.on("refreshData", async () => {
      getData();
    });
    bidderSocket.on("showCongratsModal", (data: string) => {
      setCongratsAuctionTitle(data);
      getData();
      setCongratsModal(true);
    });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationsMenuRef.current &&
        !notificationsMenuRef.current.contains(event.target as Node)
      ) {
        setNotificationsMenuState();
      }
    };
  }, [setNotificationsMenuState]);

  async function clearNotifications() {
    if (
      bidderLocalStorageData!.notifications.filter(
        (notification: any) => !notification.readStatus
      ).length
    ) {
      const res = await fetch("/api/bidder/clearNotifications", {
        method: "POST",
      });
      const resData: resDataType = await res.json();
      if (resData.bidderFrontData) {
        setBidderLocalStorageData(resData.bidderFrontData!);
      } else if (resData.authError) {
        signoutBidder();
        setAnautherizedModalState(true);
        router.push(`/${locale}`);
      }
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 px-4 py-4 flex justify-between items-center bg-neutral-900 z-50">
        <div className="flex items-center lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={setMobileMenuState}
          >
            <svg
              className="block h-4 w-4 fill-current text-white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title className="text-white">Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex items-center">
          <Link
            className={"text-lg text-white font-bold leading-none "}
            href={"/" + locale + "/bidder"}
          >
            Tuni-Auctions
          </Link>
        </div>
        <ul
          className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
        >
          <NavigationItems />
        </ul>
        <div className="flex items-center space-x-4">
          <LanguageChanger className="ml-1  py-2  bg-neutral-900 text-sm text-white font-bold transition duration-200" />
          <div className="relative" ref={notificationsMenuRef}>
            <div
              className="cursor-pointer"
              onClick={() => {
                setNotificationsMenuState();
                clearNotifications();
              }}
            >
              {bidderLocalStorageData &&
                bidderLocalStorageData.notifications.filter(
                  (notification: any) => !notification.readStatus
                ).length > 0 && (
                  <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                    <span className="text-sm font-bold">
                      {
                        bidderLocalStorageData.notifications.filter(
                          (notification: any) => !notification.readStatus
                        ).length
                      }
                    </span>
                  </div>
                )}
              <MdNotifications color="white" size={25} />
            </div>
            {isNotificationsMenuOpen && (
              <Notifications
                bidderData={bidderLocalStorageData}
                setNotificationsMenuState={setNotificationsMenuState}
              />
            )}
          </div>

          <Link
            className="text-base flex flex-rows items-center text-white font-semibold"
            href={"/" + locale + "/bidder/balance"}
          >
            <GiWallet size={25} className="cursor-pointer" color="white" />
            <span className="text-white ml-1">
              ${bidderLocalStorageData?.balance.activeBalance}
            </span>
          </Link>
          <div onClick={setProfileMenuState}>
            <LuUser2 size={30} className="cursor-pointer" color="white" />
            {isProfileMenuOpen && <PorfileDropdownMenu locale={locale} />}
          </div>
        </div>
      </nav>
      <div
        className={`navbar-menu fixed top-0 left-0 right-0 overflow-y-auto z-50 ${
          isMobileMenuOpen ? "" : "hidden"
        }`}
      >
        <MobileNavbar />
        {isCongratsModalOpen && (
          <AuctionCongratsModal
            auctionTitle={congratsAuctionTitle}
            isCongratsModalOpen={isCongratsModalOpen}
            setCongratsModal={setCongratsModal}
          />
        )}
        {isAnautherizedModalOpen && <UnautherizedModal />}
      </div>
    </>
  );
}
