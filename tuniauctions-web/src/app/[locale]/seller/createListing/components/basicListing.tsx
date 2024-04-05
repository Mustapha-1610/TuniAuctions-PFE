"use client";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { pictureFiles, basicAuctionListingPreviewType } from "./types";
import PromotionalVideoSection from "./components/promotionalVideo";
import ProductCategorySection from "./components/productCategorySection";
import DatePickingSection from "./components/datePicker";
import ProductPicturesSection from "./components/productPicturesSection";
import TitleAndDescriptionSection from "./components/titleAndDescriptionSection";
import GuarenteeSection from "./components/guarenteeSection";
import PreviewModal from "./previewModals/previewModal";

export default function BasicListing() {
  const [auctionListingForm, setAuctionListingForm] =
    useState<basicAuctionListingPreviewType>({
      title: "",
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
        <TitleAndDescriptionSection
          handleAuctionListingFormChange={handleAuctionListingFormChange}
          setAuctionListingForm={setAuctionListingForm}
        />
      </div>

      <div className="flex flex-col mb-6 sm:flex-row gap-4">
        <ProductPicturesSection
          setPictureFiles={setPictureFiles}
          auctionListing={auctionListingForm}
        />
        <PromotionalVideoSection
          videoLength={30}
          setAuctionListingForm={setAuctionListingForm}
        />
      </div>

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
      <GuarenteeSection setAuctionListingForm={setAuctionListingForm} />

      <div className="mb-6 mt-6">
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
