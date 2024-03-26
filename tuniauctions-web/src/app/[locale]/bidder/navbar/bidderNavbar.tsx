"use client";
import React from "react";
import NavigationItems from "./components/navigationItems";
import MobileNavbar from "./components/mobileNavbar";
import { FaRegUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

import { MdDashboardCustomize, MdNotifications } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { LuUser2 } from "react-icons/lu";
import { useLocale } from "next-intl";
import { GiWallet } from "react-icons/gi";
import LanguageChanger from "../../(root)/navbar/components/languageChanger";
import { useBidderNavbarState } from "@/helpers/store/bidder/bidderNavbarStore";

function Navbar() {
  const locale = useLocale();

  const {
    isMobileMenuOpen,
    isProfileMenuOpen,
    isNotificationsMenuOpen,
    setMobileMenuState,
    setProfileMenuState,
    setNotificationsMenuState,
  } = useBidderNavbarState();
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
          <a className={"text-lg text-white font-bold leading-none "} href="#">
            Tuni-Auctions
          </a>
        </div>
        <ul
          className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
        >
          <NavigationItems />
        </ul>
        <div className="flex items-center space-x-4">
          <LanguageChanger className="ml-1 lg:inline-block py-2  bg-neutral-900 text-sm text-white font-bold  transition duration-200" />
          <div className="relative">
            <div className="cursor-pointer">
              <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                <span className="text-sm font-bold">3</span>
              </div>
              <MdNotifications
                onClick={setNotificationsMenuState}
                color="white"
                size={25}
              />
            </div>
            {isNotificationsMenuOpen && (
              <div className="absolute mt-4 left-3/3 transform -translate-x-2/3 bg-white text-black border border-netral-200 rounded-md shadow-lg max-w-xl z-10">
                <div className="py-2 px-3 border-b border-gray-300 font-bold">
                  Notifications
                </div>
                <div className="h-80 w-80 overflow-y-auto">
                  <div className="p-3 hover:bg-gray-100 cursor-pointer flex items-center">
                    <Image
                      height={100}
                      width={100}
                      data-tooltip-target="tooltip-jese"
                      className="h-12 w-12 rounded-xl cursor-pointer"
                      src="https://firebasestorage.googleapis.com/v0/b/tunisianauctionwebapp.appspot.com/o/TuniAuctionsReducedSizeLogo.png?alt=media&token=f087eef1-3a90-4095-99d8-349ebdb6c7aa"
                      alt="Medium avatar"
                    />
                    <div className="ml-2">
                      <p className="text-sm font-semibold">Test Notification</p>
                      <p className="text-xs text-gray-500">
                        {`Sent at: 16/08/2024 01:09`}
                      </p>{" "}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            className="text-sm  flex flex-rows items-center text-white font-bold  py-1 border border-white rounded-lg p-2 border-2"
            href={"/" + locale + "/bidder/balance"}
          >
            <GiWallet size={28} className="cursor-pointer" color="white" />
            <span className="text-white text-gl ml-1">$5</span>
          </Link>
          <div onClick={setProfileMenuState}>
            <LuUser2 size={30} className="cursor-pointer" color="white" />
            {isProfileMenuOpen && (
              <div className="absolute mt-2 left-3/3 transform -translate-x-2/3 bg-white text-black border border-netral-200 rounded-lg shadow-lg max-w-xl z-10">
                <Link
                  href={"/" + locale + "/bidder/profile"}
                  className="py-4 px-5 flex flex-rows  font-bold"
                >
                  Profile <FaRegUser size={19} className="ml-3" />
                </Link>
                <Link
                  className="py-2 px-2 flex flex-rows  font-bold"
                  href={"/" + locale + "/bidder/dashboard"}
                >
                  Dashboard <MdDashboardCustomize size={19} className="ml-3" />
                </Link>
                <div className="py-4 px-5 flex flex-rows  font-bold">
                  Logout <CiLogout size={20} className="ml-2" />
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div
        className={`navbar-menu fixed top-0 left-0 right-0 overflow-y-auto z-50 ${
          isMobileMenuOpen ? "" : "hidden"
        }`}
      >
        <MobileNavbar />
      </div>
    </>
  );
}

export default Navbar;
