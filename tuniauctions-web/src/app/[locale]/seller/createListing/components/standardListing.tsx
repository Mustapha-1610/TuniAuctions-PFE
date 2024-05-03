"use client";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {
  SocialSelectionForm,
  premiumAuctionListingPreviewType,
  pictureFiles,
  standardAuctionListingPreviewType,
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
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";
import OriginalAndStartingBiddingPriceWithMinParticipatingBiddersSection from "./components/originalAndStartingBidPricesAndMinParticipatingBidders";

export default function StandardListing() {
  const [auctionListingForm, setAuctionListingForm] =
    useState<standardAuctionListingPreviewType>({
      title: "",
      buyItNowSection: {
        promotionalDescription: "",
        promotionalPicture: "",
        storeLink: "",
      },
      guarentee: {
        length: 0,
        period: "Year(s)",
      },
      description: "",
      openingBid: 0,
      originalPrice: 0,
      productCategory: "Electronics",
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
  const [loading, setLoading] = useState(false);
  const [tip, setTip] = useState<string>();
  const { setSellerLocalStorageData, sellerLocaleStorageData } =
    useSellerProfileStore();
  //
  async function handleFormSubmission(e: any) {
    setLoading(true);
    e.preventDefault();
    let productPictures = [""];
    let promotionalPicture = "";
    if (pictureFiles.productPictures) {
      setTip("Uploading Product Pictures");
      productPictures = await handleMultipleFirebaseImageUpload(
        pictureFiles.productPictures,
        "seller/AuctionListingsProductImages/"
      );
    }
    if (pictureFiles.promotionalPicture) {
      setTip("Uploading Promotional Picture");
      promotionalPicture = await handleFirebaseImageUpload(
        pictureFiles.promotionalPicture,
        "seller/BuyItNowPromotionalPictures/"
      );
    }
    const updatedAuctionListingForm = {
      ...auctionListingForm,
      buyItNowSection: {
        ...auctionListingForm.buyItNowSection,
        promotionalPicture: promotionalPicture,
      },
      productPictures: productPictures,
    };
    setTip("Creating The Auction Listing");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SOCKET_IO_SERVER}/api/auctionListing/create/basic`,

      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          updatedAuctionListingForm,
          sellerId: sellerLocaleStorageData?._id,
          type: "Standard",
        }),

        credentials: "include",
      }
    );
    const resBody: resDataType = await res.json();
    setLoading(false);
    setTip("");
    console.log(resBody);
    if (resBody.sellerFrontData) {
      setSellerLocalStorageData(resBody.sellerFrontData);
    }
  }
  //
  return (
    <>
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
        tip={tip}
        spinning={loading}
      >
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

          <OriginalAndStartingBiddingPriceWithMinParticipatingBiddersSection
            auctionListingForm={auctionListingForm}
            setAuctionListingForm={setAuctionListingForm}
          />
          <DatePickingSection setAuctionListingForm={setAuctionListingForm} />
          <GuarenteeSection setAuctionListingForm={setAuctionListingForm} />

          <div className="mb-6">
            <button
              className="bg-blue-500 mr-2 text-white px-4 py-2 rounded-md"
              type="submit"
            >
              Create product
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
              type="button"
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
      </Spin>
    </>
  );
}
