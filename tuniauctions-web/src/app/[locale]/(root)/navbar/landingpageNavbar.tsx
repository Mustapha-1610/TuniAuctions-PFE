"use client";
import React from "react";
import NavigationItems from "./components/navigationItems";
import MobileNavbar from "./components/mobileNavbar";
import LoginModal from "./components/loginModal";
import SignupModal from "./components/signupModal";
import { useNavbarState } from "@/helpers/store/general/navbarState";
import LanguageChanger from "./components/languageChanger";
import { useBidderNavbarState } from "@/helpers/store/bidder/bidderNavbarStore";
import UnautherizedModal from "../../bidder/navbar/components/components/unautherizedModal";

function Navbar() {
  const {
    setSignupModalState,
    setLoginModalState,
    setMobileMenuState,
    isMobileMenuOpen,
    isLoginModalOpen,
    isSignupModalOpen,
  } = useNavbarState();
  const { isAnautherizedModalOpen } = useBidderNavbarState();
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 px-4 py-4 flex justify-between items-center bg-neutral-900 z-50">
        <div className="flex items-center lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={setMobileMenuState}
          >
            <svg
              className="block h-4 w-4 fill-current text-white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title className="text-white">Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex items-center">
          <a className={"text-lg text-white font-bold leading-none "} href="#">
            Tuni-Auctions
          </a>
        </div>
        <ul
          className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
        >
          <NavigationItems />
          {isLoginModalOpen && <LoginModal />}
          {isSignupModalOpen && <SignupModal />}
        </ul>
        <button
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-300 hover:bg-gray-100 text-sm text-black font-bold  rounded-xl transition duration-200"
          onClick={setLoginModalState}
        >
          Sign In
        </button>

        <button
          className="hidden lg:inline-block py-2 px-6 bg-slate-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
          onClick={setSignupModalState}
        >
          Sign up
        </button>
        <LanguageChanger className="block ml-1 lg:inline-block py-2  bg-neutral-900 text-sm text-white font-bold transition duration-200" />
        {isAnautherizedModalOpen && <UnautherizedModal />}
      </nav>
      <div
        className={`navbar-menu fixed top-0 left-0 right-0 overflow-y-auto z-50 ${
          isMobileMenuOpen ? "" : "hidden"
        }`}
      >
        {isMobileMenuOpen && <MobileNavbar />}*
        {isAnautherizedModalOpen && <UnautherizedModal />}
      </div>
    </>
  );
}

export default Navbar;
