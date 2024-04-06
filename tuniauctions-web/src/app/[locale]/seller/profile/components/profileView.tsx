"use client";

import React, { useState } from "react";
import IsEditingProfile from "./editProfile";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";
import { handleFirebaseImageUpload } from "@/app/[locale]/firebaseFunctions/handleUploadImage";
import { resDataType } from "@/serverHelpers/types";

export default function SellerProfile() {
  const [isEditing, setIsEditing] = useState<Boolean>(false);
  const { sellerLocaleStorageData, setSellerLocalStorageData } =
    useSellerProfileStore();
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
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                    className="self-end w-8 aspect-square cursor-pointer"
                  />
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      handleImageUpload(e, "cover");
                    }}
                  />
                </label>

                <div style={{ position: "relative", width: "200px" }}>
                  <img
                    loading="lazy"
                    srcSet={sellerLocaleStorageData?.businessPicture}
                    className="mt-5 border-4 border-white border-solid aspect-square w-[200px]"
                  />
                  <label>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                      className="self-end w-8 aspect-square"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        cursor: "pointer",
                      }}
                    />
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        handleImageUpload(e, "profile");
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
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="stock2"
                      className="block text-sm  text-gray-700 font-bold"
                    >
                      Phone Number
                    </label>
                    <div
                      style={{ overflowWrap: "break-word" }}
                      id="stock1"
                      className="mt-1 p-2 w-full"
                    >
                      phoneNumber
                    </div>
                  </div>
                </div>
                <div className="mb-4 flex flex-col sm:flex-row gap-4">
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
                </div>
                <div className="mb-4 flex flex-col sm:flex-row gap-4">
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
                  <div className="w-full sm:w-1/2">
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
    </>
  );
}
