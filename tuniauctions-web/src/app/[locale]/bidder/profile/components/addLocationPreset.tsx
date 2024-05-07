"use state";
import { useBidderNavigationStore } from "@/helpers/store/bidder/bidderNavigationStore";
import { Modal } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import {
  addLocationSchemType,
  addLocationSchema,
} from "@/zodTypes/bidder/signup";
import { resDataType } from "@/serverHelpers/types";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import { IBidderFrontData } from "@/models/usersModels/types/bidderTypes";
import { locationPresetType } from "./statisticsAndAdresses";
interface Props {
  preset?: {
    presetName: string;
    street: string;
    phoneNumber: string;
    index: number | null;
  };
  setBidderLocalStorageData: (value: IBidderFrontData) => void;
  locationPreset: locationPresetType;
  setLocationPreset: (value: locationPresetType) => void;
}
export default function AddLocationPreset({
  preset,
  setBidderLocalStorageData,
  locationPreset,
  setLocationPreset,
}: Props) {
  const { isAddLocationPresetModalOpen, setIsAddLocationPresetModalState } =
    useBidderNavigationStore();
  //
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<addLocationSchemType>({
    resolver: zodResolver(addLocationSchema),
    defaultValues: preset && {
      presetName: preset.presetName,
      street: preset.street,
      phoneNumber: preset.phoneNumber,
    },
  });
  //
  const onSubmit: SubmitHandler<addLocationSchemType> = async (formData) => {
    try {
      const res = await fetch("/api/bidder/addLocationPreset", {
        method: "POST",
        body: JSON.stringify({
          presetName: formData.presetName,
          street: formData.street,
          phoneNumber: formData.phoneNumber,
          index: locationPreset.index,
        }),
      });
      const resData: resDataType = await res.json();
      if (resData.bidderFrontData) {
        setBidderLocalStorageData(resData.bidderFrontData);
        setLocationPreset({
          presetName: "",
          street: "",
          phoneNumber: "",
          index: null,
        });
        setIsAddLocationPresetModalState();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Modal
        title=""
        centered
        open={isAddLocationPresetModalOpen}
        width={600}
        footer={null}
        onCancel={setIsAddLocationPresetModalState}
      >
        <div className="flex flex-col bg-white">
          <div className="flex flex-col items-center justify-center flex-grow">
            <div className="flex flex-col pb-2 bg-white items-center mt-8 mx-4">
              <div className="text-center   font-bold text-lg ">
                Location Preset
              </div>
              <form
                className={`px-10 py-8 w-full max-w-xl bg-white rounded-lg sm:w-[600px]`}
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  {...register("presetName")}
                  type="text"
                  className="mt-4 px-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Name"
                />
                <input
                  {...register("phoneNumber")}
                  type="text"
                  placeholder="Phone Number"
                  className="mt-4 px-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <textarea
                  {...register("street")}
                  placeholder={"street"}
                  className="mt-4 px-4 py-2 w-full h-20 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 px-16 py-3 w-full bg-gray-800 text-white rounded-lg"
                >
                  {isSubmitting ? "Loading ..." : "Confirm"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
