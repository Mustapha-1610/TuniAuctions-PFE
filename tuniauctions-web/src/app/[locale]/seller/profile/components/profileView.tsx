"use client";

import { useState } from "react";
import IsEditingProfile from "./editProfile";

export default function SellerProfile() {
  const [isEditing, setIsEditing] = useState<Boolean>(false);
  return (
    <>
      {isEditing ? (
        <IsEditingProfile isEditing={isEditing} setIsEditing={setIsEditing} />
      ) : (
        <>
          <div className="flex flex-col px-6 py-7 bg-white max-md:px-5">
            <div className="flex flex-col px-8 py-3 bg-white rounded-lg border-solid shadow-sm max-md:px-5 max-md:max-w-full">
              <div
                className="flex flex-col gap-5 px-6 py-5 rounded-xl border border-black border-solid max-md:pl-5 max-md:max-w-full"
                style={{
                  backgroundImage: `url('https://www.toronto.ca/wp-content/uploads/2017/07/902a-business-doing-header.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d7f516d18a5674bc080abfd86dbb7700dc72f74c0640e3ca131160052ef1a0d?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                  className="self-end w-8 aspect-square"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn1.vectorstock.com/i/1000x1000/44/70/skyscraper-logo-design-template-vector-21424470.jpg"
                  className="mt-5 border-4 border-white border-solid aspect-square w-[200px]"
                />
              </div>

              <div className="mt-6">
                <div className="mb-4 flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                    <label
                      htmlFor="stock1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      style={{ overflowWrap: "break-word" }}
                      id="stock1"
                      name="stock1"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="stock2"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="stock2"
                      name="stock2"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                    />
                  </div>
                </div>
                <div className="mb-4 flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                    <label
                      htmlFor="stock1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      style={{ overflowWrap: "break-word" }}
                      id="stock1"
                      name="stock1"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="stock2"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="stock2"
                      name="stock2"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                    />
                  </div>
                </div>
                <div className="mb-4 flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                    <label
                      htmlFor="stock1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Municipality
                    </label>
                    <input
                      type="text"
                      style={{ overflowWrap: "break-word" }}
                      id="stock1"
                      name="stock1"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="stock2"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full location
                    </label>
                    <input
                      type="text"
                      id="stock2"
                      name="stock2"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                    />
                  </div>
                </div>
              </div>

              <textarea
                className="items-start pt-5 pr-16 pb-6 pl-4 mt-2 text-sm leading-5 text-gray-700 whitespace-normal rounded-lg border border-black border-solid max-md:pr-5 max-md:pb-10 max-md:max-w-full"
                defaultValue={"Description"}
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
