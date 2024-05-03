"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import {
  MdOutlinePendingActions,
  MdLanguage,
  MdOutlinePending,
  MdError,
} from "react-icons/md";
import { FaUserCheck, FaUserTie } from "react-icons/fa";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { CgLogOut } from "react-icons/cg";
import { Props } from "../adminNavbar";
import { resDataType } from "@/serverHelpers/types";
import { IoAnalytics } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GiHandTruck, GiMoneyStack } from "react-icons/gi";
import { useAdminStore } from "@/helpers/store/admin/adminStore";
import { RiAuctionFill } from "react-icons/ri";
import { useAdminProfileStore } from "@/helpers/store/admin/adminProfileStore";
import { IoMdCheckmark } from "react-icons/io";

export default function AdminNavigationSection({
  navigationTranslation,
}: Props) {
  const [isEarningsDropdownOpen, setIsEarningsDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const locale = useLocale();
  const locales = [
    {
      lang: "en",
      display: "English",
      flag: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
    },
    {
      lang: "fr",
      display: "French",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/800px-Flag_of_France.svg.png",
    },
    {
      lang: "ar",
      display: "Arabic",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/2560px-Flag_of_Saudi_Arabia.svg.png",
    },
  ];
  const toggleEarningsDropdown = () => {
    setIsEarningsDropdownOpen(!isEarningsDropdownOpen);
  };
  const {
    isDeliveriesNavigationOpen,
    isAuctionsNavigationOpen,
    setAuctionNavigationState,
    setDeliveriesNavigationState,
  } = useAdminStore();
  const { setAdminLocalStorageData } = useAdminProfileStore();
  const pathname = usePathname();
  const router = useRouter();
  const changeLanguage = (lang: string) => {
    const parts = pathname.split("/");
    const restOfPath = parts.slice(2).join("/");
    router.replace(`/${lang}/${restOfPath}`);
  };

  const handleLanguageChange = (e: string) => {
    changeLanguage(e);
  };
  async function handleLogout() {
    try {
      const res = await fetch("/api/admin/signout", {
        method: "POST",
      });
      const resData: resDataType = await res.json();
      if (resData.success) {
        router.push("/" + locale);
        setAdminLocalStorageData(null);
      }
    } catch (err) {
      console.log(err);
    }
  }
  function handleNavigation() {
    setDeliveriesNavigationState(false);
    setIsEarningsDropdownOpen(false);
    setAuctionNavigationState(false);
  }

  return (
    <>
      <ul className="space-y-1 pb-2">
        <li>
          <Link
            href={"/" + locale + "/admin"}
            className="text-base text-gray-900 font-nobrmal rounded-lg hover:bg-gray-300 flex items-center p-2 group "
            onClick={handleNavigation}
          >
            <IoAnalytics size={27} />
            <span className="ml-3 flex-1 whitespace-nowrap">
              {navigationTranslation.Dashboard}
            </span>
          </Link>
        </li>
        <li>
          <a
            onClick={toggleEarningsDropdown}
            className="text-base text-gray-900 font-nobrmal rounded-lg hover:bg-gray-300 flex items-center p-2 group "
          >
            <FaUserTie size={27} />

            <span className="ml-3 flex-1 whitespace-nowrap">Sellers</span>
            <svg
              className="w-4 h-4 ml-auto text-gray-500 transform group-hover:-rotate-180 transition duration-150"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          {isEarningsDropdownOpen && (
            <ul className="ml-6 mt-2">
              <li>
                <Link
                  href={"/" + locale + "/admin/pendingSellers"}
                  onClick={handleNavigation}
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                >
                  <MdOutlinePendingActions size={28} />
                  <span className="ml-2">Pending Approval</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/" + locale + "/admin/activeSellers"}
                  onClick={handleNavigation}
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ml-1"
                >
                  <FaUserCheck size={29} />

                  <span className="ml-1">Verified</span>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link
            href={"/" + locale + "/admin/bidders"}
            onClick={handleNavigation}
            className="text-base text-gray-900 font-nobrmal rounded-lg hover:bg-gray-300 flex items-center p-2 group "
          >
            <HiMiniUserGroup size={32} />

            <span className="ml-3 flex-1 whitespace-nowrap">Bidders</span>
          </Link>
        </li>
        <li>
          <a
            onClick={() => {
              setAuctionNavigationState(!isAuctionsNavigationOpen);
            }}
            className="text-base text-gray-900 font-nobrmal rounded-lg hover:bg-gray-300 flex items-center p-2 group "
          >
            <RiAuctionFill size={27} />

            <span className="ml-3 flex-1 whitespace-nowrap">Auctions</span>
            <svg
              className="w-4 h-4 ml-auto text-gray-500 transform group-hover:-rotate-180 transition duration-150"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          {isAuctionsNavigationOpen && (
            <ul className="ml-6 mt-2">
              <li>
                <Link
                  href={"/" + locale + "/admin/upcomingAuctions"}
                  onClick={handleNavigation}
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={27}
                    height={27}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 22h-3q-.425 0-.712-.288T15 21t.288-.712T16 20h3V10H5v3q0 .425-.288.713T4 14t-.712-.288T3 13V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22m-9.825-2H2q-.425 0-.712-.288T1 19t.288-.712T2 18h7.175L7.3 16.1q-.275-.275-.287-.687T7.3 14.7q.275-.275.7-.275t.7.275l3.6 3.6q.3.3.3.7t-.3.7l-3.6 3.6q-.275.275-.687.288T7.3 23.3q-.275-.275-.275-.7t.275-.7z"
                    ></path>
                  </svg>

                  <span className="ml-2">Upcoming</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/" + locale + "/admin/ongoingAuctions"}
                  onClick={handleNavigation}
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                >
                  <MdOutlinePending size={28} />
                  <span className="ml-1">Ongoing</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/" + locale + "/admin/finishedAuctions"}
                  onClick={handleNavigation}
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                >
                  <IoMdCheckmark size={29} />

                  <span className="ml-1">Finished</span>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a
            onClick={() => {
              setDeliveriesNavigationState(!isDeliveriesNavigationOpen);
            }}
            className="text-base text-gray-900 font-nobrmal rounded-lg hover:bg-gray-300 flex items-center p-2 group "
          >
            <GiHandTruck size={29} />

            <span className="ml-3 flex-1 whitespace-nowrap">Deliveries</span>
            <svg
              className="w-4 h-4 ml-auto text-gray-500 transform group-hover:-rotate-180 transition duration-150"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          {isDeliveriesNavigationOpen && (
            <ul className="ml-6 mt-2">
              <li>
                <Link
                  href={"/" + locale + "/admin/reportedDeliveries"}
                  onClick={handleNavigation}
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                >
                  <MdError size={29} />

                  <span className="ml-1">Reported</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/" + locale + "/admin/pendingDeliveries"}
                  onClick={handleNavigation}
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                >
                  <MdOutlinePendingActions size={28} />
                  <span className="ml-2">Pending</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/" + locale + "/admin/deliveredDeliveries"}
                  onClick={handleNavigation}
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                >
                  <IoMdCheckmark size={29} />

                  <span className="ml-1">Delivered</span>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link
            href={"/" + locale + "/admin/transactions"}
            className="text-base text-gray-900 font-nobrmal rounded-lg hover:bg-gray-300 flex items-center p-2 group "
            onClick={handleNavigation}
          >
            <GiMoneyStack size={37} />

            <span className="ml-3 flex-1 whitespace-nowrap">
              {navigationTranslation.Transactions}
            </span>
          </Link>
        </li>
      </ul>
      <div className="space-y-2 pt-2">
        <a
          onClick={() => {
            setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
          }}
          className="text-base text-gray-900 font-nobrmal rounded-lg hover:bg-gray-300 flex items-center p-2 group "
        >
          <MdLanguage size={30} />

          <span className="ml-3 flex-1 whitespace-nowrap">Languages</span>
          <svg
            className="w-4 h-4 ml-auto text-gray-500 transform group-hover:-rotate-180 transition duration-150"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        {isLanguageDropdownOpen && (
          <ul className="ml-6 mt-2">
            <li>
              {locales.map((locale, index: any) => (
                <div
                  key={index}
                  className="text-base text-gray-900 font-bold  rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                  onClick={() => (
                    handleLanguageChange(locale.lang), handleNavigation()
                  )}
                >
                  <div className="ml-2 flex items-center" key={index}>
                    <Image
                      src={locale.flag}
                      alt="countryFlag"
                      height={10}
                      width={32}
                      quality={100} // Set the quality to 100 for best quality
                    />
                    <span className="ml-2">{locale.display}</span>
                  </div>
                </div>
              ))}
            </li>
          </ul>
        )}
        <div
          className="text-base text-gray-900 font-nobrmal rounded-lg hover:bg-gray-300 flex items-center p-2 group  cursor-pointer"
          onClick={() => {
            handleLogout(), handleNavigation();
          }}
        >
          <CgLogOut size={31} />

          <span className="ml-3"> {navigationTranslation.Logout}</span>
        </div>
      </div>
    </>
  );
}
