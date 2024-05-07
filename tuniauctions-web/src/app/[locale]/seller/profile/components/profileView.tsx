"use client";

import React, { useState } from "react";
import IsEditingProfile from "./editProfile";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";
import { handleFirebaseImageUpload } from "@/app/[locale]/firebaseFunctions/handleUploadImage";
import { resDataType } from "@/serverHelpers/types";
import ChangeBusinessPictureModal from "./changeBusinessPictureModal";
import ChangeCoverPictureModal from "./changeCoverPictureModal";
import Image from "next/image";

export default function SellerProfile() {
  const [isEditing, setIsEditing] = useState<Boolean>(false);
  const { sellerLocaleStorageData, setSellerLocalStorageData } =
    useSellerProfileStore();
  const [isChaneBusinessPictureModalOpen, setChangeBusinessPictureModalState] =
    useState(false);
  const [isChangeCoverPictureModalOpen, setChangeCoverPictureModalState] =
    useState(false);
  async function handleImageUpload(
    e: React.ChangeEvent<HTMLInputElement>,
    imageType: string
  ) {
    const file: File | undefined = e.target.files?.[0];
    if (file) {
      const picture = await handleFirebaseImageUpload(
        file,
        "seller/sellerCoverAndProfilePictures/"
      );
      const res = await fetch("/api/seller/changePictures", {
        method: "POST",
        body: JSON.stringify({
          picture,
          imageType,
        }),
      });
      const resData: resDataType = await res.json();
      if (resData.sellerFrontData) {
        setSellerLocalStorageData(resData.sellerFrontData);
      }
    }
  }
  return (
    <>
      {isEditing ? (
        <IsEditingProfile isEditing={isEditing} setIsEditing={setIsEditing} />
      ) : (
        <>
          <div className="flex flex-col px-6 py-6 bg-white mt-12 sm:mt-0 max-md:px-5">
            <div className="flex flex-col px-8 py-3 bg-white rounded-lg border-solid shadow-sm max-md:px-5 max-md:max-w-full">
              <div
                className="flex flex-col gap-5 px-6 py-5 rounded-xl border border-black border-solid max-md:pl-5 max-md:max-w-full bg-cover"
                style={{
                  backgroundImage: `url("${sellerLocaleStorageData?.coverPicture}")`,
                  backgroundPosition: "center",
                }}
              >
                <label>
                  <Image
                    loading="lazy"
                    alt="image"
                    width={70}
                    height={70}
                    src="https://firebasestorage.googleapis.com/v0/b/tunisianauctionwebapp.appspot.com/o/DisplayImages%2F9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d.png?alt=media&token=d0e11772-d885-4925-8739-1036ac7b29d6"
                    className="self-end w-8 aspect-square cursor-pointer"
                    onClick={() => {
                      setChangeCoverPictureModalState(true);
                    }}
                  />
                </label>

                <div style={{ position: "relative", width: "200px" }}>
                  <Image
                    loading="lazy"
                    src={sellerLocaleStorageData?.businessPicture || ""}
                    className="mt-5 border-4 border-white border-solid aspect-square w-[200px]"
                    alt="Business Picture"
                    width={200}
                    height={200}
                  />
                  <label>
                    <Image
                      loading="lazy"
                      alt="image"
                      width={70}
                      height={70}
                      src="https://firebasestorage.googleapis.com/v0/b/tunisianauctionwebapp.appspot.com/o/DisplayImages%2F9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d.png?alt=media&token=d0e11772-d885-4925-8739-1036ac7b29d6"
                      className="self-end w-8 aspect-square"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setChangeBusinessPictureModalState(true);
                      }}
                    />
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-4 flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                    <label
                      htmlFor="stock1"
                      className="block text-sm  text-gray-700 font-bold"
                    >
                      Business Name :
                    </label>
                    <div
                      style={{ overflowWrap: "break-word" }}
                      id="stock1"
                      className="mt-1 p-2 w-full"
                    >
                      {sellerLocaleStorageData?.name}
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                    <label
                      htmlFor="stock1"
                      className="block text-sm  text-gray-700 font-bold"
                    >
                      Email
                    </label>
                    <div
                      style={{ overflowWrap: "break-word" }}
                      id="stock1"
                      className="mt-1 p-2 w-full"
                    >
                      {sellerLocaleStorageData?.email}
                    </div>
                  </div>
                </div>
                <div className="mb-4 flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="stock2"
                      className="block text-sm  text-gray-700 font-bold"
                    >
                      City
                    </label>
                    <div
                      style={{ overflowWrap: "break-word" }}
                      id="stock1"
                      className="mt-1 p-2 w-full"
                    >
                      {sellerLocaleStorageData?.location.city}
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                    <label
                      htmlFor="stock1"
                      className="block text-sm  text-gray-700 font-bold"
                    >
                      Municipality
                    </label>
                    <div
                      style={{ overflowWrap: "break-word" }}
                      id="stock1"
                      className="mt-1 p-2 w-full"
                    >
                      {sellerLocaleStorageData?.location.municipality}
                    </div>
                  </div>
                </div>
                <div className="mb-4 flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-2/2">
                    <label
                      htmlFor="stock2"
                      className="block text-sm  text-gray-700 font-bold"
                    >
                      Street
                    </label>
                    <div
                      style={{ overflowWrap: "break-word" }}
                      id="stock1"
                      className="mt-1 p-2 w-full"
                    >
                      {sellerLocaleStorageData?.location.street}
                    </div>
                  </div>
                </div>
              </div>
              <label
                htmlFor="stock2"
                className="block text-sm  text-gray-700 font-bold"
              >
                Description
              </label>
              <textarea
                className="items-start pt-5 pr-16 pb-6 pl-4 mt-2 text-sm leading-5 text-black whitespace-normal rounded-lg border border-black border-solid max-md:pr-5 max-md:pb-10 max-md:max-w-full"
                defaultValue={sellerLocaleStorageData?.description}
                disabled
                rows={4}
              />

              <div className="flex justify-center items-center gap-5 mt-6">
                <button
                  className="py-3 px-6 text-sm leading-6 text-white capitalize bg-black rounded-lg"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  Edit
                </button>
                <button className="py-3 px-6 text-sm leading-6 text-white capitalize bg-blue-500 rounded-lg">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {sellerLocaleStorageData && (
        <ChangeBusinessPictureModal
          businessPicture={sellerLocaleStorageData.businessPicture}
          isChaneBusinessPictureModalOpen={isChaneBusinessPictureModalOpen}
          setChangeBusinessPictureModalState={
            setChangeBusinessPictureModalState
          }
          setSellerLocalStoraData={setSellerLocalStorageData}
        />
      )}
      {sellerLocaleStorageData && (
        <ChangeCoverPictureModal
          coverPicture={sellerLocaleStorageData.coverPicture}
          isChangeCoverPictureModalOpen={isChangeCoverPictureModalOpen}
          setChangeCoverPictureModalState={setChangeCoverPictureModalState}
          setSellerLocalStoraData={setSellerLocalStorageData}
        />
      )}
    </>
  );
}
