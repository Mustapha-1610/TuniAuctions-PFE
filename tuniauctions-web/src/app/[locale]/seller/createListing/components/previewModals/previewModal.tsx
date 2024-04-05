"use client";
import { Modal } from "antd";
import {
  premiumAuctionListingPreviewType,
  pictureFiles,
  basicAuctionListingPreviewType,
  standardAuctionListingPreviewType,
} from "../types";
import ProductInformationsSection from "./components/productInformationsSection";
import PromotionalVideoAndButItNowSection from "./components/promotionalVideoAndBuyItNowSection";
import SellerPromotionSection from "./components/sellerPromotionSection";
interface Props {
  isPreviewModalOpen: boolean;
  setPreviewModalOpen: (isPreviewModalOpen: boolean) => void;
  auctionListing:
    | basicAuctionListingPreviewType
    | standardAuctionListingPreviewType
    | premiumAuctionListingPreviewType;
  picture: pictureFiles;
}

export default function PreviewModal({
  isPreviewModalOpen,
  setPreviewModalOpen,
  picture,
  auctionListing,
}: Props) {
  return (
    <>
      <>
        <Modal
          title=""
          centered
          open={isPreviewModalOpen}
          width={1650}
          footer={null}
          onCancel={() => setPreviewModalOpen(false)}
        >
          <div className="flex flex-col items-center px-20 mt-6 pt-7 pb-16 bg-white border border-black border-solid max-md:px-5">
            <ProductInformationsSection
              auctionListing={auctionListing}
              productPictures={picture.productPictures}
            />
            <PromotionalVideoAndButItNowSection
              auctionListing={auctionListing}
              promotionalImageFile={picture.promotionalPicture}
            />
            <SellerPromotionSection auctionListing={auctionListing} />
          </div>
        </Modal>
      </>
    </>
  );
}
