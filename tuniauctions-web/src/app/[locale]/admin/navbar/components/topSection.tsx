"use client";
import { useSellerNavbarStore } from "@/helpers/store/sellerNavbarState";
import { MdNotifications } from "react-icons/md";
import { useAdminProfileStore } from "@/helpers/store/admin/adminProfileStore";
import { useState } from "react";
import AdminNotifications from "./notifications";
import { resDataType } from "@/serverHelpers/types";
export default function TopSellerNavbarSection() {
  const isSideBarOpenTest = useSellerNavbarStore(
    (state: any) => state.isSideBarOpen
  );
  const setIsSideBarOpenTest = useSellerNavbarStore(
    (state: any) => state.changeSideBarState
  );
  const { adminLocalStorageData, setAdminLocalStorageData } =
    useAdminProfileStore();
  const [isNotificationsMenuOpen, setIsNotificationsMenuState] =
    useState<boolean>(false);
  async function clearNotifications() {
    if (
      adminLocalStorageData!.notifications.filter(
        (notification: any) => !notification.readStatus
      ).length
    ) {
      const res = await fetch("/api/admin/clearNotifications", {
        method: "POST",
      });
      const resData: resDataType = await res.json();
      if (resData.adminAccount) {
        setAdminLocalStorageData(resData.adminAccount);
      } else if (resData.authError) {
      }
    }
  }
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
            <div className="text-xl font-bold flex items-center lg:ml-2.5">
              <span className="self-center text-black whitespace-nowrap hidden lg:inline-block">
                Admin Dashboard
              </span>
            </div>
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
                  onClick={() => (
                    setIsNotificationsMenuState(!isNotificationsMenuOpen),
                    clearNotifications()
                  )} // Replace with actual click handler
                >
                  {adminLocalStorageData &&
                    adminLocalStorageData.notifications.filter(
                      (notification: any) => !notification.readStatus
                    ).length > 0 && (
                      <>
                        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                          <span className="text-sm font-bold">
                            {
                              adminLocalStorageData.notifications.filter(
                                (notification: any) => !notification.readStatus
                              ).length
                            }
                          </span>
                        </div>
                      </>
                    )}
                  <MdNotifications color="black" size={25} />
                </div>
                {isNotificationsMenuOpen && adminLocalStorageData && (
                  <AdminNotifications
                    adminData={adminLocalStorageData}
                    setNotificationsMenuState={setIsNotificationsMenuState}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
