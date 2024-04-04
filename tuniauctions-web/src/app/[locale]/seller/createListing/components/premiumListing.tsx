"use client";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {
  SocialSelectionForm,
  auctionListingFormType,
  pictureFiles,
} from "./types";
import PreviewModal from "./preview";
import PromotionalVideoSection from "./components/promotionalVideo";
import SocialsSection from "./components/socialsSection";
import BuyItNowSection from "./components/buyItNowSection";
import ProductCategorySection from "./components/productCategorySection";
import DatePickingSection from "./components/datePicker";
import ProductPicturesSection from "./components/productPicturesSection";

export default function PremiumListing() {
  const [socialsSectionForm, setSocialsSectionForm] =
    useState<SocialSelectionForm>({
      facebook: "",
      instagram: "",
      youtube: "",
      twitter: "",
      tiktok: "",
    });
  const [auctionListingForm, setAuctionListingForm] =
    useState<auctionListingFormType>({
      title: "",
      buyItNowSection: {
        promotionalDescription: "",
        promotionalPicture: "",
      },
      guarentee: {
        length: 0,
        period: "",
      },
      description: "",
      openingBid: 0,
      originalPrice: 0,
      participatingBidders: 0,
      productCategory: "",
      productPictures: [""],
      promotionalVideo: "",
      socialsSection: socialsSectionForm,
      startingDate: new Date(),
      minParticipatingBidders: 0,
    });

  const [isPreviewModalOpen, setPreviewModalOpen] = useState<boolean>(false);
  const [pictureFiles, setPictureFiles] = useState<pictureFiles>({
    promotionalPicture: undefined,
    productPictures: null,
  });
  function handleAuctionListingFormChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = e.target;
    setAuctionListingForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <div className="mb-6">
        <ProductCategorySection setAuctionListingForm={setAuctionListingForm} />
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mt-4"
        >
          Title
        </label>
        <input
          type="text"
          onChange={handleAuctionListingFormChange}
          name="title"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md "
        />
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={(e) => {
              setAuctionListingForm((prev) => ({
                ...prev,
                description: e.target.value,
              }));
            }}
            rows={3}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md "
          ></textarea>
        </div>
      </div>

      <div className="flex flex-col mb-6 sm:flex-row gap-4">
        <ProductPicturesSection setPictureFiles={setPictureFiles} />
        <PromotionalVideoSection
          videoLength={60}
          setAuctionListingForm={setAuctionListingForm}
        />
      </div>
      <BuyItNowSection
        setAuctionListingForm={setAuctionListingForm}
        setPictureFiles={setPictureFiles}
      />

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
          <label
            htmlFor="stock1"
            className="block text-sm font-medium text-gray-700"
          >
            Original Price
          </label>
          <input
            type="text"
            id="stock1"
            name="originalPrice"
            onChange={handleAuctionListingFormChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md "
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label
            htmlFor="stock2"
            className="block text-sm font-medium text-gray-700"
          >
            Opening Bid
          </label>
          <input
            type="text"
            id="stock2"
            name="openingBid"
            onChange={handleAuctionListingFormChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md "
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="regularPrice"
          className="block text-sm font-medium text-gray-700"
        >
          Minimum Participating Bidders
        </label>
        <input
          type="text"
          id="regularPrice"
          name="minParticipatingBidders"
          value={auctionListingForm.minParticipatingBidders}
          className="mt-1 p-2 w-52 border border-gray-300 rounded-md "
          onChange={handleAuctionListingFormChange}
        />
      </div>
      <DatePickingSection setAuctionListingForm={setAuctionListingForm} />
      <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
        <label
          htmlFor="guarantee"
          className="block text-sm font-medium text-gray-700"
        >
          Guarantee
        </label>
        <div className="flex mt-1">
          <input
            type="number"
            placeholder="Guanretee Length"
            min="0"
            onBlur={(e) => {
              setAuctionListingForm((previous) => ({
                ...previous,
                guarentee: {
                  ...previous.guarentee,
                  length: parseInt(e.target.value),
                },
              }));
            }}
            className="p-2 w-22 border border-gray-300 rounded-md mr-1"
          />
          <select
            className="p-2 border border-gray-300 rounded-md"
            onBlur={(e) => {
              setAuctionListingForm((previous) => ({
                ...previous,
                guarentee: {
                  ...previous.guarentee,
                  period: e.target.value,
                },
              }));
            }}
          >
            <option value="Years">Years</option>
            <option value="Months">Months</option>
          </select>
        </div>
      </div>
      <SocialsSection
        setSocialsSectionForm={setSocialsSectionForm}
        socialsSectionForm={socialsSectionForm}
        setAuctionListingForm={setAuctionListingForm}
      />

      <div className="mb-6">
        <button className="bg-blue-500 mr-2 text-white px-4 py-2 rounded-md">
          Save product
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
          onClick={() => setPreviewModalOpen(true)}
        >
          Preview listing
        </button>
      </div>
      {isPreviewModalOpen && (
        <PreviewModal
          isPreviewModalOpen={isPreviewModalOpen}
          setPreviewModalOpen={setPreviewModalOpen}
          auctionListing={auctionListingForm}
          picture={pictureFiles}
        />
      )}
    </>
  );
}
