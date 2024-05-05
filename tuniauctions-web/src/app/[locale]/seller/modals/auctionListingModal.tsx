"use client";
import { AuctionListingType } from "@/models/types/auctionListing";
import PromotionalVideoAndButItNowSection from "../../bidder/auctionDetails/[id]/components/promotionalVideoAndBuyItNowSection";
import SellerPromotionSection from "../../bidder/auctionDetails/[id]/components/sellerPromotionalSection";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import AdminAuctionListingProductInformationSection from "../../admin/modals/components/auctionListingModalComponents.tsx/AdminPromotionalSection";
import { useAdminStore } from "@/helpers/store/admin/adminStore";
import FinishedAuctionDisplay from "../../bidder/auctionDetails/[id]/components/finishedAuction";
import { useSellerStore } from "@/helpers/store/seller/sellerStore";
import { useSellerProfileStore } from "@/helpers/store/seller/sellerProfileStore";

export default function SellerAuctionListingModal() {
  const {
    isUpcomingAuctionModalOpen,
    setUpcomingAucitonModalState,
    setAuction,
    auction,
  } = useSellerStore();
  const { sellerLocaleStorageData } = useSellerProfileStore();
  return (
    <>
      <Modal
        title=""
        centered
        open={isUpcomingAuctionModalOpen}
        className="mt-2"
        width={1700}
        footer={null}
        onCancel={() => (setUpcomingAucitonModalState(false), setAuction(null))}
      >
        {auction && (
          <div className="flex flex-col items-center px-20  pt-7 pb-16 bg-white  border-solid max-md:px-5">
            <div className="px-14 py-5 w-full bg-white border border-white border-solid max-w-[1540px] max-md:px-5 max-md:max-w-full">
              {auction.status === "Finished" ? (
                <FinishedAuctionDisplay auctionListing={auction} />
              ) : (
                <AdminAuctionListingProductInformationSection
                  auctionListing={auction}
                />
              )}
            </div>
            <PromotionalVideoAndButItNowSection auctionListing={auction} />
            {sellerLocaleStorageData && (
              <SellerPromotionSection
                auctionListing={auction}
                sellerData={sellerLocaleStorageData}
              />
            )}
          </div>
        )}
      </Modal>
    </>
  );
}
