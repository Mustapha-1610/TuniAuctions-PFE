"use client";
import { useSellerNavbarStore } from "@/helpers/store/sellerNavbarState";
import { MdNotifications } from "react-icons/md";
import Link from "next/link";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";
import { useState } from "react";
import SellerNotificationsMenu from "./notifications";
export default function TopSellerNavbarSection() {
  const isSideBarOpenTest = useSellerNavbarStore(
    (state: any) => state.isSideBarOpen
  );
  const setIsSideBarOpenTest = useSellerNavbarStore(
    (state: any) => state.changeSideBarState
  );
  const { sellerLocaleStorageData } = useSellerProfileStore();
  const [isNotificationsMenuOpen, setNotificationsMenuState] = useState(false);
  return (
    <>
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              id="toggleSidebarMobile"
              aria-expanded={isSideBarOpenTest}
              aria-controls="sidebar"
              onClick={setIsSideBarOpenTest}
              className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
            >
              <svg
                id="toggleSidebarMobileHamburger"
                className={isSideBarOpenTest ? "hidden" : "w-6 h-6"}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                id="toggleSidebarMobileClose"
                className={isSideBarOpenTest ? "w-6 h-6" : "hidden"}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <a
              href="#"
              className="text-xl font-bold flex items-center lg:ml-2.5"
            >
              <img
                src="https://demo.themesberg.com/windster/images/logo.svg"
                className="h-6 mr-2"
                alt="Windster Logo"
              />
              <span className="self-center text-white whitespace-nowrap hidden lg:inline-block">
                Tuni-Auctions
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <button
              id="toggleSidebarMobileSearch"
              type="button"
              className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
            >
              <span className="sr-only">Search</span>
              {/* Search Icon */}
            </button>

            <div className="flex items-center space-x-4">
              {/* Notifications Bell */}
              <div className="relative">
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    setNotificationsMenuState(!isNotificationsMenuOpen)
                  } // Replace with actual click handler
                >
                  {sellerLocaleStorageData &&
                    sellerLocaleStorageData.notifications.filter(
                      (notification: any) => !notification.readStatus
                    ).length > 0 && (
                      <>
                        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                          <span className="text-sm font-bold">
                            {
                              sellerLocaleStorageData.notifications.filter(
                                (notification: any) => !notification.readStatus
                              ).length
                            }
                          </span>
                        </div>
                      </>
                    )}
                  <MdNotifications color="white" size={25} />
                </div>
                {isNotificationsMenuOpen && (
                  <SellerNotificationsMenu
                    sellerData={sellerLocaleStorageData}
                    setNotificationsMenuState={setNotificationsMenuState}
                  />
                )}
              </div>
              {/* Profile Picture */}
              <Link href={"/en/seller/profile"} className="relative">
                <img
                  height="40"
                  width="40"
                  className="h-10 w-10 rounded-full cursor-pointer"
                  src={sellerLocaleStorageData?.businessPicture} // Replace with actual profile picture source
                  alt="User avatar"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
