import { useNavbarState } from "@/helpers/store/general/navbarState";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { RiAuctionFill } from "react-icons/ri";
import LanguageChanger from "@/app/[locale]/(root)/navbar/components/languageChanger";
import { useBidderNavbarState } from "@/helpers/store/bidder/bidderNavbarStore";
import { FaBuildingCircleExclamation } from "react-icons/fa6";
import { BsPatchQuestionFill } from "react-icons/bs";

export default function MobileNavbar() {
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
      <div className="navbar-backdrop fixed inset-0">
        <nav className="sticky h-full left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-neutral-900  overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-gl font-bold  text-white" href="#">
              Tuni Auctions
              <svg className="h-12 ml-4" viewBox="0 0 10240 10240"></svg>
            </a>

            <button className="navbar-close" onClick={setMobileMenuState}>
              <svg
                className="h-6 w-6 text-gray-100 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1" onClick={setMobileMenuState}>
                <Link
                  className="block p-4 text-sm font-semibold text-gray-100 hover:bg-blue-50 hover:text-blue-600 rounded flex flex-rows"
                  href="/"
                >
                  <FaHome size={20} color="white" className="mr-2" />
                  Home
                </Link>
              </li>
              <li className="mb-1" onClick={setMobileMenuState}>
                <Link
                  className="block p-4 text-sm font-semibold text-gray-100 hover:bg-blue-50 hover:text-blue-600 rounded flex flex-rows"
                  href="/auctions"
                >
                  <RiAuctionFill size={20} color="white" className="mr-2" />
                  Auctions
                </Link>
              </li>
              <li className="mb-1" onClick={setMobileMenuState}>
                <Link
                  className="block p-4 text-sm font-semibold text-gray-100 hover:bg-blue-50 hover:text-blue-600 rounded flex flex-rows"
                  href="/aboutus"
                >
                  <FaBuildingCircleExclamation
                    size={20}
                    color="white"
                    className="mr-2"
                  />
                  About us
                </Link>
              </li>
              <li className="mb-1" onClick={setMobileMenuState}>
                <Link
                  className="block p-4 text-sm font-semibold text-gray-100 hover:bg-blue-50 hover:text-blue-600 rounded flex flex-rows"
                  href="/howitworks"
                >
                  <BsPatchQuestionFill
                    size={20}
                    color="white"
                    className="mr-2"
                  />
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
