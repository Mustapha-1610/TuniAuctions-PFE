"use client";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {
  SocialSelectionForm,
  premiumAuctionListingPreviewType,
  pictureFiles,
  basicAuctionListingPreviewType,
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
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function BasicListing() {
  const [auctionListingForm, setAuctionListingForm] =
    useState<basicAuctionListingPreviewType>({
      title: "",
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
  const locale = useLocale();
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
  const router = useRouter();
  async function handleFormSubmission(e: any) {
    setLoading(true);
    e.preventDefault();
    let productPictures = [""];
    if (pictureFiles.productPictures) {
      setTip("Uploading Product Pictures");
      productPictures = await handleMultipleFirebaseImageUpload(
        pictureFiles.productPictures,
        "seller/AuctionListingsProductImages/"
      );
    }

    const updatedAuctionListingForm = {
      ...auctionListingForm,
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
          type: "Basic",
        }),

        credentials: "include",
      }
    );
    const resBody: resDataType = await res.json();

    setLoading(false);
    setTip("");
    if (resBody.sellerFrontData) {
      setSellerLocalStorageData(resBody.sellerFrontData);
      router.push(`/${locale}/seller/auctionListings`);
    }
  }
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
              videoLength={30}
              setAuctionListingForm={setAuctionListingForm}
            />
          </div>

          <OriginalAndStartingBiddingPriceWithMinParticipatingBiddersSection
            auctionListingForm={auctionListingForm}
            setAuctionListingForm={setAuctionListingForm}
          />
          <DatePickingSection setAuctionListingForm={setAuctionListingForm} />
          <GuarenteeSection setAuctionListingForm={setAuctionListingForm} />

          <div className="mb-6 mt-4">
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
