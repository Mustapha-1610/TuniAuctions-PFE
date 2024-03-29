"use client";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { TbCameraUp } from "react-icons/tb";
import { handleFirebaseImageUpload } from "./handleUploadImage";
import { resDataType } from "@/serverHelpers/types";

export default function TopSection() {
  const { bidderLocalStorageData, setBidderLocalStorageData } =
    useBidderProfileStore();
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    if (file) {
      const newPicture = await handleFirebaseImageUpload(
        file,
        "bidder/ProfilePictures"
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
          <div className="justify-center items-start py-2 pr-16 pl-3 rounded-xl bg-slate-200 max-md:pr-5">
            Personal Information
          </div>
          <div className="justify-center items-start py-2 pr-16 pl-3 mt-2 bg-white max-md:pr-5">
            Notifications
          </div>
          <div className="justify-center items-start py-2 pr-16 pl-3 mt-2 bg-white max-md:pr-5">
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
            <div className="justify-center  px-6 py-4 text-sm tracking-wide leading-5 rounded-3xl bg-slate-200 max-md:px-5">
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
