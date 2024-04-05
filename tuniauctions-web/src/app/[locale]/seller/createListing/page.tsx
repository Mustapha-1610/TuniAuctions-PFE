"use client";
import React, { useState, useEffect } from "react";
import BasicListing from "./components/basicListing";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";
import StandardListing from "./components/standardListing";
import PremiumListing from "./components/premiumListing";

export default function CreateForm() {
  const { sellerLocaleStorageData } = useSellerProfileStore();
  const [selectedPackage, setSelectedPackage] = useState("Basic");
  const [displayedComponents, setDisplayedComponents] = useState(
    <BasicListing />
  );

  useEffect(() => {
    if (
      selectedPackage !== "Basic" &&
      sellerLocaleStorageData?.packageCount[selectedPackage]! <= 0
    ) {
      setSelectedPackage("Basic");
      setDisplayedComponents(<BasicListing />);
    }
  }, [sellerLocaleStorageData, selectedPackage]);

  function handleComponentChange(e: any) {
    const selectedValue = e.target.value;
    setSelectedPackage(selectedValue);
    if (sellerLocaleStorageData?.packageCount[selectedValue]! > 0) {
      switch (selectedValue) {
        case "Standard":
          setDisplayedComponents(<StandardListing />);
          break;
        case "Premium":
          setDisplayedComponents(<PremiumListing />);
          break;
        default:
          setDisplayedComponents(<BasicListing />);
      }
    } else {
      setSelectedPackage("Basic");
      setDisplayedComponents(<BasicListing />);
    }
  }

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
              value={selectedPackage}
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
