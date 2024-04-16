import { IBidderFrontData } from "@/models/usersModels/types/bidderTypes";
import { locationPresetType } from "../statisticsAndAdresses";
import React from "react";
import { resDataType } from "@/serverHelpers/types";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

interface Props {
  bidderLocalStorageData: IBidderFrontData | null;
  setLocationPreset: (value: locationPresetType) => void;
  setIsAddLocationPresetModalState: () => void;
  setBidderLocalStorageData: (value: IBidderFrontData) => void;
}
export default function AdressPreset({
  bidderLocalStorageData,
  setIsAddLocationPresetModalState,
  setLocationPreset,
  setBidderLocalStorageData,
}: Props) {
  async function deletePreset(index: number, e: any) {
    e.preventDefault();
    const res = await fetch("/api/bidder/deleteLocationPreset", {
      method: "PUT",
      body: JSON.stringify(index),
    });
    const resData: resDataType = await res.json();
    if (resData.bidderFrontData) {
      setBidderLocalStorageData(resData.bidderFrontData);
    }
  }
  return (
    <>
      {bidderLocalStorageData &&
        bidderLocalStorageData.adressPresets.map((value, index) => {
          return (
            <React.Fragment key={index}>
              <div className="flex gap-5 justify-between py-3 pr-20 pl-4 mt-4 max-w-full bg-slate-200 w-[1062px] max-md:flex-wrap max-md:pr-5">
                <div className="flex gap-4 pr-20 max-md:flex-wrap">
                  <div className="flex justify-center items-center px-3 w-12 h-12 rounded-lg bg-slate-200">
                    <SlLocationPin
                      color="black"
                      className="w-6 aspect-square"
                      size={30}
                    />
                  </div>
                  <div className="flex flex-col justify-center my-auto whitespace-nowrap leading-[150%]">
                    <div className="text-base font-medium text-neutral-900">
                      {value.presetName}
                    </div>
                    <div className="text-sm text-slate-500">
                      {value.street}, {value.phoneNumber}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end px-7 py-1.5 my-auto text-sm font-medium leading-5 whitespace-nowrap rounded-xl bg-slate-200 text-neutral-900 max-md:px-5">
                  <div
                    className="justify-center bg-slate-200 cursor-pointer mr-2"
                    onClick={() => {
                      setLocationPreset({
                        presetName: value.presetName,
                        index,
                        phoneNumber: value.phoneNumber,
                        street: value.street,
                      }),
                        setIsAddLocationPresetModalState();
                    }}
                  >
                    <MdModeEditOutline size={17} />
                  </div>
                  <div
                    className="justify-center bg-slate-200 cursor-pointer"
                    onClick={(e) => {
                      deletePreset(index, e);
                    }}
                  >
                    <MdDelete size={17} />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </>
  );
}
