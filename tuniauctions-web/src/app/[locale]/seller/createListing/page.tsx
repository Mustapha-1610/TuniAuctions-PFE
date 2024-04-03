"use client";
import React, { useState } from "react";
import BasicListing from "./components/basicListing";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";
import StandardListing from "./components/standardListing";
import PremiumListing from "./components/premiumListing";

export default function CreateForm() {
  const [displayedComponents, setDisplayedComponents] = useState(
    <BasicListing />
  );
  function handleComponentChange(e: any) {
    e.target.value === "Basic"
      ? setDisplayedComponents(<BasicListing />)
      : e.target.value === "Standard"
      ? setDisplayedComponents(<StandardListing />)
      : setDisplayedComponents(<PremiumListing />);
  }
  const { sellerLocaleStorageData } = useSellerProfileStore();
  return (
    <div className="flex ml-2 overflow-hidden bg-white pt-16">
      <div
        id="main-content"
        className="h-full w-11/12  relative overflow-y-auto lg:ml-64"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Add New Product
        </h2>
        <div className="flex flex-col mb-6 sm:flex-row">
          <div className="w-full sm:w-1/2 sm:mr-2">
            <label
              htmlFor="category1"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select Package
            </label>
            <select
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              onChange={handleComponentChange}
            >
              <option value="Basic">Basic</option>
              <option
                value="Standard"
                disabled={sellerLocaleStorageData?.packageCount.Standard! <= 0}
              >
                Standard ({sellerLocaleStorageData?.packageCount.Standard})
              </option>
              <option
                value="Premium"
                disabled={sellerLocaleStorageData?.packageCount.Premium! <= 0}
              >
                Premium ({sellerLocaleStorageData?.packageCount.Premium})
              </option>
            </select>
          </div>
        </div>
        {displayedComponents}
      </div>
    </div>
  );
}
