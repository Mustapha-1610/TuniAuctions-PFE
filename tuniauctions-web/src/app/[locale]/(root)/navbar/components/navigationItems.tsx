import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { RiAuctionFill } from "react-icons/ri";
import { BsPatchQuestionFill } from "react-icons/bs";
import { FaBuildingCircleExclamation } from "react-icons/fa6";
import { useLocale, useTranslations } from "next-intl";

export default function NavigationItems() {
  const locale = useLocale();
  const t = useTranslations("HomePage.navbarTitles");
  return (
    <>
      <li className="flex items-center">
        {" "}
        <Link
          className={"text-sm  flex items-center text-white font-bold"}
          href={"/" + locale}
        >
          <FaHome size={22} color="white" className="mr-2" />
          {t("home")}
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
          className={"text-sm  flex items-center text-white font-bold"}
          href={"/" + locale + "/auctions"}
        >
          <RiAuctionFill size={22} className="mr-2" />
          {t("auctions")}
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
          className={"text-sm  flex items-center text-white font-bold"}
          href={"/" + locale + "/aboutus"}
        >
          <FaBuildingCircleExclamation size={22} className="mr-2" />
          {t("aboutus")}
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
          className={"text-sm  flex items-center text-white font-bold"}
          href={"/" + locale + "/howitworks"}
        >
          <BsPatchQuestionFill size={22} className="mr-2" />
          {t("howitworks")}
        </Link>
      </li>
    </>
  );
}
