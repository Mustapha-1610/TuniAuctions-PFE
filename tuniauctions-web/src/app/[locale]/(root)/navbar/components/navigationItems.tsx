"use client";
import Link from "next/link";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { RiAuctionFill } from "react-icons/ri";
import { BsPatchQuestionFill } from "react-icons/bs";
import { FaBuildingCircleExclamation } from "react-icons/fa6";
import { useLocale } from "next-intl";

export default function NavigationItems() {
  const [activeItem, setActiveItem] = useState("home");
  const locale = useLocale();

  const handleItemClick = (item: any) => {
    setActiveItem(item);
  };
  return (
    <>
      <li className="flex items-center">
        {" "}
        <Link
          className={"text-sm  flex items-center text-blue-300 font-bold"}
          href={"/" + locale}
        >
          <FaHome size={22} className="mr-2" />
          Home
        </Link>
      </li>
      <li className="text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          className="w-4 h-4 current-fill"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </li>
      <li>
        <Link
          className={"text-sm  flex items-center text-blue-300 font-bold"}
          href={"/" + locale + "/auctions"}
          onClick={() => handleItemClick("Auctions")}
        >
          <RiAuctionFill size={22} className="mr-2" />
          Auctions
        </Link>
      </li>
      <li className="text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          className="w-4 h-4 current-fill"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </li>
      <li>
        <Link
          className={"text-sm  flex items-center text-blue-300 font-bold"}
          href={"/" + locale + "/aboutus"}
          onClick={() => handleItemClick("About Us")}
        >
          <FaBuildingCircleExclamation size={22} className="mr-2" />
          About Us
        </Link>
      </li>
      <li className="text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          className="w-4 h-4 current-fill"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </li>
      <li>
        <Link
          className={"text-sm  flex items-center text-blue-300 font-bold"}
          href={"/" + locale + "/howitworks"}
          onClick={() => handleItemClick("How It Works")}
        >
          <BsPatchQuestionFill size={22} className="mr-2" />
          How It Works
        </Link>
      </li>
    </>
  );
}
