"use client";
import { useNavbarState } from "@/helpers/store/general/navbarState";
import { IoCheckmarkSharp } from "react-icons/io5";

export default function VerifiedComponent() {
  const { setLoginModalState } = useNavbarState();
  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
        <div className="max-w-xl px-5 text-center">
          <h2 className="mb-2 text-[42px] font-bold text-zinc-800 flex items-center justify-center ml-14">
            Mail Verified{" "}
            <IoCheckmarkSharp
              color="green"
              className="ml-2 font-bold"
              size={50}
            />
          </h2>
          <p className="mb-2 text-lg text-zinc-500">You Can Now Sign In</p>
          <button
            type="button"
            onClick={() => {
              setLoginModalState();
            }}
            className="mt-3 inline-block w-96 rounded bg-neutral-900 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-neutral-800 cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}
