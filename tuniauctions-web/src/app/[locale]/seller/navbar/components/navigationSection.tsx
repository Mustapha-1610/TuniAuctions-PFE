"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { RiAuctionFill } from "react-icons/ri";
import {
  MdFormatListBulleted,
  MdChecklist,
  MdDashboardCustomize,
  MdOutlinePendingActions,
  MdLanguage,
} from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { GrTransaction, GrHelpBook } from "react-icons/gr";
import { FaFileAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { CgLogOut } from "react-icons/cg";
import { Props } from "../sellerNavbar";

export default function NavigationSection({ navigationTranslation }: Props) {
  const [isEarningsDropdownOpen, setIsEarningsDropdownOpen] = useState(false);
  const [isDeliveriesDropdown, setIsDeliveriesDropdown] = useState(false);
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
  ]; // replace with your actual locales
  const toggleEarningsDropdown = () => {
    setIsEarningsDropdownOpen(!isEarningsDropdownOpen);
  };
  const toggleDeliveriesDropdown = () => {
    setIsDeliveriesDropdown(!isDeliveriesDropdown);
  };
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];
  const router = useRouter();
  const changeLanguage = (lang: string) => {
    const parts = pathname.split("/");
    const restOfPath = parts.slice(2).join("/");
    router.replace(`/${lang}/${restOfPath}`);
  };

  const handleLanguageChange = (e: string) => {
    changeLanguage(e);
  };
  return (
    <>
      <ul className="space-y-2 pb-2">
        <li>
          <Link
            href={"/" + locale + "/seller"}
            className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
          >
            <MdDashboardCustomize size={30} />
            <span className="ml-3 flex-1 whitespace-nowrap">
              {navigationTranslation.Dashboard}
            </span>
          </Link>
        </li>
        <li>
          <Link
            href={"/" + locale + "/seller/earnings"}
            className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
          >
            <FaHandHoldingDollar size={32} />

            <span className="ml-3 flex-1 whitespace-nowrap">
              {navigationTranslation.Earnings}
            </span>
          </Link>
        </li>
        <li>
          <a
            onClick={toggleEarningsDropdown}
            className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
          >
            <RiAuctionFill size={30} />

            <span className="ml-3 flex-1 whitespace-nowrap">
              {navigationTranslation.AuctionListings}
            </span>
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
                  href={"/" + locale + "/seller/auctionListings"}
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                >
                  <MdFormatListBulleted size={28} />

                  <span className="ml-2">
                    {navigationTranslation.AuctionsList}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/" + locale + "/seller/createListing"}
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                >
                  <IoIosCreate size={32} />
                  <span className="ml-2">
                    {navigationTranslation.CreateAuctions}
                  </span>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a
            href="#"
            onClick={toggleDeliveriesDropdown}
            className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
          >
            <TbTruckDelivery size={32} />

            <span className="ml-3 flex-1 whitespace-nowrap">
              {navigationTranslation.Deliveries}
            </span>
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
          {isDeliveriesDropdown && (
            <ul className="ml-6 mt-2">
              <li>
                <Link
                  href={"/" + locale + "/seller/pendingDeliveries"}
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                >
                  <MdOutlinePendingActions size={32} />
                  <span className="ml-2">{navigationTranslation.Pending}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/" + locale + "/seller/delivered"}
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                >
                  <MdChecklist size={30} />
                  <span className="ml-2">
                    {navigationTranslation.Delivered}
                  </span>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link
            href={"/" + locale + "/seller/transactions"}
            className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
          >
            <GrTransaction size={28} />

            <span className="ml-3 flex-1 whitespace-nowrap">
              {navigationTranslation.Transactions}
            </span>
          </Link>
        </li>
      </ul>
      <div className="space-y-2 pt-2">
        <Link
          href={"/" + locale + "/seller/profile"}
          className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
        >
          <CgProfile size={31} />

          <span className="ml-4"> {navigationTranslation.Profile}</span>
        </Link>
        <Link
          href={"/" + locale + "/seller/pricing"}
          className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
        >
          <BiSolidBadgeDollar size={32} />

          <span className="ml-4"> {navigationTranslation.Pricing}</span>
        </Link>
        <a
          href="#"
          target="_blank"
          className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
        >
          <FaFileAlt size={29} />

          <span className="ml-3"> {navigationTranslation.Documentation}</span>
        </a>
        <a
          href="#"
          target="_blank"
          className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
        >
          <GrHelpBook size={31} />

          <span className="ml-3"> {navigationTranslation.Help}</span>
        </a>

        <a
          onClick={() => {
            setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
          }}
          className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
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
                  onClick={() => handleLanguageChange(locale.lang)}
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
        <a
          href="#"
          target="_blank"
          className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
        >
          <CgLogOut size={31} />

          <span className="ml-3"> {navigationTranslation.Logout}</span>
        </a>
      </div>
    </>
  );
}
