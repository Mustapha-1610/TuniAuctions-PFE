"use client";
import { AuctionListingType } from "@/models/types/auctionListing";
import PromotionalVideoAndButItNowSection from "../../bidder/auctionDetails/[id]/components/promotionalVideoAndBuyItNowSection";
import SellerPromotionSection from "../../bidder/auctionDetails/[id]/components/sellerPromotionalSection";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import AdminAuctionListingProductInformationSection from "./components/auctionListingModalComponents.tsx/AdminPromotionalSection";

interface Props {
  auctionListing: AuctionListingType;
  isAuctionListingModalOpen: boolean;
  setIsAuctionListingModalState: (value: boolean) => void;
  setAuctionListing: (value: AuctionListingType | undefined) => void;
}
export default function AdminAuctionListingModal({
  auctionListing,
  isAuctionListingModalOpen,
  setIsAuctionListingModalState,
  setAuctionListing,
}: Props) {
  const [sellerData, setSellerData] = useState<ISeller>();
  async function fetchSellerData() {
    const res = await fetch("/api/admin/fetchSellerData", {
      method: "POST",
      body: JSON.stringify({
        sellerId: auctionListing.sellerId,
      }),
      cache: "default",
    });
    const resData: ISeller = await res.json();
    setSellerData(resData);
  }
  useEffect(() => {
    if (auctionListing) {
      fetchSellerData();
    }
  }, [auctionListing]);
  return (
    <>
      <Modal
        title=""
        centered
        open={isAuctionListingModalOpen}
        width={1650}
        footer={null}
        onCancel={() => (
          setIsAuctionListingModalState(false), setAuctionListing(undefined)
        )}
      >
        <div className="flex flex-col items-center px-20 mt-12 pt-7 pb-16 bg-white border border-black border-solid max-md:px-5">
          <div className="px-14 py-5 w-full bg-white border border-white border-solid max-w-[1540px] max-md:px-5 max-md:max-w-full">
            <AdminAuctionListingProductInformationSection
              auctionListing={auctionListing}
            />
          </div>
          <PromotionalVideoAndButItNowSection auctionListing={auctionListing} />
          {sellerData && (
            <SellerPromotionSection
              auctionListing={auctionListing}
              sellerData={sellerData}
            />
          )}
        </div>
      </Modal>
    </>
  );
}
