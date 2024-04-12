"use client";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { TbCameraUp } from "react-icons/tb";
import { handleFirebaseImageUpload } from "@/app/[locale]/firebaseFunctions/handleUploadImage";
import { resDataType } from "@/serverHelpers/types";
import React from "react";
import { IoMdSettings } from "react-icons/io";

interface Props {
  setSelectedProfileComponent: (
    value: "statsAndAdresses" | "notifications"
  ) => void;
  selectedProfileComponent: string;
}
export default function TopSection({
  setSelectedProfileComponent,
  selectedProfileComponent,
}: Props) {
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

  return (
    <>
      <div className="flex z-10 gap-10 justify-between items-start self-start pr-20 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-col mt-12 text-sm font-medium leading-5 whitespace-nowrap basis-0 text-neutral-900 max-md:mt-10">
          <div
            onClick={() => setSelectedProfileComponent("statsAndAdresses")}
            className={`justify-center items-start py-2 pr-16 pl-3 rounded-xl max-md:pr-5 cursor-pointer ${
              selectedProfileComponent === "statsAndAdresses"
                ? "bg-slate-200"
                : "bg-white"
            }`}
          >
            Personal Information
          </div>
          <div
            onClick={() => setSelectedProfileComponent("notifications")}
            className={`justify-center items-start py-2 pr-16 pl-3 rounded-xl max-md:pr-5 cursor-pointer ${
              selectedProfileComponent === "notifications"
                ? "bg-slate-200"
                : "bg-white"
            }`}
          >
            Notifications
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

          <div className="justify-center flex flex-rows  px-4 py-2 text-sm mt-12 tracking-wide  rounded-lg bg-slate-200 max-md:px-5 text-center cursor-pointer">
            Edit <IoMdSettings className="ml-2" size={19} />
          </div>
        </div>
      </div>
    </>
  );
}
