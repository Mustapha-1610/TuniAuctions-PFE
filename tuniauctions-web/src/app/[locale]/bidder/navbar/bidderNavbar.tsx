"use client";
import React, { useState } from "react";
import NavigationItems from "./components/navigationItems";
import MobileNavbar from "./components/mobileNavbar";
import LoginModal from "./components/loginModal";
import SignupModal from "./components/signupModal";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

import { ChangeEvent } from "react";
import { MdNotifications } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { LuUser2 } from "react-icons/lu";
import { useLocale } from "next-intl";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [SignupOpen, setSignupOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const locale = useLocale();

  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];
  const locales = ["en", "fr", "ar"]; // replace with your actual locales
  const router = useRouter();
  const changeLanguage = (lang: string) => {
    const parts = pathname.split("/");
    const restOfPath = parts.slice(2).join("/");
    router.replace(`/${lang}/${restOfPath}`);
  };

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value);
  };
  const [isNotificationMenuOpen, setIsnotificationMenuOpen] =
    useState<boolean>(false);
  const [isBidderProfileOptionsOpen, setIsBidderProfileOptionsOpen] =
    useState<Boolean>(false);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 px-4 py-4  flex justify-between items-center bg-neutral-900 z-50">
        <div className="flex items-center">
          <a className={"text-lg text-white font-bold leading-none "} href="#">
            Tuni-Auctions
          </a>
        </div>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={toggleMenu}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul
          className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${
            isOpen ? "" : "hidden"
          }`}
        >
          <NavigationItems />
        </ul>
        <div className="flex items-center space-x-4">
          {/* Language Select Dropdown */}
          <select
            onChange={handleLanguageChange}
            defaultValue={currentLocale}
            className="ml-2 lg:inline-block py-2 px-2 bg-slate-500 text-sm text-white font-bold rounded-xl transition duration-200"
          >
            {locales.map((locale) => (
              <option key={locale} value={locale}>
                {locale}
              </option>
            ))}
          </select>
          {/* Notifications Bell */}
          <div className="relative">
            <div
              className="cursor-pointer"
              onClick={() => console.log("Notifications clicked")} // Replace with actual click handler
            >
              {/* Unread Notifications Count */}
              <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                <span className="text-sm font-bold">3</span>
                {/* Example unread count */}
              </div>
              <MdNotifications
                onClick={() =>
                  setIsnotificationMenuOpen(!isNotificationMenuOpen)
                }
                color="white"
                size={25}
              />
            </div>
            {isNotificationMenuOpen && (
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
          {/* Profile Picture */}
          <div
            onClick={() =>
              setIsBidderProfileOptionsOpen(!isBidderProfileOptionsOpen)
            }
          >
            <LuUser2 size={35} className="  cursor-pointer" color="white" />
            {isBidderProfileOptionsOpen && (
              <div className="absolute mt-2 left-3/3 transform -translate-x-2/3 bg-white text-black border border-netral-200 rounded-lg shadow-lg max-w-xl z-10">
                <Link
                  href={"/" + locale + "/bidder/profile"}
                  className="py-4 px-5 flex flex-rows  font-bold"
                >
                  Profile <FaRegUser size={19} className="ml-3" />
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
          isOpen ? "" : "hidden"
        }`}
      >
        <MobileNavbar
          toggleMenu={toggleMenu}
          setOpenLogin={setOpen}
          setOpenSignup={setSignupOpen}
          locales={locales}
          currentLocale={currentLocale}
          handleLanguageChange={handleLanguageChange}
        />
      </div>
    </>
  );
}

export default Navbar;
