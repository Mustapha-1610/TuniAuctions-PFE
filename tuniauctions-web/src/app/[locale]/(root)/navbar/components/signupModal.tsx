"use client";

import { Modal } from "antd";
import { useState } from "react";

import { useBidderNavbarState } from "@/helpers/store/bidder/bidderNavbarState";

import SellerSignupForm from "./components/sellerSignupModal";
import BidderSignupForm from "./components/bidderSignupModal";
import { useTranslations } from "next-intl";
export default function SignupModal() {
  const [formType, setFormType] = useState("bidder");

  const { isSignupModalOpen, setSignupModalState, setLoginModalState } =
    useBidderNavbarState();
  const signupText = useTranslations("signupModal");

  return (
    <>
      <Modal
        title=""
        centered
        open={isSignupModalOpen}
        width={600}
        footer={null}
        onCancel={setSignupModalState}
      >
        <div className="flex flex-col bg-white">
          <div className="flex flex-col items-center justify-center flex-grow">
            <div className="flex flex-col pb-2 bg-white items-center mt-8 mx-4">
              <div className="text-center  mb-4 font-bold text-lg ">
                {signupText("signupText")}
              </div>

              <div className="flex space-x-2">
                <button
                  className={`px-6 text-lg font-medium rounded-md transition-all duration-150 ease-in-out ${
                    formType === "bidder"
                      ? "bg-gray-800 text-white shadow-md"
                      : "bg-white text-black border border-black"
                  }`}
                  onClick={() => setFormType("bidder")}
                >
                  {signupText("bidderText")}
                </button>
                <button
                  className={`px-6 py-2 text-lg font-medium rounded-md transition-all duration-150 ease-in-out ${
                    formType === "seller"
                      ? "bg-gray-800 text-white shadow-md"
                      : "bg-white text-black border border-black"
                  }`}
                  onClick={() => setFormType("seller")}
                >
                  {signupText("sellerText")}
                </button>
              </div>

              {formType === "seller" ? (
                <SellerSignupForm />
              ) : (
                <BidderSignupForm />
              )}
              <div className=" text-sm text-gray-500">
                {signupText("haveAnAccount")}
                <span className="text-blue-500 ml-1 cursor-pointer">
                  <u
                    onClick={() => (
                      setSignupModalState(), setLoginModalState()
                    )}
                  >
                    {signupText("signinText")}
                  </u>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
