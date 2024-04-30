"use client";
import { AuctionListingType } from "@/models/types/auctionListing";
import PromotionalVideoAndButItNowSection from "../../bidder/auctionDetails/[id]/components/promotionalVideoAndBuyItNowSection";
import SellerPromotionSection from "../../bidder/auctionDetails/[id]/components/sellerPromotionalSection";
import { ISeller } from "@/models/usersModels/types/sellerTypes";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import AdminAuctionListingProductInformationSection from "./components/auctionListingModalComponents.tsx/AdminPromotionalSection";
import { useAdminStore } from "@/helpers/store/admin/adminStore";

export default function AdminAuctionListingModal() {
  const {
    auction,
    isUpcomingAuctionModalOpen,
    setUpcomingAucitonModalState,
    setAuction,
    seller,
  } = useAdminStore();
  return (
    <>
      <Modal
        title=""
        centered
        open={isUpcomingAuctionModalOpen}
        width={1650}
        footer={null}
        onCancel={() => (setUpcomingAucitonModalState(false), setAuction(null))}
      >
        {auction && (
          <div className="flex flex-col items-center px-20  pt-7 pb-16 bg-white  border-solid max-md:px-5">
            <div className="px-14 py-5 w-full bg-white border border-white border-solid max-w-[1540px] max-md:px-5 max-md:max-w-full">
              <AdminAuctionListingProductInformationSection
                auctionListing={auction}
              />
            </div>
            <PromotionalVideoAndButItNowSection auctionListing={auction} />
            {seller && (
              <SellerPromotionSection
                auctionListing={auction}
                sellerData={seller}
              />
            )}
          </div>
        )}
      </Modal>
    </>
  );
}
