"use client";
import { useState } from "react";
import { useSellerNavbarStore } from "@/helpers/store/sellerNavbarState";
export default function MobileNavigation() {
  const [isEarningsDropdownOpen, setIsEarningsDropdownOpen] = useState(false);

  const toggleEarningsDropdown = () => {
    setIsEarningsDropdownOpen(!isEarningsDropdownOpen);
  };
  const isSideBarOpenTest = useSellerNavbarStore(
    (state: any) => state.isSideBarOpen
  );
  const setIsSideBarOpenTest = useSellerNavbarStore(
    (state: any) => state.changeSideBarState
  );
  return (
    <>
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-gray-900 transition-opacity ease-linear duration-300 ${
          isSideBarOpenTest ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={isSideBarOpenTest ? "false" : "true"}
        onClick={setIsSideBarOpenTest}
      ></div>
      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform ease-in-out duration-300 ${
          isSideBarOpenTest ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-4 py-2">
          <ul>
            <li>
              <a
                href="#"
                className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
              >
                <svg
                  className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={toggleEarningsDropdown}
                className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
              >
                <svg
                  className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Earnings</span>
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
                    <a
                      href="#"
                      className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                    >
                      New
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                    >
                      Old
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
