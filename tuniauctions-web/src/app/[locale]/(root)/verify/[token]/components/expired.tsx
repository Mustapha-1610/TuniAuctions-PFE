"use client";
import { useNavbarState } from "@/helpers/store/general/navbarState";
import { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";

interface Props {
  email: string;
}
export default function ExpiredComponent({ email }: Props) {
  const { setLoginModalState } = useNavbarState();
  const [displayedComponent, setDisplayedComponent] = useState("form");
  async function resendVerificationLink() {
    const res = await fetch("/api/bidder/sendVerificationMail", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
    const resData = await res.json();
    if (resData.success) {
      setDisplayedComponent("success");
    }
  }
  return (
    <>
      {displayedComponent === "form" ? (
        <>
          <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
            <div className="max-w-xl px-5 text-center">
              <h2 className="mb-2 text-[42px] font-bold text-zinc-800 flex items-center justify-center ml-14">
                Link Expired
                <HiMiniXMark color="red" className="ml-2 font-bold" size={60} />
              </h2>
              <p className="mb-2 text-lg text-zinc-500">
                Verification mail has expired!
              </p>
              <button
                type="button"
                onClick={() => {
                  resendVerificationLink();
                }}
                className="mt-3 inline-block w-96 rounded bg-neutral-900 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-neutral-800 cursor-pointer"
              >
                Resend Mail
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
            <div className="max-w-xl px-5 text-center">
              <h2 className="mb-2 text-[42px] font-bold text-zinc-800 flex items-center justify-center ml-14">
                Mail Sent!
                <IoCheckmarkSharp
                  color="green"
                  className="ml-2 font-bold"
                  size={50}
                />
              </h2>
              <p className="mb-2 text-lg text-zinc-500">Check Inbox</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
