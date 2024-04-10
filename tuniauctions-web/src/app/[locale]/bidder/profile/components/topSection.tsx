"use client";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { TbCameraUp } from "react-icons/tb";
import { handleFirebaseImageUpload } from "@/app/[locale]/firebaseFunctions/handleUploadImage";
import { resDataType } from "@/serverHelpers/types";
import React from "react";
import BidderStatisticsAndAdresses from "./statisticsAndAdresses";
import Notifications from "./notifications";
import Transactions from "./transactions";

interface Props {
  setDisplayedComponent: (value: any) => void;
}
export default function TopSection({ setDisplayedComponent }: Props) {
  const { bidderLocalStorageData, setBidderLocalStorageData } =
    useBidderProfileStore();
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    if (file) {
      const newPicture = await handleFirebaseImageUpload(
        file,
        "bidder/ProfilePictures/"
      );
      const res = await fetch("/api/bidder/changePicture", {
        method: "POST",
        body: JSON.stringify({ newPicture }),
      });
      const resData: resDataType = await res.json();
      if (resData.success) {
        setBidderLocalStorageData(resData.bidderFrontData!);
      }
      console.log(resData);
    }
  };
  const [selectedItem, setSelectedItem] = React.useState("personalInfo");

  return (
    <>
      <div className="flex z-10 gap-10 justify-between items-start self-start pr-20 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-col mt-12 text-sm font-medium leading-5 whitespace-nowrap basis-0 text-neutral-900 max-md:mt-10">
          <div
            onClick={() => (
              setSelectedItem("personalInfo"),
              setDisplayedComponent(<BidderStatisticsAndAdresses />)
            )}
            className={`justify-center items-start py-2 pr-16 pl-3 rounded-xl max-md:pr-5 cursor-pointer ${
              selectedItem === "personalInfo" ? "bg-slate-200" : "bg-white"
            }`}
          >
            Personal Information
          </div>
          <div
            onClick={() => (
              setSelectedItem("notifications"),
              setDisplayedComponent(<Notifications />)
            )}
            className={`justify-center items-start py-2 pr-16 pl-3 rounded-xl max-md:pr-5 cursor-pointer ${
              selectedItem === "notifications" ? "bg-slate-200" : "bg-white"
            }`}
          >
            Notifications
          </div>
          <div
            onClick={() => (
              setSelectedItem("transactions"),
              setDisplayedComponent(<Transactions />)
            )}
            className={`justify-center items-start py-2 pr-16 pl-3 rounded-xl max-md:pr-5 cursor-pointer ${
              selectedItem === "transactions" ? "bg-slate-200" : "bg-white"
            }`}
          >
            Transactions
          </div>
        </div>
        <div className="relative mt-11 max-md:mt-10">
          <img
            loading="lazy"
            src={bidderLocalStorageData?.profilePicture}
            className="shrink-0 object-cover max-w-full aspect-[1] w-[200px] rounded-full"
          />
          <label className="absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer">
            <TbCameraUp size={26} />
            <input type="file" className="hidden" onChange={handleFileChange} />
          </label>
        </div>

        <div className="flex flex-col flex-1 mt-20 font-bold text-black max-md:mt-10 max-md:max-w-full">
          <div className="text-2xl leading-5 max-md:max-w-full">
            {bidderLocalStorageData?.fullName}
          </div>
          <div className="flex gap-5 justify-between mt-3 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto my-auto text-base leading-5">
              {bidderLocalStorageData?.email.toLowerCase()}
            </div>
            <div className="justify-center  px-4 py-2 text-sm tracking-wide leading-5 rounded-lg bg-slate-200 max-md:px-5 ml-24 cursor-pointer">
              Edit
            </div>
          </div>
          <div className="flex-auto my-auto text-base leading-5">
            Balance : {bidderLocalStorageData?.balance.activeBalance}$
          </div>
        </div>
      </div>
    </>
  );
}
