"use client";
import React, { useState } from "react";
import NavigationItems from "./components/navigationItems";
import MobileNavbar from "./components/mobileNavbar";
import LoginModal from "./components/loginModal";
import SignupModal from "./components/signupModal";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { ChangeEvent } from "react";
import { useBidderNavbarState } from "@/helpers/store/bidder/bidderNavbarState";

interface Props {
  test: string;
}
function Navbar({ test }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [SignupOpen, setSignupOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];
  const locales = ["en", "fr", "ar"]; // replace with your actual locales
  const router = useRouter();
  const changeLanguage = (lang: string) => {
    const parts = pathname.split("/");
    const restOfPath = parts.slice(2).join("/");
    router.replace(`/${lang}/${restOfPath}`);
  };

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value);
  };
  const setSignupModalState = useBidderNavbarState(
    (state: any) => state.setSignupModalState
  );
  const setLoginModalState = useBidderNavbarState(
    (state: any) => state.setLoginModalState
  );
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 px-4 py-4  flex justify-between items-center bg-neutral-900 z-50">
        <div className="flex items-center">
          <a className={"text-lg text-white font-bold leading-none "} href="#">
            Tuni-Auctions
          </a>
        </div>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={toggleMenu}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul
          className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${
            isOpen ? "" : "hidden"
          }`}
        >
          <NavigationItems />
          <LoginModal />
          <SignupModal />
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
        <select
          onChange={handleLanguageChange}
          defaultValue={currentLocale}
          className="hidden ml-2 lg:inline-block py-2 px-2 bg-slate-500  text-sm text-white font-bold rounded-xl transition duration-200"
        >
          {locales.map((locale) => (
            <option key={locale} value={locale}>
              {locale}
            </option>
          ))}
        </select>
      </nav>
      <div
        className={`navbar-menu fixed top-0 left-0 right-0 overflow-y-auto z-50 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <MobileNavbar
          toggleMenu={toggleMenu}
          setOpenLogin={setOpen}
          setOpenSignup={setSignupOpen}
          locales={locales}
          currentLocale={currentLocale}
          handleLanguageChange={handleLanguageChange}
        />
      </div>
    </>
  );
}

export default Navbar;
