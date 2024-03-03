"use client";
import NavigationSection from "./components/navigationSection";
import { useState } from "react";
import TopSellerNavbarSection from "./components/topSection";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEarningsDropdownOpen, setIsEarningsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleEarningsDropdown = () => {
    setIsEarningsDropdownOpen(!isEarningsDropdownOpen);
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
        <TopSellerNavbarSection
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      </nav>
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-gray-900 transition-opacity ease-linear duration-300 ${
          isSidebarOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={isSidebarOpen ? "false" : "true"}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform ease-in-out duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <a href="#" className="text-xl font-bold flex items-center">
            <img
              src="https://demo.themesberg.com/windster/images/logo.svg"
              className="h-6 mr-2"
              alt="Windster Logo"
            />
            <span className="self-center whitespace-nowrap">Windster</span>
          </a>
          <button
            id="toggleSidebarMobileClose"
            className="text-white lg:hidden focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
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
        </div>
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
      <div className="hidden lg:flex overflow-hidden bg-white lg:flex lg:flex-row-reverse">
        <div
          className={`lg:w-64 bg-white text-white p-4 ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        >
          <ul>
            <li>
              <a
                href="#"
                className="text-base text-gray-100 font-normal rounded-lg hover:bg-gray-800 flex items-center p-2 group"
              >
                <svg
                  className="w-6 h-6 text-gray-300 flex-shrink-0 group-hover:text-gray-200 transition duration-75"
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
                className="text-base text-gray-100 font-normal rounded-lg hover:bg-gray-800 flex items-center p-2 group"
              >
                <svg
                  className="w-6 h-6 text-gray-300 flex-shrink-0 group-hover:text-gray-200 transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <span className="ml-3 flex-1 whitespace-nowrap">Earnings</span>
                <svg
                  className="w-4 h-4 ml-auto text-gray-300 transform group-hover:-rotate-180 transition duration-150"
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
                      className="text-base text-gray-100 font-normal rounded-lg hover:bg-gray-800 flex items-center p-2 group"
                    >
                      New
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-100 font-normal rounded-lg hover:bg-gray-800 flex items-center p-2 group"
                    >
                      Old
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className="flex-grow p-4">
          <NavigationSection />
        </div>
      </div>
    </>
  );
};

export default Navbar;
