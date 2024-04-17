"use client";
import { useBidderNavigationStore } from "@/helpers/store/bidder/bidderNavigationStore";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { BsThreeDots } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import AddLocationPreset from "./addLocationPreset";
import { useState } from "react";
import AdressPreset from "./components/adressPreset";
export type locationPresetType = {
  presetName: string;
  street: string;
  phoneNumber: string;
  index: number | null;
};
export default function StatisticsAndAdresses() {
  const { bidderLocalStorageData, setBidderLocalStorageData } =
    useBidderProfileStore();
  const { setIsAddLocationPresetModalState, isAddLocationPresetModalOpen } =
    useBidderNavigationStore();

  const [locationPreset, setLocationPreset] = useState<locationPresetType>({
    presetName: "",
    street: "",
    phoneNumber: "",
    index: null,
  });
  return (
    <>
      <div className=" mr-12 pt-12 max-w-full w-[960px] max-md:mr-2.5">
        <div className="flex flex-row flex-1 mt-6 mb-8  max-md:mt-10 max-md:max-w-full">
          <div className="text-2xl max-md:max-w-full font-bold text-black">
            Statistics
          </div>
        </div>
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow font-bold whitespace-nowrap max-md:mt-10">
              <div className="flex justify-center items-center px-16 py-10 rounded-3xl bg-slate-200 max-md:px-5">
                <div className="flex flex-col">
                  <div className="flex gap-3 flex-rows text-base text-black">
                    Upcoming Auctions <BsThreeDots size={30} />
                  </div>
                  <div className="self-center mt-4 text-5xl text-red-600 max-md:text-4xl">
                    {bidderLocalStorageData?.auctionReferences.upcoming.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow font-bold whitespace-nowrap max-md:mt-10">
              <div className="flex justify-center items-center px-16 py-10 rounded-3xl bg-slate-200 max-md:px-5">
                <div className="flex flex-col">
                  <div className="flex gap-3 flex-rows text-base text-black">
                    Pending Deliveries <MdPendingActions size={30} />
                  </div>
                  <div className="self-center mt-4 text-5xl text-red-600 max-md:text-4xl">
                    {bidderLocalStorageData?.deliveries.pending.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {bidderLocalStorageData && (
        <>
          <div className="flex justify-between pr-20 pl-4 mt-4 max-w-full w-[1062px] max-md:flex-wrap max-md:pr-5">
            <div className="text-2xl font-bold text-neutral-900">Addresses</div>
            {bidderLocalStorageData.adressPresets &&
              bidderLocalStorageData.adressPresets.length < 5 && (
                <>
                  <button
                    className="text-4xl font-medium text-neutral-900 cursor-pointer"
                    type="button"
                    disabled={bidderLocalStorageData.adressPresets.length > 5}
                    onClick={setIsAddLocationPresetModalState}
                  >
                    +
                  </button>
                </>
              )}
          </div>
          <AdressPreset
            bidderLocalStorageData={bidderLocalStorageData}
            setIsAddLocationPresetModalState={setIsAddLocationPresetModalState}
            setLocationPreset={setLocationPreset}
            setBidderLocalStorageData={setBidderLocalStorageData}
          />
        </>
      )}
      {isAddLocationPresetModalOpen && (
        <AddLocationPreset
          preset={locationPreset}
          setBidderLocalStorageData={setBidderLocalStorageData}
          locationPreset={locationPreset}
          setLocationPreset={setLocationPreset}
        />
      )}
    </>
  );
}
