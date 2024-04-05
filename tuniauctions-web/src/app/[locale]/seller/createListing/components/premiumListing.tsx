"use client";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {
  SocialSelectionForm,
  premiumAuctionListingPreviewType,
  pictureFiles,
} from "./types";
import PromotionalVideoSection from "./components/promotionalVideo";
import SocialsSection from "./components/socialsSection";
import BuyItNowSection from "./components/buyItNowSection";
import ProductCategorySection from "./components/productCategorySection";
import DatePickingSection from "./components/datePicker";
import ProductPicturesSection from "./components/productPicturesSection";
import TitleAndDescriptionSection from "./components/titleAndDescriptionSection";
import GuarenteeSection from "./components/guarenteeSection";
import PreviewModal from "./previewModals/previewModal";
import { resDataType } from "@/serverHelpers/types";
import {
  handleFirebaseImageUpload,
  handleMultipleFirebaseImageUpload,
} from "@/app/[locale]/firebaseFunctions/handleUploadImage";

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
    useState<premiumAuctionListingPreviewType>({
      title: "",
      buyItNowSection: {
        promotionalDescription: "",
        promotionalPicture: "",
        storeLink: "",
      },
      guarentee: {
        length: 0,
        period: "",
      },
      description: "",
      openingBid: 0,
      originalPrice: 0,
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
  async function handleAuctionCreation() {
    const res = await fetch("/api/seller/createAuctionListing/premium", {
      method: "POST",
      body: JSON.stringify(auctionListingForm),
    });
    const resBody: resDataType = await res.json();
    console.log(resBody);
    if (resBody.sellerFrontData) {
    }
  }
  async function handleFormSubmission(e: any) {
    e.preventDefault();
    let productPictures = [""];
    let promotionalPicture = "";
    if (pictureFiles.productPictures) {
      productPictures = await handleMultipleFirebaseImageUpload(
        pictureFiles.productPictures,
        "seller/AuctionListingsProductImages"
      );
    }
    if (pictureFiles.promotionalPicture) {
      promotionalPicture = await handleFirebaseImageUpload(
        pictureFiles.promotionalPicture,
        "seller/BuyItNowPromotionalPictures"
      );
    }
    setAuctionListingForm((prev) => ({
      ...prev,
      buyItNowSection: {
        ...prev.buyItNowSection,
        promotionalPicture: promotionalPicture,
      },
      productPictures: productPictures,
    }));
    await handleAuctionCreation();
  }
  return (
    <>
      <form onSubmit={handleFormSubmission}>
        <div className="mb-6">
          <ProductCategorySection
            setAuctionListingForm={setAuctionListingForm}
          />
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
              onChange={(e) => {
                setAuctionListingForm((prev) => ({
                  ...prev,
                  originalPrice: parseInt(e.target.value),
                }));
              }}
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
              onChange={(e) => {
                setAuctionListingForm((prev) => ({
                  ...prev,
                  openingBid: parseInt(e.target.value),
                }));
              }}
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
            onChange={(e) => {
              setAuctionListingForm((prev) => ({
                ...prev,
                minParticipatingBidders: parseInt(e.target.value),
              }));
            }}
          />
        </div>
        <DatePickingSection setAuctionListingForm={setAuctionListingForm} />
        <GuarenteeSection setAuctionListingForm={setAuctionListingForm} />
        <SocialsSection
          setSocialsSectionForm={setSocialsSectionForm}
          socialsSectionForm={socialsSectionForm}
          setAuctionListingForm={setAuctionListingForm}
        />

        <div className="mb-6">
          <button
            className="bg-blue-500 mr-2 text-white px-4 py-2 rounded-md"
            type="submit"
          >
            Create product
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
      </form>
    </>
  );
}
