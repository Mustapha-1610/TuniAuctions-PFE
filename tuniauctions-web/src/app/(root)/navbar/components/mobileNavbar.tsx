"use client";
import Link from "next/link";
import { useState } from "react";
interface ChildProps {
  toggleMenu: () => void;
  setOpenLogin: (open: boolean) => void;
  setOpenSignup: (open: boolean) => void;
}
export default function MobileNavbar({
  toggleMenu,
  setOpenLogin,
  setOpenSignup,
}: ChildProps) {
  return (
    <>
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav className="sticky top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <a className="mr-auto text-3xl font-bold leading-none" href="#">
            <svg className="h-12" viewBox="0 0 10240 10240"></svg>
          </a>
          <button className="navbar-close" onClick={toggleMenu}>
            <svg
              className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
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
            <li className="mb-1" onClick={toggleMenu}>
              <Link
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="mb-1" onClick={toggleMenu}>
              <Link
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                href="/auctions"
              >
                Auctions
              </Link>
            </li>
            <li className="mb-1" onClick={toggleMenu}>
              <Link
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                href="/aboutus"
              >
                About us
              </Link>
            </li>
            <li className="mb-1" onClick={toggleMenu}>
              <Link
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                href="/howitworks"
              >
                How It Works
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-auto">
          <div className="pt-6">
            <button
              onClick={() => (toggleMenu(), setOpenLogin(true))}
              className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
            >
              Sign in
            </button>
            <button
              onClick={() => (toggleMenu(), setOpenSignup(true))}
              className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
