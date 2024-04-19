import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { locationPresetType } from "../../../profile/components/statisticsAndAdresses";
import { locationPeset } from "../page";

interface Props {
  setLocationPreset: (value: locationPeset) => void;
}
export default function LocationPresets({ setLocationPreset }: Props) {
  const { bidderLocalStorageData } = useBidderProfileStore();
  return (
    <>
      {bidderLocalStorageData &&
        bidderLocalStorageData?.adressPresets.map((value, index) => {
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
                  <input
                    type="radio"
                    name="locationPreset"
                    onChange={() => {
                      setLocationPreset({
                        phoneNumber: value.phoneNumber,
                        street: value.street,
                      });
                    }}
                  />
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </>
  );
}
